export default function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10 mt-16">
      <div className="container-max py-10 text-sm text-foreground/75 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© 2025 Julio Betoni</p>
        <div className="flex items-center gap-5">
          <a href="mailto:akroma.julio@gmail.com" aria-label="Enviar email para akroma.julio@gmail.com" className="hover:text-foreground">Email</a>
          <a href="https://wa.me/5548988644305" target="_blank" rel="noreferrer" aria-label="Abrir conversa no WhatsApp" className="hover:text-foreground">WhatsApp</a>
          <a href="https://www.linkedin.com/in/juliobetoni/" target="_blank" rel="noreferrer" aria-label="Visitar perfil no LinkedIn" className="hover:text-foreground">LinkedIn</a>
          <a href="https://github.com/razzachan" target="_blank" rel="noreferrer" aria-label="Visitar repositórios no GitHub" className="hover:text-foreground">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
