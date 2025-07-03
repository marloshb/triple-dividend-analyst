
import { AdaptiveProjectTemplate } from "@/types/climate";

export const transportesResilientesProjects: AdaptiveProjectTemplate[] = [
  // 🚧 A. Infraestrutura Rodoviária Resiliente (1-80)
  {
    id: "tra-001",
    name: "Pavimentação com asfalto permeável",
    sector: "Transportes Resilientes",
    category: "Infraestrutura Rodoviária Resiliente",
    description: "Sistema de pavimentação que permite infiltração de água pluvial, reduzindo alagamentos urbanos",
    typicalInvestment: { min: 150000, max: 800000 },
    expectedBenefits: {
      first: ["Redução de alagamentos", "Prevenção de erosão", "Melhoria na drenagem urbana"],
      second: ["Economia em sistemas de drenagem", "Menor manutenção viária", "Valorização imobiliária"],
      third: ["Qualidade da água melhorada", "Recarga de aquíferos", "Redução de ilhas de calor"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 40,
    economicMultiplier: 3.2,
    socialImpact: 3.8
  },
  {
    id: "tra-002",
    name: "Elevação de rodovias em áreas inundáveis",
    sector: "Transportes Resilientes",
    category: "Infraestrutura Rodoviária Resiliente",
    description: "Construção de vias elevadas para manter conectividade durante enchentes",
    typicalInvestment: { min: 2000000, max: 15000000 },
    expectedBenefits: {
      first: ["Conectividade garantida", "Segurança viária", "Acesso a serviços essenciais"],
      second: ["Economia em perdas por isolamento", "Desenvolvimento econômico", "Turismo mantido"],
      third: ["Segurança da população", "Acesso a saúde e educação", "Coesão social"]
    },
    implementationTime: { min: 18, max: 48 },
    riskReduction: 70,
    economicMultiplier: 4.5,
    socialImpact: 4.6
  },
  {
    id: "tra-003",
    name: "Redes de drenagem laterais reforçadas",
    sector: "Transportes Resilientes",
    category: "Infraestrutura Rodoviária Resiliente",
    description: "Sistema de drenagem robusta ao longo das vias para escoamento eficiente",
    typicalInvestment: { min: 300000, max: 1500000 },
    expectedBenefits: {
      first: ["Prevenção de enchentes", "Proteção do pavimento", "Segurança viária"],
      second: ["Redução de custos de manutenção", "Economia em reparos", "Eficiência logística"],
      third: ["Proteção ambiental", "Qualidade da água", "Saúde pública"]
    },
    implementationTime: { min: 8, max: 24 },
    riskReduction: 50,
    economicMultiplier: 3.6,
    socialImpact: 3.4
  },

  // 🚲 B. Infraestrutura Cicloviária Resiliente (81-160)
  {
    id: "tra-081",
    name: "Ciclovias elevadas com drenagem",
    sector: "Transportes Resilientes",
    category: "Infraestrutura Cicloviária Resiliente",
    description: "Ciclovias elevadas com sistema integrado de drenagem pluvial",
    typicalInvestment: { min: 800000, max: 4000000 },
    expectedBenefits: {
      first: ["Mobilidade garantida", "Segurança para ciclistas", "Proteção contra enchentes"],
      second: ["Economia em transporte", "Turismo cicloviário", "Valorização urbana"],
      third: ["Mobilidade sustentável", "Saúde pública", "Qualidade do ar"]
    },
    implementationTime: { min: 12, max: 36 },
    riskReduction: 45,
    economicMultiplier: 3.8,
    socialImpact: 4.2
  },
  {
    id: "tra-082",
    name: "Pontes cicloviárias adaptadas a cheias",
    sector: "Transportes Resilientes",
    category: "Infraestrutura Cicloviária Resiliente",
    description: "Pontes para ciclistas com altura adequada para períodos de cheia",
    typicalInvestment: { min: 400000, max: 2000000 },
    expectedBenefits: {
      first: ["Conectividade mantida", "Segurança de ciclistas", "Acesso garantido"],
      second: ["Economia em transporte", "Desenvolvimento local", "Turismo"],
      third: ["Mobilidade inclusiva", "Atividade física", "Integração urbana"]
    },
    implementationTime: { min: 8, max: 24 },
    riskReduction: 55,
    economicMultiplier: 3.4,
    socialImpact: 4.0
  },

  // 🚌 C. Transporte Coletivo Resiliente (161-240)
  {
    id: "tra-161",
    name: "Terminais de ônibus elevados",
    sector: "Transportes Resilientes",
    category: "Transporte Coletivo Resiliente",
    description: "Estações de transporte público elevadas para proteção contra inundações",
    typicalInvestment: { min: 1500000, max: 8000000 },
    expectedBenefits: {
      first: ["Transporte público garantido", "Proteção de usuários", "Continuidade do serviço"],
      second: ["Economia para usuários", "Eficiência do transporte", "Desenvolvimento urbano"],
      third: ["Inclusão social", "Acesso a oportunidades", "Qualidade de vida"]
    },
    implementationTime: { min: 12, max: 36 },
    riskReduction: 60,
    economicMultiplier: 4.1,
    socialImpact: 4.5
  },
  {
    id: "tra-162",
    name: "Abrigos climatizados com energia solar",
    sector: "Transportes Resilientes",
    category: "Transporte Coletivo Resiliente",
    description: "Pontos de ônibus com climatização alimentada por energia solar",
    typicalInvestment: { min: 80000, max: 300000 },
    expectedBenefits: {
      first: ["Conforto térmico", "Proteção contra calor extremo", "Segurança dos usuários"],
      second: ["Economia energética", "Eficiência operacional", "Valorização do serviço"],
      third: ["Saúde pública", "Bem-estar social", "Sustentabilidade"]
    },
    implementationTime: { min: 3, max: 12 },
    riskReduction: 35,
    economicMultiplier: 2.8,
    socialImpact: 4.3
  },

  // 🚀 D. Tecnologia, Monitoramento & Inovação (241-300)
  {
    id: "tra-241",
    name: "App de alerta de bloqueio de vias",
    sector: "Transportes Resilientes",
    category: "Tecnologia, Monitoramento & Inovação",
    description: "Aplicativo móvel para alertas em tempo real sobre vias bloqueadas",
    typicalInvestment: { min: 100000, max: 500000 },
    expectedBenefits: {
      first: ["Informação em tempo real", "Rotas alternativas", "Segurança no trânsito"],
      second: ["Economia de combustível", "Eficiência logística", "Produtividade"],
      third: ["Redução de stress", "Participação cidadã", "Conectividade digital"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 30,
    economicMultiplier: 3.5,
    socialImpact: 3.9
  },
  {
    id: "tra-242",
    name: "Sistema de detecção de cheias em tempo real",
    sector: "Transportes Resilientes",
    category: "Tecnologia, Monitoramento & Inovação",
    description: "Rede de sensores para monitoramento e alerta precoce de inundações",
    typicalInvestment: { min: 300000, max: 1500000 },
    expectedBenefits: {
      first: ["Alerta precoce", "Evacuação planejada", "Proteção de vidas"],
      second: ["Redução de perdas materiais", "Continuidade econômica", "Eficiência de resposta"],
      third: ["Segurança da população", "Confiança institucional", "Preparação comunitária"]
    },
    implementationTime: { min: 8, max: 24 },
    riskReduction: 75,
    economicMultiplier: 5.2,
    socialImpact: 4.8
  },
  {
    id: "tra-243",
    name: "Monitoramento de condição de pista via IoT",
    sector: "Transportes Resilientes",
    category: "Tecnologia, Monitoramento & Inovação",
    description: "Sensores IoT para monitoramento contínuo do estado das vias",
    typicalInvestment: { min: 200000, max: 1000000 },
    expectedBenefits: {
      first: ["Manutenção preventiva", "Segurança viária", "Qualidade das vias"],
      second: ["Economia em reparos", "Eficiência de manutenção", "Vida útil estendida"],
      third: ["Segurança dos usuários", "Conforto de viagem", "Tecnologia avançada"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 40,
    economicMultiplier: 4.0,
    socialImpact: 3.6
  }
];
