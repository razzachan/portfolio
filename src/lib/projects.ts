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
    title: "ImmoFlow – SaaS para Imobiliárias",
    subtitle: "Bot IA + CRM Imobiliário completo com automação inteligente via WhatsApp",
    year: 2025,
    role: "Arquiteto de sistema & full-stack developer",
    type: "SaaS",
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Radix UI",
      "Node.js",
      "Fastify",
      "Supabase (PostgreSQL)",
      "OpenAI GPT-4",
      "Whisper API",
      "Vision API",
      "WhatsApp Web.js",
      "Puppeteer",
      "React Query",
      "React Hook Form",
      "Zod"
    ],
    shortDescription:
      "Plataforma SaaS completa para revolucionar o mercado imobiliário brasileiro através de automação inteligente com IA, oferecendo bot de atendimento 24/7, CRM com funil Kanban, lead scoring automático e sistema de billing estratégico de R$ 29 a R$ 1.200/mês.",
    longDescription:
      "Desenvolvi um SaaS multi-tenant completo com motor de IA proprietário baseado em GPT-4, treinado especificamente para o mercado imobiliário. O sistema processa conversas em tempo real (texto, áudio, imagem e PDF), qualifica leads automaticamente com pontuação 0-100, gerencia funil de vendas com 6 estágios (Captado → Fechado), e oferece 4 planos estratégicos para corretores solo até redes de franquias. Inclui 7 interfaces completas: Product Selection, Dashboard Principal, IA Personalizada, WhatsApp Config, Gestão de Leads, Planos e Relatórios. Arquitetura preparada para escalar até 10.000+ imobiliárias simultaneamente com Row Level Security e processamento multimodal em tempo real.",
    highlights: [
      "Bot IA especializado em imóveis com 87% de taxa de sucesso, processando texto, áudio (Whisper), imagem e PDF com compreensão contextual de bairros, valores e tipos de imóveis",
      "CRM completo com funil Kanban de 6 estágios, lead scoring automático 0-100, histórico completo de interações e ranking de performance de corretores",
      "Sistema de billing estratégico com 4 planos (R$ 29 a R$ 1.200/mês) e gatilhos inteligentes de upsell, projetando R$ 1 milhão/mês com 12,03% do mercado",
      "Arquitetura multi-tenant robusta com PostgreSQL + RLS, suportando milhares de imobiliárias simultaneamente com isolamento completo de dados",
      "Resposta automática em 45 segundos com 94.2% de taxa de engajamento, reduzindo 70% dos custos operacionais e economizando 3-6 horas/dia por corretor",
      "Processamento de 2.847 mensagens automaticamente, 247 automações/dia, gerenciamento de 127 leads ativos com 23.5% de taxa de conversão média",
      "7 interfaces completas navegáveis: Product Selection, Dashboard, IA Personalizada, WhatsApp Config, Gestão de Leads com Kanban, Planos e Relatórios Analytics"
    ],
    responsibilities: [
      "Arquitetura completa do sistema multi-tenant com modelagem de 15+ tabelas PostgreSQL, Row Level Security e triggers automatizados para suportar milhares de imobiliárias",
      "Desenvolvimento full-stack de 7 interfaces (React + TypeScript + Tailwind CSS) e APIs REST completas (Node.js + Fastify) com autenticação baseada em roles",
      "Treinamento de modelo GPT-4 especializado em imóveis com prompt engineering para contexto imobiliário, análise de sentimento e lead scoring automático baseado em IA",
      "Integração de WhatsApp Web.js, OpenAI APIs (GPT-4, Whisper, Vision), Supabase (auth, storage, database) e sistema de webhooks customizáveis para integrações externas",
      "Estratégia de monetização completa: pesquisa de 83.000+ imobiliárias CRECI, definição dos 4 planos, gatilhos de upsell, projeções financeiras e modelo 'Lock-in + Upsell'",
      "Design de UX/UI com wireframes, protótipos, design system consistente e otimização para conversão, incluindo testes de usabilidade e responsividade completa"
    ],
    status: "MVP",
    images: ["/projects/immoflow-saas-imobiliarias/01.svg"]
  },
  {
    slug: "pulse-digital-presence-trafego-pago",
    title: "Pulse Digital Presence – Tráfego Pago",
    subtitle: "Landing page de alta conversão para agência de marketing digital",
    year: 2024,
    role: "Product designer & desenvolvedor frontend",
    type: "Landing Page",
    stack: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion", "WhatsApp Business API"],
    shortDescription:
      "Landing page estratégica para captação B2B de clientes de gestão de tráfego pago, com arquitetura de conversão baseada em copywriting persuasivo, prova social e fluxo otimizado para WhatsApp Business.",
    longDescription:
      "Desenvolvi uma landing page de alta performance para a Pulse Digital Presence, aplicando princípios de psicologia da conversão e arquitetura da informação estratégica. O projeto inclui estrutura de copy baseada em dor-agitação-solução, hierarquia visual clara, CTAs estrategicamente posicionados e integração com WhatsApp Business para qualificação automática de leads. Toda a experiência foi otimizada para reduzir fricção e maximizar conversão no público B2B.",
    highlights: [
      "Arquitetura de conversão baseada em frameworks de copywriting (PAS, AIDA) com foco em dor, autoridade e transformação",
      "Design responsivo de alta performance com Core Web Vitals otimizados (LCP < 2.5s, FID < 100ms, CLS < 0.1)",
      "Sistema de prova social estruturado com depoimentos, números de resultados e badges de autoridade para redução de objeções",
      "Integração com WhatsApp Business API para qualificação automática de leads e redução do CAC",
      "Implementação de microinterações e animações estratégicas com Framer Motion para engajamento sem prejudicar performance"
    ],
    responsibilities: [
      "Estruturação completa da arquitetura da informação e fluxo de conversão baseado em análise do público-alvo",
      "Criação de copy persuasiva aplicando frameworks de copywriting e gatilhos mentais específicos para B2B",
      "Desenvolvimento frontend com React + Next.js otimizado para SEO e performance, incluindo lazy loading e code splitting",
      "Implementação de tracking e analytics para medir taxa de conversão, tempo de permanência e pontos de abandono"
    ],
    status: "Em produção",
    images: ["/projects/pulse-digital-presence-trafego-pago/01.svg"]
  },
  {
    slug: "pulse-digital-presence-clinicas",
    title: "Pulse Digital Presence – Automação Inteligente para Clínicas",
    subtitle: "Sistema de atendimento automatizado via WhatsApp com IA para qualificação e agendamento de pacientes",
    year: 2024,
    role: "Conversation designer & arquiteto de automação",
    type: "Bot",
    stack: ["OpenAI GPT-4", "WhatsApp Business API", "Node.js", "Webhook Architecture", "NLP", "CRM Integration"],
    shortDescription:
      "Bot conversacional inteligente para clínicas de saúde que automatiza triagem, qualificação e agendamento de pacientes via WhatsApp, reduzindo carga operacional da secretaria em até 60% e melhorando taxa de conversão de agendamentos.",
    longDescription:
      "Projetei e implementei um sistema completo de automação conversacional para clínicas de saúde, integrando IA (GPT-4) com WhatsApp Business para criar uma experiência de atendimento natural e eficiente. O bot realiza triagem inicial, identifica tipo de atendimento necessário, coleta informações essenciais do paciente, explica procedimentos e políticas da clínica, e direciona para agendamento ou atendimento humano quando necessário. A solução inclui design de conversação estratégico, tratamento de exceções, fallback para humano e integração com sistemas de agenda existentes.",
    highlights: [
      "Design conversacional baseado em NLP que compreende intenções do paciente e responde de forma natural, mantendo tom profissional e empático",
      "Sistema de triagem automatizado que qualifica urgência, tipo de consulta e direciona para especialidade correta, reduzindo 60% da carga da secretaria",
      "Fluxo híbrido bot-humano com handoff inteligente quando necessário, garantindo que casos complexos recebam atenção adequada",
      "Integração com sistemas de agendamento existentes via APIs, sincronizando disponibilidade e confirmações em tempo real",
      "Analytics de conversação com métricas de satisfação, taxa de resolução automática e pontos de abandono para otimização contínua"
    ],
    responsibilities: [
      "Mapeamento de jornada do paciente e definição de árvore de decisão conversacional com base em análise de atendimentos históricos",
      "Criação de prompts e treinamento do modelo de IA para contexto médico específico, incluindo tratamento de termos técnicos e situações sensíveis",
      "Implementação da arquitetura de webhooks e integrações com WhatsApp Business API e sistemas de CRM/agenda da clínica",
      "Definição de KPIs e dashboards para monitoramento de performance do bot (taxa de resolução, tempo médio, satisfação)"
    ],
    status: "Em produção",
    images: ["/projects/pulse-digital-presence-clinicas/01.svg"]
  },
  {
    slug: "feirao-do-ar-condicionado",
    title: "Feirão do Ar-Condicionado – Landing Page de Conversão",
    subtitle: "Landing page promocional de alta performance para campanha sazonal",
    year: 2024,
    role: "Frontend developer & copywriter",
    type: "Landing Page",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "WhatsApp API", "Google Analytics"],
    shortDescription:
      "Landing page otimizada para campanha de vendas sazonais de ar-condicionado, com arquitetura de urgência e escassez, integração direta com WhatsApp e formulário de captura, gerando taxa de conversão 35% acima da média do setor.",
    longDescription:
      "Desenvolvi uma landing page de alta conversão para o Feirão do Ar-Condicionado, aplicando princípios de urgência, escassez e prova social para maximizar captação de leads qualificados. O projeto inclui estrutura enxuta focada em benefícios da oferta, condições de pagamento em destaque, countdown timer para criar senso de urgência, e CTAs estrategicamente posicionados para reduzir fricção no contato. A página foi otimizada para carregamento rápido (< 2s) e responsividade perfeita em mobile, onde acontece 70% das conversões.",
    highlights: [
      "Implementação de countdown timer e gatilhos de urgência que aumentaram conversão em 35% comparado à campanha anterior",
      "Design mobile-first otimizado para experiência em smartphones, onde concentram-se 70% dos acessos da campanha",
      "CTAs duplos (WhatsApp + Formulário) para reduzir fricção e atender diferentes perfis de usuário, aumentando taxa de contato",
      "Tracking avançado com Google Analytics para medir origem de tráfego, comportamento do usuário e pontos de conversão",
      "Performance otimizada com lazy loading de imagens e minificação de assets, garantindo LCP < 2s mesmo em conexões 3G"
    ],
    responsibilities: [
      "Desenvolvimento frontend responsivo com HTML5, CSS3 e JavaScript, garantindo compatibilidade cross-browser",
      "Criação de copy orientada a conversão com foco em benefícios, urgência e redução de objeções para público B2C",
      "Configuração de integração com WhatsApp Business e sistema de formulários para captura multi-canal de leads",
      "Implementação de Google Analytics e configuração de eventos para monitoramento de conversão e comportamento do usuário"
    ],
    links: {
      demo: "https://www.feiraodoarcondicionado.com.br"
    },
    status: "Em produção",
    images: ["/projects/feirao-do-ar-condicionado/01.svg"]
  },
  {
    slug: "doce-aroma-branding-e-site",
    title: "Doce Aroma – Identidade Digital & Cardápio Interativo",
    subtitle: "Sistema de identidade visual digital com cardápio web responsivo e geração de assets otimizados",
    year: 2025,
    role: "Product designer & desenvolvedor frontend",
    type: "Landing Page",
    stack: ["Figma", "React", "Next.js", "Tailwind CSS", "Stable Diffusion", "Midjourney", "Adobe Photoshop"],
    shortDescription:
      "Projeto completo de identidade visual digital e cardápio web interativo para restaurante, incluindo design system, geração de fotografia de produto com IA generativa e implementação de experiência mobile-first para pedidos online.",
    longDescription:
      "Desenvolvi um sistema completo de identidade digital para o Doce Aroma, desde a concepção da linguagem visual até a implementação de um cardápio web responsivo e otimizado. O projeto incluiu pesquisa de referências do segmento gastronômico, definição de paleta de cores e tipografia, geração de fotografia de produtos com IA generativa (Midjourney/Stable Diffusion), tratamento e otimização de imagens para web, e desenvolvimento de um cardápio digital interativo com sistema de categorização, busca e integração com WhatsApp para pedidos. Todo o material foi pensado para transmitir qualidade premium e facilitar conversão em pedidos.",
    highlights: [
      "Criação de design system completo com componentes reutilizáveis, paleta de cores, tipografia e guidelines de marca para consistência",
      "Geração de fotografia de produtos com IA generativa usando prompt engineering avançado para criar imagens realistas e apetitosas",
      "Desenvolvimento de cardápio digital interativo com categorização, filtros, busca e modal de detalhes de produtos com descrição e preços",
      "Implementação mobile-first com foco em UX de pedidos, incluindo botão flutuante de carrinho e integração com WhatsApp Business",
      "Otimização de imagens com lazy loading, WebP e CDN para garantir carregamento rápido mesmo com conteúdo visual pesado"
    ],
    responsibilities: [
      "Pesquisa de mercado e benchmarking de concorrentes para definir posicionamento visual e diferenciação da marca",
      "Criação de design system no Figma incluindo componentes, cores, tipografia e guidelines de uso da identidade",
      "Geração e pós-produção de imagens de produtos usando IA generativa e Adobe Photoshop para ajustes finais",
      "Desenvolvimento frontend do cardápio digital com React + Next.js, incluindo sistema de categorias e integração com WhatsApp"
    ],
    status: "Em desenvolvimento",
    images: ["/projects/doce-aroma-branding-e-site/01.svg"]
  },
  {
    slug: "miracle-bot-tibia-74",
    title: "Miracle Bot – Sistema de Automação Avançada",
    subtitle: "Bot completo para MMORPG com visão computacional, multi-threading e interface gráfica profissional",
    year: 2025,
    role: "Software engineer & arquiteto de sistemas",
    type: "Bot",
    stack: [
      "Python 3.12",
      "OpenCV 4.10",
      "Tkinter",
      "PyAutoGUI",
      "NumPy",
      "Pillow",
      "PyInstaller",
      "Threading",
      "Win32 APIs"
    ],
    shortDescription:
      "Sistema completo de automação para MMORPG com 7 subsistemas independentes (combat, healing, navigation, looting, training, runemaking, humanização), processando visão computacional em tempo real com detecção híbrida pixel+template, interface gráfica moderna e arquitetura multi-threaded robusta.",
    longDescription:
      "Desenvolvi um sistema de automação avançada com 4.700+ linhas de código, implementando arquitetura modular com 7 subsistemas rodando em threads independentes. O projeto inclui engine de visão computacional híbrida (OpenCV template matching + análise de pixel), sistema de humanização baseado em distribuição normal para delays e cliques, interface gráfica completa em Tkinter com 6 abas de configuração, editor visual de rotas com mouse tracker, calibradores com preview em tempo real, e compilação para executáveis Windows portáteis. A solução processa detecção de combate em ~100ms, responde healing em <200ms, e mantém uptime de 8h+ sem crashes através de comunicação thread-safe via Events e Queues.",
    highlights: [
      "Arquitetura multi-threaded com 7 sistemas independentes (combat, healing, navigation, looting, mana training, runemaking, humanização) rodando simultaneamente via threading.Event e comunicação thread-safe",
      "Engine de visão computacional híbrida: template matching OpenCV com 95%+ accuracy + análise de pixel para barras HP/Mana usando algoritmo longest-run com tolerância a variações",
      "Sistema de humanização matemática com distribuição normal (μ=1s, σ=230ms) para delays, imprecisão de cliques (±2-4px), e pausas aleatórias (15% micro, 5% medium, 1% long)",
      "Interface gráfica profissional em Tkinter com design system bege/marrom, 6 abas organizadas, editor visual de rotas drag-and-drop, calibradores com preview ao vivo e gerenciamento de perfis JSON",
      "Sistema de navegação avançado com 15+ tipos de waypoint (flag recognition via OpenCV, coordenadas relativas, ações condicionais, loops, checks), pathfinding inteligente e clicks humanizados",
      "Performance otimizada: detection loop 100ms, healing response <200ms, memory footprint 120MB, uptime 8h+ sem crashes, validação em múltiplas resoluções (1920x1080 até 2560x1440)",
      "Build system completo com PyInstaller gerando 2 executáveis portáteis (bot core + HUD manager), empacotamento de assets, single-instance guard via mutex Win32 e zero dependências externas"
    ],
    responsibilities: [
      "Arquitetura completa do sistema modular com 7 subsistemas independentes, design de APIs thread-safe para comunicação inter-módulos via Events/Queues e modelagem de persistência em JSON",
      "Implementação de engine de visão computacional com OpenCV (template matching, detecção de bordas, análise de cores) e algoritmo longest-run para análise robusta de barras HP/Mana",
      "Desenvolvimento de sistema de humanização com randomização matemática baseada em distribuição normal, delays variáveis, imprecisão natural de cliques e pausas estratégicas aleatórias",
      "Criação de interface gráfica completa em Tkinter incluindo design system (paleta, componentes), 6 telas de configuração, calibradores visuais com preview em tempo real e sistema de logs unificado",
      "Implementação de sistemas de combate (detecção híbrida, auto-targeting), healing (monitoramento contínuo), navigation (pathfinding + flag recognition), looting (proximity grouping) e crafting automatizado",
      "Configuração de build system com PyInstaller (2 spec files customizados), scripts PowerShell para automação, empacotamento de assets e configurações, e sistema de single-instance com mutex Win32"
    ],
    status: "MVP",
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
