// Global TypeScript type definitions for Roo Petroleum website

// Navigation types
export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
  children?: NavigationItem[];
}

export interface NavigationProps {
  items: NavigationItem[];
  className?: string;
}

// Button component types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

// Layout types
export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export interface HeaderProps {
  navigation: NavigationItem[];
  showSignIn?: boolean;
}

export interface FooterProps {
  companyInfo: CompanyInfo;
  navigation: NavigationItem[];
  socialLinks: SocialLink[];
}

// Company information types
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  contact: {
    phone: string;
    email: string;
    website: string;
  };
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// Hero section types
export interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
  className?: string;
}

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image?: string;
}

export interface ServicesProps {
  services: Service[];
  title?: string;
  description?: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject?: string;
  message: string;
  serviceType?: string;
}

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
  loading?: boolean;
  className?: string;
}

// Page metadata types
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

// API response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form validation types
export interface ValidationError {
  field: string;
  message: string;
}

export interface FormState {
  isValid: boolean;
  errors: ValidationError[];
  touched: Record<string, boolean>;
}

// Theme types
export type ColorVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Spacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

// Utility types
export type WithClassName<T = {}> = T & {
  className?: string;
};

export type WithChildren<T = {}> = T & {
  children: React.ReactNode;
};

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Component ref types
export type ButtonRef = HTMLButtonElement;
export type InputRef = HTMLInputElement;
export type TextAreaRef = HTMLTextAreaElement;
export type FormRef = HTMLFormElement;

// Event handler types
export type ClickHandler = (event: React.MouseEvent<HTMLElement>) => void;
export type ChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
export type SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void;

// Loading and error states
export interface LoadingState {
  isLoading: boolean;
  error?: string | null;
}

export interface AsyncState<T> extends LoadingState {
  data?: T | null;
}

// Responsive design types
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>;