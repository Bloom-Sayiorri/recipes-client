import { useEffect, useState } from "react";
import type { TRecipe } from "../types/types";
import sadgif from "../assets/sadgif.gif";
export default function Favorites() {
	const [favorites, setFavorites] = useState<TRecipe[]>([]);

	useEffect(() => {
		const stored = localStorage.getItem("favorites");
		if (stored) {
			return setFavorites(stored ? (JSON.parse(stored) as TRecipe[]) : []);
		}
	}, []);
	console.log(favorites);
	return (
		<main className="mx-3 mt-[1rem] h-full font-shortstack">
			<h2 className="bg-clip-text text-transparent bg-linear-to-r from-orange-50 via-orange-400 to-orange-800 text-4xl text-center mb-3">
				Favorites
			</h2>
			{favorites.length === 0 && favorites !== null ? (
				<div className="flex flex-col justify-center items-center h-3/4 mt-14">
					<img src={sadgif} alt="Sadgif" className="rounded-lg h-full" />
					<p className="text-3xl text-orange-600">No favorite recipes yet.</p>
				</div>
			) : (
				<ul>
					{favorites.map((recipe) => (
						<li key={recipe.id} className="">
							<img src={recipe.image} alt={recipe.name} className="" />
							<h3 className="">{recipe.name}</h3>
						</li>
					))}
				</ul>
			)}
		</main>
	);
}
