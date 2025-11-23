import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import SectionHeader from '@/components/ui/SectionHeader'
import JsonLd from '@/components/seo/JsonLd'

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Contato — Julio Betoni',
  description: 'Fale comigo para construir SaaS, automações, bots e integrações com IA para negócios reais.',
  openGraph: {
    title: 'Contato — Julio Betoni',
    description: 'Fale comigo para construir SaaS, automações, bots e integrações com IA para negócios reais.',
    images: ['/og.svg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.svg'],
  },
};

export default function ContactPage() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  return (
    <div className="max-w-2xl">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contato — Julio Betoni',
          url: `${base}/contact`,
          mainEntity: {
            '@type': 'Person',
            name: 'Julio Betoni',
            contactPoint: [
              {
                '@type': 'ContactPoint',
                contactType: 'business',
                availableLanguage: ['Portuguese', 'English'],
                url: 'https://wa.me/5548988644305',
              },
              {
                '@type': 'ContactPoint',
                contactType: 'email',
                email: 'akroma.julio@gmail.com',
              },
            ],
          },
        }}
      />
      <SectionHeader title="Fale comigo" />
      <p className="mt-2 text-foreground/80">
        Se você quer tirar uma ideia do papel ou precisa evoluir um sistema que já existe, podemos conversar. Vou
        direto ao ponto e proponho caminhos práticos.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="https://wa.me/5548988644305" target="_blank">
          <Button>💬 WhatsApp</Button>
        </Link>
        <Link href="mailto:akroma.julio@gmail.com">
          <Button variant="outline">✉️ Email</Button>
        </Link>
        <Link href="https://www.linkedin.com/in/juliobetoni/" target="_blank">
          <Button variant="ghost">in LinkedIn</Button>
        </Link>
        <Link href="https://github.com/razzachan" target="_blank">
          <Button variant="ghost">GitHub</Button>
        </Link>
      </div>
    </div>
  )
}
