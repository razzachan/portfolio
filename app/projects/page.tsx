import { Suspense } from "react";
import ProjectsPageClient from "./ProjectsPageClient";
import JsonLd from "@/components/seo/JsonLd";
import { projects } from "@/src/lib/projects";

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidar a cada hora

export default function ProjectsPage() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Projetos',
          url: `${base}/projects`,
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: base },
              { '@type': 'ListItem', position: 2, name: 'Projetos', item: `${base}/projects` },
            ],
          },
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: projects.map((p, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `${base}/projects/${p.slug}`,
              name: p.title,
            })),
          },
        }}
      />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent mb-4"></div>
            <p className="text-sm text-foreground/60">Carregando projetos...</p>
          </div>
        </div>
      }>
        <ProjectsPageClient />
      </Suspense>
    </>
  );
}
