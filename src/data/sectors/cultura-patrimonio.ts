
import { AdaptiveProjectTemplate } from "@/types/climate";

export const culturaPatrimonioProjects: AdaptiveProjectTemplate[] = [
  // A. Preservação Digital e Documentação (1-15)
  {
    id: "cul-001",
    name: "Mapeamento geoespacial de bens culturais vulneráveis a riscos climáticos",
    sector: "Cultura e Patrimônio Histórico",
    category: "Preservação Digital e Documentação",
    description: "Sistema de mapeamento digital para identificação e monitoramento de patrimônios culturais vulneráveis a mudanças climáticas.",
    typicalInvestment: { min: 600000, max: 3000000 },
    expectedBenefits: {
      first: ["Proteção do patrimônio", "Prevenção de perdas culturais", "Monitoramento contínuo"],
      second: ["Otimização de recursos de preservação", "Turismo cultural", "Valorização patrimonial"],
      third: ["Preservação da identidade cultural", "Educação patrimonial", "Memória coletiva"]
    },
    implementationTime: { min: 12, max: 30 },
    riskReduction: 50,
    economicMultiplier: 2.8,
    socialImpact: 4.5
  },

  // B. Restauração Adaptativa (16-30)
  {
    id: "cul-016",
    name: "Programas de restauração adaptativa para construções históricas",
    sector: "Cultura e Patrimônio Histórico",
    category: "Restauração Adaptativa",
    description: "Técnicas de restauração que combinam preservação histórica com adaptação a condições climáticas futuras.",
    typicalInvestment: { min: 1000000, max: 8000000 },
    expectedBenefits: {
      first: ["Preservação estrutural", "Resistência climática", "Funcionalidade continuada"],
      second: ["Valorização imobiliária", "Turismo cultural", "Economia de manutenção"],
      third: ["Preservação cultural", "Identidade local", "Transmissão geracional"]
    },
    implementationTime: { min: 18, max: 48 },
    riskReduction: 60,
    economicMultiplier: 3.2,
    socialImpact: 4.3
  },

  // C. Gestão de Riscos Patrimoniais (31-45)
  {
    id: "cul-031",
    name: "Desenvolvimento de protocolos para resposta rápida a desastres em bens culturais",
    sector: "Cultura e Patrimônio Histórico",
    category: "Gestão de Riscos Patrimoniais",
    description: "Protocolos especializados para proteção e salvamento de patrimônio cultural durante eventos climáticos extremos.",
    typicalInvestment: { min: 300000, max: 1500000 },
    expectedBenefits: {
      first: ["Resposta rápida a emergências", "Minimização de perdas", "Proteção patrimonial"],
      second: ["Redução de custos de recuperação", "Eficiência na resposta", "Preservação de valor"],
      third: ["Capacitação comunitária", "Consciência patrimonial", "Preparação cultural"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 45,
    economicMultiplier: 2.5,
    socialImpact: 4.1
  },

  // D. Educação e Sensibilização Cultural (46-50)
  {
    id: "cul-046",
    name: "Criação de campanhas de sensibilização sobre impactos climáticos no patrimônio",
    sector: "Cultura e Patrimônio Histórico",
    category: "Educação e Sensibilização Cultural",
    description: "Campanhas educativas sobre os impactos das mudanças climáticas no patrimônio cultural e formas de proteção.",
    typicalInvestment: { min: 200000, max: 1000000 },
    expectedBenefits: {
      first: ["Conscientização pública", "Valorização do patrimônio", "Prevenção de danos"],
      second: ["Turismo consciente", "Engajamento comunitário", "Economia criativa"],
      third: ["Educação cultural", "Cidadania ativa", "Preservação identitária"]
    },
    implementationTime: { min: 6, max: 12 },
    riskReduction: 30,
    economicMultiplier: 2.2,
    socialImpact: 4.4
  }
];
