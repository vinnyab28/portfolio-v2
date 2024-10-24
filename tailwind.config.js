/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			...colors,
			transparent: "transparent",
			current: "currentColor",
			"comic-red": "#b71313",
			"comic-yellow": "#fccf2d",
			"comic-green": "#88be19",
			"comic-blue": "#2d6bba",
			"comic-violet": "#5f2872",
		},
		extend: {
			fontFamily: {
				sans: ["Christana", "sans-serif"],
			},
		},
	},
	plugins: [],
};
