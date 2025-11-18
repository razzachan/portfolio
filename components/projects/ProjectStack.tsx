import Badge from '../ui/Badge'

export default function ProjectStack({ stack }: { stack: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {stack.map((s) => (
        <Badge key={s}>{s}</Badge>
      ))}
    </div>
  )
}
