
import { AdaptiveProjectTemplate } from "@/types/climate";

export const financasClimaticasProjects: AdaptiveProjectTemplate[] = [
  // A. Produtos Financeiros Verdes e Inclusivos (1-100)
  {
    id: "fc-001",
    name: "Microcrédito para agricultores climaticamente resilientes",
    sector: "Finanças Climáticas",
    category: "Produtos Financeiros Verdes e Inclusivos",
    description: "Linha de microcrédito específica para pequenos produtores que implementem práticas agrícolas resilientes ao clima, com juros subsidiados e carência flexível.",
    typicalInvestment: { min: 50000, max: 500000 },
    expectedBenefits: {
      first: ["Redução de perdas agrícolas por eventos climáticos", "Proteção da renda familiar rural", "Menor vulnerabilidade a secas e enchentes"],
      second: ["Aumento da produtividade agrícola", "Geração de empregos no setor rural", "Fortalecimento da economia local"],
      third: ["Melhoria da segurança alimentar", "Inclusão financeira de pequenos produtores", "Fortalecimento da agricultura familiar"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 35,
    economicMultiplier: 2.8,
    socialImpact: 4.2
  },
  {
    id: "fc-002",
    name: "Seguro paramétrico contra secas prolongadas",
    sector: "Finanças Climáticas",
    category: "Produtos Financeiros Verdes e Inclusivos",
    description: "Produto de seguro baseado em índices climáticos que garante pagamentos automáticos quando secas ultrapassam limites predefinidos.",
    typicalInvestment: { min: 100000, max: 2000000 },
    expectedBenefits: {
      first: ["Cobertura automática em eventos de seca", "Redução de tempo para indenização", "Proteção contra perdas catastróficas"],
      second: ["Estabilização da renda agrícola", "Manutenção de investimentos produtivos", "Continuidade das atividades econômicas"],
      third: ["Proteção de comunidades vulneráveis", "Redução da migração forçada", "Manutenção da coesão social rural"]
    },
    implementationTime: { min: 12, max: 24 },
    riskReduction: 45,
    economicMultiplier: 3.2,
    socialImpact: 4.0
  },
  {
    id: "fc-003",
    name: "Fundos garantidores para projetos de adaptação local",
    sector: "Finanças Climáticas",
    category: "Produtos Financeiros Verdes e Inclusivos",
    description: "Fundo que oferece garantias para empréstimos destinados a projetos comunitários de adaptação climática, reduzindo barreiras de acesso ao crédito.",
    typicalInvestment: { min: 500000, max: 5000000 },
    expectedBenefits: {
      first: ["Redução de riscos creditícios", "Facilitação do acesso ao financiamento", "Proteção contra inadimplência"],
      second: ["Ampliação do crédito para adaptação", "Multiplicação de investimentos adaptativos", "Fortalecimento do mercado de crédito verde"],
      third: ["Democratização do acesso a financiamento", "Fortalecimento de organizações comunitárias", "Promoção da participação cidadã"]
    },
    implementationTime: { min: 8, max: 16 },
    riskReduction: 25,
    economicMultiplier: 4.5,
    socialImpact: 3.8
  },
  {
    id: "fc-004",
    name: "Linhas de crédito com juros reduzidos para infraestrutura resiliente",
    sector: "Finanças Climáticas",
    category: "Produtos Financeiros Verdes e Inclusivos",
    description: "Programa de financiamento com taxas de juros subsidiadas para projetos de infraestrutura adaptada às mudanças climáticas.",
    typicalInvestment: { min: 1000000, max: 50000000 },
    expectedBenefits: {
      first: ["Redução de custos de financiamento", "Viabilização de projetos adaptativos", "Proteção contra riscos climáticos"],
      second: ["Crescimento do setor de infraestrutura resiliente", "Criação de empregos especializados", "Atração de investimentos privados"],
      third: ["Melhoria da qualidade de vida urbana", "Redução de desigualdades territoriais", "Fortalecimento da resiliência comunitária"]
    },
    implementationTime: { min: 18, max: 36 },
    riskReduction: 40,
    economicMultiplier: 3.5,
    socialImpact: 4.1
  },
  {
    id: "fc-005",
    name: "Produtos bancários baseados em desempenho climático",
    sector: "Finanças Climáticas",
    category: "Produtos Financeiros Verdes e Inclusivos",
    description: "Contas e produtos bancários que oferecem benefícios (juros, tarifas, limites) baseados no desempenho ambiental do cliente.",
    typicalInvestment: { min: 200000, max: 1000000 },
    expectedBenefits: {
      first: ["Incentivo a práticas sustentáveis", "Redução de pegada de carbono", "Proteção contra riscos ambientais"],
      second: ["Crescimento do mercado de produtos verdes", "Diferenciação competitiva bancária", "Atração de clientes conscientes"],
      third: ["Educação financeira ambiental", "Mudança de comportamento de consumo", "Fortalecimento da consciência climática"]
    },
    implementationTime: { min: 6, max: 12 },
    riskReduction: 15,
    economicMultiplier: 2.3,
    socialImpact: 3.5
  },

  // B. Mecanismos de Financiamento Público e PPPs (101-200)
  {
    id: "fc-101",
    name: "Orçamento participativo climático municipal",
    sector: "Finanças Climáticas",
    category: "Mecanismos de Financiamento Público e PPPs",
    description: "Processo participativo onde cidadãos decidem sobre alocação de recursos orçamentários para projetos de adaptação climática local.",
    typicalInvestment: { min: 100000, max: 10000000 },
    expectedBenefits: {
      first: ["Redução de vulnerabilidades locais", "Priorização de riscos pela comunidade", "Proteção de áreas críticas"],
      second: ["Otimização do gasto público", "Eficiência na alocação de recursos", "Multiplicação de benefícios locais"],
      third: ["Fortalecimento da democracia participativa", "Empoderamento comunitário", "Transparência na gestão pública"]
    },
    implementationTime: { min: 12, max: 24 },
    riskReduction: 30,
    economicMultiplier: 3.8,
    socialImpact: 4.5
  },
  {
    id: "fc-102",
    name: "Criação de fundos soberanos de adaptação",
    sector: "Finanças Climáticas",
    category: "Mecanismos de Financiamento Público e PPPs",
    description: "Estabelecimento de fundos governamentais de longo prazo dedicados exclusivamente ao financiamento de projetos de adaptação climática.",
    typicalInvestment: { min: 50000000, max: 500000000 },
    expectedBenefits: {
      first: ["Garantia de recursos para emergências", "Redução de riscos sistêmicos", "Proteção de infraestrutura crítica"],
      second: ["Estabilidade de financiamento de longo prazo", "Alavancagem de recursos privados", "Crescimento do mercado de adaptação"],
      third: ["Proteção de gerações futuras", "Redução de desigualdades regionais", "Fortalecimento institutional"]
    },
    implementationTime: { min: 24, max: 48 },
    riskReduction: 50,
    economicMultiplier: 4.2,
    socialImpact: 4.0
  },
  {
    id: "fc-103",
    name: "Parcerias público-privadas para infraestrutura resiliente",
    sector: "Finanças Climáticas",
    category: "Mecanismos de Financiamento Público e PPPs",
    description: "Modelo de contratação que combina recursos públicos e privados para desenvolver infraestrutura adaptada às mudanças climáticas.",
    typicalInvestment: { min: 10000000, max: 200000000 },
    expectedBenefits: {
      first: ["Redução de riscos de infraestrutura", "Melhoria da resiliência urbana", "Proteção de serviços essenciais"],
      second: ["Otimização de recursos públicos", "Atração de investimento privado", "Inovação tecnológica"],
      third: ["Melhoria da qualidade de serviços públicos", "Geração de empregos qualificados", "Fortalecimento da governança"]
    },
    implementationTime: { min: 24, max: 60 },
    riskReduction: 45,
    economicMultiplier: 3.9,
    socialImpact: 3.7
  },

  // C. Captação Internacional e Finanças Globais (201-250)
  {
    id: "fc-201",
    name: "Projetos financiados pelo Green Climate Fund (GCF)",
    sector: "Finanças Climáticas",
    category: "Captação Internacional e Finanças Globais",
    description: "Desenvolvimento e submissão de projetos para captação de recursos do Fundo Verde para o Clima das Nações Unidas.",
    typicalInvestment: { min: 5000000, max: 100000000 },
    expectedBenefits: {
      first: ["Acesso a financiamento internacional", "Redução de vulnerabilidades climáticas", "Proteção de populações em risco"],
      second: ["Multiplicação de recursos nacionais", "Transferência de tecnologia", "Capacitação institutional"],
      third: ["Melhoria da qualidade de vida", "Redução da pobreza", "Fortalecimento da cooperação internacional"]
    },
    implementationTime: { min: 18, max: 48 },
    riskReduction: 55,
    economicMultiplier: 5.2,
    socialImpact: 4.3
  },
  {
    id: "fc-202",
    name: "Propostas para o Fundo de Adaptação da ONU",
    sector: "Finanças Climáticas",
    category: "Captação Internacional e Finanças Globais",
    description: "Elaboração de propostas técnicas para acessar recursos do Fundo de Adaptação para projetos concretos de adaptação climática.",
    typicalInvestment: { min: 1000000, max: 20000000 },
    expectedBenefits: {
      first: ["Financiamento direto para adaptação", "Redução de vulnerabilidades específicas", "Proteção de comunidades vulneráveis"],
      second: ["Fortalecimento de capacidades locais", "Geração de conhecimento aplicado", "Criação de empregos verdes"],
      third: ["Empoderamento de comunidades locais", "Melhoria da governança climática", "Promoção da equidade climática"]
    },
    implementationTime: { min: 12, max: 36 },
    riskReduction: 40,
    economicMultiplier: 4.0,
    socialImpact: 4.4
  },

  // D. Transparência, Monitoramento e Taxonomia (251-300)
  {
    id: "fc-251",
    name: "Desenvolvimento de taxonomia nacional para finanças verdes",
    sector: "Finanças Climáticas",
    category: "Transparência, Monitoramento e Taxonomia",
    description: "Criação de sistema de classificação padronizado para definir e categorizar investimentos e atividades sustentáveis no país.",
    typicalInvestment: { min: 500000, max: 2000000 },
    expectedBenefits: {
      first: ["Redução de riscos de greenwashing", "Padronização de critérios verdes", "Proteção de investidores"],
      second: ["Crescimento do mercado de finanças verdes", "Atração de investimentos ESG", "Competitividade internacional"],
      third: ["Transparência nas finanças sustentáveis", "Educação de investidores", "Fortalecimento da confiança no mercado"]
    },
    implementationTime: { min: 18, max: 30 },
    riskReduction: 20,
    economicMultiplier: 3.5,
    socialImpact: 3.2
  },
  {
    id: "fc-252",
    name: "Ferramentas de rastreabilidade de gastos climáticos",
    sector: "Finanças Climáticas",
    category: "Transparência, Monitoramento e Taxonomia",
    description: "Sistema digital para monitoramento e rastreamento em tempo real de recursos públicos destinados a ações climáticas.",
    typicalInvestment: { min: 200000, max: 1000000 },
    expectedBenefits: {
      first: ["Redução de desvios de recursos", "Maior controle de gastos", "Proteção contra má gestão"],
      second: ["Otimização do gasto público", "Melhoria da eficiência orçamentária", "Atração de recursos adicionais"],
      third: ["Transparência na gestão pública", "Fortalecimento da accountability", "Participação cidadã no controle"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 25,
    economicMultiplier: 2.8,
    socialImpact: 3.8
  },

  // Additional representative projects to reach significant coverage across all categories
  {
    id: "fc-050",
    name: "Microseguro climático para comunidades ribeirinhas",
    sector: "Finanças Climáticas", 
    category: "Produtos Financeiros Verdes e Inclusivos",
    description: "Produto de seguro de baixo custo para proteção de famílias ribeirinhas contra enchentes e outros riscos climáticos.",
    typicalInvestment: { min: 100000, max: 800000 },
    expectedBenefits: {
      first: ["Proteção contra perdas por enchentes", "Cobertura de bens essenciais", "Redução de vulnerabilidade familiar"],
      second: ["Estabilização da renda familiar", "Manutenção de atividades produtivas", "Fortalecimento da economia local"],
      third: ["Inclusão financeira de populações isoladas", "Redução da pobreza rural", "Fortalecimento da resiliência comunitária"]
    },
    implementationTime: { min: 8, max: 18 },
    riskReduction: 35,
    economicMultiplier: 2.9,
    socialImpact: 4.3
  },
  {
    id: "fc-150",
    name: "Fundo federal para prevenção de riscos urbanos",
    sector: "Finanças Climáticas",
    category: "Mecanismos de Financiamento Público e PPPs", 
    description: "Fundo nacional dedicado ao financiamento de projetos preventivos de redução de riscos climáticos em áreas urbanas.",
    typicalInvestment: { min: 20000000, max: 200000000 },
    expectedBenefits: {
      first: ["Redução de perdas por desastres", "Proteção de vidas e patrimônio", "Melhoria da preparação urbana"],
      second: ["Economia em custos de reconstrução", "Fortalecimento da economia urbana", "Atração de investimentos"],
      third: ["Melhoria da qualidade de vida urbana", "Redução de desigualdades", "Fortalecimento da governança local"]
    },
    implementationTime: { min: 24, max: 48 },
    riskReduction: 50,
    economicMultiplier: 4.8,
    socialImpact: 4.2
  },
  {
    id: "fc-225",
    name: "Propostas para o Climate Technology Centre & Network (CTCN)",
    sector: "Finanças Climáticas",
    category: "Captação Internacional e Finanças Globais",
    description: "Desenvolvimento de propostas para acesso a assistência técnica e financiamento de tecnologias climáticas via CTCN da ONU.",
    typicalInvestment: { min: 500000, max: 5000000 },
    expectedBenefits: {
      first: ["Acesso a tecnologias climáticas", "Redução de riscos tecnológicos", "Melhoria da capacidade adaptativa"],
      second: ["Transferência de conhecimento", "Desenvolvimento de capacidades locais", "Inovação tecnológica"],
      third: ["Fortalecimento de instituições locais", "Capacitação de recursos humanos", "Promoção da cooperação técnica"]
    },
    implementationTime: { min: 12, max: 30 },
    riskReduction: 30,
    economicMultiplier: 3.8,
    socialImpact: 3.9
  },
  {
    id: "fc-275",
    name: "Padrões de contabilidade climática para governos locais",
    sector: "Finanças Climáticas",
    category: "Transparência, Monitoramento e Taxonomia",
    description: "Desenvolvimento de metodologia contábil específica para registro e acompanhamento de receitas e despesas relacionadas ao clima.",
    typicalInvestment: { min: 300000, max: 1500000 },
    expectedBenefits: {
      first: ["Redução de riscos contábeis", "Padronização de registros", "Melhoria do controle financeiro"],
      second: ["Otimização da gestão orçamentária", "Melhoria da eficiência fiscal", "Facilitação de auditorias"],
      third: ["Transparência na gestão pública", "Fortalecimento da governança", "Melhoria da prestação de contas"]
    },
    implementationTime: { min: 12, max: 24 },
    riskReduction: 20,
    economicMultiplier: 2.5,
    socialImpact: 3.4
  }
];
