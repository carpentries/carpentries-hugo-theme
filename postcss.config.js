let tailwindConfig = process.env.HUGO_FILE_TAILWIND_CONFIG_JS || './tailwind.config.js';
const tailwind = require('tailwindcss')(tailwindConfig);

module.exports = {
	// eslint-disable-next-line no-process-env
	plugins: [tailwind],
};