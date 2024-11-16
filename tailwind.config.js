/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content(), "./node_modules/flowbite/**/*.js" ],
    theme: {
      extend: {},
    },
    plugins: [require('flowbite/plugin')],
};

