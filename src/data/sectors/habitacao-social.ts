
import { AdaptiveProjectTemplate } from "@/types/climate";

export const habitacaoSocialProjects: AdaptiveProjectTemplate[] = [
  // A. Construção Resiliente (1-15)
  {
    id: "hab-001",
    name: "Desenvolvimento de habitações sociais com design bioclimático e resiliente",
    sector: "Habitação Social e Desenvolvimento Comunitário",
    category: "Construção Resiliente",
    description: "Projetos habitacionais sociais com design bioclimático, materiais sustentáveis e resistência a eventos extremos.",
    typicalInvestment: { min: 5000000, max: 30000000 },
    expectedBenefits: {
      first: ["Proteção de famílias vulneráveis", "Redução de riscos habitacionais", "Conforto térmico"],
      second: ["Redução de custos energéticos", "Valorização imobiliária", "Sustentabilidade econômica"],
      third: ["Melhoria da qualidade de vida", "Dignidade habitacional", "Coesão comunitária"]
    },
    implementationTime: { min: 24, max: 60 },
    riskReduction: 60,
    economicMultiplier: 3.5,
    socialImpact: 4.8
  },

  // B. Infraestrutura Comunitária (16-30)
  {
    id: "hab-016",
    name: "Implantação de sistemas de saneamento resiliente em comunidades vulneráveis",
    sector: "Habitação Social e Desenvolvimento Comunitário",
    category: "Infraestrutura Comunitária",
    description: "Sistemas de saneamento básico adaptados a eventos climáticos extremos em comunidades de baixa renda.",
    typicalInvestment: { min: 3000000, max: 20000000 },
    expectedBenefits: {
      first: ["Melhoria da saúde pública", "Redução de doenças", "Saneamento básico"],
      second: ["Redução de custos de saúde", "Valorização habitacional", "Desenvolvimento local"],
      third: ["Dignidade humana", "Qualidade de vida", "Inclusão social"]
    },
    implementationTime: { min: 18, max: 48 },
    riskReduction: 55,
    economicMultiplier: 3.8,
    socialImpact: 4.7
  },

  // C. Desenvolvimento Comunitário (31-45)
  {
    id: "hab-031",
    name: "Programas de capacitação comunitária para adaptação climática habitacional",
    sector: "Habitação Social e Desenvolvimento Comunitário",
    category: "Desenvolvimento Comunitário",
    description: "Programas de capacitação para comunidades sobre técnicas de adaptação climática em habitações.",
    typicalInvestment: { min: 300000, max: 1500000 },
    expectedBenefits: {
      first: ["Preparação comunitária", "Redução de vulnerabilidades", "Autoconstrução segura"],
      second: ["Economia em reformas", "Geração de renda local", "Empreendedorismo"],
      third: ["Empoderamento comunitário", "Capacitação técnica", "Organização social"]
    },
    implementationTime: { min: 12, max: 36 },
    riskReduction: 40,
    economicMultiplier: 2.5,
    socialImpact: 4.5
  },

  // D. Financiamento e Políticas Habitacionais (46-50)
  {
    id: "hab-046",
    name: "Criação de fundos comunitários para melhoria habitacional resiliente",
    sector: "Habitação Social e Desenvolvimento Comunitário",
    category: "Financiamento e Políticas Habitacionais",
    description: "Fundos rotativos comunitários para financiamento de melhorias habitacionais com foco em resiliência climática.",
    typicalInvestment: { min: 1000000, max: 8000000 },
    expectedBenefits: {
      first: ["Acesso ao crédito habitacional", "Melhoria habitacional", "Redução de riscos"],
      second: ["Sustentabilidade financeira", "Economia local", "Multiplicação de recursos"],
      third: ["Autonomia comunitária", "Solidariedade", "Desenvolvimento social"]
    },
    implementationTime: { min: 18, max: 36 },
    riskReduction: 45,
    economicMultiplier: 3.2,
    socialImpact: 4.4
  }
];
