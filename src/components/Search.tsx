import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [search, setSearch] = useState<string>(searchParams.get("q") || "");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleClick = () => {
		console.log("clicked");
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearchParams({ q: search });
	};

	return (
		<main className="flex items-center justify-center w-78 sm:w-90 bg-stone-200 rounded-lg">
			<h4 className="bg-orange-500 text-white text-sm sm:text-base text-nowrap font-medium text-center py-[14px] px-1 sm:px-3 rounded-l-lg inline-block">
				Search Recipes
			</h4>
			<form
				onSubmit={handleSubmit}
				className="flex justify-center items-center px-2">
				<label htmlFor="search" className="">
					<input
						type="text"
						id="search"
						placeholder="Search recipe..."
						value={search}
						onChange={handleChange}
						className="border-[0.01px] rounded-[10px] font-main text-[1rem] p-[11px] w-full text-black border-none focus:outline-none"
					/>
				</label>
				<button type="submit" className="relative" onClick={handleClick}>
					<MagnifyingGlassIcon
						role="icon"
						className="h-6 w-6 text-gray-500 cursor-pointer"
					/>
				</button>
			</form>
		</main>
	);
}

