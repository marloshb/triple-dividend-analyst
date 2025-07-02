import { ClimateProject, DividendCalculation } from "@/types/climate";

export function calculateTripleDividend(project: ClimateProject): DividendCalculation {
  // 1º Dividendo: Perdas evitadas
  const firstDividend = 
    project.firstDividend.disasterRiskReduction +
    project.firstDividend.infrastructureProtection +
    (project.firstDividend.livesProtected * 50000); // Valor estatístico da vida

  // 2º Dividendo: Benefícios econômicos
  const secondDividend = 
    (project.secondDividend.jobsCreated * 25000 * project.timeline) + // Valor anual por emprego
    project.secondDividend.productivityGains +
    project.secondDividend.economicGrowth +
    project.secondDividend.operationalEfficiency;

  // 3º Dividendo: Benefícios sociais e ambientais
  const thirdDividend = 
    project.thirdDividend.healthBenefits +
    project.thirdDividend.educationImpact +
    project.thirdDividend.biodiversityValue +
    project.thirdDividend.socialInclusion;

  const total = firstDividend + secondDividend + thirdDividend;
  const roi = (total / project.investment) * 100;
  const annualReturn = Math.pow(total / project.investment, 1 / project.timeline) - 1;

  return {
    total,
    breakdown: {
      firstDividend,
      secondDividend,
      thirdDividend
    },
    roi,
    annualReturn: annualReturn * 100
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

export function formatPercentage(value: number, decimals: number = 1): string {
  return `${value.toFixed(decimals)}%`;
}

export function getRoiColor(roi: number): string {
  if (roi >= 1000) return "text-success";
  if (roi >= 500) return "text-info";
  if (roi >= 200) return "text-primary";
  if (roi >= 100) return "text-warning";
  return "text-destructive";
}

export function getReturnCategory(annualReturn: number): {
  category: string;
  color: string;
  description: string;
} {
  if (annualReturn >= 50) {
    return {
      category: "Excepcional",
      color: "text-success",
      description: "Retorno muito acima da média histórica"
    };
  } else if (annualReturn >= 25) {
    return {
      category: "Excelente",
      color: "text-info",
      description: "Retorno superior às expectativas"
    };
  } else if (annualReturn >= 15) {
    return {
      category: "Bom",
      color: "text-primary", 
      description: "Retorno dentro da faixa esperada"
    };
  } else if (annualReturn >= 10) {
    return {
      category: "Moderado",
      color: "text-warning",
      description: "Retorno abaixo do esperado"
    };
  } else {
    return {
      category: "Baixo",
      color: "text-destructive",
      description: "Retorno insuficiente"
    };
  }
}