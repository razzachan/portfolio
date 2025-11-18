export const metadata = {
  title: "Contato",
  description: "Entre em contato com Julio Cesar Betoni para projetos, consultorias ou oportunidades.",
};

export default function ContactPage() {
  return (
    <main className="bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Fale comigo
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Se você quer tirar uma ideia do papel ou precisa evoluir um sistema que já existe, podemos conversar. Vou direto ao ponto e proponho caminhos práticos.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://wa.me/5548988644305"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-zinc-700 hover:shadow-xl dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            💬 WhatsApp
          </a>
          <a
            href="mailto:akroma.julio@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700"
          >
            ✉️ Email
          </a>
          <a
            href="https://www.linkedin.com/in/juliobetoni/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700"
          >
            in LinkedIn
          </a>
          <a
            href="https://github.com/razzachan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
