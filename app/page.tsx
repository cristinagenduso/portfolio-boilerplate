"use client";
import Button from "@atoms/Button";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Home: React.FC = () => (
	<div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
		<motion.h1
			className="text-4xl font-bold mb-4"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			Welcome to My Portfolio
		</motion.h1>
		<motion.p
			className="text-lg mb-8"
			initial={{ x: "-100vw" }}
			animate={{ x: 0 }}
			transition={{ type: "spring", stiffness: 50 }}
		>
			Here you can find all my projects and skills.
		</motion.p>
		<motion.button
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{ duration: 0.5 }}
			whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
		>
			<Button
				type={"button"}
				className="px-4 py-2 bg-orange-400 hover:bg-orange-500 text-white rounded"
			>
				<Link href="/projects">View Projects</Link>
			</Button>
		</motion.button>
	</div>
);

export default Home;
