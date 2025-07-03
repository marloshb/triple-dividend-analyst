import { ReactNode } from "react";

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
  "Governança",
  "Finanças Climáticas",
  "Turismo Sustentável",
  "Tecnologia da Informação e Comunicação (TIC)",
  "Segurança Pública e Defesa Civil",
  "Educação Formal e Informal",
  "Cultura e Patrimônio Histórico",
  "Comércio e Serviços",
  "Mineração e Recursos Naturais",
  "Mobilidade Urbana e Transporte Público",
  "Habitação Social e Desenvolvimento Comunitário",
  "Indústria e Manufatura"
] as const;

export type Sector = typeof SECTORS[number];

export interface InvestmentRange {
  min: number;
  max: number;
}

export interface ExpectedBenefits {
  first: string[];
  second: string[];
  third: string[];
}

export interface ImplementationTime {
  min: number; // in months
  max: number; // in months
}

export interface AdaptiveProjectTemplate {
  id: string;
  name: string;
  sector: Sector | string;
  category: string;
  description: string;
  typicalInvestment: InvestmentRange;
  expectedBenefits: ExpectedBenefits;
  implementationTime: ImplementationTime;
  riskReduction: number; // percentage
  economicMultiplier: number; // ROI multiplier
  socialImpact: number; // scale 0-5
}

export interface FinancingSource {
  name: string;
  type: "público" | "privado" | "multilateral" | "organismo_internacional";
  typical_amount: InvestmentRange;
  focus: string[];
  requirements: string[];
  contact_info?: string;
}

export interface TechnicalPartner {
  name: string;
  type: "universidade" | "instituto_pesquisa" | "organismo_publico" | "ong" | "empresa" | "consultoria";
  location: string;
  expertise: string[];
  previous_projects?: string[];
}

