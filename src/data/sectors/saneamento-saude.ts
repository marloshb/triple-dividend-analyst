
import { AdaptiveProjectTemplate } from "@/types/climate";

export const saneamentoSaudeProjects: AdaptiveProjectTemplate[] = [
  // 🚰 A. Infraestrutura Sanitária Resiliente (1–80)
  {
    id: "san-001",
    name: "Redes de esgoto separativas",
    sector: "Saneamento e Saúde Pública",
    category: "Infraestrutura Sanitária Resiliente",
    description: "Sistemas de esgotamento sanitário com separação total entre águas pluviais e residuais",
    typicalInvestment: { min: 800000, max: 8000000 },
    expectedBenefits: {
      first: ["Prevenção de contaminação", "Controle de enchentes", "Eficiência do tratamento"],
      second: ["Valorização imobiliária", "Redução de custos operacionais", "Desenvolvimento urbano"],
      third: ["Melhoria da saúde pública", "Qualidade de vida", "Sustentabilidade ambiental"]
    },
    implementationTime: { min: 18, max: 48 },
    riskReduction: 80,
    economicMultiplier: 5.4,
    socialImpact: 4.9
  },
  {
    id: "san-002",
    name: "Estações de tratamento descentralizadas",
    sector: "Saneamento e Saúde Pública",
    category: "Infraestrutura Sanitária Resiliente",
    description: "Pequenas estações de tratamento distribuídas para aumentar resiliência do sistema",
    typicalInvestment: { min: 300000, max: 2000000 },
    expectedBenefits: {
      first: ["Redundância do sistema", "Tratamento próximo à fonte", "Menor vulnerabilidade"],
      second: ["Eficiência operacional", "Redução de custos de transporte", "Manutenção simplificada"],
      third: ["Gestão comunitária", "Capacitação local", "Autonomia sanitária"]
    },
    implementationTime: { min: 12, max: 30 },
    riskReduction: 70,
    economicMultiplier: 4.8,
    socialImpact: 4.6
  },
  {
    id: "san-003",
    name: "Bacias de evapotranspiração para esgoto rural",
    sector: "Saneamento e Saúde Pública",
    category: "Infraestrutura Sanitária Resiliente",
    description: "Sistema natural de tratamento de esgoto usando plantas para evapotranspiração",
    typicalInvestment: { min: 50000, max: 300000 },
    expectedBenefits: {
      first: ["Tratamento natural eficiente", "Baixo consumo energético", "Resistência climática"],
      second: ["Baixos custos operacionais", "Economia em manutenção", "Produtos agrícolas"],
      third: ["Educação ambiental", "Integração paisagística", "Sustentabilidade"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 60,
    economicMultiplier: 3.9,
    socialImpact: 4.4
  },
  {
    id: "san-004",
    name: "Tanques sépticos avançados com tratamento terciário",
    sector: "Saneamento e Saúde Pública",
    category: "Infraestrutura Sanitária Resiliente",
    description: "Sistemas individuais de tratamento com três níveis de purificação",
    typicalInvestment: { min: 25000, max: 150000 },
    expectedBenefits: {
      first: ["Alta eficiência de tratamento", "Proteção do lençol freático", "Redução de patógenos"],
      second: ["Valorização da propriedade", "Economia em saneamento", "Conformidade legal"],
      third: ["Saúde familiar", "Responsabilidade ambiental", "Autonomia sanitária"]
    },
    implementationTime: { min: 3, max: 12 },
    riskReduction: 65,
    economicMultiplier: 4.1,
    socialImpact: 4.3
  },
  {
    id: "san-005",
    name: "Sistemas flutuantes de tratamento",
    sector: "Saneamento e Saúde Pública",
    category: "Infraestrutura Sanitária Resiliente",
    description: "Estações de tratamento flutuantes para áreas sujeitas a inundações",
    typicalInvestment: { min: 400000, max: 2500000 },
    expectedBenefits: {
      first: ["Continuidade durante enchentes", "Adaptação ao nível da água", "Tratamento móvel"],
      second: ["Economia em reconstrução", "Flexibilidade operacional", "Inovação tecnológica"],
      third: ["Serviços contínuos", "Resiliência comunitária", "Segurança sanitária"]
    },
    implementationTime: { min: 10, max: 24 },
    riskReduction: 85,
    economicMultiplier: 5.2,
    socialImpact: 4.7
  },

  // 🩺 B. Controle de Doenças e Saúde Preventiva (81–160)
  {
    id: "san-081",
    name: "Distribuição de mosquiteiros tratados",
    sector: "Saneamento e Saúde Pública",
    category: "Controle de Doenças e Saúde Preventiva",
    description: "Programa de distribuição de mosquiteiros com inseticida de longa duração",
    typicalInvestment: { min: 50000, max: 400000 },
    expectedBenefits: {
      first: ["Redução de 70% na transmissão de doenças", "Proteção familiar noturna", "Prevenção de epidemias"],
      second: ["Economia em tratamentos médicos", "Redução de absenteísmo", "Produtividade aumentada"],
      third: ["Melhoria da qualidade do sono", "Proteção de grupos vulneráveis", "Saúde comunitária"]
    },
    implementationTime: { min: 3, max: 12 },
    riskReduction: 60,
    economicMultiplier: 6.8,
    socialImpact: 4.8
  },
  {
    id: "san-082",
    name: "Armadilhas luminosas para mosquitos",
    sector: "Saneamento e Saúde Pública",
    category: "Controle de Doenças e Saúde Preventiva",
    description: "Sistema de armadilhas com atração luminosa para controle vetorial",
    typicalInvestment: { min: 30000, max: 200000 },
    expectedBenefits: {
      first: ["Redução da população de vetores", "Controle sem químicos", "Monitoramento de espécies"],
      second: ["Economia em inseticidas", "Turismo ecológico", "Inovação local"],
      third: ["Ambiente mais saudável", "Educação sobre vetores", "Sustentabilidade"]
    },
    implementationTime: { min: 2, max: 8 },
    riskReduction: 50,
    economicMultiplier: 4.2,
    socialImpact: 4.1
  },
  {
    id: "san-083",
    name: "Redes de vigilância de dengue via app",
    sector: "Saneamento e Saúde Pública",
    category: "Controle de Doenças e Saúde Preventiva",
    description: "Aplicativo móvel para vigilância participativa e notificação de casos de dengue",
    typicalInvestment: { min: 80000, max: 500000 },
    expectedBenefits: {
      first: ["Detecção precoce de surtos", "Mapeamento de casos", "Resposta rápida"],
      second: ["Eficiência do sistema de saúde", "Redução de custos", "Inovação digital"],
      third: ["Participação comunitária", "Educação em saúde", "Empoderamento digital"]
    },
    implementationTime: { min: 6, max: 15 },
    riskReduction: 55,
    economicMultiplier: 5.1,
    socialImpact: 4.5
  },
  {
    id: "san-084",
    name: "Tratamento de água por cloro comunitário",
    sector: "Saneamento e Saúde Pública",
    category: "Controle de Doenças e Saúde Preventiva",
    description: "Sistema comunitário de cloração para tratamento de água potável",
    typicalInvestment: { min: 40000, max: 250000 },
    expectedBenefits: {
      first: ["Água segura para consumo", "Redução de doenças hídricas", "Proteção comunitária"],
      second: ["Economia em tratamentos médicos", "Produtividade melhorada", "Desenvolvimento local"],
      third: ["Saúde coletiva", "Capacitação técnica", "Autonomia sanitária"]
    },
    implementationTime: { min: 4, max: 12 },
    riskReduction: 70,
    economicMultiplier: 4.8,
    socialImpact: 4.7
  },
  {
    id: "san-085",
    name: "Postos móveis de vacinação em clima extremo",
    sector: "Saneamento e Saúde Pública",
    category: "Controle de Doenças e Saúde Preventiva",
    description: "Unidades móveis climatizadas para vacinação durante eventos climáticos extremos",
    typicalInvestment: { min: 150000, max: 800000 },
    expectedBenefits: {
      first: ["Continuidade da vacinação", "Proteção em emergências", "Acesso garantido"],
      second: ["Eficiência dos programas", "Economia em saúde pública", "Resposta emergencial"],
      third: ["Equidade em saúde", "Proteção de vulneráveis", "Resiliência sanitária"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 65,
    economicMultiplier: 3.9,
    socialImpact: 4.6
  },

  // 🧪 C. Monitoramento & Qualidade da Água (161–240)
  {
    id: "san-161",
    name: "Sensores de turbidez em rios urbanos",
    sector: "Saneamento e Saúde Pública",
    category: "Monitoramento & Qualidade da Água",
    description: "Rede de sensores automáticos para monitoramento da turbidez em corpos d'água urbanos",
    typicalInvestment: { min: 100000, max: 600000 },
    expectedBenefits: {
      first: ["Monitoramento contínuo", "Detecção precoce de poluição", "Dados em tempo real"],
      second: ["Eficiência na gestão hídrica", "Economia em análises", "Transparência pública"],
      third: ["Qualidade ambiental", "Educação sobre recursos hídricos", "Governança participativa"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 55,
    economicMultiplier: 4.3,
    socialImpact: 4.2
  },
  {
    id: "san-162",
    name: "Postos automáticos de coleta de água",
    sector: "Saneamento e Saúde Pública",
    category: "Monitoramento & Qualidade da Água",
    description: "Estações automatizadas para coleta de amostras de água em pontos estratégicos",
    typicalInvestment: { min: 80000, max: 500000 },
    expectedBenefits: {
      first: ["Coleta padronizada", "Dados confiáveis", "Monitoramento sistemático"],
      second: ["Redução de custos operacionais", "Eficiência analítica", "Dados para decisões"],
      third: ["Transparência ambiental", "Participação informada", "Qualidade hídrica"]
    },
    implementationTime: { min: 4, max: 15 },
    riskReduction: 50,
    economicMultiplier: 3.8,
    socialImpact: 4.0
  },
  {
    id: "san-163",
    name: "Monitoramento comunitário de poluentes",
    sector: "Saneamento e Saúde Pública",
    category: "Monitoramento & Qualidade da Água",
    description: "Programa de capacitação comunitária para monitoramento de poluentes na água",
    typicalInvestment: { min: 60000, max: 300000 },
    expectedBenefits: {
      first: ["Vigilância comunitária", "Detecção local de problemas", "Resposta rápida"],
      second: ["Economia em monitoramento", "Capacitação local", "Empregos verdes"],
      third: ["Empoderamento comunitário", "Educação ambiental", "Cidadania ativa"]
    },
    implementationTime: { min: 8, max: 24 },
    riskReduction: 45,
    economicMultiplier: 3.4,
    socialImpact: 4.6
  },
  {
    id: "san-164",
    name: "Sensores de pH e cloro em redes",
    sector: "Saneamento e Saúde Pública",
    category: "Monitoramento & Qualidade da Água",
    description: "Sistema de sensores para monitoramento contínuo de pH e cloro residual",
    typicalInvestment: { min: 120000, max: 700000 },
    expectedBenefits: {
      first: ["Qualidade garantida", "Ajuste automatizado", "Prevenção de contaminação"],
      second: ["Eficiência operacional", "Redução de desperdícios", "Otimização de processos"],
      third: ["Confiança do consumidor", "Saúde pública", "Excelência em serviços"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 65,
    economicMultiplier: 4.6,
    socialImpact: 4.3
  },
  {
    id: "san-165",
    name: "Poços de teste sanitário para água subterrânea",
    sector: "Saneamento e Saúde Pública",
    category: "Monitoramento & Qualidade da Água",
    description: "Rede de poços de monitoramento para avaliar qualidade da água subterrânea",
    typicalInvestment: { min: 150000, max: 800000 },
    expectedBenefits: {
      first: ["Proteção de aquíferos", "Detecção de contaminação", "Gestão sustentável"],
      second: ["Segurança hídrica", "Valorização de recursos", "Planejamento hídrico"],
      third: ["Patrimônio hídrico", "Gerações futuras", "Sustentabilidade ambiental"]
    },
    implementationTime: { min: 8, max: 24 },
    riskReduction: 70,
    economicMultiplier: 4.1,
    socialImpact: 4.4
  },

  // 🔬 D. Educação, Governança e Capacitação (241–300)
  {
    id: "san-241",
    name: "Oficinas sobre saneamento e higiene",
    sector: "Saneamento e Saúde Pública",
    category: "Educação, Governança e Capacitação",
    description: "Programa educativo comunitário sobre práticas de saneamento e higiene",
    typicalInvestment: { min: 30000, max: 200000 },
    expectedBenefits: {
      first: ["Redução de doenças", "Melhoria de práticas", "Prevenção de epidemias"],
      second: ["Economia em saúde pública", "Produtividade aumentada", "Desenvolvimento local"],
      third: ["Empoderamento comunitário", "Mudança comportamental", "Saúde coletiva"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 50,
    economicMultiplier: 5.8,
    socialImpact: 4.9
  },
  {
    id: "san-242",
    name: "Cursos online de infraestrutura verde",
    sector: "Saneamento e Saúde Pública",
    category: "Educação, Governança e Capacitação",
    description: "Plataforma de educação digital sobre tecnologias verdes em saneamento",
    typicalInvestment: { min: 80000, max: 400000 },
    expectedBenefits: {
      first: ["Capacitação técnica", "Disseminação de conhecimento", "Padronização de práticas"],
      second: ["Economia em treinamentos", "Inovação local", "Empreendedorismo verde"],
      third: ["Educação continuada", "Rede de especialistas", "Sustentabilidade"]
    },
    implementationTime: { min: 8, max: 24 },
    riskReduction: 35,
    economicMultiplier: 3.6,
    socialImpact: 4.2
  },
  {
    id: "san-243",
    name: "Guias comunitários de instalação sanitária",
    sector: "Saneamento e Saúde Pública",
    category: "Educação, Governança e Capacitação",
    description: "Manuais práticos para instalação e manutenção de sistemas sanitários",
    typicalInvestment: { min: 25000, max: 150000 },
    expectedBenefits: {
      first: ["Autonomia técnica", "Instalações corretas", "Manutenção adequada"],
      second: ["Economia em serviços", "Empreendedorismo local", "Qualidade das instalações"],
      third: ["Capacitação comunitária", "Autogestão", "Sustentabilidade técnica"]
    },
    implementationTime: { min: 4, max: 12 },
    riskReduction: 40,
    economicMultiplier: 4.1,
    socialImpact: 4.5
  },
  {
    id: "san-244",
    name: "Programas escolares de cidadania sanitária",
    sector: "Saneamento e Saúde Pública",
    category: "Educação, Governança e Capacitação",
    description: "Currículo escolar integrado sobre direitos e deveres em saneamento",
    typicalInvestment: { min: 50000, max: 300000 },
    expectedBenefits: {
      first: ["Formação de consciência", "Práticas preventivas", "Multiplicação de conhecimento"],
      second: ["Economia em saúde futura", "Desenvolvimento humano", "Inovação educacional"],
      third: ["Cidadania ativa", "Transformação geracional", "Cultura sanitária"]
    },
    implementationTime: { min: 12, max: 36 },
    riskReduction: 45,
    economicMultiplier: 3.8,
    socialImpact: 4.8
  },
  {
    id: "san-245",
    name: "Feira municipal de soluções sustentáveis",
    sector: "Saneamento e Saúde Pública",
    category: "Educação, Governança e Capacitação",
    description: "Evento anual para apresentação e troca de tecnologias sustentáveis",
    typicalInvestment: { min: 40000, max: 250000 },
    expectedBenefits: {
      first: ["Disseminação de inovações", "Networking técnico", "Demonstrações práticas"],
      second: ["Economia de escala", "Novos negócios", "Atração de investimentos"],
      third: ["Cultura de inovação", "Participação cidadã", "Desenvolvimento regional"]
    },
    implementationTime: { min: 6, max: 12 },
    riskReduction: 30,
    economicMultiplier: 2.9,
    socialImpact: 4.3
  }
];
