import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Eye, 
  Download, 
  ExternalLink, 
  FileText, 
  DollarSign, 
  BarChart2,
  Calendar,
  CheckCircle,
  AlertCircle,
  Clock
} from "lucide-react";
import type { UserProfile } from "@/types/geoai";
import type { TransparencyReport, PublicBudget } from "@/types/governance";

interface TransparencyDashboardProps {
  userProfile: UserProfile;
}

export function TransparencyDashboard({ userProfile }: TransparencyDashboardProps) {
  const [transparencyReports] = useState<TransparencyReport[]>([
    {
      id: "1",
      title: "Relatório de Execução Orçamentária - Clima 2024",
      period: "2024 Q1",
      published_date: "2024-01-30",
      category: "execucao",
      data_quality: 92,
      accessibility_score: 88,
      download_url: "#",
      summary: "Execução de 67% do orçamento climático no primeiro trimestre"
    },
    {
      id: "2",
      title: "Impactos dos Projetos de Adaptação Climática",
      period: "2023 Anual",
      published_date: "2024-01-15",
      category: "impactos",
      data_quality: 85,
      accessibility_score: 90,
      download_url: "#",
      summary: "Análise dos resultados obtidos com investimentos em adaptação"
    },
    {
      id: "3",
      title: "Orçamento Climático Municipal 2024",
      period: "2024 Anual",
      published_date: "2023-12-15",
      category: "orcamento",
      data_quality: 95,
      accessibility_score: 85,
      download_url: "#",
      summary: "Planejamento orçamentário para ações climáticas em 2024"
    }
  ]);

  const [budgetData] = useState<PublicBudget[]>([
    {
      id: "1",
      program_name: "Programa de Infraestrutura Verde",
      sector: "Infraestrutura e Urbanismo",
      allocated_amount: 8000000,
      executed_amount: 5360000,
      execution_percentage: 67,
      beneficiaries_target: 50000,
      beneficiaries_reached: 33500,
      year: 2024,
      quarter: 1,
      status: "em_execucao"
    },
    {
      id: "2",
      program_name: "Sistema de Alerta Climático",
      sector: "Segurança Pública e Defesa Civil",
      allocated_amount: 2500000,
      executed_amount: 2125000,
      execution_percentage: 85,
      beneficiaries_target: 100000,
      beneficiaries_reached: 85000,
      year: 2024,
      quarter: 1,
      status: "em_execucao"
    },
    {
      id: "3",
      program_name: "Capacitação em Agricultura Resiliente",
      sector: "Agricultura e Recursos Hídricos",
      allocated_amount: 1200000,
      executed_amount: 960000,
      execution_percentage: 80,
      beneficiaries_target: 2000,
      beneficiaries_reached: 1600,
      year: 2024,
      quarter: 1,
      status: "em_execucao"
    }
  ]);

  const categoryLabels = {
    orcamento: "Orçamento",
    execucao: "Execução",
    resultados: "Resultados",
    impactos: "Impactos"
  };

  const categoryColors = {
    orcamento: "bg-blue-100 text-blue-800",
    execucao: "bg-green-100 text-green-800", 
    resultados: "bg-orange-100 text-orange-800",
    impactos: "bg-purple-100 text-purple-800"
  };

  const statusColors = {
    planejado: "bg-gray-100 text-gray-800",
    em_execucao: "bg-blue-100 text-blue-800",
    executado: "bg-green-100 text-green-800",
    cancelado: "bg-red-100 text-red-800"
  };

  const totalAllocated = budgetData.reduce((sum, budget) => sum + budget.allocated_amount, 0);
  const totalExecuted = budgetData.reduce((sum, budget) => sum + budget.executed_amount, 0);
  const averageExecution = (totalExecuted / totalAllocated) * 100;

  return (
    <div className="space-y-6">
      {/* KPIs de Transparência */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-50">
                <Eye className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Score Transparência</p>
                <p className="text-2xl font-bold">89%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-50">
                <FileText className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Relatórios Publicados</p>
                <p className="text-2xl font-bold">{transparencyReports.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-50">
                <DollarSign className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Execução Média</p>
                <p className="text-2xl font-bold">{averageExecution.toFixed(0)}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-50">
                <BarChart2 className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Acessibilidade</p>
                <p className="text-2xl font-bold">88%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="reports" className="space-y-6">
        <TabsList>
          <TabsTrigger value="reports">Relatórios</TabsTrigger>
          <TabsTrigger value="budget">Execução Orçamentária</TabsTrigger>
          <TabsTrigger value="data">Portal de Dados</TabsTrigger>
        </TabsList>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Relatórios de Transparência
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {transparencyReports.map((report) => (
                <div key={report.id} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-medium">{report.title}</h3>
                        <Badge className={categoryColors[report.category]}>
                          {categoryLabels[report.category]}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {report.summary}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {report.period}
                        </span>
                        <span>
                          Publicado em {new Date(report.published_date).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3 mr-1" />
                          Visualizar
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                      </div>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <div>Qualidade: {report.data_quality}%</div>
                        <div>Acessibilidade: {report.accessibility_score}%</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="budget" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Monitoramento Orçamentário
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  Total: R$ {(totalAllocated / 1000000).toFixed(1)}M
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {budgetData.map((budget) => (
                <div key={budget.id} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">{budget.program_name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{budget.sector}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>
                          Alocado: R$ {(budget.allocated_amount / 1000000).toFixed(1)}M
                        </span>
                        <span>
                          Executado: R$ {(budget.executed_amount / 1000000).toFixed(1)}M
                        </span>
                        <span>
                          Meta: {budget.beneficiaries_target.toLocaleString()} beneficiários
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className={statusColors[budget.status]}>
                        {budget.status.replace('_', ' ')}
                      </Badge>
                      <div className="text-right text-xs">
                        <div className="font-medium">{budget.execution_percentage}%</div>
                        <div className="text-muted-foreground">execução</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Execução Orçamentária</span>
                        <span>{budget.execution_percentage}%</span>
                      </div>
                      <Progress value={budget.execution_percentage} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Beneficiários Alcançados</span>
                        <span>{((budget.beneficiaries_reached / budget.beneficiaries_target) * 100).toFixed(0)}%</span>
                      </div>
                      <Progress 
                        value={(budget.beneficiaries_reached / budget.beneficiaries_target) * 100} 
                        className="h-2" 
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        {budget.beneficiaries_reached.toLocaleString()} de {budget.beneficiaries_target.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart2 className="h-5 w-5" />
                Portal de Dados Abertos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <h3 className="font-medium">Dados Climáticos</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Temperatura, precipitação, qualidade do ar
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Acessar Dataset
                  </Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <h3 className="font-medium">Orçamento Público</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Execução orçamentária por programa
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Acessar Dataset
                  </Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-orange-600" />
                    <h3 className="font-medium">Indicadores Sociais</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Vulnerabilidade, população beneficiada
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Em Preparação
                  </Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <h3 className="font-medium">Riscos e Alertas</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Áreas de risco, alertas climáticos
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    API em Desenvolvimento
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}