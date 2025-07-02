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
}

export const SECTORS = [
  'Agricultura e Recursos Hídricos',
  'Florestas e Ecossistemas',
  'Infraestrutura e Urbanismo',
  'Saneamento e Saúde Pública',
  'Infraestrutura de Energia',
  'Transportes Resilientes',
  'Ambiente Social e Educação',
  'Engenharia Costeira e Pesca',
  'Saúde e Bem Estar',
  'Governança e Finanças Climáticas'
] as const;

export type Sector = typeof SECTORS[number];