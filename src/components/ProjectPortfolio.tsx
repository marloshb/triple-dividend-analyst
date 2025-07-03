
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { adaptiveProjects } from "@/data/adaptiveProjects";
import { AdaptiveProjectTemplate } from "@/types/climate";
import { formatCurrency } from "@/utils/climateCalculations";
import { 
  Briefcase, TrendingUp, DollarSign, Calendar,
  CheckCircle, Clock, AlertTriangle, PieChart,
  BarChart3, Target, Users, Zap
} from "lucide-react";

interface ProjectPhase {
  name: string;
  duration: number;
  budget: number;
  projects: AdaptiveProjectTemplate[];
  dependencies: string[];
}

interface Portfolio {
  name: string;
  total_budget: number;
  duration: number;
  phases: ProjectPhase[];
  expected_roi: number;
  risk_reduction: number;
  jobs_created: number;
  people_benefited: number;
}

export function ProjectPortfolio() {
  const [selectedProjects, setSelectedProjects] = useState<AdaptiveProjectTemplate[]>([]);
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);

  const allProjects = Object.values(adaptiveProjects).flat();

  const generatePortfolio = () => {
    if (selectedProjects.length === 0) return;

    // Organizar projetos por fases baseado em dependências e complexidade
    const quickWins = selectedProjects.filter(p => 
      p.implementationTime.max <= 12 && p.typicalInvestment.min <= 500000
    );
    
    const mediumTerm = selectedProjects.filter(p => 
      p.implementationTime.max > 12 && p.implementationTime.max <= 24
    );
    
    const longTerm = selectedProjects.filter(p => 
      p.implementationTime.max > 24
    );

    const phases: ProjectPhase[] = [
      {
        name: "Quick Wins (0-12 meses)",
        duration: 12,
        budget: quickWins.reduce((acc, p) => acc + p.typicalInvestment.min, 0),
        projects: quickWins,
        dependencies: ["Aprovação orçamentária", "Licenças básicas"]
      },
      {
        name: "Implementação (12-24 meses)",
        duration: 12,
        budget: mediumTerm.reduce((acc, p) => acc + p.typicalInvestment.min, 0),
        projects: mediumTerm,
        dependencies: ["Resultados Fase 1", "Parcerias técnicas", "Capacitação"]
      },
      {
        name: "Estruturantes (24+ meses)",
        duration: 24,
        budget: longTerm.reduce((acc, p) => acc + p.typicalInvestment.min, 0),
        projects: longTerm,
        dependencies: ["Infraestrutura estabelecida", "Marcos regulatórios", "Financiamento completo"]
      }
    ];

    const totalBudget = selectedProjects.reduce((acc, p) => acc + p.typicalInvestment.min, 0);
    const avgROI = selectedProjects.reduce((acc, p) => acc + p.economicMultiplier, 0) / selectedProjects.length;
    const avgRiskReduction = selectedProjects.reduce((acc, p) => acc + p.riskReduction, 0) / selectedProjects.length;

    setPortfolio({
      name: "Portfólio Integrado de Adaptação Climática",
      total_budget: totalBudget,
      duration: 36,
      phases: phases.filter(phase => phase.projects.length > 0),
      expected_roi: avgROI,
      risk_reduction: avgRiskReduction,
      jobs_created: selectedProjects.length * 15, // Estimativa
      people_benefited: selectedProjects.length * 2500 // Estimativa
    });
  };

  const toggleProjectSelection = (project: AdaptiveProjectTemplate) => {
    setSelectedProjects(prev => {
      const isSelected = prev.some(p => p.id === project.id);
      if (isSelected) {
        return prev.filter(p => p.id !== project.id);
      } else {
        return [...prev, project];
      }
    });
  };

  const calculatePhaseProgress = (phase: ProjectPhase) => {
    // Simulação de progresso baseado na fase
    const baseProgress = {
      "Quick Wins (0-12 meses)": 85,
      "Implementação (12-24 meses)": 45,
      "Estruturantes (24+ meses)": 15
    };
    return baseProgress[phase.name as keyof typeof baseProgress] || 0;
  };

  return (
    <Card className="shadow-card-custom">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="h-5 w-5" />
          Estruturação de Portfólio de Projetos
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Selecione e organize projetos em um portfólio integrado com fases de implementação
        </p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="selection" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="selection">Seleção de Projetos</TabsTrigger>
            <TabsTrigger value="portfolio">Portfólio Integrado</TabsTrigger>
            <TabsTrigger value="implementation">Plano de Implementação</TabsTrigger>
          </TabsList>

          <TabsContent value="selection" className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="text-sm">
                <strong>{selectedProjects.length}</strong> projetos selecionados
              </div>
              <Button 
                onClick={generatePortfolio}
                disabled={selectedProjects.length === 0}
              >
                <PieChart className="h-4 w-4 mr-2" />
                Gerar Portfólio
              </Button>
            </div>

            <div className="grid gap-4 max-h-96 overflow-y-auto">
              {allProjects.slice(0, 30).map((project) => {
                const isSelected = selectedProjects.some(p => p.id === project.id);
                return (
                  <Card 
                    key={project.id} 
                    className={`cursor-pointer transition-all ${
                      isSelected ? 'ring-2 ring-primary bg-primary/5' : 'hover:shadow-md'
                    }`}
                    onClick={() => toggleProjectSelection(project)}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {isSelected && <CheckCircle className="h-4 w-4 text-primary" />}
                            <Badge variant="outline">{project.sector}</Badge>
                            <Badge variant="secondary">{project.category}</Badge>
                          </div>
                          <h4 className="font-medium mb-1">{project.name}</h4>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {project.description}
                          </p>
                        </div>
                        <div className="text-right ml-4">
                          <div className="text-sm font-medium">
                            {formatCurrency(project.typicalInvestment.min)}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            ROI: {project.economicMultiplier}x
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="portfolio" className="space-y-6">
            {!portfolio ? (
              <div className="text-center py-12">
                <Briefcase className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="font-semibold mb-2">Selecione projetos primeiro</h3>
                <p className="text-sm text-muted-foreground">
                  Escolha projetos na aba anterior para gerar o portfólio integrado
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Resumo do Portfólio */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">{portfolio.name}</h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center">
                      <DollarSign className="h-6 w-6 mx-auto mb-2 text-success" />
                      <div className="text-lg font-bold">{formatCurrency(portfolio.total_budget)}</div>
                      <div className="text-xs text-muted-foreground">Orçamento Total</div>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="h-6 w-6 mx-auto mb-2 text-primary" />
                      <div className="text-lg font-bold">{portfolio.expected_roi.toFixed(1)}x</div>
                      <div className="text-xs text-muted-foreground">ROI Médio</div>
                    </div>
                    <div className="text-center">
                      <Target className="h-6 w-6 mx-auto mb-2 text-destructive" />
                      <div className="text-lg font-bold">{portfolio.risk_reduction.toFixed(0)}%</div>
                      <div className="text-xs text-muted-foreground">Redução de Risco</div>
                    </div>
                    <div className="text-center">
                      <Calendar className="h-6 w-6 mx-auto mb-2 text-info" />
                      <div className="text-lg font-bold">{portfolio.duration}</div>
                      <div className="text-xs text-muted-foreground">Meses</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <Users className="h-6 w-6 mx-auto mb-2 text-info" />
                      <div className="text-lg font-bold">{portfolio.jobs_created.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">Empregos Criados</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <Zap className="h-6 w-6 mx-auto mb-2 text-warning" />
                      <div className="text-lg font-bold">{portfolio.people_benefited.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">Pessoas Beneficiadas</div>
                    </div>
                  </div>
                </Card>

                {/* Fases do Portfólio */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Fases de Implementação</h4>
                  {portfolio.phases.map((phase, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h5 className="font-semibold">{phase.name}</h5>
                          <p className="text-sm text-muted-foreground">
                            {phase.projects.length} projetos • {formatCurrency(phase.budget)}
                          </p>
                        </div>
                        <Badge variant="outline">{phase.duration} meses</Badge>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progresso estimado</span>
                          <span>{calculatePhaseProgress(phase)}%</span>
                        </div>
                        <Progress value={calculatePhaseProgress(phase)} className="h-2" />
                      </div>

                      <div className="space-y-2">
                        <div className="text-sm font-medium">Dependências:</div>
                        <div className="flex flex-wrap gap-1">
                          {phase.dependencies.map((dep, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {dep}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mt-3">
                        <div className="text-sm font-medium mb-2">Projetos incluídos:</div>
                        <div className="grid gap-2">
                          {phase.projects.slice(0, 3).map((project, i) => (
                            <div key={i} className="flex justify-between items-center text-sm p-2 bg-muted rounded">
                              <span>{project.name}</span>
                              <span className="text-muted-foreground">
                                {formatCurrency(project.typicalInvestment.min)}
                              </span>
                            </div>
                          ))}
                          {phase.projects.length > 3 && (
                            <div className="text-xs text-muted-foreground">
                              +{phase.projects.length - 3} outros projetos
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="implementation" className="space-y-6">
            {!portfolio ? (
              <div className="text-center py-12">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="font-semibold mb-2">Gere o portfólio primeiro</h3>
                <p className="text-sm text-muted-foreground">
                  Crie um portfólio para ver o plano de implementação detalhado
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Cronograma de Implementação
                  </h3>
                  
                  <div className="space-y-4">
                    {portfolio.phases.map((phase, index) => (
                      <div key={index} className="border-l-4 border-primary pl-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">{phase.name}</h4>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{phase.duration} meses</span>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <strong>Orçamento:</strong> {formatCurrency(phase.budget)}
                          </div>
                          <div>
                            <strong>Projetos:</strong> {phase.projects.length}
                          </div>
                          <div>
                            <strong>Status:</strong> 
                            <Badge variant="outline" className="ml-1">
                              {calculatePhaseProgress(phase) > 50 ? 'Em Andamento' : 'Planejado'}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Marcos e Entregas</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <div className="font-medium">Aprovação do Portfólio</div>
                        <div className="text-sm text-muted-foreground">Marco 0 - Mês 0</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Conclusão Quick Wins</div>
                        <div className="text-sm text-muted-foreground">Marco 1 - Mês 12</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <div>
                        <div className="font-medium">Avaliação de Meio Termo</div>
                        <div className="text-sm text-muted-foreground">Marco 2 - Mês 18</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <Target className="h-5 w-5 text-purple-600" />
                      <div>
                        <div className="font-medium">Entrega Final do Portfólio</div>
                        <div className="text-sm text-muted-foreground">Marco 3 - Mês 36</div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Recomendações de Gestão</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-primary">Riscos e Mitigação</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Atrasos regulatórios → Iniciar licenciamento antecipado</li>
                        <li>• Limitações orçamentárias → Buscar cofinanciamento</li>
                        <li>• Capacitação técnica → Parcerias com universidades</li>
                        <li>• Resistência comunitária → Engajamento precoce</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3 text-success">Fatores de Sucesso</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Governança clara e transparente</li>
                        <li>• Monitoramento contínuo de resultados</li>
                        <li>• Comunicação regular com stakeholders</li>
                        <li>• Flexibilidade para ajustes no plano</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
