
import { AdaptiveProjectTemplate } from "@/types/climate";

export const comercioServicosProjects: AdaptiveProjectTemplate[] = [
  // A. Eficiência e Sustentabilidade Empresarial (1-15)
  {
    id: "com-001",
    name: "Desenvolvimento de estratégias para continuidade de negócios em eventos climáticos extremos",
    sector: "Comércio e Serviços",
    category: "Eficiência e Sustentabilidade Empresarial",
    description: "Planos de continuidade de negócios específicos para enfrentar eventos climáticos extremos no setor comercial e de serviços.",
    typicalInvestment: { min: 400000, max: 2000000 },
    expectedBenefits: {
      first: ["Continuidade operacional", "Redução de perdas", "Proteção de ativos"],
      second: ["Manutenção da receita", "Competitividade", "Redução de custos de recuperação"],
      third: ["Manutenção de empregos", "Estabilidade econômica", "Confiança do consumidor"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 55,
    economicMultiplier: 3.5,
    socialImpact: 4.0
  },

  // B. Tecnologia e Inovação Empresarial (16-30)
  {
    id: "com-016",
    name: "Implantação de sistemas de eficiência energética em estabelecimentos comerciais",
    sector: "Comércio e Serviços",
    category: "Tecnologia e Inovação Empresarial",
    description: "Sistemas inteligentes de gestão energética para redução do consumo e otimização da eficiência em estabelecimentos comerciais.",
    typicalInvestment: { min: 300000, max: 1500000 },
    expectedBenefits: {
      first: ["Redução do consumo energético", "Menor impacto ambiental", "Controle de custos"],
      second: ["Economia nas contas de energia", "Competitividade", "Sustentabilidade financeira"],
      third: ["Educação ambiental", "Exemplo para outros negócios", "Responsabilidade social"]
    },
    implementationTime: { min: 3, max: 12 },
    riskReduction: 25,
    economicMultiplier: 2.8,
    socialImpact: 3.2
  },

  // C. Capacitação e Gestão de Riscos (31-45)
  {
    id: "com-031",
    name: "Capacitação de empreendedores em práticas sustentáveis e gestão de riscos climáticos",
    sector: "Comércio e Serviços",
    category: "Capacitação e Gestão de Riscos",
    description: "Programas de capacitação para empreendedores sobre gestão de riscos climáticos e implementação de práticas sustentáveis.",
    typicalInvestment: { min: 200000, max: 800000 },
    expectedBenefits: {
      first: ["Preparação empresarial", "Redução de vulnerabilidades", "Melhoria da gestão"],
      second: ["Aumento da produtividade", "Redução de custos", "Acesso a novos mercados"],
      third: ["Capacitação profissional", "Desenvolvimento empresarial", "Multiplicação de conhecimento"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 40,
    economicMultiplier: 2.5,
    socialImpact: 3.8
  },

  // D. Economia Circular e Sustentabilidade (46-50)
  {
    id: "com-046",
    name: "Promoção de práticas de economia circular no comércio varejista",
    sector: "Comércio e Serviços",
    category: "Economia Circular e Sustentabilidade",
    description: "Implementação de práticas de economia circular no varejo, incluindo reuso, reciclagem e redução de desperdícios.",
    typicalInvestment: { min: 300000, max: 1200000 },
    expectedBenefits: {
      first: ["Redução de resíduos", "Uso eficiente de recursos", "Menor impacto ambiental"],
      second: ["Economia de custos", "Diferenciação competitiva", "Novos modelos de negócio"],
      third: ["Conscientização ambiental", "Mudança cultural", "Sustentabilidade social"]
    },
    implementationTime: { min: 9, max: 24 },
    riskReduction: 30,
    economicMultiplier: 2.8,
    socialImpact: 3.9
  }
];
