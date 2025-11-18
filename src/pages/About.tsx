import { FaUtensils, FaHeart, FaLightbulb } from "react-icons/fa";

export default function About() {
	return (
		<main className="min-h-screen font-shortstack bg-gradient-to-b from-orange-50 via-white to-orange-50 mx-3 py-10">
			<h2 className="text-center text-4xl font-bold mb-8 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
				About <span className="text-orange-500">Foodiezz</span>
			</h2>

			<div className="flex flex-col sm:flex-row items-center gap-8 mb-12">
				<img
					src="/cooking.jpg"
					alt="Cooking"
					className="rounded-xl shadow-xl w-full sm:w-1/2 h-[450px] object-cover transition-transform hover:scale-101"
				/>

				<section className="w-full sm:float-right text-gray-700 dark:text-gray-200">
					<h3 className="text-2xl sm:text-3xl font-semibold mb-4">
						Welcome to <span className="text-orange-500">Food</span>iezz 🍴
					</h3>
					<p className="mb-3 leading-relaxed text-gray-600 dark:text-gray-300">
						A place where food meets creativity! Whether you're a seasoned chef or just starting your kitchen journey,
						you'll find a variety of recipes crafted and curated to suit every taste, mood, and occasion.
					</p>
					<p className="leading-relaxed text-gray-600 dark:text-gray-300">
						So grab your apron, explore our collections, and let's cook something amazing together! We believe cooking
						should be fun, inspiring, and shared with love.
					</p>
				</section>
			</div>

			<section className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
				<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
					<FaUtensils className="text-orange-500 w-12 h-12 mb-3" />
					<h4 className="font-semibold text-lg mb-2">Delicious Recipes</h4>
					<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
						Carefully curated recipes for every taste and skill level.
					</p>
				</div>
				<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
					<FaHeart className="text-orange-500 w-12 h-12 mb-3" />
					<h4 className="font-semibold text-lg mb-2">Community Love</h4>
					<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
						Connect with fellow food enthusiasts and share your creations.
					</p>
				</div>
				<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
					<FaLightbulb className="text-orange-500 w-12 h-12 mb-3" />
					<h4 className="font-semibold text-lg mb-2">Inspire Creativity</h4>
					<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
						Innovative ideas and tips to elevate your cooking skills.
					</p>
				</div>
			</section>
		</main>
	);
}