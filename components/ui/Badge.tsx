'use client'

import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLSpanElement>

export default function Badge({ className = '', ...props }: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-foreground/20 px-3 py-1 text-xs text-foreground/80 backdrop-blur hover:border-foreground/30 hover:text-foreground glass transition-transform hover:-translate-y-0.5 ${className}`}
      {...props}
    />
  )
}
