
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClimateProject } from "@/types/climate";
import { calculateAdvancedAnalysis } from "@/utils/advancedCalculations";
import { formatCurrency } from "@/utils/advancedCalculations";
import { 
  TrendingUp, 
  Leaf, 
  Target, 
  DollarSign, 
  CheckCircle, 
  AlertTriangle,
  BarChart3,
  Globe
} from "lucide-react";

interface AdvancedAnalysisDashboardProps {
  project: ClimateProject;
}

export function AdvancedAnalysisDashboard({ project }: AdvancedAnalysisDashboardProps) {
  const analysis = calculateAdvancedAnalysis(project);

  const getVfMColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 65) return "text-blue-600";
    if (score >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  const getRecommendationColor = (rec: string) => {
    switch (rec) {
      case 'excellent': return 'bg-green-100 text-green-800';
      case 'good': return 'bg-blue-100 text-blue-800';
      case 'acceptable': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Resumo Executivo */}
      <Card className="border-l-4 border-l-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Análise Avançada - Resumo Executivo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {analysis.viabilityScore.toFixed(0)}%
              </div>
              <p className="text-sm text-muted-foreground">Score de Viabilidade</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {analysis.cba.bcr.toFixed(2)}
              </div>
              <p className="text-sm text-muted-foreground">Relação B/C</p>
            </div>
            
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${getVfMColor(analysis.vfm.overallVfM)}`}>
                {analysis.vfm.overallVfM.toFixed(0)}%
              </div>
              <p className="text-sm text-muted-foreground">Value for Money</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {analysis.cba.paybackPeriod.toFixed(1)}
              </div>
              <p className="text-sm text-muted-foreground">Payback (anos)</p>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <Badge className={getRecommendationColor(analysis.vfm.recommendation)}>
              VfM: {analysis.vfm.recommendation}
            </Badge>
            <Badge variant={analysis.recommendation.proceed ? "default" : "destructive"}>
              {analysis.recommendation.proceed ? "✓ Recomendado" : "⚠ Revisar"}
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="cba" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="cba">CBA</TabsTrigger>
          <TabsTrigger value="teeb">TEEB</TabsTrigger>
          <TabsTrigger value="vfm">VfM</TabsTrigger>
          <TabsTrigger value="sdg">SDG</TabsTrigger>
          <TabsTrigger value="benchmarks">Benchmarks</TabsTrigger>
        </TabsList>

        {/* Cost-Benefit Analysis */}
        <TabsContent value="cba">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-red-500" />
                  Custos Totais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-2xl font-bold text-red-600 mb-4">
                  {formatCurrency(Object.values(analysis.cba.totalCosts).reduce((a, b) => a + b, 0))}
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Implementação</span>
                      <span>{formatCurrency(analysis.cba.totalCosts.implementation)}</span>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Operacional</span>
                      <span>{formatCurrency(analysis.cba.totalCosts.operational)}</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Manutenção</span>
                      <span>{formatCurrency(analysis.cba.totalCosts.maintenance)}</span>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Oportunidade</span>
                      <span>{formatCurrency(analysis.cba.totalCosts.opportunity)}</span>
                    </div>
                    <Progress value={10} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  Benefícios Totais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-2xl font-bold text-green-600 mb-4">
                  {formatCurrency(Object.values(analysis.cba.totalBenefits).reduce((a, b) => a + b, 0))}
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Benefícios Diretos</span>
                      <span>{formatCurrency(analysis.cba.totalBenefits.direct)}</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Benefícios Indiretos</span>
                      <span>{formatCurrency(analysis.cba.totalBenefits.indirect)}</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Perdas Evitadas</span>
                      <span>{formatCurrency(analysis.cba.totalBenefits.avoided)}</span>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Serviços Ecossistêmicos</span>
                      <span>{formatCurrency(analysis.cba.totalBenefits.ecosystem)}</span>
                    </div>
                    <Progress value={10} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Indicadores Financeiros</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">
                    {formatCurrency(analysis.cba.npv)}
                  </div>
                  <p className="text-sm text-muted-foreground">VPL</p>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-green-600">
                    {analysis.cba.bcr.toFixed(2)}
                  </div>
                  <p className="text-sm text-muted-foreground">Relação B/C</p>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600">
                    {analysis.cba.irr.toFixed(1)}%
                  </div>
                  <p className="text-sm text-muted-foreground">TIR</p>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-purple-600">
                    {analysis.cba.paybackPeriod.toFixed(1)} anos
                  </div>
                  <p className="text-sm text-muted-foreground">Payback</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* TEEB Analysis */}
        <TabsContent value="teeb">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-green-500" />
                  Serviços Ecossistêmicos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Provisão</span>
                      <span>{formatCurrency(analysis.teeb.ecosystemServices.provisioning)}</span>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Regulação</span>
                      <span>{formatCurrency(analysis.teeb.ecosystemServices.regulating)}</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Cultural</span>
                      <span>{formatCurrency(analysis.teeb.ecosystemServices.cultural)}</span>
                    </div>
                    <Progress value={15} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Suporte</span>
                      <span>{formatCurrency(analysis.teeb.ecosystemServices.supporting)}</span>
                    </div>
                    <Progress value={15} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Valores TEEB</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Valor Econômico</span>
                    <span className="font-semibold text-blue-600">
                      {formatCurrency(analysis.teeb.economicValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Valor Social</span>
                    <span className="font-semibold text-green-600">
                      {formatCurrency(analysis.teeb.socialValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Valor Ambiental</span>
                    <span className="font-semibold text-emerald-600">
                      {formatCurrency(analysis.teeb.environmentalValue)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Value for Money */}
        <TabsContent value="vfm">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Análise Value for Money
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {analysis.vfm.economyScore.toFixed(0)}%
                  </div>
                  <p className="text-sm text-muted-foreground">Economy (30%)</p>
                  <Progress value={analysis.vfm.economyScore} className="mt-2" />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    {analysis.vfm.efficiencyScore.toFixed(0)}%
                  </div>
                  <p className="text-sm text-muted-foreground">Efficiency (40%)</p>
                  <Progress value={analysis.vfm.efficiencyScore} className="mt-2" />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">
                    {analysis.vfm.effectivenessScore.toFixed(0)}%
                  </div>
                  <p className="text-sm text-muted-foreground">Effectiveness (30%)</p>
                  <Progress value={analysis.vfm.effectivenessScore} className="mt-2" />
                </div>
              </div>

              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${getVfMColor(analysis.vfm.overallVfM)}`}>
                  {analysis.vfm.overallVfM.toFixed(0)}%
                </div>
                <p className="text-lg text-muted-foreground mb-4">Score Geral VfM</p>
                <Badge className={getRecommendationColor(analysis.vfm.recommendation)} variant="outline">
                  {analysis.vfm.recommendation.toUpperCase()}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SDG Costing */}
        <TabsContent value="sdg">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Alinhamento com ODS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>ODS 1 - Erradicação da Pobreza</span>
                      <span>{formatCurrency(analysis.sdgCosting.sdgTargets.sdg1)}</span>
                    </div>
                    <Progress value={15} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>ODS 3 - Saúde e Bem-estar</span>
                      <span>{formatCurrency(analysis.sdgCosting.sdgTargets.sdg3)}</span>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>ODS 6 - Água Potável</span>
                      <span>{formatCurrency(analysis.sdgCosting.sdgTargets.sdg6)}</span>
                    </div>
                    <Progress value={18} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>ODS 13 - Ação Climática</span>
                      <span>{formatCurrency(analysis.sdgCosting.sdgTargets.sdg13)}</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">
                      {formatCurrency(analysis.sdgCosting.totalSDGCost)}
                    </div>
                    <p className="text-sm text-muted-foreground">Custo Total ODS</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600 mb-2">
                      {analysis.sdgCosting.sdgAlignment.toFixed(0)}%
                    </div>
                    <p className="text-sm text-muted-foreground">Alinhamento ODS</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600 mb-2">
                      {formatCurrency(analysis.sdgCosting.costPerBeneficiary)}
                    </div>
                    <p className="text-sm text-muted-foreground">Custo por Beneficiário</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Benchmarks */}
        <TabsContent value="benchmarks">
          <Card>
            <CardHeader>
              <CardTitle>Comparação com Benchmarks do Setor</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary mb-2">
                    {formatCurrency(analysis.benchmarks.typical_investment.median)}
                  </div>
                  <p className="text-sm text-muted-foreground">Investimento Mediano</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Faixa: {formatCurrency(analysis.benchmarks.typical_investment.min)} - 
                    {formatCurrency(analysis.benchmarks.typical_investment.max)}
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-xl font-bold text-green-600 mb-2">
                    {analysis.benchmarks.roi_benchmarks.average}%
                  </div>
                  <p className="text-sm text-muted-foreground">ROI Médio do Setor</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Faixa: {analysis.benchmarks.roi_benchmarks.low}% - 
                    {analysis.benchmarks.roi_benchmarks.high}%
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600 mb-2">
                    {analysis.benchmarks.success_rate}%
                  </div>
                  <p className="text-sm text-muted-foreground">Taxa de Sucesso</p>
                  <Badge variant="outline" className="mt-1">
                    Risco: {analysis.benchmarks.risk_level}
                  </Badge>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-4">Recomendações Baseadas na Análise</h4>
                
                {analysis.recommendation.proceed ? (
                  <div className="flex items-start gap-2 p-4 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-800">Projeto Recomendado</p>
                      <p className="text-sm text-green-700">
                        O projeto apresenta viabilidade adequada e alinhamento com benchmarks do setor.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-2 p-4 bg-yellow-50 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-yellow-800">Requer Revisão</p>
                      <p className="text-sm text-yellow-700">
                        O projeto precisa de ajustes antes da implementação.
                      </p>
                    </div>
                  </div>
                )}

                {analysis.recommendation.conditions.length > 0 && (
                  <div className="mt-4">
                    <h5 className="font-medium mb-2">Condições Recomendadas:</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {analysis.recommendation.conditions.map((condition, index) => (
                        <li key={index}>{condition}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {analysis.recommendation.alternatives.length > 0 && (
                  <div className="mt-4">
                    <h5 className="font-medium mb-2">Alternativas Sugeridas:</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {analysis.recommendation.alternatives.map((alternative, index) => (
                        <li key={index}>{alternative}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
