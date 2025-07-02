
import { ClimateProject } from "@/types/climate";
import { CostBenefitAnalysis, TEEBAnalysis, ValueForMoneyAnalysis, SDGCostingModel, AdvancedProjectAnalysis } from "@/types/advancedAnalysis";
import { SECTOR_BENCHMARKS } from "@/data/sectorBenchmarks";

export function calculateCostBenefitAnalysis(project: ClimateProject): CostBenefitAnalysis {
  const totalCosts = {
    implementation: project.investment,
    operational: project.investment * 0.15 * project.timeline,
    maintenance: project.investment * 0.08 * project.timeline,
    opportunity: project.investment * 0.06 * project.timeline
  };

  const totalBenefits = {
    direct: project.secondDividend.jobsCreated * 25000 * project.timeline + 
            project.secondDividend.productivityGains,
    indirect: project.secondDividend.economicGrowth + 
              project.secondDividend.operationalEfficiency,
    avoided: project.firstDividend.disasterRiskReduction + 
             project.firstDividend.infrastructureProtection +
             project.firstDividend.livesProtected * 50000,
    ecosystem: project.thirdDividend.biodiversityValue + 
               project.thirdDividend.healthBenefits
  };

  const totalCostSum = Object.values(totalCosts).reduce((a, b) => a + b, 0);
  const totalBenefitSum = Object.values(totalBenefits).reduce((a, b) => a + b, 0);

  const npv = totalBenefitSum - totalCostSum;
  const bcr = totalBenefitSum / totalCostSum;
  const irr = Math.pow(totalBenefitSum / totalCostSum, 1 / project.timeline) - 1;
  const paybackPeriod = totalCostSum / (totalBenefitSum / project.timeline);

  return {
    totalCosts,
    totalBenefits,
    npv,
    bcr,
    irr: irr * 100,
    paybackPeriod
  };
}

export function calculateTEEBAnalysis(project: ClimateProject): TEEBAnalysis {
  const ecosystemServices = {
    provisioning: project.thirdDividend.biodiversityValue * 0.3,
    regulating: project.firstDividend.disasterRiskReduction * 0.4,
    cultural: project.thirdDividend.socialInclusion + project.thirdDividend.educationImpact,
    supporting: project.thirdDividend.biodiversityValue * 0.7
  };

  const economicValue = project.secondDividend.economicGrowth + project.secondDividend.productivityGains;
  const socialValue = project.thirdDividend.healthBenefits + project.thirdDividend.socialInclusion;
  const environmentalValue = Object.values(ecosystemServices).reduce((a, b) => a + b, 0);

  return {
    ecosystemServices,
    economicValue,
    socialValue,
    environmentalValue
  };
}

export function calculateValueForMoney(project: ClimateProject): ValueForMoneyAnalysis {
  const cba = calculateCostBenefitAnalysis(project);
  const benchmark = SECTOR_BENCHMARKS[project.sector];

  // Economy (30%)
  const economyScore = Math.min(100, (cba.bcr / (benchmark?.roi_benchmarks.average / 100 || 2.5)) * 100);

  // Efficiency (40%) 
  const expectedTime = benchmark?.implementation_time.max || 24;
  const efficiencyScore = Math.max(0, 100 - ((project.timeline - expectedTime) / expectedTime) * 50);

  // Effectiveness (30%)
  const totalImpact = project.firstDividend.livesProtected + 
                     project.secondDividend.jobsCreated + 
                     (project.thirdDividend.socialInclusion / 10000);
  const effectivenessScore = Math.min(100, totalImpact / 10 * 100);

  const overallVfM = (economyScore * 0.3) + (efficiencyScore * 0.4) + (effectivenessScore * 0.3);

  let recommendation: ValueForMoneyAnalysis['recommendation'];
  if (overallVfM >= 80) recommendation = 'excellent';
  else if (overallVfM >= 65) recommendation = 'good';
  else if (overallVfM >= 50) recommendation = 'acceptable';
  else recommendation = 'poor';

  return {
    economyScore,
    efficiencyScore,
    effectivenessScore,
    overallVfM,
    recommendation
  };
}

export function calculateSDGCosting(project: ClimateProject): SDGCostingModel {
  const sdgTargets = {
    sdg1: project.thirdDividend.socialInclusion * 0.8, // No Poverty
    sdg2: project.secondDividend.productivityGains * 0.3, // Zero Hunger 
    sdg3: project.thirdDividend.healthBenefits, // Good Health
    sdg6: project.firstDividend.infrastructureProtection * 0.4, // Clean Water
    sdg7: project.secondDividend.operationalEfficiency * 0.5, // Affordable Energy
    sdg11: project.firstDividend.infrastructureProtection * 0.6, // Sustainable Cities
    sdg13: project.investment * 0.7, // Climate Action
    sdg15: project.thirdDividend.biodiversityValue // Life on Land
  };

  const totalSDGCost = Object.values(sdgTargets).reduce((a, b) => a + b, 0);
  const beneficiaries = project.firstDividend.livesProtected || 1000;
  const costPerBeneficiary = totalSDGCost / beneficiaries;
  const sdgAlignment = Math.min(100, (totalSDGCost / project.investment) * 100);

  return {
    sdgTargets,
    totalSDGCost,
    costPerBeneficiary,
    sdgAlignment
  };
}

export function calculateAdvancedAnalysis(project: ClimateProject): AdvancedProjectAnalysis {
  const cba = calculateCostBenefitAnalysis(project);
  const teeb = calculateTEEBAnalysis(project);
  const vfm = calculateValueForMoney(project);
  const sdgCosting = calculateSDGCosting(project);
  const benchmarks = SECTOR_BENCHMARKS[project.sector];

  // Score de viabilidade baseado em múltiplos fatores
  const viabilityScore = (
    (cba.bcr > 1 ? 25 : 0) +
    (vfm.overallVfM * 0.3) +
    (sdgCosting.sdgAlignment * 0.2) +
    (benchmarks?.success_rate || 50) * 0.25
  );

  const proceed = viabilityScore >= 60 && cba.bcr > 1.2;
  
  const conditions = [];
  const alternatives = [];

  if (cba.bcr < 1.5) conditions.push("Buscar co-financiamento para melhorar viabilidade");
  if (vfm.overallVfM < 60) conditions.push("Revisar escopo para melhorar eficiência");
  if (project.timeline > (benchmarks?.implementation_time.max || 36)) {
    conditions.push("Considerar implementação em fases");
  }

  if (!proceed) {
    alternatives.push("Considerar projeto piloto menor");
    alternatives.push("Buscar parcerias público-privadas");
    alternatives.push("Aguardar melhores condições de financiamento");
  }

  return {
    project_id: project.id,
    cba,
    teeb,
    vfm,
    impactPathway: {
      inputs: ["Investimento", "Recursos Humanos", "Tecnologia"],
      activities: ["Implementação", "Treinamento", "Monitoramento"],
      outputs: ["Infraestrutura", "Capacitação", "Sistemas"],
      outcomes: ["Redução de Riscos", "Benefícios Econômicos", "Impacto Social"],
      impacts: ["Resiliência Climática", "Desenvolvimento Sustentável"],
      assumptions: ["Condições climáticas normais", "Apoio comunitário"],
      risks: ["Mudanças regulatórias", "Variabilidade climática"]
    },
    sdgCosting,
    benchmarks,
    viabilityScore,
    recommendation: {
      proceed,
      conditions,
      alternatives
    }
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
}
