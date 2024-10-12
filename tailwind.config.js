/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['selector', '[data-theme="dark"]'],
	theme: {
		colors: {
			light: {
				primary: {
					default: '#4169E1', // Royal Blue
					light: '#5A8CF6', // Lighter Blue
					dark: '#365ABD' // Darker Blue
				},
				secondary: {
					default: '#FFD700', // Gold
					light: '#FFE066', // Lighter Gold
					dark: '#CCAC00' // Darker Gold
				},
				accent: {
					default: '#DC143C', // Crimson Red
					light: '#F25470', // Lighter Crimson
					dark: '#A40E2D' // Darker Crimson
				},
				background: {
					default: '#FFFFFF', // Pure White
					variant: '#F0F0F0' // Very Light Gray (for sections or modals)
				},
				text: {
					default: '#2E2E2E', // Dark Charcoal
					variant: '#555555' // Lighter Gray (for secondary text)
				},
				border: {
					default: '#D3D3D3', // Light Gray for borders
					variant: '#E5E5E5' // Even Lighter Gray for subtle dividers
				}
			},

			dark: {
				primary: {
					default: '#4169E1', // Same Royal Blue
					light: '#5A8CF6', // Lighter Blue
					dark: '#365ABD' // Darker Blue
				},
				secondary: {
					default: '#FFD700', // Same Gold
					light: '#FFE066', // Lighter Gold
					dark: '#CCAC00' // Darker Gold
				},
				accent: {
					default: '#DC143C', // Same Crimson Red
					light: '#F25470', // Lighter Crimson
					dark: '#A40E2D' // Darker Crimson
				},
				background: {
					default: '#0B0C10', // Deep Navy
					variant: '#08090C' // Almost black
				},
				text: {
					default: '#E5E5E5', // Light Gray for dark theme text
					variant: '#CCCCCC' // Slightly darker for contrast
				},
				border: {
					default: '#4B4B4B', // Dark Gray for borders
					variant: '#3A3A3A' // Even darker gray
				}
			}
		},
		extend: {}
	},
	plugins: []
};
