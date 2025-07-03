
import { AdaptiveProjectTemplate } from "@/types/climate";

// 🏥 A. Infraestrutura de Saúde Resiliente (1-80)
const infraestruturaSaudeProjects: AdaptiveProjectTemplate[] = [
  {
    id: "sau-001",
    name: "Clínicas com sistema solar de backup",
    sector: "Saúde e Bem Estar",
    category: "Infraestrutura de Saúde Resiliente",
    description: "Sistemas de energia solar fotovoltaica para garantir funcionamento contínuo de clínicas em eventos climáticos extremos",
    typicalInvestment: { min: 150000, max: 800000 },
    expectedBenefits: {
      first: ["Continuidade de atendimento médico", "Proteção de vacinas e medicamentos", "Redução de mortalidade por falta de energia"],
      second: ["Economia de R$ 60k/ano em energia", "Aumento de 40% na confiabilidade do serviço", "Geração de 8 empregos técnicos"],
      third: ["Melhoria do acesso à saúde", "Capacitação técnica local", "Modelo replicável para rede pública"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 85,
    economicMultiplier: 4.2,
    socialImpact: 4.8
  },
  {
    id: "sau-002",
    name: "Postos móveis climatizados",
    sector: "Saúde e Bem Estar",
    category: "Infraestrutura de Saúde Resiliente",
    description: "Unidades móveis de saúde com climatização eficiente para atendimento em ondas de calor",
    typicalInvestment: { min: 200000, max: 600000 },
    expectedBenefits: {
      first: ["Atendimento em ondas de calor", "Proteção de medicamentos termolábeis", "Redução de stress térmico em pacientes"],
      second: ["Cobertura de 5000+ pessoas/mês", "Economia de R$ 40k/ano em deslocamentos", "12 empregos diretos"],
      third: ["Acesso à saúde em áreas remotas", "Qualidade de vida melhorada", "Equidade em saúde"]
    },
    implementationTime: { min: 4, max: 12 },
    riskReduction: 70,
    economicMultiplier: 3.8,
    socialImpact: 4.6
  },
  {
    id: "sau-003",
    name: "Unidades flutuantes para alagamentos",
    sector: "Saúde e Bem Estar",
    category: "Infraestrutura de Saúde Resiliente",
    description: "Postos de saúde flutuantes para atendimento durante enchentes e alagamentos",
    typicalInvestment: { min: 300000, max: 1200000 },
    expectedBenefits: {
      first: ["Continuidade assistencial em enchentes", "Evacuação médica segura", "Prevenção de surtos pós-alagamento"],
      second: ["Atendimento de 200+ famílias/evento", "Economia de R$ 100k em evacuações", "15 empregos especializados"],
      third: ["Redução de mortalidade", "Dignidade no atendimento", "Inovação em saúde pública"]
    },
    implementationTime: { min: 8, max: 24 },
    riskReduction: 80,
    economicMultiplier: 4.5,
    socialImpact: 4.9
  },
  {
    id: "sau-004",
    name: "Salas de espera com resfriamento passivo",
    sector: "Saúde e Bem Estar",
    category: "Infraestrutura de Saúde Resiliente",
    description: "Redesign de salas de espera com técnicas de resfriamento passivo e ventilação natural",
    typicalInvestment: { min: 80000, max: 300000 },
    expectedBenefits: {
      first: ["Conforto térmico em ondas de calor", "Redução de stress dos pacientes", "Menor propagação de doenças respiratórias"],
      second: ["Economia de 60% em climatização", "Redução de 30% no tempo de espera", "Melhoria na satisfação dos usuários"],
      third: ["Bem-estar dos pacientes", "Ambiente terapêutico melhorado", "Sustentabilidade ambiental"]
    },
    implementationTime: { min: 3, max: 9 },
    riskReduction: 55,
    economicMultiplier: 3.2,
    socialImpact: 4.3
  },
  {
    id: "sau-005",
    name: "Hospitais com telhado verde",
    sector: "Saúde e Bem Estar",
    category: "Infraestrutura de Saúde Resiliente",
    description: "Implementação de telhados verdes em hospitais para redução de temperatura e melhoria do ambiente",
    typicalInvestment: { min: 250000, max: 1000000 },
    expectedBenefits: {
      first: ["Redução de 5°C na temperatura interna", "Melhoria da qualidade do ar", "Controle de enchentes urbanas"],
      second: ["Economia de R$ 80k/ano em climatização", "Aumento de 25% na satisfação", "Valorização imobiliária"],
      third: ["Ambiente terapêutico", "Biodiversidade urbana", "Educação ambiental para pacientes"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 60,
    economicMultiplier: 3.7,
    socialImpact: 4.4
  }
];

// 🌡️ B. Prevenção e Monitoramento de Saúde (81-160)
const prevencaoMonitoramentoProjects: AdaptiveProjectTemplate[] = [
  {
    id: "sau-081",
    name: "Sistema de alerta precoce para ondas de calor urbanas",
    sector: "Saúde e Bem Estar",
    category: "Prevenção e Monitoramento de Saúde",
    description: "Rede de sensores e plataforma de alertas para prevenção de doenças relacionadas ao calor extremo",
    typicalInvestment: { min: 180000, max: 900000 },
    expectedBenefits: {
      first: ["Redução de 60% nas internações por calor", "Prevenção de mortes por stress térmico", "Alertas 48h antecipados"],
      second: ["Economia de R$ 500k/ano em internações", "Eficiência no sistema de saúde", "Tecnologia replicável"],
      third: ["Proteção de populações vulneráveis", "Conscientização sobre riscos climáticos", "Saúde pública preventiva"]
    },
    implementationTime: { min: 8, max: 24 },
    riskReduction: 75,
    economicMultiplier: 5.2,
    socialImpact: 4.7
  },
  {
    id: "sau-082",
    name: "Monitoramento contínuo de doenças sensíveis ao clima",
    sector: "Saúde e Bem Estar",
    category: "Prevenção e Monitoramento de Saúde",
    description: "Sistema integrado de vigilância epidemiológica com dados climáticos em tempo real",
    typicalInvestment: { min: 250000, max: 1200000 },
    expectedBenefits: {
      first: ["Detecção precoce de surtos", "Resposta rápida a epidemias", "Mapeamento de riscos por região"],
      second: ["Redução de 40% nos custos de surtos", "Eficiência na alocação de recursos", "Pesquisa aplicada"],
      third: ["Proteção coletiva da saúde", "Transparência em saúde pública", "Conhecimento científico"]
    },
    implementationTime: { min: 12, max: 36 },
    riskReduction: 70,
    economicMultiplier: 4.8,
    socialImpact: 4.6
  },
  {
    id: "sau-083",
    name: "Plataforma de dados geoespaciais de saúde e clima",
    sector: "Saúde e Bem Estar",
    category: "Prevenção e Monitoramento de Saúde",
    description: "Sistema GIS integrado para análise espacial de riscos climáticos à saúde",
    typicalInvestment: { min: 300000, max: 1500000 },
    expectedBenefits: {
      first: ["Mapeamento preciso de vulnerabilidades", "Planejamento baseado em evidências", "Identificação de hotspots"],
      second: ["Otimização de 50% nos recursos", "Decisões informadas", "Inovação em saúde pública"],
      third: ["Equidade no acesso à saúde", "Planejamento participativo", "Transparência de dados"]
    },
    implementationTime: { min: 15, max: 30 },
    riskReduction: 65,
    economicMultiplier: 4.3,
    socialImpact: 4.5
  },
  {
    id: "sau-084",
    name: "Sensores de qualidade do ar em escolas e hospitais",
    sector: "Saúde e Bem Estar",
    category: "Prevenção e Monitoramento de Saúde",
    description: "Rede de monitoramento da qualidade do ar em instituições sensíveis",
    typicalInvestment: { min: 120000, max: 600000 },
    expectedBenefits: {
      first: ["Proteção de crianças e pacientes", "Alertas automáticos de poluição", "Dados para políticas públicas"],
      second: ["Redução de 30% em doenças respiratórias", "Economia em tratamentos", "Produtividade escolar"],
      third: ["Saúde de grupos vulneráveis", "Educação ambiental", "Consciência sobre poluição"]
    },
    implementationTime: { min: 6, max: 15 },
    riskReduction: 60,
    economicMultiplier: 3.9,
    socialImpact: 4.4
  },
  {
    id: "sau-085",
    name: "Mapas de vulnerabilidade climática por bairro",
    sector: "Saúde e Bem Estar",
    category: "Prevenção e Monitoramento de Saúde",
    description: "Mapeamento detalhado de vulnerabilidades climáticas para planejamento de saúde territorial",
    typicalInvestment: { min: 100000, max: 500000 },
    expectedBenefits: {
      first: ["Identificação de áreas de risco", "Priorização de intervenções", "Prevenção de eventos adversos"],
      second: ["Alocação eficiente de recursos", "Planejamento estratégico", "Captação de recursos direcionada"],
      third: ["Justiça ambiental", "Participação comunitária", "Empoderamento local"]
    },
    implementationTime: { min: 8, max: 18 },
    riskReduction: 55,
    economicMultiplier: 3.6,
    socialImpact: 4.7
  }
];

// 🧘‍♀️ C. Promoção do Bem-Estar Comunitário (161-240)
const promocaoBemEstarProjects: AdaptiveProjectTemplate[] = [
  {
    id: "sau-161",
    name: "Hortas comunitárias medicinais adaptadas ao clima",
    sector: "Saúde e Bem Estar",
    category: "Promoção do Bem-Estar Comunitário",
    description: "Cultivo comunitário de plantas medicinais com técnicas adaptadas às mudanças climáticas",
    typicalInvestment: { min: 50000, max: 200000 },
    expectedBenefits: {
      first: ["Segurança alimentar medicinal", "Resiliência a secas e enchentes", "Autonomia terapêutica"],
      second: ["Economia de R$ 30k/ano em medicamentos", "Geração de renda", "Produtos orgânicos certificados"],
      third: ["Conhecimento tradicional preservado", "Coesão comunitária", "Educação em saúde natural"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 45,
    economicMultiplier: 3.4,
    socialImpact: 4.8
  },
  {
    id: "sau-162",
    name: "Trilhas de bem-estar em áreas urbanas verdes",
    sector: "Saúde e Bem Estar",
    category: "Promoção do Bem-Estar Comunitário",
    description: "Percursos arborizados com equipamentos de exercício e pontos de contemplação",
    typicalInvestment: { min: 80000, max: 400000 },
    expectedBenefits: {
      first: ["Redução de ilhas de calor", "Exercício físico seguro", "Melhoria da qualidade do ar"],
      second: ["Valorização imobiliária", "Turismo de bem-estar", "Economia da saúde"],
      third: ["Saúde mental comunitária", "Interação social", "Conexão com a natureza"]
    },
    implementationTime: { min: 6, max: 15 },
    riskReduction: 40,
    economicMultiplier: 3.1,
    socialImpact: 4.6
  },
  {
    id: "sau-163",
    name: "Programas de yoga e meditação em centros comunitários",
    sector: "Saúde e Bem Estar",
    category: "Promoção do Bem-Estar Comunitário",
    description: "Atividades regulares de yoga e meditação em espaços climatizados comunitários",
    typicalInvestment: { min: 30000, max: 150000 },
    expectedBenefits: {
      first: ["Redução do stress climático", "Fortalecimento da resiliência emocional", "Práticas de autocuidado"],
      second: ["Redução de 25% em consultas de saúde mental", "Economia em medicamentos", "Instrutores capacitados"],
      third: ["Bem-estar coletivo", "Inclusão social", "Práticas integrativas validadas"]
    },
    implementationTime: { min: 3, max: 9 },
    riskReduction: 35,
    economicMultiplier: 2.8,
    socialImpact: 4.5
  },
  {
    id: "sau-164",
    name: "Construção de praças com sombreamento natural",
    sector: "Saúde e Bem Estar",
    category: "Promoção do Bem-Estar Comunitário",
    description: "Praças públicas com arborização estratégica para conforto térmico e convivência",
    typicalInvestment: { min: 150000, max: 800000 },
    expectedBenefits: {
      first: ["Redução de 6°C na temperatura", "Espaços seguros para exercício", "Proteção contra radiação UV"],
      second: ["Valorização do entorno", "Atividade física aumentada", "Comércio local estimulado"],
      third: ["Convivência comunitária", "Saúde mental melhorada", "Educação ambiental"]
    },
    implementationTime: { min: 9, max: 24 },
    riskReduction: 50,
    economicMultiplier: 3.3,
    socialImpact: 4.7
  },
  {
    id: "sau-165",
    name: "Ambientes de lazer com infraestrutura resiliente ao calor",
    sector: "Saúde e Bem Estar",
    category: "Promoção do Bem-Estar Comunitário",
    description: "Parques e centros de lazer com design bioclimático e resfriamento passivo",
    typicalInvestment: { min: 200000, max: 1000000 },
    expectedBenefits: {
      first: ["Espaços utilizáveis em ondas de calor", "Refúgio térmico comunitário", "Atividades seguras"],
      second: ["Aumento de 60% no uso dos espaços", "Turismo local", "Geração de empregos"],
      third: ["Qualidade de vida urbana", "Inclusão de todas as idades", "Modelo de sustentabilidade"]
    },
    implementationTime: { min: 12, max: 30 },
    riskReduction: 55,
    economicMultiplier: 3.7,
    socialImpact: 4.6
  }
];

// 🧩 D. Capacitação, Governança e Educação em Saúde (241-300)
const capacitacaoGovernancaProjects: AdaptiveProjectTemplate[] = [
  {
    id: "sau-241",
    name: "Programas de capacitação em saúde climática para profissionais da atenção básica",
    sector: "Saúde e Bem Estar",
    category: "Capacitação, Governança e Educação em Saúde",
    description: "Formação continuada de profissionais de saúde em adaptação e mitigação climática",
    typicalInvestment: { min: 120000, max: 600000 },
    expectedBenefits: {
      first: ["Diagnóstico precoce de doenças climáticas", "Protocolos adaptados", "Resposta qualificada"],
      second: ["Redução de 30% em internações evitáveis", "Eficiência no sistema", "Pesquisa aplicada"],
      third: ["Qualidade do cuidado", "Capacitação profissional", "Inovação em saúde pública"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 60,
    economicMultiplier: 4.1,
    socialImpact: 4.5
  },
  {
    id: "sau-242",
    name: "Centros regionais de excelência em saúde e clima",
    sector: "Saúde e Bem Estar",
    category: "Capacitação, Governança e Educação em Saúde",
    description: "Hubs de conhecimento e inovação em saúde climática para múltiplos municípios",
    typicalInvestment: { min: 800000, max: 3000000 },
    expectedBenefits: {
      first: ["Referência técnica regional", "Protocolos padronizados", "Resposta coordenada a emergências"],
      second: ["Economia de escala", "Pesquisa e desenvolvimento", "Captação de recursos"],
      third: ["Excelência em saúde pública", "Formação de especialistas", "Liderança científica"]
    },
    implementationTime: { min: 18, max: 48 },
    riskReduction: 70,
    economicMultiplier: 4.8,
    socialImpact: 4.7
  },
  {
    id: "sau-243",
    name: "Formação de brigadas comunitárias de resposta em saúde",
    sector: "Saúde e Bem Estar",
    category: "Capacitação, Governança e Educação em Saúde",
    description: "Capacitação de lideranças locais para primeiros socorros e resposta a emergências climáticas",
    typicalInvestment: { min: 80000, max: 300000 },
    expectedBenefits: {
      first: ["Resposta rápida a emergências", "Primeiros socorros qualificados", "Rede de apoio local"],
      second: ["Redução de 40% no tempo de resposta", "Economia em ambulâncias", "Empregos locais"],
      third: ["Empoderamento comunitário", "Coesão social", "Autonomia em saúde"]
    },
    implementationTime: { min: 4, max: 12 },
    riskReduction: 65,
    economicMultiplier: 3.8,
    socialImpact: 4.8
  },
  {
    id: "sau-244",
    name: "Cursos online sobre saúde pública e mudanças climáticas",
    sector: "Saúde e Bem Estar",
    category: "Capacitação, Governança e Educação em Saúde",
    description: "Plataforma digital de educação continuada em saúde climática para profissionais",
    typicalInvestment: { min: 150000, max: 800000 },
    expectedBenefits: {
      first: ["Capacitação massiva", "Atualização constante", "Padronização de conhecimento"],
      second: ["Redução de custos de treinamento", "Escalabilidade", "Certificação profissional"],
      third: ["Acesso democrático ao conhecimento", "Inovação educacional", "Rede de aprendizagem"]
    },
    implementationTime: { min: 8, max: 18 },
    riskReduction: 45,
    economicMultiplier: 5.2,
    socialImpact: 4.3
  },
  {
    id: "sau-245",
    name: "Oficinas de planejamento territorial com foco em saúde",
    sector: "Saúde e Bem Estar",
    category: "Capacitação, Governança e Educação em Saúde",
    description: "Capacitação de gestores em planejamento urbano saudável e resiliente",
    typicalInvestment: { min: 100000, max: 500000 },
    expectedBenefits: {
      first: ["Planejamento urbano saudável", "Prevenção de riscos", "Integração intersetorial"],
      second: ["Economia em saúde pública", "Desenvolvimento sustentável", "Atração de investimentos"],
      third: ["Cidades mais saudáveis", "Participação cidadã", "Governança colaborativa"]
    },
    implementationTime: { min: 6, max: 15 },
    riskReduction: 50,
    economicMultiplier: 3.9,
    socialImpact: 4.6
  }
];

export const saudeBemEstarProjects: AdaptiveProjectTemplate[] = [
  ...infraestruturaSaudeProjects,
  ...prevencaoMonitoramentoProjects,
  ...promocaoBemEstarProjects,
  ...capacitacaoGovernancaProjects
];
