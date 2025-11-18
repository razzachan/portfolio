"use client";
import Link from 'next/link'
import Badge from '../ui/Badge'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Project } from '@/src/lib/projects'
import { memo } from 'react'
import { useRouter } from 'next/navigation'
import ProgressiveImage from '@/app/components/ui/ProgressiveImage'

type Props = {
  project: Project
  bullets?: string[]
}

function ProjectCard({ project, bullets }: Props) {
  const router = useRouter()
  const stack = project.stack.slice(0, 4)
  const thumb = project.images?.[0]
  const href = `/projects/${project.slug}`
  return (
    <motion.article
      onMouseEnter={() => router.prefetch(href)}
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.30, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-2xl border border-foreground/10 p-6 glass shadow-soft shadow-hover"
    >
      {/* Mini mockup / thumbnail */}
      <div className="relative mb-4" aria-hidden>
        {thumb ? (
          <div className="relative h-32 w-full overflow-hidden rounded-xl border border-foreground/10">
            <ProgressiveImage
              src={thumb.src}
              alt={thumb.alt || `${project.title} — Mockup`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.18),transparent_50%)]" />
          </div>
        ) : (
          <div
            className="h-28 w-full rounded-xl border border-foreground/10 glass shadow-soft transition-transform group-hover:scale-[1.01]"
            style={{ background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.06), transparent 60%)' }}
          />
        )}
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-1 text-foreground/75">{project.subtitle}</p>
        </div>
        <Badge>{project.type}</Badge>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-foreground/75">
        <span className="rounded-full border border-foreground/10 px-2 py-0.5">{project.year}</span>
        {stack.map((t) => (
          <span key={t} className="rounded-full border border-foreground/10 px-2 py-0.5">
            {t}
          </span>
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-foreground/75">{project.shortDescription}</p>
      {bullets && bullets.length ? (
        <ul className="mt-4 space-y-1 text-xs text-foreground/75">
          {bullets.slice(0, 3).map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-foreground/50">•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-6">
        <Link
          href={href}
          prefetch
          aria-label={`Ver detalhes do projeto ${project.title}`}
          className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
        >
          Ver detalhes <ArrowRight size={16} />
        </Link>
      </div>
      <div className="absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100" />
    </motion.article>
  )
}

export default memo(ProjectCard)
