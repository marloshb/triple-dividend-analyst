
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { adaptiveProjects } from "@/data/adaptiveProjects";
import { SECTORS, Sector, AdaptiveProjectTemplate } from "@/types/climate";
import { formatCurrency } from "@/utils/climateCalculations";
import { 
  MapPin, Zap, DollarSign, AlertTriangle, 
  TrendingUp, Users, Shield, Globe,
  Target, Award, Star, CheckCircle
} from "lucide-react";

interface LocalProfile {
  region: string;
  population: number;
  budget: number;
  climateRisks: string[];
  infrastructure: 'baixa' | 'média' | 'alta';
  education: 'baixa' | 'média' | 'alta';
  governance: 'baixa' | 'média' | 'alta';
  priority_sectors: Sector[];
}

interface ProjectRecommendation {
  project: AdaptiveProjectTemplate;
  priority_score: number;
  urgency: 'baixa' | 'média' | 'alta' | 'crítica';
  feasibility: number;
  local_alignment: number;
  budget_fit: boolean;
}

export function LocalPriorityAnalyzer() {
  const [localProfile, setLocalProfile] = useState<LocalProfile>({
    region: '',
    population: 50000,
    budget: 1000000,
    climateRisks: [],
    infrastructure: 'média',
    education: 'média',
    governance: 'média',
    priority_sectors: []
  });
  
  const [recommendations, setRecommendations] = useState<ProjectRecommendation[]>([]);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const climateRisks = [
    'Secas prolongadas',
    'Enchentes urbanas', 
    'Deslizamentos',
    'Ondas de calor',
    'Tempestades severas',
    'Erosão costeira',
    'Perda de biodiversidade',
    'Escassez hídrica',
    'Incêndios florestais'
  ];

  const calculatePriorityScore = (project: any, profile: LocalProfile): ProjectRecommendation => {
    let score = 0;
    let urgency: 'baixa' | 'média' | 'alta' | 'crítica' = 'baixa';
    
    // Alinhamento com riscos climáticos locais
    const riskAlignment = profile.climateRisks.some(risk => 
      project.expectedBenefits.first.some((benefit: string) => 
        benefit.toLowerCase().includes(risk.toLowerCase().split(' ')[0])
      )
    );
    if (riskAlignment) score += 30;
    
    // Adequação ao orçamento
    const budgetFit = project.typicalInvestment.min <= profile.budget;
    if (budgetFit) score += 25;
    
    // Compatibilidade com infraestrutura local
    const infraMultiplier = profile.infrastructure === 'alta' ? 1.2 : 
                           profile.infrastructure === 'média' ? 1.0 : 0.8;
    score *= infraMultiplier;
    
    // ROI e impacto social
    score += (project.economicMultiplier * 5);
    score += (project.socialImpact * 8);
    score += (project.riskReduction * 0.3);
    
    // Definir urgência
    if (profile.climateRisks.length >= 4) urgency = 'crítica';
    else if (profile.climateRisks.length >= 2) urgency = 'alta';
    else if (profile.climateRisks.length >= 1) urgency = 'média';
    
    return {
      project,
      priority_score: Math.round(score),
      urgency,
      feasibility: Math.min(100, score * 0.8),
      local_alignment: riskAlignment ? 85 : 45,
      budget_fit: budgetFit
    };
  };

  const analyzeLocalPriorities = () => {
    const allProjects = Object.values(adaptiveProjects).flat();
    const scored = allProjects
      .map(project => calculatePriorityScore(project, localProfile))
      .sort((a, b) => b.priority_score - a.priority_score)
      .slice(0, 20);
    
    setRecommendations(scored);
    setAnalysisComplete(true);
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'crítica': return 'destructive';
      case 'alta': return 'outline';
      case 'média': return 'default';
      default: return 'secondary';
    }
  };

  const generatePilotProgram = () => {
    const topProjects = recommendations.slice(0, 8);
    const sectors = [...new Set(topProjects.map(r => r.project.sector))];
    
    return {
      name: `Programa Piloto de Adaptação Climática - ${localProfile.region}`,
      duration: '24 meses',
      budget: topProjects.reduce((acc, r) => acc + r.project.typicalInvestment.min, 0),
      sectors: sectors,
      projects: topProjects,
      governance_structure: {
        council: 'Conselho Municipal de Mudanças Climáticas',
        coordination: 'Secretaria de Meio Ambiente',
        monitoring: 'Plataforma Digital de Monitoramento',
        participation: 'Comitês Setoriais e Consultas Públicas'
      }
    };
  };

  return (
    <Card className="shadow-card-custom">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Análise de Prioridades Locais & Governança Climática
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Configure o perfil local para receber recomendações personalizadas de projetos adaptativos
        </p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Perfil Local</TabsTrigger>
            <TabsTrigger value="recommendations">Recomendações</TabsTrigger>
            <TabsTrigger value="pilot">Projeto Piloto</TabsTrigger>
            <TabsTrigger value="governance">Governança</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-4">
                <h4 className="font-semibold mb-4">Informações Básicas</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Região/Município</label>
                    <Input 
                      value={localProfile.region}
                      onChange={(e) => setLocalProfile({...localProfile, region: e.target.value})}
                      placeholder="Ex: São Paulo, SP"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      População: {localProfile.population.toLocaleString()}
                    </label>
                    <Slider
                      value={[localProfile.population]}
                      onValueChange={([value]) => setLocalProfile({...localProfile, population: value})}
                      max={5000000}
                      min={1000}
                      step={1000}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Orçamento Disponível: {formatCurrency(localProfile.budget)}
                    </label>
                    <Slider
                      value={[localProfile.budget]}
                      onValueChange={([value]) => setLocalProfile({...localProfile, budget: value})}
                      max={50000000}
                      min={100000}
                      step={100000}
                      className="w-full"
                    />
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <h4 className="font-semibold mb-4">Capacidades Locais</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Infraestrutura</label>
                    <Select value={localProfile.infrastructure} onValueChange={(value: any) => 
                      setLocalProfile({...localProfile, infrastructure: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="baixa">Baixa</SelectItem>
                        <SelectItem value="média">Média</SelectItem>
                        <SelectItem value="alta">Alta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Educação/Capacitação</label>
                    <Select value={localProfile.education} onValueChange={(value: any) => 
                      setLocalProfile({...localProfile, education: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="baixa">Baixa</SelectItem>
                        <SelectItem value="média">Média</SelectItem>
                        <SelectItem value="alta">Alta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Governança</label>
                    <Select value={localProfile.governance} onValueChange={(value: any) => 
                      setLocalProfile({...localProfile, governance: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="baixa">Baixa</SelectItem>
                        <SelectItem value="média">Média</SelectItem>
                        <SelectItem value="alta">Alta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-4">
              <h4 className="font-semibold mb-4">Riscos Climáticos Locais</h4>
              <div className="flex flex-wrap gap-2">
                {climateRisks.map(risk => (
                  <Badge 
                    key={risk}
                    variant={localProfile.climateRisks.includes(risk) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => {
                      const updatedRisks = localProfile.climateRisks.includes(risk) 
                        ? localProfile.climateRisks.filter(r => r !== risk)
                        : [...localProfile.climateRisks, risk];
                      setLocalProfile({...localProfile, climateRisks: updatedRisks});
                    }}
                  >
                    {risk}
                  </Badge>
                ))}
              </div>
            </Card>

            <div className="flex justify-center">
              <Button onClick={analyzeLocalPriorities} size="lg" className="w-full md:w-auto">
                <Target className="h-4 w-4 mr-2" />
                Analisar Prioridades Locais
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            {!analysisComplete ? (
              <div className="text-center py-12">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="font-semibold mb-2">Configure o perfil local primeiro</h3>
                <p className="text-sm text-muted-foreground">
                  Preencha as informações na aba "Perfil Local" para receber recomendações personalizadas
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <Card className="p-4 text-center">
                    <Target className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <div className="text-lg font-bold">{recommendations.length}</div>
                    <div className="text-xs text-muted-foreground">Projetos Recomendados</div>
                  </Card>
                  <Card className="p-4 text-center">
                    <AlertTriangle className="h-6 w-6 mx-auto mb-2 text-destructive" />
                    <div className="text-lg font-bold">
                      {recommendations.filter(r => r.urgency === 'crítica' || r.urgency === 'alta').length}
                    </div>
                    <div className="text-xs text-muted-foreground">Alta Prioridade</div>
                  </Card>
                  <Card className="p-4 text-center">
                    <DollarSign className="h-6 w-6 mx-auto mb-2 text-success" />
                    <div className="text-lg font-bold">
                      {recommendations.filter(r => r.budget_fit).length}
                    </div>
                    <div className="text-xs text-muted-foreground">Dentro do Orçamento</div>
                  </Card>
                  <Card className="p-4 text-center">
                    <Star className="h-6 w-6 mx-auto mb-2 text-warning" />
                    <div className="text-lg font-bold">
                      {Math.round(recommendations.reduce((acc, r) => acc + r.feasibility, 0) / recommendations.length)}%
                    </div>
                    <div className="text-xs text-muted-foreground">Viabilidade Média</div>
                  </Card>
                </div>

                <div className="space-y-4">
                  {recommendations.slice(0, 10).map((rec, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">#{index + 1}</Badge>
                            <Badge variant={getUrgencyColor(rec.urgency)}>{rec.urgency}</Badge>
                            {rec.budget_fit && <Badge variant="default">Orçamento OK</Badge>}
                          </div>
                          <h4 className="font-semibold text-lg">{rec.project.name}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{rec.project.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{rec.priority_score}</div>
                          <div className="text-xs text-muted-foreground">Score</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <div className="text-sm font-medium">Viabilidade</div>
                          <div className="text-sm">{rec.feasibility}%</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium">Alinhamento Local</div>
                          <div className="text-sm">{rec.local_alignment}%</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium">Investimento</div>
                          <div className="text-sm">{formatCurrency(rec.project.typicalInvestment.min)}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </TabsContent>

          <TabsContent value="pilot" className="space-y-6">
            {!analysisComplete ? (
              <div className="text-center py-12">
                <Award className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="font-semibold mb-2">Análise necessária</h3>
                <p className="text-sm text-muted-foreground">
                  Complete a análise de prioridades para gerar o projeto piloto
                </p>
              </div>
            ) : (
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Projeto Piloto de Governança Climática
                </h3>
                
                {(() => {
                  const program = generatePilotProgram();
                  return (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Informações Gerais</h4>
                          <div className="space-y-2 text-sm">
                            <div><strong>Nome:</strong> {program.name}</div>
                            <div><strong>Duração:</strong> {program.duration}</div>
                            <div><strong>Orçamento Total:</strong> {formatCurrency(program.budget)}</div>
                            <div><strong>Setores Prioritários:</strong> {program.sectors.length}</div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Estrutura de Governança</h4>
                          <div className="space-y-2 text-sm">
                            <div><strong>Conselho:</strong> {program.governance_structure.council}</div>
                            <div><strong>Coordenação:</strong> {program.governance_structure.coordination}</div>
                            <div><strong>Monitoramento:</strong> {program.governance_structure.monitoring}</div>
                            <div><strong>Participação:</strong> {program.governance_structure.participation}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Projetos Selecionados (Top 8)</h4>
                        <div className="grid gap-3">
                          {program.projects.map((project, index) => (
                            <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                              <div>
                                <div className="font-medium">{project.project.name}</div>
                                <div className="text-sm text-muted-foreground">{project.project.sector}</div>
                              </div>
                              <div className="text-right">
                                <div className="font-medium">{formatCurrency(project.project.typicalInvestment.min)}</div>
                                <div className="text-sm text-success">Score: {project.priority_score}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-blue-900">Próximos Passos</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• Apresentar proposta ao Conselho Municipal</li>
                          <li>• Buscar financiamento junto às fontes identificadas</li>
                          <li>• Estabelecer parcerias técnicas</li>
                          <li>• Implementar sistema de monitoramento</li>
                          <li>• Capacitar equipes locais</li>
                          <li>• Iniciar projetos piloto por fases</li>
                        </ul>
                      </div>
                    </div>
                  );
                })()}
              </Card>
            )}
          </TabsContent>

          <TabsContent value="governance" className="space-y-6">
            <div className="grid gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Estrutura de Governança Recomendada
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Institucional</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        Conselho Municipal de Mudanças Climáticas
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        Comitê Executivo Intersecretarial
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        Grupos de Trabalho Setoriais
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        Observatório do Clima Local
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Participação Social</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-info" />
                        Audiências Públicas Regulares
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-info" />
                        Consultas Online
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-info" />
                        Comitês Comunitários
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-info" />
                        Educação e Capacitação
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Instrumentos de Política Climática
                </h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium mb-3 text-primary">Regulatório</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Lei Municipal do Clima</li>
                      <li>• Plano de Adaptação</li>
                      <li>• Código de Obras Climático</li>
                      <li>• Zoneamento Resiliente</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3 text-success">Econômico</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• IPTU Verde</li>
                      <li>• Fundos Climáticos</li>
                      <li>• Pagamento Serviços Ambientais</li>
                      <li>• Seguros Climáticos</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3 text-info">Informacional</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Sistema de Monitoramento</li>
                      <li>• Alertas Precoces</li>
                      <li>• Portal de Transparência</li>
                      <li>• Relatórios Anuais</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
