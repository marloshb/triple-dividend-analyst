import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ClimateProject, DividendCalculation } from "@/types/climate";
import { calculateTripleDividend, formatCurrency, formatPercentage, getRoiColor, getReturnCategory } from "@/utils/climateCalculations";
import { TrendingUp, Shield, Heart, DollarSign, Target, Award } from "lucide-react";

interface ResultsDashboardProps {
  project: ClimateProject;
}

export function ResultsDashboard({ project }: ResultsDashboardProps) {
  const results = calculateTripleDividend(project);
  const returnCategory = getReturnCategory(results.annualReturn);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Resumo Principal */}
      <Card className="shadow-climate border-l-4 border-l-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Resultado da Análise Triple Dividend
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {formatCurrency(results.total)}
              </div>
              <p className="text-sm text-muted-foreground">Benefícios Totais</p>
            </div>
            
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${getRoiColor(results.roi)}`}>
                {formatPercentage(results.roi, 0)}
              </div>
              <p className="text-sm text-muted-foreground">ROI Total</p>
            </div>
            
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${returnCategory.color}`}>
                {formatPercentage(results.annualReturn)}
              </div>
              <p className="text-sm text-muted-foreground">Retorno Anual</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">
                {(results.total / project.investment).toFixed(1)}x
              </div>
              <p className="text-sm text-muted-foreground">Multiplicador</p>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Badge variant="secondary" className={`${returnCategory.color} font-semibold`}>
              Classificação: {returnCategory.category}
            </Badge>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-2">
            {returnCategory.description}
          </p>
        </CardContent>
      </Card>

      {/* Detalhamento dos Dividendos */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* 1º Dividendo */}
        <Card className="border-l-4 border-l-destructive">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Shield className="h-5 w-5 text-destructive" />
              1º Dividendo
            </CardTitle>
            <p className="text-sm text-muted-foreground">Redução de Perdas</p>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive mb-4">
              {formatCurrency(results.breakdown.firstDividend)}
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Redução de Riscos</span>
                  <span>{formatCurrency(project.firstDividend.disasterRiskReduction)}</span>
                </div>
                <Progress 
                  value={(project.firstDividend.disasterRiskReduction / results.breakdown.firstDividend) * 100} 
                  className="h-2"
                />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Proteção Infraestrutura</span>
                  <span>{formatCurrency(project.firstDividend.infrastructureProtection)}</span>
                </div>
                <Progress 
                  value={(project.firstDividend.infrastructureProtection / results.breakdown.firstDividend) * 100} 
                  className="h-2"
                />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Valor das Vidas</span>
                  <span>{formatCurrency(project.firstDividend.livesProtected * 50000)}</span>
                </div>
                <Progress 
                  value={((project.firstDividend.livesProtected * 50000) / results.breakdown.firstDividend) * 100} 
                  className="h-2"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 2º Dividendo */}
        <Card className="border-l-4 border-l-info">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingUp className="h-5 w-5 text-info" />
              2º Dividendo
            </CardTitle>
            <p className="text-sm text-muted-foreground">Benefícios Econômicos</p>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-info mb-4">
              {formatCurrency(results.breakdown.secondDividend)}
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Empregos</span>
                  <span>{formatCurrency(project.secondDividend.jobsCreated * 25000 * project.timeline)}</span>
                </div>
                <Progress 
                  value={((project.secondDividend.jobsCreated * 25000 * project.timeline) / results.breakdown.secondDividend) * 100} 
                  className="h-2"
                />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Produtividade</span>
                  <span>{formatCurrency(project.secondDividend.productivityGains)}</span>
                </div>
                <Progress 
                  value={(project.secondDividend.productivityGains / results.breakdown.secondDividend) * 100} 
                  className="h-2"
                />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Crescimento</span>
                  <span>{formatCurrency(project.secondDividend.economicGrowth)}</span>
                </div>
                <Progress 
                  value={(project.secondDividend.economicGrowth / results.breakdown.secondDividend) * 100} 
                  className="h-2"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 3º Dividendo */}
        <Card className="border-l-4 border-l-success">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Heart className="h-5 w-5 text-success" />
              3º Dividendo
            </CardTitle>
            <p className="text-sm text-muted-foreground">Benefícios Sociais</p>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success mb-4">
              {formatCurrency(results.breakdown.thirdDividend)}
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Saúde</span>
                  <span>{formatCurrency(project.thirdDividend.healthBenefits)}</span>
                </div>
                <Progress 
                  value={(project.thirdDividend.healthBenefits / results.breakdown.thirdDividend) * 100} 
                  className="h-2"
                />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Educação</span>
                  <span>{formatCurrency(project.thirdDividend.educationImpact)}</span>
                </div>
                <Progress 
                  value={(project.thirdDividend.educationImpact / results.breakdown.thirdDividend) * 100} 
                  className="h-2"
                />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Biodiversidade</span>
                  <span>{formatCurrency(project.thirdDividend.biodiversityValue)}</span>
                </div>
                <Progress 
                  value={(project.thirdDividend.biodiversityValue / results.breakdown.thirdDividend) * 100} 
                  className="h-2"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Informações do Projeto */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Informações do Projeto
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">{project.name}</h4>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Setor:</span>
                  <Badge variant="outline">{project.sector}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Região:</span>
                  <span className="text-sm font-medium">{project.region}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Prazo:</span>
                  <span className="text-sm font-medium">{project.timeline} anos</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Investimento vs Retorno</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Investimento Inicial</span>
                  <span className="font-semibold text-destructive">
                    {formatCurrency(project.investment)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Retorno Total</span>
                  <span className="font-semibold text-success">
                    {formatCurrency(results.total)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Lucro Líquido</span>
                  <span className="font-semibold text-primary">
                    {formatCurrency(results.total - project.investment)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}