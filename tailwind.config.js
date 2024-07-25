const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        // "./node_modules/flowbite.{js,ts}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans]
            },
            colors: {
                // 'brown' : {
                //     100: '#D77634',
                //     200: '#D77634',
                //     300: '#D77634',
                //     400: '#D77634',
                //     500: '#D77634',
                //     600: '#D77634',
                //     700: '#D77635',
                //     800: '#D77634',
                //     900: '#D77634',
                //     950: '#D77634',
                //     50: '#D77634',
                // },
                'purple' : {
                    50: '#ffdfee',
                    100: '#e3d7de',
                    200: '#e1cfd9',
                    300: '#d3b7c9',
                    400: '#c7a6ba',
                    500: '#b08ea3',
                    600: '#937687',
                    700: '#79626F',
                    800: '#573a48',
                    900: '#412a36',
                    950: '#34222d',
                },

            },
        },
    },
    plugins: [
        // require('flowbite/plugin')
    ],
}
