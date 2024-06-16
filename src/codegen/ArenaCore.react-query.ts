/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee, Coin } from "@cosmjs/amino";
import { Uint128, DepositToken, UncheckedDenom, DepositRefundPolicy, Admin, Binary, Duration, Decimal, InstantiateMsg, UncheckedDepositInfo, InstantiateExt, NewCompetitionCategory, ModuleInstantiateInfo, NewRuleset, TaxConfiguration, ExecuteMsg, ExecuteExt, EditCompetitionCategory, Status, ProposeMessage, FeeInformationForString, DistributionForString, MemberPercentageForString, MemberResultForString, QueryMsg, QueryExt, CompetitionModuleQuery, MigrateMsg, Timestamp, Uint64, SudoMsg, CompetitionCategory, DumpStateResponse, CompetitionModuleResponseForString, Rating, BlockInfo, Ruleset, CheckedDenom, Addr, Config, CheckedDepositInfo, DepositInfoResponse, HooksResponse } from "./ArenaCore.types";
import { ArenaCoreQueryClient, ArenaCoreClient } from "./ArenaCore.client";
export const arenaCoreQueryKeys = {
  contract: ([{
    contract: "arenaCore"
  }] as const),
  address: (contractAddress: string | undefined) => ([{ ...arenaCoreQueryKeys.contract[0],
    address: contractAddress
  }] as const),
  proposalModule: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaCoreQueryKeys.address(contractAddress)[0],
    method: "proposal_module",
    args
  }] as const),
  dao: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaCoreQueryKeys.address(contractAddress)[0],
    method: "dao",
    args
  }] as const),
  config: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaCoreQueryKeys.address(contractAddress)[0],
    method: "config",
    args
  }] as const),
  depositInfo: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaCoreQueryKeys.address(contractAddress)[0],
    method: "deposit_info",
    args
  }] as const),
  proposalSubmittedHooks: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaCoreQueryKeys.address(contractAddress)[0],
    method: "proposal_submitted_hooks",
    args
  }] as const),
  queryExtension: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaCoreQueryKeys.address(contractAddress)[0],
    method: "query_extension",
    args
  }] as const)
};
export const arenaCoreQueries = {
  proposalModule: <TData = Addr,>({
    client,
    options
  }: ArenaCoreProposalModuleQuery<TData>): UseQueryOptions<Addr, Error, TData> => ({
    queryKey: arenaCoreQueryKeys.proposalModule(client?.contractAddress),
    queryFn: () => client ? client.proposalModule() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  dao: <TData = Addr,>({
    client,
    options
  }: ArenaCoreDaoQuery<TData>): UseQueryOptions<Addr, Error, TData> => ({
    queryKey: arenaCoreQueryKeys.dao(client?.contractAddress),
    queryFn: () => client ? client.dao() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  config: <TData = Config,>({
    client,
    options
  }: ArenaCoreConfigQuery<TData>): UseQueryOptions<Config, Error, TData> => ({
    queryKey: arenaCoreQueryKeys.config(client?.contractAddress),
    queryFn: () => client ? client.config() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  depositInfo: <TData = DepositInfoResponse,>({
    client,
    args,
    options
  }: ArenaCoreDepositInfoQuery<TData>): UseQueryOptions<DepositInfoResponse, Error, TData> => ({
    queryKey: arenaCoreQueryKeys.depositInfo(client?.contractAddress, args),
    queryFn: () => client ? client.depositInfo({
      proposalId: args.proposalId
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  proposalSubmittedHooks: <TData = HooksResponse,>({
    client,
    options
  }: ArenaCoreProposalSubmittedHooksQuery<TData>): UseQueryOptions<HooksResponse, Error, TData> => ({
    queryKey: arenaCoreQueryKeys.proposalSubmittedHooks(client?.contractAddress),
    queryFn: () => client ? client.proposalSubmittedHooks() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  queryExtension: <TData = Binary,>({
    client,
    args,
    options
  }: ArenaCoreQueryExtensionQuery<TData>): UseQueryOptions<Binary, Error, TData> => ({
    queryKey: arenaCoreQueryKeys.queryExtension(client?.contractAddress, args),
    queryFn: () => client ? client.queryExtension({
      msg: args.msg
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  })
};
export interface ArenaCoreReactQuery<TResponse, TData = TResponse> {
  client: ArenaCoreQueryClient | undefined;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface ArenaCoreQueryExtensionQuery<TData> extends ArenaCoreReactQuery<Binary, TData> {
  args: {
    msg: QueryExt;
  };
}
export function useArenaCoreQueryExtensionQuery<TData = Binary>({
  client,
  args,
  options
}: ArenaCoreQueryExtensionQuery<TData>) {
  return useQuery<Binary, Error, TData>(arenaCoreQueryKeys.queryExtension(client?.contractAddress, args), () => client ? client.queryExtension({
    msg: args.msg
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaCoreProposalSubmittedHooksQuery<TData> extends ArenaCoreReactQuery<HooksResponse, TData> {}
export function useArenaCoreProposalSubmittedHooksQuery<TData = HooksResponse>({
  client,
  options
}: ArenaCoreProposalSubmittedHooksQuery<TData>) {
  return useQuery<HooksResponse, Error, TData>(arenaCoreQueryKeys.proposalSubmittedHooks(client?.contractAddress), () => client ? client.proposalSubmittedHooks() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaCoreDepositInfoQuery<TData> extends ArenaCoreReactQuery<DepositInfoResponse, TData> {
  args: {
    proposalId: number;
  };
}
export function useArenaCoreDepositInfoQuery<TData = DepositInfoResponse>({
  client,
  args,
  options
}: ArenaCoreDepositInfoQuery<TData>) {
  return useQuery<DepositInfoResponse, Error, TData>(arenaCoreQueryKeys.depositInfo(client?.contractAddress, args), () => client ? client.depositInfo({
    proposalId: args.proposalId
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaCoreConfigQuery<TData> extends ArenaCoreReactQuery<Config, TData> {}
export function useArenaCoreConfigQuery<TData = Config>({
  client,
  options
}: ArenaCoreConfigQuery<TData>) {
  return useQuery<Config, Error, TData>(arenaCoreQueryKeys.config(client?.contractAddress), () => client ? client.config() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaCoreDaoQuery<TData> extends ArenaCoreReactQuery<Addr, TData> {}
export function useArenaCoreDaoQuery<TData = Addr>({
  client,
  options
}: ArenaCoreDaoQuery<TData>) {
  return useQuery<Addr, Error, TData>(arenaCoreQueryKeys.dao(client?.contractAddress), () => client ? client.dao() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaCoreProposalModuleQuery<TData> extends ArenaCoreReactQuery<Addr, TData> {}
export function useArenaCoreProposalModuleQuery<TData = Addr>({
  client,
  options
}: ArenaCoreProposalModuleQuery<TData>) {
  return useQuery<Addr, Error, TData>(arenaCoreQueryKeys.proposalModule(client?.contractAddress), () => client ? client.proposalModule() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaCoreProposalCompletedHookMutation {
  client: ArenaCoreClient;
  msg: {
    newStatus: Status;
    proposalId: number;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaCoreProposalCompletedHookMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaCoreProposalCompletedHookMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaCoreProposalCompletedHookMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.proposalCompletedHook(msg, fee, memo, funds), options);
}
export interface ArenaCoreRemoveProposalSubmittedHookMutation {
  client: ArenaCoreClient;
  msg: {
    address: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaCoreRemoveProposalSubmittedHookMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaCoreRemoveProposalSubmittedHookMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaCoreRemoveProposalSubmittedHookMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.removeProposalSubmittedHook(msg, fee, memo, funds), options);
}
export interface ArenaCoreAddProposalSubmittedHookMutation {
  client: ArenaCoreClient;
  msg: {
    address: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaCoreAddProposalSubmittedHookMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaCoreAddProposalSubmittedHookMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaCoreAddProposalSubmittedHookMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.addProposalSubmittedHook(msg, fee, memo, funds), options);
}
export interface ArenaCoreExtensionMutation {
  client: ArenaCoreClient;
  msg: {
    msg: ExecuteExt;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaCoreExtensionMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaCoreExtensionMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaCoreExtensionMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.extension(msg, fee, memo, funds), options);
}
export interface ArenaCoreWithdrawMutation {
  client: ArenaCoreClient;
  msg: {
    denom?: UncheckedDenom;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaCoreWithdrawMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaCoreWithdrawMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaCoreWithdrawMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.withdraw(msg, fee, memo, funds), options);
}
export interface ArenaCoreUpdateConfigMutation {
  client: ArenaCoreClient;
  msg: {
    depositInfo?: UncheckedDepositInfo;
    openProposalSubmission: boolean;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaCoreUpdateConfigMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaCoreUpdateConfigMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaCoreUpdateConfigMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateConfig(msg, fee, memo, funds), options);
}
export interface ArenaCoreProposeMutation {
  client: ArenaCoreClient;
  msg: {
    msg: ProposeMessage;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaCoreProposeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaCoreProposeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaCoreProposeMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.propose(msg, fee, memo, funds), options);
}