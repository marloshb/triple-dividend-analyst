
import { AdaptiveProjectTemplate } from "@/types/climate";

export const turismoSustentavelProjects: AdaptiveProjectTemplate[] = [
  // A. Infraestrutura Turística Resiliente (1-15)
  {
    id: "tur-001",
    name: "Desenvolvimento de infraestrutura turística resiliente a eventos climáticos extremos",
    sector: "Turismo Sustentável",
    category: "Infraestrutura Turística Resiliente",
    description: "Construção e adaptação de hotéis, pousadas e atrativos turísticos com tecnologias e designs resilientes a eventos climáticos extremos.",
    typicalInvestment: { min: 2000000, max: 15000000 },
    expectedBenefits: {
      first: ["Proteção de ativos turísticos", "Continuidade operacional", "Segurança de turistas e funcionários"],
      second: ["Redução de custos de manutenção", "Aumento da competitividade", "Atração de investimentos"],
      third: ["Geração de empregos locais", "Fortalecimento da economia regional", "Melhoria da imagem do destino"]
    },
    implementationTime: { min: 18, max: 36 },
    riskReduction: 60,
    economicMultiplier: 3.8,
    socialImpact: 4.2
  },
  {
    id: "tur-002",
    name: "Capacitação de operadores turísticos em práticas sustentáveis e adaptação climática",
    sector: "Turismo Sustentável",
    category: "Infraestrutura Turística Resiliente",
    description: "Programas de formação para operadores turísticos sobre práticas sustentáveis, gestão de riscos climáticos e adaptação.",
    typicalInvestment: { min: 200000, max: 1000000 },
    expectedBenefits: {
      first: ["Redução de impactos ambientais", "Melhoria da qualidade dos serviços", "Preparação para riscos climáticos"],
      second: ["Aumento da eficiência operacional", "Redução de custos operacionais", "Acesso a novos mercados"],
      third: ["Capacitação profissional local", "Fortalecimento do setor", "Consciência ambiental"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 35,
    economicMultiplier: 2.8,
    socialImpact: 4.0
  },

  // B. Gestão Ambiental no Turismo (16-30)
  {
    id: "tur-016",
    name: "Implantação de sistemas de gestão ambiental em hotéis e pousadas",
    sector: "Turismo Sustentável",
    category: "Gestão Ambiental no Turismo",
    description: "Sistemas integrados de gestão ambiental para monitoramento e redução de impactos em empreendimentos turísticos.",
    typicalInvestment: { min: 300000, max: 1500000 },
    expectedBenefits: {
      first: ["Redução do consumo de recursos", "Diminuição de resíduos", "Melhoria da qualidade ambiental"],
      second: ["Economia operacional", "Certificações ambientais", "Diferenciação competitiva"],
      third: ["Educação ambiental", "Consciência sustentável", "Exemplo para comunidade"]
    },
    implementationTime: { min: 12, max: 24 },
    riskReduction: 40,
    economicMultiplier: 3.2,
    socialImpact: 3.8
  },

  // C. Turismo Comunitário e Ecoturismo (31-45)
  {
    id: "tur-031",
    name: "Promoção do ecoturismo em áreas naturais protegidas",
    sector: "Turismo Sustentável",
    category: "Turismo Comunitário e Ecoturismo",
    description: "Desenvolvimento de atividades de ecoturismo em unidades de conservação com gestão participativa e sustentável.",
    typicalInvestment: { min: 500000, max: 3000000 },
    expectedBenefits: {
      first: ["Conservação da biodiversidade", "Proteção de ecossistemas", "Educação ambiental"],
      second: ["Geração de renda local", "Diversificação econômica", "Valorização de recursos naturais"],
      third: ["Empoderamento comunitário", "Preservação cultural", "Consciência ambiental"]
    },
    implementationTime: { min: 12, max: 30 },
    riskReduction: 45,
    economicMultiplier: 3.5,
    socialImpact: 4.5
  },

  // D. Tecnologia e Monitoramento (46-50)
  {
    id: "tur-046",
    name: "Uso de tecnologias digitais para monitoramento da pegada ambiental do turismo",
    sector: "Turismo Sustentável",
    category: "Tecnologia e Monitoramento",
    description: "Plataformas digitais para monitoramento em tempo real dos impactos ambientais das atividades turísticas.",
    typicalInvestment: { min: 400000, max: 2000000 },
    expectedBenefits: {
      first: ["Monitoramento em tempo real", "Detecção precoce de impactos", "Dados para tomada de decisão"],
      second: ["Otimização de recursos", "Redução de custos ambientais", "Melhoria da eficiência"],
      third: ["Transparência", "Educação digital", "Engajamento turístico"]
    },
    implementationTime: { min: 9, max: 18 },
    riskReduction: 35,
    economicMultiplier: 2.9,
    socialImpact: 3.6
  }
];
