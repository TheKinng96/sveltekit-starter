import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['class', '[data-theme="night"]'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: ['emerald', 'night'],
	},
	plugins: [daisyui],
}
