import React from "react";

type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
	type: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	className,
	type,
}) => (
	<button
		type={type}
		className={`px-4 py-2 rounded ${className}`}
		onClick={onClick}
	>
		{children}
	</button>
);

export default Button;
