export type ProjectType = "SaaS" | "Bot" | "Landing Page" | "IA & Persona" | "Outro";

export type ProjectStatus = "Em produção" | "MVP" | "Em desenvolvimento" | "Conceito";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: number;
  role: string;
  type: ProjectType;
  stack: string[];
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  responsibilities: string[];
  links?: {
    demo?: string;
    repo?: string;
  };
  status?: ProjectStatus;
  images?: string[];
};

export const projects: Project[] = [
  {
    slug: "eletrofix-hub-pro-fix-fogoes",
    title: "EletroFix Hub Pro – Sistema completo para assistência técnica",
    subtitle: "ERP + IA + WhatsApp para gestão de assistência técnica (Fix Fogões)",
    year: 2024,
    role: "Full-stack developer & arquiteto de sistema",
    type: "SaaS",
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "FastAPI",
      "Node.js",
      "Express",
      "Supabase (PostgreSQL)",
      "Railway",
      "OpenAI GPT-4",
      "Capacitor (PWA)"
    ],
    shortDescription:
      "Plataforma completa para assistências técnicas, com agendamento inteligente via WhatsApp, gestão de ordens de serviço, técnicos, clientes, oficinas, financeiro, garantia e PWA para equipe em campo.",
    longDescription:
      "Desenvolvi o EletroFix Hub Pro, um sistema full-stack de alta complexidade para a Fix Fogões, que centraliza todo o fluxo de atendimento: desde a mensagem inicial no WhatsApp até a conclusão e faturamento do serviço. O sistema inclui agendamento inteligente via IA (processando mensagens em linguagem natural), roteamento automatizado de técnicos por especialidade e localização, gestão avançada de ordens de serviço, calendário com drag & drop, controle financeiro, módulo de garantia, oficinas parceiras e um PWA para uso em campo por técnicos e oficinas.",
    highlights: [
      "Integração entre WhatsApp, IA (GPT-4), FastAPI, Node.js e Supabase",
      "Sistema de agendamento inteligente que interpreta mensagens e gera pré-agendamentos estruturados",
      "Roteamento automático de técnicos com base em distância, peso de prioridade, carga de trabalho e especialidade",
      "Gestão completa de ordens de serviço, incluindo fotos, histórico de valores e tipos de atendimento",
      "Módulo de garantia inteligente que cria ordens vinculadas à OS original sem cobrança",
      "Dashboard em tempo real com Supabase Realtime e React Query",
      "PWA para Android com Capacitor, incluindo câmera, geolocalização e funcionamento offline básico"
    ],
    responsibilities: [
      "Definição da arquitetura do sistema (frontend, backend, banco e integrações)",
      "Implementação do frontend em React + TypeScript com design system moderno",
      "Criação do middleware em FastAPI para orquestrar IA, WhatsApp e banco de dados",
      "Modelagem do banco Supabase (tabelas, relacionamentos, RLS e funções)",
      "Desenvolvimento do sistema de agendamento inteligente e roteamento de técnicos",
      "Configuração de deploy em Railway, Supabase e Vercel",
      "Implementação de testes automatizados para APIs e fluxos críticos"
    ],
    links: {},
    status: "Em produção",
    images: ["/projects/eletrofix-hub-pro-fix-fogoes/01.svg"]
  },
  {
    slug: "immoflow-saas-imobiliarias",
    title: "ImmoFlow – SaaS para imobiliárias e corretores",
    subtitle: "Sistema de automação de atendimento via WhatsApp, CRM, funis e billing",
    year: 2025,
    role: "Idealizador & full-stack developer",
    type: "SaaS",
    stack: [
      "React",
      "Node.js",
      "TypeScript",
      "Supabase ou PostgreSQL",
      "WhatsApp API",
      "OpenAI"
    ],
    shortDescription:
      "Plataforma SaaS focada em imobiliárias e corretores, com bots de WhatsApp, CRM, funis de atendimento e sistema de billing baseado em planos e uso.",
    longDescription:
      "O ImmoFlow é um SaaS multi-tenant desenhado para imobiliárias e corretores, permitindo configurar bots de atendimento no WhatsApp, gerenciar contatos, funis, imóveis e propostas em um CRM integrado, além de controlar billing e planos de assinatura. O sistema é pensado para ser plug-and-play, com API aberta e integrações com ferramentas externas.",
    highlights: [
      "Arquitetura SaaS multi-tenant",
      "Bots de atendimento configuráveis para WhatsApp",
      "CRM interno com funis de venda para imóveis",
      "Modelo de monetização baseado em planos e uso",
      "Painel administrativo para gestão de clientes da plataforma"
    ],
    responsibilities: [
      "Definição de arquitetura multi-tenant e fluxos de onboarding",
      "Modelagem do banco para suportar múltiplas imobiliárias",
      "Desenho dos fluxos dos bots de WhatsApp focados em captação e qualificação de leads"
    ],
    status: "Em desenvolvimento",
    images: ["/projects/immoflow-saas-imobiliarias/01.svg"]
  },
  {
    slug: "pulse-digital-presence-trafego-pago",
    title: "Pulse Digital Presence – Landing Page para venda de tráfego pago",
    subtitle: "Site voltado para captação de clientes de gestão de tráfego",
    year: 2024,
    role: "Copywriter, UX e implementação",
    type: "Landing Page",
    stack: ["HTML", "CSS", "Landing builder (ex: Lovable)", "WhatsApp"],
    shortDescription:
      "Landing page focada em conversão para venda de serviços de tráfego pago, com foco em autoridade, prova social e direcionamento para WhatsApp.",
    longDescription:
      "Estruturei e implementei uma landing page para a Pulse Digital Presence com foco na venda de gestão de tráfego pago. A página é orientada a conversão, utilizando gatilhos de autoridade, prova social, benefícios claros e CTA direto para WhatsApp, servindo como topo de funil para qualificação dos leads.",
    highlights: [
      "Copy orientada a dor, desejo e solução",
      "Estrutura de página otimizada para conversão",
      "Integração direta com WhatsApp para fechamento"
    ],
    responsibilities: [
      "Criação da copy completa da página",
      "Definição da estrutura (seções, hierarquia de informação)",
      "Configuração de CTAs e fluxo de contato via WhatsApp"
    ],
    status: "Em produção",
    images: ["/projects/pulse-digital-presence-trafego-pago/01.svg"]
  },
  {
    slug: "pulse-digital-presence-clinicas",
    title: "Pulse Digital Presence – IA para clínicas de saúde",
    subtitle: "Bots de WhatsApp para agendamento e pré-atendimento em clínicas",
    year: 2024,
    role: "Arquitetura de fluxo, copy e configuração de bot",
    type: "SaaS",
    stack: ["Clientechat", "WhatsApp", "OpenAI", "Landing Page"],
    shortDescription:
      "Fluxo completo de atendimento via WhatsApp para clínicas, com bot de IA capaz de qualificar pacientes, entender demandas e direcionar para agendamento.",
    longDescription:
      "Desenvolvi o conceito e a implementação dos fluxos de IA da Pulse Digital Presence para clínicas de saúde. O bot identifica o tipo de atendimento, coleta dados essenciais (nome, contato, tipo de consulta), explica o funcionamento da clínica e direciona para agendamento, reduzindo carga da secretária e organizando o funil de pacientes.",
    highlights: [
      "Fluxo conversacional otimizado para atendimento humano + bot",
      "Redução do trabalho manual de secretárias",
      "Integração com sistemas de agenda/CRM da clínica quando disponível"
    ],
    responsibilities: [
      "Mapeamento das dores das clínicas e definição do fluxo de atendimento",
      "Escrita da copy conversacional do bot",
      "Configuração no Clientechat / plataforma de bot"
    ],
    status: "Em produção",
    images: ["/projects/pulse-digital-presence-clinicas/01.svg"]
  },
  {
    slug: "feirao-do-ar-condicionado",
    title: "Feirão do Ar-Condicionado – Landing page promocional",
    subtitle: "Landing page para campanha de vendas de ar-condicionado",
    year: 2024,
    role: "Copy, layout e implementação",
    type: "Landing Page",
    stack: ["Lovable", "HTML/CSS", "Formulário/WhatsApp"],
    shortDescription:
      "Landing page de campanha focada em ofertas de ar-condicionado, com destaque para urgência, promoções e contato rápido.",
    longDescription:
      "Criação de uma landing page promocional para o Feirão do Ar-Condicionado, com foco em destacar preço, condições especiais e urgência da campanha. Estrutura leve, direta e orientada à conversão para orçamento imediato.",
    highlights: [
      "Layout focado em destacar oferta e benefícios",
      "Seções enxutas com CTA forte",
      "Integração com WhatsApp e/ou formulário de orçamento"
    ],
    responsibilities: [
      "Definição da estrutura da página",
      "Criação da copy completa",
      "Configuração no construtor de landing page"
    ],
    links: {
      demo: "https://www.feiraodoarcondicionado.com.br"
    },
    status: "Em produção",
    images: ["/projects/feirao-do-ar-condicionado/01.svg"]
  },
  {
    slug: "doce-aroma-branding-e-site",
    title: "Doce Aroma – Branding, cardápio visual e presença digital",
    subtitle: "Identidade visual, fotos de produtos e material para site/cardápio",
    year: 2025,
    role: "Direção criativa e especificação de assets",
    type: "Landing Page",
    stack: ["Direção de arte", "IA para imagens", "Web builder"],
    shortDescription:
      "Concepção visual e briefing completo para site e cardápio digital da marca Doce Aroma, incluindo fotos realistas de produtos e background hero.",
    longDescription:
      "Desenvolvi a linha visual e briefing de imagens para o Doce Aroma, definindo um estilo fotográfico realista para batatas recheadas, shawarmas, tapiocas, açaí, além de uma imagem de background hero elegante para o site. Todo o material foi pensado para transmitir qualidade, apetite e identidade marcante da marca.",
    highlights: [
      "Direção de arte das imagens de produtos",
      "Conceito de background hero para o site",
      "Alinhamento visual entre cardápio e presença digital"
    ],
    responsibilities: [
      "Definição da identidade e referências visuais",
      "Criação de prompts e direcionamento para geração de imagens",
      "Organização do material para uso em site e cardápio"
    ],
    status: "Em desenvolvimento",
    images: ["/projects/doce-aroma-branding-e-site/01.svg"]
  },
  {
    slug: "miracle-bot-tibia-74",
    title: "Miracle Bot – Automação avançada para Tibia 7.4 (Miracle)",
    subtitle: "Runemaker + Cavebot com HUD em Tkinter, calibração avançada e build em .exe",
    year: 2025,
    role: "Dev Python & arquiteto da automação",
    type: "Bot",
    stack: [
      "Python",
      "Tkinter",
      "PyAutoGUI",
      "OpenCV",
      "PyInstaller"
    ],
    shortDescription:
      "Bot avançado para Tibia OT (Miracle 7.4), com interface gráfica completa, runemaker, cavebot, calibração por pixel e múltiplos perfis.",
    longDescription:
      "Desenvolvi um bot completo em Python para o servidor Miracle 7.4, integrando runemaker e cavebot em uma HUD moderna construída em Tkinter. O sistema inclui calibração detalhada por pixel (battle, mana, monster, slots), mouse tracker visual, presets salvos em JSON, execução em background-safe e compilação para .exe com PyInstaller.",
    highlights: [
      "HUD em Tkinter com tema claro/escuro",
      "Runemaker e cavebot independentes e configuráveis via GUI",
      "Calibração avançada de cores e regiões de tela",
      "Sistema de perfis e presets em JSON",
      "Build em .exe para uso fácil em Windows"
    ],
    responsibilities: [
      "Implementação da lógica de automação (ataque, mana, comida, flags)",
      "Desenvolvimento da interface gráfica com Tkinter",
      "Integração com OpenCV e PyAutoGUI para detecção de pixel e telas",
      "Configuração de empacotamento com PyInstaller"
    ],
    status: "Em desenvolvimento",
    images: ["/projects/miracle-bot-tibia-74/01.svg"]
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) || null;
}
