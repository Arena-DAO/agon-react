"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { ArenaCoreQueryClient } from "~/codegen/ArenaCore.client";
import { useArenaCoreQueryExtensionQuery } from "~/codegen/ArenaCore.react-query";
import type { Ruleset } from "~/codegen/ArenaCore.types";
import { useCosmWasmClient } from "~/hooks/useCosmWamClient";
import { useEnv } from "~/hooks/useEnv";

interface RulesetsSectionProps {
	rulesetId: string;
}

const RulesetsSection = ({ rulesetId }: RulesetsSectionProps) => {
	const { data: env } = useEnv();
	const { data: cosmWasmClient } = useCosmWasmClient(env.CHAIN);
	const { data } = useArenaCoreQueryExtensionQuery({
		client:
			cosmWasmClient &&
			new ArenaCoreQueryClient(cosmWasmClient, env.ARENA_CORE_ADDRESS),
		args: { msg: { ruleset: { id: rulesetId } } },
	});
	const parsedData = data ? (data as unknown as Ruleset) : undefined;

	return (
		<Card>
			<CardHeader className="pb-0">Ruleset {rulesetId}</CardHeader>
			<CardBody className="space-y-2">
				<p>{parsedData?.description}</p>
				<ul className="list-inside list-disc">
					{parsedData?.rules.map((rule, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: Best option
						<li key={i} className="break-all">
							{rule}
						</li>
					))}
				</ul>
			</CardBody>
		</Card>
	);
};

export default RulesetsSection;
