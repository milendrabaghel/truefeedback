/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // adjust according to your file structure
      "./node_modules/@shadcn/ui/**/*.js", // add this line for ShadCN components
    ],
    theme: {
      extend: {},
    },
    plugins: [],
};
