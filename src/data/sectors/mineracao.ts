
import { AdaptiveProjectTemplate } from "@/types/climate";

export const mineracaoProjects: AdaptiveProjectTemplate[] = [
  // A. Monitoramento e Gestão Ambiental (1-15)
  {
    id: "min-001",
    name: "Implementação de sistemas de monitoramento ambiental contínuo em áreas de mineração",
    sector: "Mineração e Recursos Naturais",
    category: "Monitoramento e Gestão Ambiental",
    description: "Sistemas automatizados de monitoramento ambiental para controle de impactos da mineração em tempo real.",
    typicalInvestment: { min: 2000000, max: 12000000 },
    expectedBenefits: {
      first: ["Controle de impactos ambientais", "Detecção precoce de problemas", "Conformidade regulatória"],
      second: ["Redução de multas", "Eficiência operacional", "Prevenção de acidentes"],
      third: ["Proteção comunitária", "Transparência operacional", "Responsabilidade social"]
    },
    implementationTime: { min: 18, max: 36 },
    riskReduction: 60,
    economicMultiplier: 3.5,
    socialImpact: 4.2
  },

  // B. Tecnologias Limpas e Eficiência (16-30)
  {
    id: "min-016",
    name: "Uso de tecnologias para redução do consumo de água em processos de extração",
    sector: "Mineração e Recursos Naturais",
    category: "Tecnologias Limpas e Eficiência",
    description: "Implementação de tecnologias avançadas para minimização do uso de água e maximização da reutilização nos processos minerários.",
    typicalInvestment: { min: 5000000, max: 25000000 },
    expectedBenefits: {
      first: ["Redução do consumo hídrico", "Preservação de recursos", "Menor impacto ambiental"],
      second: ["Economia operacional", "Redução de custos", "Sustentabilidade financeira"],
      third: ["Preservação de recursos para comunidades", "Responsabilidade ambiental", "Sustentabilidade regional"]
    },
    implementationTime: { min: 24, max: 48 },
    riskReduction: 45,
    economicMultiplier: 3.8,
    socialImpact: 4.0
  },

  // C. Recuperação e Restauração (31-45)
  {
    id: "min-031",
    name: "Criação de programas de recuperação ambiental pós-exploração",
    sector: "Mineração e Recursos Naturais",
    category: "Recuperação e Restauração",
    description: "Programas integrados de recuperação e restauração de áreas degradadas pela mineração com foco em sustentabilidade.",
    typicalInvestment: { min: 3000000, max: 15000000 },
    expectedBenefits: {
      first: ["Restauração de ecossistemas", "Recuperação da biodiversidade", "Controle de erosão"],
      second: ["Valorização de terras", "Novas oportunidades econômicas", "Redução de passivos"],
      third: ["Benefícios para comunidades", "Recuperação de meios de vida", "Legado positivo"]
    },
    implementationTime: { min: 36, max: 120 },
    riskReduction: 55,
    economicMultiplier: 2.8,
    socialImpact: 4.3
  },

  // D. Gestão de Riscos e Contingência (46-50)
  {
    id: "min-046",
    name: "Desenvolvimento de planos de gestão de riscos climáticos para operações mineradoras",
    sector: "Mineração e Recursos Naturais",
    category: "Gestão de Riscos e Contingência",
    description: "Planos abrangentes de gestão de riscos climáticos específicos para operações minerárias e áreas adjacentes.",
    typicalInvestment: { min: 800000, max: 4000000 },
    expectedBenefits: {
      first: ["Preparação para eventos extremos", "Redução de vulnerabilidades", "Resposta rápida"],
      second: ["Continuidade operacional", "Redução de perdas", "Eficiência na gestão"],
      third: ["Segurança de trabalhadores", "Proteção comunitária", "Responsabilidade corporativa"]
    },
    implementationTime: { min: 12, max: 24 },
    riskReduction: 50,
    economicMultiplier: 3.2,
    socialImpact: 4.1
  }
];
