/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            animation: {
                shine: "shine 2s linear infinite",
            },
            keyframes: {
                shine: {
                    "0%": { backgroundPosition: "0 0" },
                    "50%": { backgroundPosition: "100% 0" },
                    "100%": { backgroundPosition: "0 0" },
                },
            },
        },
    },
    plugins: [],
}