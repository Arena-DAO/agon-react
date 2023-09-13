import {
  CosmWasmClient,
  ExecuteInstruction,
  toBinary,
} from "@cosmjs/cosmwasm-stargate";
import { ArenaEscrowQueryClient } from "@arena/ArenaEscrow.client";
import { useEffect, useState } from "react";
import { Button, CardHeader, Heading, Stack, useToast } from "@chakra-ui/react";
import { UserOrDAOCard } from "@components/cards/UserOrDAOCard";
import { BalanceCard } from "@components/cards/BalanceCard";
import { ExponentInfo } from "~/types/ExponentInfo";
import { useChain } from "@cosmos-kit/react-lite";
import env from "@config/env";
import {
  ArrayOfMemberBalanceVerified,
  BalanceVerified,
} from "@arena/ArenaEscrow.types";
import { ExecuteMsg as ArenaEscrowExecuteMsg } from "@arena/ArenaEscrow.types";
import { ExecuteMsg as Cw20ExecuteMsg } from "@cw-plus/Cw20Base.types";
import { ExecuteMsg as Cw721ExecuteMsg } from "@cw-nfts/Cw721Base.types";
import { CosmosMsgForEmpty } from "@dao/DaoProposalSingle.types";
import { getProposalAddr } from "~/helpers/DAOHelpers";
import { DaoProposalSingleClient } from "@dao/DaoProposalSingle.client";
import { DaoPreProposeSingleClient } from "@dao/DaoPreProposeSingle.client";

interface WagerViewDuesDisplayProps {
  cosmwasmClient: CosmWasmClient;
  escrow_addr: string;
  wager_id: string;
  notifyBalancesChanged: () => void;
  notifyIsActive: () => void;
  initial_dues?: ArrayOfMemberBalanceVerified;
}

function useAllDues(
  cosmwasmClient: CosmWasmClient,
  escrow_addr: string,
  initial_dues: ArrayOfMemberBalanceVerified = []
) {
  const [allDues, setAllDues] =
    useState<ArrayOfMemberBalanceVerified>(initial_dues);
  const [startAfter, setStartAfter] = useState<string | undefined>(
    initial_dues.length > 0
      ? initial_dues[initial_dues.length - 1]?.addr
      : undefined
  );
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    setStartAfter(
      initial_dues.length > 0
        ? initial_dues[initial_dues.length - 1]?.addr
        : undefined
    );
    setAllDues(initial_dues);
    setHasMore(true);
  }, [initial_dues]);
  useEffect(() => {
    async function fetchDues() {
      if (!hasMore) return;

      const client = new ArenaEscrowQueryClient(cosmwasmClient, escrow_addr);
      const data = await client.dues({ startAfter });

      if (data && data.length > 0) {
        setAllDues((prev) => [...prev, ...data]);
        setStartAfter(data[data.length - 1]!.addr);
      } else {
        setHasMore(false);
      }
    }

    fetchDues();
  }, [cosmwasmClient, escrow_addr, startAfter, hasMore]);

  return allDues;
}

