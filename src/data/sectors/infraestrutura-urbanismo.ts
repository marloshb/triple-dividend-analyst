
import { AdaptiveProjectTemplate } from "@/types/climate";

export const infraestruturaUrbanismoProjects: AdaptiveProjectTemplate[] = [
  // 🌧️ A. Drenagem, Gestão de Águas Pluviais & Infraestrutura Azul (1–80)
  {
    id: "inf-001",
    name: "Bacias de detenção pluvial urbanas",
    sector: "Infraestrutura e Urbanismo",
    category: "Drenagem, Gestão de Águas Pluviais & Infraestrutura Azul",
    description: "Bacias construídas para reter temporariamente águas pluviais e reduzir enchentes urbanas",
    typicalInvestment: { min: 500000, max: 5000000 },
    expectedBenefits: {
      first: ["Redução de 80% nas enchentes", "Proteção de infraestrutura urbana", "Controle do escoamento superficial"],
      second: ["Valorização imobiliária", "Redução de danos por inundação", "Economia em obras emergenciais"],
      third: ["Melhoria da qualidade de vida", "Espaços de lazer urbano", "Educação ambiental"]
    },
    implementationTime: { min: 12, max: 36 },
    riskReduction: 75,
    economicMultiplier: 4.2,
    socialImpact: 4.1
  },
  {
    id: "inf-002",
    name: "Jardins de chuva (rain gardens)",
    sector: "Infraestrutura e Urbanismo",
    category: "Drenagem, Gestão de Águas Pluviais & Infraestrutura Azul",
    description: "Jardins especialmente projetados para filtrar e infiltrar águas pluviais urbanas",
    typicalInvestment: { min: 30000, max: 200000 },
    expectedBenefits: {
      first: ["Controle de inundações locais", "Redução da velocidade do escoamento", "Filtração natural"],
      second: ["Valorização paisagística", "Redução de custos de drenagem", "Turismo urbano"],
      third: ["Biodiversidade urbana", "Qualidade do ar", "Bem-estar da população"]
    },
    implementationTime: { min: 3, max: 12 },
    riskReduction: 45,
    economicMultiplier: 2.8,
    socialImpact: 4.1
  },
  {
    id: "inf-003",
    name: "Pavimentos permeáveis em ruas",
    sector: "Infraestrutura e Urbanismo",
    category: "Drenagem, Gestão de Águas Pluviais & Infraestrutura Azul",
    description: "Pavimentação que permite infiltração de água da chuva no solo urbano",
    typicalInvestment: { min: 100000, max: 2000000 },
    expectedBenefits: {
      first: ["Redução de enchentes urbanas", "Controle do escoamento superficial", "Proteção de infraestrutura"],
      second: ["Redução de custos de drenagem", "Valorização imobiliária", "Economia em manutenção"],
      third: ["Melhoria da qualidade da água", "Conforto urbano", "Sustentabilidade"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 60,
    economicMultiplier: 3.4,
    socialImpact: 3.9
  },
  {
    id: "inf-004",
    name: "Calçadas permeáveis com vegetação",
    sector: "Infraestrutura e Urbanismo",
    category: "Drenagem, Gestão de Águas Pluviais & Infraestrutura Azul",
    description: "Calçadas ecológicas que permitem infiltração e incluem vegetação urbana",
    typicalInvestment: { min: 80000, max: 800000 },
    expectedBenefits: {
      first: ["Redução do escoamento superficial", "Infiltração de águas pluviais", "Menor aquecimento urbano"],
      second: ["Valorização do bairro", "Redução de custos de manutenção", "Economia em drenagem"],
      third: ["Melhoria estética urbana", "Biodiversidade local", "Conforto térmico para pedestres"]
    },
    implementationTime: { min: 4, max: 15 },
    riskReduction: 50,
    economicMultiplier: 3.1,
    socialImpact: 4.2
  },
  {
    id: "inf-005",
    name: "Canais de infiltração em parques",
    sector: "Infraestrutura e Urbanismo",
    category: "Drenagem, Gestão de Águas Pluviais & Infraestrutura Azul",
    description: "Canais vegetados em parques urbanos para infiltração e retenção de águas pluviais",
    typicalInvestment: { min: 150000, max: 1200000 },
    expectedBenefits: {
      first: ["Controle natural de enchentes", "Recarga de aquíferos", "Filtração de poluentes"],
      second: ["Valorização do parque", "Turismo ecológico", "Redução de custos de drenagem"],
      third: ["Habitat para fauna urbana", "Educação ambiental", "Lazer contemplativo"]
    },
    implementationTime: { min: 8, max: 24 },
    riskReduction: 65,
    economicMultiplier: 3.6,
    socialImpact: 4.4
  },

  // 🏙️ B. Infraestrutura Verde & Arborização (81–160)
  {
    id: "inf-081",
    name: "Sistemas de arboreto em vias principais",
    sector: "Infraestrutura e Urbanismo",
    category: "Infraestrutura Verde & Arborização",
    description: "Plantio sistemático de árvores em vias principais para conforto térmico e qualidade do ar",
    typicalInvestment: { min: 200000, max: 1500000 },
    expectedBenefits: {
      first: ["Redução de temperatura urbana", "Melhoria da qualidade do ar", "Proteção contra ventos"],
      second: ["Valorização imobiliária", "Economia energética", "Turismo urbano"],
      third: ["Qualidade de vida urbana", "Biodiversidade", "Patrimônio paisagístico"]
    },
    implementationTime: { min: 12, max: 36 },
    riskReduction: 55,
    economicMultiplier: 3.8,
    socialImpact: 4.6
  },
  {
    id: "inf-082",
    name: "Arborização de ruas com espécies nativas",
    sector: "Infraestrutura e Urbanismo",
    category: "Infraestrutura Verde & Arborização",
    description: "Plantio de árvores nativas adaptadas ao clima local em ruas urbanas",
    typicalInvestment: { min: 120000, max: 800000 },
    expectedBenefits: {
      first: ["Adaptação climática local", "Redução de ilhas de calor", "Resistência a pragas"],
      second: ["Menor custo de manutenção", "Valorização do bairro", "Economia em climatização"],
      third: ["Conservação da flora nativa", "Educação ambiental", "Identidade local"]
    },
    implementationTime: { min: 8, max: 24 },
    riskReduction: 50,
    economicMultiplier: 3.4,
    socialImpact: 4.3
  },
  {
    id: "inf-083",
    name: "Redes urbanas de corredores verdes",
    sector: "Infraestrutura e Urbanismo",
    category: "Infraestrutura Verde & Arborização",
    description: "Conexão de áreas verdes urbanas através de corredores vegetados",
    typicalInvestment: { min: 300000, max: 2500000 },
    expectedBenefits: {
      first: ["Conectividade ecológica", "Controle de temperatura", "Redução de poluição"],
      second: ["Valorização urbana integrada", "Ecoturismo urbano", "Economia verde"],
      third: ["Mobilidade sustentável", "Biodiversidade urbana", "Qualidade de vida"]
    },
    implementationTime: { min: 18, max: 48 },
    riskReduction: 60,
    economicMultiplier: 4.1,
    socialImpact: 4.7
  },
  {
    id: "inf-084",
    name: "Parques de resfriamento urbano",
    sector: "Infraestrutura e Urbanismo",
    category: "Infraestrutura Verde & Arborização",
    description: "Parques estrategicamente localizados para reduzir temperatura urbana",
    typicalInvestment: { min: 500000, max: 5000000 },
    expectedBenefits: {
      first: ["Redução significativa de temperatura", "Refúgio contra calor extremo", "Melhoria da qualidade do ar"],
      second: ["Valorização imobiliária regional", "Turismo urbano", "Economia em saúde pública"],
      third: ["Bem-estar comunitário", "Atividades recreativas", "Coesão social"]
    },
    implementationTime: { min: 24, max: 60 },
    riskReduction: 70,
    economicMultiplier: 4.5,
    socialImpact: 4.8
  },
  {
    id: "inf-085",
    name: "Biodiversificação de calçadas",
    sector: "Infraestrutura e Urbanismo",
    category: "Infraestrutura Verde & Arborização",
    description: "Integração de vegetação diversa em calçadas urbanas para aumentar biodiversidade",
    typicalInvestment: { min: 60000, max: 400000 },
    expectedBenefits: {
      first: ["Habitat para polinizadores", "Redução de temperatura local", "Filtração de poluentes"],
      second: ["Valorização estética", "Redução de manutenção", "Economia em paisagismo"],
      third: ["Educação ambiental urbana", "Conexão com natureza", "Identidade do bairro"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 35,
    economicMultiplier: 2.9,
    socialImpact: 4.1
  },

  // 🚗 C. Mobilidade Resiliente (161–240)
  {
    id: "inf-161",
    name: "Ciclovias elevadas com drenagem",
    sector: "Infraestrutura e Urbanismo",
    category: "Mobilidade Resiliente",
    description: "Ciclovias elevadas com sistema de drenagem integrado para mobilidade sustentável",
    typicalInvestment: { min: 800000, max: 5000000 },
    expectedBenefits: {
      first: ["Proteção contra inundações", "Mobilidade contínua", "Segurança dos ciclistas"],
      second: ["Redução de emissões", "Economia em transporte", "Turismo urbano"],
      third: ["Saúde pública", "Mobilidade inclusiva", "Qualidade urbana"]
    },
    implementationTime: { min: 18, max: 48 },
    riskReduction: 65,
    economicMultiplier: 4.3,
    socialImpact: 4.5
  },
  {
    id: "inf-162",
    name: "Pontes cicloviárias com vegetação",
    sector: "Infraestrutura e Urbanismo",
    category: "Mobilidade Resiliente",
    description: "Pontes exclusivas para ciclistas e pedestres integradas com vegetação urbana",
    typicalInvestment: { min: 600000, max: 3000000 },
    expectedBenefits: {
      first: ["Conectividade segura", "Proteção contra intempéries", "Redução de acidentes"],
      second: ["Valorização urbana", "Economia em saúde", "Turismo"],
      third: ["Mobilidade ativa", "Qualidade de vida", "Patrimônio urbano"]
    },
    implementationTime: { min: 12, max: 36 },
    riskReduction: 55,
    economicMultiplier: 3.9,
    socialImpact: 4.4
  },
  {
    id: "inf-163",
    name: "Terminais de ônibus resilientes",
    sector: "Infraestrutura e Urbanismo",
    category: "Mobilidade Resiliente",
    description: "Terminais de transporte público adaptados para eventos climáticos extremos",
    typicalInvestment: { min: 1000000, max: 8000000 },
    expectedBenefits: {
      first: ["Continuidade do transporte", "Proteção dos usuários", "Resistência a desastres"],
      second: ["Eficiência operacional", "Redução de perdas", "Desenvolvimento urbano"],
      third: ["Mobilidade universal", "Conforto urbano", "Integração social"]
    },
    implementationTime: { min: 24, max: 60 },
    riskReduction: 75,
    economicMultiplier: 5.1,
    socialImpact: 4.6
  },
  {
    id: "inf-164",
    name: "Pavimento solar em estações",
    sector: "Infraestrutura e Urbanismo",
    category: "Mobilidade Resiliente",
    description: "Pavimentos com células fotovoltaicas integradas em estações de transporte",
    typicalInvestment: { min: 400000, max: 2000000 },
    expectedBenefits: {
      first: ["Geração de energia limpa", "Redução de custos energéticos", "Autonomia energética"],
      second: ["Economia operacional", "Inovação tecnológica", "Competitividade"],
      third: ["Educação tecnológica", "Sustentabilidade exemplar", "Modernização urbana"]
    },
    implementationTime: { min: 8, max: 24 },
    riskReduction: 45,
    economicMultiplier: 4.7,
    socialImpact: 4.0
  },
  {
    id: "inf-165",
    name: "Estações de recarga solar para bicicletas elétricas",
    sector: "Infraestrutura e Urbanismo",
    category: "Mobilidade Resiliente",
    description: "Pontos de recarga solar para bicicletas elétricas em locais estratégicos",
    typicalInvestment: { min: 80000, max: 500000 },
    expectedBenefits: {
      first: ["Mobilidade sustentável", "Redução de emissões", "Autonomia energética"],
      second: ["Economia em transporte", "Novos negócios", "Turismo sustentável"],
      third: ["Saúde pública", "Inclusão digital", "Inovação urbana"]
    },
    implementationTime: { min: 4, max: 12 },
    riskReduction: 30,
    economicMultiplier: 3.6,
    socialImpact: 4.2
  },

  // 🏗️ D. Infraestrutura Física & Construções Adaptativas (241–300)
  {
    id: "inf-241",
    name: "Calçadas antitérmicas",
    sector: "Infraestrutura e Urbanismo",
    category: "Infraestrutura Física & Construções Adaptativas",
    description: "Calçadas com materiais especiais que reduzem absorção e reflexão de calor",
    typicalInvestment: { min: 150000, max: 1000000 },
    expectedBenefits: {
      first: ["Redução de temperatura superficial", "Conforto térmico", "Prevenção de queimaduras"],
      second: ["Valorização imobiliária", "Economia energética", "Durabilidade superior"],
      third: ["Bem-estar dos pedestres", "Acessibilidade térmica", "Qualidade urbana"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 50,
    economicMultiplier: 3.2,
    socialImpact: 4.3
  },
  {
    id: "inf-242",
    name: "Coberturas ventiladas para estações",
    sector: "Infraestrutura e Urbanismo",
    category: "Infraestrutura Física & Construções Adaptativas",
    description: "Sistemas de cobertura com ventilação natural para estações de transporte",
    typicalInvestment: { min: 200000, max: 1500000 },
    expectedBenefits: {
      first: ["Conforto térmico", "Ventilação natural", "Proteção contra intempéries"],
      second: ["Redução de custos energéticos", "Durabilidade", "Eficiência operacional"],
      third: ["Experiência do usuário", "Sustentabilidade", "Design urbano"]
    },
    implementationTime: { min: 8, max: 24 },
    riskReduction: 45,
    economicMultiplier: 3.5,
    socialImpact: 4.1
  },
  {
    id: "inf-243",
    name: "Torre de resfriamento passivo",
    sector: "Infraestrutura e Urbanismo",
    category: "Infraestrutura Física & Construções Adaptativas",
    description: "Torres que utilizam princípios físicos para resfriamento natural do ambiente urbano",
    typicalInvestment: { min: 300000, max: 2000000 },
    expectedBenefits: {
      first: ["Redução significativa de temperatura", "Resfriamento sem energia", "Ventilação urbana"],
      second: ["Economia energética", "Inovação arquitetônica", "Atração turística"],
      third: ["Conforto urbano", "Sustentabilidade exemplar", "Identidade arquitetônica"]
    },
    implementationTime: { min: 12, max: 36 },
    riskReduction: 60,
    economicMultiplier: 4.2,
    socialImpact: 4.4
  },
  {
    id: "inf-244",
    name: "Refúgios públicos contra calor",
    sector: "Infraestrutura e Urbanismo",
    category: "Infraestrutura Física & Construções Adaptativas",
    description: "Espaços públicos climatizados para proteção durante ondas de calor extremo",
    typicalInvestment: { min: 100000, max: 800000 },
    expectedBenefits: {
      first: ["Proteção contra ondas de calor", "Redução de mortalidade", "Refúgio seguro"],
      second: ["Centro comunitário multifuncional", "Economia em saúde pública", "Atração de recursos"],
      third: ["Inclusão social", "Bem-estar comunitário", "Solidariedade urbana"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 70,
    economicMultiplier: 3.8,
    socialImpact: 4.8
  },
  {
    id: "inf-245",
    name: "Pontes adaptadas ao aumento do nível de rios",
    sector: "Infraestrutura e Urbanismo",
    category: "Infraestrutura Física & Construções Adaptativas",
    description: "Pontes projetadas para resistir ao aumento do nível de rios devido a mudanças climáticas",
    typicalInvestment: { min: 2000000, max: 15000000 },
    expectedBenefits: {
      first: ["Continuidade da conectividade", "Resistência a enchentes", "Proteção de infraestrutura"],
      second: ["Manutenção do fluxo econômico", "Valorização regional", "Desenvolvimento"],
      third: ["Conectividade comunitária", "Segurança coletiva", "Patrimônio resiliente"]
    },
    implementationTime: { min: 24, max: 72 },
    riskReduction: 85,
    economicMultiplier: 6.2,
    socialImpact: 4.7
  }
];
