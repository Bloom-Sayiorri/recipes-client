import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Menu() {
	const [dropMenu, setDropMenu] = useState<boolean>(false);

	const handleDropMenu = () => {
		setDropMenu((prevState) => !prevState);
		console.log(dropMenu);
		if (dropMenu === true) {
			<nav className="bg-slate-400/50 absolute top-7 right-3 z-10 h-40 w-40 text-orange-400 block">
				Hello
			</nav>;
		} else {
			<em className="text-slate-400">You need to be signed in!</em>;
		}
	};
	return (
		<div className="inline-block">
			{dropMenu ? (
				<Bars3Icon
					className="h-7 w-7 text-gray-500 cursor-pointer"
					onClick={handleDropMenu}
				/>
			) : (
				<XMarkIcon
					className="h-7 w-7 text-gray-500 cursor-pointer"
					onClick={handleDropMenu}
				/>
			)}
		</div>
	);
}

