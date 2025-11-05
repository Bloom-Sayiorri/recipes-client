// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
	corePlugins: {
		preflight: false,
	},
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./ignored-folder/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};

