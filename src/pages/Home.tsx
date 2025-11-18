import { useEffect, useState } from "react";
import Search from "../components/Search";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import type { TRecipe } from "../types/types";
import { NavLink, useNavigate } from "react-router-dom";

type RecipeWithMeal = TRecipe & { mealType: string[] };

export default function Home({ recipes }: { recipes: TRecipe[] }) {
	const navigate = useNavigate();
	const [allRecipes, setAllRecipes] = useState<RecipeWithMeal[]>([]);
	const [selectedMealType, setSelectedMealType] = useState<string | null>(null);
	const [favorites] = useState<TRecipe[]>(() => {
		const stored = localStorage.getItem("favorites");
		return stored ? (JSON.parse(stored) as TRecipe[]) : [];
	});

	useEffect(() => {
		fetch("https://dummyjson.com/recipes?limit=50")
			.then((res) => res.json())
			.then((data) => {
				// data.recipes is the array
				setAllRecipes(data.recipes);
			})
			.catch((err) => {
				console.error("Failed to fetch recipes", err);
			});
	}, []);

	const mealTypes = Array.from(new Set(allRecipes.flatMap((r) => r.mealType)));

	const filteredByMealType = selectedMealType ? allRecipes.filter((r) => r.mealType.includes(selectedMealType)) : [];

	const highestRating = allRecipes.find((r) => r.rating > 4.9);
	const featured = highestRating ?? allRecipes[0];

	const handleFeaturedClick = () => {
		if (featured) navigate(`/recipes/${featured.id}`);
	};

	const favRecipes = favorites.map((fav) => (
		<li key={fav.id} className="list-none w-40 flex flex-col mx-2">
			<img src={fav.image} alt={fav.name} className="object-cover rounded-xl w-full h-32 shadow-md" />
			<div className="flex justify-between items-center mt-1">
				<p className="text-orange-500 text-sm font-semibold">{fav.name}</p>
				<ArrowRightIcon className="h-5 w-5 text-black cursor-pointer" onClick={() => navigate("/favorites")} />
			</div>
		</li>
	));

	return (
		<main className="flex flex-col mb-10">
			{featured && (
				<div className="relative bg-slate-300/50 h-[330px] w-full">
					<img
						src={highestRating?.image}
						alt={highestRating?.name}
						className="object-cover h-[330px] w-full opacity-65"
					/>
					<section className="flex flex-col absolute bottom-10 right-10 text-slate-900/90 mb-4">
						<h3 className="text-4xl text-wrap w-10 font-breeserif font-bold">Featured Recipe</h3>
						<button
							onClick={handleFeaturedClick}
							className="bg-orange-400/80 text-white px-2 py-1 font-medium mt-2 border-2 border-orange-400 rounded-md hover:bg-orange-500 hover:text-black transition cursor-pointer">
							{highestRating?.name}
						</button>
					</section>
				</div>
			)}

			<div className="flex justify-center mt-[-1.8rem] z-50">
				<Search />
			</div>

			<section className="px-5 mt-4">
				<h3 className="font-breeserif text-2xl mb-4 text-gray-700">Explore by Meal Type</h3>
				<div className="flex flex-wrap gap-3">
					{mealTypes.map((type) => (
						<button
							key={type}
							className={`px-4 py-2 rounded-full border cursor-pointer ${
								selectedMealType === type
									? "bg-orange-500 text-white border-orange-500"
									: "bg-white text-gray-700 border-gray-300 hover:bg-white hover:border hover:text-orange-500 hover:border-orange-500"
							} transition`}
							onClick={() => {
								if (selectedMealType === type) {
									setSelectedMealType(null);
								} else {
									setSelectedMealType(type);
								}
							}}>
							{type}
						</button>
					))}
				</div>

				<div className="mt-6">
					{selectedMealType === null ? (
						<p className="text-gray-500">Click a meal type to display recipes.</p>
					) : filteredByMealType.length === 0 ? (
						<p className="text-gray-500">No recipes available for "{selectedMealType}".</p>
					) : (
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
							{filteredByMealType.map((recipe) => (
								<div
									key={recipe.id}
									className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition cursor-pointer"
									onClick={() => navigate(`/recipes/${recipe.id}`)}>
									<img src={recipe.image} alt={recipe.name} className="h-36 w-full object-cover" />
									<div className="p-3">
										<p className="text-gray-800 font-medium truncate">{recipe.name}</p>
										<p className="text-orange-500 text-sm mt-1">⭐ {recipe.rating?.toFixed(1) ?? "N/A"}</p>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</section>

			<section className="px-5 mt-10">
				<div className="flex justify-between items-center">
					<h3 className="font-breeserif text-3xl underline decoration-orange-400">Your Favorites</h3>
					<NavLink
						to="/recipes"
						className="text-orange-500 flex items-center gap-1 text-xl font-breeserif font-semibold">
						See More <ArrowRightIcon className="h-6 w-6 text-black" />
					</NavLink>
				</div>

				<div className="flex items-center overflow-x-scroll no-scrollbar h-44 mt-2">
					{favorites.length ? (
						<ul className="flex">{favRecipes}</ul>
					) : (
						<p className="text-gray-500 mt-6">Your favorite recipes will appear here 😊</p>
					)}
				</div>
			</section>

			<section className="px-5 mt-10">
				<h3 className="font-breeserif text-3xl mb-4 underline decoration-orange-400">Trending Now</h3>

				<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
					{recipes.slice(0, 6).map((recipe) => (
						<div
							key={recipe.id}
							className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition cursor-pointer"
							onClick={() => navigate(`/recipes/${recipe.id}`)}>
							<img src={recipe.image} alt={recipe.name} className="h-32 w-full object-cover" />
							<div className="p-2">
								<p className="text-gray-700 font-medium truncate">{recipe.name}</p>
								<p className="text-orange-500 text-sm">⭐ {recipe.rating}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
