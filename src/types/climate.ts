export interface ClimateProject {
  id: string;
  name: string;
  sector: string;
  description: string;
  investment: number;
  timeline: number; // years
  region: string;
  
  // Triple Dividend calculations
  firstDividend: {
    disasterRiskReduction: number;
    infrastructureProtection: number;
    livesProtected: number;
  };
  
  secondDividend: {
    jobsCreated: number;
    productivityGains: number;
    economicGrowth: number;
    operationalEfficiency: number;
  };
  
  thirdDividend: {
    healthBenefits: number;
    educationImpact: number;
    biodiversityValue: number;
    socialInclusion: number;
  };
}

export interface DividendCalculation {
  total: number;
  breakdown: {
    firstDividend: number;
    secondDividend: number;
    thirdDividend: number;
  };
  roi: number;
  annualReturn: number;
}

export interface FinancingSource {
  name: string;
  type: 'público' | 'privado' | 'multilateral' | 'cooperativo' | 'filantrópico';
  focus: string[];
  typical_amount: {
    min: number;
    max: number;
  };
  requirements: string[];
  contact_info?: string;
}

export interface TechnicalPartner {
  name: string;
  type: 'universidade' | 'instituto_pesquisa' | 'ong' | 'empresa_consultoria' | 'organismo_internacional';
  expertise: string[];
  location: string;
  previous_projects?: string[];
}

export interface EconomicAnalysis {
  implementation_cost: {
    total: number;
    breakdown: {
      equipment: number;
      installation: number;
      training: number;
      monitoring: number;
    };
  };
  operational_cost_annual: number;
  revenue_potential: {
    direct: number;
    indirect: number;
    co_benefits: number;
  };
  payback_period: number; // anos
  net_present_value: number;
  scalability: {
    potential: 'baixo' | 'médio' | 'alto';
    barriers: string[];
    enablers: string[];
  };
}

export interface AdaptiveProjectTemplate {
  id: string;
  name: string;
  sector: string;
  category: string;
  description: string;
  typicalInvestment: {
    min: number;
    max: number;
  };
  expectedBenefits: {
    first: string[];
    second: string[];
    third: string[];
  };
  implementationTime: {
    min: number;
    max: number;
  };
  riskReduction: number; // percentage
  economicMultiplier: number;
  socialImpact: number;
  
  // Novas propriedades para análise completa
  economicAnalysis?: EconomicAnalysis;
  financingSources?: FinancingSource[];
  technicalPartners?: TechnicalPartner[];
  
  // Métricas adicionais
  co2_reduction?: number; // toneladas CO2 eq/ano
  jobs_created?: number;
  people_benefited?: number;
  success_cases?: {
    location: string;
    year: number;
    results: string;
    lessons_learned: string;
  }[];
}

export const SECTORS = [
  "Agricultura e Recursos Hídricos",
  "Florestas e Ecossistemas", 
  "Infraestrutura e Urbanismo",
  "Saneamento e Saúde Pública",
  "Infraestrutura de Energia",
  "Transportes Resilientes",
  "Ambiente Social e Educação",
  "Engenharia Costeira e Pesca",
  "Saúde e Bem Estar",
  "Governança e Finanças Climáticas",
  "Finanças Climáticas"
] as const;

export type Sector = typeof SECTORS[number];

