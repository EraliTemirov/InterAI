/** @type {import('tailwindcss').Config} */

export default {
	content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './error.vue'],
	theme: {
		extend: {
			colors: {
				main: {
					DEFAULT: '#1C1C1C',
					50: '#f6f6f6',
					100: '#e7e7e7',
					200: '#d1d1d1',
					300: '#b0b0b0',
					400: '#888888',
					500: '#6d6d6d',
					600: '#5d5d5d',
					700: '#4f4f4f',
					800: '#454545',
					900: '#3d3d3d',
					950: '#1c1c1c'
				},
				black: {
					DEFAULT: '#000',
					1: '#252527'
				},
				grey: {
					DEFAULT: '#9D9D9D',
				},
				red: {
					DEFAULT: '#9E1823'
				},
				blue: {
					DEFAULT: '#085DAD'
				},
				purple: {
					DEFAULT: '#465A95',
					0: '#7594EF'
				}
			},
			fontFamily: {
				inherit: 'inherit',
				greycliff: ['Greycliff CF', 'sans-serif'],
				sfPro: ['SF Pro Display', 'sans-serif'],
			}
		}
	},
	plugins: []
};
