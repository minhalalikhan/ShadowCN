/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                shadowpulse: "shadowpulse 2s infinite ease-in-out",
            },
            keyframes: {
                shadowpulse: {
                    '0%, 100%': {

                        boxShadow: "4px 4px 7px #424242, -5px -5px 7px #ffffff",

                    },
                    '50%': {
                        boxShadow: "4px 4px 7px #919191, -5px -5px 7px #e9e9e9",

                    },
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                },
                paper: 'var(--paper)',
                paperblack: 'var(--paper-black)',
            },
            boxShadow: {
                main: "4px 4px 7px #424242, -5px -5px 7px #ffffff",
                lite: "4px 4px 7px #919191, -5px -5px 7px #e9e9e9",
                cancel: '4px 4px 7px #aa0000, -5px -5px 7px #fff4f4',
                cancelLite: '4px 4px 7px #814141, -5px -5px 7px #efe8e8',
                pair: "4px 4px 7px #424242, -5px -5px 7px #ffffff ,4px 4px 7px #424242 inset, -5px -5px 7px #ffffff inset",
                inside: "4px 4px 7px #424242 inset, -5px -5px 7px #ffffff inset",
                check: "3px 3px 5px #424242, -3px -3px 5px #ffffff ,3px 3px 3px #424242 inset , -3px -3px 5px #ffffff inset",
                checked: "3px 3px 5px #424242, -3px -3px 5px #ffffff",
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
}