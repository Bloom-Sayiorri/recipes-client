import { useState } from "react";
import { NavLink } from "react-router-dom";
// import Search from "./Search";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
	const [dropMenu, setDropMenu] = useState(false);

	const navLinks = [
		{ label: "Home", path: "/" },
		{ label: "Recipes", path: "/recipes" },
		{ label: "Favorites", path: "/favorites" },
		{ label: "About", path: "/about" },
	];

	const handleDropMenu = () => {
		setDropMenu((prevState) => !prevState);
		{
			dropMenu ? (
				<nav className="bg-slate-400/50 h-40 w-40 text-orange-400 absolute">
					{navLinks.map((link) => (
						<li key={link.label} className="list-none group">
							<NavLink
								to={link.path}
								className="text-gray-700 font-medium hover:font-medium hover:text-orange-500">
								{link.label}
							</NavLink>
						</li>
					))}
				</nav>
			) : (
				<em className="text-slate-400">You need to be signed in!</em>
			);
		}
	};

	return (
		<header className="bg-stone-100/70 flex justify-between items-center p-2 shadow-md fixed top-0 z-2 w-full">
			<h1 className="text-gray-500 text-2xl font-shortstack">
				<span className="text-orange-500">Food</span>iezz
			</h1>
			<nav className="hidden sm:flex sm:gap-4" role="list">
				{navLinks.map((link) => (
					<li key={link.label} className="list-none group">
						<NavLink
							to={link.path}
							className="text-gray-600 font-medium hover:font-medium hover:text-orange-700">
							{link.label}
						</NavLink>
					</li>
				))}
			</nav>
			{/* <Search /> */}
			{/* {
					// user ? <Avatar /> :
					<UserCircleIcon className="h-9 w-9 text-gray-500" />
				} */}
			<div className="block relative">
				{dropMenu ? (
					// <Bars3Icon
					// 	className="h-7 w-7 text-gray-500 cursor-pointer"
					// 	onClick={handleDropMenu}
					// />
					<span
						className="inline-block text-3xl cursor-pointer animate-bounce"
						onClick={handleDropMenu}>
						🍔
					</span>
				) : (
					<XMarkIcon
						className="h-9 w-9 text-gray-500 cursor-pointer"
						onClick={handleDropMenu}
						style={{ fontWeight: "bold" }}
					/>
				)}
			</div>
		</header>
	);
}

// import { useState } from "react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import { Bars3Icon } from "@heroicons/react/24/outline";
// // import { Menu, X } from "lucide-react"; // icons

// const Navbar = () => {
// 	const [open, setOpen] = useState(false);

// 	const navItems = [
// 		{ label: "Home", href: "/" },
// 		{ label: "About", href: "/about" },
// 		{ label: "Recipes", href: "/recipes" },
// 		{ label: "Contact", href: "/contact" },
// 	];

// 	return (
// 		<nav className="flex items-center justify-between p-4 bg-white shadow">
// 			{/* Logo */}
// 			<div className="text-xl font-bold">MySite</div>

// 			{/* Desktop Nav */}
// 			<ul className="hidden md:flex gap-6">
// 				{navItems.map((item) => (
// 					<li key={item.href}>
// 						<a href={item.href} className="hover:text-blue-500">
// 							{item.label}
// 						</a>
// 					</li>
// 				))}
// 			</ul>

// 			{/* Mobile Menu Button */}
// 			<button
// 				className="md:hidden"
// 				onClick={() => setOpen(!open)}
// 				aria-label="Toggle menu">
// 				{open ? (
// 					<XMarkIcon className="h-[24px]" />
// 				) : (
// 					<Bars3Icon className="h-[24px]" />
// 				)}
// 			</button>

// 			{/* Mobile Menu Overlay */}
// 			{open && (
// 				<div className="fixed inset-0 bg-black/50 flex justify-end">
// 					<div className="w-2/3 bg-white h-full p-6">
// 						<button onClick={() => setOpen(false)} className="mb-6">
// 							<XMarkIcon className="h-[24px]" />
// 						</button>
// 						<ul className="flex flex-col gap-4">
// 							{navItems.map((item) => (
// 								<li key={item.href}>
// 									<a
// 										href={item.href}
// 										className="block hover:text-blue-500"
// 										onClick={() => setOpen(false)}>
// 										{item.label}
// 									</a>
// 								</li>
// 							))}
// 						</ul>
// 					</div>
// 				</div>
// 			)}
// 		</nav>
// 	);
// };

// export default Navbar;
