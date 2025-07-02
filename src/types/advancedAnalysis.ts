
export interface CostBenefitAnalysis {
  totalCosts: {
    implementation: number;
    operational: number;
    maintenance: number;
    opportunity: number;
  };
  totalBenefits: {
    direct: number;
    indirect: number;
    avoided: number;
    ecosystem: number;
  };
  npv: number;
  bcr: number; // Benefit-Cost Ratio
  irr: number; // Internal Rate of Return
  paybackPeriod: number;
}

export interface TEEBAnalysis {
  ecosystemServices: {
    provisioning: number; // água, alimentos, energia
    regulating: number; // clima, qualidade ar/água
    cultural: number; // recreação, estética
    supporting: number; // biodiversidade, ciclos
  };
  economicValue: number;
  socialValue: number;
  environmentalValue: number;
}

export interface ValueForMoneyAnalysis {
  economyScore: number; // 0-100
  efficiencyScore: number; // 0-100  
  effectivenessScore: number; // 0-100
  overallVfM: number; // 0-100
  recommendation: 'excellent' | 'good' | 'acceptable' | 'poor';
}

export interface ImpactPathwayAnalysis {
  inputs: string[];
  activities: string[];
  outputs: string[];
  outcomes: string[];
  impacts: string[];
  assumptions: string[];
  risks: string[];
}

export interface SDGCostingModel {
  sdgTargets: {
    sdg1: number; // No Poverty
    sdg2: number; // Zero Hunger
    sdg3: number; // Good Health
    sdg6: number; // Clean Water
    sdg7: number; // Affordable Energy
    sdg11: number; // Sustainable Cities
    sdg13: number; // Climate Action
    sdg15: number; // Life on Land
  };
  totalSDGCost: number;
  costPerBeneficiary: number;
  sdgAlignment: number; // 0-100%
}

export interface SectorBenchmarks {
  sector: string;
  typical_investment: {
    min: number;
    max: number;
    median: number;
  };
  roi_benchmarks: {
    low: number;
    average: number;
    high: number;
  };
  implementation_time: {
    min: number;
    max: number;
  };
  success_rate: number;
  risk_level: 'low' | 'medium' | 'high';
}

export interface AdvancedProjectAnalysis {
  project_id: string;
  cba: CostBenefitAnalysis;
  teeb: TEEBAnalysis;
  vfm: ValueForMoneyAnalysis;
  impactPathway: ImpactPathwayAnalysis;
  sdgCosting: SDGCostingModel;
  benchmarks: SectorBenchmarks;
  viabilityScore: number; // 0-100
  recommendation: {
    proceed: boolean;
    conditions: string[];
    alternatives: string[];
  };
}
