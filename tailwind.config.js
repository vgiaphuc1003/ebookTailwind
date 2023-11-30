/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/components/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: "rgb(var(--color-primary) / <alpha-value>)",
                serach: "rgb(var(--color-serach) / <alpha-value>)",
                "icon-not-active": "#B7B9CA",
            },

            letterSpacing: {
                primary: "2%",
                tight: "0.28px",
                tighter: "0.24px",
                tightest: "0.36px",
                title: "0.4px",
            },

            borderRadius: {
                xs: "4px",
                sm: "5px",
                md: "8px",
                lg: "12px",
                xl: "16px",
            },

            boxShadow: {
                search: "0px 0px 6px 0px rgba(0, 0, 0, 0.05)",
                sidebar: "0px 2px 5px 0px rgba(0, 0, 0, 0.04)",
                "btn-primary": "0px 0px 4px 0px rgba(0, 0, 0, 0.10)",
                "btn-import": "0px -3px 8px 0px #194EC5 inset",
                "user-general": "0px 1px 3px 0px rgba(0, 0, 0, 0.05)",
                "search-shorcut": "0px 2px 3px 0px rgba(0, 0, 0, 0.09) inset",
                toggle: "box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.05) inset",
            },

            width: {
                sidebar: "294px",
            },

            margin: {
                sidebar: "294px",
            },
        },
    },
    plugins: [],
};
