import { useState } from "react";
import { NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
// import Search from "./Search";

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
	};

	return (
		<header className="bg-stone-100/70 flex justify-between items-center p-2 shadow-md top-0 z-2 w-full relative">
			<h1 className="text-gray-500 text-2xl font-shortstack">
				<span className="text-orange-500">Food</span>iezz
			</h1>
			<nav className="hidden sm:flex sm:gap-4" role="list">
				{navLinks.map((link) => (
					<li key={link.label} className="list-none group">
						<NavLink to={link.path} className="text-gray-600 font-medium hover:font-medium hover:text-orange-700">
							{link.label}
						</NavLink>
					</li>
				))}
			</nav>
			{/* <Search /> */}
			{/* {user ? <Avatar /> : <UserCircleIcon className="h-9 w-9 text-gray-500" />} */}
			<div className="block">
				{dropMenu ? (
					// <Bars3Icon
					// 	className="h-7 w-7 text-gray-500 cursor-pointer"
					// 	onClick={handleDropMenu}
					// />
					<XMarkIcon
						className="h-9 w-9 text-gray-500 cursor-pointer"
						onClick={handleDropMenu}
						style={{ fontWeight: "bold" }}
					/>
				) : (
					<span
						className="inline-block text-3xl cursor-pointer animate-bounce sm:pointer-events-none"
						onClick={handleDropMenu}>
						🍔
					</span>
				)}
			</div>
			<>
				{dropMenu && (
					<nav className="flex flex-col sm:hidden justify-center items-start bg-slate-100 rounded-lg px-4 py-2 h-40 w-30 text-orange-400 absolute top-13 right-0">
						{navLinks.map((link) => (
							<li key={link.label} className="list-none group text-center">
								<NavLink to={link.path} className="text-gray-700 font-medium hover:font-medium hover:text-orange-500">
									{link.label}
								</NavLink>
							</li>
						))}
					</nav>
				)}
			</>
		</header>
	);
}
