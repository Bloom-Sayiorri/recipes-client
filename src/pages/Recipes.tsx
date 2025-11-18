import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import type { TRecipe } from "../types/types";
import { HeartIcon } from "@heroicons/react/24/outline";
import { FcLike } from "react-icons/fc";
import Loading from "../components/Loading";
import toast from "react-hot-toast";

export default function Recipes({ recipes }: { recipes: TRecipe[] }) {
	const [favorites, setFavorites] = useState<TRecipe[]>(() => {
		const stored = localStorage.getItem("favorites");
		return stored ? (JSON.parse(stored) as TRecipe[]) : [];
	});

	useEffect(() => {
		localStorage.setItem("favorites", JSON.stringify(favorites));
	}, [favorites]);

	const toggleFavorite = (recipe: TRecipe) => {
		if (!recipe) return;
		const isAlreadyFavorite = favorites.find((f) => f.id === recipe.id);
		setFavorites((prev) =>
			isAlreadyFavorite
				? prev.filter((f) => f.id !== recipe.id)
				: [...prev, recipe]
		);

		if (isAlreadyFavorite) {
			toast.error(`${recipe.name} removed from favorites`);
		} else {
			toast.success(`${recipe.name} added to favorites`);
		}
	};

	const favoriteIds = new Set(favorites.map((f) => f.id));

	const recipesList = recipes.map((recipe) => {
		const isFavorited = favoriteIds.has(recipe.id);
		return (
			<li
				key={recipe.id}
				aria-label="Recipe list"
				className="border-none rounded-lg mb-3 shadow-[0_3px_3px_1px_rgba(0,0,0,0.25)]">
				<article className="relative flex flex-col h-full sm:h-3/4 md:h-[70%]">
					{isFavorited ? (
						<FcLike
							role="button"
							onClick={() => toggleFavorite(recipe)}
							className="absolute h-6 w-6 hover:ring-amber-50"
							style={{ cursor: "pointer" }}
						/>
					) : (
						<HeartIcon
							role="button"
							onClick={() => toggleFavorite(recipe)}
							className="absolute text-orange-500 h-6 w-6 hover:ring-amber-50"
							style={{ cursor: "pointer" }}
						/>
					)}

					<img src={recipe.image} alt={recipe.name} className="object-cover rounded-t-lg w-full sm:object-cover" />
					<section className="text-slate-600/80 flex flex-col justify-center items-center font-[500]">
						<p className="text-base text-center sm:text-xl">{recipe.name}</p>
						<p className="text-[.99rem] sm:text-lg">{recipe.cuisine}</p>
						<div className="flex items-center justify-center gap-2">
							<p className="text-sm">{"⭐".repeat(Math.round(recipe.rating))}</p>
							<p>{recipe.rating?.toFixed(1)}</p>
						</div>
						<NavLink
							to={`/recipes/${recipe.id}`}
							onClick={() => console.log()}
							className="bg-slate-100/90 text-orange-500 px-3 py-[6px] rounded-lg mt-1 mb-2 hover:bg-orange-400 hover:text-white hover:ring-2 hover:ring-white">
							View recipe
						</NavLink>
					</section>
				</article>
			</li>
		);
	});

	if (!recipes || recipes.length === 0) return <Loading text="Fetching recipes..." />;
	if (!recipes?.length) return <p className="text-center text-gray-500">No recipes found.</p>;

	return (
		<main className="mx-3 py-10 font-shortstack">
			<h2 className="text-center text-4xl font-bold mb-8 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
				Recipes
			</h2>
			<ul className="grid grid-cols-2 gap-5 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">{recipesList}</ul>
		</main>
	);
}