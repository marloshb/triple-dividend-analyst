
import { AdaptiveProjectTemplate } from "@/types/climate";

export const industriaProjects: AdaptiveProjectTemplate[] = [
  // A. Eficiência e Sustentabilidade Industrial (1-15)
  {
    id: "ind-001",
    name: "Implementação de sistemas de eficiência energética nas unidades industriais",
    sector: "Indústria e Manufatura",
    category: "Eficiência e Sustentabilidade Industrial",
    description: "Sistemas integrados de gestão energética para otimização do consumo e redução de custos industriais.",
    typicalInvestment: { min: 2000000, max: 15000000 },
    expectedBenefits: {
      first: ["Redução do consumo energético", "Menor impacto ambiental", "Controle de custos"],
      second: ["Competitividade industrial", "Redução de custos operacionais", "Sustentabilidade financeira"],
      third: ["Geração de empregos especializados", "Inovação tecnológica", "Desenvolvimento industrial"]
    },
    implementationTime: { min: 18, max: 36 },
    riskReduction: 35,
    economicMultiplier: 4.2,
    socialImpact: 3.8
  },

  // B. Gestão de Riscos Industriais (16-30)
  {
    id: "ind-016",
    name: "Desenvolvimento de planos de gestão de riscos climáticos para operações industriais",
    sector: "Indústria e Manufatura",
    category: "Gestão de Riscos Industriais",
    description: "Planos integrados de gestão de riscos climáticos específicos para operações industriais e cadeias produtivas.",
    typicalInvestment: { min: 800000, max: 5000000 },
    expectedBenefits: {
      first: ["Continuidade operacional", "Redução de perdas", "Preparação para eventos extremos"],
      second: ["Proteção de ativos", "Redução de custos de recuperação", "Competitividade"],
      third: ["Segurança de trabalhadores", "Estabilidade de empregos", "Responsabilidade social"]
    },
    implementationTime: { min: 12, max: 24 },
    riskReduction: 55,
    economicMultiplier: 3.5,
    socialImpact: 4.0
  },

  // C. Tecnologias Limpas e Inovação (31-45)
  {
    id: "ind-031",
    name: "Uso de energias renováveis para abastecimento industrial",
    sector: "Indústria e Manufatura",
    category: "Tecnologias Limpas e Inovação",
    description: "Implementação de sistemas de energia renovável para suprimento energético industrial sustentável.",
    typicalInvestment: { min: 5000000, max: 40000000 },
    expectedBenefits: {
      first: ["Independência energética", "Redução de emissões", "Energia limpa"],
      second: ["Redução de custos energéticos", "Competitividade", "Sustentabilidade financeira"],
      third: ["Desenvolvimento tecnológico", "Empregos verdes", "Liderança industrial"]
    },
    implementationTime: { min: 24, max: 48 },
    riskReduction: 40,
    economicMultiplier: 4.8,
    socialImpact: 4.1
  },

  // D. Economia Circular Industrial (46-50)
  {
    id: "ind-046",
    name: "Implantação de programas de economia circular na cadeia produtiva",
    sector: "Indústria e Manufatura",
    category: "Economia Circular Industrial",
    description: "Programas integrados de economia circular para redução de resíduos e reaproveitamento de materiais industriais.",
    typicalInvestment: { min: 1500000, max: 10000000 },
    expectedBenefits: {
      first: ["Redução de resíduos", "Uso eficiente de recursos", "Menor impacto ambiental"],
      second: ["Economia de custos", "Novos produtos e serviços", "Competitividade"],
      third: ["Inovação social", "Sustentabilidade", "Modelo para outros setores"]
    },
    implementationTime: { min: 18, max: 36 },
    riskReduction: 30,
    economicMultiplier: 3.8,
    socialImpact: 3.9
  }
];
