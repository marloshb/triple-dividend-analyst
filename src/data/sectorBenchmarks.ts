
import { SectorBenchmarks } from "@/types/advancedAnalysis";

export const SECTOR_BENCHMARKS: Record<string, SectorBenchmarks> = {
  "Agricultura e Recursos Hídricos": {
    sector: "Agricultura e Recursos Hídricos",
    typical_investment: {
      min: 50000,
      max: 2000000,
      median: 300000
    },
    roi_benchmarks: {
      low: 150,
      average: 280,
      high: 450
    },
    implementation_time: {
      min: 6, // meses
      max: 36
    },
    success_rate: 78,
    risk_level: 'medium'
  },
  "Florestas e Ecossistemas": {
    sector: "Florestas e Ecossistemas",
    typical_investment: {
      min: 80000,
      max: 5000000,
      median: 600000
    },
    roi_benchmarks: {
      low: 200,
      average: 350,
      high: 600
    },
    implementation_time: {
      min: 12,
      max: 60
    },
    success_rate: 65,
    risk_level: 'medium'
  },
  "Infraestrutura e Urbanismo": {
    sector: "Infraestrutura e Urbanismo",
    typical_investment: {
      min: 200000,
      max: 20000000,
      median: 2000000
    },
    roi_benchmarks: {
      low: 120,
      average: 220,
      high: 380
    },
    implementation_time: {
      min: 12,
      max: 48
    },
    success_rate: 72,
    risk_level: 'high'
  },
  "Saneamento e Saúde Pública": {
    sector: "Saneamento e Saúde Pública",
    typical_investment: {
      min: 100000,
      max: 8000000,
      median: 800000
    },
    roi_benchmarks: {
      low: 180,
      average: 320,
      high: 500
    },
    implementation_time: {
      min: 8,
      max: 36
    },
    success_rate: 81,
    risk_level: 'medium'
  },
  "Infraestrutura de Energia": {
    sector: "Infraestrutura de Energia",
    typical_investment: {
      min: 150000,
      max: 10000000,
      median: 1200000
    },
    roi_benchmarks: {
      low: 140,
      average: 250,
      high: 400
    },
    implementation_time: {
      min: 6,
      max: 24
    },
    success_rate: 85,
    risk_level: 'low'
  },
  "Transportes Resilientes": {
    sector: "Transportes Resilientes",
    typical_investment: {
      min: 300000,
      max: 50000000,
      median: 5000000
    },
    roi_benchmarks: {
      low: 110,
      average: 180,
      high: 280
    },
    implementation_time: {
      min: 18,
      max: 72
    },
    success_rate: 68,
    risk_level: 'high'
  },
  "Ambiente Social e Educação": {
    sector: "Ambiente Social e Educação",
    typical_investment: {
      min: 30000,
      max: 1000000,
      median: 200000
    },
    roi_benchmarks: {
      low: 200,
      average: 380,
      high: 650
    },
    implementation_time: {
      min: 3,
      max: 18
    },
    success_rate: 88,
    risk_level: 'low'
  },
  "Engenharia Costeira e Pesca": {
    sector: "Engenharia Costeira e Pesca",
    typical_investment: {
      min: 200000,
      max: 15000000,
      median: 2500000
    },
    roi_benchmarks: {
      low: 130,
      average: 240,
      high: 380
    },
    implementation_time: {
      min: 12,
      max: 48
    },
    success_rate: 70,
    risk_level: 'high'
  },
  "Saúde e Bem Estar": {
    sector: "Saúde e Bem Estar",
    typical_investment: {
      min: 50000,
      max: 3000000,
      median: 400000
    },
    roi_benchmarks: {
      low: 160,
      average: 290,
      high: 480
    },
    implementation_time: {
      min: 4,
      max: 24
    },
    success_rate: 84,
    risk_level: 'low'
  },
  "Governança e Finanças Climáticas": {
    sector: "Governança e Finanças Climáticas",
    typical_investment: {
      min: 80000,
      max: 5000000,
      median: 600000
    },
    roi_benchmarks: {
      low: 190,
      average: 340,
      high: 520
    },
    implementation_time: {
      min: 6,
      max: 36
    },
    success_rate: 75,
    risk_level: 'medium'
  }
};

