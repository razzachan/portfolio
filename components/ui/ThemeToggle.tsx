'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isDark = theme !== 'light'

  return (
    <button
      type="button"
      aria-label="Alternar tema"
      className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 glass"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
   >
      {mounted ? (
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="text-foreground/90"
        >
          {isDark ? <Moon size={18} /> : <Sun size={18} />}
        </motion.span>
      ) : (
        // SSR/client first paint placeholder to avoid hydration mismatch
        <span className="block h-[18px] w-[18px]" />
      )}
    </button>
  )
}
