import TokenInfo from "@/components/TokenInfo";
import { useChain } from "@cosmos-kit/react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Spinner,
} from "@nextui-org/react";
import _ from "lodash";
import type React from "react";
import { useEffect, useState } from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { getBaseToken, getNativeAsset } from "~/helpers/TokenHelpers";
import { useEnv } from "~/hooks/useEnv";

const EntryFeeSchema = z.object({
	denom: z.string().min(1, { message: "Denom is required" }),
	amount: z.number().positive({ message: "Amount must be positive" }),
});

type EntryFeeFormValues = z.infer<typeof EntryFeeSchema>;

interface EntryFeeFormProps {
	isOpen: boolean;
	onOpenChange: () => void;
	onClose: () => void;
}

const EntryFeeForm: React.FC<EntryFeeFormProps> = ({
	isOpen,
	onOpenChange,
	onClose,
}) => {
	const { data: env } = useEnv();
	const { assets } = useChain(env.CHAIN);
	const { setValue: setParentValue } = useFormContext();

	const {
		control,
		handleSubmit,
		watch,
		setError,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<EntryFeeFormValues>({
		resolver: zodResolver(EntryFeeSchema),
		defaultValues: {
			denom: env.DEFAULT_NATIVE,
		},
	});

	const watchDenom = watch("denom");
	const [debouncedDenom, setDebouncedDenom] = useState(watchDenom);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const debouncer = _.debounce(setDebouncedDenom, 500);
		debouncer(watchDenom);
		return debouncer.cancel;
	}, [watchDenom]);

	const onSubmit = async (values: EntryFeeFormValues) => {
		setIsLoading(true);
		try {
			const native = await getNativeAsset(
				values.denom,
				env.RPC_URL,
				assets?.assets,
			);
			const token = getBaseToken(
				{ denom: values.denom, amount: values.amount.toString() },
				native,
			);

			setParentValue("enrollmentInfo.entryFee", {
				denom: token.denom,
				amount: BigInt(token.amount).toString(),
			});

			onClose();
		} catch (e) {
			console.error(e);
			setError("denom", { message: "Invalid denom" });
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Modal
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			onClose={() => {
				reset();
				onClose();
			}}
		>
			<ModalContent>
				<ModalHeader>Set Entry Fee</ModalHeader>
				<ModalBody>
					<Controller
						name="denom"
						control={control}
						render={({ field }) => (
							<Input
								{...field}
								label="Token Denom"
								placeholder="Enter native token denom"
								isInvalid={!!errors.denom}
								errorMessage={errors.denom?.message}
							/>
						)}
					/>
					<Controller
						name="amount"
						control={control}
						render={({ field }) => (
							<Input
								{...field}
								type="number"
								label="Amount"
								placeholder="Enter amount"
								isInvalid={!!errors.amount}
								errorMessage={errors.amount?.message}
								value={field.value?.toString() || ""}
								onChange={(e) =>
									field.onChange(Number.parseFloat(e.target.value))
								}
							/>
						)}
					/>
					{isLoading ? (
						<Spinner size="sm" />
					) : (
						debouncedDenom && (
							<TokenInfo denomOrAddress={debouncedDenom} isNative={true} />
						)
					)}
				</ModalBody>
				<ModalFooter>
					<Button
						onClick={handleSubmit(onSubmit)}
						isLoading={isSubmitting || isLoading}
					>
						Set Fee
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default EntryFeeForm;
