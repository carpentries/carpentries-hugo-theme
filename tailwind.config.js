const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

module.exports = {
	theme: {
		extend: {
			colors: require('./assets/css/config/_colors.js'),
			fontFamily: require('./assets/css/config/_fonts.js'),
			typography: require('./assets/css/config/_typography.js'),
		},
	},
	content: ['./hugo_stats.json'],
	plugins: [typography, forms],
};
