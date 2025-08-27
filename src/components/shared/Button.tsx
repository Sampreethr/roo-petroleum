'use client';

import React, { forwardRef } from 'react';
import { ButtonProps, ButtonRef } from '@/types';
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
      bg-[#F2601A] text-white
      hover:bg-[#D4501A]
      focus:ring-[#F2601A]
      shadow-md hover:shadow-lg
    `,
    secondary: `
      bg-[#003666] text-white
      hover:bg-[#002244]
      focus:ring-[#003666]
      shadow-md hover:shadow-lg
    `,
    outline: `
      border-2 border-[#F2601A] text-[#F2601A]
      hover:bg-[#F2601A] hover:text-white
      focus:ring-[#F2601A]
      bg-transparent
    `,
    ghost: `
      text-[#003666] bg-transparent
      hover:bg-[#F8F9FA]
      focus:ring-[#DEE2E6]
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