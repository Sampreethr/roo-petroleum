'use client';

import React, { forwardRef } from 'react';
import { ButtonProps, ButtonRef } from '@/types';
import { BRAND_COLORS } from '@/lib/constants';
import { cn } from '@/lib/utils';

/**
 * Reusable Button component following Roo Petroleum brand guidelines
 * Supports multiple variants, sizes, and states
 */
const Button = forwardRef<ButtonRef, ButtonProps>((
  {
    children,
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    onClick,
    type = 'button',
    className,
    ...props
  },
  ref
) => {
  const baseStyles = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    relative overflow-hidden
  `;

  const variantStyles = {
    primary: `
      bg-[${BRAND_COLORS.primary.orange}] text-white
      hover:bg-[${BRAND_COLORS.secondary.darkOrange}]
      focus:ring-[${BRAND_COLORS.primary.orange}]
      shadow-md hover:shadow-lg
    `,
    secondary: `
      bg-[${BRAND_COLORS.primary.navy}] text-white
      hover:bg-[${BRAND_COLORS.secondary.darkNavy}]
      focus:ring-[${BRAND_COLORS.primary.navy}]
      shadow-md hover:shadow-lg
    `,
    outline: `
      border-2 border-[${BRAND_COLORS.primary.orange}] text-[${BRAND_COLORS.primary.orange}]
      hover:bg-[${BRAND_COLORS.primary.orange}] hover:text-white
      focus:ring-[${BRAND_COLORS.primary.orange}]
      bg-transparent
    `,
    ghost: `
      text-[${BRAND_COLORS.primary.navy}] bg-transparent
      hover:bg-[${BRAND_COLORS.neutral.gray100}]
      focus:ring-[${BRAND_COLORS.neutral.gray300}]
    `,
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm h-8',
    md: 'px-4 py-2 text-base h-10',
    lg: 'px-6 py-3 text-lg h-12',
  };

  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      onClick={handleClick}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <span className={loading ? 'opacity-0' : 'opacity-100'}>
        {children}
      </span>
    </button>
  );
});

Button.displayName = 'Button';

export default Button;