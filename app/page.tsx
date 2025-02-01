"use client";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Coins, Gavel, Medal, Scale, Trophy } from "lucide-react";
import Link from "next/link";
import type { PropsWithChildren } from "react";

const AnimatedIcon = ({ children }: PropsWithChildren) => (
	<motion.div
		className="flex h-32 w-32 items-center justify-center rounded-full bg-amber-700/20"
		animate={{
			scale: [1, 1.1, 1],
			rotate: [0, 5, -5, 0],
		}}
		transition={{
			duration: 4,
			repeat: Number.POSITIVE_INFINITY,
			ease: "easeInOut",
		}}
	>
		{children}
	</motion.div>
);

const FloatingElement = ({
	delay = 0,
	children,
}: PropsWithChildren & { delay: number }) => (
	<motion.div
		animate={{
			y: [0, -20, 0],
		}}
		transition={{
			duration: 3,
			repeat: Number.POSITIVE_INFINITY,
			delay,
			ease: "easeInOut",
		}}
	>
		{children}
	</motion.div>
);

const HomePage = () => {
	return (
		<div className="relative min-h-screen">
			{/* Hero Section */}
			<div className="relative flex min-h-screen items-center justify-center overflow-hidden">
				{/* Animated background pattern */}
				<motion.div
					className="absolute inset-0 z-0"
					style={{
						background:
							"radial-gradient(circle at 50% 50%, rgba(176, 147, 82, 0.2) 0%, rgba(0, 0, 0, 0) 50%)",
					}}
					animate={{
						background: [
							"radial-gradient(circle at 50% 50%, rgba(176, 147, 82, 0.2) 0%, rgba(0, 0, 0, 0) 50%)",
							"radial-gradient(circle at 50% 50%, rgba(176, 147, 82, 0.3) 0%, rgba(0, 0, 0, 0) 50%)",
						],
					}}
					transition={{
						repeat: Number.POSITIVE_INFINITY,
						duration: 3,
						repeatType: "mirror",
					}}
				/>

				{/* Decorative Elements */}
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute top-32 left-10">
						<FloatingElement delay={0}>
							<Medal className="h-16 w-16 text-primary/30" />
						</FloatingElement>
					</div>
					<div className="absolute top-48 right-20">
						<FloatingElement delay={1}>
							<Coins className="h-12 w-12 text-primary/20" />
						</FloatingElement>
					</div>
					<div className="absolute bottom-32 left-1/4">
						<FloatingElement delay={0.5}>
							<Scale className="h-14 w-14 text-primary/25" />
						</FloatingElement>
					</div>
				</div>

				{/* Hero Content */}
				<motion.div
					className="relative z-20 px-4 text-center"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<motion.div
						className="mb-8 inline-block"
						animate={{
							scale: [1, 1.05, 1],
						}}
						transition={{
							duration: 4,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
						}}
					>
						<Trophy className="mx-auto h-24 w-24 text-primary" />
					</motion.div>

					<h1 className="font-bold text-6xl md:text-8xl">
						ARENA DAO
						<span className="mt-4 block text-2xl">
							The Premier Web3 Competition Platform
						</span>
					</h1>
					<p className="mt-6 text-xl md:text-2xl">
						⚔️ Host Tournaments • Create Leagues • Place Wagers ⚔️
					</p>
					<p className="mt-2 text-lg ">
						Fair Competition Powered by Decentralized Mediation
					</p>
					<motion.div
						className="mt-8 flex flex-wrap justify-center gap-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
					>
						<Button as={Link} href="/compete" size="lg" color="primary">
							Compete
						</Button>
					</motion.div>
				</motion.div>
			</div>

			{/* Feature Sections */}
			<div className="relative z-10 space-y-20 py-20">
				{/* Host Competitions Section */}
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
						<div className="flex flex-col justify-center">
							<div className="flex items-center gap-4">
								<Trophy className="h-8 w-8 text-primary" />
								<h2 className="font-bold text-4xl text-primary">HOST EVENTS</h2>
							</div>
							<p className="mt-4 text-xl">
								Create and manage your own tournaments, leagues, or wager-based
								competitions. Set your rules, prize pools, and let Arena DAO
								handle the rest.
							</p>
						</div>
						<div className="relative flex h-64 items-center justify-center">
							<AnimatedIcon>
								<Trophy className="h-16 w-16 text-primary" />
							</AnimatedIcon>
						</div>
					</div>
				</div>

				{/* Wagers Section */}
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						<div className="relative order-2 flex h-64 items-center justify-center md:order-1">
							<AnimatedIcon>
								<Coins className="h-16 w-16 text-primary" />
							</AnimatedIcon>
						</div>
						<div className="order-1 flex flex-col justify-center md:order-2">
							<div className="flex items-center gap-4">
								<Coins className="h-8 w-8 text-primary" />
								<h2 className="font-bold text-4xl text-primary">
									SECURE WAGERS
								</h2>
							</div>
							<p className="mt-4 text-xl">
								Place and manage wagers with confidence. Smart contracts ensure
								transparent stake handling and automated payouts upon
								resolution.
							</p>
						</div>
					</div>
				</div>

				{/* Mediation Section */}
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						<div className="flex flex-col justify-center">
							<div className="flex items-center gap-4">
								<Gavel className="h-8 w-8 text-primary" />
								<h2 className="font-bold text-4xl text-primary">
									FAIR MEDIATION
								</h2>
							</div>
							<p className="mt-4 text-xl">
								Our DAO serves as an impartial mediator for any disputes.
								Community-governed resolution ensures fairness and transparency
								in all competitions.
							</p>
						</div>
						<div className="relative flex h-64 items-center justify-center">
							<AnimatedIcon>
								<Scale className="h-16 w-16 text-primary" />
							</AnimatedIcon>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
