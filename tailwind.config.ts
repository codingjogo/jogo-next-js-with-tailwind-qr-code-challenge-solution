import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			mobile: "375px",
			// => @media (min-width: 375px) { ... }

			desktop: "1440px",
			// => @media (min-width: 1440px) { ... }
		},
		fontSize: {
			sm: "12px", // 0.8 * 15
			base: "15px", // Same as baseFontSize
			xl: "18.75px", // 1.25 * 15
			"2xl": "23.445px", // 1.563 * 15
			"3xl": "29.295px", // 1.953 * 15
			"4xl": "36.615px", // 2.441 * 15
			"5xl": "45.78px", // 3.052 * 15
		},
		extend: {
			colors: {
				white: "hsl(0, 0%, 50%)",
				"light-gray": "hsl(212, 45%, 89%)",
				"grayish-blue": "hsl(220, 15%, 55%)",
				"dark-blue": "hsl(218, 44%, 22%)",
			},
			fontFamily: {
				outfit: ["var(--font-outfit)"],
			},
			boxShadow: {
				"main": "0 5px 7px rgba(0, 0, 0, 0.25)",
			},
		},
	},
	plugins: [],
};
export default config;
