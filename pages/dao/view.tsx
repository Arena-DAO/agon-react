import { Box, Container, Heading, Link, Stack } from "@chakra-ui/layout";
import { Button, Fade } from "@chakra-ui/react";
import NextLink from "next/link";
import { DAOCard } from "@components/cards/DAOCard";
import env from "@config/env";
import { CosmWasmClient, fromBinary } from "@cosmjs/cosmwasm-stargate";
import { useChain } from "@cosmos-kit/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { AddressSchema } from "~/helpers/SchemaHelpers";
import { BsYinYang } from "react-icons/bs";
import { DAOViewViewArenaModuleCard } from "@components/pages/dao/view/ViewArenaModuleCard";
import { useDaoDaoCoreGetItemQuery } from "@dao/DaoDaoCore.react-query";
import { DaoDaoCoreQueryClient } from "@dao/DaoDaoCore.client";
import { useArenaCoreQueryExtensionQuery } from "@arena/ArenaCore.react-query";
import { ArenaCoreQueryClient } from "@arena/ArenaCore.client";
import { DumpStateResponse } from "@arena/ArenaCore.types";

interface DAOViewPageInnerProps {
  cosmwasmClient: CosmWasmClient;
  dao: string;
}

function DAOViewPageInner({ dao, cosmwasmClient }: DAOViewPageInnerProps) {
  const { data: itemData } = useDaoDaoCoreGetItemQuery({
    client: new DaoDaoCoreQueryClient(cosmwasmClient, dao),
    args: { key: env.ARENA_ITEM_KEY },
  });
  const { data } = useArenaCoreQueryExtensionQuery({
    client: new ArenaCoreQueryClient(cosmwasmClient, itemData?.item!),
    args: { msg: { dump_state: {} } },
    options: { enabled: !!itemData && !!itemData.item },
  });
  const [dumpState, setDumpState] = useState<DumpStateResponse>();
  useEffect(() => {
    if (data) {
      setDumpState(data as unknown as DumpStateResponse);
    }
  }, [data]);

  return (
    <Fade in={true}>
      <Stack>
        <DAOCard
          address={dao}
          cosmwasmClient={cosmwasmClient}
          showViewLink={false}
        />
        {dumpState && (
          <Heading size="sm">
            Tax: {`${parseFloat(dumpState.tax) * 100}%`}
          </Heading>
        )}
        <Link
          ml="auto"
          as={NextLink}
          href={env.DAO_DAO_URL + "/dao/" + dao}
          _hover={{ textDecoration: "none" }}
          _focus={{ outline: "none" }}
          target="_blank"
        >
          <Button rightIcon={<BsYinYang />}>View on DAO DAO</Button>
        </Link>
        {dumpState &&
          dumpState.competition_modules.map((x) => {
            return (
              <DAOViewViewArenaModuleCard
                key={x.addr}
                dao={dao}
                module_key={x.key}
                competition_count={x.competition_count}
              />
            );
          })}
      </Stack>
    </Fade>
  );
}

export default function DAOViewPage({}) {
  const {
    query: { dao },
  } = useRouter();
  const { getCosmWasmClient } = useChain(env.CHAIN);

  const [cosmwasmClient, setCosmwasmClient] = useState<
    CosmWasmClient | undefined
  >(undefined);
  useEffect(() => {
    async function fetchClient() {
      setCosmwasmClient(await getCosmWasmClient());
    }
    fetchClient();
  }, [getCosmWasmClient]);

  return (
    <Container maxW={{ base: "full", md: "5xl" }} centerContent pb={10}>
      <Heading
        as="h1"
        fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
        fontWeight="extrabold"
        mb={3}
      >
        View DAO
      </Heading>
      <Box w="100%">
        {cosmwasmClient && AddressSchema.safeParse(dao as string).success && (
          <DAOViewPageInner
            cosmwasmClient={cosmwasmClient}
            dao={dao as string}
          />
        )}
      </Box>
    </Container>
  );
}