export const FINANCING_SOURCES: Record<Sector, FinancingSource[]> = {
  "Agricultura e Recursos Hídricos": [
    {
      name: "Programa ABC - Agricultura de Baixa Emissão de Carbono",
      type: "público",
      typical_amount: { min: 100000, max: 2000000 },
      focus: ["Agricultura sustentável", "Redução de emissões", "Capacitação rural"],
      requirements: ["Projeto técnico", "Viabilidade econômica", "Regularidade fiscal"]
    }
  ],
  "Florestas e Ecossistemas": [
    {
      name: "Fundo Amazônia",
      type: "multilateral",
      typical_amount: { min: 500000, max: 10000000 },
      focus: ["Conservação florestal", "Redução de desmatamento", "Projetos comunitários"],
      requirements: ["Projeto aprovado", "Monitoramento ambiental", "Participação comunitária"]
    }
  ],
  "Infraestrutura e Urbanismo": [
    {
      name: "Banco Nacional de Desenvolvimento Econômico e Social (BNDES)",
      type: "público",
      typical_amount: { min: 1000000, max: 50000000 },
      focus: ["Infraestrutura urbana", "Resiliência climática", "Saneamento"],
      requirements: ["Projeto estruturado", "Viabilidade técnica", "Licenciamento ambiental"]
    }
  ],
  "Saneamento e Saúde Pública": [
    {
      name: "Fundo Nacional de Saúde",
      type: "público",
      typical_amount: { min: 500000, max: 10000000 },
      focus: ["Saneamento básico", "Saúde pública", "Prevenção de doenças"],
      requirements: ["Projeto de saúde pública", "Capacidade operacional", "Impacto social"]
    }
  ],
  "Infraestrutura de Energia": [
    {
      name: "Programa de Incentivo às Fontes Alternativas de Energia (Proinfa)",
      type: "público",
      typical_amount: { min: 1000000, max: 20000000 },
      focus: ["Energia renovável", "Eficiência energética", "Redução de emissões"],
      requirements: ["Projeto energético", "Viabilidade técnica", "Licenciamento ambiental"]
    }
  ],
  "Transportes Resilientes": [
    {
      name: "Programa de Mobilidade Urbana Sustentável",
      type: "público",
      typical_amount: { min: 2000000, max: 50000000 },
      focus: ["Transporte público", "Mobilidade sustentável", "Infraestrutura resiliente"],
      requirements: ["Plano de mobilidade", "Viabilidade técnica", "Participação social"]
    }
  ],
  "Ambiente Social e Educação": [
    {
      name: "Programa Nacional de Educação Ambiental",
      type: "público",
      typical_amount: { min: 300000, max: 3000000 },
      focus: ["Educação ambiental", "Capacitação", "Inclusão social"],
      requirements: ["Projeto educacional", "Capacidade institucional", "Impacto social"]
    }
  ],
  "Engenharia Costeira e Pesca": [
    {
      name: "Fundo de Desenvolvimento da Pesca e Aquicultura",
      type: "público",
      typical_amount: { min: 500000, max: 10000000 },
      focus: ["Pesca sustentável", "Aquicultura", "Proteção costeira"],
      requirements: ["Projeto técnico", "Viabilidade econômica", "Licenciamento ambiental"]
    }
  ],
  "Saúde e Bem Estar": [
    {
      name: "Ministério da Saúde - Programas de Saúde Pública",
      type: "público",
      typical_amount: { min: 500000, max: 10000000 },
      focus: ["Saúde pública", "Prevenção de doenças", "Capacitação"],
      requirements: ["Projeto de saúde", "Capacidade operacional", "Impacto social"]
    }
  ],
  "Governança": [
    {
      name: "Programa de Fortalecimento da Gestão Pública",
      type: "público",
      typical_amount: { min: 300000, max: 5000000 },
      focus: ["Governança climática", "Capacitação", "Transparência"],
      requirements: ["Plano de gestão", "Capacidade institucional", "Participação social"]
    }
  ],
  "Finanças Climáticas": [
    {
      name: "Fundo Clima",
      type: "público",
      typical_amount: { min: 1000000, max: 20000000 },
      focus: ["Financiamento climático", "Mitigação", "Adaptação"],
      requirements: ["Projeto climático", "Viabilidade técnica", "Impacto ambiental"]
    }
  ],
  "Turismo Sustentável": [
    {
      name: "Fundo Nacional de Turismo (Fungetur)",
      type: "público",
      typical_amount: { min: 500000, max: 5000000 },
      focus: ["Infraestrutura turística", "Sustentabilidade", "Capacitação"],
      requirements: ["Projeto de desenvolvimento turístico", "Impacto socioambiental positivo", "Viabilidade técnica"]
    },
    {
      name: "Banco Interamericano de Desenvolvimento - Turismo Sustentável",
      type: "multilateral",
      typical_amount: { min: 2000000, max: 50000000 },
      focus: ["Ecoturismo", "Turismo comunitário", "Infraestrutura resiliente"],
      requirements: ["Projeto de grande escala", "Sustentabilidade comprovada", "Participação comunitária"]
    }
  ],
  "Tecnologia da Informação e Comunicação (TIC)": [
    {
      name: "FINEP - Inovação Digital",
      type: "público",
      typical_amount: { min: 1000000, max: 10000000 },
      focus: ["Inovação tecnológica", "Soluções digitais", "IoT e sensores"],
      requirements: ["Projeto de inovação", "Capacidade técnica", "Impacto tecnológico"]
    },
    {
      name: "Fundo Verde do Clima - Tecnologia",
      type: "multilateral",
      typical_amount: { min: 5000000, max: 100000000 },
      focus: ["Tecnologias climáticas", "Sistemas de monitoramento", "Adaptação digital"],
      requirements: ["Projeto transformacional", "Tecnologia inovadora", "Escala nacional"]
    }
  ],
  "Segurança Pública e Defesa Civil": [
    {
      name: "Ministério da Integração e Desenvolvimento Regional",
      type: "público",
      typical_amount: { min: 2000000, max: 20000000 },
      focus: ["Defesa civil", "Gestão de riscos", "Infraestrutura de emergência"],
      requirements: ["Plano de defesa civil", "Capacidade operacional", "Articulação institucional"]
    },
    {
      name: "Banco Mundial - Gestão de Riscos de Desastres",
      type: "multilateral",
      typical_amount: { min: 10000000, max: 200000000 },
      focus: ["Prevenção de desastres", "Sistemas de alerta", "Resiliência urbana"],
      requirements: ["Estratégia nacional", "Capacidade institucional", "Impacto de larga escala"]
    }
  ],
  "Educação Formal e Informal": [
    {
      name: "FNDE - Fundo Nacional de Desenvolvimento da Educação",
      type: "público",
      typical_amount: { min: 500000, max: 5000000 },
      focus: ["Educação ambiental", "Capacitação docente", "Infraestrutura educacional"],
      requirements: ["Projeto pedagógico", "Capacidade institucional", "Impacto educacional"]
    },
    {
      name: "UNESCO - Educação para o Desenvolvimento Sustentável",
      type: "multilateral",
      typical_amount: { min: 200000, max: 2000000 },
      focus: ["Educação ambiental", "Capacitação", "Materiais didáticos"],
      requirements: ["Projeto educacional", "Metodologia comprovada", "Multiplicação"]
    }
  ],
  "Cultura e Patrimônio Histórico": [
    {
      name: "IPHAN - Instituto do Patrimônio Histórico",
      type: "público",
      typical_amount: { min: 300000, max: 3000000 },
      focus: ["Preservação patrimonial", "Restauração", "Documentação cultural"],
      requirements: ["Relevância patrimonial", "Projeto técnico", "Impacto cultural"]
    },
    {
      name: "Banco Mundial - Patrimônio Cultural",
      type: "multilateral",
      typical_amount: { min: 2000000, max: 20000000 },
      focus: ["Preservação cultural", "Adaptação climática", "Desenvolvimento cultural"],
      requirements: ["Significância cultural", "Viabilidade técnica", "Sustentabilidade"]
    }
  ],
  "Comércio e Serviços": [
    {
      name: "BNDES - Cartão BNDES",
      type: "público",
      typical_amount: { min: 100000, max: 1000000 },
      focus: ["Modernização comercial", "Eficiência energética", "Sustentabilidade"],
      requirements: ["CNPJ ativo", "Capacidade de pagamento", "Projeto sustentável"]
    },
    {
      name: "SEBRAE - Sustentabilidade Empresarial",
      type: "público",
      typical_amount: { min: 50000, max: 500000 },
      focus: ["Pequenos negócios", "Práticas sustentáveis", "Capacitação"],
      requirements: ["Micro ou pequena empresa", "Projeto de sustentabilidade", "Capacitação"]
    }
  ],
  "Mineração e Recursos Naturais": [
    {
      name: "BNDES - Mineração Sustentável",
      type: "público",
      typical_amount: { min: 10000000, max: 200000000 },
      focus: ["Tecnologias limpas", "Recuperação ambiental", "Eficiência operacional"],
      requirements: ["Licenciamento ambiental", "Tecnologia sustentável", "Impacto socioambiental"]
    },
    {
      name: "Banco Mundial - Recursos Naturais",
      type: "multilateral",
      typical_amount: { min: 50000000, max: 500000000 },
      focus: ["Gestão sustentável", "Tecnologias limpas", "Recuperação ambiental"],
      requirements: ["Escala significativa", "Padrões internacionais", "Sustentabilidade comprovada"]
    }
  ],
  "Mobilidade Urbana e Transporte Público": [
    {
      name: "Ministério das Cidades - Mobilidade Urbana",
      type: "público",
      typical_amount: { min: 5000000, max: 100000000 },
      focus: ["Transporte público", "Mobilidade ativa", "Infraestrutura resiliente"],
      requirements: ["Plano de mobilidade", "Impacto urbano", "Sustentabilidade"]
    },
    {
      name: "BID - Transporte Sustentável",
      type: "multilateral",
      typical_amount: { min: 20000000, max: 300000000 },
      focus: ["BRT", "Mobilidade elétrica", "Infraestrutura verde"],
      requirements: ["Projeto estruturante", "Sustentabilidade", "Impacto regional"]
    }
  ],
  "Habitação Social e Desenvolvimento Comunitário": [
    {
      name: "Minha Casa Minha Vida",
      type: "público",
      typical_amount: { min: 10000000, max: 200000000 },
      focus: ["Habitação popular", "Infraestrutura social", "Desenvolvimento urbano"],
      requirements: ["Faixa de renda", "Projeto habitacional", "Regularização fundiária"]
    },
    {
      name: "Banco Mundial - Habitação",
      type: "multilateral",
      typical_amount: { min: 50000000, max: 1000000000 },
      focus: ["Habitação resiliente", "Desenvolvimento urbano", "Inclusão social"],
      requirements: ["Escala urbana", "Sustentabilidade", "Impacto social"]
    }
  ],
  "Indústria e Manufatura": [
    {
      name: "BNDES - Indústria Sustentável",
      type: "público",
      typical_amount: { min: 5000000, max: 100000000 },
      focus: ["Modernização industrial", "Eficiência energética", "Tecnologias limpas"],
      requirements: ["Setor industrial", "Inovação tecnológica", "Sustentabilidade"]
    },
    {
      name: "BID - Competitividade Industrial",
      type: "multilateral",
      typical_amount: { min: 20000000, max: 500000000 },
      focus: ["Indústria 4.0", "Economia circular", "Descarbonização"],
      requirements: ["Projeto industrial", "Competitividade", "Sustentabilidade"]
    }
  ]
};

