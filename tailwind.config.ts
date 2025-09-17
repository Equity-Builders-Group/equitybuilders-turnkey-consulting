import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					gold: 'hsl(var(--accent-gold))',
					'gold-foreground': 'hsl(var(--accent-gold-foreground))'
				},
				highlight: {
					DEFAULT: 'hsl(var(--highlight))',
					foreground: 'hsl(var(--highlight-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-accent': 'var(--gradient-accent)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'ticker': {
					'0%': {
						transform: 'translateX(0%)'
					},
					'100%': {
						transform: 'translateX(-50%)'
					}
				},
				// Dramatic scroll reveal animations
				'fade-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(60px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-60px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(60px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-60px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'scale-up': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.8) translateY(40px)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) translateY(0)'
					}
				},
				'zoom-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.5)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(100px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-100px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'flip-up': {
					'0%': {
						opacity: '0',
						transform: 'rotateX(90deg) translateY(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'rotateX(0deg) translateY(0)'
					}
				},
				'bounce-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.3) translateY(50px)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.05) translateY(-10px)'
					},
					'70%': {
						transform: 'scale(0.9) translateY(5px)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'ticker': 'ticker 30s linear infinite',
				// Dramatic reveal animations
				'reveal-fade-up': 'fade-up 0.8s ease-out forwards',
				'reveal-fade-down': 'fade-down 0.8s ease-out forwards',
				'reveal-fade-left': 'fade-left 0.8s ease-out forwards',
				'reveal-fade-right': 'fade-right 0.8s ease-out forwards',
				'reveal-scale-up': 'scale-up 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
				'reveal-zoom-in': 'zoom-in 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'reveal-slide-up': 'slide-up 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'reveal-slide-down': 'slide-down 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'reveal-flip-up': 'flip-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'reveal-bounce-in': 'bounce-in 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				// Staggered delay animations (mobile-safe)
				'reveal-scale-up-1': 'scale-up 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 0ms',
				'reveal-scale-up-2': 'scale-up 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 300ms',
				'reveal-scale-up-3': 'scale-up 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 600ms',
				'reveal-fade-up-1': 'fade-up 0.8s ease-out forwards 0ms',
				'reveal-fade-up-2': 'fade-up 0.8s ease-out forwards 100ms',
				'reveal-fade-up-3': 'fade-up 0.8s ease-out forwards 200ms',
				'reveal-fade-up-4': 'fade-up 0.8s ease-out forwards 300ms',
				'reveal-fade-up-5': 'fade-up 0.8s ease-out forwards 400ms',
				'reveal-fade-up-6': 'fade-up 0.8s ease-out forwards 500ms',
				'reveal-fade-up-7': 'fade-up 0.8s ease-out forwards 600ms',
				'reveal-fade-up-8': 'fade-up 0.8s ease-out forwards 700ms'
			}
		}
	},
  plugins: [
    require("tailwindcss-animate"),
    require("@adam.plesnik/tailwindcss-scroll-driven-animations"),
  ],
} satisfies Config;
