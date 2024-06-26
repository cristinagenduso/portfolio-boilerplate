import Button from "@atoms/Button";
import Input from "@atoms/Input";
import React from "react";

const ContactForm: React.FC = () => (
	<form className="w-full max-w-md">
		<div className="mb-4">
			<label
				className="block text-gray-700 text-sm font-bold mb-2"
				htmlFor="name"
			>
				Name
			</label>
			<Input type="text" placeholder="Your name" />
		</div>
		<div className="mb-4">
			<label
				className="block text-gray-700 text-sm font-bold mb-2"
				htmlFor="email"
			>
				Email
			</label>
			<Input type="email" placeholder="Your email" />
		</div>
		<div className="mb-4">
			<label
				className="block text-gray-700 text-sm font-bold mb-2"
				htmlFor="message"
			>
				Message
			</label>
			<textarea
				className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="message"
				placeholder="Your message"
				rows={5}
				required
			/>
		</div>
		<div className="flex items-center justify-between">
			<Button type="submit">Send</Button>
		</div>
	</form>
);

export default ContactForm;
