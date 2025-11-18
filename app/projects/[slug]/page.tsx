import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import { projects } from '@/src/lib/projects'
import ProjectHeader from '@/components/projects/ProjectHeader'
import ProjectHighlights from '@/components/projects/ProjectHighlights'
import ProjectStack from '@/components/projects/ProjectStack'
import ProjectResponsibilities from '@/components/projects/ProjectResponsibilities'
import ProjectNavigation from '@/components/projects/ProjectNavigation'
import MockupGallery from '@/components/projects/MockupGallery'
import CaseSection from '@/components/projects/CaseSection'
import ProjectImpact from '@/components/projects/ProjectImpact'
import ProjectLinks from '@/components/projects/ProjectLinks'
import { Target, AlertTriangle, Wrench, Sparkles, Layers, Images, Link as LinkIcon, MessageSquare } from 'lucide-react'
import ReadingProgress from '@/components/ui/ReadingProgress'
import CaseTOC from '@/components/projects/CaseTOC'
import CaseTOCMobile from '@/components/projects/CaseTOCMobile'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return notFound()

  const idx = projects.findIndex((p) => p.slug === project.slug)
  const prev = idx > 0 ? projects[idx - 1] : undefined
  const next = idx < projects.length - 1 ? projects[idx + 1] : undefined
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const url = `${base}/projects/${project.slug}`
  const galleryImages = project.images

  const toc = [
    { id: 'contexto', label: 'Contexto e Objetivo' },
    { id: 'desafio', label: 'O Desafio' },
    { id: 'solucao', label: 'A Solução' },
    { id: 'impacto', label: 'Impacto Real' },
    { id: 'tecnologias', label: 'Tecnologias' },
    { id: 'responsabilidades', label: 'Minhas Responsabilidades' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'links', label: 'Links' },
    { id: 'contato', label: 'CTA Final' },
  ] as const

  return (
    <div className="space-y-12">
      <ReadingProgress />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Project',
          name: project.title,
          description: project.shortDescription,
          url,
          creator: {
            '@type': 'Person',
            name: 'Julio Betoni',
          },
          dateCreated: `${project.year}-01-01`,
          keywords: project.stack,
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: base },
            { '@type': 'ListItem', position: 2, name: 'Projetos', item: `${base}/projects` },
            { '@type': 'ListItem', position: 3, name: project.title, item: url },
          ],
        }}
      />
      <ProjectHeader project={project} />

      <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
        <div className="space-y-12">
      <CaseTOCMobile items={toc as any} />
      <CaseSection id="contexto" title="Contexto e Objetivo" icon={<Target size={16} /> }>
        <p>{project.shortDescription}</p>
        {/* Decisão: uso shortDescription para overview rápido conforme spec. */}
      </CaseSection>

      <CaseSection id="desafio" title="O Desafio" icon={<AlertTriangle size={16} /> }>
        <p>
          Este projeto nasce de necessidades reais: organizar fluxo, reduzir erros operacionais e criar base para
          escala. A demanda incluía integrar diferentes fontes de informação e eliminar processos manuais repetitivos.
          {/* Decisão de copy: texto gerado para preencher seção 'Desafio' conforme wireframe; pode ser editado. */}
        </p>
      </CaseSection>

      <CaseSection id="solucao" title="A Solução Que Eu Construí" icon={<Wrench size={16} /> }>
        <p>{project.longDescription}</p>
        <ProjectHighlights items={project.highlights} />
      </CaseSection>

      <CaseSection id="impacto" title="Impacto Real" icon={<Sparkles size={16} /> }>
        <ProjectImpact slug={project.slug} />
      </CaseSection>

      <CaseSection id="tecnologias" title="Tecnologias Utilizadas" icon={<Layers size={16} /> }>
        <ProjectStack stack={project.stack} />
      </CaseSection>

      <CaseSection id="responsabilidades" title="Minhas Responsabilidades" icon={<Target size={16} /> }>
        <ProjectResponsibilities items={project.responsibilities} />
      </CaseSection>

      <CaseSection id="galeria" title="Galeria de Mockups" icon={<Images size={16} /> }>
        <MockupGallery images={galleryImages} projectTitle={project.title} />
      </CaseSection>

      <CaseSection id="links" title="Links" icon={<LinkIcon size={16} /> }>
        <ProjectLinks demo={project.links?.demo} repo={project.links?.repo} />
      </CaseSection>

      <CaseSection id="contato" title="CTA Final" icon={<MessageSquare size={16} /> }>
        <p>
          Quer construir algo assim ou levar sua operação para o próximo nível com automação e IA aplicada? Vamos
          conversar.
        </p>
        <a
          href="https://wa.me/5548988644305"
          target="_blank"
          rel="noreferrer"
          className="inline-flex mt-2 text-sm font-medium underline"
        >
          💬 Falar comigo agora
        </a>
      </CaseSection>

      <section className="pt-2">
        <ProjectNavigation
          prev={prev && { slug: prev.slug, title: prev.title }}
          next={next && { slug: next.slug, title: next.title }}
        />
      </section>
        </div>
        <CaseTOC items={toc as any} />
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: 'Projeto não encontrado' }

  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const url = `${base}/projects/${project.slug}`
  const title = `${project.title} — Case`
  const description = project.shortDescription

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      siteName: 'Julio Betoni — Portfólio',
      images: [`${base}/projects/${project.slug}/opengraph-image`],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${base}/projects/${project.slug}/twitter-image`],
    },
  }
}
