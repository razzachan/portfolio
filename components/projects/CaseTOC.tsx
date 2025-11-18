"use client"
import { useEffect, useState } from 'react'

type Item = { id: string; label: string }

export default function CaseTOC({ items }: { items: Item[] }) {
  const [active, setActive] = useState<string>(items[0]?.id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1))
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: [0, 1] }
    )
    items.forEach((it) => {
      const el = document.getElementById(it.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [items])

  return (
    <nav aria-label="Neste case" className="sticky top-24 hidden lg:block">
      <div className="rounded-2xl border border-foreground/10 p-3 glass text-sm">
        <div className="mb-2 px-2 text-xs uppercase tracking-wide text-foreground/50">Neste case</div>
        <ul className="space-y-1">
          {items.map((it) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className={`block rounded px-2 py-1.5 transition hover:bg-foreground/5 ${
                  active === it.id ? 'bg-foreground/10 text-foreground' : 'text-foreground/70'
                }`}
                aria-current={active === it.id ? 'true' : undefined}
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
