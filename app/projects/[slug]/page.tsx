import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, projects } from "@/src/lib/projects";
import { jsonLdScript, projectJsonLd } from "@/src/lib/seo";
import CaseTOC from "@/components/projects/CaseTOC";
import CaseTOCMobile from "@/components/projects/CaseTOCMobile";
import ReadingProgress from "@/components/projects/ReadingProgress";
import ProgressiveImage from "@/components/ui/ProgressiveImage";
import MockupGallery from "@/components/projects/MockupGallery";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      type: "article",
      url: `https://julio.betoni.dev/projects/${project.slug}`,
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  const headings = [
    { id: "overview", label: "Visão geral" },
    { id: "highlights", label: "Destaques" },
    { id: "stack", label: "Stack" },
    { id: "responsibilities", label: "Responsabilidades" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            projectJsonLd({
              title: project.title,
              slug: project.slug,
              description: project.shortDescription,
            })
          ),
        }}
      />
      <ReadingProgress />
      
      <main className="bg-white dark:bg-zinc-900">
        {/* Hero */}
        <div className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mx-auto max-w-7xl px-6 py-16">
            {project.images && project.images.length > 0 && (
              <div className="mb-8 aspect-video w-full overflow-hidden rounded-xl">
                <ProgressiveImage
                  src={project.images[0]}
                  alt={project.title}
                  width={1200}
                  height={630}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            )}
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-block rounded-full bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                {project.type}
              </span>
              {project.status && (
                <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                  {project.status}
                </span>
              )}
              <span className="text-sm text-zinc-500 dark:text-zinc-500">{project.year}</span>
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">{project.subtitle}</p>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">Papel: {project.role}</p>
            {project.links && (project.links.demo || project.links.repo) && (
              <div className="mt-6 flex gap-3">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow transition-all hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                  >
                    Ver Demo
                  </a>
                )}
                {project.links.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700"
                  >
                    Ver Repositório
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="lg:hidden mb-8">
            <CaseTOCMobile headings={headings} />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <CaseTOC headings={headings} />
              </div>
            </aside>

            <article className="lg:col-span-3">
              <div className="prose prose-zinc max-w-none dark:prose-invert prose-headings:font-display prose-headings:font-semibold prose-h2:text-2xl prose-h2:tracking-tight prose-p:leading-relaxed">
                <section id="overview">
                  <h2>Visão geral</h2>
                  <p>{project.longDescription}</p>
                </section>

                <section id="highlights" className="mt-12">
                  <h2>Destaques</h2>
                  <ul>
                    {project.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </section>

                <section id="stack" className="mt-12">
                  <h2>Stack Técnica</h2>
                  <div className="not-prose flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                {project.images && project.images.length > 1 && (
                  <section className="mt-12">
                    <h2>Galeria</h2>
                    <div className="not-prose mt-6">
                      <MockupGallery images={project.images.slice(1).map((src) => ({ src }))} />
                    </div>
                  </section>
                )}

                <section id="responsibilities" className="mt-12">
                  <h2>Responsabilidades</h2>
                  <ul>
                    {project.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </section>
              </div>
            </article>
          </div>

          <div className="mt-16 border-t border-zinc-200 pt-8 dark:border-zinc-800">
            <Link href="/projects" className="text-sm text-zinc-600 underline dark:text-zinc-400">
              ← Voltar para Projetos
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
