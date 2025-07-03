
import { AdaptiveProjectTemplate } from "@/types/climate";

export const mobilidadeUrbanaProjects: AdaptiveProjectTemplate[] = [
  // A. Transporte Público Resiliente (1-15)
  {
    id: "mob-001",
    name: "Desenvolvimento de sistemas de transporte público adaptados a eventos climáticos extremos",
    sector: "Mobilidade Urbana e Transporte Público",
    category: "Transporte Público Resiliente",
    description: "Sistemas de transporte público com infraestrutura e operação resilientes a eventos climáticos extremos.",
    typicalInvestment: { min: 10000000, max: 80000000 },
    expectedBenefits: {
      first: ["Continuidade do transporte", "Redução de vulnerabilidades", "Segurança dos usuários"],
      second: ["Manutenção da mobilidade urbana", "Competitividade econômica", "Redução de custos sociais"],
      third: ["Acesso democrático ao transporte", "Qualidade de vida", "Coesão social urbana"]
    },
    implementationTime: { min: 36, max: 84 },
    riskReduction: 65,
    economicMultiplier: 4.2,
    socialImpact: 4.6
  },

  // B. Mobilidade Ativa e Sustentável (16-30)
  {
    id: "mob-016",
    name: "Implantação de ciclovias e infraestrutura para mobilidade ativa resiliente",
    sector: "Mobilidade Urbana e Transporte Público",
    category: "Mobilidade Ativa e Sustentável",
    description: "Rede integrada de ciclovias e infraestrutura para caminhada adaptada a condições climáticas adversas.",
    typicalInvestment: { min: 2000000, max: 15000000 },
    expectedBenefits: {
      first: ["Mobilidade resiliente", "Redução de emissões", "Melhoria da saúde pública"],
      second: ["Economia em transporte", "Desenvolvimento urbano", "Turismo sustentável"],
      third: ["Qualidade de vida urbana", "Democratização da mobilidade", "Cultura sustentável"]
    },
    implementationTime: { min: 18, max: 36 },
    riskReduction: 35,
    economicMultiplier: 3.2,
    socialImpact: 4.3
  },

  // C. Tecnologia e Gestão Inteligente (31-45)
  {
    id: "mob-031",
    name: "Sistemas inteligentes de gestão de tráfego adaptados ao clima",
    sector: "Mobilidade Urbana e Transporte Público",
    category: "Tecnologia e Gestão Inteligente",
    description: "Sistemas de gestão de tráfego que se adaptam automaticamente a condições climáticas adversas.",
    typicalInvestment: { min: 3000000, max: 20000000 },
    expectedBenefits: {
      first: ["Fluidez do tráfego", "Redução de acidentes", "Resposta rápida a eventos"],
      second: ["Eficiência energética", "Redução de emissões", "Otimização de recursos"],
      third: ["Melhoria da mobilidade urbana", "Qualidade de vida", "Inovação tecnológica"]
    },
    implementationTime: { min: 24, max: 48 },
    riskReduction: 45,
    economicMultiplier: 3.8,
    socialImpact: 4.0
  },

  // D. Infraestrutura de Apoio (46-50)
  {
    id: "mob-046",
    name: "Criação de terminais e pontos de apoio resilientes para transporte público",
    sector: "Mobilidade Urbana e Transporte Público",
    category: "Infraestrutura de Apoio",
    description: "Terminais e pontos de parada com infraestrutura adaptada para proteção contra eventos climáticos extremos.",
    typicalInvestment: { min: 1500000, max: 8000000 },
    expectedBenefits: {
      first: ["Proteção dos usuários", "Continuidade operacional", "Conforto climático"],
      second: ["Valorização urbana", "Atração de investimentos", "Eficiência operacional"],
      third: ["Melhoria da experiência urbana", "Inclusão social", "Dignidade no transporte"]
    },
    implementationTime: { min: 12, max: 30 },
    riskReduction: 40,
    economicMultiplier: 2.8,
    socialImpact: 4.1
  }
];
