module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,astro}",
		"./public/index.html",
	],
	theme: {
		extend: {
			backgroundImage: {
				'custom-gradient': 'linear-gradient(to right, #DC8B7A50 0%, #FFF 10%, #FFF 90%, #DC8B7A50 100%)',
			},
		},
	},
	plugins: [],
};