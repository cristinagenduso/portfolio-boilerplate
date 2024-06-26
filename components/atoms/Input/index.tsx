import React from "react";

type InputProps = {
	type: string;
	placeholder?: string;
	className?: string;
};

const Input: React.FC<InputProps> = ({ type, placeholder, className }) => (
	<input
		type={type}
		placeholder={placeholder}
		className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
	/>
);

export default Input;
