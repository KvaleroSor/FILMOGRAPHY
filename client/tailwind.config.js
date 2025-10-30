/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                "3xl": "1800px",
                "4xl": "2000px",
                "5xl": "2400px",
            },
        },
    },
    plugins: [],
};
