export type TRecipe = {
	id: number;
	name: string;
	ingredients: string[];
	instructions: string[];
	prepTimeMinutes: number;
	cookTimeMinutes: number;
	servings: number;
	difficulty: string;
	cuisine: string;
	caloriesPerServing: number;
	tags: string[];
	userId: number;
	image: string;
	rating: number;
	reviewCount: string[];
	mealType: string[];
};

export type TUser = {
	id: number;
	username: string;
	email: string;
	password: string;
	passwordConfirmation: string;
};

export type TFavorite = {
	id: number;
	favorite: TRecipe[];
	userId: number;
};

export type Ingredient = {
	name: string;
	ingredientImage: string;
};
