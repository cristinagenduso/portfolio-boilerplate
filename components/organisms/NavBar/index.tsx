import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => (
	<nav className="bg-gray-800 p-4">
		<div className="container mx-auto flex justify-between items-center">
			<Link href="/">
				<a className="text-white text-lg font-bold">My Portfolio</a>
			</Link>
			<div>
				<Link href="/">
					<a className="text-gray-300 hover:text-white mx-2">Home</a>
				</Link>
				<Link href="/projects">
					<a className="text-gray-300 hover:text-white mx-2">Projects</a>
				</Link>
				<Link href="/contact">
					<a className="text-gray-300 hover:text-white mx-2">Contact</a>
				</Link>
			</div>
		</div>
	</nav>
);

export default Navbar;
