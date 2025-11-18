import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Navegação</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Social</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://github.com/juliobetoni" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/juliobetoni" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Legal</h3>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
              © {currentYear} Julio Cesar Betoni. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