// Dados de financiamento e parceiros técnicos por setor
export const FINANCING_SOURCES: Record<string, FinancingSource[]> = {
  "Agricultura e Recursos Hídricos": [
    {
      name: "PRONAF - Programa Nacional de Fortalecimento da Agricultura Familiar",
      type: "público",
      focus: ["agricultura familiar", "irrigação", "sustentabilidade"],
      typical_amount: { min: 50000, max: 500000 },
      requirements: ["DAP válida", "projeto técnico", "licenças ambientais"],
      contact_info: "Banco do Brasil, Caixa Econômica Federal"
    },
    {
      name: "Banco Mundial - Climate Investment Funds",
      type: "multilateral",
      focus: ["adaptação climática", "agricultura resiliente", "recursos hídricos"],
      typical_amount: { min: 1000000, max: 50000000 },
      requirements: ["projeto nacional", "co-financiamento", "impacto demonstrável"]
    },
    {
      name: "CAF - Banco de Desenvolvimento da América Latina",
      type: "multilateral",
      focus: ["infraestrutura verde", "segurança hídrica", "adaptação"],
      typical_amount: { min: 500000, max: 20000000 },
      requirements: ["viabilidade técnica", "sustentabilidade financeira", "impacto regional"]
    }
  ],
  "Florestas e Ecossistemas": [
    {
      name: "Fundo Amazônia",
      type: "público",
      focus: ["conservação florestal", "uso sustentável", "restauração"],
      typical_amount: { min: 100000, max: 10000000 },
      requirements: ["projeto na Amazônia Legal", "impacto ambiental positivo", "participação social"]
    },
    {
      name: "Conservação Internacional",
      type: "filantrópico",
      focus: ["biodiversidade", "serviços ecossistêmicos", "comunidades"],
      typical_amount: { min: 50000, max: 2000000 },
      requirements: ["conservação comprovada", "envolvimento comunitário", "monitoramento"]
    }
  ],
  "Infraestrutura de Energia": [
    {
      name: "FINEP - Financiadora de Estudos e Projetos",
      type: "público",
      focus: ["energia renovável", "eficiência energética", "inovação"],
      typical_amount: { min: 500000, max: 10000000 },
      requirements: ["projeto inovador", "contrapartida", "viabilidade técnica"],
      contact_info: "www.finep.gov.br"
    },
    {
      name: "BNDES Finem Energia",
      type: "público",
      focus: ["energia solar", "energia eólica", "smart grids"],
      typical_amount: { min: 1000000, max: 100000000 },
      requirements: ["análise técnica", "garantias", "licenciamento ambiental"],
      contact_info: "BNDES - Linha Energia"
    },
    {
      name: "BID - Banco Interamericano de Desenvolvimento",
      type: "multilateral",
      focus: ["energia limpa", "redes inteligentes", "armazenamento"],
      typical_amount: { min: 5000000, max: 200000000 },
      requirements: ["projeto regional", "sustentabilidade", "impacto social"],
      contact_info: "www.iadb.org"
    },
    {
      name: "GEF - Global Environment Facility",
      type: "multilateral",
      focus: ["energia renovável rural", "acesso à energia", "mudanças climáticas"],
      typical_amount: { min: 1000000, max: 50000000 },
      requirements: ["benefício global", "co-financiamento", "capacitação local"]
    }
  ],
  "Transportes Resilientes": [
    {
      name: "BNDES Mobilidade Urbana",
      type: "público",
      focus: ["transporte sustentável", "infraestrutura viária", "mobilidade resiliente"],
      typical_amount: { min: 5000000, max: 200000000 },
      requirements: ["projeto executivo", "licenciamento ambiental", "viabilidade técnica"],
      contact_info: "BNDES - Linha Mobilidade Urbana"
    },
    {
      name: "Ministério das Cidades",
      type: "público",
      focus: ["infraestrutura urbana", "transporte coletivo", "ciclovias"],
      typical_amount: { min: 1000000, max: 50000000 },
      requirements: ["contrapartida municipal", "projeto aprovado", "capacidade técnica"]
    },
    {
      name: "BID Invest - Infraestrutura Resiliente",
      type: "multilateral",
      focus: ["infraestrutura climática", "transporte limpo", "tecnologia IoT"],
      typical_amount: { min: 10000000, max: 500000000 },
      requirements: ["impacto climático", "sustentabilidade financeira", "governança"]
    }
  ],
  "Saúde e Bem Estar": [
    {
      name: "Ministério da Saúde - SUS",
      type: "público",
      focus: ["atenção básica", "vigilância em saúde", "infraestrutura resiliente"],
      typical_amount: { min: 100000, max: 5000000 },
      requirements: ["projeto executivo", "contrapartida municipal", "aprovação do conselho de saúde"],
      contact_info: "Fundo Nacional de Saúde"
    },
    {
      name: "OPAS - Organização Pan-Americana da Saúde",
      type: "multilateral",
      focus: ["saúde pública", "emergências sanitárias", "adaptação climática"],
      typical_amount: { min: 200000, max: 10000000 },
      requirements: ["projeto regional", "impacto em saúde pública", "sustentabilidade"]
    },
    {
      name: "Fundação Gates",
      type: "filantrópico",
      focus: ["saúde global", "tecnologias inovadoras", "populações vulneráveis"],
      typical_amount: { min: 500000, max: 50000000 },
      requirements: ["inovação comprovada", "impacto mensurável", "escalabilidade"]
    },
    {
      name: "BNDES Social",
      type: "público",
      focus: ["infraestrutura social", "saúde pública", "projetos socioambientais"],
      typical_amount: { min: 1000000, max: 100000000 },
      requirements: ["viabilidade técnica", "impacto social", "sustentabilidade financeira"]
    }
  ],
  "Finanças Climáticas": [
    {
      name: "BNDES - Fundo Clima",
      type: "público",
      focus: ["financiamento climático", "instrumentos financeiros verdes", "fundos de adaptação"],
      typical_amount: { min: 5000000, max: 500000000 },
      requirements: ["projeto estruturado", "análise de risco climático", "governança transparente"],
      contact_info: "BNDES - Área de Meio Ambiente"
    },
    {
      name: "Green Climate Fund (GCF)",
      type: "multilateral",
      focus: ["transformação climática", "instrumentos financeiros inovadores", "capacitação institutional"],
      typical_amount: { min: 10000000, max: 250000000 },
      requirements: ["entidade acreditada", "teoria da mudança robusta", "impacto transformacional"]
    },
    {
      name: "BID Lab - Laboratório de Inovação",
      type: "multilateral", 
      focus: ["inovação financeira", "instrumentos de mercado", "fintech climática"],
      typical_amount: { min: 500000, max: 5000000 },
      requirements: ["inovação comprovada", "escalabilidade", "sustentabilidade financeira"]
    },
    {
      name: "Climate Policy Initiative (CPI)",
      type: "filantrópico",
      focus: ["análise de políticas", "instrumentos financeiros", "capacitação técnica"],
      typical_amount: { min: 200000, max: 2000000 },
      requirements: ["relevância política", "base de evidências", "potencial de replicação"]
    }
  ],
  "Ambiente Social e Educação": [
    {
      name: "Fundo Nacional de Desenvolvimento da Educação (FNDE)",
      type: "Público Federal",
      typical_amount: { min: 10000, max: 500000 },
      focus: ["Educação ambiental", "Infraestrutura escolar", "Formação continuada"],
      requirements: [
        "Projeto pedagógico aprovado",
        "Contrapartida municipal",
        "Prestação de contas regular"
      ],
      contact_info: "www.fnde.gov.br"
    },
    {
      name: "Instituto Arapyaú",
      type: "Filantrópico",
      typical_amount: { min: 25000, max: 200000 },
      focus: ["Educação para sustentabilidade", "Inovação social", "Tecnologias sociais"],
      requirements: [
        "Impacto social mensurável",
        "Sustentabilidade do projeto",
        "Articulação territorial"
      ],
      contact_info: "contato@arapyau.org.br"
    },
    {
      name: "Programa Criança Esperança - UNESCO",
      type: "Internacional",
      typical_amount: { min: 15000, max: 150000 },
      focus: ["Educação integral", "Proteção social", "Participação juvenil"],
      requirements: [
        "Foco em crianças e adolescentes",
        "Metodologia participativa",
        "Sustentabilidade social"
      ],
      contact_info: "brasilia@unesco.org"
    }
  ]
};

