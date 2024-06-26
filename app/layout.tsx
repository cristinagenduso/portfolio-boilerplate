import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: "My Portfolio",
	description:
		"This is my portfolio website showcasing my projects and skills.",
	openGraph: {
		type: "website",
		locale: "en_IE",
		url: "https://www.myportfolio.com/",
		siteName: "My Portfolio",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head />
			<body>{children}</body>
		</html>
	);
}
