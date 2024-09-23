import lfdsTokens from 'lfds-tokens'
import twType from '@tailwindcss/typography'
const { color } = lfdsTokens

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: color,
		},
	},
	plugins: [
		twType,
	],
}
