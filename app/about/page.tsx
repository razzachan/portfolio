export const metadata = {
  title: "Sobre",
  description: "Conheça mais sobre Julio Cesar Betoni, desenvolvedor full-stack com foco em impacto, UX e performance.",
};

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Sobre Mim — Julio Betoni
        </h2>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>
            Sou um desenvolvedor full‑stack com foco em <strong className="text-zinc-900 dark:text-zinc-50">SaaS, automações, IA aplicada e sistemas que resolvem problemas reais</strong> — não projetos de estudo. Minha especialidade é pegar um negócio "bagunçado", entender as dores e <strong className="text-zinc-900 dark:text-zinc-50">transformar em software organizado</strong>, com processos, UX moderna e automação inteligente.
          </p>
          <ul className="space-y-2 text-base">
            <li>🧠 <strong className="text-zinc-900 dark:text-zinc-50">Pensamento de produto</strong> — entendo o negócio antes de escrever código</li>
            <li>💬 <strong className="text-zinc-900 dark:text-zinc-50">UX + copy</strong> — interfaces que convertem e fazem sentido</li>
            <li>🤖 <strong className="text-zinc-900 dark:text-zinc-50">IA aplicada</strong> — bots de WhatsApp, NLP, automações e decisão</li>
            <li>🏗️ <strong className="text-zinc-900 dark:text-zinc-50">Arquitetura</strong> — modelo dados, organizo fluxos, escalabilidade</li>
            <li>⚡ <strong className="text-zinc-900 dark:text-zinc-50">Velocidade com robustez</strong> — entrego rápido sem gambiarra</li>
          </ul>
          <p>
            Já desenvolvi soluções para assistência técnica, imobiliárias, clínicas, e sistemas complexos que unem IA + operação humana + automação.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Áreas de foco
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">SaaS e Produtos</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Da ideia ao lançamento: arquitetura, modelagem, UX, integrações e métricas. Construo produtos que resolvem dores reais com foco em conversão e retenção.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Automação + IA aplicada</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Bots, RPA, orquestração de processos e agentes com contexto de negócio. Eficiência com supervisão humana quando necessário.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Sistemas internos</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Portais, CRMs e backoffices com workflows claros, permissões e relatórios. Menos atrito, mais resultado.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Experiências Web</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Landing pages e front‑ends com performance, acessibilidade e microinterações que passam confiança.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Skills
          </h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "TypeScript", "Node.js", "Next.js", "React", "Tailwind CSS", "Framer Motion",
              "PostgreSQL", "Prisma", "Redis", "tRPC/REST", "Zod", "Playwright", "Jest",
              "Docker", "CI/CD", "WhatsApp Bots", "OpenAI / LLMs", "LangChain/Tools",
              "Webhooks", "Integrations"
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
