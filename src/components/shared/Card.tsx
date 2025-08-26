'use client';

import React from 'react';
import { WithChildren, WithClassName } from '@/types';
import { cn } from '@/lib/utils';

export interface CardProps extends WithChildren, WithClassName {
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  hover?: boolean;
  clickable?: boolean;
  onClick?: () => void;
}

/**
 * Reusable Card component following Roo Petroleum design system
 * Supports various styles, padding options, and interactive states
 */
const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  rounded = 'lg',
  hover = false,
  clickable = false,
  onClick,
  className,
}) => {
  const baseStyles = `
    transition-all duration-200 ease-in-out
    ${clickable || onClick ? 'cursor-pointer' : ''}
  `;

  const variantStyles = {
    default: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-md hover:shadow-lg',
    outlined: 'bg-transparent border-2 border-gray-300',
    filled: 'bg-gray-50 border border-gray-200',
  };

  const paddingStyles = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
  };

  const roundedStyles = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  const hoverStyles = hover
    ? 'hover:shadow-lg hover:scale-[1.02] hover:border-[#F2601A]/30'
    : '';

  const clickableStyles = (clickable || onClick)
    ? 'focus:outline-none focus:ring-2 focus:ring-[#F2601A]/20 focus:ring-offset-2'
    : '';

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const Component = (clickable || onClick) ? 'button' : 'div';

  return (
    <Component
      className={cn(
        baseStyles,
        variantStyles[variant],
        paddingStyles[padding],
        roundedStyles[rounded],
        hoverStyles,
        clickableStyles,
        className
      )}
      onClick={handleClick}
      {...((clickable || onClick) && { type: 'button' })}
    >
      {children}
    </Component>
  );
};

export default Card;

// Card sub-components for better composition
export const CardHeader: React.FC<WithChildren & WithClassName> = ({ children, className }) => (
  <div className={cn('mb-4', className)}>
    {children}
  </div>
);

export const CardTitle: React.FC<WithChildren & WithClassName> = ({ children, className }) => (
  <h3 className={cn('text-lg font-semibold text-[#003666] mb-2', className)}>
    {children}
  </h3>
);

export const CardDescription: React.FC<WithChildren & WithClassName> = ({ children, className }) => (
  <p className={cn('text-gray-600 text-sm', className)}>
    {children}
  </p>
);

export const CardContent: React.FC<WithChildren & WithClassName> = ({ children, className }) => (
  <div className={cn('', className)}>
    {children}
  </div>
);

export const CardFooter: React.FC<WithChildren & WithClassName> = ({ children, className }) => (
  <div className={cn('mt-4 pt-4 border-t border-gray-200', className)}>
    {children}
  </div>
);