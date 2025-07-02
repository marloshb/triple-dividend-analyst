import { AdaptiveProjectTemplate, Sector } from "@/types/climate";

export const adaptiveProjects: Record<Sector, AdaptiveProjectTemplate[]> = {
  "Agricultura e Recursos Hídricos": [
    {
      id: "agr-001",
      name: "Irrigação por gotejamento de precisão",
      sector: "Agricultura e Recursos Hídricos",
      category: "Gestão de Água",
      description: "Sistema de irrigação eficiente que reduz consumo de água em até 50% e aumenta produtividade agrícola",
      typicalInvestment: { min: 50000, max: 500000 },
      expectedBenefits: {
        first: ["Redução de perdas por seca", "Proteção de cultivos", "Menor dependência de chuvas"],
        second: ["Aumento de 30-50% na produtividade", "Redução de custos operacionais", "Criação de empregos especializados"],
        third: ["Conservação de recursos hídricos", "Melhoria da segurança alimentar", "Redução de migração rural"]
      },
      implementationTime: { min: 6, max: 18 },
      riskReduction: 65,
      economicMultiplier: 3.5,
      socialImpact: 4.2
    },
    {
      id: "agr-002",
      name: "Cisternas rurais comunitárias",
      sector: "Agricultura e Recursos Hídricos",
      category: "Gestão de Água",
      description: "Sistemas de captação e armazenamento de água da chuva para uso agrícola e doméstico",
      typicalInvestment: { min: 15000, max: 80000 },
      expectedBenefits: {
        first: ["Garantia de água em períodos secos", "Redução de perdas de safra", "Menor vulnerabilidade climática"],
        second: ["Estabilização da produção agrícola", "Redução de custos com transporte de água", "Geração de empregos locais"],
        third: ["Melhoria da qualidade de vida rural", "Fortalecimento da organização comunitária", "Preservação ambiental"]
      },
      implementationTime: { min: 3, max: 12 },
      riskReduction: 45,
      economicMultiplier: 2.8,
      socialImpact: 4.8
    },
    {
      id: "agr-003",
      name: "Barraginhas de infiltração",
      sector: "Agricultura e Recursos Hídricos",
      category: "Gestão de Água",
      description: "Microbacias de contenção para aumentar infiltração de água no solo e recarga de aquíferos",
      typicalInvestment: { min: 5000, max: 25000 },
      expectedBenefits: {
        first: ["Controle de erosão", "Redução de enchentes", "Aumento da disponibilidade hídrica"],
        second: ["Melhoria da fertilidade do solo", "Aumento da produtividade agrícola", "Redução de custos de irrigação"],
        third: ["Restauração de ecossistemas", "Melhoria da biodiversidade", "Sequestro de carbono"]
      },
      implementationTime: { min: 2, max: 6 },
      riskReduction: 35,
      economicMultiplier: 2.1,
      socialImpact: 3.5
    },
    {
      id: "agr-004",
      name: "Sistemas agroflorestais",
      sector: "Agricultura e Recursos Hídricos",
      category: "Práticas Resilientes",
      description: "Integração de árvores, cultivos e pastagens para maior resiliência climática",
      typicalInvestment: { min: 30000, max: 200000 },
      expectedBenefits: {
        first: ["Proteção contra eventos extremos", "Redução de perdas por seca e tempestades", "Estabilização do microclima"],
        second: ["Diversificação de renda", "Aumento da produtividade por hectare", "Criação de novos mercados"],
        third: ["Conservação da biodiversidade", "Sequestro de carbono", "Melhoria da qualidade do solo"]
      },
      implementationTime: { min: 12, max: 36 },
      riskReduction: 55,
      economicMultiplier: 4.2,
      socialImpact: 4.5
    },
    {
      id: "agr-005",
      name: "Sensores de umidade inteligentes",
      sector: "Agricultura e Recursos Hídricos",
      category: "Tecnologia Agrícola",
      description: "Monitoramento em tempo real da umidade do solo para irrigação de precisão",
      typicalInvestment: { min: 20000, max: 100000 },
      expectedBenefits: {
        first: ["Prevenção de estresse hídrico", "Otimização do uso da água", "Redução de perdas"],
        second: ["Aumento de 20-30% na eficiência", "Redução de custos operacionais", "Melhoria da qualidade dos produtos"],
        third: ["Conservação de recursos", "Capacitação tecnológica", "Sustentabilidade ambiental"]
      },
      implementationTime: { min: 3, max: 9 },
      riskReduction: 40,
      economicMultiplier: 3.1,
      socialImpact: 3.8
    }
    // ... Adicionar mais 25 projetos para completar os 30
  ],

  "Florestas e Ecossistemas": [
    {
      id: "flo-001",
      name: "Restauração de mata ciliar",
      sector: "Florestas e Ecossistemas",
      category: "Restauração Florestal",
      description: "Replantio de vegetação nativa nas margens de rios e córregos para proteção hídrica",
      typicalInvestment: { min: 40000, max: 300000 },
      expectedBenefits: {
        first: ["Controle de erosão", "Redução de enchentes", "Proteção da qualidade da água"],
        second: ["Aumento do valor da propriedade", "Oportunidades de ecoturismo", "Mercado de carbono"],
        third: ["Conservação da biodiversidade", "Melhoria da qualidade da água", "Benefícios paisagísticos"]
      },
      implementationTime: { min: 12, max: 24 },
      riskReduction: 50,
      economicMultiplier: 2.5,
      socialImpact: 4.0
    },
    {
      id: "flo-002",
      name: "Corredores ecológicos",
      sector: "Florestas e Ecossistemas",
      category: "Conectividade",
      description: "Conexão entre fragmentos florestais para facilitar fluxo genético e migração de espécies",
      typicalInvestment: { min: 100000, max: 800000 },
      expectedBenefits: {
        first: ["Redução de riscos ambientais", "Estabilização do clima local", "Proteção contra desastres"],
        second: ["Desenvolvimento do ecoturismo", "Valorização imobiliária", "Mercados ambientais"],
        third: ["Conservação da fauna", "Serviços ecossistêmicos", "Educação ambiental"]
      },
      implementationTime: { min: 18, max: 48 },
      riskReduction: 45,
      economicMultiplier: 3.2,
      socialImpact: 4.3
    }
    // ... Adicionar mais 28 projetos
  ],

  // ... Continuar com os outros setores
  "Infraestrutura e Urbanismo": [],
  "Saneamento e Saúde Pública": [],
  "Infraestrutura de Energia": [],
  "Transportes Resilientes": [],
  "Ambiente Social e Educação": [],
  "Engenharia Costeira e Pesca": [],
  "Saúde e Bem Estar": [],
  "Governança e Finanças Climáticas": []
};