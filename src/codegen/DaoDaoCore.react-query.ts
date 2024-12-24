/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.12.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { CosmosMsgForEmpty, BankMsg, Uint128, StakingMsg, DistributionMsg, Binary, IbcMsg, Timestamp, Uint64, WasmMsg, GovMsg, VoteOption, Decimal, Admin, InstantiateMsg, Coin, Empty, IbcTimeout, IbcTimeoutBlock, WeightedVoteOption, InitialItem, ModuleInstantiateInfo, ExecuteMsg, Duration, Cw20ReceiveMsg, Cw721ReceiveMsg, Config, SubDao, QueryMsg, MigrateMsg, PreProposeInfo, MigrateParams, MigrateV1ToV2, MigrationModuleParams, ProposalParams, V1CodeIds, V2CodeIds, Addr, ProposalModuleStatus, ArrayOfProposalModule, ProposalModule, AdminNominationResponse, ArrayOfCw20BalanceResponse, Cw20BalanceResponse, ArrayOfAddr, DaoURIResponse, PauseInfoResponse, Expiration, DumpStateResponse, ContractVersion, GetItemResponse, InfoResponse, ArrayOfTupleOfStringAndString, ArrayOfSubDao, ProposalModuleCountResponse, TotalPowerAtHeightResponse, VotingPowerAtHeightResponse } from "./DaoDaoCore.types";
import { DaoDaoCoreQueryClient, DaoDaoCoreClient } from "./DaoDaoCore.client";
export const daoDaoCoreQueryKeys = {
  contract: ([{
    contract: "daoDaoCore"
  }] as const),
  address: (contractAddress: string | undefined) => ([{
    ...daoDaoCoreQueryKeys.contract[0],
    address: contractAddress
  }] as const),
  admin: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...daoDaoCoreQueryKeys.address(contractAddress)[0],
    method: "admin",
    args
  }] as const),
  adminNomination: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...daoDaoCoreQueryKeys.address(contractAddress)[0],
    method: "admin_nomination",
    args
  }] as const),
  config: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...daoDaoCoreQueryKeys.address(contractAddress)[0],
    method: "config",
    args
  }] as const),
  cw20Balances: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...daoDaoCoreQueryKeys.address(contractAddress)[0],
    method: "cw20_balances",
    args
  }] as const),
  cw20TokenList: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...daoDaoCoreQueryKeys.address(contractAddress)[0],
    method: "cw20_token_list",
    args
  }] as const),
  cw721TokenList: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...daoDaoCoreQueryKeys.address(contractAddress)[0],
    method: "cw721_token_list",
    args
  }] as const),
  dumpState: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...daoDaoCoreQueryKeys.address(contractAddress)[0],
    method: "dump_state",
    args
  }] as const),
  getItem: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...daoDaoCoreQueryKeys.address(contractAddress)[0],
    method: "get_item",
    args
  }] as const),
  listItems: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...daoDaoCoreQueryKeys.address(contractAddress)[0],
    method: "list_items",
    args
  }] as const),
  info: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...daoDaoCoreQueryKeys.address(contractAddress)[0],
    method: "info",
    args
  }] as const),
  proposalModules: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...daoDaoCoreQueryKeys.address(contractAddress)[0],
    method: "proposal_modules",
    args
  }] as const),
  activeProposalModules: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...daoDaoCoreQueryKeys.address(contractAddress)[0],
    method: "active_proposal_modules",
    args
  }] as const),
  proposalModuleCount: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...daoDaoCoreQueryKeys.address(contractAddress)[0],
    method: "proposal_module_count",
    args
  }] as const),
  pauseInfo: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...daoDaoCoreQueryKeys.address(contractAddress)[0],
    method: "pause_info",
    args
  }] as const),
  votingModule: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...daoDaoCoreQueryKeys.address(contractAddress)[0],
    method: "voting_module",
    args
  }] as const),
  listSubDaos: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...daoDaoCoreQueryKeys.address(contractAddress)[0],
    method: "list_sub_daos",
    args
  }] as const),
  daoURI: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...daoDaoCoreQueryKeys.address(contractAddress)[0],
    method: "dao_u_r_i",
    args
  }] as const),
  votingPowerAtHeight: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...daoDaoCoreQueryKeys.address(contractAddress)[0],
    method: "voting_power_at_height",
    args
  }] as const),
  totalPowerAtHeight: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...daoDaoCoreQueryKeys.address(contractAddress)[0],
    method: "total_power_at_height",
    args
  }] as const)
};
export const daoDaoCoreQueries = {
  admin: <TData = Addr,>({
    client,
    options
  }: DaoDaoCoreAdminQuery<TData>): UseQueryOptions<Addr, Error, TData> => ({
    queryKey: daoDaoCoreQueryKeys.admin(client?.contractAddress),
    queryFn: () => client ? client.admin() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  adminNomination: <TData = AdminNominationResponse,>({
    client,
    options
  }: DaoDaoCoreAdminNominationQuery<TData>): UseQueryOptions<AdminNominationResponse, Error, TData> => ({
    queryKey: daoDaoCoreQueryKeys.adminNomination(client?.contractAddress),
    queryFn: () => client ? client.adminNomination() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  config: <TData = Config,>({
    client,
    options
  }: DaoDaoCoreConfigQuery<TData>): UseQueryOptions<Config, Error, TData> => ({
    queryKey: daoDaoCoreQueryKeys.config(client?.contractAddress),
    queryFn: () => client ? client.config() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  cw20Balances: <TData = ArrayOfCw20BalanceResponse,>({
    client,
    args,
    options
  }: DaoDaoCoreCw20BalancesQuery<TData>): UseQueryOptions<ArrayOfCw20BalanceResponse, Error, TData> => ({
    queryKey: daoDaoCoreQueryKeys.cw20Balances(client?.contractAddress, args),
    queryFn: () => client ? client.cw20Balances({
      limit: args.limit,
      startAfter: args.startAfter
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  cw20TokenList: <TData = ArrayOfAddr,>({
    client,
    args,
    options
  }: DaoDaoCoreCw20TokenListQuery<TData>): UseQueryOptions<ArrayOfAddr, Error, TData> => ({
    queryKey: daoDaoCoreQueryKeys.cw20TokenList(client?.contractAddress, args),
    queryFn: () => client ? client.cw20TokenList({
      limit: args.limit,
      startAfter: args.startAfter
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  cw721TokenList: <TData = ArrayOfAddr,>({
    client,
    args,
    options
  }: DaoDaoCoreCw721TokenListQuery<TData>): UseQueryOptions<ArrayOfAddr, Error, TData> => ({
    queryKey: daoDaoCoreQueryKeys.cw721TokenList(client?.contractAddress, args),
    queryFn: () => client ? client.cw721TokenList({
      limit: args.limit,
      startAfter: args.startAfter
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  dumpState: <TData = DumpStateResponse,>({
    client,
    options
  }: DaoDaoCoreDumpStateQuery<TData>): UseQueryOptions<DumpStateResponse, Error, TData> => ({
    queryKey: daoDaoCoreQueryKeys.dumpState(client?.contractAddress),
    queryFn: () => client ? client.dumpState() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  getItem: <TData = GetItemResponse,>({
    client,
    args,
    options
  }: DaoDaoCoreGetItemQuery<TData>): UseQueryOptions<GetItemResponse, Error, TData> => ({
    queryKey: daoDaoCoreQueryKeys.getItem(client?.contractAddress, args),
    queryFn: () => client ? client.getItem({
      key: args.key
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  listItems: <TData = ArrayOfTupleOfStringAndString,>({
    client,
    args,
    options
  }: DaoDaoCoreListItemsQuery<TData>): UseQueryOptions<ArrayOfTupleOfStringAndString, Error, TData> => ({
    queryKey: daoDaoCoreQueryKeys.listItems(client?.contractAddress, args),
    queryFn: () => client ? client.listItems({
      limit: args.limit,
      startAfter: args.startAfter
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  info: <TData = InfoResponse,>({
    client,
    options
  }: DaoDaoCoreInfoQuery<TData>): UseQueryOptions<InfoResponse, Error, TData> => ({
    queryKey: daoDaoCoreQueryKeys.info(client?.contractAddress),
    queryFn: () => client ? client.info() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  proposalModules: <TData = ArrayOfProposalModule,>({
    client,
    args,
    options
  }: DaoDaoCoreProposalModulesQuery<TData>): UseQueryOptions<ArrayOfProposalModule, Error, TData> => ({
    queryKey: daoDaoCoreQueryKeys.proposalModules(client?.contractAddress, args),
    queryFn: () => client ? client.proposalModules({
      limit: args.limit,
      startAfter: args.startAfter
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  activeProposalModules: <TData = ArrayOfProposalModule,>({
    client,
    args,
    options
  }: DaoDaoCoreActiveProposalModulesQuery<TData>): UseQueryOptions<ArrayOfProposalModule, Error, TData> => ({
    queryKey: daoDaoCoreQueryKeys.activeProposalModules(client?.contractAddress, args),
    queryFn: () => client ? client.activeProposalModules({
      limit: args.limit,
      startAfter: args.startAfter
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  proposalModuleCount: <TData = ProposalModuleCountResponse,>({
    client,
    options
  }: DaoDaoCoreProposalModuleCountQuery<TData>): UseQueryOptions<ProposalModuleCountResponse, Error, TData> => ({
    queryKey: daoDaoCoreQueryKeys.proposalModuleCount(client?.contractAddress),
    queryFn: () => client ? client.proposalModuleCount() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  pauseInfo: <TData = PauseInfoResponse,>({
    client,
    options
  }: DaoDaoCorePauseInfoQuery<TData>): UseQueryOptions<PauseInfoResponse, Error, TData> => ({
    queryKey: daoDaoCoreQueryKeys.pauseInfo(client?.contractAddress),
    queryFn: () => client ? client.pauseInfo() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  votingModule: <TData = Addr,>({
    client,
    options
  }: DaoDaoCoreVotingModuleQuery<TData>): UseQueryOptions<Addr, Error, TData> => ({
    queryKey: daoDaoCoreQueryKeys.votingModule(client?.contractAddress),
    queryFn: () => client ? client.votingModule() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  listSubDaos: <TData = ArrayOfSubDao,>({
    client,
    args,
    options
  }: DaoDaoCoreListSubDaosQuery<TData>): UseQueryOptions<ArrayOfSubDao, Error, TData> => ({
    queryKey: daoDaoCoreQueryKeys.listSubDaos(client?.contractAddress, args),
    queryFn: () => client ? client.listSubDaos({
      limit: args.limit,
      startAfter: args.startAfter
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  daoURI: <TData = DaoURIResponse,>({
    client,
    options
  }: DaoDaoCoreDaoURIQuery<TData>): UseQueryOptions<DaoURIResponse, Error, TData> => ({
    queryKey: daoDaoCoreQueryKeys.daoURI(client?.contractAddress),
    queryFn: () => client ? client.daoURI() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  votingPowerAtHeight: <TData = VotingPowerAtHeightResponse,>({
    client,
    args,
    options
  }: DaoDaoCoreVotingPowerAtHeightQuery<TData>): UseQueryOptions<VotingPowerAtHeightResponse, Error, TData> => ({
    queryKey: daoDaoCoreQueryKeys.votingPowerAtHeight(client?.contractAddress, args),
    queryFn: () => client ? client.votingPowerAtHeight({
      address: args.address,
      height: args.height
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  totalPowerAtHeight: <TData = TotalPowerAtHeightResponse,>({
    client,
    args,
    options
  }: DaoDaoCoreTotalPowerAtHeightQuery<TData>): UseQueryOptions<TotalPowerAtHeightResponse, Error, TData> => ({
    queryKey: daoDaoCoreQueryKeys.totalPowerAtHeight(client?.contractAddress, args),
    queryFn: () => client ? client.totalPowerAtHeight({
      height: args.height
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  })
};
export interface DaoDaoCoreReactQuery<TResponse, TData = TResponse> {
  client: DaoDaoCoreQueryClient | undefined;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface DaoDaoCoreTotalPowerAtHeightQuery<TData> extends DaoDaoCoreReactQuery<TotalPowerAtHeightResponse, TData> {
  args: {
    height?: number;
  };
}
export function useDaoDaoCoreTotalPowerAtHeightQuery<TData = TotalPowerAtHeightResponse>({
  client,
  args,
  options
}: DaoDaoCoreTotalPowerAtHeightQuery<TData>) {
  return useQuery<TotalPowerAtHeightResponse, Error, TData>(daoDaoCoreQueryKeys.totalPowerAtHeight(client?.contractAddress, args), () => client ? client.totalPowerAtHeight({
    height: args.height
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoDaoCoreVotingPowerAtHeightQuery<TData> extends DaoDaoCoreReactQuery<VotingPowerAtHeightResponse, TData> {
  args: {
    address: string;
    height?: number;
  };
}
export function useDaoDaoCoreVotingPowerAtHeightQuery<TData = VotingPowerAtHeightResponse>({
  client,
  args,
  options
}: DaoDaoCoreVotingPowerAtHeightQuery<TData>) {
  return useQuery<VotingPowerAtHeightResponse, Error, TData>(daoDaoCoreQueryKeys.votingPowerAtHeight(client?.contractAddress, args), () => client ? client.votingPowerAtHeight({
    address: args.address,
    height: args.height
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoDaoCoreDaoURIQuery<TData> extends DaoDaoCoreReactQuery<DaoURIResponse, TData> {}
export function useDaoDaoCoreDaoURIQuery<TData = DaoURIResponse>({
  client,
  options
}: DaoDaoCoreDaoURIQuery<TData>) {
  return useQuery<DaoURIResponse, Error, TData>(daoDaoCoreQueryKeys.daoURI(client?.contractAddress), () => client ? client.daoURI() : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoDaoCoreListSubDaosQuery<TData> extends DaoDaoCoreReactQuery<ArrayOfSubDao, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useDaoDaoCoreListSubDaosQuery<TData = ArrayOfSubDao>({
  client,
  args,
  options
}: DaoDaoCoreListSubDaosQuery<TData>) {
  return useQuery<ArrayOfSubDao, Error, TData>(daoDaoCoreQueryKeys.listSubDaos(client?.contractAddress, args), () => client ? client.listSubDaos({
    limit: args.limit,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoDaoCoreVotingModuleQuery<TData> extends DaoDaoCoreReactQuery<Addr, TData> {}
export function useDaoDaoCoreVotingModuleQuery<TData = Addr>({
  client,
  options
}: DaoDaoCoreVotingModuleQuery<TData>) {
  return useQuery<Addr, Error, TData>(daoDaoCoreQueryKeys.votingModule(client?.contractAddress), () => client ? client.votingModule() : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoDaoCorePauseInfoQuery<TData> extends DaoDaoCoreReactQuery<PauseInfoResponse, TData> {}
export function useDaoDaoCorePauseInfoQuery<TData = PauseInfoResponse>({
  client,
  options
}: DaoDaoCorePauseInfoQuery<TData>) {
  return useQuery<PauseInfoResponse, Error, TData>(daoDaoCoreQueryKeys.pauseInfo(client?.contractAddress), () => client ? client.pauseInfo() : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoDaoCoreProposalModuleCountQuery<TData> extends DaoDaoCoreReactQuery<ProposalModuleCountResponse, TData> {}
export function useDaoDaoCoreProposalModuleCountQuery<TData = ProposalModuleCountResponse>({
  client,
  options
}: DaoDaoCoreProposalModuleCountQuery<TData>) {
  return useQuery<ProposalModuleCountResponse, Error, TData>(daoDaoCoreQueryKeys.proposalModuleCount(client?.contractAddress), () => client ? client.proposalModuleCount() : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoDaoCoreActiveProposalModulesQuery<TData> extends DaoDaoCoreReactQuery<ArrayOfProposalModule, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useDaoDaoCoreActiveProposalModulesQuery<TData = ArrayOfProposalModule>({
  client,
  args,
  options
}: DaoDaoCoreActiveProposalModulesQuery<TData>) {
  return useQuery<ArrayOfProposalModule, Error, TData>(daoDaoCoreQueryKeys.activeProposalModules(client?.contractAddress, args), () => client ? client.activeProposalModules({
    limit: args.limit,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoDaoCoreProposalModulesQuery<TData> extends DaoDaoCoreReactQuery<ArrayOfProposalModule, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useDaoDaoCoreProposalModulesQuery<TData = ArrayOfProposalModule>({
  client,
  args,
  options
}: DaoDaoCoreProposalModulesQuery<TData>) {
  return useQuery<ArrayOfProposalModule, Error, TData>(daoDaoCoreQueryKeys.proposalModules(client?.contractAddress, args), () => client ? client.proposalModules({
    limit: args.limit,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoDaoCoreInfoQuery<TData> extends DaoDaoCoreReactQuery<InfoResponse, TData> {}
export function useDaoDaoCoreInfoQuery<TData = InfoResponse>({
  client,
  options
}: DaoDaoCoreInfoQuery<TData>) {
  return useQuery<InfoResponse, Error, TData>(daoDaoCoreQueryKeys.info(client?.contractAddress), () => client ? client.info() : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoDaoCoreListItemsQuery<TData> extends DaoDaoCoreReactQuery<ArrayOfTupleOfStringAndString, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useDaoDaoCoreListItemsQuery<TData = ArrayOfTupleOfStringAndString>({
  client,
  args,
  options
}: DaoDaoCoreListItemsQuery<TData>) {
  return useQuery<ArrayOfTupleOfStringAndString, Error, TData>(daoDaoCoreQueryKeys.listItems(client?.contractAddress, args), () => client ? client.listItems({
    limit: args.limit,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoDaoCoreGetItemQuery<TData> extends DaoDaoCoreReactQuery<GetItemResponse, TData> {
  args: {
    key: string;
  };
}
export function useDaoDaoCoreGetItemQuery<TData = GetItemResponse>({
  client,
  args,
  options
}: DaoDaoCoreGetItemQuery<TData>) {
  return useQuery<GetItemResponse, Error, TData>(daoDaoCoreQueryKeys.getItem(client?.contractAddress, args), () => client ? client.getItem({
    key: args.key
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoDaoCoreDumpStateQuery<TData> extends DaoDaoCoreReactQuery<DumpStateResponse, TData> {}
export function useDaoDaoCoreDumpStateQuery<TData = DumpStateResponse>({
  client,
  options
}: DaoDaoCoreDumpStateQuery<TData>) {
  return useQuery<DumpStateResponse, Error, TData>(daoDaoCoreQueryKeys.dumpState(client?.contractAddress), () => client ? client.dumpState() : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoDaoCoreCw721TokenListQuery<TData> extends DaoDaoCoreReactQuery<ArrayOfAddr, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useDaoDaoCoreCw721TokenListQuery<TData = ArrayOfAddr>({
  client,
  args,
  options
}: DaoDaoCoreCw721TokenListQuery<TData>) {
  return useQuery<ArrayOfAddr, Error, TData>(daoDaoCoreQueryKeys.cw721TokenList(client?.contractAddress, args), () => client ? client.cw721TokenList({
    limit: args.limit,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoDaoCoreCw20TokenListQuery<TData> extends DaoDaoCoreReactQuery<ArrayOfAddr, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useDaoDaoCoreCw20TokenListQuery<TData = ArrayOfAddr>({
  client,
  args,
  options
}: DaoDaoCoreCw20TokenListQuery<TData>) {
  return useQuery<ArrayOfAddr, Error, TData>(daoDaoCoreQueryKeys.cw20TokenList(client?.contractAddress, args), () => client ? client.cw20TokenList({
    limit: args.limit,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoDaoCoreCw20BalancesQuery<TData> extends DaoDaoCoreReactQuery<ArrayOfCw20BalanceResponse, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useDaoDaoCoreCw20BalancesQuery<TData = ArrayOfCw20BalanceResponse>({
  client,
  args,
  options
}: DaoDaoCoreCw20BalancesQuery<TData>) {
  return useQuery<ArrayOfCw20BalanceResponse, Error, TData>(daoDaoCoreQueryKeys.cw20Balances(client?.contractAddress, args), () => client ? client.cw20Balances({
    limit: args.limit,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoDaoCoreConfigQuery<TData> extends DaoDaoCoreReactQuery<Config, TData> {}
export function useDaoDaoCoreConfigQuery<TData = Config>({
  client,
  options
}: DaoDaoCoreConfigQuery<TData>) {
  return useQuery<Config, Error, TData>(daoDaoCoreQueryKeys.config(client?.contractAddress), () => client ? client.config() : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoDaoCoreAdminNominationQuery<TData> extends DaoDaoCoreReactQuery<AdminNominationResponse, TData> {}
export function useDaoDaoCoreAdminNominationQuery<TData = AdminNominationResponse>({
  client,
  options
}: DaoDaoCoreAdminNominationQuery<TData>) {
  return useQuery<AdminNominationResponse, Error, TData>(daoDaoCoreQueryKeys.adminNomination(client?.contractAddress), () => client ? client.adminNomination() : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoDaoCoreAdminQuery<TData> extends DaoDaoCoreReactQuery<Addr, TData> {}
export function useDaoDaoCoreAdminQuery<TData = Addr>({
  client,
  options
}: DaoDaoCoreAdminQuery<TData>) {
  return useQuery<Addr, Error, TData>(daoDaoCoreQueryKeys.admin(client?.contractAddress), () => client ? client.admin() : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoDaoCoreUpdateSubDaosMutation {
  client: DaoDaoCoreClient;
  msg: {
    toAdd: SubDao[];
    toRemove: string[];
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoDaoCoreUpdateSubDaosMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoDaoCoreUpdateSubDaosMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoDaoCoreUpdateSubDaosMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateSubDaos(msg, fee, memo, funds), options);
}
export interface DaoDaoCoreUpdateVotingModuleMutation {
  client: DaoDaoCoreClient;
  msg: {
    module: ModuleInstantiateInfo;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoDaoCoreUpdateVotingModuleMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoDaoCoreUpdateVotingModuleMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoDaoCoreUpdateVotingModuleMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateVotingModule(msg, fee, memo, funds), options);
}
export interface DaoDaoCoreUpdateProposalModulesMutation {
  client: DaoDaoCoreClient;
  msg: {
    toAdd: ModuleInstantiateInfo[];
    toDisable: string[];
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoDaoCoreUpdateProposalModulesMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoDaoCoreUpdateProposalModulesMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoDaoCoreUpdateProposalModulesMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateProposalModules(msg, fee, memo, funds), options);
}
export interface DaoDaoCoreUpdateCw721ListMutation {
  client: DaoDaoCoreClient;
  msg: {
    toAdd: string[];
    toRemove: string[];
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoDaoCoreUpdateCw721ListMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoDaoCoreUpdateCw721ListMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoDaoCoreUpdateCw721ListMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateCw721List(msg, fee, memo, funds), options);
}
export interface DaoDaoCoreUpdateCw20ListMutation {
  client: DaoDaoCoreClient;
  msg: {
    toAdd: string[];
    toRemove: string[];
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoDaoCoreUpdateCw20ListMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoDaoCoreUpdateCw20ListMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoDaoCoreUpdateCw20ListMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateCw20List(msg, fee, memo, funds), options);
}
export interface DaoDaoCoreUpdateConfigMutation {
  client: DaoDaoCoreClient;
  msg: {
    config: Config;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoDaoCoreUpdateConfigMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoDaoCoreUpdateConfigMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoDaoCoreUpdateConfigMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateConfig(msg, fee, memo, funds), options);
}
export interface DaoDaoCoreWithdrawAdminNominationMutation {
  client: DaoDaoCoreClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoDaoCoreWithdrawAdminNominationMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoDaoCoreWithdrawAdminNominationMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoDaoCoreWithdrawAdminNominationMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.withdrawAdminNomination(fee, memo, funds), options);
}
export interface DaoDaoCoreAcceptAdminNominationMutation {
  client: DaoDaoCoreClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoDaoCoreAcceptAdminNominationMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoDaoCoreAcceptAdminNominationMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoDaoCoreAcceptAdminNominationMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.acceptAdminNomination(fee, memo, funds), options);
}
export interface DaoDaoCoreNominateAdminMutation {
  client: DaoDaoCoreClient;
  msg: {
    admin?: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoDaoCoreNominateAdminMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoDaoCoreNominateAdminMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoDaoCoreNominateAdminMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.nominateAdmin(msg, fee, memo, funds), options);
}
export interface DaoDaoCoreSetItemMutation {
  client: DaoDaoCoreClient;
  msg: {
    key: string;
    value: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoDaoCoreSetItemMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoDaoCoreSetItemMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoDaoCoreSetItemMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.setItem(msg, fee, memo, funds), options);
}
export interface DaoDaoCoreRemoveItemMutation {
  client: DaoDaoCoreClient;
  msg: {
    key: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoDaoCoreRemoveItemMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoDaoCoreRemoveItemMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoDaoCoreRemoveItemMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.removeItem(msg, fee, memo, funds), options);
}
export interface DaoDaoCoreReceiveNftMutation {
  client: DaoDaoCoreClient;
  msg: {
    msg: Binary;
    sender: string;
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoDaoCoreReceiveNftMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoDaoCoreReceiveNftMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoDaoCoreReceiveNftMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.receiveNft(msg, fee, memo, funds), options);
}
export interface DaoDaoCoreReceiveMutation {
  client: DaoDaoCoreClient;
  msg: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoDaoCoreReceiveMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoDaoCoreReceiveMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoDaoCoreReceiveMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.receive(msg, fee, memo, funds), options);
}
export interface DaoDaoCoreUnpauseMutation {
  client: DaoDaoCoreClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoDaoCoreUnpauseMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoDaoCoreUnpauseMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoDaoCoreUnpauseMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.unpause(fee, memo, funds), options);
}
export interface DaoDaoCorePauseMutation {
  client: DaoDaoCoreClient;
  msg: {
    duration: Duration;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoDaoCorePauseMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoDaoCorePauseMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoDaoCorePauseMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.pause(msg, fee, memo, funds), options);
}
export interface DaoDaoCoreExecuteProposalHookMutation {
  client: DaoDaoCoreClient;
  msg: {
    msgs: CosmosMsgForEmpty[];
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoDaoCoreExecuteProposalHookMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoDaoCoreExecuteProposalHookMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoDaoCoreExecuteProposalHookMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.executeProposalHook(msg, fee, memo, funds), options);
}
export interface DaoDaoCoreExecuteAdminMsgsMutation {
  client: DaoDaoCoreClient;
  msg: {
    msgs: CosmosMsgForEmpty[];
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoDaoCoreExecuteAdminMsgsMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoDaoCoreExecuteAdminMsgsMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoDaoCoreExecuteAdminMsgsMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.executeAdminMsgs(msg, fee, memo, funds), options);
}