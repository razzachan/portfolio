"use client"
import { ReactNode } from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

export default function MainLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const prefersReduced = useReducedMotion()
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-clip">
      {/* Background ornaments and grain for premium depth */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="app-bg-blobs" />
        <div className="app-noise-overlay" />
      </div>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded focus:bg-background focus:px-3 focus:py-2 focus:text-foreground focus:shadow"
      >
        Pular para conteúdo
      </a>
      <SiteHeader />
      <main id="main-content" className="flex-1 container-max py-10 md:py-14">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: prefersReduced ? 0.15 : 0.22, ease: 'easeOut' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <SiteFooter />
    </div>
  )
}
