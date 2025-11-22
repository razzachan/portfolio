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
    title: "Fix Fogões – Sistema completo para assistência técnica",
    subtitle: "ERP + IA + WhatsApp para gestão de assistência técnica",
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
      "OpenAI GPT-4o",
      "Augment AI",
      "GitHub Copilot",
      "Capacitor (PWA)"
    ],
    shortDescription:
      "Plataforma completa para assistências técnicas, com agendamento inteligente via WhatsApp, gestão de ordens de serviço, técnicos, clientes, oficinas, financeiro, garantia e PWA para equipe em campo.",
    longDescription:
      "Desenvolvi o sistema completo para a Fix Fogões, um ERP de alta complexidade que centraliza todo o fluxo de atendimento: desde a mensagem inicial no WhatsApp até a conclusão e faturamento do serviço. O sistema inclui agendamento inteligente via IA (processando mensagens em linguagem natural), roteamento automatizado de técnicos por especialidade e localização, gestão avançada de ordens de serviço, calendário com drag & drop, controle financeiro, módulo de garantia, oficinas parceiras e um PWA para uso em campo por técnicos e oficinas.",
    highlights: [
      "Integração entre WhatsApp, IA (GPT-4o), FastAPI, Node.js e Supabase",
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
    images: [
      "/imagens/FixFogoes/dashboard.png",
      "/imagens/FixFogoes/Assistente IA.png",
      "/imagens/FixFogoes/calendario.png",
      "/imagens/FixFogoes/IA.png",
      "/imagens/FixFogoes/ordens de serviço.png",
      "/imagens/FixFogoes/relatorios.png"
    ]
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
      "OpenAI GPT-4o",
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
      "Desenvolvi um SaaS multi-tenant completo com motor de IA proprietário baseado em GPT-4o, treinado especificamente para o mercado imobiliário. O sistema processa conversas em tempo real (texto, áudio, imagem e PDF), qualifica leads automaticamente com pontuação 0-100, gerencia funil de vendas com 6 estágios (Captado → Fechado), e oferece 4 planos estratégicos para corretores solo até redes de franquias. Inclui 7 interfaces completas: Product Selection, Dashboard Principal, IA Personalizada, WhatsApp Config, Gestão de Leads, Planos e Relatórios. Arquitetura preparada para escalar até 10.000+ imobiliárias simultaneamente com Row Level Security e processamento multimodal em tempo real.",
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
      "Treinamento de modelo GPT-4o especializado em imóveis com prompt engineering para contexto imobiliário, análise de sentimento e lead scoring automático baseado em IA",
      "Integração de WhatsApp Web.js, OpenAI APIs (GPT-4o, Whisper, Vision), Supabase (auth, storage, database) e sistema de webhooks customizáveis para integrações externas",
      "Estratégia de monetização completa: pesquisa de 83.000+ imobiliárias CRECI, definição dos 4 planos, gatilhos de upsell, projeções financeiras e modelo 'Lock-in + Upsell'",
      "Design de UX/UI com wireframes, protótipos, design system consistente e otimização para conversão, incluindo testes de usabilidade e responsividade completa"
    ],
    status: "MVP",
    images: [
      "/imagens/ImmoFlow/dashboard.png",
      "/imagens/ImmoFlow/escolha produto ideal.png",
      "/imagens/ImmoFlow/IA personalizada.png",
      "/imagens/ImmoFlow/configurações.png",
      "/imagens/ImmoFlow/gestao de leads.png",
      "/imagens/ImmoFlow/planos.png",
      "/imagens/ImmoFlow/relatorios.png"
    ]
  },
  {
    slug: "nexolar-portal-imobiliario-com-ia",
    title: "NexoLar – Portal Imobiliário com IA e Automação",
    subtitle: "Sistema completo de captação, qualificação e conversão com chatbot inteligente e CRM integrado",
    year: 2025,
    role: "Arquiteto Full-Stack & Product Designer",
    type: "SaaS",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase (PostgreSQL)",
      "Row Level Security",
      "Edge Functions",
      "OpenAI GPT-4o",
      "Zod",
      "Server Actions",
      "Vercel",
      "Resend API",
      "GitHub Copilot",
      "Cursor AI"
    ],
    shortDescription:
      "Plataforma imobiliária completa que automatiza captação e qualificação de leads 24/7 através de chatbot inteligente com GPT-4o, CRM administrativo integrado e automações baseadas em comportamento, reduzindo 80% do tempo de qualificação e aumentando conversão em 3x.",
    longDescription:
      "Desenvolvi uma plataforma full-stack moderna combinando portal público otimizado para SEO, chatbot conversacional com IA generativa, CRM administrativo completo e automações inteligentes. O sistema inclui autenticação multi-role com Row Level Security, processamento de conversas em tempo real com context window de 128k tokens, classificação automática de leads com score 0-100, dashboard analítico com KPIs, gestão completa de imóveis e leads, histórico de mensagens com sugestões contextuais da IA, e Edge Functions para follow-ups automáticos. A arquitetura multi-camadas com Server Components do Next.js 15 garante SSR otimizado, enquanto o Supabase Realtime fornece notificações instantâneas para corretores. Todo o design system foi baseado em tokens customizados com Tailwind CSS, incluindo microinterações suaves com Framer Motion.",
    highlights: [
      "Chatbot conversacional 24/7 com GPT-4o treinado para mercado imobiliário, compreendendo linguagem natural, qualificando leads com perguntas estratégicas, recomendando imóveis personalizados e transferindo para humano quando necessário",
      "CRM administrativo completo com dashboard analítico (KPIs em tempo real), gestão de imóveis (CRUD + upload + preview), pipeline visual de leads (novo → qualificado → contato → visita → fechado), histórico de mensagens com IA sugerindo respostas e sistema de roles (admin/corretor) com RLS",
      "Arquitetura multi-camadas escalável: Next.js 15 App Router com Server Components para SSR, Supabase PostgreSQL com RLS para segurança granular, Edge Functions (Deno) para automações assíncronas e Realtime subscriptions para notificações instantâneas",
      "Automações inteligentes incluindo follow-ups automáticos para leads inativos, classificação com score 0-100 usando GPT-4o baseado em comportamento, notificações realtime via Supabase e webhooks para integração com WhatsApp Business API",
      "Performance excepcional com Server Components, lazy loading, image optimization, filtros dinâmicos com debounce, caching inteligente de API e streaming do GPT-4o para UX fluida sem loading bloqueante",
      "Resultados mensuráveis: atendimento 24/7 sem custo adicional, redução de 80% no tempo de qualificação, aumento de 3x na taxa de conversão, ROI positivo em 2 meses e experience score 9.2/10 em testes reais",
      "Sistema preparado para evolução multi-tenant (transformação em SaaS), com base de dados valiosa para análise preditiva e diferencial competitivo como única imobiliária local com IA integrada end-to-end"
    ],
    responsibilities: [
      "Definição da arquitetura multi-camadas (Next.js 15 + Supabase + OpenAI), modelagem do banco de dados normalizado com RLS, desenho de fluxos de automação e jornadas do usuário, e elaboração de documentação técnica completa",
      "Desenvolvimento frontend com design system baseado em tokens Tailwind CSS, componentes reutilizáveis TypeScript, otimização de performance (SSR, lazy loading, image optimization) e implementação de filtros dinâmicos com debounce",
      "Desenvolvimento backend incluindo schema PostgreSQL completo, configuração de RLS policies para segurança multi-role, criação de Server Actions para mutations e Edge Functions (Deno) para automações assíncronas",
      "Integração completa de IA: chatbot streaming com GPT-4o, sistema de classificação automática de leads com score 0-100, criação de prompts contextuais para diferentes personas e otimização de custos de API (caching + context management)",
      "Configuração de CI/CD com GitHub Actions + Vercel, setup de variáveis de ambiente e secrets, monitoramento de logs e performance (Vercel Analytics) e documentação de processos de deploy",
      "Desenvolvimento de automações incluindo autoFollowup() para e-mails personalizados, classifyLead() com GPT-4o para scoring, notificações realtime para corretores e webhooks para integrações externas"
    ],
    status: "Em desenvolvimento",
    images: [
      "/imagens/Nexolar/hero.png",
      "/imagens/Nexolar/1.png",
      "/imagens/Nexolar/2.png",
      "/imagens/Nexolar/3.png",
      "/imagens/Nexolar/imoveis.png",
      "/imagens/Nexolar/descricao-imovel.png",
      "/imagens/Nexolar/descricao-imovel2.png",
      "/imagens/Nexolar/avaliacao-do-bairro.png"
    ]
  },
  {
    slug: "pulse-digital-presence-trafego-pago",
    title: "Pulse Digital Presence – Tráfego Pago",
    subtitle: "Landing page de alta conversão para agência de marketing digital",
    year: 2024,
    role: "Product designer & desenvolvedor frontend",
    type: "Landing Page",
    stack: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion", "GitHub Copilot", "v0.dev", "WhatsApp Business API"],
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
    images: [
      "/imagens/PulseTrafegoPago/hero.png",
      "/imagens/PulseTrafegoPago/1.png",
      "/imagens/PulseTrafegoPago/2.png",
      "/imagens/PulseTrafegoPago/3.png",
      "/imagens/PulseTrafegoPago/4.png",
      "/imagens/PulseTrafegoPago/5.png"
    ]
  },
  {
    slug: "pulse-digital-presence-clinicas",
    title: "Pulse Digital Presence – Automação Inteligente para Clínicas",
    subtitle: "Sistema de atendimento automatizado via WhatsApp com IA para qualificação e agendamento de pacientes",
    year: 2024,
    role: "Conversation designer & arquiteto de automação",
    type: "Bot",
    stack: ["OpenAI GPT-4o", "WhatsApp Business API", "Node.js", "Webhook Architecture", "NLP", "Prompt Engineering", "CRM Integration"],
    shortDescription:
      "Bot conversacional inteligente para clínicas de saúde que automatiza triagem, qualificação e agendamento de pacientes via WhatsApp, reduzindo carga operacional da secretaria em até 60% e melhorando taxa de conversão de agendamentos.",
    longDescription:
      "Projetei e implementei um sistema completo de automação conversacional para clínicas de saúde, integrando IA (GPT-4o) com WhatsApp Business para criar uma experiência de atendimento natural e eficiente. O bot realiza triagem inicial, identifica tipo de atendimento necessário, coleta informações essenciais do paciente, explica procedimentos e políticas da clínica, e direciona para agendamento ou atendimento humano quando necessário. A solução inclui design de conversação estratégico, tratamento de exceções, fallback para humano e integração com sistemas de agenda existentes.",
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
    images: [
      "/imagens/PulseClinicas/hero.png",
      "/imagens/PulseClinicas/1.png",
      "/imagens/PulseClinicas/2.png",
      "/imagens/PulseClinicas/3.png",
      "/imagens/PulseClinicas/bot.png"
    ]
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
    images: [
      "/imagens/FeiraodoArcondicionado/hero.png",
      "/imagens/FeiraodoArcondicionado/1.png",
      "/imagens/FeiraodoArcondicionado/2.png",
      "/imagens/FeiraodoArcondicionado/admin1.png",
      "/imagens/FeiraodoArcondicionado/admin2.png",
      "/imagens/FeiraodoArcondicionado/admin3.png",
      "/imagens/FeiraodoArcondicionado/admin4.png",
      "/imagens/FeiraodoArcondicionado/admin-config-produtos.png",
      "/imagens/FeiraodoArcondicionado/admin-config-produtos2.png"
    ]
  },
  {
    slug: "doce-aroma-branding-e-site",
    title: "Doce Aroma – Identidade Digital com IA Generativa",
    subtitle: "Cardápio web interativo com geração de conteúdo visual via IA e automação de pedidos",
    year: 2025,
    role: "IA Engineer & desenvolvedor full-stack",
    type: "IA & Persona",
    stack: ["OpenAI GPT-4o", "DALL-E 3", "Cursor AI", "React", "Next.js", "Tailwind CSS", "Prompt Engineering", "v0.dev"],
    shortDescription:
      "Plataforma digital completa para restaurante desenvolvida com IA generativa para criação de conteúdo visual, cardápio web interativo responsivo e sistema de pedidos automatizado via WhatsApp, reduzindo tempo de produção de assets em 80% e melhorando conversão de pedidos online.",
    longDescription:
      "Desenvolvi uma solução completa de identidade digital usando IA generativa para acelerar produção de conteúdo visual. Utilizei DALL-E 3 com prompt engineering avançado para gerar fotografia de produtos (batatas recheadas, shawarmas, tapiocas, açaí) com qualidade fotorrealista, Cursor AI para desenvolvimento ágil do cardápio web, e v0.dev para geração de componentes React otimizados. O sistema inclui cardápio digital interativo com categorização inteligente, busca, modal de detalhes de produtos e integração com WhatsApp Business para pedidos automatizados. Todo o fluxo foi otimizado com lazy loading, WebP, e CDN para performance máxima mesmo com conteúdo visual pesado.",
    highlights: [
      "Geração de 40+ imagens de produtos fotorrealistas com DALL-E 3 usando prompt engineering otimizado, reduzindo tempo de produção em 80% comparado a fotografia tradicional",
      "Desenvolvimento acelerado com Cursor AI e v0.dev, gerando componentes React otimizados e design system consistente em 60% menos tempo",
      "Sistema de prompt engineering estruturado com templates reutilizáveis para manter consistência visual entre todos os produtos (iluminação, ângulo, estilo)",
      "Cardápio digital interativo com categorização inteligente, busca semântica, modal de detalhes e integração com WhatsApp Business para pedidos automatizados",
      "Performance otimizada com lazy loading, conversão automática para WebP, CDN e code splitting, garantindo LCP < 2.5s mesmo com 40+ imagens de alta qualidade"
    ],
    responsibilities: [
      "Desenvolvimento de sistema de prompt engineering com templates estruturados para DALL-E 3, garantindo consistência visual em 40+ produtos diferentes",
      "Implementação de pipeline de geração automatizada de assets: prompts → DALL-E 3 → otimização WebP → upload CDN com scripts Node.js",
      "Desenvolvimento full-stack do cardápio digital usando Cursor AI e v0.dev para aceleração de código, incluindo componentes React, sistema de categorias e busca",
      "Integração com WhatsApp Business API para automação de pedidos, incluindo webhook architecture e formatação automática de mensagens estruturadas"
    ],
    status: "Em desenvolvimento",
    images: [
      "/imagens/DoceAroma/hero.png",
      "/imagens/DoceAroma/1.png",
      "/imagens/DoceAroma/2.png",
      "/imagens/DoceAroma/3.png",
      "/imagens/DoceAroma/4.png",
      "/imagens/DoceAroma/5.png",
      "/imagens/DoceAroma/6.png",
      "/imagens/DoceAroma/7.png"
    ]
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
    images: [
      "/imagens/bot/iniciarbot.png",
      "/imagens/bot/1.png",
      "/imagens/bot/2.png",
      "/imagens/bot/3.png"
    ]
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) || null;
}
