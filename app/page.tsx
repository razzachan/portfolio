"use client";
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { Cpu, Bot, Sparkles, LayoutTemplate } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import { projects } from '@/src/lib/projects'
import FeaturedProjectCard from '@/components/projects/FeaturedProjectCard'
import ResultsSection from '@/components/home/ResultsSection'
import SectionHeader from '@/components/ui/SectionHeader'
import JsonLd from '@/components/seo/JsonLd'

export default function Home() {
  const featuredSlugs = [
    'eletrofix-hub-pro-fix-fogoes',
    'immoflow-saas-imobiliarias',
    'miracle-bot-tibia-74',
  ] as const
  const featured = projects.filter((p) => featuredSlugs.includes(p.slug as any))

  return (
    <div className="space-y-16">
      {/* JSON-LD: Person + WebSite */}
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Julio Betoni',
            url: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
            email: 'mailto:akroma.julio@gmail.com',
            sameAs: [
              'https://www.linkedin.com/in/juliobetoni/',
              'https://github.com/razzachan',
              'https://wa.me/5548988644305',
            ],
            jobTitle: 'Desenvolvedor Full‑stack',
            knowsAbout: [
              'SaaS',
              'Automação',
              'IA aplicada',
              'Bots',
              'Next.js',
              'TypeScript',
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Julio Betoni — Portfólio',
            url: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
          },
        ]}
      />
      {/* Hero */}
      <section className="pt-6 md:pt-10">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl heading">
              Eu construo <span className="gradient-text">sistemas, automações e IA</span> que resolvem problemas reais.
            </h1>
            <p className="mt-4 text-lg text-foreground/80 max-w-2xl">
              SaaS completos, bots avançados e integrações inteligentes para negócios de verdade.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#destaques">
                <Button>🔍 Ver meus projetos</Button>
              </Link>
              <Link href="https://wa.me/5548988644305" target="_blank">
                <Button variant="outline">💬 Falar comigo no WhatsApp</Button>
              </Link>
            </div>
          </motion.div>
          <div className="relative">
            <motion.div
              aria-hidden
              className="absolute -inset-x-8 -top-6 h-40 bg-gradient-to-b from-white/5 to-transparent blur-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              className="relative mx-auto h-56 w-full max-w-md [perspective:1000px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="group relative h-full w-full">
                <motion.div
                  className="absolute left-6 right-0 top-8 h-40 rounded-2xl border border-foreground/10 glass shadow-soft will-change-transform"
                  style={{ background: "radial-gradient(ellipse at top, rgba(255,255,255,0.06), transparent 60%)", transformStyle: 'preserve-3d' }}
                  whileHover={{ rotateX: -2, rotateY: 3 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 14, mass: 0.6 }}
                />
                <motion.div
                  className="absolute left-0 right-10 top-0 h-40 rounded-2xl border border-foreground/10 glass shadow-soft will-change-transform"
                  style={{ background: "radial-gradient(ellipse at bottom, rgba(255,255,255,0.06), transparent 60%)", transformStyle: 'preserve-3d' }}
                  whileHover={{ rotateX: 2, rotateY: -3 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 14, mass: 0.6 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* O que eu faço */}
      <section>
        <SectionHeader title="O que eu faço" />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              t: 'SaaS & Sistemas Complexos',
              d: 'Arquitetura completa: banco, backend, frontend e deploy.',
              icon: <Cpu size={18} className="text-foreground/70" />,
            },
            {
              t: 'IA Aplicada a Negócios',
              d: 'WhatsApp, automações inteligentes, NLP, decisões automáticas.',
              icon: <Sparkles size={18} className="text-foreground/70" />,
            },
            {
              t: 'Automações & Bots Avançados',
              d: 'Bots reais, scripts e integrações profundas.',
              icon: <Bot size={18} className="text-foreground/70" />,
            },
            {
              t: 'UX, Conversão & Branding',
              d: 'Interfaces modernas e páginas que convertem.',
              icon: <LayoutTemplate size={18} className="text-foreground/70" />,
            },
          ].map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.25, delay: i * 0.05 }}
              className="group rounded-2xl border border-foreground/10 p-5 glass transition hover:-translate-y-1 hover:shadow-hover"
            >
              <div className="flex items-center gap-3">
                <span className="transition-transform group-hover:scale-105">{c.icon}</span>
                <h3 className="font-medium">{c.t}</h3>
              </div>
              <p className="mt-1 text-sm text-foreground/75">{c.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Authority / Prova Social */}
      <section>
        <h2 className="text-xl font-semibold tracking-tight">Projetos em produção & integrações reais</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3 text-sm text-foreground/75">
          {[
            'Integrações com WhatsApp, IA (GPT-4) e bancos em produção',
            'SaaS, bots e automações usados em operações reais',
            'Foco em reduzir erros e acelerar resposta com tecnologia',
          ].map((s, i) => (
            <div key={i} className="rounded-xl border border-foreground/10 p-4 glass">
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section id="destaques">
        <SectionHeader title="Projetos em destaque" />
        <div className="mt-6 grid gap-6">
          {featured.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.28, delay: i * 0.06 }}
            >
              <FeaturedProjectCard
                project={p}
                bullets={p.highlights.slice(0, 3)}
                priority={i === 0}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Resultados & Impacto */}
      <ResultsSection />

      {/* Stack & Skills */}
      <section>
        <SectionHeader title="Stack & Skills" />
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            'React',
            'TypeScript',
            'Python',
            'Supabase',
            'FastAPI',
            'Node',
            'Tailwind',
            'OpenAI',
            'Railway',
            'PWA',
            'Automação',
            'UX/UI',
          ].map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </section>

      {/* Sobre Mim (resumo) */}
      <section>
        <SectionHeader title="Sobre mim" />
        <p className="mt-3 text-foreground/80 max-w-3xl">
          Sou um desenvolvedor full-stack focado em criar sistemas reais, robustos e modernos. Especialista em SaaS,
          IA, automações e UX voltado para conversão. Gosto de transformar caos em software limpo, bonito e funcional.
        </p>
        <div className="mt-4">
          <Link href="/about" className="text-sm hover:underline">
            Ler página completa
          </Link>
        </div>
      </section>

      {/* CTA final */}
      <section className="rounded-2xl border border-foreground/10 p-6 glass">
        <h3 className="text-lg font-semibold">Pronto para construir o seu próximo sistema, automação ou produto digital?</h3>
        <p className="mt-1 text-sm text-foreground/75">Respondo rápido e vou direto ao ponto.</p>
        <div className="mt-4">
          <Link href="https://wa.me/5548988644305" target="_blank">
            <Button>💬 Falar comigo agora</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
