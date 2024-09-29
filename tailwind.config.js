/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			textGray: '#767676',
  			green700: '#69B99D',
  			green300: '#CCF4E6',
  			white200: '#F9F9F9',
			green900: '#0F241D',
			gradient: 'linear-gradient(180deg, #69B99D 0%, #CCF4E6 100%)',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		fontFamily: {
			poppins: 'Poppins, sans-serif'
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

