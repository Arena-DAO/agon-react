/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.11.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Uint64 = string;
export interface InstantiateMsg {
  members?: AddMemberMsg[] | null;
}
export interface AddMemberMsg {
  addr: string;
  seed?: Uint64 | null;
}
export type ExecuteMsg = {
  update_members: {
    to_add?: AddMemberMsg[] | null;
    to_remove?: string[] | null;
    to_update?: MemberMsgForString[] | null;
  };
} | {
  update_ownership: Action;
};
export type Action = {
  transfer_ownership: {
    expiry?: Expiration | null;
    new_owner: string;
  };
} | "accept_ownership" | "renounce_ownership";
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {};
};
export type Timestamp = Uint64;
export interface MemberMsgForString {
  addr: string;
  seed: Uint64;
}
export type QueryMsg = {
  members: {
    limit?: number | null;
    start_after?: MemberMsgForString | null;
  };
} | {
  members_count: {};
} | {
  is_valid_distribution: {
    addrs: string[];
  };
} | {
  is_member: {
    addr: string;
  };
} | {
  ownership: {};
};
export type MigrateMsg = {
  from_compatible: {};
};
export type Boolean = boolean;
export type Addr = string;
export type ArrayOfMemberMsgForAddr = MemberMsgForAddr[];
export interface MemberMsgForAddr {
  addr: Addr;
  seed: Uint64;
}
export interface OwnershipForString {
  owner?: string | null;
  pending_expiry?: Expiration | null;
  pending_owner?: string | null;
}