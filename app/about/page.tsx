import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import JsonLd from "@/components/seo/JsonLd";
import SectionHeader from "@/components/ui/SectionHeader";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Sobre — Julio Betoni",
  description: "Full‑stack focado em SaaS, automações e IA aplicada com UX moderna e produto de verdade.",
  openGraph: {
    title: "Sobre — Julio Betoni",
    description: "Full‑stack focado em SaaS, automações e IA aplicada com UX moderna e produto de verdade.",
    images: ['/og.svg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.svg'],
  },
};

export default function AboutPage() {
  const skills = [
    "TypeScript",
    "Node.js",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "PostgreSQL",
    "Prisma",
    "Redis",
    "tRPC/REST",
    "Zod",
    "Playwright",
    "Jest",
    "Docker",
    "CI/CD",
    "WhatsApp Bots",
    "OpenAI / LLMs",
    "LangChain/Tools",
    "Webhooks",
    "Integrations",
  ];

  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  return (
    <div className="space-y-10">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'Sobre — Julio Betoni',
          url: `${base}/about`,
          mainEntity: {
            '@type': 'Person',
            name: 'Julio Betoni',
            url: base,
          },
        }}
      />
      <section className="prose prose-invert max-w-none">
        <SectionHeader title="Sobre Mim — Julio Betoni" />
        <p>
          Sou um desenvolvedor full‑stack com foco em <strong>SaaS, automações, IA aplicada e sistemas que resolvem
          problemas reais</strong> — não projetos de estudo. Minha especialidade é pegar um negócio “bagunçado”, entender
          as dores e <strong>transformar em software organizado</strong>, com processos, UX moderna e automação inteligente.
        </p>
        <ul>
          <li>🧠 <strong>Pensamento de produto</strong> — entendo o negócio antes de escrever código</li>
          <li>💬 <strong>UX + copy</strong> — interfaces que convertem e fazem sentido</li>
          <li>🤖 <strong>IA aplicada</strong> — bots de WhatsApp, NLP, automações e decisão</li>
          <li>🏗️ <strong>Arquitetura</strong> — modelo dados, organizo fluxos, escalabilidade</li>
          <li>⚡ <strong>Velocidade com robustez</strong> — entrego rápido sem gambiarra</li>
        </ul>
        <p>
          Já desenvolvi soluções para assistência técnica, imobiliárias, clínicas, e sistemas complexos que unem IA +
          operação humana + automação.
        </p>
      </section>

      <section>
        <SectionHeader title="Áreas de foco" />
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-foreground/10 p-5 glass">
            <h3 className="text-base font-medium">SaaS e Produtos</h3>
            <p className="mt-2 text-sm text-foreground/75">
              Da ideia ao lançamento: arquitetura, modelagem, UX, integrações e métricas. Construo produtos que resolvem
              dores reais com foco em conversão e retenção.
            </p>
          </div>
          <div className="rounded-2xl border border-foreground/10 p-5 glass">
            <h3 className="text-base font-medium">Automação + IA aplicada</h3>
            <p className="mt-2 text-sm text-foreground/75">
              Bots, RPA, orquestração de processos e agentes com contexto de negócio. Eficiência com supervisão humana
              quando necessário.
            </p>
          </div>
          <div className="rounded-2xl border border-foreground/10 p-5 glass">
            <h3 className="text-base font-medium">Sistemas internos</h3>
            <p className="mt-2 text-sm text-foreground/75">
              Portais, CRMs e backoffices com workflows claros, permissões e relatórios. Menos atrito, mais resultado.
            </p>
          </div>
          <div className="rounded-2xl border border-foreground/10 p-5 glass">
            <h3 className="text-base font-medium">Experiências Web</h3>
            <p className="mt-2 text-sm text-foreground/75">
              Landing pages e front‑ends com performance, acessibilidade e microinterações que passam confiança.
            </p>
          </div>
        </div>
      </section>

      <section>
        <SectionHeader title="Skills" />
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
