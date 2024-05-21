/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Admin, Uint128, Binary, InstantiateMsg, InitialItem, ModuleInstantiateInfo, Coin, ExecuteMsg, CosmosMsgForEmpty, BankMsg, StakingMsg, DistributionMsg, IbcMsg, Timestamp, Uint64, WasmMsg, GovMsg, VoteOption, Duration, Empty, IbcTimeout, IbcTimeoutBlock, Cw20ReceiveMsg, Cw721ReceiveMsg, Config, SubDao, QueryMsg, MigrateMsg, PreProposeInfo, MigrateParams, MigrateV1ToV2, MigrationModuleParams, ProposalParams, V1CodeIds, V2CodeIds, Addr, ProposalModuleStatus, ArrayOfProposalModule, ProposalModule, AdminNominationResponse, Cw20BalanceResponse, ArrayOfAddr, DaoURIResponse, PauseInfoResponse, Expiration, DumpStateResponse, ContractVersion, GetItemResponse, InfoResponse, ArrayOfString, ArrayOfSubDao, ProposalModuleCountResponse, TotalPowerAtHeightResponse, VotingPowerAtHeightResponse } from "./DaoDaoCore.types";
export interface DaoDaoCoreReadOnlyInterface {
  contractAddress: string;
  admin: () => Promise<Addr>;
  adminNomination: () => Promise<AdminNominationResponse>;
  config: () => Promise<Config>;
  cw20Balances: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<Cw20BalanceResponse>;
  cw20TokenList: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<ArrayOfAddr>;
  cw721TokenList: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<ArrayOfAddr>;
  dumpState: () => Promise<DumpStateResponse>;
  getItem: ({
    key
  }: {
    key: string;
  }) => Promise<GetItemResponse>;
  listItems: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<ArrayOfString>;
  info: () => Promise<InfoResponse>;
  proposalModules: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<ArrayOfProposalModule>;
  activeProposalModules: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<ArrayOfProposalModule>;
  proposalModuleCount: () => Promise<ProposalModuleCountResponse>;
  pauseInfo: () => Promise<PauseInfoResponse>;
  votingModule: () => Promise<Addr>;
  listSubDaos: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<ArrayOfSubDao>;
  daoURI: () => Promise<DaoURIResponse>;
  votingPowerAtHeight: ({
    address,
    height
  }: {
    address: string;
    height?: number;
  }) => Promise<VotingPowerAtHeightResponse>;
  totalPowerAtHeight: ({
    height
  }: {
    height?: number;
  }) => Promise<TotalPowerAtHeightResponse>;
}
export class DaoDaoCoreQueryClient implements DaoDaoCoreReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.admin = this.admin.bind(this);
    this.adminNomination = this.adminNomination.bind(this);
    this.config = this.config.bind(this);
    this.cw20Balances = this.cw20Balances.bind(this);
    this.cw20TokenList = this.cw20TokenList.bind(this);
    this.cw721TokenList = this.cw721TokenList.bind(this);
    this.dumpState = this.dumpState.bind(this);
    this.getItem = this.getItem.bind(this);
    this.listItems = this.listItems.bind(this);
    this.info = this.info.bind(this);
    this.proposalModules = this.proposalModules.bind(this);
    this.activeProposalModules = this.activeProposalModules.bind(this);
    this.proposalModuleCount = this.proposalModuleCount.bind(this);
    this.pauseInfo = this.pauseInfo.bind(this);
    this.votingModule = this.votingModule.bind(this);
    this.listSubDaos = this.listSubDaos.bind(this);
    this.daoURI = this.daoURI.bind(this);
    this.votingPowerAtHeight = this.votingPowerAtHeight.bind(this);
    this.totalPowerAtHeight = this.totalPowerAtHeight.bind(this);
  }

  admin = async (): Promise<Addr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      admin: {}
    });
  };
  adminNomination = async (): Promise<AdminNominationResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      admin_nomination: {}
    });
  };
  config = async (): Promise<Config> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  cw20Balances = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<Cw20BalanceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      cw20_balances: {
        limit,
        start_after: startAfter
      }
    });
  };
  cw20TokenList = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<ArrayOfAddr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      cw20_token_list: {
        limit,
        start_after: startAfter
      }
    });
  };
  cw721TokenList = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<ArrayOfAddr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      cw721_token_list: {
        limit,
        start_after: startAfter
      }
    });
  };
  dumpState = async (): Promise<DumpStateResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      dump_state: {}
    });
  };
  getItem = async ({
    key
  }: {
    key: string;
  }): Promise<GetItemResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_item: {
        key
      }
    });
  };
  listItems = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<ArrayOfString> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_items: {
        limit,
        start_after: startAfter
      }
    });
  };
  info = async (): Promise<InfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      info: {}
    });
  };
  proposalModules = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<ArrayOfProposalModule> => {
    return this.client.queryContractSmart(this.contractAddress, {
      proposal_modules: {
        limit,
        start_after: startAfter
      }
    });
  };
  activeProposalModules = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<ArrayOfProposalModule> => {
    return this.client.queryContractSmart(this.contractAddress, {
      active_proposal_modules: {
        limit,
        start_after: startAfter
      }
    });
  };
  proposalModuleCount = async (): Promise<ProposalModuleCountResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      proposal_module_count: {}
    });
  };
  pauseInfo = async (): Promise<PauseInfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      pause_info: {}
    });
  };
  votingModule = async (): Promise<Addr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      voting_module: {}
    });
  };
  listSubDaos = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<ArrayOfSubDao> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_sub_daos: {
        limit,
        start_after: startAfter
      }
    });
  };
  daoURI = async (): Promise<DaoURIResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      dao_u_r_i: {}
    });
  };
  votingPowerAtHeight = async ({
    address,
    height
  }: {
    address: string;
    height?: number;
  }): Promise<VotingPowerAtHeightResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      voting_power_at_height: {
        address,
        height
      }
    });
  };
  totalPowerAtHeight = async ({
    height
  }: {
    height?: number;
  }): Promise<TotalPowerAtHeightResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      total_power_at_height: {
        height
      }
    });
  };
}
export interface DaoDaoCoreInterface extends DaoDaoCoreReadOnlyInterface {
  contractAddress: string;
  sender: string;
  executeAdminMsgs: ({
    msgs
  }: {
    msgs: CosmosMsgForEmpty[];
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  executeProposalHook: ({
    msgs
  }: {
    msgs: CosmosMsgForEmpty[];
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  pause: ({
    duration
  }: {
    duration: Duration;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  unpause: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  receive: ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  receiveNft: ({
    msg,
    sender,
    tokenId
  }: {
    msg: Binary;
    sender: string;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  removeItem: ({
    key
  }: {
    key: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  setItem: ({
    key,
    value
  }: {
    key: string;
    value: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  nominateAdmin: ({
    admin
  }: {
    admin?: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  acceptAdminNomination: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  withdrawAdminNomination: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateConfig: ({
    config
  }: {
    config: Config;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateCw20List: ({
    toAdd,
    toRemove
  }: {
    toAdd: string[];
    toRemove: string[];
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateCw721List: ({
    toAdd,
    toRemove
  }: {
    toAdd: string[];
    toRemove: string[];
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateProposalModules: ({
    toAdd,
    toDisable
  }: {
    toAdd: ModuleInstantiateInfo[];
    toDisable: string[];
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateVotingModule: ({
    module
  }: {
    module: ModuleInstantiateInfo;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateSubDaos: ({
    toAdd,
    toRemove
  }: {
    toAdd: SubDao[];
    toRemove: string[];
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class DaoDaoCoreClient extends DaoDaoCoreQueryClient implements DaoDaoCoreInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.executeAdminMsgs = this.executeAdminMsgs.bind(this);
    this.executeProposalHook = this.executeProposalHook.bind(this);
    this.pause = this.pause.bind(this);
    this.unpause = this.unpause.bind(this);
    this.receive = this.receive.bind(this);
    this.receiveNft = this.receiveNft.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.setItem = this.setItem.bind(this);
    this.nominateAdmin = this.nominateAdmin.bind(this);
    this.acceptAdminNomination = this.acceptAdminNomination.bind(this);
    this.withdrawAdminNomination = this.withdrawAdminNomination.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
    this.updateCw20List = this.updateCw20List.bind(this);
    this.updateCw721List = this.updateCw721List.bind(this);
    this.updateProposalModules = this.updateProposalModules.bind(this);
    this.updateVotingModule = this.updateVotingModule.bind(this);
    this.updateSubDaos = this.updateSubDaos.bind(this);
  }

  executeAdminMsgs = async ({
    msgs
  }: {
    msgs: CosmosMsgForEmpty[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      execute_admin_msgs: {
        msgs
      }
    }, fee, memo, _funds);
  };
  executeProposalHook = async ({
    msgs
  }: {
    msgs: CosmosMsgForEmpty[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      execute_proposal_hook: {
        msgs
      }
    }, fee, memo, _funds);
  };
  pause = async ({
    duration
  }: {
    duration: Duration;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      pause: {
        duration
      }
    }, fee, memo, _funds);
  };
  unpause = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      unpause: {}
    }, fee, memo, _funds);
  };
  receive = async ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      receive: {
        amount,
        msg,
        sender
      }
    }, fee, memo, _funds);
  };
  receiveNft = async ({
    msg,
    sender,
    tokenId
  }: {
    msg: Binary;
    sender: string;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      receive_nft: {
        msg,
        sender,
        token_id: tokenId
      }
    }, fee, memo, _funds);
  };
  removeItem = async ({
    key
  }: {
    key: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_item: {
        key
      }
    }, fee, memo, _funds);
  };
  setItem = async ({
    key,
    value
  }: {
    key: string;
    value: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_item: {
        key,
        value
      }
    }, fee, memo, _funds);
  };
  nominateAdmin = async ({
    admin
  }: {
    admin?: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      nominate_admin: {
        admin
      }
    }, fee, memo, _funds);
  };
  acceptAdminNomination = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      accept_admin_nomination: {}
    }, fee, memo, _funds);
  };
  withdrawAdminNomination = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      withdraw_admin_nomination: {}
    }, fee, memo, _funds);
  };
  updateConfig = async ({
    config
  }: {
    config: Config;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_config: {
        config
      }
    }, fee, memo, _funds);
  };
  updateCw20List = async ({
    toAdd,
    toRemove
  }: {
    toAdd: string[];
    toRemove: string[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_cw20_list: {
        to_add: toAdd,
        to_remove: toRemove
      }
    }, fee, memo, _funds);
  };
  updateCw721List = async ({
    toAdd,
    toRemove
  }: {
    toAdd: string[];
    toRemove: string[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_cw721_list: {
        to_add: toAdd,
        to_remove: toRemove
      }
    }, fee, memo, _funds);
  };
  updateProposalModules = async ({
    toAdd,
    toDisable
  }: {
    toAdd: ModuleInstantiateInfo[];
    toDisable: string[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_proposal_modules: {
        to_add: toAdd,
        to_disable: toDisable
      }
    }, fee, memo, _funds);
  };
  updateVotingModule = async ({
    module
  }: {
    module: ModuleInstantiateInfo;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_voting_module: {
        module
      }
    }, fee, memo, _funds);
  };
  updateSubDaos = async ({
    toAdd,
    toRemove
  }: {
    toAdd: SubDao[];
    toRemove: string[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_sub_daos: {
        to_add: toAdd,
        to_remove: toRemove
      }
    }, fee, memo, _funds);
  };
}