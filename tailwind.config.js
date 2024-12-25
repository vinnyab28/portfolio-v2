/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: ["selector", '[data-theme="dark"]'],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				"comic-red": "#b71313",
				"comic-yellow": "#fccf2d",
				"comic-green": "#88be19",
				"comic-blue": "#2d6bba",
				"comic-violet": "#5f2872",
				// Pastel variants
				"pastel-red": "#f4a3a3",
				"pastel-yellow": "#fef6b2",
				"pastel-green": "#b2d99c",
				"pastel-blue": "#a3c1e0",
				"pastel-violet": "#d6a6d6",
			},
			fontFamily: {
				sans: ['"Open Sans"', "sans-serif"],
				dark: ["Christana", "sans-serif"],
			},
		},
	},
	plugins: [],
};
