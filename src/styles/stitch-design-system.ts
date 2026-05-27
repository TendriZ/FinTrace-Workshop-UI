// FinTrace Stitch Design System
export const stitchDesignSystem = {
  // Color Palette
  colors: {
    primary: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
    },
    secondary: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
    },
    accent: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
    },
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
  },

  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
    hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    secondary: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
    accent: 'linear-gradient(135deg, #22d3ee 0%, #c084fc 100%)',
    features: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
  },

  // Spacing
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    heroPadding: 'py-20 md:py-32',
    sectionPadding: 'py-16',
  },

  // Typography
  typography: {
    hero: {
      fontSize: 'text-5xl md:text-6xl',
      fontWeight: 'font-bold',
      lineHeight: 'leading-tight',
    },
    heading: {
      fontSize: 'text-3xl md:text-4xl',
      fontWeight: 'font-bold',
      lineHeight: 'leading-tight',
    },
    subheading: {
      fontSize: 'text-xl md:text-2xl',
      fontWeight: 'font-semibold',
      lineHeight: 'leading-relaxed',
    },
    body: {
      fontSize: 'text-base md:text-lg',
      fontWeight: 'font-normal',
      lineHeight: 'leading-relaxed',
    },
    small: {
      fontSize: 'text-sm',
      fontWeight: 'font-normal',
      lineHeight: 'leading-relaxed',
    },
  },

  // Border Radius
  borderRadius: {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl',
    full: 'rounded-full',
  },

  // Shadows
  shadows: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
    glow: 'shadow-lg shadow-purple-500/10',
    glowStrong: 'shadow-xl shadow-purple-500/20',
  },

  // Animations
  animations: {
    fadeUp: 'animate-fade-up',
    slideIn: 'animate-slide-in',
    scale: 'animate-scale',
    bounce: 'animate-bounce',
    pulse: 'animate-pulse',
  },

  // Transitions
  transitions: {
    default: 'transition-all duration-300 ease-in-out',
    fast: 'transition-all duration-200 ease-in-out',
    slow: 'transition-all duration-500 ease-in-out',
  },

  // Layout
  layout: {
    container: 'container-1280',
    section: 'py-16 md:py-24',
    grid: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    flexCenter: 'flex items-center justify-center',
    flexBetween: 'flex items-center justify-between',
  },

  // Effects
  effects: {
    glass: 'bg-white/90 backdrop-blur-sm',
    glassDark: 'bg-black/50 backdrop-blur-sm',
    gradientText: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent',
    hover: 'hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20',
    hoverLift: 'hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10',
  },

  // Component Variants
  componentVariants: {
    button: {
      primary: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white',
      secondary: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white',
      outline: 'border-2 border-purple-600 text-purple-600',
      white: 'bg-white text-purple-600',
    },
    card: {
      default: 'bg-white/90 backdrop-blur-sm border border-slate-200/50',
      gradient: 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white',
      glass: 'bg-white/60 backdrop-blur-lg border border-white/20',
    },
    text: {
      primary: 'text-slate-900',
      secondary: 'text-slate-600',
      muted: 'text-slate-400',
      gradient: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent',
    },
  },
};

// Animation keyframes
export const animationKeyframes = `
  @keyframes fade-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scale {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes gradient-x {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

// Utility classes for animations
export const animationClasses = {
  'animate-fade-up': 'animate-[fade-up_0.6s_ease-out_forwards]',
  'animate-slide-in': 'animate-[slide-in_0.6s_ease-out_forwards]',
  'animate-scale': 'animate-[scale_0.6s_ease-out_forwards]',
  'animate-gradient-x': 'animate-[gradient-x_3s_ease-in-out_infinite]',
  'animate-float': 'animate-[float_3s_ease-in-out_infinite]',
};