import Search from "../components/Search";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import type { TRecipe } from "../types/types";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Home({ recipes }: { recipes: TRecipe[] }) {
	const navigate = useNavigate();
	const [favorites, setFavorites] = useState<TRecipe[]>(() => {
		const stored = localStorage.getItem("favorites");
		return stored ? (JSON.parse(stored) as TRecipe[]) : [];
	});

	const highestRating: TRecipe | undefined = recipes?.find((r) => r?.rating > 4.9);
	if (!highestRating) return null;
	const { id } = highestRating;
 
	const handleClick = () => {
		console.log("clicked");
		navigate(`/recipes/${id}`)
	};

	const favRecipes = favorites.map((fav: TRecipe) => (
		<li key={fav.id} className="list-none w-38 flex flex-col mt-4 mx-2">
			<img src={fav.image} alt={fav.name} height={30} width={0} className="object-cover rounded-md w-full h-3/4" />
			<div className="text-wrap">
				<p className="text-orange-400 text-xs">{fav.name}</p>
				<ArrowRightIcon
					className="h-5 w-5 text-black cursor-pointer"
					onClick={() => {
						navigate("/favorites");
					}}
				/>
			</div>
		</li>
	));

	return (
		<main className="flex flex-col">
			<div className="relative bg-slate-300/50 w-full">
				<img
					src={highestRating?.image}
					alt={highestRating?.name}
					className="object-cover h-[400px] w-full opacity-65"
				/>
				<section className="flex flex-col absolute bottom-10 right-10 text-slate-900/90 mb-4">
					<h3 className="text-4xl text-wrap w-10 font-oldenburg font-bold">Featured Recipe</h3>
					<button
						onClick={handleClick}
						className="bg-orange-400/80 text-white px-2 py-1 font-medium mt-2 border-2 border-orange-400 rounded-md hover:bg-orange-500 hover:text-black transition cursor-pointer">
						{highestRating?.name}
					</button>
				</section>
			</div>
			<div className="flex justify-center w-full mt-[-1.7rem] z-50">
				<Search />
			</div>
			<div className="flex flex-col px-4 mb-6">
				<section className="flex justify-between items-center w-full">
					<h3 className="font-breeserif text-3xl underline decoration-orange-400">Your Favorites</h3>
					<NavLink to="/recipes" className="text-orange-400 flex items-center gap-1 text-xl font-breeserif font-bold">
						See More <ArrowRightIcon className="h-6 w-6 text-black" />
					</NavLink>
				</section>
				<section className="flex items-center w-full h-40 mt-2">
					{favorites.length !== 0 && favorites !== null ? favRecipes : <p>Your favorite recipes will be displayed here 😊</p>}
				</section>
			</div>
			<div className="">
				
			</div>
		</main>
	);

}