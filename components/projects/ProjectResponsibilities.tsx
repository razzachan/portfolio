import { ArrowRight } from 'lucide-react'

export default function ProjectResponsibilities({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((it, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <ArrowRight size={16} className="mt-1 text-foreground/70" />
          <span className="text-sm text-foreground/80">{it}</span>
        </li>
      ))}
    </ul>
  )
}
