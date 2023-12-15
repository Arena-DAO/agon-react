/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { InstantiateMsg, Empty, ExecuteMsg, Uint128, ModuleInfo, Admin, Binary, Expiration, Timestamp, Uint64, Duration, ExecuteExt, Result, Action, ProposeMessage, MemberShareForString, ModuleInstantiateInfo, CompetitionInstantiateExt, MatchResult, QueryMsg, CompetitionsFilter, CompetitionStatus, QueryExt, MigrateMsg, Null, Addr, CompetitionResponseForCompetitionExt, Evidence, CompetitionExt, MemberShareForAddr, ArrayOfCompetitionResponseForCompetitionExt, Config, OwnershipForString } from "./ArenaLeagueModule.types";
export interface ArenaLeagueModuleReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<Config>;
  competitionCount: () => Promise<Uint128>;
  competition: ({
    id
  }: {
    id: Uint128;
  }) => Promise<CompetitionResponseForCompetitionExt>;
  competitions: ({
    filter,
    limit,
    startAfter
  }: {
    filter?: CompetitionsFilter;
    limit?: number;
    startAfter?: Uint128;
  }) => Promise<ArrayOfCompetitionResponseForCompetitionExt>;
  queryExtension: ({
    msg
  }: {
    msg: QueryExt;
  }) => Promise<Binary>;
  ownership: () => Promise<OwnershipForString>;
}
export class ArenaLeagueModuleQueryClient implements ArenaLeagueModuleReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.competitionCount = this.competitionCount.bind(this);
    this.competition = this.competition.bind(this);
    this.competitions = this.competitions.bind(this);
    this.queryExtension = this.queryExtension.bind(this);
    this.ownership = this.ownership.bind(this);
  }

  config = async (): Promise<Config> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  competitionCount = async (): Promise<Uint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      competition_count: {}
    });
  };
  competition = async ({
    id
  }: {
    id: Uint128;
  }): Promise<CompetitionResponseForCompetitionExt> => {
    return this.client.queryContractSmart(this.contractAddress, {
      competition: {
        id
      }
    });
  };
  competitions = async ({
    filter,
    limit,
    startAfter
  }: {
    filter?: CompetitionsFilter;
    limit?: number;
    startAfter?: Uint128;
  }): Promise<ArrayOfCompetitionResponseForCompetitionExt> => {
    return this.client.queryContractSmart(this.contractAddress, {
      competitions: {
        filter,
        limit,
        start_after: startAfter
      }
    });
  };
  queryExtension = async ({
    msg
  }: {
    msg: QueryExt;
  }): Promise<Binary> => {
    return this.client.queryContractSmart(this.contractAddress, {
      query_extension: {
        msg
      }
    });
  };
  ownership = async (): Promise<OwnershipForString> => {
    return this.client.queryContractSmart(this.contractAddress, {
      ownership: {}
    });
  };
}
export interface ArenaLeagueModuleInterface extends ArenaLeagueModuleReadOnlyInterface {
  contractAddress: string;
  sender: string;
  jailCompetition: ({
    proposeMessage
  }: {
    proposeMessage: ProposeMessage;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  activate: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  proposeResult: ({
    proposeMessage
  }: {
    proposeMessage: ProposeMessage;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  addCompetitionHook: ({
    id
  }: {
    id: Uint128;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  removeCompetitionHook: ({
    id
  }: {
    id: Uint128;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  executeCompetitionHook: ({
    distribution,
    id
  }: {
    distribution: MemberShareForString[];
    id: Uint128;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  createCompetition: ({
    categoryId,
    competitionDao,
    description,
    escrow,
    expiration,
    instantiateExtension,
    name,
    rules,
    rulesets
  }: {
    categoryId: Uint128;
    competitionDao: ModuleInfo;
    description: string;
    escrow?: ModuleInstantiateInfo;
    expiration: Expiration;
    instantiateExtension: CompetitionInstantiateExt;
    name: string;
    rules: string[];
    rulesets: Uint128[];
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  submitEvidence: ({
    evidence,
    id
  }: {
    evidence: string[];
    id: Uint128;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  processCompetition: ({
    distribution,
    id
  }: {
    distribution: MemberShareForString[];
    id: Uint128;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  extension: ({
    msg
  }: {
    msg: ExecuteExt;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateOwnership: (action: Action, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class ArenaLeagueModuleClient extends ArenaLeagueModuleQueryClient implements ArenaLeagueModuleInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.jailCompetition = this.jailCompetition.bind(this);
    this.activate = this.activate.bind(this);
    this.proposeResult = this.proposeResult.bind(this);
    this.addCompetitionHook = this.addCompetitionHook.bind(this);
    this.removeCompetitionHook = this.removeCompetitionHook.bind(this);
    this.executeCompetitionHook = this.executeCompetitionHook.bind(this);
    this.createCompetition = this.createCompetition.bind(this);
    this.submitEvidence = this.submitEvidence.bind(this);
    this.processCompetition = this.processCompetition.bind(this);
    this.extension = this.extension.bind(this);
    this.updateOwnership = this.updateOwnership.bind(this);
  }

  jailCompetition = async ({
    proposeMessage
  }: {
    proposeMessage: ProposeMessage;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      jail_competition: {
        propose_message: proposeMessage
      }
    }, fee, memo, _funds);
  };
  activate = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      activate: {}
    }, fee, memo, _funds);
  };
  proposeResult = async ({
    proposeMessage
  }: {
    proposeMessage: ProposeMessage;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      propose_result: {
        propose_message: proposeMessage
      }
    }, fee, memo, _funds);
  };
  addCompetitionHook = async ({
    id
  }: {
    id: Uint128;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_competition_hook: {
        id
      }
    }, fee, memo, _funds);
  };
  removeCompetitionHook = async ({
    id
  }: {
    id: Uint128;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_competition_hook: {
        id
      }
    }, fee, memo, _funds);
  };
  executeCompetitionHook = async ({
    distribution,
    id
  }: {
    distribution: MemberShareForString[];
    id: Uint128;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      execute_competition_hook: {
        distribution,
        id
      }
    }, fee, memo, _funds);
  };
  createCompetition = async ({
    categoryId,
    competitionDao,
    description,
    escrow,
    expiration,
    instantiateExtension,
    name,
    rules,
    rulesets
  }: {
    categoryId: Uint128;
    competitionDao: ModuleInfo;
    description: string;
    escrow?: ModuleInstantiateInfo;
    expiration: Expiration;
    instantiateExtension: CompetitionInstantiateExt;
    name: string;
    rules: string[];
    rulesets: Uint128[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      create_competition: {
        category_id: categoryId,
        competition_dao: competitionDao,
        description,
        escrow,
        expiration,
        instantiate_extension: instantiateExtension,
        name,
        rules,
        rulesets
      }
    }, fee, memo, _funds);
  };
  submitEvidence = async ({
    evidence,
    id
  }: {
    evidence: string[];
    id: Uint128;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      submit_evidence: {
        evidence,
        id
      }
    }, fee, memo, _funds);
  };
  processCompetition = async ({
    distribution,
    id
  }: {
    distribution: MemberShareForString[];
    id: Uint128;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      process_competition: {
        distribution,
        id
      }
    }, fee, memo, _funds);
  };
  extension = async ({
    msg
  }: {
    msg: ExecuteExt;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      extension: {
        msg
      }
    }, fee, memo, _funds);
  };
  updateOwnership = async (action: Action, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_ownership: action
    }, fee, memo, _funds);
  };
}