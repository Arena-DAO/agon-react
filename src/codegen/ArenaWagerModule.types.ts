/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export interface InstantiateMsg {
  description: string;
  extension: Empty;
  key: string;
}
export interface Empty {
  [k: string]: unknown;
}
export type ExecuteMsg = {
  jail_competition: {
    additional_layered_fees?: FeeInformationForString | null;
    competition_id: Uint128;
    description: string;
    distribution?: DistributionForString | null;
    title: string;
  };
} | {
  activate_competition: {};
} | {
  add_competition_hook: {
    competition_id: Uint128;
  };
} | {
  remove_competition_hook: {
    competition_id: Uint128;
  };
} | {
  execute_competition_hook: {
    competition_id: Uint128;
    distribution?: DistributionForString | null;
  };
} | {
  create_competition: {
    banner?: string | null;
    category_id?: Uint128 | null;
    description: string;
    escrow?: EscrowInstantiateInfo | null;
    expiration: Expiration;
    host?: string | null;
    instantiate_extension: WagerInstantiateExt;
    name: string;
    rules: string[];
    rulesets: Uint128[];
    should_activate_on_funded?: boolean | null;
  };
} | {
  submit_evidence: {
    competition_id: Uint128;
    evidence: string[];
  };
} | {
  process_competition: {
    competition_id: Uint128;
    distribution?: DistributionForString | null;
  };
} | {
  extension: {
    msg: Empty;
  };
} | {
  activate_competition_manually: {
    id: Uint128;
  };
} | {
  migrate_escrows: {
    escrow_code_id: number;
    escrow_migrate_msg: MigrateMsg;
    filter?: CompetitionsFilter | null;
    limit?: number | null;
    start_after?: Uint128 | null;
  };
} | {
  update_ownership: Action;
};
export type Binary = string;
export type Decimal = string;
export type Uint128 = string;
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {};
};
export type Timestamp = Uint64;
export type Uint64 = string;
export type MigrateMsg = {
  from_compatible: {};
};
export type CompetitionsFilter = {
  competition_status: {
    status: CompetitionStatus;
  };
} | {
  category: {
    id?: Uint128 | null;
  };
} | {
  host: string;
};
export type CompetitionStatus = "pending" | "active" | "inactive" | "jailed";
export type Action = {
  transfer_ownership: {
    expiry?: Expiration | null;
    new_owner: string;
  };
} | "accept_ownership" | "renounce_ownership";
export interface FeeInformationForString {
  cw20_msg?: Binary | null;
  cw721_msg?: Binary | null;
  receiver: string;
  tax: Decimal;
}
export interface DistributionForString {
  member_percentages: MemberPercentageForString[];
  remainder_addr: string;
}
export interface MemberPercentageForString {
  addr: string;
  percentage: Decimal;
}
export interface EscrowInstantiateInfo {
  additional_layered_fees?: FeeInformationForString[] | null;
  code_id: number;
  label: string;
  msg: Binary;
}
export interface WagerInstantiateExt {
  registered_members?: string[] | null;
}
export type QueryMsg = {
  config: {};
} | {
  d_a_o: {};
} | {
  competition_count: {};
} | {
  competition: {
    competition_id: Uint128;
  };
} | {
  competitions: {
    filter?: CompetitionsFilter | null;
    limit?: number | null;
    start_after?: Uint128 | null;
  };
} | {
  evidence: {
    competition_id: Uint128;
    limit?: number | null;
    start_after?: Uint128 | null;
  };
} | {
  result: {
    competition_id: Uint128;
  };
} | {
  query_extension: {
    msg: Empty;
  };
} | {
  ownership: {};
};
export type Null = null;
export type Addr = string;
export interface CompetitionResponseForWagerExt {
  banner?: string | null;
  category_id?: Uint128 | null;
  description: string;
  escrow?: Addr | null;
  expiration: Expiration;
  extension: WagerExt;
  fees?: FeeInformationForAddr[] | null;
  host: Addr;
  id: Uint128;
  is_expired: boolean;
  name: string;
  rules: string[];
  rulesets: Uint128[];
  start_height: number;
  status: CompetitionStatus;
}
export interface WagerExt {
  registered_members?: Addr[] | null;
}
export interface FeeInformationForAddr {
  cw20_msg?: Binary | null;
  cw721_msg?: Binary | null;
  receiver: Addr;
  tax: Decimal;
}
export type ArrayOfCompetitionResponseForWagerExt = CompetitionResponseForWagerExt[];
export interface ConfigForEmpty {
  description: string;
  extension: Empty;
  key: string;
}
export type String = string;
export type ArrayOfEvidence = Evidence[];
export interface Evidence {
  content: string;
  id: Uint128;
  submit_time: Timestamp;
  submit_user: Addr;
}
export interface OwnershipForString {
  owner?: string | null;
  pending_expiry?: Expiration | null;
  pending_owner?: string | null;
}
export type NullableDistributionForString = DistributionForString | null;