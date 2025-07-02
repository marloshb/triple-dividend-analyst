import { AdaptiveProjectTemplate, Sector } from "@/types/climate";

export const adaptiveProjects: Record<Sector, AdaptiveProjectTemplate[]> = {
  "Agricultura e Recursos Hídricos": [
    // 💧 A. Captação e Armazenamento de Água (1-80)
    {
      id: "agr-001",
      name: "Cisternas domiciliares para irrigação",
      sector: "Agricultura e Recursos Hídricos",
      category: "Captação e Armazenamento de Água",
      description: "Sistema de captação e armazenamento de água da chuva para uso domiciliar e irrigação",
      typicalInvestment: { min: 8000, max: 25000 },
      expectedBenefits: {
        first: ["Redução de 80% na dependência de água externa", "Proteção contra estiagens", "Menor vulnerabilidade hídrica"],
        second: ["Redução de 60% nos custos com água", "Aumento de 40% na produtividade", "Criação de 2 empregos locais"],
        third: ["Melhoria da segurança hídrica familiar", "Capacitação em gestão hídrica", "Autonomia comunitária"]
      },
      implementationTime: { min: 2, max: 6 },
      riskReduction: 70,
      economicMultiplier: 3.2,
      socialImpact: 4.5
    },
    {
      id: "agr-002",
      name: "Cisternas comunitárias com sistema de tratamento",
      sector: "Agricultura e Recursos Hídricos",
      category: "Captação e Armazenamento de Água",
      description: "Cisternas de grande capacidade com tratamento integrado para abastecimento comunitário",
      typicalInvestment: { min: 50000, max: 150000 },
      expectedBenefits: {
        first: ["Garantia hídrica para 50+ famílias", "Redução de 90% nas perdas por seca", "Água tratada disponível"],
        second: ["Economia de R$ 200/família/mês", "Geração de 8 empregos diretos", "Desenvolvimento local"],
        third: ["Fortalecimento comunitário", "Saúde pública melhorada", "Educação ambiental integrada"]
      },
      implementationTime: { min: 4, max: 12 },
      riskReduction: 85,
      economicMultiplier: 4.1,
      socialImpact: 4.8
    },
    {
      id: "agr-003",
      name: "Poços artesianos com bombas solares",
      sector: "Agricultura e Recursos Hídricos",
      category: "Captação e Armazenamento de Água",
      description: "Sistema de captação de água subterrânea com bombeamento solar fotovoltaico",
      typicalInvestment: { min: 80000, max: 200000 },
      expectedBenefits: {
        first: ["Acesso permanente à água", "Independência energética", "Redução de riscos de desabastecimento"],
        second: ["ROI de 300% em 5 anos", "Redução de 80% nos custos energéticos", "15 empregos indiretos"],
        third: ["Água limpa para comunidade", "Capacitação técnica local", "Sustentabilidade energética"]
      },
      implementationTime: { min: 6, max: 18 },
      riskReduction: 75,
      economicMultiplier: 4.5,
      socialImpact: 4.6
    },
    {
      id: "agr-004",
      name: "Barraginhas em microbacias",
      sector: "Agricultura e Recursos Hídricos",
      category: "Captação e Armazenamento de Água",
      description: "Pequenas barragens para captação de água da chuva e recarga de aquíferos",
      typicalInvestment: { min: 15000, max: 80000 },
      expectedBenefits: {
        first: ["Controle de erosão e enchentes", "Recarga de lençol freático", "Proteção de nascentes"],
        second: ["Aumento de 50% na produtividade local", "Valorização de propriedades", "Turismo rural"],
        third: ["Preservação ambiental", "Educação sobre recursos hídricos", "Coesão comunitária"]
      },
      implementationTime: { min: 3, max: 12 },
      riskReduction: 65,
      economicMultiplier: 3.8,
      socialImpact: 4.4
    },
    {
      id: "agr-005",
      name: "Reservatórios subterrâneos enterrados",
      sector: "Agricultura e Recursos Hídricos",
      category: "Captação e Armazenamento de Água",
      description: "Tanques subterrâneos de grande capacidade para armazenamento de água tratada",
      typicalInvestment: { min: 30000, max: 120000 },
      expectedBenefits: {
        first: ["Proteção contra contaminação", "Menor evaporação", "Durabilidade superior"],
        second: ["Economia de espaço superficial", "Menor manutenção", "Integração paisagística"],
        third: ["Segurança hídrica familiar", "Preservação da qualidade da água", "Tecnologia apropriada"]
      },
      implementationTime: { min: 4, max: 10 },
      riskReduction: 70,
      economicMultiplier: 3.5,
      socialImpact: 4.2
    },

    // 🌱 B. Irrigação Eficiente (81-160) - Amostras representativas
    {
      id: "agr-081",
      name: "Gotejamento de alta pressão para hortaliças",
      sector: "Agricultura e Recursos Hídricos",
      category: "Irrigação Eficiente",
      description: "Sistema de irrigação por gotejamento com alta pressão para maximizar eficiência hídrica",
      typicalInvestment: { min: 25000, max: 100000 },
      expectedBenefits: {
        first: ["Economia de 70% no uso da água", "Redução de perdas por evaporação", "Uniformidade na irrigação"],
        second: ["Aumento de 45% na produtividade", "Redução de custos operacionais", "Qualidade superior dos produtos"],
        third: ["Sustentabilidade hídrica", "Capacitação em tecnologia", "Exemplo para vizinhança"]
      },
      implementationTime: { min: 3, max: 9 },
      riskReduction: 60,
      economicMultiplier: 4.2,
      socialImpact: 4.0
    },
    {
      id: "agr-082",
      name: "Irrigação por microaspersão em estufas",
      sector: "Agricultura e Recursos Hídricos",
      category: "Irrigação Eficiente",
      description: "Microaspersores para irrigação controlada em ambiente protegido",
      typicalInvestment: { min: 35000, max: 150000 },
      expectedBenefits: {
        first: ["Controle preciso da umidade", "Redução de doenças fúngicas", "Otimização do microclima"],
        second: ["Produtividade 3x superior", "Cultivos o ano todo", "Produtos premium"],
        third: ["Segurança alimentar local", "Tecnologia adaptativa", "Inovação rural"]
      },
      implementationTime: { min: 4, max: 12 },
      riskReduction: 55,
      economicMultiplier: 5.1,
      socialImpact: 4.3
    },
    {
      id: "agr-083",
      name: "Aspersão automatizada em zonas críticas",
      sector: "Agricultura e Recursos Hídricos",
      category: "Irrigação Eficiente",
      description: "Sistema automatizado de aspersão com sensores para áreas de risco hídrico",
      typicalInvestment: { min: 60000, max: 250000 },
      expectedBenefits: {
        first: ["Resposta automática a déficit hídrico", "Prevenção de perdas totais", "Monitoramento contínuo"],
        second: ["ROI de 350% em 4 anos", "Redução de 50% em mão de obra", "Competitividade aumentada"],
        third: ["Transferência de tecnologia", "Agricultura 4.0 local", "Sustentabilidade produtiva"]
      },
      implementationTime: { min: 6, max: 15 },
      riskReduction: 75,
      economicMultiplier: 4.8,
      socialImpact: 4.1
    },

    // 🌾 C. Conservação do Solo e Água (161-240) - Amostras representativas
    {
      id: "agr-161",
      name: "Plantio em curvas de nível",
      sector: "Agricultura e Recursos Hídricos",
      category: "Conservação do Solo e Água",
      description: "Técnica de plantio seguindo as curvas de nível para controle de erosão",
      typicalInvestment: { min: 5000, max: 30000 },
      expectedBenefits: {
        first: ["Redução de 80% da erosão", "Maior retenção de água no solo", "Proteção de nascentes"],
        second: ["Aumento de 25% na produtividade", "Redução de custos com insumos", "Sustentabilidade produtiva"],
        third: ["Preservação ambiental", "Técnica replicável", "Conhecimento tradicional valorizado"]
      },
      implementationTime: { min: 1, max: 6 },
      riskReduction: 70,
      economicMultiplier: 2.8,
      socialImpact: 4.6
    },
    {
      id: "agr-162",
      name: "Terraços agrícolas em encosta",
      sector: "Agricultura e Recursos Hídricos",
      category: "Conservação do Solo e Água",
      description: "Construção de terraços para agricultura em áreas declivosas",
      typicalInvestment: { min: 40000, max: 200000 },
      expectedBenefits: {
        first: ["Controle total da erosão", "Aproveitamento de encostas", "Estabilização do terreno"],
        second: ["Nova área produtiva", "Valorização da propriedade", "Turismo rural potencial"],
        third: ["Paisagem preservada", "Técnicas ancestrais", "Modelo para região"]
      },
      implementationTime: { min: 8, max: 24 },
      riskReduction: 85,
      economicMultiplier: 3.5,
      socialImpact: 4.7
    },
    {
      id: "agr-163",
      name: "Recuperação ciliar com vegetação nativa",
      sector: "Agricultura e Recursos Hídricos",
      category: "Conservação do Solo e Água",
      description: "Restauração de matas ciliares com espécies nativas da região",
      typicalInvestment: { min: 20000, max: 100000 },
      expectedBenefits: {
        first: ["Proteção de corpos d'água", "Controle de enchentes", "Biodiversidade restaurada"],
        second: ["Créditos de carbono", "Ecoturismo", "Valorização ambiental"],
        third: ["Habitat para fauna", "Educação ambiental", "Legado para futuras gerações"]
      },
      implementationTime: { min: 12, max: 36 },
      riskReduction: 75,
      economicMultiplier: 3.2,
      socialImpact: 4.8
    },

    // 🌱 D. Sistemas Agroflorestais & Florestais (241-300) - Amostras representativas
    {
      id: "agr-241",
      name: "Sistemas agroflorestais com frutíferas",
      sector: "Agricultura e Recursos Hídricos",
      category: "Sistemas Agroflorestais & Florestais",
      description: "SAF integrando árvores frutíferas, cultivos anuais e criações",
      typicalInvestment: { min: 60000, max: 300000 },
      expectedBenefits: {
        first: ["Resiliência climática aumentada", "Redução de riscos de produção", "Microclima estabilizado"],
        second: ["Diversificação de renda", "Produtos durante todo ano", "Mercados diferenciados"],
        third: ["Segurança alimentar familiar", "Biodiversidade conservada", "Conhecimento agroecológico"]
      },
      implementationTime: { min: 18, max: 48 },
      riskReduction: 60,
      economicMultiplier: 4.3,
      socialImpact: 4.9
    },
    {
      id: "agr-242",
      name: "SAF integrados a bovinos",
      sector: "Agricultura e Recursos Hídricos",
      category: "Sistemas Agroflorestais & Florestais",
      description: "Sistema silvipastoril integrando árvores, pastagem e gado bovino",
      typicalInvestment: { min: 80000, max: 400000 },
      expectedBenefits: {
        first: ["Proteção do gado contra intempéries", "Pastagem de melhor qualidade", "Bem-estar animal"],
        second: ["Aumento de 40% na produtividade", "Carne premium", "Créditos de carbono"],
        third: ["Exemplo de pecuária sustentável", "Capacitação em SAF", "Modelo replicável"]
      },
      implementationTime: { min: 24, max: 60 },
      riskReduction: 55,
      economicMultiplier: 4.0,
      socialImpact: 4.4
    },
    {
      id: "agr-243",
      name: "SAF com café sombreado",
      sector: "Agricultura e Recursos Hídricos",
      category: "Sistemas Agroflorestais & Florestais",
      description: "Cultivo de café sob sombreamento de árvores nativas",
      typicalInvestment: { min: 50000, max: 250000 },
      expectedBenefits: {
        first: ["Proteção contra geadas", "Qualidade superior dos grãos", "Resistência a pragas"],
        second: ["Café especial com premium", "Certificação orgânica", "Turismo rural"],
        third: ["Preservação de espécies nativas", "Renda para agricultores familiares", "Cultura do café sustentável"]
      },
      implementationTime: { min: 18, max: 42 },
      riskReduction: 65,
      economicMultiplier: 4.6,
      socialImpact: 4.7
    },

    // Continuando com mais alguns projetos representativos de cada categoria...
    {
      id: "agr-010",
      name: "Pequenos açudes comunitários",
      sector: "Agricultura e Recursos Hídricos",
      category: "Captação e Armazenamento de Água",
      description: "Construção de açudes de pequeno porte para uso comunitário",
      typicalInvestment: { min: 100000, max: 500000 },
      expectedBenefits: {
        first: ["Segurança hídrica para 100+ famílias", "Controle de enchentes", "Recarga do lençol freático"],
        second: ["Piscicultura comunitária", "Irrigação coletiva", "Turismo local"],
        third: ["Fortalecimento da organização social", "Gestão participativa", "Patrimônio comunitário"]
      },
      implementationTime: { min: 12, max: 36 },
      riskReduction: 80,
      economicMultiplier: 3.8,
      socialImpact: 4.9
    }
  ],

  "Florestas e Ecossistemas": [
    {
      id: "flo-001",
      name: "Restauração de mata ciliar",
      sector: "Florestas e Ecossistemas",
      category: "Restauração Florestal",
      description: "Replantio de vegetação nativa nas margens de rios e córregos para proteção hídrica",
      typicalInvestment: { min: 60000, max: 400000 },
      expectedBenefits: {
        first: ["Controle de erosão", "Redução de enchentes", "Proteção da qualidade da água"],
        second: ["Aumento do valor da propriedade", "Oportunidades de ecoturismo", "Mercado de carbono"],
        third: ["Conservação da biodiversidade", "Melhoria da qualidade da água", "Benefícios paisagísticos"]
      },
      implementationTime: { min: 12, max: 36 },
      riskReduction: 65,
      economicMultiplier: 3.8,
      socialImpact: 4.4
    },
    {
      id: "flo-002",
      name: "Reflorestamento de encostas",
      sector: "Florestas e Ecossistemas",
      category: "Controle de Erosão",
      description: "Plantio de espécies nativas em áreas declivosas para estabilização do solo",
      typicalInvestment: { min: 80000, max: 500000 },
      expectedBenefits: {
        first: ["Prevenção de deslizamentos", "Controle de erosão", "Proteção de infraestrutura"],
        second: ["Exploração sustentável de madeira", "Turismo ecológico", "Serviços ambientais"],
        third: ["Habitat para fauna", "Regulação climática", "Qualidade do ar"]
      },
      implementationTime: { min: 18, max: 48 },
      riskReduction: 75,
      economicMultiplier: 4.1,
      socialImpact: 4.2
    },
    {
      id: "flo-003",
      name: "Corredores ecológicos",
      sector: "Florestas e Ecossistemas",
      category: "Conectividade",
      description: "Conexão entre fragmentos florestais para facilitar fluxo genético",
      typicalInvestment: { min: 120000, max: 1000000 },
      expectedBenefits: {
        first: ["Redução de riscos ambientais", "Estabilização do clima local", "Proteção contra desastres"],
        second: ["Desenvolvimento do ecoturismo", "Valorização imobiliária", "Mercados ambientais"],
        third: ["Conservação da fauna", "Serviços ecossistêmicos", "Educação ambiental"]
      },
      implementationTime: { min: 24, max: 60 },
      riskReduction: 50,
      economicMultiplier: 3.6,
      socialImpact: 4.8
    }
  ],

  "Infraestrutura e Urbanismo": [
    {
      id: "inf-001",
      name: "Pavimentos permeáveis",
      sector: "Infraestrutura e Urbanismo",
      category: "Drenagem Urbana",
      description: "Pavimentação que permite infiltração de água da chuva no solo",
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
      id: "inf-002",
      name: "Jardins de chuva urbanos",
      sector: "Infraestrutura e Urbanismo",
      category: "Infraestrutura Verde",
      description: "Áreas ajardinadas para captação e tratamento natural de águas pluviais",
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
    }
  ],

  "Saneamento e Saúde Pública": [
    {
      id: "san-001",
      name: "Redes de esgoto resilientes",
      sector: "Saneamento e Saúde Pública",
      category: "Infraestrutura Sanitária",
      description: "Sistemas de esgotamento sanitário adaptados a eventos climáticos extremos",
      typicalInvestment: { min: 500000, max: 5000000 },
      expectedBenefits: {
        first: ["Prevenção de contaminação", "Proteção contra enchentes", "Continuidade dos serviços"],
        second: ["Valorização imobiliária", "Redução de custos de saúde", "Desenvolvimento econômico"],
        third: ["Melhoria da saúde pública", "Qualidade de vida", "Dignidade humana"]
      },
      implementationTime: { min: 12, max: 36 },
      riskReduction: 70,
      economicMultiplier: 5.2,
      socialImpact: 4.9
    },
    {
      id: "san-002",
      name: "Centros de resfriamento locais",
      sector: "Saneamento e Saúde Pública",
      category: "Adaptação Climática",
      description: "Espaços climatizados públicos para proteção durante ondas de calor",
      typicalInvestment: { min: 80000, max: 400000 },
      expectedBenefits: {
        first: ["Proteção contra ondas de calor", "Redução de mortalidade", "Prevenção de doenças"],
        second: ["Centro comunitário multifuncional", "Atividades econômicas", "Turismo local"],
        third: ["Coesão social", "Inclusão de idosos", "Bem-estar comunitário"]
      },
      implementationTime: { min: 6, max: 18 },
      riskReduction: 55,
      economicMultiplier: 3.1,
      socialImpact: 4.7
    }
  ],

  "Infraestrutura de Energia": [
    {
      id: "ene-001",
      name: "Painéis solares comunitários",
      sector: "Infraestrutura de Energia",
      category: "Energia Renovável",
      description: "Sistemas fotovoltaicos compartilhados para comunidades resilientes",
      typicalInvestment: { min: 200000, max: 1500000 },
      expectedBenefits: {
        first: ["Independência energética", "Redução de apagões", "Energia de backup"],
        second: ["Redução de custos energéticos", "Geração de renda", "Empregos verdes"],
        third: ["Redução de emissões", "Capacitação técnica", "Autonomia comunitária"]
      },
      implementationTime: { min: 6, max: 18 },
      riskReduction: 50,
      economicMultiplier: 4.5,
      socialImpact: 4.3
    },
    {
      id: "ene-002",
      name: "Mini-redes off-grid",
      sector: "Infraestrutura de Energia",
      category: "Autonomia Energética",
      description: "Sistemas isolados de geração e distribuição de energia elétrica",
      typicalInvestment: { min: 300000, max: 2000000 },
      expectedBenefits: {
        first: ["Segurança energética", "Resiliência a desastres", "Continuidade de serviços"],
        second: ["Desenvolvimento econômico local", "Novos negócios", "Competitividade"],
        third: ["Inclusão digital", "Qualidade de vida", "Desenvolvimento rural"]
      },
      implementationTime: { min: 9, max: 24 },
      riskReduction: 65,
      economicMultiplier: 5.1,
      socialImpact: 4.6
    }
  ],

  "Transportes Resilientes": [
    {
      id: "tra-001",
      name: "Pontes reforçadas",
      sector: "Transportes Resilientes",
      category: "Infraestrutura Crítica",
      description: "Reforço estrutural de pontes para resistir a eventos climáticos extremos",
      typicalInvestment: { min: 800000, max: 8000000 },
      expectedBenefits: {
        first: ["Continuidade do transporte", "Proteção de vidas", "Redução de isolamento"],
        second: ["Fluxo econômico mantido", "Acesso a mercados", "Desenvolvimento regional"],
        third: ["Conectividade social", "Acesso a serviços", "Integração territorial"]
      },
      implementationTime: { min: 12, max: 36 },
      riskReduction: 75,
      economicMultiplier: 6.2,
      socialImpact: 4.4
    },
    {
      id: "tra-002",
      name: "Sistemas de monitoramento de infraestrutura",
      sector: "Transportes Resilientes",
      category: "Tecnologia de Monitoramento",
      description: "Sensores e sistemas de alerta para infraestrutura de transporte",
      typicalInvestment: { min: 150000, max: 800000 },
      expectedBenefits: {
        first: ["Detecção precoce de riscos", "Prevenção de acidentes", "Manutenção preditiva"],
        second: ["Redução de custos de manutenção", "Eficiência operacional", "Competitividade"],
        third: ["Segurança dos usuários", "Confiabilidade do sistema", "Inovação tecnológica"]
      },
      implementationTime: { min: 6, max: 18 },
      riskReduction: 60,
      economicMultiplier: 4.8,
      socialImpact: 4.1
    }
  ],

  "Ambiente Social e Educação": [
    {
      id: "soc-001",
      name: "Redes de alerta precoce",
      sector: "Ambiente Social e Educação",
      category: "Preparação para Emergências",
      description: "Sistemas comunitários de alerta para eventos climáticos extremos",
      typicalInvestment: { min: 50000, max: 300000 },
      expectedBenefits: {
        first: ["Redução de vítimas", "Proteção de bens", "Resposta rápida a emergências"],
        second: ["Redução de perdas econômicas", "Continuidade de negócios", "Eficiência de resposta"],
        third: ["Coesão comunitária", "Capacitação local", "Cultura de prevenção"]
      },
      implementationTime: { min: 6, max: 15 },
      riskReduction: 55,
      economicMultiplier: 3.7,
      socialImpact: 4.8
    },
    {
      id: "soc-002",
      name: "Centros de acolhimento temporário",
      sector: "Ambiente Social e Educação",
      category: "Infraestrutura Social",
      description: "Espaços seguros para abrigar população durante emergências climáticas",
      typicalInvestment: { min: 200000, max: 1000000 },
      expectedBenefits: {
        first: ["Proteção de vidas", "Redução de trauma", "Segurança durante emergências"],
        second: ["Centro comunitário multifuncional", "Atividades culturais", "Geração de empregos"],
        third: ["Coesão social", "Dignidade humana", "Fortalecimento comunitário"]
      },
      implementationTime: { min: 8, max: 24 },
      riskReduction: 70,
      economicMultiplier: 2.9,
      socialImpact: 4.9
    }
  ],

  "Engenharia Costeira e Pesca": [
    {
      id: "cos-001",
      name: "Restauro de manguezais",
      sector: "Engenharia Costeira e Pesca",
      category: "Ecossistemas Costeiros",
      description: "Recuperação de ecossistemas de mangue para proteção costeira natural",
      typicalInvestment: { min: 100000, max: 800000 },
      expectedBenefits: {
        first: ["Proteção contra ressaca", "Redução de erosão costeira", "Barreira natural"],
        second: ["Pesca sustentável", "Turismo ecológico", "Aquicultura"],
        third: ["Biodiversidade marinha", "Sequestro de carbono", "Cultura tradicional"]
      },
      implementationTime: { min: 12, max: 36 },
      riskReduction: 65,
      economicMultiplier: 4.3,
      socialImpact: 4.5
    },
    {
      id: "cos-002",
      name: "Estações de maricultura",
      sector: "Engenharia Costeira e Pesca",
      category: "Aquicultura Adaptativa",
      description: "Sistemas de cultivo marinho resilientes a mudanças climáticas",
      typicalInvestment: { min: 150000, max: 1200000 },
      expectedBenefits: {
        first: ["Segurança alimentar", "Proteção contra variabilidade", "Diversificação produtiva"],
        second: ["Renda para pescadores", "Mercados premium", "Exportação"],
        third: ["Preservação da cultura pesqueira", "Capacitação técnica", "Sustentabilidade marinha"]
      },
      implementationTime: { min: 9, max: 24 },
      riskReduction: 50,
      economicMultiplier: 5.4,
      socialImpact: 4.2
    }
  ],

  "Saúde e Bem Estar": [
    {
      id: "sau-001",
      name: "Centros climatizados comunitários",
      sector: "Saúde e Bem Estar",
      category: "Adaptação Climática",
      description: "Espaços com climatização para proteção da população vulnerável",
      typicalInvestment: { min: 120000, max: 600000 },
      expectedBenefits: {
        first: ["Proteção contra extremos térmicos", "Redução de mortalidade", "Prevenção de doenças"],
        second: ["Centro multifuncional", "Atividades econômicas", "Prestação de serviços"],
        third: ["Inclusão social", "Bem-estar comunitário", "Coesão social"]
      },
      implementationTime: { min: 6, max: 18 },
      riskReduction: 60,
      economicMultiplier: 3.2,
      socialImpact: 4.7
    },
    {
      id: "sau-002",
      name: "App de alertas de riscos extremos",
      sector: "Saúde e Bem Estar",
      category: "Tecnologia de Saúde",
      description: "Aplicativo móvel para alertas e orientações sobre riscos climáticos",
      typicalInvestment: { min: 80000, max: 400000 },
      expectedBenefits: {
        first: ["Alertas em tempo real", "Prevenção de doenças", "Orientação médica"],
        second: ["Economia em saúde pública", "Eficiência de atendimento", "Inovação tecnológica"],
        third: ["Capacitação digital", "Acesso à informação", "Empoderamento comunitário"]
      },
      implementationTime: { min: 6, max: 12 },
      riskReduction: 40,
      economicMultiplier: 4.1,
      socialImpact: 4.3
    }
  ],

  "Governança e Finanças Climáticas": [
    {
      id: "gov-001",
      name: "Seguros indexados por clima",
      sector: "Governança e Finanças Climáticas",
      category: "Instrumentos Financeiros",
      description: "Produtos de seguro baseados em índices climáticos para proteção financeira",
      typicalInvestment: { min: 200000, max: 2000000 },
      expectedBenefits: {
        first: ["Proteção financeira", "Redução de perdas econômicas", "Recuperação rápida"],
        second: ["Estabilidade econômica", "Acesso ao crédito", "Desenvolvimento de mercados"],
        third: ["Redução da pobreza", "Inclusão financeira", "Resiliência comunitária"]
      },
      implementationTime: { min: 12, max: 24 },
      riskReduction: 55,
      economicMultiplier: 6.8,
      socialImpact: 4.4
    },
    {
      id: "gov-002",
      name: "Financiamento climático comunitário",
      sector: "Governança e Finanças Climáticas",
      category: "Microfinanças",
      description: "Fundos rotativos comunitários para projetos de adaptação climática",
      typicalInvestment: { min: 100000, max: 800000 },
      expectedBenefits: {
        first: ["Acesso ao financiamento", "Redução de vulnerabilidade", "Capacidade adaptativa"],
        second: ["Desenvolvimento local", "Empreendedorismo", "Geração de renda"],
        third: ["Empoderamento comunitário", "Coesão social", "Autogestão"]
      },
      implementationTime: { min: 6, max: 18 },
      riskReduction: 45,
      economicMultiplier: 4.2,
      socialImpact: 4.6
    }
  ]
};
