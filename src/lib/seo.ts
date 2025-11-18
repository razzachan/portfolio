export function jsonLdScript(object: Record<string, any>) {
  return JSON.stringify(object);
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Julio Cesar Betoni",
    url: "https://julio.betoni.dev",
    jobTitle: "Full-Stack Developer",
  };
}

export function projectJsonLd(project: { title: string; slug: string; description: string; datePublished?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `https://julio.betoni.dev/projects/${project.slug}`,
    datePublished: project.datePublished ?? undefined,
  };
}
