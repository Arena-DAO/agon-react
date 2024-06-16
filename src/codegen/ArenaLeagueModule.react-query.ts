/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee, Coin } from "@cosmjs/amino";
import { InstantiateMsg, Empty, ExecuteMsg, Binary, Decimal, Uint128, Expiration, Timestamp, Uint64, ModuleInfo, Admin, ExecuteExt, MatchResult, Int128, Action, ProposeMessage, FeeInformationForString, DistributionForString, MemberPercentageForString, EscrowInstantiateInfo, ModuleInstantiateInfo, LeagueInstantiateExt, MatchResultMsg, PointAdjustment, QueryMsg, CompetitionsFilter, CompetitionStatus, LeagueQueryExt, MigrateMsg, Addr, SudoMsg, MemberPoints, RoundResponse, Match, Null, CompetitionResponseForLeagueExt, LeagueExt, FeeInformationForAddr, ArrayOfCompetitionResponseForLeagueExt, ConfigForEmpty, String, ArrayOfEvidence, Evidence, OwnershipForString, NullableDistributionForString } from "./ArenaLeagueModule.types";
import { ArenaLeagueModuleQueryClient, ArenaLeagueModuleClient } from "./ArenaLeagueModule.client";
export const arenaLeagueModuleQueryKeys = {
  contract: ([{
    contract: "arenaLeagueModule"
  }] as const),
  address: (contractAddress: string | undefined) => ([{ ...arenaLeagueModuleQueryKeys.contract[0],
    address: contractAddress
  }] as const),
  config: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaLeagueModuleQueryKeys.address(contractAddress)[0],
    method: "config",
    args
  }] as const),
  dAO: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaLeagueModuleQueryKeys.address(contractAddress)[0],
    method: "d_a_o",
    args
  }] as const),
  competitionCount: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaLeagueModuleQueryKeys.address(contractAddress)[0],
    method: "competition_count",
    args
  }] as const),
  competition: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaLeagueModuleQueryKeys.address(contractAddress)[0],
    method: "competition",
    args
  }] as const),
  competitions: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaLeagueModuleQueryKeys.address(contractAddress)[0],
    method: "competitions",
    args
  }] as const),
  evidence: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaLeagueModuleQueryKeys.address(contractAddress)[0],
    method: "evidence",
    args
  }] as const),
  result: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaLeagueModuleQueryKeys.address(contractAddress)[0],
    method: "result",
    args
  }] as const),
  queryExtension: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaLeagueModuleQueryKeys.address(contractAddress)[0],
    method: "query_extension",
    args
  }] as const),
  ownership: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaLeagueModuleQueryKeys.address(contractAddress)[0],
    method: "ownership",
    args
  }] as const)
};
export const arenaLeagueModuleQueries = {
  config: <TData = ConfigForEmpty,>({
    client,
    options
  }: ArenaLeagueModuleConfigQuery<TData>): UseQueryOptions<ConfigForEmpty, Error, TData> => ({
    queryKey: arenaLeagueModuleQueryKeys.config(client?.contractAddress),
    queryFn: () => client ? client.config() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  dAO: <TData = String,>({
    client,
    options
  }: ArenaLeagueModuleDAOQuery<TData>): UseQueryOptions<String, Error, TData> => ({
    queryKey: arenaLeagueModuleQueryKeys.dAO(client?.contractAddress),
    queryFn: () => client ? client.dAO() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  competitionCount: <TData = Uint128,>({
    client,
    options
  }: ArenaLeagueModuleCompetitionCountQuery<TData>): UseQueryOptions<Uint128, Error, TData> => ({
    queryKey: arenaLeagueModuleQueryKeys.competitionCount(client?.contractAddress),
    queryFn: () => client ? client.competitionCount() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  competition: <TData = CompetitionResponseForLeagueExt,>({
    client,
    args,
    options
  }: ArenaLeagueModuleCompetitionQuery<TData>): UseQueryOptions<CompetitionResponseForLeagueExt, Error, TData> => ({
    queryKey: arenaLeagueModuleQueryKeys.competition(client?.contractAddress, args),
    queryFn: () => client ? client.competition({
      competitionId: args.competitionId
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  competitions: <TData = ArrayOfCompetitionResponseForLeagueExt,>({
    client,
    args,
    options
  }: ArenaLeagueModuleCompetitionsQuery<TData>): UseQueryOptions<ArrayOfCompetitionResponseForLeagueExt, Error, TData> => ({
    queryKey: arenaLeagueModuleQueryKeys.competitions(client?.contractAddress, args),
    queryFn: () => client ? client.competitions({
      filter: args.filter,
      limit: args.limit,
      startAfter: args.startAfter
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  evidence: <TData = ArrayOfEvidence,>({
    client,
    args,
    options
  }: ArenaLeagueModuleEvidenceQuery<TData>): UseQueryOptions<ArrayOfEvidence, Error, TData> => ({
    queryKey: arenaLeagueModuleQueryKeys.evidence(client?.contractAddress, args),
    queryFn: () => client ? client.evidence({
      competitionId: args.competitionId,
      limit: args.limit,
      startAfter: args.startAfter
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  result: <TData = NullableDistributionForString,>({
    client,
    args,
    options
  }: ArenaLeagueModuleResultQuery<TData>): UseQueryOptions<NullableDistributionForString, Error, TData> => ({
    queryKey: arenaLeagueModuleQueryKeys.result(client?.contractAddress, args),
    queryFn: () => client ? client.result({
      competitionId: args.competitionId
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  queryExtension: <TData = Binary,>({
    client,
    args,
    options
  }: ArenaLeagueModuleQueryExtensionQuery<TData>): UseQueryOptions<Binary, Error, TData> => ({
    queryKey: arenaLeagueModuleQueryKeys.queryExtension(client?.contractAddress, args),
    queryFn: () => client ? client.queryExtension({
      msg: args.msg
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  ownership: <TData = OwnershipForString,>({
    client,
    options
  }: ArenaLeagueModuleOwnershipQuery<TData>): UseQueryOptions<OwnershipForString, Error, TData> => ({
    queryKey: arenaLeagueModuleQueryKeys.ownership(client?.contractAddress),
    queryFn: () => client ? client.ownership() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  })
};
export interface ArenaLeagueModuleReactQuery<TResponse, TData = TResponse> {
  client: ArenaLeagueModuleQueryClient | undefined;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface ArenaLeagueModuleOwnershipQuery<TData> extends ArenaLeagueModuleReactQuery<OwnershipForString, TData> {}
export function useArenaLeagueModuleOwnershipQuery<TData = OwnershipForString>({
  client,
  options
}: ArenaLeagueModuleOwnershipQuery<TData>) {
  return useQuery<OwnershipForString, Error, TData>(arenaLeagueModuleQueryKeys.ownership(client?.contractAddress), () => client ? client.ownership() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaLeagueModuleQueryExtensionQuery<TData> extends ArenaLeagueModuleReactQuery<Binary, TData> {
  args: {
    msg: LeagueQueryExt;
  };
}
export function useArenaLeagueModuleQueryExtensionQuery<TData = Binary>({
  client,
  args,
  options
}: ArenaLeagueModuleQueryExtensionQuery<TData>) {
  return useQuery<Binary, Error, TData>(arenaLeagueModuleQueryKeys.queryExtension(client?.contractAddress, args), () => client ? client.queryExtension({
    msg: args.msg
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaLeagueModuleResultQuery<TData> extends ArenaLeagueModuleReactQuery<NullableDistributionForString, TData> {
  args: {
    competitionId: Uint128;
  };
}
export function useArenaLeagueModuleResultQuery<TData = NullableDistributionForString>({
  client,
  args,
  options
}: ArenaLeagueModuleResultQuery<TData>) {
  return useQuery<NullableDistributionForString, Error, TData>(arenaLeagueModuleQueryKeys.result(client?.contractAddress, args), () => client ? client.result({
    competitionId: args.competitionId
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaLeagueModuleEvidenceQuery<TData> extends ArenaLeagueModuleReactQuery<ArrayOfEvidence, TData> {
  args: {
    competitionId: Uint128;
    limit?: number;
    startAfter?: Uint128;
  };
}
export function useArenaLeagueModuleEvidenceQuery<TData = ArrayOfEvidence>({
  client,
  args,
  options
}: ArenaLeagueModuleEvidenceQuery<TData>) {
  return useQuery<ArrayOfEvidence, Error, TData>(arenaLeagueModuleQueryKeys.evidence(client?.contractAddress, args), () => client ? client.evidence({
    competitionId: args.competitionId,
    limit: args.limit,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaLeagueModuleCompetitionsQuery<TData> extends ArenaLeagueModuleReactQuery<ArrayOfCompetitionResponseForLeagueExt, TData> {
  args: {
    filter?: CompetitionsFilter;
    limit?: number;
    startAfter?: Uint128;
  };
}
export function useArenaLeagueModuleCompetitionsQuery<TData = ArrayOfCompetitionResponseForLeagueExt>({
  client,
  args,
  options
}: ArenaLeagueModuleCompetitionsQuery<TData>) {
  return useQuery<ArrayOfCompetitionResponseForLeagueExt, Error, TData>(arenaLeagueModuleQueryKeys.competitions(client?.contractAddress, args), () => client ? client.competitions({
    filter: args.filter,
    limit: args.limit,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaLeagueModuleCompetitionQuery<TData> extends ArenaLeagueModuleReactQuery<CompetitionResponseForLeagueExt, TData> {
  args: {
    competitionId: Uint128;
  };
}
export function useArenaLeagueModuleCompetitionQuery<TData = CompetitionResponseForLeagueExt>({
  client,
  args,
  options
}: ArenaLeagueModuleCompetitionQuery<TData>) {
  return useQuery<CompetitionResponseForLeagueExt, Error, TData>(arenaLeagueModuleQueryKeys.competition(client?.contractAddress, args), () => client ? client.competition({
    competitionId: args.competitionId
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaLeagueModuleCompetitionCountQuery<TData> extends ArenaLeagueModuleReactQuery<Uint128, TData> {}
export function useArenaLeagueModuleCompetitionCountQuery<TData = Uint128>({
  client,
  options
}: ArenaLeagueModuleCompetitionCountQuery<TData>) {
  return useQuery<Uint128, Error, TData>(arenaLeagueModuleQueryKeys.competitionCount(client?.contractAddress), () => client ? client.competitionCount() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaLeagueModuleDAOQuery<TData> extends ArenaLeagueModuleReactQuery<String, TData> {}
export function useArenaLeagueModuleDAOQuery<TData = String>({
  client,
  options
}: ArenaLeagueModuleDAOQuery<TData>) {
  return useQuery<String, Error, TData>(arenaLeagueModuleQueryKeys.dAO(client?.contractAddress), () => client ? client.dAO() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaLeagueModuleConfigQuery<TData> extends ArenaLeagueModuleReactQuery<ConfigForEmpty, TData> {}
export function useArenaLeagueModuleConfigQuery<TData = ConfigForEmpty>({
  client,
  options
}: ArenaLeagueModuleConfigQuery<TData>) {
  return useQuery<ConfigForEmpty, Error, TData>(arenaLeagueModuleQueryKeys.config(client?.contractAddress), () => client ? client.config() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaLeagueModuleUpdateOwnershipMutation {
  client: ArenaLeagueModuleClient;
  msg: Action;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaLeagueModuleUpdateOwnershipMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaLeagueModuleUpdateOwnershipMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaLeagueModuleUpdateOwnershipMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateOwnership(msg, fee, memo, funds), options);
}
export interface ArenaLeagueModuleExtensionMutation {
  client: ArenaLeagueModuleClient;
  msg: {
    msg: ExecuteExt;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaLeagueModuleExtensionMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaLeagueModuleExtensionMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaLeagueModuleExtensionMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.extension(msg, fee, memo, funds), options);
}
export interface ArenaLeagueModuleProcessCompetitionMutation {
  client: ArenaLeagueModuleClient;
  msg: {
    competitionId: Uint128;
    distribution?: DistributionForString;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaLeagueModuleProcessCompetitionMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaLeagueModuleProcessCompetitionMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaLeagueModuleProcessCompetitionMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.processCompetition(msg, fee, memo, funds), options);
}
export interface ArenaLeagueModuleSubmitEvidenceMutation {
  client: ArenaLeagueModuleClient;
  msg: {
    competitionId: Uint128;
    evidence: string[];
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaLeagueModuleSubmitEvidenceMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaLeagueModuleSubmitEvidenceMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaLeagueModuleSubmitEvidenceMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.submitEvidence(msg, fee, memo, funds), options);
}
export interface ArenaLeagueModuleCreateCompetitionMutation {
  client: ArenaLeagueModuleClient;
  msg: {
    categoryId?: Uint128;
    description: string;
    escrow?: EscrowInstantiateInfo;
    expiration: Expiration;
    host: ModuleInfo;
    instantiateExtension: LeagueInstantiateExt;
    name: string;
    rules: string[];
    rulesets: Uint128[];
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaLeagueModuleCreateCompetitionMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaLeagueModuleCreateCompetitionMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaLeagueModuleCreateCompetitionMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.createCompetition(msg, fee, memo, funds), options);
}
export interface ArenaLeagueModuleExecuteCompetitionHookMutation {
  client: ArenaLeagueModuleClient;
  msg: {
    competitionId: Uint128;
    distribution?: DistributionForString;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaLeagueModuleExecuteCompetitionHookMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaLeagueModuleExecuteCompetitionHookMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaLeagueModuleExecuteCompetitionHookMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.executeCompetitionHook(msg, fee, memo, funds), options);
}
export interface ArenaLeagueModuleRemoveCompetitionHookMutation {
  client: ArenaLeagueModuleClient;
  msg: {
    competitionId: Uint128;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaLeagueModuleRemoveCompetitionHookMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaLeagueModuleRemoveCompetitionHookMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaLeagueModuleRemoveCompetitionHookMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.removeCompetitionHook(msg, fee, memo, funds), options);
}
export interface ArenaLeagueModuleAddCompetitionHookMutation {
  client: ArenaLeagueModuleClient;
  msg: {
    competitionId: Uint128;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaLeagueModuleAddCompetitionHookMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaLeagueModuleAddCompetitionHookMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaLeagueModuleAddCompetitionHookMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.addCompetitionHook(msg, fee, memo, funds), options);
}
export interface ArenaLeagueModuleActivateMutation {
  client: ArenaLeagueModuleClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaLeagueModuleActivateMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaLeagueModuleActivateMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaLeagueModuleActivateMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.activate(fee, memo, funds), options);
}
export interface ArenaLeagueModuleJailCompetitionMutation {
  client: ArenaLeagueModuleClient;
  msg: {
    proposeMessage: ProposeMessage;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaLeagueModuleJailCompetitionMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaLeagueModuleJailCompetitionMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaLeagueModuleJailCompetitionMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.jailCompetition(msg, fee, memo, funds), options);
}