"use client";

import { useEffect, useMemo, useState } from "react";
import { projects } from "@/src/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectFilterBar from "@/components/projects/ProjectFilterBar";
import type { ProjectType } from "@/src/lib/projects";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ProjectsPageClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  const allowed: Array<ProjectType | "Todos"> = [
    "Todos",
    "SaaS",
    "Bot",
    "Landing Page",
    "IA & Persona",
    "Outro",
  ];

  const [active, setActive] = useState<ProjectType | "Todos">("Todos");

  // Initialize from URL (?type=...)
  useEffect(() => {
    const typeParam = searchParams?.get("type");
    if (typeParam && allowed.includes(typeParam as any)) {
      setActive(typeParam as ProjectType | "Todos");
    }
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Persist to URL when active changes
  useEffect(() => {
    if (!pathname) return;
    const params = new URLSearchParams(searchParams?.toString());
    if (active === "Todos") {
      params.delete("type");
    } else {
      params.set("type", active);
    }
    const qs = params.toString();
    const href = qs ? `${pathname}?${qs}` : pathname;
    router.replace(href, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, pathname]);

  const list = useMemo(() => {
    if (active === "Todos") return projects;
    return projects.filter((p) => p.type === active);
  }, [active]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent mb-4"></div>
          <p className="text-sm text-foreground/60">Carregando projetos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section>
        <SectionHeader
          title="Meus Projetos"
          right={
            <div className="flex items-center gap-4">
              <span className="text-sm text-foreground/60" aria-live="polite">
                {(() => {
                  const n = list.length;
                  const label = `${n} projeto${n === 1 ? '' : 's'}`;
                  return active === 'Todos' ? label : `${label} — ${active}`;
                })()}
              </span>
              <Link href="/" className="text-sm text-foreground/75 hover:text-foreground" prefetch>← Voltar para Home</Link>
            </div>
          }
        />
        <p className="mt-2 text-foreground/80">
          Uma coleção de sistemas, automações, bots e produtos digitais que construí para negócios reais.
        </p>
      </section>

      <div className="flex items-center justify-between gap-4">
        <ProjectFilterBar active={active} onChange={setActive} />
        <span role="status" aria-live="polite" className="text-sm text-foreground/60">
          {(() => {
            const n = list.length;
            const label = `${n} projeto${n === 1 ? "" : "s"}`;
            return active === "Todos" ? label : `${label} — ${active}`;
          })()}
        </span>
      </div>

      <motion.div
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.6 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence initial={false} mode="popLayout">
          {list.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <section className="mt-10">
        <div className="rounded-2xl border border-foreground/10 p-6 glass text-center">
          <h3 className="text-base font-medium">Curtiu algum projeto?</h3>
          <p className="mt-1 text-sm text-foreground/75">Vamos conversar sobre algo parecido para o seu negócio.</p>
          <div className="mt-3">
            <a
              href="https://wa.me/5548988644305"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-4 py-2 text-sm hover:border-foreground/40"
            >
              💬 Falar comigo para criar algo parecido
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
