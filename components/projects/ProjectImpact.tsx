import { Sparkles } from 'lucide-react'

// Simple mapping of impact statements per project slug (can be expanded)
const impactMap: Record<string, string[]> = {
  'eletrofix-hub-pro-fix-fogoes': [
    'Atendimento automatizado via IA + WhatsApp',
    'Roteamento inteligente reduz tempo de resposta',
    'Painel em tempo real organiza operação',
  ],
  'immoflow-saas-imobiliarias': [
    'Funis digitais substituem processos manuais',
    'Bots aceleram qualificação de leads',
    'Base preparada para modelo SaaS multi-tenant',
  ],
  'pulse-digital-presence-trafego-pago': [
    'Copy otimizada para conversão',
    'CTA direto gera leads qualificados',
  ],
  'miracle-bot-tibia-74': [
    'Automação avançada de tarefas repetitivas',
    'Calibração precisa via OpenCV + PyAutoGUI',
  ],
}

export default function ProjectImpact({ slug }: { slug: string }) {
  const items = impactMap[slug] || []
  if (!items.length) return null
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((it, i) => (
        <div key={i} className="flex items-start gap-3 rounded-xl border border-foreground/10 p-4 glass">
          <Sparkles size={18} className="mt-0.5 text-foreground/80" />
          <p className="text-sm text-foreground/75">{it}</p>
        </div>
      ))}
    </div>
  )
}
