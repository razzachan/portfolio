import Link from 'next/link'
import { Button } from '../../components/ui/Button'

export default function ProjectLinks({ demo, repo }: { demo?: string; repo?: string }) {
  if (!demo && !repo) return null
  return (
    <div className="flex flex-wrap gap-3 mt-2">
      {demo && (
        <Link href={demo} target="_blank" rel="noreferrer">
          <Button variant="outline">Ver Demo</Button>
        </Link>
      )}
      {repo && (
        <Link href={repo} target="_blank" rel="noreferrer">
          <Button variant="ghost">Código Fonte</Button>
        </Link>
      )}
    </div>
  )
}
