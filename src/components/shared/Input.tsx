'use client';

import React, { forwardRef } from 'react';
import { InputRef } from '@/types';
import { BRAND_COLORS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'default' | 'filled' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

/**
 * Reusable Input component following Roo Petroleum design system
 * Supports various states, sizes, and validation
 */
const Input = forwardRef<InputRef, InputProps>((
  {
    label,
    error,
    helperText,
    variant = 'default',
    size = 'md',
    leftIcon,
    rightIcon,
    className,
    id,
    ...props
  },
  ref
) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  const baseStyles = `
    w-full rounded-lg border transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-1
    disabled:opacity-50 disabled:cursor-not-allowed
    placeholder:text-gray-400
  `;

  const variantStyles = {
    default: `
      border-gray-300 bg-white text-[#003666]
      focus:border-[#F2601A] focus:ring-[#F2601A]/20
      hover:border-gray-400
    `,
    filled: `
      border-transparent bg-gray-100 text-[#003666]
      focus:bg-white focus:border-[#F2601A] focus:ring-[#F2601A]/20
      hover:bg-gray-50
    `,
    outlined: `
      border-2 border-gray-300 bg-transparent text-[#003666]
      focus:border-[#F2601A] focus:ring-[#F2601A]/20
      hover:border-gray-400
    `,
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm h-8',
    md: 'px-4 py-2 text-base h-10',
    lg: 'px-5 py-3 text-lg h-12',
  };

  const errorStyles = error
    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
    : '';

  const iconPadding = {
    left: leftIcon ? (size === 'sm' ? 'pl-8' : size === 'md' ? 'pl-10' : 'pl-12') : '',
    right: rightIcon ? (size === 'sm' ? 'pr-8' : size === 'md' ? 'pr-10' : 'pr-12') : '',
  };

  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-[#003666] mb-1"
        >
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Input Container */}
      <div className="relative">
        {/* Left Icon */}
        {leftIcon && (
          <div className={cn(
            'absolute left-0 top-0 h-full flex items-center justify-center text-gray-400',
            size === 'sm' ? 'w-8' : size === 'md' ? 'w-10' : 'w-12'
          )}>
            {leftIcon}
          </div>
        )}

        {/* Input Field */}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            baseStyles,
            variantStyles[variant],
            sizeStyles[size],
            errorStyles,
            iconPadding.left,
            iconPadding.right,
            className
          )}
          {...props}
        />

        {/* Right Icon */}
        {rightIcon && (
          <div className={cn(
            'absolute right-0 top-0 h-full flex items-center justify-center text-gray-400',
            size === 'sm' ? 'w-8' : size === 'md' ? 'w-10' : 'w-12'
          )}>
            {rightIcon}
          </div>
        )}
      </div>

      {/* Helper Text or Error */}
      {(error || helperText) && (
        <p className={cn(
          'mt-1 text-xs',
          error ? 'text-red-500' : 'text-gray-500'
        )}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;