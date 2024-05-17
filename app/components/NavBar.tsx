"use client";

import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
} from "@nextui-org/react";
import clsx from 'clsx'
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import dynamic from "next/dynamic";
const ColorModeSwitch = dynamic(() => import("./ColorModeSwitch"), {
	ssr: false,
});
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { type Dispatch, type SetStateAction, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useEnv } from "~/hooks/useEnv";
import WalletConnectToggle from "./WalletConnectToggle";

interface MenuItem {
	href?: string;
	label: string;
	isExternal?: boolean;
	isDropdown?: boolean;
	ariaLabel?: string;
	dropdownItems?: MenuDropdownItem[];
}

interface MenuDropdownItem {
	href?: string;
	label: string;
	description?: string;
	isExternal?: boolean;
}

interface DynamicNavbarItem {
	item: MenuItem;
	setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
	dropdownButtonClass: string;
	linkClass: string;
}

const DynamicNavbarItem = ({
	item,
	setIsMenuOpen,
	dropdownButtonClass,
	linkClass,
}: DynamicNavbarItem) => {
	if (item.isDropdown)
		return (
			<Dropdown>
				<DropdownTrigger>
					<Button
						disableRipple
						className={dropdownButtonClass}
						color="primary"
						endContent={<BsChevronDown />}
						size="lg"
						variant="light"
					>
						{item.label}
					</Button>
				</DropdownTrigger>
				<DropdownMenu
					aria-label={item.ariaLabel}
					itemClasses={{
						base: "gap-4",
						title: "text-primary font-semibold",
					}}
					items={item.dropdownItems}
				>
					{(dropdownItem) => (
						<DropdownItem
							as={Link}
							key={dropdownItem.label}
							description={dropdownItem.description}
							href={dropdownItem.href}
							onPress={() => setIsMenuOpen(false)}
							target={dropdownItem.isExternal ? "_blank" : undefined}
						>
							{dropdownItem.label}
						</DropdownItem>
					)}
				</DropdownMenu>
			</Dropdown>
		);
	return (
		<Link
			className={linkClass}
			href={item.href}
			size="lg"
			isExternal={item.isExternal}
			onClick={() => setIsMenuOpen(false)}
		>
			{item.label}
		</Link>
	);
};

