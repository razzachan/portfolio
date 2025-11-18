"use client"

import Link from 'next/link'
import ThemeToggle from '../ui/ThemeToggle'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projetos' },
  { href: '/about', label: 'Sobre' },
  { href: '/contact', label: 'Contato' },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header
      className={`sticky top-0 z-50 glass border-b border-foreground/10 transition-shadow ${
        scrolled ? 'shadow-soft' : ''
      }`}
    >
      <div className="container-max h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight heading text-lg">
          Julio Betoni
        </Link>
        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => {
            const active = pathname === n.href
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? 'page' : undefined}
                className={`relative py-1 transition hover:text-foreground group ${
                  active ? 'text-foreground' : 'text-foreground/70'
                }`}
              >
                {n.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-[2px] w-full rounded bg-foreground/60"
                    transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 0.3 }}
                  />
                )}
                {!active && (
                  <span
                    className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded bg-foreground/30 transition-transform duration-300 group-hover:scale-x-100"
                  />
                )}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
