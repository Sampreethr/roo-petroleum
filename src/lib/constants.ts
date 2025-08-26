// Brand Design System Constants
// Based on Roo Petroleum brand guidelines

export const BRAND_COLORS = {
  // Primary brand colors from brand guidelines
  primary: {
    navy: '#003666', // HEX: #003666 - Primary navy blue
    orange: '#F2601A', // HEX: F2601A - Primary orange
    white: '#FFFFFF', // HEX: #FFFFFF - Primary white
  },
  // Extended color palette
  secondary: {
    lightBlue: '#4A90E2',
    darkNavy: '#002244',
    lightOrange: '#FF7A3D',
    darkOrange: '#D4501A',
  },
  // Neutral colors
  neutral: {
    gray100: '#F8F9FA',
    gray200: '#E9ECEF',
    gray300: '#DEE2E6',
    gray400: '#CED4DA',
    gray500: '#ADB5BD',
    gray600: '#6C757D',
    gray700: '#495057',
    gray800: '#343A40',
    gray900: '#212529',
    black: '#000000',
  },
  // Status colors
  status: {
    success: '#28A745',
    warning: '#FFC107',
    error: '#DC3545',
    info: '#17A2B8',
  },
} as const;

export const TYPOGRAPHY = {
  fontFamily: {
    primary: 'var(--font-geist-sans)',
    mono: 'var(--font-geist-mono)',
  },
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
} as const;

export const SPACING = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '6rem',   // 96px
  '5xl': '8rem',   // 128px
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const SHADOWS = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
} as const;

export const BORDER_RADIUS = {
  none: '0',
  sm: '0.125rem',   // 2px
  base: '0.25rem',  // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
} as const;

// Animation and transition constants
export const TRANSITIONS = {
  fast: '150ms ease-in-out',
  normal: '300ms ease-in-out',
  slow: '500ms ease-in-out',
} as const;

// Layout constants
export const LAYOUT = {
  maxWidth: '1200px',
  headerHeight: '80px',
  footerHeight: '120px',
  sidebarWidth: '280px',
} as const;

// Brand messaging
export const BRAND_MESSAGING = {
  tagline: 'Fueling Your Journey with Reliability and Care',
  companyName: 'Roo Petroleum',
  description: 'Your trusted partner for quality petroleum products and exceptional service.',
} as const;