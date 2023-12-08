import { CosmWasmClient, ExecuteInstruction } from "@cosmjs/cosmwasm-stargate";
import { DuesDisplay } from "./DuesDisplay";
import { useChain } from "@cosmos-kit/react";
import env from "@config/env";
import { useEffect, useState } from "react";
import { CompetitionStatus } from "@arena/ArenaWagerModule.types";
import { useArenaEscrowDumpStateQuery } from "@arena/ArenaEscrow.react-query";
import {
  ArenaEscrowClient,
  ArenaEscrowQueryClient,
} from "@arena/ArenaEscrow.client";
import {
  Button,
  CardHeader,
  Heading,
  SimpleGrid,
  Skeleton,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { BalanceCard } from "@components/cards/BalanceCard";
import { ExecuteMsg as ArenaEscrowExecuteMsg } from "@arena/ArenaEscrow.types";
import { ExecuteMsg as Cw20ExecuteMsg } from "@cw-plus/Cw20Base.types";
import { ExecuteMsg as Cw721ExecuteMsg } from "@cw-nfts/Cw721Base.types";

interface EscrowDisplayProps {
  cosmwasmClient: CosmWasmClient;
  escrow_addr: string;
  wager_status: CompetitionStatus;
  notifyIsActive: () => void;
}

export function EscrowDisplay({
  cosmwasmClient,
  escrow_addr,
  wager_status,
  notifyIsActive,
}: EscrowDisplayProps) {
  const { address, getSigningCosmWasmClient } = useChain(env.CHAIN);
  const [balanceChanged, setBalanceChanged] = useState<number>(0);
  const { data, isLoading, refetch } = useArenaEscrowDumpStateQuery({
    client: new ArenaEscrowQueryClient(cosmwasmClient, escrow_addr),
    args: { addr: address },
  });
  const toast = useToast();

  useEffect(() => {
    refetch();
  }, [balanceChanged, refetch]);

  const withdrawFunds = async () => {
    try {
      let cosmwasmClient = await getSigningCosmWasmClient();
      if (!cosmwasmClient) {
        throw "Could not get the CosmWasm client";
      }
      if (!address) {
        throw "Could not get user address";
      }

      const arenaEscrowClient = new ArenaEscrowClient(
        cosmwasmClient,
        address,
        escrow_addr
      );

      await arenaEscrowClient.withdraw({});
      toast({
        title: "Success",
        status: "success",
        description: "The funds have been successfully withdrawn",
        isClosable: true,
      });
      await refetch();
      setBalanceChanged((x) => x + 1);
    } catch (e: any) {
      toast({
        status: "error",
        title: "Error",
        description: e.toString(),
        isClosable: true,
      });
    }
  };

  const depositFunds = async () => {
    try {
      if (!data) {
        throw "Data has not loaded yet";
      }
      if (!data.due) {
        throw "User has none due";
      }
      if (!address) {
        throw "Wallet is not connected";
      }
      let cosmwasmClient = await getSigningCosmWasmClient();
      if (!cosmwasmClient) {
        throw "Could not get the CosmWasm client";
      }

      let msgs: ExecuteInstruction[] = [];
      if (data.due.native.length > 0)
        msgs.push({
          contractAddress: escrow_addr,
          msg: {
            receive_native: {},
          } as ArenaEscrowExecuteMsg,
          funds: data.due.native,
        });
      data.due.cw20.map((x) => {
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
      data.due.cw721.map((x) => {
        x.token_ids.map((token_id) => {
          msgs.push({
            contractAddress: x.address,
            msg: {
              send_nft: {
                contract: escrow_addr,
                token_id,
              },
            } as Cw721ExecuteMsg,
          });
        });
      });

      let result = await cosmwasmClient.executeMultiple(address, msgs, "auto");

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

      setBalanceChanged((x) => x + 1);
    } catch (e: any) {
      toast({
        status: "error",
        title: "Error",
        description: e.toString(),
        isClosable: true,
      });
    }
  };

  return (
    <Skeleton isLoaded={!isLoading}>
      {data && (
        <Stack>
          <SimpleGrid>
            {data.balance && (
              <BalanceCard
                header={
                  <CardHeader>
                    <Heading size="md">User Balance</Heading>
                  </CardHeader>
                }
                variant={"outline"}
                cosmwasmClient={cosmwasmClient}
                balance={data.balance}
                actions={
                  wager_status !== "active" &&
                  wager_status !== "jailed" && (
                    <Button onClick={withdrawFunds}>Withdraw</Button>
                  )
                }
              />
            )}
            {data.due && (
              <BalanceCard
                header={
                  <CardHeader>
                    <Heading size="md">User Due</Heading>
                  </CardHeader>
                }
                variant={"outline"}
                cosmwasmClient={cosmwasmClient}
                balance={data.due}
                actions={<Button onClick={depositFunds}>Deposit</Button>}
              />
            )}
          </SimpleGrid>
          <DuesDisplay
            cosmwasmClient={cosmwasmClient}
            escrow_addr={escrow_addr}
            balanceChanged={balanceChanged}
          />
          {data.total_balance && (
            <BalanceCard
              header={
                <CardHeader>
                  <Heading size="md">Total Balance</Heading>
                </CardHeader>
              }
              variant={"outline"}
              cosmwasmClient={cosmwasmClient}
              balance={data.total_balance}
            />
          )}
        </Stack>
      )}
    </Skeleton>
  );
}
