"use client";
import Button from "@atoms/Button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type Project = {
	id: number;
	title: string;
	description: string;
};

const ProjectDetail = () => {
	const params = useParams<{ id: string }>();
	const numberId = parseInt(params.id);
	const [project, setProject] = useState<Project>();

	useEffect(() => {
		const fetchProject = async () => {
			try {
				const response = await fetch(`/projects.json`);
				if (!response.ok) {
					throw new Error("Failed to fetch");
				}
				const projects = await response.json();
				const foundProject = projects.find((p: Project) => p.id === numberId);
				if (foundProject) {
					setProject(foundProject);
				} else {
					throw new Error("Project not found");
				}
			} catch (error) {
				console.error("Error fetching project:", error);
			}
		};

		fetchProject();
	}, [numberId]);

	return (
		<>
			{project && (
				<div className="container mx-auto px-4 py-8">
					<motion.h1
						className="text-4xl font-bold mb-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
					>
						<h1 className="text-3xl font-bold text-gray-800 mb-4">
							{project.title}
						</h1>
					</motion.h1>
					<motion.p
						className="text-lg mb-8"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
					>
						<p className="text-gray-700 mb-8">{project.description}</p>
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
							<Link href="/projects">Back to Projects</Link>
						</Button>
					</motion.button>
				</div>
			)}
		</>
	);
};

export default ProjectDetail;
