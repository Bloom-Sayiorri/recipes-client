export default function About() {
	return (
		<main className="mx-3 mt-[1rem] font-shortstack h-full">
			<h2 className="bg-clip-text text-transparent bg-linear-to-r from-orange-300 via-orange-400 to-orange-600 text-4xl text-center">
				About
			</h2>
			<div className="flex flex-col h-full gap-3 sm:flex-row sm:justify-center sm:items-center">
				<img src={"/sharing.jpg"} alt="cooking" height={100} width={500} className="rounded object-cover" />
				<section className="px-3 mb-3 sm:w-[20%]">
					<h3 className="text-gray-500 text-3xl mb-2">
						Welcome to <span className="text-orange-500">Food</span>iezz 🍴
					</h3>
					<p className="">
						A place where food meets creativity! Whether you're a seasoned chef or just starting your kitchen journey,
						you'll find a variety of recipes crafted and curated to suit every taste, mood, and occasion.
					</p>
					<p className="">So grab your apron, explore our collections, and let's cook something amazing together!</p>
				</section>
			</div>
		</main>
	);



}