/** @format */

import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-light': 'linear-gradient(to bottom, #1e40af  , #1f2937 )',
				'gradient-dark': 'linear-gradient(to bottom, #eff6ff, #93c5fd, #eff6ff  )',
				'secondary-gradient-light': 'linear-gradient(to bottom, #1f2937,#111827  )',
			},
			fontFamily: {
				sans: ['Cairo', 'sans-serif'],
			},
			container: {
				center: true,
				padding: '2rem',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
};

export default config;