export const TECHNICAL_PARTNERS: Record<string, TechnicalPartner[]> = {
  "Agricultura e Recursos Hídricos": [
    {
      name: "EMBRAPA",
      type: "instituto_pesquisa",
      expertise: ["agricultura tropical", "recursos hídricos", "tecnologia agrícola"],
      location: "Brasil (nacional)",
      previous_projects: ["Sistema Plantio Direto", "Integração Lavoura-Pecuária-Floresta"]
    },
    {
      name: "CIAT - Centro Internacional de Agricultura Tropical",
      type: "organismo_internacional",
      expertise: ["agricultura climática", "segurança alimentar", "sistemas resilientes"],
      location: "Colômbia (atuação América Latina)"
    },
    {
      name: "World Agroforestry Centre (ICRAF)",
      type: "organismo_internacional",
      expertise: ["agrofloresta", "restauração", "adaptação climática"],
      location: "Quênia (atuação global)"
    }
  ],
  "Florestas e Ecossistemas": [
    {
      name: "Instituto Nacional de Pesquisas da Amazônia (INPA)",
      type: "instituto_pesquisa",
      expertise: ["ecologia tropical", "restauração florestal", "biodiversidade"],
      location: "Manaus, Brasil"
    },
    {
      name: "WRI Brasil",
      type: "ong",
      expertise: ["restauração florestal", "políticas ambientais", "mudanças climáticas"],
      location: "Brasil"
    }
  ],
  "Infraestrutura de Energia": [
    {
      name: "CEPEL - Centro de Pesquisas de Energia Elétrica",
      type: "instituto_pesquisa",
      expertise: ["sistemas elétricos", "energia renovável", "smart grids"],
      location: "Rio de Janeiro, Brasil",
      previous_projects: ["Sistema Interligado Nacional", "Redes Inteligentes"]
    },
    {
      name: "LACTEC - Instituto de Tecnologia para o Desenvolvimento",
      type: "instituto_pesquisa",
      expertise: ["energia solar", "energia eólica", "eficiência energética"],
      location: "Curitiba, Brasil",
      previous_projects: ["Atlas Solar", "Sistemas Fotovoltaicos"]
    },
    {
      name: "IRENA - International Renewable Energy Agency",
      type: "organismo_internacional",
      expertise: ["energia renovável", "políticas energéticas", "capacitação"],
      location: "Abu Dhabi (atuação global)",
      previous_projects: ["Global Energy Transformation", "Renewable Energy Statistics"]
    },
    {
      name: "Rocky Mountain Institute",
      type: "ong",
      expertise: ["transição energética", "microgrids", "armazenamento"],
      location: "Colorado, EUA (atuação global)",
      previous_projects: ["Islands Energy Program", "Smart Grid Demonstration"]
    }
  ],
  "Transportes Resilientes": [
    {
      name: "IPT - Instituto de Pesquisas Tecnológicas",
      type: "instituto_pesquisa",
      expertise: ["pavimentos", "infraestrutura viária", "materiais de construção"],
      location: "São Paulo, Brasil",
      previous_projects: ["Pavimentos Permeáveis", "Asfalto Ecológico"]
    },
    {
      name: "COPPE/UFRJ - Programa de Engenharia de Transportes",
      type: "universidade",
      expertise: ["planejamento de transportes", "mobilidade urbana", "sistemas inteligentes"],
      location: "Rio de Janeiro, Brasil"
    },
    {
      name: "WRI Brasil - Cidades Sustentáveis",
      type: "ong",
      expertise: ["mobilidade urbana", "transporte sustentável", "planejamento urbano"],
      location: "Brasil",
      previous_projects: ["BRT", "Ciclovias Protegidas"]
    },
    {
      name: "ITDP - Institute for Transportation & Development Policy",
      type: "ong",
      expertise: ["transporte sustentável", "mobilidade ativa", "BRT"],
      location: "Nova York, EUA (atuação global)",
      previous_projects: ["TransMilenio", "Bus Rapid Transit"]
    }
  ],
  "Saúde e Bem Estar": [
    {
      name: "FIOCRUZ - Fundação Oswaldo Cruz",
      type: "instituto_pesquisa",
      expertise: ["saúde pública", "vigilância epidemiológica", "saúde ambiental"],
      location: "Rio de Janeiro, Brasil",
      previous_projects: ["Observatório de Clima e Saúde", "Vigiar SUS"]
    },
    {
      name: "USP - Faculdade de Saúde Pública",
      type: "universidade",
      expertise: ["epidemiologia", "saúde ambiental", "políticas de saúde"],
      location: "São Paulo, Brasil",
      previous_projects: ["Estudo ELSA", "Projeto São Paulo Megacity"]
    },
    {
      name: "OPAS - Organização Pan-Americana da Saúde",
      type: "organismo_internacional",
      expertise: ["saúde pública", "emergências sanitárias", "mudanças climáticas"],
      location: "Washington, EUA (atuação América Latina)",
      previous_projects: ["Saúde nas Américas", "Smart Hospitals"]
    },
    {
      name: "Climate and Health Alliance",
      type: "ong",
      expertise: ["saúde climática", "advocacy", "políticas públicas"],
      location: "Austrália (atuação global)",
      previous_projects: ["Climate Health Report", "Healthy Climate Prescription"]
    }
  ],
  "Finanças Climáticas": [
    {
      name: "Fundação Getulio Vargas (FGV) - Centro de Estudos em Sustentabilidade",
      type: "universidade",
      expertise: ["finanças sustentáveis", "análise de risco climático", "instrumentos financeiros"],
      location: "São Paulo, Brasil",
      previous_projects: ["Taxonomia Verde Brasileira", "Mercado de Títulos Verdes"]
    },
    {
      name: "Climate Policy Initiative (CPI/PUC-Rio)",
      type: "instituto_pesquisa",
      expertise: ["política climática", "financiamento climático", "análise econômica"],
      location: "Rio de Janeiro, Brasil",
      previous_projects: ["Panorama do Financiamento Climático", "NDC do Brasil"]
    },
    {
      name: "International Finance Corporation (IFC)",
      type: "organismo_internacional",
      expertise: ["financiamento privado", "mercados emergentes", "risco climático"],
      location: "Washington, EUA (atuação global)",
      previous_projects: ["Green Bonds Program", "Climate Investment Opportunities"]
    },
    {
      name: "Climate Finance Advisors",
      type: "empresa_consultoria",
      expertise: ["estruturação de fundos", "captação internacional", "instrumentos financeiros"],
      location: "Londres, Reino Unido (atuação global)",
      previous_projects: ["Green Climate Fund Projects", "Blended Finance Structures"]
    }
  ],
  "Ambiente Social e Educação": [
    {
      name: "Instituto Paulo Freire",
      type: "organizacao_social",
      location: "São Paulo, SP",
      expertise: ["Educação popular", "Pedagogia crítica", "Formação de educadores"],
      previous_projects: [
        "Programa de Alfabetização de Jovens e Adultos",
        "Formação de Educadores Ambientais",
        "Círculos de Cultura Climática"
      ]
    },
    {
      name: "Ashoka Brasil",
      type: "ong_internacional",
      location: "São Paulo, SP",
      expertise: ["Empreendedorismo social", "Inovação sistêmica", "Educação transformadora"],
      previous_projects: [
        "Rede de Jovens Changemakers",
        "Programa Escolas Transformadoras",
        "Hub de Inovação Social"
      ]
    },
    {
      name: "Centro de Educação Ambiental - USP",
      type: "universidade",
      location: "São Paulo, SP", 
      expertise: ["Pesquisa em educação ambiental", "Formação de professores", "Metodologias participativas"],
      previous_projects: [
        "Observatório de Educação Ambiental",
        "Laboratório de Educação e Política Ambiental",
        "Rede Brasileira de Educação Ambiental"
      ]
    }
  ]
};