export const TECHNICAL_PARTNERS: Record<Sector, TechnicalPartner[]> = {
  "Agricultura e Recursos Hídricos": [
    {
      name: "Embrapa - Empresa Brasileira de Pesquisa Agropecuária",
      type: "organismo_publico",
      location: "Brasília, DF",
      expertise: ["Agricultura sustentável", "Tecnologias agrícolas", "Pesquisa aplicada"],
      previous_projects: ["Programa ABC", "Inovações em irrigação"]
    }
  ],
  "Florestas e Ecossistemas": [
    {
      name: "Instituto Nacional de Pesquisas da Amazônia (INPA)",
      type: "instituto_pesquisa",
      location: "Manaus, AM",
      expertise: ["Ecossistemas florestais", "Biodiversidade", "Conservação"],
      previous_projects: ["Monitoramento da Amazônia", "Projetos de conservação"]
    }
  ],
  "Infraestrutura e Urbanismo": [
    {
      name: "Instituto de Pesquisa e Planejamento Urbano e Regional (IPPUR/UFRJ)",
      type: "universidade",
      location: "Rio de Janeiro, RJ",
      expertise: ["Planejamento urbano", "Infraestrutura resiliente", "Sustentabilidade urbana"],
      previous_projects: ["Planos diretores", "Projetos urbanos sustentáveis"]
    }
  ],
  "Saneamento e Saúde Pública": [
    {
      name: "Fundação Oswaldo Cruz (Fiocruz)",
      type: "instituto_pesquisa",
      location: "Rio de Janeiro, RJ",
      expertise: ["Saúde pública", "Saneamento", "Epidemiologia"],
      previous_projects: ["Controle de doenças", "Projetos de saneamento"]
    }
  ],
  "Infraestrutura de Energia": [
    {
      name: "Empresa de Pesquisa Energética (EPE)",
      type: "organismo_publico",
      location: "Brasília, DF",
      expertise: ["Energia renovável", "Planejamento energético", "Eficiência energética"],
      previous_projects: ["Plano Decenal de Energia", "Projetos de energia solar"]
    }
  ],
  "Transportes Resilientes": [
    {
      name: "Instituto de Transportes e Logística (ITL)",
      type: "instituto_pesquisa",
      location: "São Paulo, SP",
      expertise: ["Mobilidade urbana", "Transporte sustentável", "Logística"],
      previous_projects: ["Planos de mobilidade", "Projetos de transporte público"]
    }
  ],
  "Ambiente Social e Educação": [
    {
      name: "Instituto Socioambiental (ISA)",
      type: "ong",
      location: "São Paulo, SP",
      expertise: ["Educação ambiental", "Inclusão social", "Sustentabilidade"],
      previous_projects: ["Projetos comunitários", "Educação ambiental"]
    }
  ],
  "Engenharia Costeira e Pesca": [
    {
      name: "Instituto Nacional de Pesca (INP)",
      type: "organismo_publico",
      location: "Rio de Janeiro, RJ",
      expertise: ["Pesca sustentável", "Engenharia costeira", "Aquicultura"],
      previous_projects: ["Projetos de pesca sustentável", "Monitoramento costeiro"]
    }
  ],
  "Saúde e Bem Estar": [
    {
      name: "Ministério da Saúde - Departamento de Vigilância em Saúde",
      type: "organismo_publico",
      location: "Brasília, DF",
      expertise: ["Saúde pública", "Vigilância epidemiológica", "Promoção da saúde"],
      previous_projects: ["Programas de saúde pública", "Campanhas de prevenção"]
    }
  ],
  "Governança": [
    {
      name: "Instituto Ethos",
      type: "ong",
      location: "São Paulo, SP",
      expertise: ["Governança pública", "Transparência", "Sustentabilidade"],
      previous_projects: ["Projetos de governança", "Capacitação institucional"]
    }
  ],
  "Finanças Climáticas": [
    {
      name: "Banco Nacional de Desenvolvimento Econômico e Social (BNDES)",
      type: "organismo_publico",
      location: "Rio de Janeiro, RJ",
      expertise: ["Finanças sustentáveis", "Investimentos climáticos", "Gestão financeira"],
      previous_projects: ["Financiamento de projetos climáticos", "Programas de crédito verde"]
    }
  ],
  "Turismo Sustentável": [
    {
      name: "Instituto Brasileiro de Turismo (Embratur)",
      type: "organismo_publico",
      location: "Brasília, DF",
      expertise: ["Desenvolvimento turístico", "Marketing de destinos", "Sustentabilidade turística"],
      previous_projects: ["Programa de Desenvolvimento do Ecoturismo", "Roteiros do Brasil"]
    },
    {
      name: "Fundação SOS Mata Atlântica",
      type: "ong",
      location: "São Paulo, SP", 
      expertise: ["Ecoturismo", "Conservação", "Educação ambiental"],
      previous_projects: ["Trilhas da Mata Atlântica", "Turismo de Base Comunitária"]
    }
  ],
  "Tecnologia da Informação e Comunicação (TIC)": [
    {
      name: "Centro de Pesquisas Meteorológicas (CPTEC/INPE)",
      type: "instituto_pesquisa",
      location: "Cachoeira Paulista, SP",
      expertise: ["Monitoramento climático", "Sistemas de alerta", "Modelagem atmosférica"],
      previous_projects: ["Sistema de Alerta de Desastres", "Rede de Monitoramento Climático"]
    },
    {
      name: "Laboratório de Sistemas Integráveis (LSI/USP)",
      type: "universidade",
      location: "São Paulo, SP",
      expertise: ["IoT", "Sensores ambientais", "Sistemas inteligentes"],
      previous_projects: ["Cidade Inteligente Sustentável", "Rede de Sensores Ambientais"]
    }
  ],
  "Segurança Pública e Defesa Civil": [
    {
      name: "Centro Nacional de Monitoramento e Alertas (CEMADEN)",
      type: "organismo_publico",
      location: "São José dos Campos, SP", 
      expertise: ["Alertas de desastres", "Monitoramento de riscos", "Defesa civil"],
      previous_projects: ["Sistema Nacional de Alertas", "Rede de Monitoramento Hidrometeorológico"]
    },
    {
      name: "Universidade Federal de Santa Catarina - CEPED",
      type: "universidade",
      location: "Florianópolis, SC",
      expertise: ["Gestão de riscos", "Defesa civil", "Resiliência urbana"],
      previous_projects: ["Atlas de Desastres do Brasil", "Capacitação em Defesa Civil"]
    }
  ],
  "Educação Formal e Informal": [
    {
      name: "Ministério da Educação - Coordenação de Educação Ambiental",
      type: "organismo_publico",
      location: "Brasília, DF",
      expertise: ["Educação ambiental", "Políticas educacionais", "Formação docente"],
      previous_projects: ["Programa Mais Educação Ambiental", "Salas Verdes"]
    },
    {
      name: "Instituto Akatu",
      type: "ong",
      location: "São Paulo, SP",
      expertise: ["Educação para sustentabilidade", "Consumo consciente", "Metodologias educativas"],
      previous_projects: ["Edukatu", "Escola Sustentável"]
    }
  ],
  "Cultura e Patrimônio Histórico": [
    {
      name: "Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN)",
      type: "organismo_publico",
      location: "Brasília, DF",
      expertise: ["Preservação patrimonial", "Restauração", "Gestão cultural"],
      previous_projects: ["Programa Monumenta", "Patrimônio Cultural Imaterial"]
    },
    {
      name: "Universidade Federal de Minas Gerais - Escola de Arquitetura",
      type: "universidade",
      location: "Belo Horizonte, MG",
      expertise: ["Restauração arquitetônica", "Patrimônio cultural", "Tecnologias de preservação"],
      previous_projects: ["Centro de Conservação e Restauração", "Inventário Cultural"]
    }
  ],
  "Comércio e Serviços": [
    {
      name: "SEBRAE Nacional",
      type: "organismo_publico", 
      location: "Brasília, DF",
      expertise: ["Desenvolvimento empresarial", "Sustentabilidade nos negócios", "Capacitação"],
      previous_projects: ["Programa Sebrae Mais Sustentável", "Varejo Sustentável"]
    },
    {
      name: "Instituto Ethos",
      type: "ong",
      location: "São Paulo, SP",
      expertise: ["Responsabilidade social empresarial", "Sustentabilidade corporativa", "ESG"],
      previous_projects: ["Indicadores Ethos", "Rede Brasil do Pacto Global"]
    }
  ],
  "Mineração e Recursos Naturais": [
    {
      name: "Centro de Tecnologia Mineral (CETEM/MCTI)",
      type: "instituto_pesquisa",
      location: "Rio de Janeiro, RJ",
      expertise: ["Tecnologia mineral", "Sustentabilidade na mineração", "Recuperação ambiental"],
      previous_projects: ["Tecnologias Limpas para Mineração", "Recuperação de Áreas Degradadas"]
    },
    {
      name: "Instituto Brasileiro de Mineração (IBRAM)",
      type: "organismo_publico",
      location: "Brasília, DF",
      expertise: ["Mineração sustentável", "Gestão ambiental", "Responsabilidade social"],
      previous_projects: ["Programa de Excelência em Mineração", "Guia de Boas Práticas"]
    }
  ],
  "Mobilidade Urbana e Transporte Público": [
    {
      name: "Associação Nacional de Transportes Públicos (ANTP)",
      type: "organismo_publico",
      location: "São Paulo, SP",
      expertise: ["Transporte público", "Mobilidade urbana", "Planejamento de transportes"],
      previous_projects: ["Sistema de Informações da Mobilidade", "Prêmio ANTP de Qualidade"]
    },
    {
      name: "Instituto de Pesquisa Econômica Aplicada (IPEA)",
      type: "instituto_pesquisa",
      location: "Brasília, DF",
      expertise: ["Políticas públicas", "Mobilidade urbana", "Avaliação de impactos"],
      previous_projects: ["Atlas da Vulnerabilidade Social", "Pesquisa Mobilidade Urbana"]
    }
  ],
  "Habitação Social e Desenvolvimento Comunitário": [
    {
      name: "Secretaria Nacional de Habitação (SNH)",
      type: "organismo_publico",
      location: "Brasília, DF", 
      expertise: ["Políticas habitacionais", "Desenvolvimento urbano", "Habitação social"],
      previous_projects: ["Programa Minha Casa Minha Vida", "Programa de Aceleração do Crescimento"]
    },
    {
      name: "Instituto Pólis",
      type: "ong",
      location: "São Paulo, SP",
      expertise: ["Desenvolvimento urbano", "Participação popular", "Direito à cidade"],
      previous_projects: ["Observatório dos Direitos do Cidadão", "Rede de Avaliação e Capacitação"]
    }
  ],
  "Indústria e Manufatura": [
    {
      name: "Confederação Nacional da Indústria (CNI)",
      type: "organismo_publico",
      location: "Brasília, DF",
      expertise: ["Desenvolvimento industrial", "Sustentabilidade industrial", "Inovação tecnológica"],
      previous_projects: ["Mapa Estratégico da Indústria", "Indústria 2027"]
    },
    {
      name: "Instituto Senai de Inovação",
      type: "instituto_pesquisa",
      location: "Múltiplas localidades",
      expertise: ["Inovação industrial", "Tecnologias sustentáveis", "Manufatura avançada"],
      previous_projects: ["Indústria 4.0", "Economia Circular na Indústria"]
    }
  ]
};
