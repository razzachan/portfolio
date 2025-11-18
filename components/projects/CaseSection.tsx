import { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
  icon?: ReactNode
  id?: string
}

export default function CaseSection({ title, children, icon, id }: Props) {
  return (
    <section className="space-y-3 scroll-mt-24" id={id}>
      <div className="flex items-center gap-2">
        {icon ? <span className="text-foreground/80">{icon}</span> : null}
        <h2 className="text-lg font-semibold tracking-tight heading">
          {title}
        </h2>
      </div>
      <div className="h-[2px] w-10 rounded bg-foreground/20" />
      <div className="space-y-3 text-sm leading-relaxed text-foreground/80">{children}</div>
    </section>
  )
}
