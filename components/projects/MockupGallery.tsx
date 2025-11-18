import ProgressiveImage from '@/components/ui/ProgressiveImage'
import MockupPlaceholder from './MockupPlaceholder'

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
  const defaults: Img[] = [
    { src: '/mockups/mock-1.svg', alt: 'Mockup 1' },
    { src: '/mockups/mock-2.svg', alt: 'Mockup 2' },
    { src: '/mockups/mock-3.svg', alt: 'Mockup 3' },
    { src: '/mockups/mock-4.svg', alt: 'Mockup 4' },
  ]
  const rawList = images && images.length > 0 ? images : defaults
  // Normalize to Img[] format
  const list: Img[] = rawList.map(img => typeof img === 'string' ? { src: img } : img)

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {list.map((img, i) => (
        <div key={i} className="group relative overflow-hidden rounded-xl border border-foreground/10 glass">
          <div className="relative aspect-video">
            <ProgressiveImage
              src={img.src}
              alt={img.alt || deriveAlt(img.src, i, projectTitle)}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              priority={i < 2}
            />
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
  )
}
