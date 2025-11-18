export default function MockupPlaceholder({ label = 'Mockup' }: { label?: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-foreground/10 glass">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-pink-500/10" />
      <div className="relative grid h-full place-items-center text-sm text-foreground/70">
        {label}
      </div>
    </div>
  )
}