export function WagerViewDuesDisplay({
  cosmwasmClient,
  escrow_addr,
  wager_id,
  notifyBalancesChanged,
  notifyIsActive,
  initial_dues = [],
}: WagerViewDuesDisplayProps) {
  const dues = useAllDues(cosmwasmClient, escrow_addr, initial_dues);
  const [exponentInfo, setExponentInfo] = useState<ExponentInfo>();
  const { getSigningCosmWasmClient, address } = useChain(env.CHAIN);
  const toast = useToast();

  const depositFunds = async (team_addr: string, balance: BalanceVerified) => {
    try {
      if (!address) {
        throw "Wallet is not connected";
      }
      if (!exponentInfo) {
        throw "Could not determine exponent info";
      }
      let cosmwasmClient = await getSigningCosmWasmClient();
      if (!cosmwasmClient) {
        throw "Could not get the CosmWasm client";
      }

      let msgs: ExecuteInstruction[] = [];
      if (balance.native.length > 0)
        msgs.push({
          contractAddress: escrow_addr,
          msg: {
            receive_native: {},
          } as ArenaEscrowExecuteMsg,
          funds: balance.native,
        });
      if (balance.cw20.length > 0) {
        balance.cw20.map((x) => {
          msgs.push({
            contractAddress: x.address,
            msg: {
              send: {
                amount: x.amount,
                contract: escrow_addr,
              },
            } as Cw20ExecuteMsg,
          });
        });
      }
      if (balance.cw721.length > 0) {
        balance.cw721.map((x) => {
          x.token_ids.map((token_id) => {
            msgs.push({
              contractAddress: x.addr,
              msg: {
                send_nft: {
                  contract: escrow_addr,
                  token_id,
                },
              } as Cw721ExecuteMsg,
            });
          });
        });
      }

      // If address is a wallet, just send. If address is a DAO, create a proposal to send.
      if (team_addr == address) {
        let result = await cosmwasmClient.executeMultiple(
          address,
          msgs,
          "auto"
        );

        let is_active = !!result.events.find((x) =>
          x.attributes.find((y) => y.key == "action" && y.value == "activate")
        );

        if (is_active) {
          notifyIsActive();
        }

        toast({
          status: "success",
          title: "Success",
          description: "Funds have been successfully sent to the escrow",
          isClosable: true,
        });
      } else if (team_addr.length == 63) {
        const proposalAddrResponse = await getProposalAddr(
          cosmwasmClient,
          team_addr,
          address
        );

        if (!proposalAddrResponse) {
          toast({
            status: "error",
            title: "Error",
            description: "Could not find a valid proposal module for the DAO",
            isClosable: true,
          });
          return;
        }

        const proposal_title = `Fund Wager ${wager_id}`;
        const proposal_description =
          "Send funds to the wager's escrow address.";
        let proposal_msgs = msgs.map((x) => {
          return {
            wasm: {
              execute: {
                contract_addr: x.contractAddress,
                funds: x.funds,
                msg: toBinary(x.msg),
              },
            },
          } as CosmosMsgForEmpty;
        });
        if (proposalAddrResponse.type == "proposal_module") {
          let daoProposalClient = new DaoProposalSingleClient(
            cosmwasmClient,
            address!,
            proposalAddrResponse.addr
          );

          await daoProposalClient.propose({
            title: proposal_title,
            description: proposal_description,
            msgs: proposal_msgs,
          });
        } else if (proposalAddrResponse.type == "prepropose") {
          let preProposeClient = new DaoPreProposeSingleClient(
            cosmwasmClient,
            address!,
            proposalAddrResponse.addr
          );

          await preProposeClient.propose({
            msg: {
              propose: {
                title: proposal_title,
                description: proposal_description,
                msgs: proposal_msgs,
              },
            },
          });
        }

        toast({
          status: "success",
          title: "Success",
          description:
            "A proposal to send funds has sucessfully been generated",
          isClosable: true,
        });
      }

      notifyBalancesChanged();
    } catch (e: any) {
      toast({
        status: "error",
        title: "Error",
        description: e.toString(),
        isClosable: true,
      });
    }
  };

  if (dues.length == 0) return null;

  return (
    <Stack>
      {dues?.map((x, i) => {
        return (
          <BalanceCard
            key={i}
            header={
              <CardHeader>
                <Heading size="md">Team {i + 1}</Heading>
              </CardHeader>
            }
            cosmwasmClient={cosmwasmClient}
            addrCard={
              <UserOrDAOCard cosmwasmClient={cosmwasmClient} address={x.addr} />
            }
            balance={x.balance}
            variant={"outline"}
            onDataLoaded={setExponentInfo}
            actions={
              (address == x.addr || x.addr.length == 63) && (
                <Button onClick={() => depositFunds(x.addr, x.balance)}>
                  Deposit
                </Button>
              )
            }
          />
        );
      })}
    </Stack>
  );
}
