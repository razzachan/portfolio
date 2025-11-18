import { CheckCircle2 } from 'lucide-react'

export default function ProjectHighlights({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((h, i) => (
        <div key={i} className="flex items-start gap-3 rounded-xl border border-foreground/10 p-4 glass">
          <CheckCircle2 className="mt-0.5 text-foreground/80" size={18} />
          <p className="text-sm text-foreground/80">{h}</p>
        </div>
      ))}
    </div>
  )
}
