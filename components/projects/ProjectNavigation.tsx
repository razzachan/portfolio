import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function ProjectNavigation({
  prev,
  next,
}: {
  prev?: { slug: string; title: string }
  next?: { slug: string; title: string }
}) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <Link href="/projects" className="text-sm hover:underline inline-flex items-center gap-2">
        <ArrowLeft size={16} /> Voltar para projetos
      </Link>
      <div className="flex items-center gap-4">
        {prev && (
          <Link
            href={`/projects/${prev.slug}`}
            className="text-sm hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} /> {prev.title}
          </Link>
        )}
        {next && (
          <Link
            href={`/projects/${next.slug}`}
            className="text-sm hover:underline inline-flex items-center gap-2"
          >
            {next.title} <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </div>
  )
}
