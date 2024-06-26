"use client";
import Button from "@atoms/Button";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect } from "react";

type Project = {
	id: number;
	title: string;
	description: string;
};

const Projects: React.FC = () => {
	const [projects, setProjects] = React.useState<Project[]>([]);

	useEffect(() => {
		fetch("/projects.json")
			.then((response) => response.json())
			.then((data) => setProjects(data));
	}, []);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<motion.h1
				className="text-3xl font-bold text-gray-800 mb-8"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				My Projects
			</motion.h1>
			<motion.div
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				{projects.map((project) => (
					<div key={project.id} className="rounded-lg shadow-sm p-4">
						<motion.div
							className="p-4 bg-white rounded shadow"
							whileHover={{ scale: 1.05 }}
						>
							<h2 className="text-xl font-bold mb-2">{project.title}</h2>
							<p>{project.description}</p>
							<Button
								type={"button"}
								className="px-4 py-2 bg-orange-400 hover:bg-orange-500 text-white rounded mt-4"
							>
								<Link href={`/projects/${project.id}`}>View Project</Link>
							</Button>
						</motion.div>
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default Projects;
