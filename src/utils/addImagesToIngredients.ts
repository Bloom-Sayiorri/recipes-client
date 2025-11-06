import type { Ingredient } from "../types/types";

async function getIngredientsWithImages() {
	// Step 1: fetch all ingredients from MealDB
	const ingRes = await fetch(
		"https://www.themealdb.com/api/json/v1/1/list.php?i=list"
	);
	const ingData = await ingRes.json();
	const ingredientsList = ingData.meals || [];

	// Step 2: deduplicate ingredient names
	const uniqueIngredients = [
		...new Set(ingredientsList.map((i: any) => i.strIngredient)),
	];

	// Step 3: build objects with image URLs
	const ingredientsWithImages = uniqueIngredients.map((name) => ({
		name,
		ingredientImage: `https://www.themealdb.com/images/ingredients/${encodeURIComponent(
			`${name}`
		)}.png`,
	}));

	return ingredientsWithImages;
}

export async function attachIngredientImagesToDummyRecipes() {
	// fetch dummyjson recipes
	const recipesRes = await fetch("https://dummyjson.com/recipes");
	const recipesData = await recipesRes.json();
	const recipes = recipesData.recipes;

	// get the ingredient images once
	const ingredientsWithImages = await getIngredientsWithImages();

	// Step 4: for each recipe’s ingredients, attach the image
	const updatedRecipes = recipes.map((recipe: any) => {
		const updatedIngredients = recipe.ingredients.map((ingName: any) => {
			const match = ingredientsWithImages.find(
				(i: any) => i.name.toLowerCase() === ingName.toLowerCase()
			);
			return [
				{
					name: ingName,
					ingredientImage: match ? match.ingredientImage : null,
				},
			];
		});

		return {
			...recipe,
			ingredients: updatedIngredients,
		};
	});

	return updatedRecipes;
}

export async function attachIngredientImagesToSingleRecipe(
	id: string | undefined
) {
	if (!id) throw new Error("Recipe id is required");

	// fetch single dummyjson recipe
	const recipeRes = await fetch(`https://dummyjson.com/recipes/${id}`);
	const recipeData = await recipeRes.json(); // returns a single recipe object

	// get the ingredient images once
	const ingredientsWithImages = await getIngredientsWithImages();

	// map the string[] ingredients to Ingredient[]
	const updatedIngredients: Ingredient[] = recipeData.ingredients.map(
		(ingName: string) => {
			const match = ingredientsWithImages.find(
				(i: any) => i.name.toLowerCase() === ingName.toLowerCase()
			);

			return {
				name: ingName,
				ingredientImage: match ? match.ingredientImage : null,
			};
		}
	);

	// return the recipe with updated ingredients
	return {
		...recipeData,
		ingredients: updatedIngredients,
	};
}