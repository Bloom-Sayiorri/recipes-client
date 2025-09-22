import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [search, setSearch] = useState<string>(searchParams.get("q") || "");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearchParams({ q: search });
	};

	return (
		// <main className="flex items-center justify-between rounded-lg bg-slate-300 w-80">
		// 	<h4 className="bg-orange-400 text-black py-2 px-3 rounded-l-lg">
		// 		Search Recipes
		// 	</h4>
		// 	<form
		// 		onSubmit={handleSubmit}
		// 		className="flex justify-between items-center bg-stone-300 rounded-r-lg px-2">
		// 		<label className="" htmlFor="search">
		// 			<input
		// 				type="search"
		// 				id="search"
		// 				name="search"
		// 				placeholder="Search..."
		// 				onChange={handleChange}
		// 				value={search}
		// 				className="bg-white text-gray-400 placeholder:text-gray-400"
		// 			/>
		// 		</label>
		// 		<button
		// 			type="submit"
		// 			role="button"
		// 			className="bg-stone-200 rounded-xl">
		// 			<MagnifyingGlassIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
		// 		</button>
		// 	</form>
		// </main>
		<main className="flex items-center justify-center w-78 sm:w-90">
			<p className="bg-orange-500 text-white text-[15px] font-medium text-center rounded-l-lg py-3 px-1 w-1/2">
				Search Recipes
			</p>
			<form
				onSubmit={handleSubmit}
				className="flex justify-center items-center bg-stone-200/90 rounded-r-lg px-2">
				<label htmlFor="search" className="">
					<input
						type="text"
						id="search"
						placeholder="Search recipe..."
						value={search}
						onChange={handleChange}
						className="border-[0.01px] rounded-[10px] font-main text-[1rem] p-[11px] w-full text-black border-none focus:outline-none"
						//text-black border-none focus:outline-none w-[150px]
					/>
				</label>
				<MagnifyingGlassIcon
					role="button"
					className="h-6 w-6 text-black cursor-pointer"
					onClick={() => {
						alert("clicked!");
					}}
				/>
				{/* <button
					type="submit"
					className="relative group flex items-center justify-center text-white border-none">
					<MagnifyingGlassIcon className="h-6 w-6 text-black cursor-pointer" />
					<span className="absolute top-5 mt-5 text-black text-sm opacity-0 group-hover:opacity-100 transition">
						Search
					</span>
				</button> */}
			</form>
		</main>
	);
}

