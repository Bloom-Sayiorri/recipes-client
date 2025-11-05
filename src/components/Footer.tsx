import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import {
	FaInstagram,
	FaTwitterSquare,
	FaPinterest,
	FaFacebook,
	FaLinkedin,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";

export default function Footer() {
	const [email, setEmail] = useState<string>("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		toast.error("Email service under construction!", {
			duration: 4000,
			position: "top-center",
			iconTheme: {
				primary: "#000",
				secondary: "#fff",
			},
			icon: "😔",
			// Aria
			ariaProps: {
				role: "status",
				"aria-live": "polite",
			},
			// Additional Configuration
			removeDelay: 4000,
			// Toaster instance
			toasterId: "default",
		});
	};

	return (
		<footer className="bg-slate-100 mt-auto flex flex-col sm:flex-row gap-2 items-center justify-around p-6">
			<div className="flex flex-col gap-4 items-start">
				<p className="font-bold text-2xl underline decoration-2 decoration-orange-400">
					Sign up for our newsletter!
				</p>
				<form
					// action="https://getform.io/f/bxoznmwa"
					// method="POST"
					onSubmit={handleSubmit}
					className="flex rounded-md shadow-md w-max">
					<label className="sr-only" htmlFor="email"></label>
					<input
						type="email"
						id="email"
						name="email"
						value={email}
						onChange={handleChange}
						placeholder="Enter your email..."
						className="border-none rounded-l-lg px-2 py-1 outline-0"
					/>
					<button type="submit" role="navigation" onClick={() => {}}>
						<ArrowRightIcon
							style={{ cursor: "pointer" }}
							className="h-8 w-8 sm:h-8 sm:w-8 bg-orange-500 text-white hover:text-black rounded-r-md"
						/>
					</button>
				</form>
				<div className="flex gap-3">
					<NavLink to="" className="">
						<FaInstagram className="rounded-full h-6 w-6" />
					</NavLink>
					<NavLink to="" className="">
						<FaTwitterSquare className="rounded-full h-6 w-6" />
					</NavLink>
					<NavLink to="" className="">
						<FaPinterest className="rounded-full h-6 w-6" />
					</NavLink>
					<NavLink to="" className="">
						<FaFacebook className="rounded-full h-6 w-6" />
					</NavLink>
					<NavLink to="" className="">
						<FaLinkedin className=" h-6 w-6" />
					</NavLink>
				</div>
			</div>
			<div className="flex flex-col sm:flex-row gap-2 items-start justify-around w-full">
				<div className="flex flex-col">
					<h3 className="text-xl font-medium underline decoration-2 decoration-orange-400">
						About
					</h3>
					<NavLink to="/about" className="">
						About
					</NavLink>
					<NavLink to="/contact" className="">
						Contact
					</NavLink>
					<NavLink to="/profile" className="">
						Profile
					</NavLink>
				</div>
				<div className="flex flex-col">
					<h3 className="text-xl font-medium underline decoration-2 decoration-orange-400">
						Account
					</h3>
					<NavLink to="/recipes" className="">
						Recipes
					</NavLink>
					<NavLink to="/favorites" className="">
						Favorites
					</NavLink>
					<NavLink to="/settings" className="">
						Settings
					</NavLink>
				</div>
			</div>
		</footer>
	);
}
