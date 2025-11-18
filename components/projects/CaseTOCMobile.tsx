"use client"
import { useState } from 'react'

type Item = { id: string; label: string }

export default function CaseTOCMobile({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="lg:hidden mb-6">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full rounded-xl border border-foreground/15 bg-background/60 px-4 py-2 text-sm flex items-center justify-between glass"
      >
        <span className="font-medium">Navegação do Case</span>
        <span className="text-xs text-foreground/60">{open ? 'Fechar' : 'Abrir'}</span>
      </button>
      {open && (
        <nav aria-label="Navegação seções" className="mt-2 rounded-xl border border-foreground/10 p-3 glass">
          <ul className="grid gap-1">
            {items.map((it) => (
              <li key={it.id}>
                <a
                  href={`#${it.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded px-3 py-1.5 text-sm text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition"
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}
