"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Badge from "../ui/Badge";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/src/lib/projects";
import ProgressiveImage from "../ui/ProgressiveImage";
import { useRouter } from "next/navigation";

type Props = {
  project: Project;
  bullets?: string[];
  priority?: boolean;
};

export default function FeaturedProjectCard({ project, bullets, priority }: Props) {
  const router = useRouter();
  const stack = project.stack.slice(0, 4);
  const thumb = project.images?.[0];
  const thumbSrc = typeof thumb === 'string' ? thumb : thumb?.src;
  const thumbAlt = typeof thumb === 'string' ? `${project.title} — Mockup` : (thumb?.alt || `${project.title} — Mockup`);
  const href = `/projects/${project.slug}`;
  return (
    <motion.article
      onMouseEnter={() => router.prefetch(href)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="group grid gap-4 rounded-2xl border border-foreground/10 p-6 glass shadow-soft md:grid-cols-2 overflow-hidden"
    >
      <div className="flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
            <p className="mt-1 text-foreground/75">{project.subtitle}</p>
          </div>
          <Badge>{project.type}</Badge>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-foreground/75">
          <span className="rounded-full border border-foreground/10 px-2 py-0.5">{project.year}</span>
          {stack.map((t) => (
            <span key={t} className="rounded-full border border-foreground/10 px-2 py-0.5">
              {t}
            </span>
          ))}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-foreground/75">{project.shortDescription}</p>
        {bullets && bullets.length ? (
          <ul className="mt-3 space-y-1 text-xs text-foreground/75">
            {bullets.slice(0, 3).map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-foreground/50">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-5">
          <Link
            href={href}
            prefetch
            aria-label={`Ver case completo de ${project.title}`}
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
          >
            Ver case completo <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-white/8 to-transparent" />
        {thumb ? (
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative h-44 md:h-full min-h-40 w-full overflow-hidden rounded-xl border border-foreground/10 shadow-soft"
          >
            <img
              src={thumbSrc}
              alt={thumbAlt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              loading={priority ? 'eager' : 'lazy'}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                console.error('Failed to load:', e.currentTarget.src);
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.38),transparent_55%)]" />
            <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-foreground/90 px-2 py-1 text-[10px] font-medium tracking-wide text-background/90 backdrop-blur-sm">
              {project.type}
            </span>
          </motion.div>
        ) : (
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative h-44 md:h-full min-h-40 w-full rounded-xl border border-foreground/10 bg-gradient-to-br from-sky-400/20 via-violet-500/20 to-pink-500/20 backdrop-blur-sm shadow-hover"
          >
            <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-foreground/90 px-2 py-1 text-[10px] font-medium tracking-wide text-background/90">
              {project.type}
            </span>
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_top,rgba(0,0,0,.4),transparent_60%)]" />
          </motion.div>
        )}
      </div>
    </motion.article>
  );
}
