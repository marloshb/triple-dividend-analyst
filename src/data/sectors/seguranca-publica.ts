
import { AdaptiveProjectTemplate } from "@/types/climate";

export const segurancaPublicaProjects: AdaptiveProjectTemplate[] = [
  // A. Sistemas de Alerta e Resposta (1-15)
  {
    id: "seg-001",
    name: "Implantação de sistemas de alerta precoce para desastres naturais",
    sector: "Segurança Pública e Defesa Civil",
    category: "Sistemas de Alerta e Resposta",
    description: "Sistemas integrados de alerta precoce para eventos climáticos extremos com comunicação automatizada para população.",
    typicalInvestment: { min: 1500000, max: 10000000 },
    expectedBenefits: {
      first: ["Redução de perdas humanas", "Proteção de bens", "Resposta rápida a emergências"],
      second: ["Redução de custos de emergência", "Otimização de recursos", "Prevenção de danos"],
      third: ["Segurança da população", "Confiança institucional", "Preparação comunitária"]
    },
    implementationTime: { min: 18, max: 36 },
    riskReduction: 70,
    economicMultiplier: 4.5,
    socialImpact: 4.9
  },

  // B. Capacitação e Treinamento (16-30)
  {
    id: "seg-016",
    name: "Capacitação contínua de equipes de defesa civil em gestão de riscos climáticos",
    sector: "Segurança Pública e Defesa Civil",
    category: "Capacitação e Treinamento",
    description: "Programas de capacitação especializada para equipes de defesa civil em gestão de riscos e resposta a eventos climáticos.",
    typicalInvestment: { min: 300000, max: 1500000 },
    expectedBenefits: {
      first: ["Melhoria da capacidade de resposta", "Preparação técnica", "Redução de riscos"],
      second: ["Eficiência operacional", "Redução de custos", "Otimização de recursos"],
      third: ["Capacitação profissional", "Segurança comunitária", "Desenvolvimento institucional"]
    },
    implementationTime: { min: 12, max: 24 },
    riskReduction: 55,
    economicMultiplier: 3.2,
    socialImpact: 4.3
  },

  // C. Tecnologia e Monitoramento (31-45)
  {
    id: "seg-031",
    name: "Uso de drones para avaliação rápida de áreas afetadas por desastres",
    sector: "Segurança Pública e Defesa Civil",
    category: "Tecnologia e Monitoramento",
    description: "Frota de drones equipados com sensores para avaliação rápida de danos e apoio às operações de resgate.",
    typicalInvestment: { min: 800000, max: 4000000 },
    expectedBenefits: {
      first: ["Avaliação rápida de danos", "Localização de vítimas", "Mapeamento de riscos"],
      second: ["Redução de custos operacionais", "Eficiência nas operações", "Rapidez na resposta"],
      third: ["Inovação tecnológica", "Capacitação técnica", "Melhoria dos serviços"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 45,
    economicMultiplier: 3.8,
    socialImpact: 4.1
  },

  // D. Preparação Comunitária (46-50)
  {
    id: "seg-046",
    name: "Treinamentos comunitários para preparo e resposta a eventos extremos",
    sector: "Segurança Pública e Defesa Civil",
    category: "Preparação Comunitária",
    description: "Programas de treinamento comunitário para preparação e resposta a eventos climáticos extremos.",
    typicalInvestment: { min: 200000, max: 1000000 },
    expectedBenefits: {
      first: ["Preparação da população", "Redução de vulnerabilidades", "Resposta comunitária"],
      second: ["Redução de custos de emergência", "Prevenção de danos", "Eficiência na resposta"],
      third: ["Empoderamento comunitário", "Coesão social", "Cultura de prevenção"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 40,
    economicMultiplier: 2.5,
    socialImpact: 4.6
  }
];
