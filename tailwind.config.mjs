/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#a56af0',
				secondary: '#34cbff',
			},
			animation: {
				'spin-slow': 'spin 5s linear infinite'
			}
		},
	},
	plugins: [],
}
