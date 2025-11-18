'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'

type Variant = 'default' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

const sizeMap: Record<Size, string> = {
  sm: 'h-9 px-4 text-xs',
  md: 'h-11 px-5',
  lg: 'h-12 px-6 text-base',
}

const variantMap: Record<Variant, string> = {
  default: 'bg-foreground text-background hover:opacity-90',
  outline: 'border border-foreground/20 text-foreground hover:bg-foreground/10',
  ghost: 'text-foreground hover:bg-foreground/10',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'md', ...props }, ref) => {
    const cls = `${base} ${sizeMap[size]} ${variantMap[variant]} ${className}`
    return <button ref={ref} className={cls} {...props} />
  }
)
Button.displayName = 'Button'

