import { useNavigate, useParams } from "react-router-dom";
import type { TRecipe } from "../types/types";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
// import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import { attachIngredientImagesToSingleRecipe } from "../utils/addImagesToIngredients";

export default function Recipe({ recipes }: { recipes: TRecipe[] }) {
	const navigate = useNavigate();
	const { id } = useParams();
	const recipe = recipes.find((r) => r.id === Number(id));

	// const [recipe, setRecipe] = useState<TRecipe | null>(null);
	// useEffect(() => {
	// 	fetch(`https://dummyjson.com/recipes/${id}`)
	// 		.then((res) => res.json())
	// 		.then((data) => setRecipe(data));
	// 	(async function () {
	// 		setRecipe(await attachIngredientImagesToDummyRecipes());
	// 	})();
	// 	(async () => {
	// 		// const res = await fetch(`https://dummyjson.com/recipes/${id}`);
	// 		// const data = await res.json();
	// 		const enriched = await attachIngredientImagesToSingleRecipe(id);
	// 		setRecipe(enriched);
	// 	})();
	// }, [id]);
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

	if (!recipe) return <Loading text="Fetching recipes..." />;

	return (
		<main className="h-full w-full font-shortstack">
			{recipe && (
				<div
					key={recipe.id}
					className="flex flex-col items-center justify-center w-full">
					<img
						src={recipe.image}
						alt={recipe.name}
						className="object-cover h-[400px] w-full"
					/>
					<div className="bg-orange-300 flex justify-center items-center gap-4 w-fit rounded-lg p-2 mt-[-1.2rem]">
						<span>{recipe.cookTimeMinutes} minutes</span>
						<hr className="text-black h-2 w-[8rem]" />
						<span>{recipe.rating}/5 stars</span>
					</div>
					<div className="flex items-center justify-between gap-2 w-full my-[1.5rem] px-2 sm:px-[1rem]">
						<button
							type="button"
							role="navigation"
							onClick={() => navigate(-1)}>
							<ArrowLeftIcon
								style={{ cursor: "pointer" }}
								className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500 hover:text-black"
							/>
						</button>
						<h3 className="text-base sm:text-2xl md:text-3xl font-bold underline underline-offset-7 decoration-orange-500 font-oldenburg tracking-wider">
							{recipe.name}
						</h3>
						<button
							type="button"
							role="button"
							onClick={() => toggleFavorite(recipe)}>
							<svg
								style={{ cursor: "pointer" }}
								onClick={() => console.log("clicked")}
								className="h-6 w-6 sm:h-8 sm:w-8"
								fill="oklch(70.5% 0.213 47.604)"
								version="1.1"
								id="Layer_1"
								xmlns="http://www.w3.org/2000/svg"
								// xmlns:xlink="http://www.w3.org/1999/xlink"
								viewBox="0 0 512 512"
								enableBackground="new 0 0 512 512"
								// xml:space="preserve"
								stroke="oklch(70.5% 0.213 47.604)">
								<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"></g>
								<g id="SVGRepo_iconCarrier">
									{" "}
									<g>
										{" "}
										<g>
											{" "}
											<path d="M344,288c4.781,0,9.328,0.781,13.766,1.922C373.062,269.562,384,245.719,384,218.625C384,177.422,351.25,144,310.75,144 c-21.875,0-41.375,10.078-54.75,25.766C242.5,154.078,223,144,201.125,144C160.75,144,128,177.422,128,218.625 C128,312,256,368,256,368s14-6.203,32.641-17.688C288.406,348.203,288,346.156,288,344C288,313.125,313.125,288,344,288z"></path>{" "}
											<path d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472 c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"></path>{" "}
										</g>{" "}
										<path d="M344,304c-22.094,0-40,17.906-40,40s17.906,40,40,40s40-17.906,40-40S366.094,304,344,304z M368,352h-16v16h-16v-16h-16 v-16h16v-16h16v16h16V352z"></path>{" "}
									</g>{" "}
								</g>
							</svg>
						</button>
					</div>
					<div className="flex flex-col justify-center sm:flex-row gap-[2rem] sm:gap-[4rem] px-[4rem] sm:my-[2rem]">
						<div className="">
							<h3 className="text-xl font-bold underline underline-offset-7 decoration-orange-500 font-oldenburg tracking-wider">
								Ingredients
							</h3>
							<ul className="bg-slate-300/30 rounded-lg p-2 mt-[1rem]">
								{recipe.ingredients.map((i, index) => (
									<li key={index} className="flex w-40 leading-7">
										<p>📌 {i}</p>
										{/* <img
											src={i.ingredientImage}
											alt={undefined}
											height={30}
											width={30}
										/> */}
									</li>
								))}
							</ul>
						</div>
						<div className="">
							<h3 className="text-xl font-bold underline underline-offset-7 decoration-orange-500 font-oldenburg tracking-wider">
								Instructions
							</h3>
							<ul className=" rounded-lg mt-[1rem]">
								{recipe.instructions.map((i, index) => (
									<li key={index} className="leading-7">
										◦ {i}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			)}
		</main>
	);
}
