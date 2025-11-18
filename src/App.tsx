import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import type { TRecipe } from "./types/types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Recipes from "./pages/Recipes";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import Recipe from "./pages/Recipe";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

export default function App() {
	const [recipes, setRecipes] = useState<TRecipe[]>([]);
	useEffect(() => {
		(async function () {
			fetch("https://dummyjson.com/recipes?limit=50")
				.then((res) => res.json())
				.then((data) => setRecipes(data.recipes));
		})();
	}, []);

	return (
		<BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
			<main className="h-screen relative font-poppins flex flex-col">
				<Toaster position="top-right" reverseOrder={false} />
				<Navbar />
				<div className="grow mt-8">
					<Routes>
						<Route path="/" element={<Home recipes={recipes} />} />
						<Route path="/recipes" element={<Recipes recipes={recipes} />} />
						<Route path="/recipes/:id" element={<Recipe recipes={recipes} />} />
						<Route path="/favorites" element={<Favorites />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</div>
				<Footer />
			</main>
		</BrowserRouter>
	);
}