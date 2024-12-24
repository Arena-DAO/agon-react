import { z } from "zod";

// Schema without NEXT_PUBLIC_ prefix
const envSchema = z.object({
	CHAIN: z.string(),
	DEFAULT_NATIVE: z.string(),
	ENV: z.string(),
	CODE_ID_ESCROW: z.coerce.number(),
	CODE_ID_GROUP: z.coerce.number(),
	ARENA_DAO_ADDRESS: z.string(),
	ARENA_CORE_ADDRESS: z.string(),
	ARENA_WAGER_MODULE_ADDRESS: z.string(),
	ARENA_LEAGUE_MODULE_ADDRESS: z.string(),
	ARENA_TOURNAMENT_MODULE_ADDRESS: z.string(),
	ARENA_COMPETITION_ENROLLMENT_ADDRESS: z.string(),
	ARENA_ABC_ADDRESS: z.string(),
	ARENA_ABC_SUPPLY_DENOM: z.string(),
	ARENA_ABC_RESERVE_DENOM: z.string(),
	ARENA_PAYMENT_REGISTRY_ADDRESS: z.string(),
	ARENA_TOKEN_GATEWAY_ADDRESS: z.string(),
	ARENA_DISCORD_IDENTITY_ADDRESS: z.string().optional(),
	DAO_DAO_URL: z.string(),
	DOCS_URL: z.string(),
	RPC_URL: z.string(),
	FAUCET_URL: z.string().optional(),
	BECH32_PREFIX: z.string(),
	PFPK_URL: z.string(),
	API_URL: z.string(),
	DISCORD_API_URL: z.string(),
	WALLETCONNECT_PROJECT_ID: z.string(),
	BECH32_WALLET_LENGTH: z.coerce.number(),
	BECH32_CONTRACT_LENGTH: z.coerce.number(),
	DEFAULT_TEAM_VOTING_DURATION_TIME: z.coerce.number(),
	PAGINATION_LIMIT: z.coerce.number(),
	IBC_FUN: z.string(),
	JACKAL_PATH: z.string(),
	CODE_ID_DAO_CORE: z.coerce.number(),
	CODE_ID_CW4_GROUP: z.coerce.number(),
	CODE_ID_CW4_VOTING: z.coerce.number(),
	CODE_ID_DAO_PROPOSAL_SINGLE: z.coerce.number(),
	CODE_ID_DAO_PREPROPOSE_SINGLE: z.coerce.number(),
});

let cachedEnv: Env | null = null;

// Function to build the env object and validate it
const getEnv = (): Env => {
	if (!cachedEnv) {
		const env = {
			CHAIN: process.env.NEXT_PUBLIC_CHAIN,
			DEFAULT_NATIVE: process.env.NEXT_PUBLIC_DEFAULT_NATIVE,
			ENV: process.env.NEXT_PUBLIC_ENV,
			CODE_ID_ESCROW: process.env.NEXT_PUBLIC_CODE_ID_ESCROW,
			CODE_ID_GROUP: process.env.NEXT_PUBLIC_CODE_ID_GROUP,
			ARENA_DAO_ADDRESS: process.env.NEXT_PUBLIC_ARENA_DAO_ADDRESS,
			ARENA_CORE_ADDRESS: process.env.NEXT_PUBLIC_ARENA_CORE_ADDRESS,
			ARENA_WAGER_MODULE_ADDRESS:
				process.env.NEXT_PUBLIC_ARENA_WAGER_MODULE_ADDRESS,
			ARENA_LEAGUE_MODULE_ADDRESS:
				process.env.NEXT_PUBLIC_ARENA_LEAGUE_MODULE_ADDRESS,
			ARENA_TOURNAMENT_MODULE_ADDRESS:
				process.env.NEXT_PUBLIC_ARENA_TOURNAMENT_MODULE_ADDRESS,
			ARENA_COMPETITION_ENROLLMENT_ADDRESS:
				process.env.NEXT_PUBLIC_ARENA_COMPETITION_ENROLLMENT_ADDRESS,
			ARENA_ABC_ADDRESS: process.env.NEXT_PUBLIC_ARENA_ABC_ADDRESS,
			ARENA_ABC_SUPPLY_DENOM: process.env.NEXT_PUBLIC_ARENA_ABC_SUPPLY_DENOM,
			ARENA_ABC_RESERVE_DENOM: process.env.NEXT_PUBLIC_ARENA_ABC_RESERVE_DENOM,
			ARENA_PAYMENT_REGISTRY_ADDRESS:
				process.env.NEXT_PUBLIC_ARENA_PAYMENT_REGISTRY_ADDRESS,
			ARENA_TOKEN_GATEWAY_ADDRESS:
				process.env.NEXT_PUBLIC_ARENA_TOKEN_GATEWAY_ADDRESS,
			ARENA_DISCORD_IDENTITY_ADDRESS:
				process.env.NEXT_PUBLIC_ARENA_DISCORD_IDENTITY_ADDRESS,
			DAO_DAO_URL: process.env.NEXT_PUBLIC_DAO_DAO_URL,
			DOCS_URL: process.env.NEXT_PUBLIC_DOCS_URL,
			RPC_URL: process.env.NEXT_PUBLIC_RPC_URL,
			FAUCET_URL: process.env.NEXT_PUBLIC_FAUCET_URL, // Optional
			BECH32_PREFIX: process.env.NEXT_PUBLIC_BECH32_PREFIX,
			PFPK_URL: process.env.NEXT_PUBLIC_PFPK_URL,
			API_URL: process.env.NEXT_PUBLIC_API_URL,
			DISCORD_API_URL: process.env.NEXT_PUBLIC_DISCORD_API_URL,
			WALLETCONNECT_PROJECT_ID:
				process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
			BECH32_WALLET_LENGTH: process.env.NEXT_PUBLIC_BECH32_WALLET_LENGTH,
			BECH32_CONTRACT_LENGTH: process.env.NEXT_PUBLIC_BECH32_CONTRACT_LENGTH,
			DEFAULT_TEAM_VOTING_DURATION_TIME:
				process.env.NEXT_PUBLIC_DEFAULT_TEAM_VOTING_DURATION_TIME,
			PAGINATION_LIMIT: process.env.NEXT_PUBLIC_PAGINATION_LIMIT,
			IBC_FUN: process.env.NEXT_PUBLIC_IBC_FUN,
			JACKAL_PATH: process.env.NEXT_PUBLIC_JACKAL_PATH,
			CODE_ID_DAO_CORE: process.env.NEXT_PUBLIC_CODE_ID_DAO_CORE,
			CODE_ID_CW4_GROUP: process.env.NEXT_PUBLIC_CODE_ID_CW4_GROUP,
			CODE_ID_CW4_VOTING: process.env.NEXT_PUBLIC_CODE_ID_CW4_VOTING,
			CODE_ID_DAO_PROPOSAL_SINGLE:
				process.env.NEXT_PUBLIC_CODE_ID_DAO_PROPOSAL_SINGLE,
			CODE_ID_DAO_PREPROPOSE_SINGLE:
				process.env.NEXT_PUBLIC_CODE_ID_DAO_PREPROPOSE_SINGLE,
		};

		cachedEnv = envSchema.parse(env);
	}

	return cachedEnv;
};

export type Env = z.infer<typeof envSchema>;

export const useEnv = () => {
	return getEnv();
};