export default function AppNavbar() {
	const { data: env } = useEnv();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navbarItems: MenuItem[] = [
		{ href: "/compete", label: "Compete" },
		{
			label: "DAO",
			isDropdown: true,
			ariaLabel: "DAO Menu",
			dropdownItems: [
				{
					href: `${env.DAO_DAO_URL}/dao/${env.ARENA_DAO_ADDRESS}`,
					label: "DAO",
					description: "View the Arena DAO on DAO DAO",
					isExternal: true,
				},
				{
					href: "/dao/jailhouse",
					description:
						"View jailed competitions needing action through the DAO",
					label: "Jailhouse",
				},
			],
		},
		{
			label: "Resources",
			isDropdown: true,
			ariaLabel: "Additional Resources",
			dropdownItems: [
				...(env.ENV === "development"
					? [
							{
								// biome-ignore lint/style/noNonNullAssertion: dev env has this populated
								href: env.FAUCET_URL!,
								label: "Faucet",
								description: "Get testnet gas to explore The Arena",
								isExternal: true,
							},
						]
					: []),
				{
					href: env.DOCS_URL,
					label: "Docs",
					description: "Learn more about how the Arena DAO works",
					isExternal: true,
				},
				{
					href: env.IBC_FUN,
					label: "Bridge",
					description: "Transfer funds from other chains into the ecosystem",
					isExternal: true,
				},
			],
		},
		{
			label: "Socials",
			isDropdown: true,
			ariaLabel: "Additional Resources",
			dropdownItems: [
				{
					href: "https://x.com/ArenaDAO",
					label: "Twitter",
					isExternal: !0,
					description: "Learn more about how the Arena DAO works",
				},
				{
					href: "https://discord.arenadao.org/",
					label: "Discord",
					isExternal: !0,
					description: "Transfer funds from other chains into the ecosystem",
				},
				{
					href: "https://github.com/Arena-DAO",
					label: "Github",
					isExternal: !0,
					description: "Transfer funds from other chains into the ecosystem",
				},
			],
		}
	];

	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			isMenuOpen={isMenuOpen}
			className="fixed max-w-[1920px]"
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="md:hidden"
				/>
				<NavbarBrand>
					<Link href="/" onClick={() => setIsMenuOpen(false)}>
						<Image
							as={NextImage}
							src="/logo.svg"
							alt="logo"
							width="30"
							height="30"
							removeWrapper
						/>
						<p className="ml-2 font-bold text-inherit">Arena DAO</p>
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden gap-4 md:flex" justify="center">
				<a className="text-sm/6 font-semibold focus:outline-none data-[active]:text-[#FF8000] data-[hover]:text-[#FF8000] data-[focus]:outline-1 data-[focus]:outline-white flex items-center gap-2 hover:text-[#FF8000]" href="/compete">
					Compete
				</a>
				<Popover className="z-50">
					{({ open }) => (
						<>
							<PopoverButton className="text-sm/6 font-semibold focus:outline-none data-[active]:text-[#FF8000] data-[hover]:text-[#FF8000] data-[focus]:outline-1 data-[focus]:outline-white flex items-center gap-2 hover:text-[#FF8000]">
								DAO
            					<BsChevronDown className={clsx('size-3', open && 'rotate-180')} />
							</PopoverButton>
							<Transition
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<PopoverPanel
								anchor="bottom"
								className="divide-y divide-white/5 mt-5 backdrop-blur-lg backdrop-saturate-150 bg-background/70 rounded-xl text-sm/6 [--anchor-gap:var(--spacing-5)]"
								>
								<div className="p-3">
									<a className="block rounded-lg py-2 px-3 transition hover:bg-[#FF8000]" href="/dao/dao">
										<p className="font-semibold">DAO</p>
										<p className="opacity-75">View the Arena DAO on DAO DAO</p>
									</a>
									<a className="block rounded-lg py-2 px-3 transition hover:bg-[#FF8000]" href="/dao/jailhouse">
										<p className="font-semibold">Jailhouse</p>
										<p className="opacity-75">View jailed competitions needing action through the DAO</p>
									</a>
								</div>
								</PopoverPanel>
							</Transition>
						</>
					)}
				</Popover>
				<Popover>
					{({ open }) => (
						<>
							<PopoverButton className="text-sm/6 font-semibold focus:outline-none data-[active]:text-[#FF8000] data-[hover]:text-[#FF8000] data-[focus]:outline-1 data-[focus]:outline-white flex items-center gap-2 hover:text-[#FF8000]">
								Resources
            					<BsChevronDown className={clsx('size-3', open && 'rotate-180')} />
							</PopoverButton>
							<Transition
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<PopoverPanel
								anchor="bottom"
								className="divide-y divide-white/5 mt-5 backdrop-blur-lg backdrop-saturate-150 bg-background/70 rounded-xl text-sm/6 [--anchor-gap:var(--spacing-5)]"
								>
								<div className="p-3">
									<a className="block rounded-lg py-2 px-3 transition hover:bg-[#FF8000]" href="https://discord.com/channels/986573321023942708/1041694375702446170" target="_blank">
										<p className="font-semibold">Faucet</p>
										<p className="opacity-75">Get testnet gas to explore The Arena</p>
									</a>
									<a className="block rounded-lg py-2 px-3 transition hover:bg-[#FF8000]" href="/resources/docs">
										<p className="font-semibold">Docs</p>
										<p className="opacity-75">Learn more about how the Arena DAO works</p>
									</a>
									<a className="block rounded-lg py-2 px-3 transition hover:bg-[#FF8000]" href="/resources/bridge">
										<p className="font-semibold">Bridge</p>
										<p className="opacity-75">Transfer funds from other chains into the ecosystem</p>
									</a>
								</div>
								</PopoverPanel>
							</Transition>
						</>
					)}
				</Popover>
				<Popover>
					{({ open }) => (
						<>
							<PopoverButton className="text-sm/6 font-semibold focus:outline-none data-[active]:text-[#FF8000] data-[hover]:text-[#FF8000] data-[focus]:outline-1 data-[focus]:outline-white flex items-center gap-2 hover:text-[#FF8000]">
								Socials
            					<BsChevronDown className={clsx('size-3', open && 'rotate-180')} />
							</PopoverButton>
							<Transition
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<PopoverPanel
								anchor="bottom"
								className="divide-y divide-white/5 mt-5 backdrop-blur-lg backdrop-saturate-150 bg-background/70 rounded-xl text-sm/6 [--anchor-gap:var(--spacing-5)]"
								>
								<div className="p-3">
									<a className="block rounded-lg py-2 px-3 transition hover:bg-[#FF8000]" href="https://x.com/ArenaDAO">
										<p className="font-semibold">Twitter</p>
										<p className="opacity-75">Keep updated on our twitter posts</p>
									</a>
									<a className="block rounded-lg py-2 px-3 transition hover:bg-[#FF8000]" href="https://discord.arenadao.org/">
										<p className="font-semibold">Discord</p>
										<p className="opacity-75">Join our group and become a gladiator</p>
									</a>
									<a className="block rounded-lg py-2 px-3 transition hover:bg-[#FF8000]" href="https://github.com/Arena-DAO">
										<p className="font-semibold">Github</p>
										<p className="opacity-75">Contribute to the DAO as a developer</p>
									</a>
								</div>
								</PopoverPanel>
							</Transition>
						</>
					)}
				</Popover>
				<ColorModeSwitch />
				<WalletConnectToggle />
			</NavbarContent>

			<NavbarMenu>
				{navbarItems.map((item) => (
					<DynamicNavbarItem
						key={item.label}
						item={item}
						setIsMenuOpen={setIsMenuOpen}
						dropdownButtonClass="w-full justify-start bg-transparent p-0 font-bold text-medium data-[hover=true]:bg-transparent"
						linkClass="w-full py-1 font-bold"
					/>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
