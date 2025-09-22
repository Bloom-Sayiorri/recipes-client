import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import type { TRecipe } from "./types/types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import Recipe from "./pages/Recipe";
import { Toaster } from "react-hot-toast";
// import { attachIngredientImagesToDummyRecipes } from "./utils/addImagesToIngredients";

function App() {
	const [recipes, setRecipes] = useState<TRecipe[]>([]);
	useEffect(() => {
		(async function () {
			fetch("https://dummyjson.com/recipes")
				.then((res) => res.json())
				.then((data) => setRecipes(data.recipes));
		})();

		// (async function () {
		// 	setRecipes(await attachIngredientImagesToDummyRecipes());
		// })();

		// const controller = new AbortController();

		// const fetchRecipes = async () => {
		// 	try {
		// 		const data = await fetch("https://dummyjson.com/recipes", {
		// 			signal: controller.signal,
		// 		});
		// 		const json = await data.json();
		// 		setRecipes(json.recipes);
		// 	} catch (error: unknown) {
		// 		error instanceof Error && error.name !== "AbortError"
		// 			? console.error(error.message)
		// 			: "No recipes";
		// 	}
		// };

		// console.log(fetchRecipes());
		// return () => controller.abort();
	}, []);

	return (
		<BrowserRouter
			future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
			<Navbar />
			<main className="h-screen relative font-poppins flex flex-col flex-1">
				<Toaster position="top-right" />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/recipes" element={<Recipes recipes={recipes} />} />
					<Route path="/recipes/:id" element={<Recipe recipes={recipes} />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;

