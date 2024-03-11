/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { InstantiateMsg, Empty, ExecuteMsg, Decimal, Uint128, Binary, Admin, Expiration, Timestamp, Uint64, ModuleInfo, Action, ProposeMessage, MemberPercentageForString, ModuleInstantiateInfo, EmptyWrapper, QueryMsg, CompetitionsFilter, CompetitionStatus, MigrateMsg, Null, Addr, CompetitionResponseForEmpty, ArrayOfCompetitionResponseForEmpty, ConfigForEmpty, String, ArrayOfEvidence, Evidence, OwnershipForString, ArrayOfMemberPercentageForString } from "./ArenaWagerModule.types";
import { ArenaWagerModuleQueryClient } from "./ArenaWagerModule.client";
export interface ArenaWagerModuleReactQuery<TResponse, TData = TResponse> {
  client: ArenaWagerModuleQueryClient;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface ArenaWagerModuleOwnershipQuery<TData> extends ArenaWagerModuleReactQuery<OwnershipForString, TData> {}
export function useArenaWagerModuleOwnershipQuery<TData = OwnershipForString>({
  client,
  options
}: ArenaWagerModuleOwnershipQuery<TData>) {
  return useQuery<OwnershipForString, Error, TData>(["arenaWagerModuleOwnership", client.contractAddress], () => client.ownership(), options);
}
export interface ArenaWagerModuleQueryExtensionQuery<TData> extends ArenaWagerModuleReactQuery<Binary, TData> {
  args: {
    msg: Empty;
  };
}
export function useArenaWagerModuleQueryExtensionQuery<TData = Binary>({
  client,
  args,
  options
}: ArenaWagerModuleQueryExtensionQuery<TData>) {
  return useQuery<Binary, Error, TData>(["arenaWagerModuleQueryExtension", client.contractAddress, JSON.stringify(args)], () => client.queryExtension({
    msg: args.msg
  }), options);
}
export interface ArenaWagerModuleResultQuery<TData> extends ArenaWagerModuleReactQuery<ArrayOfMemberPercentageForString, TData> {
  args: {
    competitionId: Uint128;
  };
}
export function useArenaWagerModuleResultQuery<TData = ArrayOfMemberPercentageForString>({
  client,
  args,
  options
}: ArenaWagerModuleResultQuery<TData>) {
  return useQuery<ArrayOfMemberPercentageForString, Error, TData>(["arenaWagerModuleResult", client.contractAddress, JSON.stringify(args)], () => client.result({
    competitionId: args.competitionId
  }), options);
}
export interface ArenaWagerModuleEvidenceQuery<TData> extends ArenaWagerModuleReactQuery<ArrayOfEvidence, TData> {
  args: {
    competitionId: Uint128;
    limit?: number;
    startAfter?: Uint128;
  };
}
export function useArenaWagerModuleEvidenceQuery<TData = ArrayOfEvidence>({
  client,
  args,
  options
}: ArenaWagerModuleEvidenceQuery<TData>) {
  return useQuery<ArrayOfEvidence, Error, TData>(["arenaWagerModuleEvidence", client.contractAddress, JSON.stringify(args)], () => client.evidence({
    competitionId: args.competitionId,
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}
export interface ArenaWagerModuleCompetitionsQuery<TData> extends ArenaWagerModuleReactQuery<ArrayOfCompetitionResponseForEmpty, TData> {
  args: {
    filter?: CompetitionsFilter;
    limit?: number;
    startAfter?: Uint128;
  };
}
export function useArenaWagerModuleCompetitionsQuery<TData = ArrayOfCompetitionResponseForEmpty>({
  client,
  args,
  options
}: ArenaWagerModuleCompetitionsQuery<TData>) {
  return useQuery<ArrayOfCompetitionResponseForEmpty, Error, TData>(["arenaWagerModuleCompetitions", client.contractAddress, JSON.stringify(args)], () => client.competitions({
    filter: args.filter,
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}
export interface ArenaWagerModuleCompetitionQuery<TData> extends ArenaWagerModuleReactQuery<CompetitionResponseForEmpty, TData> {
  args: {
    competitionId: Uint128;
  };
}
export function useArenaWagerModuleCompetitionQuery<TData = CompetitionResponseForEmpty>({
  client,
  args,
  options
}: ArenaWagerModuleCompetitionQuery<TData>) {
  return useQuery<CompetitionResponseForEmpty, Error, TData>(["arenaWagerModuleCompetition", client.contractAddress, JSON.stringify(args)], () => client.competition({
    competitionId: args.competitionId
  }), options);
}
export interface ArenaWagerModuleCompetitionCountQuery<TData> extends ArenaWagerModuleReactQuery<Uint128, TData> {}
export function useArenaWagerModuleCompetitionCountQuery<TData = Uint128>({
  client,
  options
}: ArenaWagerModuleCompetitionCountQuery<TData>) {
  return useQuery<Uint128, Error, TData>(["arenaWagerModuleCompetitionCount", client.contractAddress], () => client.competitionCount(), options);
}
export interface ArenaWagerModuleDAOQuery<TData> extends ArenaWagerModuleReactQuery<String, TData> {}
export function useArenaWagerModuleDAOQuery<TData = String>({
  client,
  options
}: ArenaWagerModuleDAOQuery<TData>) {
  return useQuery<String, Error, TData>(["arenaWagerModuleDAO", client.contractAddress], () => client.dAO(), options);
}
export interface ArenaWagerModuleConfigQuery<TData> extends ArenaWagerModuleReactQuery<ConfigForEmpty, TData> {}
export function useArenaWagerModuleConfigQuery<TData = ConfigForEmpty>({
  client,
  options
}: ArenaWagerModuleConfigQuery<TData>) {
  return useQuery<ConfigForEmpty, Error, TData>(["arenaWagerModuleConfig", client.contractAddress], () => client.config(), options);
}