"use client";
import Badge from '../ui/Badge'
import type { Project } from '@/src/lib/projects'
import { motion } from 'framer-motion'

export default function ProjectHeader({ project }: { project: Project }) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-foreground/10 p-8 md:p-12 glass shadow-soft">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex flex-wrap items-center gap-3">
          <Badge>{project.type}</Badge>
          <Badge>{project.year}</Badge>
          {project.status ? <Badge>{project.status}</Badge> : null}
        </div>
        <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight heading">{project.title}</h1>
        <p className="mt-2 text-foreground/75 text-lg">{project.subtitle}</p>
      </motion.div>
    </section>
  )
}
