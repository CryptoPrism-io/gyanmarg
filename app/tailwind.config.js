/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        // Primary - Sunrise
        sunrise: {
          DEFAULT: '#FF9B71',
          light: '#FFB799',
          dark: '#E87A4F',
          muted: 'rgba(255, 155, 113, 0.15)',
        },
        // Secondary - Golden
        golden: {
          DEFAULT: '#F7C948',
          light: '#FAD96A',
          muted: 'rgba(247, 201, 72, 0.12)',
        },
        // Accent Colors
        coral: {
          DEFAULT: '#FF6B6B',
          muted: 'rgba(255, 107, 107, 0.12)',
        },
        blush: {
          DEFAULT: '#F8A5C2',
          muted: 'rgba(248, 165, 194, 0.12)',
        },
        sage: {
          DEFAULT: '#7CB69D',
          muted: 'rgba(124, 182, 157, 0.12)',
        },
        lavender: {
          DEFAULT: '#9B8FE8',
          muted: 'rgba(155, 143, 232, 0.12)',
        },
        sky: {
          DEFAULT: '#6EC6FF',
          muted: 'rgba(110, 198, 255, 0.12)',
        },
        // Backgrounds
        base: '#0F0D0B',
        elevated: '#1A1714',
        surface: '#252119',
        overlay: '#2F2820',
        highlight: '#3D3429',
        // Legacy compatibility - renamed to avoid text-primary/text-secondary conflicts
        // Use bg-base, bg-elevated instead
        card: 'var(--color-bg-elevated)',
        border: 'var(--color-border-default)',
        // Text
        'text-primary': '#FAF7F2',
        'text-secondary': '#C4BBB0',
        muted: '#8A8078',
        disabled: '#5A544C',
        // Accent legacy
        accent: {
          DEFAULT: 'var(--color-sunrise)',
          hover: 'var(--color-sunrise-light)',
          subtle: 'var(--color-sunrise-muted)',
        },
        // Status
        success: '#7CB69D',
        warning: '#F7C948',
        error: '#FF6B6B',
        info: '#6EC6FF',
        // Glass
        'glass-light': 'rgba(250, 247, 242, 0.03)',
        'glass-medium': 'rgba(250, 247, 242, 0.05)',
        'glass-heavy': 'rgba(250, 247, 242, 0.08)',
        'glass-accent': 'rgba(255, 155, 113, 0.06)',
      },
      borderRadius: {
        xs: '4px',
        sm: '6px',
        DEFAULT: '8px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(0, 0, 0, 0.1)',
        sm: '0 2px 4px rgba(0, 0, 0, 0.12)',
        DEFAULT: '0 4px 12px rgba(0, 0, 0, 0.15)',
        md: '0 4px 12px rgba(0, 0, 0, 0.15)',
        lg: '0 8px 24px rgba(0, 0, 0, 0.2)',
        xl: '0 16px 48px rgba(0, 0, 0, 0.25)',
        '2xl': '0 24px 64px rgba(0, 0, 0, 0.3)',
        sunrise: '0 4px 20px rgba(255, 155, 113, 0.25)',
        'sunrise-lg': '0 8px 32px rgba(255, 155, 113, 0.3)',
        golden: '0 4px 20px rgba(247, 201, 72, 0.2)',
        sage: '0 4px 20px rgba(124, 182, 157, 0.2)',
        coral: '0 4px 20px rgba(255, 107, 107, 0.2)',
        lavender: '0 4px 20px rgba(155, 143, 232, 0.2)',
        glow: '0 0 60px rgba(255, 155, 113, 0.15)',
        'glow-golden': '0 0 60px rgba(247, 201, 72, 0.12)',
        'glow-lavender': '0 0 60px rgba(155, 143, 232, 0.12)',
        glass: '0 4px 24px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(250, 247, 242, 0.04)',
      },
      backdropBlur: {
        xs: '8px',
        sm: '12px',
        DEFAULT: '20px',
        md: '20px',
        lg: '32px',
        xl: '48px',
      },
      transitionDuration: {
        instant: '50ms',
        fast: '100ms',
        DEFAULT: '200ms',
        slow: '300ms',
        slower: '400ms',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0, 0, 0.2, 1)',
        bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.3s ease-out',
        'fade-in-scale': 'fadeInScale 0.2s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'scale-pop': 'scalePop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 155, 113, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 155, 113, 0.4)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        scalePop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-sunrise': 'linear-gradient(135deg, #FF9B71 0%, #F7C948 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #FF6B6B 0%, #FF9B71 100%)',
        'gradient-aurora': 'linear-gradient(135deg, #9B8FE8 0%, #6EC6FF 100%)',
        'gradient-forest': 'linear-gradient(135deg, #7CB69D 0%, #A8D4BB 100%)',
        'gradient-bloom': 'linear-gradient(135deg, #F8A5C2 0%, #FF9B71 100%)',
        'gradient-card': 'linear-gradient(180deg, rgba(250, 247, 242, 0.03) 0%, rgba(250, 247, 242, 0) 100%)',
        'glow-top': 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255, 155, 113, 0.08) 0%, transparent 100%)',
      },
      // Explicit text colors to ensure correct light text on dark background
      textColor: {
        'text-primary': '#FAF7F2',
        'text-secondary': '#C4BBB0',
        'text-muted': '#8A8078',
      },
    },
  },
  plugins: [],
}
