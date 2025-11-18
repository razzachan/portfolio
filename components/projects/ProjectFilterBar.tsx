'use client'

import Badge from '../ui/Badge'
import { motion } from 'framer-motion'
import type { ProjectType } from '@/src/lib/projects'
import { X } from 'lucide-react'

const types: ProjectType[] = [
  'SaaS',
  'Bot',
  'Landing Page',
  'IA & Persona',
  'Outro',
]

type Props = {
  active: ProjectType | 'Todos'
  onChange: (t: ProjectType | 'Todos') => void
}

export default function ProjectFilterBar({ active, onChange }: Props) {
  const tabs = ['Todos', ...types] as const

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    const current = tabs.findIndex((t) => t === active)
    if (current === -1) return
    if (e.key === 'ArrowRight') {
      const next = tabs[(current + 1) % tabs.length]
      onChange(next)
      e.preventDefault()
    } else if (e.key === 'ArrowLeft') {
      const prev = tabs[(current - 1 + tabs.length) % tabs.length]
      onChange(prev)
      e.preventDefault()
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div
        role="tablist"
        aria-label="Filtros de projetos"
        className="flex flex-wrap items-center gap-2"
        onKeyDown={handleKeyDown}
      >
        {tabs.map((t) => {
          const isActive = active === t
          return (
            <motion.button
              key={t}
              role="tab"
              aria-selected={isActive}
              aria-pressed={isActive}
              aria-label={`Filtrar por ${t}`}
              whileTap={{ scale: 0.98 }}
              onClick={() => onChange(t)}
              className={`relative focus:outline-0 focus-visible:ring-2 focus-visible:ring-foreground/40 rounded-full transition ${isActive ? 'scale-[1.02]' : ''}`}
            >
              <Badge className={`${isActive ? 'border-foreground/40 text-foreground shadow-soft' : ''}`}>
                {t}
              </Badge>
              {isActive && (
                <motion.div
                  layoutId="filter-underline"
                  className="absolute left-2 right-2 -bottom-1 h-[2px] rounded bg-foreground/50"
                />
              )}
            </motion.button>
          )
        })}
      </div>

      {active !== 'Todos' && (
        <button
          type="button"
          onClick={() => onChange('Todos')}
          className="inline-flex items-center gap-1 rounded-full border border-foreground/20 px-3 py-1 text-xs text-foreground/80 hover:border-foreground/40 glass"
          aria-label="Limpar filtro e mostrar todos"
        >
          <X size={12} /> Limpar
        </button>
      )}

      <span aria-live="polite" className="sr-only">Filtro ativo: {active}</span>
    </div>
  )
}
