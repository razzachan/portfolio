import Link from "next/link";
import { projects } from "@/src/lib/projects";
import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";

export const metadata = {
  title: "Projetos",
  description: "Coleção completa de projetos e estudos de caso de Julio Cesar Betoni. SaaS, bots, landing pages e automação.",
};

export default function ProjectsPage() {
  const byType = {
    "SaaS": projects.filter((p) => p.type === "SaaS"),
    "Bot": projects.filter((p) => p.type === "Bot"),
    "Landing Page": projects.filter((p) => p.type === "Landing Page"),
    "IA & Persona": projects.filter((p) => p.type === "IA & Persona"),
    "Outro": projects.filter((p) => p.type === "Outro"),
  };

  return (
    <main className="bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <header className="mb-12">
          <h1 className="font-display text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Todos os Projetos
          </h1>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
            Coleção completa de trabalhos publicados e em desenvolvimento, organizados por categoria.
          </p>
        </header>

        <div className="space-y-16">
          {Object.entries(byType).map(([type, items]) => {
            if (items.length === 0) return null;
            return (
              <section key={type}>
                <h2 className="mb-6 font-display text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                  {type}
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {items.map((p) => (
                    <FeaturedProjectCard key={p.slug} project={p} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link href="/" className="text-sm text-zinc-600 underline dark:text-zinc-400">
            ← Voltar para Home
          </Link>
        </div>
      </div>
    </main>
  );
}
