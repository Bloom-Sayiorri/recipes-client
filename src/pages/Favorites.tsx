import { useEffect, useState } from "react";
import type { TRecipe } from "../types/types";

export default function Favorites() {
	const [favorites, setFavorites] = useState<TRecipe[]>([]);

	useEffect(() => {
		const stored = localStorage.getItem("favorites");
		if (stored) {
			setFavorites(JSON.parse(stored) as TRecipe[]);
		}
	}, []);

	return (
		<main className="mx-3 mb-6 py-10 min-h-screen font-shortstack">
			<h2 className="text-center text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
				Favorites
			</h2>

			{favorites.length === 0 ? (
				<div className="flex flex-col justify-center items-center mt-14">
					<img src="/sadgif.gif" alt="No favorites yet" className="w-64 h-64 object-contain mb-6" />
					<p className="text-2xl sm:text-3xl text-orange-600 text-center">
						You haven’t added any favorite recipes yet! 😢
					</p>
				</div>
			) : (
				// <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				<ul className="grid grid-cols-2 gap-5 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
					{favorites.map((recipe) => (
						<li
							key={recipe.id}
							className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden flex flex-col">
							<article className="relative flex flex-col h-full sm:h-3/4 md:h-[70%]">
								<img src={recipe.image} alt={recipe.name} className=" w-full object-cover" />
								<div className="p-3 flex-1 flex flex-col justify-between">
									<h3 className="text-gray-800 dark:text-gray-200 font-medium text-lg truncate">{recipe.name}</h3>
								</div>
							</article>
						</li>
					))}
				</ul>
			)}
		</main>
	);


}