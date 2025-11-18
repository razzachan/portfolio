"use client";
import { motion } from "framer-motion";
import { Wrench, Building2, Stethoscope, Utensils, Gamepad2 } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

type Item = {
  icon: React.ReactNode;
  title: string;
  bullets: string[];
};

const items: Item[] = [
  {
    icon: <Wrench size={18} className="text-foreground/80" />,
    title: "Fix Fogões — EletroFix Hub Pro",
    bullets: [
      "Atendimento via IA + WhatsApp",
      "Corte de erros humanos",
      "Roteamento automático de técnicos",
      "Painel em tempo real",
    ],
  },
  {
    icon: <Building2 size={18} className="text-foreground/80" />,
    title: "ImmoFlow — SaaS imobiliário",
    bullets: [
      "Processos em funis digitais",
      "WhatsApp com IA mais rápido",
      "CRM interno unificado",
    ],
  },
  {
    icon: <Stethoscope size={18} className="text-foreground/80" />,
    title: "Pulse Clínicas",
    bullets: [
      "Pacientes qualificados automaticamente",
      "Secretária 70% menos sobrecarregada",
      "Fluxo humanizado + IA",
    ],
  },
  {
    icon: <Utensils size={18} className="text-foreground/80" />,
    title: "Doce Aroma",
    bullets: [
      "Identidade visual premium",
      "Fotos profissionais para cardápio/site",
      "Storytelling visual consistente",
    ],
  },
  {
    icon: <Gamepad2 size={18} className="text-foreground/80" />,
    title: "Miracle Bot (Tibia)",
    bullets: [
      "Automação precisa por pixel",
      "Presets e HUD estável",
      "Execução discreta",
    ],
  },
];

export default function ResultsSection() {
  return (
    <section>
      <SectionHeader title="Resultados & Impacto" />
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.28, ease: "easeOut", delay: i * 0.03 }}
            className="rounded-xl border border-foreground/10 p-4 glass text-sm text-foreground/85 shadow-soft"
          >
            <div className="flex items-center gap-2 font-medium">
              {it.icon}
              <span>{it.title}</span>
            </div>
            <ul className="mt-2 space-y-1">
              {it.bullets.map((b, bi) => (
                <li key={bi} className="flex gap-2 text-foreground/75">
                  <span className="text-foreground/40">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
