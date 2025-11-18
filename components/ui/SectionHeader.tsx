import { ReactNode } from 'react'

type Props = {
  title: string
  eyebrow?: string
  right?: ReactNode
}

export default function SectionHeader({ title, eyebrow, right }: Props) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        {eyebrow ? (
          <div className="text-xs uppercase tracking-wider text-foreground/50">{eyebrow}</div>
        ) : null}
        <h2 className="text-xl font-semibold tracking-tight heading">{title}</h2>
        <div className="mt-1 h-[2px] w-14 rounded bg-gradient-to-r from-sky-400/60 via-violet-400/60 to-pink-400/60" />
      </div>
      {right ? <div className="text-sm text-foreground/75">{right}</div> : null}
    </div>
  )
}