export const ADAPTIVE_PROJECTS_BY_SECTOR = {
  "Agricultura e Recursos Hídricos": [
    { name: "Sistemas de irrigação por gotejamento", typical_cost: 80000, roi_estimate: 280 },
    { name: "Irrigação de precisão com sensores", typical_cost: 150000, roi_estimate: 320 },
    { name: "Tanques de captação de água da chuva", typical_cost: 45000, roi_estimate: 240 },
    { name: "Recuperação de nascentes", typical_cost: 120000, roi_estimate: 350 },
    { name: "Bacias de retenção de água", typical_cost: 200000, roi_estimate: 190 },
    { name: "Sistemas agroflorestais", typical_cost: 90000, roi_estimate: 380 },
    { name: "Barreiras verdes ao redor de campos", typical_cost: 35000, roi_estimate: 220 },
    { name: "Proteção de margens de rios", typical_cost: 110000, roi_estimate: 280 },
    { name: "Reservatórios subterrâneos (cisternas)", typical_cost: 60000, roi_estimate: 260 },
    { name: "Técnicas de plantio direto", typical_cost: 25000, roi_estimate: 340 },
    { name: "Cultivos de cobertura", typical_cost: 18000, roi_estimate: 290 },
    { name: "Variedades resistentes à seca", typical_cost: 50000, roi_estimate: 450 },
    { name: "Sistemas de aquaponia resilientes", typical_cost: 75000, roi_estimate: 310 },
    { name: "Reservas hídricas comunitárias", typical_cost: 180000, roi_estimate: 240 },
    { name: "Canaletas para distribuição de água", typical_cost: 95000, roi_estimate: 200 }
  ],
  "Florestas e Ecossistemas": [
    { name: "Restauração de mata ciliar", typical_cost: 150000, roi_estimate: 380 },
    { name: "Reflorestamento de encostas", typical_cost: 200000, roi_estimate: 320 },
    { name: "Corredores ecológicos entre fragmentos", typical_cost: 300000, roi_estimate: 290 },
    { name: "Controle de espécies invasoras", typical_cost: 80000, roi_estimate: 250 },
    { name: "Produção sustentável de carvão vegetal", typical_cost: 120000, roi_estimate: 340 },
    { name: "Plantio em áreas de nascente", typical_cost: 90000, roi_estimate: 420 },
    { name: "Unidades de conservação comunitária", typical_cost: 400000, roi_estimate: 280 },
    { name: "Proteção a nascentes", typical_cost: 75000, roi_estimate: 380 },
    { name: "Conservação de áreas alagáveis", typical_cost: 250000, roi_estimate: 310 },
    { name: "Jardins de chuva urbanos", typical_cost: 45000, roi_estimate: 260 },
    { name: "Telhados verdes comunitários", typical_cost: 85000, roi_estimate: 240 }
  ],
  "Infraestrutura e Urbanismo": [
    { name: "Pavimentos permeáveis", typical_cost: 300000, roi_estimate: 180 },
    { name: "Calçadas permeáveis", typical_cost: 120000, roi_estimate: 160 },
    { name: "Reservatórios subterrâneos urbanos", typical_cost: 500000, roi_estimate: 220 },
    { name: "Retenção de água em parques", typical_cost: 200000, roi_estimate: 190 },
    { name: "Ciclovias elevadas", typical_cost: 800000, roi_estimate: 140 },
    { name: "Mais árvores nas ruas", typical_cost: 150000, roi_estimate: 280 },
    { name: "Infraestrutura azul", typical_cost: 600000, roi_estimate: 210 },
    { name: "Aumento da drenagem pluvial", typical_cost: 400000, roi_estimate: 190 },
    { name: "Barreiras contra enchentes", typical_cost: 1200000, roi_estimate: 240 },
    { name: "Escoamento verde urbano", typical_cost: 350000, roi_estimate: 200 },
    { name: "Reforço de pontes", typical_cost: 2000000, roi_estimate: 130 },
    { name: "Torres de resfriamento urbano", typical_cost: 180000, roi_estimate: 170 },
    { name: "Reforço de redes elétricas", typical_cost: 800000, roi_estimate: 160 },
    { name: "Sistemas redundantes de energia", typical_cost: 600000, roi_estimate: 180 },
    { name: "Abastecimento de água alternativo", typical_cost: 450000, roi_estimate: 220 },
    { name: "Armazenamento local de alimentos", typical_cost: 250000, roi_estimate: 260 }
  ]
  // Continua com outros setores...
};
