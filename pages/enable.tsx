import { toBinary } from "cosmwasm";
import {
  CosmosMsgForEmpty,
  InstantiateMsg as ProposalMultipleInstantiateMsg,
} from "@dao/DaoProposalMultiple.types";
import { ExecuteMsg } from "@dao/DaoCore.types";
import { DaoCoreQueryClient } from "@dao/DaoCore.client";
import { DaoProposalSingleClient } from "@dao/DaoProposalSingle.client";
import {
  InstantiateMsg as AgonCoreInstantiateMsg,
  InstantiateExt,
} from "@agon/AgonCore.types";
import * as Yup from "yup";
import { Heading, Container, Text, Box } from "@chakra-ui/react";
import React from "react";
import { useChain } from "@cosmos-kit/react";
import { FiPercent } from "react-icons/fi";
import DAOCreate from "@components/DAO/DAOCreate";

export default function EnableAgon() {
  const chain = useChain(process.env.NEXT_PUBLIC_CHAIN!);
  const schema = Yup.object().shape({
    dao: Yup.string().required().label("DAO"),
    allow_revoting: Yup.bool().label("Allow Revoting"),
    close_proposal_on_execution_failure: Yup.bool()
      .default(true)
      .label("Close Proposal on Execution Failure"),
    max_voting_period: Yup.number()
      .integer()
      .positive()
      .label("Max Voting Period"),
    max_voting_period_units: Yup.mixed().oneOf(["Time", "Height"]),
    min_voting_period: Yup.number()
      .integer()
      .positive()
      .transform((currentValue, originalValue) => {
        return originalValue === "" ? null : currentValue;
      })
      .nullable()
      .label("Min Voting Period"),
    min_voting_period_units: Yup.mixed().oneOf(["Time", "Height"]),
    only_members_execute: Yup.bool().label("Only Members Execute"),
    voting_threshold: Yup.mixed().oneOf(["Majority", "Percentage"]),
    voting_threshold_percentage: Yup.number()
      .positive()
      .transform((currentValue, originalValue) => {
        return originalValue === "" ? null : currentValue;
      })
      .nullable()
      .min(0)
      .max(100)
      .when("voting_threshold", {
        is: "Percentage",
        then: (x) => x.required(),
      })
      .label("Percentage"),
    tax: Yup.number().positive().required().min(0).max(100).label("Tax"),
    rulesets: Yup.array()
      .of(
        Yup.object().shape({
          description: Yup.string().required().label("Description"),
          rules: Yup.array()
            .min(1)
            .of(
              Yup.object().shape({
                rule: Yup.string().required().label("Rule"),
              })
            )
            .label("Rules"),
        })
      )
      .label("Rulesets"),
    //competition_modules_instantiate_info: [] as ModuleInstantiateInfo[],
  });
  interface AgonParams extends Yup.InferType<typeof schema> {}
  const onSubmit = async (params: AgonParams) => {
    let msg: CosmosMsgForEmpty = {
      wasm: {
        execute: {
          contract_addr: params.dao,
          funds: [],
          msg: toBinary({
            update_proposal_modules: {
              to_add: [
                {
                  code_id: parseInt(
                    process.env.NEXT_PUBLIC_CODE_ID_PROPOSAL_MULTIPLE!
                  ),
                  label: "Agon Proposal Module",
                  msg: toBinary({
                    allow_revoting: params.allow_revoting,
                    close_proposal_on_execution_failure:
                      params.close_proposal_on_execution_failure,
                    max_voting_period:
                      params.max_voting_period_units == "Time"
                        ? { time: params.max_voting_period }
                        : { height: params.max_voting_period },
                    min_voting_period: params.min_voting_period
                      ? params.min_voting_period_units == "Time"
                        ? { time: params.min_voting_period }
                        : { height: params.min_voting_period }
                      : null,
                    only_members_execute: params.only_members_execute,
                    voting_strategy: {
                      single_choice: { quorum: params.voting_threshold },
                    },
                    pre_propose_info: {
                      module_may_propose: {
                        info: {
                          code_id: parseInt(
                            process.env.NEXT_PUBLIC_CODE_ID_AGON_CORE!
                          ),
                          label: "Agon Core",
                          msg: toBinary({
                            open_proposal_submission: false,
                            extension: {
                              competition_modules_instantiate_info: [],
                              rulesets:
                                params.rulesets?.map((x) => {
                                  return {
                                    id: "0",
                                    description: x.description,
                                    rules: x.rules?.map((y) => {
                                      return y.rule;
                                    }),
                                  };
                                }) ?? [],
                              tax: params.tax.toString(),
                            } as InstantiateExt,
                          } as AgonCoreInstantiateMsg),
                        },
                      },
                    },
                  } as ProposalMultipleInstantiateMsg),
                },
              ],
              to_disable: [],
            },
          } as ExecuteMsg),
        },
      },
    };

    //query proposal modules for a single proposal module
    const cosmwasmClient = await chain.getSigningCosmWasmClient();
    const daoClient = new DaoCoreQueryClient(cosmwasmClient, params.dao);
    const proposalModules = await daoClient.activeProposalModules({});
    for (const proposalModule of proposalModules) {
      const proposalClient = new DaoProposalSingleClient(
        cosmwasmClient,
        chain.address!,
        proposalModule.address
      );

      const creationPolicy: any = await proposalClient.proposalCreationPolicy();
      console.log(creationPolicy);
      if (
        creationPolicy.anyone == undefined ||
        creationPolicy.module.addr != chain.address!
      )
        continue;

      await proposalClient.propose({
        title: "Enable the Agon Proposal Module",
        description:
          "Allow decentralized competition to be handled through this DAO!",
        msgs: [msg],
      });
    }
  };
  return (
    <Container pb={10} centerContent maxW="70ch">
      <Heading
        as="h1"
        className="holographic"
        fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
        fontWeight="extrabold"
        textAlign="center"
      >
        Enable Agon
      </Heading>
      <Text fontWeight="bold" mb={3} textAlign="center">
        Use this form to create a proposal enabling Agon Protocol on your DAO!
      </Text>
      <Card w="100%">
        <Form
          resolver={yupResolver(schema)}
          onSubmit={onSubmit}
          defaultValues={{
            allow_revoting: true,
            close_proposal_on_execution_failure: true,
            max_voting_period: 604800,
            max_voting_period_units: "Time",
            min_voting_period_units: "Time",
            tax: 15,
            voting_threshold: "Majority",
          }}
          m="4"
        >
          <FormLayout>
            <Field name="dao" label="DAO" />
            <DAOCreate />
            <FormLayout columns={2}>
              <Field
                name="tax"
                label="Tax"
                textAlign="right"
                rightAddon={
                  <Box my="auto">
                    <FiPercent />{" "}
                  </Box>
                }
              />
              <Field
                type="switch"
                name="only_members_execute"
                label="Only Members Execute"
              />
            </FormLayout>
            <FormLayout columns={2}>
              <Field
                type="select"
                name="voting_threshold"
                label="Voting Threshold"
                options={[{ value: "Majority" }, { value: "Percentage" }]}
              />
              <DisplayIf
                name="voting_threshold"
                condition={(x) => x == "Percentage"}
              >
                <Field
                  name="voting_threshold_percentage"
                  label="Percentage"
                  textAlign="right"
                  rightAddon={
                    <Box my="auto">
                      <FiPercent />{" "}
                    </Box>
                  }
                />
              </DisplayIf>
            </FormLayout>
            <ArrayField name="rulesets" label="Rulesets">
              <Divider />
              <Field
                type="textarea"
                name="description"
                placeholder="Description"
                label="Description"
              />
              <ArrayField name="rules" label="Rules">
                <Field name="rule" placeholder="Rule" />
              </ArrayField>
            </ArrayField>
            <SubmitButton label="Submit" />
          </FormLayout>
        </Form>
      </Card>
    </Container>
  );
}
