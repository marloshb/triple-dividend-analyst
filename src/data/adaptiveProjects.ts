import { AdaptiveProjectTemplate, Sector } from "@/types/climate";
import { infraestruturaUrbanismoProjects } from "./sectors/infraestrutura-urbanismo";
import { saneamentoSaudeProjects } from "./sectors/saneamento-saude";
import { infraestruturaEnergiaProjects } from "./sectors/infraestrutura-energia";

// Agriculture and Water Resources projects
const agriculturaProjects: AdaptiveProjectTemplate[] = [
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
];

// Forests and Ecosystems projects
const florestasProjects: AdaptiveProjectTemplate[] = [
  // 🌱 A. Restauração e Reflorestamento (1-80)
  {
    id: "flo-001",
    name: "Reflorestamento de áreas degradadas",
    sector: "Florestas e Ecossistemas",
    category: "Restauração e Reflorestamento",
    description: "Plantio de espécies nativas para recuperação de áreas degradadas com foco em biodiversidade",
    typicalInvestment: { min: 120000, max: 800000 },
    expectedBenefits: {
      first: ["Controle de erosão completo", "Redução de 70% nos riscos de deslizamento", "Estabilização do microclima"],
      second: ["Créditos de carbono R$ 50/ton/ano", "Ecoturismo com potencial de R$ 80k/ano", "Valorização de 30% das propriedades"],
      third: ["Habitat para 200+ espécies", "Sequestro de 15 ton CO2/ha/ano", "Educação ambiental comunitária"]
    },
    implementationTime: { min: 18, max: 60 },
    riskReduction: 75,
    economicMultiplier: 4.2,
    socialImpact: 4.8
  },
  {
    id: "flo-002",
    name: "Plantio de espécies nativas em encostas",
    sector: "Florestas e Ecossistemas",
    category: "Restauração e Reflorestamento",
    description: "Reflorestamento específico para encostas com espécies de alta fixação de solo",
    typicalInvestment: { min: 80000, max: 500000 },
    expectedBenefits: {
      first: ["Prevenção de 95% dos deslizamentos", "Proteção de infraestrutura abaixo", "Controle de enchentes"],
      second: ["Economia de R$ 2M em obras preventivas", "Turismo ecológico", "Exploração sustentável"],
      third: ["Proteção de 500+ famílias", "Corredor para fauna", "Microclima estabilizado"]
    },
    implementationTime: { min: 12, max: 48 },
    riskReduction: 85,
    economicMultiplier: 5.1,
    socialImpact: 4.7
  },
  {
    id: "flo-003",
    name: "Reflorestamento de APPs",
    sector: "Florestas e Ecossistemas",
    category: "Restauração e Reflorestamento",
    description: "Recuperação de Áreas de Preservação Permanente com espécies nativas regionais",
    typicalInvestment: { min: 100000, max: 600000 },
    expectedBenefits: {
      first: ["Conformidade legal completa", "Proteção hídrica garantida", "Redução de multas ambientais"],
      second: ["Certificações ambientais", "Acesso a linhas de crédito verde", "Valorização imobiliária"],
      third: ["Qualidade da água melhorada", "Biodiversidade restaurada", "Serviços ecossistêmicos"]
    },
    implementationTime: { min: 24, max: 72 },
    riskReduction: 70,
    economicMultiplier: 3.8,
    socialImpact: 4.6
  },
  {
    id: "flo-004",
    name: "Reflorestamento de nascentes",
    sector: "Florestas e Ecossistemas",
    category: "Restauração e Reflorestamento",
    description: "Proteção e recuperação de nascentes através de reflorestamento dirigido",
    typicalInvestment: { min: 60000, max: 300000 },
    expectedBenefits: {
      first: ["Garantia hídrica permanente", "Qualidade da água protegida", "Vazão aumentada em 40%"],
      second: ["Economia em tratamento de água", "Abastecimento rural sustentável", "Turismo de nascentes"],
      third: ["Segurança hídrica comunitária", "Patrimônio natural preservado", "Educação sobre recursos hídricos"]
    },
    implementationTime: { min: 18, max: 48 },
    riskReduction: 80,
    economicMultiplier: 4.5,
    socialImpact: 4.9
  },
  {
    id: "flo-005",
    name: "Corredores ecológicos entre fragmentos",
    sector: "Florestas e Ecossistemas",
    category: "Restauração e Reflorestamento",
    description: "Conexão de fragmentos florestais através de corredores de vegetação nativa",
    typicalInvestment: { min: 200000, max: 1500000 },
    expectedBenefits: {
      first: ["Conectividade de habitat restaurada", "Redução de 60% na perda de biodiversidade", "Estabilidade genética"],
      second: ["Mercado de carbono potencializado", "Turismo ecológico integrado", "Pesquisa científica"],
      third: ["Fluxo gênico restaurado", "Polinização melhorada", "Resiliência climática aumentada"]
    },
    implementationTime: { min: 36, max: 120 },
    riskReduction: 65,
    economicMultiplier: 3.9,
    socialImpact: 4.4
  },

  // 🌿 B. Proteção e Conservação (81-160)
  {
    id: "flo-081",
    name: "Criação de unidades de conservação municipais",
    sector: "Florestas e Ecossistemas",
    category: "Proteção e Conservação",
    description: "Estabelecimento de UCs municipais para proteção de ecossistemas locais",
    typicalInvestment: { min: 500000, max: 5000000 },
    expectedBenefits: {
      first: ["Proteção legal permanente", "Prevenção de 100% do desmatamento", "Controle de ocupação irregular"],
      second: ["Ecoturismo estruturado", "Pesquisa científica", "Fundos ambientais internacionais"],
      third: ["Patrimônio natural municipal", "Educação ambiental", "Qualidade de vida urbana"]
    },
    implementationTime: { min: 24, max: 72 },
    riskReduction: 90,
    economicMultiplier: 4.6,
    socialImpact: 4.8
  },
  {
    id: "flo-082",
    name: "Implementação de APPs protegidas",
    sector: "Florestas e Ecossistemas",
    category: "Proteção e Conservação",
    description: "Demarcação e proteção efetiva de Áreas de Preservação Permanente",
    typicalInvestment: { min: 150000, max: 800000 },
    expectedBenefits: {
      first: ["Conformidade legal total", "Proteção hídrica efetiva", "Prevenção de erosão"],
      second: ["Certificações ambientais", "Acesso a crédito rural verde", "Valorização da propriedade"],
      third: ["Serviços ecossistêmicos preservados", "Biodiversidade protegida", "Qualidade da água"]
    },
    implementationTime: { min: 12, max: 36 },
    riskReduction: 85,
    economicMultiplier: 3.7,
    socialImpact: 4.3
  },
  {
    id: "flo-083",
    name: "Fiscalização participativa contra desmatamento",
    sector: "Florestas e Ecossistemas",
    category: "Proteção e Conservação",
    description: "Sistema comunitário de monitoramento e denúncia de desmatamento ilegal",
    typicalInvestment: { min: 80000, max: 400000 },
    expectedBenefits: {
      first: ["Redução de 80% no desmatamento ilegal", "Resposta rápida a infrações", "Cobertura territorial ampla"],
      second: ["Economia em fiscalização oficial", "Empregos de guardiões ambientais", "Multas e compensações"],
      third: ["Empoderamento comunitário", "Educação ambiental prática", "Coesão social"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 70,
    economicMultiplier: 5.2,
    socialImpact: 4.7
  },
  {
    id: "flo-084",
    name: "Monitoramento satelital de uso do solo",
    sector: "Florestas e Ecossistemas",
    category: "Proteção e Conservação",
    description: "Sistema de monitoramento por satélite para detecção de mudanças na cobertura florestal",
    typicalInvestment: { min: 200000, max: 1000000 },
    expectedBenefits: {
      first: ["Detecção em tempo real", "Cobertura de grandes áreas", "Evidência legal de infrações"],
      second: ["Eficiência na fiscalização", "Redução de custos operacionais", "Tecnologia de ponta"],
      third: ["Transparência ambiental", "Dados para pesquisa", "Governança territorial"]
    },
    implementationTime: { min: 12, max: 24 },
    riskReduction: 75,
    economicMultiplier: 4.8,
    socialImpact: 4.1
  },
  {
    id: "flo-085",
    name: "Programas de educação ambiental nas comunidades",
    sector: "Florestas e Ecossistemas",
    category: "Proteção e Conservação",
    description: "Capacitação comunitária em conservação e manejo sustentável de recursos naturais",
    typicalInvestment: { min: 50000, max: 300000 },
    expectedBenefits: {
      first: ["Redução de 60% nas infrações ambientais", "Práticas sustentáveis adotadas", "Prevenção de conflitos"],
      second: ["Ecoturismo de base comunitária", "Produtos sustentáveis certificados", "Empregos verdes"],
      third: ["Cultura de conservação", "Transmissão de conhecimento", "Protagonismo local"]
    },
    implementationTime: { min: 12, max: 36 },
    riskReduction: 55,
    economicMultiplier: 3.4,
    socialImpact: 4.9
  },

  // 🌿 C. Gestão e Monitoramento (161-240)
  {
    id: "flo-161",
    name: "Monitoramento de desmatamento com drones",
    sector: "Florestas e Ecossistemas",
    category: "Gestão e Monitoramento",
    description: "Sistema de vigilância aérea com drones para monitoramento florestal em tempo real",
    typicalInvestment: { min: 150000, max: 800000 },
    expectedBenefits: {
      first: ["Detecção imediata de desmatamento", "Cobertura de áreas remotas", "Evidência audiovisual"],
      second: ["Eficiência operacional 300% maior", "Redução de custos de fiscalização", "Tecnologia inovadora"],
      third: ["Transparência total", "Dados para pesquisa", "Capacitação tecnológica local"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 80,
    economicMultiplier: 5.5,
    socialImpact: 4.2
  },
  {
    id: "flo-162",
    name: "Estações meteorológicas comunitárias",
    sector: "Florestas e Ecossistemas",
    category: "Gestão e Monitoramento",
    description: "Rede de estações meteorológicas para monitoramento climático e previsão de riscos",
    typicalInvestment: { min: 80000, max: 400000 },
    expectedBenefits: {
      first: ["Alertas precoces de eventos extremos", "Dados climáticos locais", "Prevenção de desastres"],
      second: ["Agricultura de precisão melhorada", "Turismo com previsões locais", "Consultoria climática"],
      third: ["Conhecimento científico comunitário", "Adaptação climática informada", "Resiliência local"]
    },
    implementationTime: { min: 4, max: 12 },
    riskReduction: 65,
    economicMultiplier: 4.1,
    socialImpact: 4.5
  },
  {
    id: "flo-163",
    name: "Monitoramento de fauna com câmeras remotas",
    sector: "Florestas e Ecossistemas",
    category: "Gestão e Monitoramento",
    description: "Sistema de câmeras trap para monitoramento não invasivo da fauna silvestre",
    typicalInvestment: { min: 100000, max: 500000 },
    expectedBenefits: {
      first: ["Dados de biodiversidade precisos", "Detecção de espécies raras", "Monitoramento de saúde populacional"],
      second: ["Ecoturismo científico", "Pesquisa rentável", "Consultoria em fauna"],
      third: ["Conservação baseada em evidência", "Educação sobre fauna local", "Orgulho comunitário"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 45,
    economicMultiplier: 3.8,
    socialImpact: 4.6
  },
  {
    id: "flo-164",
    name: "Rede de sensores de umidade de solo",
    sector: "Florestas e Ecossistemas",
    category: "Gestão e Monitoramento",
    description: "Sistema IoT para monitoramento contínuo da umidade do solo florestal",
    typicalInvestment: { min: 120000, max: 600000 },
    expectedBenefits: {
      first: ["Prevenção de incêndios florestais", "Monitoramento de estresse hídrico", "Alertas automáticos"],
      second: ["Manejo florestal otimizado", "Redução de perdas", "Tecnologia de precisão"],
      third: ["Dados para pesquisa climática", "Adaptação baseada em dados", "Inovação tecnológica local"]
    },
    implementationTime: { min: 8, max: 24 },
    riskReduction: 70,
    economicMultiplier: 4.4,
    socialImpact: 4.0
  },
  {
    id: "flo-165",
    name: "Monitoramento de qualidade de água em córregos",
    sector: "Florestas e Ecossistemas",
    category: "Gestão e Monitoramento",
    description: "Sistema de sensores para monitoramento contínuo da qualidade da água em ecossistemas florestais",
    typicalInvestment: { min: 90000, max: 450000 },
    expectedBenefits: {
      first: ["Detecção precoce de poluição", "Proteção de mananciais", "Qualidade hídrica garantida"],
      second: ["Certificação de qualidade", "Abastecimento público confiável", "Consultoria hídrica"],
      third: ["Saúde pública protegida", "Ecossistemas aquáticos preservados", "Educação sobre recursos hídricos"]
    },
    implementationTime: { min: 6, max: 15 },
    riskReduction: 75,
    economicMultiplier: 4.3,
    socialImpact: 4.7
  }
];

// Other sectors projects
const transportesProjects: AdaptiveProjectTemplate[] = [
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
];

const socialProjects: AdaptiveProjectTemplate[] = [
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
];

const costeiroProjects: AdaptiveProjectTemplate[] = [
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
];

const saudeProjects: AdaptiveProjectTemplate[] = [
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
];

const governancaProjects: AdaptiveProjectTemplate[] = [
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
];

export const adaptiveProjects: Record<Sector, AdaptiveProjectTemplate[]> = {
  "Agricultura e Recursos Hídricos": agriculturaProjects,
  "Florestas e Ecossistemas": florestasProjects,
  "Infraestrutura e Urbanismo": infraestruturaUrbanismoProjects,
  "Saneamento e Saúde Pública": saneamentoSaudeProjects,
  "Infraestrutura de Energia": infraestruturaEnergiaProjects,
  "Transportes Resilientes": transportesProjects,
  "Ambiente Social e Educação": socialProjects,
  "Engenharia Costeira e Pesca": costeiroProjects,
  "Saúde e Bem Estar": saudeProjects,
  "Governança e Finanças Climáticas": governancaProjects
};
