"use client";
import MockupPlaceholder from './MockupPlaceholder'
import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

type Img = { src: string; alt?: string }

function toTitleCase(s: string) {
  return s
    .toLowerCase()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

function deriveAlt(src: string, i: number, projectTitle?: string) {
  const path = src.split('?')[0]
  const file = path.split('/').pop() || ''
  const base = file.replace(/\.[a-zA-Z0-9]+$/, '')
  const cleaned = base.replace(/^\d+[-_\s]?/, '').replace(/[-_]+/g, ' ').trim()
  const label = cleaned ? toTitleCase(cleaned) : `Tela ${i + 1}`
  return projectTitle ? `${projectTitle} — ${label}` : label
}

export default function MockupGallery({ images, projectTitle }: { images?: (Img | string)[]; projectTitle?: string }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  
  const defaults: Img[] = [
    { src: '/mockups/mock-1.svg', alt: 'Mockup 1' },
    { src: '/mockups/mock-2.svg', alt: 'Mockup 2' },
    { src: '/mockups/mock-3.svg', alt: 'Mockup 3' },
    { src: '/mockups/mock-4.svg', alt: 'Mockup 4' },
  ]
  const rawList = images && images.length > 0 ? images : defaults
  // Normalize to Img[] format
  const list: Img[] = rawList.map(img => typeof img === 'string' ? { src: img } : img)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const goToPrev = () => setLightboxIndex((prev) => (prev === 0 ? list.length - 1 : prev! - 1))
  const goToNext = () => setLightboxIndex((prev) => (prev === list.length - 1 ? 0 : prev! + 1))

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goToPrev()
      if (e.key === 'ArrowRight') goToNext()
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex])

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {list.map((img, i) => (
          <div 
            key={i} 
            className="group relative overflow-hidden rounded-xl border border-foreground/10 glass cursor-pointer"
            onClick={() => openLightbox(i)}
          >
            <div className="relative aspect-video bg-foreground/5">
              <img
                src={img.src}
                alt={img.alt || deriveAlt(img.src, i, projectTitle)}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                loading={i < 2 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-sm font-medium text-white bg-black/50 px-3 py-1.5 rounded-lg">
                  Clique para ampliar
                </span>
              </div>
            </div>
          </div>
        ))}
        {list.length === 0 && (
          <>
            <MockupPlaceholder label="Tela 1" />
            <MockupPlaceholder label="Tela 2" />
            <MockupPlaceholder label="Tela 3" />
            <MockupPlaceholder label="Tela 4" />
          </>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Fechar"
          >
            <X size={24} className="text-white" />
          </button>

          {/* Previous button */}
          {list.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              className="absolute left-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={32} className="text-white" />
            </button>
          )}

          {/* Next button */}
          {list.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={32} className="text-white" />
            </button>
          )}

          {/* Image */}
          <div className="max-w-7xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={list[lightboxIndex].src}
              alt={list[lightboxIndex].alt || deriveAlt(list[lightboxIndex].src, lightboxIndex, projectTitle)}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <p className="text-center text-white/70 mt-4 text-sm">
              {list[lightboxIndex].alt || deriveAlt(list[lightboxIndex].src, lightboxIndex, projectTitle)}
              {list.length > 1 && ` • ${lightboxIndex + 1} de ${list.length}`}
            </p>
          </div>

          {/* Keyboard hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs">
            {list.length > 1 ? 'Use as setas ← → ou clique nos botões para navegar • ESC para fechar' : 'ESC ou clique fora para fechar'}
          </div>
        </div>
      )}
    </>
  )
}
