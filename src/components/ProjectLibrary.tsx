import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { adaptiveProjects } from "@/data/adaptiveProjects";
import { SECTORS, Sector, FINANCING_SOURCES, TECHNICAL_PARTNERS } from "@/types/climate";
import { formatCurrency } from "@/utils/climateCalculations";
import { 
  Search, BookOpen, TrendingUp, Shield, Heart, 
  DollarSign, Users, Zap, Building, Leaf, 
  Calculator, Award, Target, Globe, Sun, Wind, Battery,
  Car, Bike, Bus, Truck, BarChart3
} from "lucide-react";

export function ProjectLibrary() {
  const [selectedSector, setSelectedSector] = useState<Sector | "all">("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "investment" | "roi" | "impact">("name");

  const filteredProjects = Object.entries(adaptiveProjects).flatMap(([sector, projects]) => {
    return projects
      .filter(project => {
        const matchesSector = selectedSector === "all" || project.sector === selectedSector;
        const matchesSearch = !searchTerm || 
          project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.category.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSector && matchesSearch;
      })
      .map(project => ({ ...project, sector: sector as Sector }));
  }).sort((a, b) => {
    switch (sortBy) {
      case "investment":
        return a.typicalInvestment.min - b.typicalInvestment.min;
      case "roi":
        return b.economicMultiplier - a.economicMultiplier;
      case "impact":
        return b.socialImpact - a.socialImpact;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const getSectorIcon = (sector: string) => {
    const icons: Record<string, any> = {
      "Agricultura e Recursos Hídricos": Leaf,
      "Florestas e Ecossistemas": Leaf,
      "Infraestrutura e Urbanismo": Building,
      "Saneamento e Saúde Pública": Heart,
      "Infraestrutura de Energia": Zap,
      "Transportes Resilientes": Car,
      "Ambiente Social e Educação": Users,
      "Engenharia Costeira e Pesca": Globe,
      "Saúde e Bem Estar": Heart,
      "Governança e Finanças Climáticas": DollarSign,
      "Finanças Climáticas": DollarSign,
      "Governança": Building
    };
    return icons[sector] || Globe;
  };

  const getCategoryIcon = (category: string) => {
    const categoryIcons: Record<string, any> = {
      "Energia Solar": Sun,
      "Energia Eólica": Wind,
      "Armazenamento e Eficiência": Battery,
      "Integração e Rede Inteligente": Zap,
      "Captação e Armazenamento de Água": Leaf,
      "Irrigação Eficiente": Leaf,
      "Restauração e Reflorestamento": Leaf,
      "Proteção e Conservação": Shield,
      "Gestão e Monitoramento": Target,
      "Drenagem e Gestão de Águas Pluviais": Building,
      "Infraestrutura Verde": Building,
      "Mobilidade Resiliente": Target,
      "Infraestrutura Física": Building,
      "Infraestrutura Sanitária": Heart,
      "Controle de Doenças": Heart,
      "Monitoramento & Qualidade da Água": Heart,
      "Educação e Governança": Users,
      "Infraestrutura Rodoviária Resiliente": Car,
      "Infraestrutura Cicloviária Resiliente": Bike,
      "Transporte Coletivo Resiliente": Bus,
      "Tecnologia, Monitoramento & Inovação": Target,
      "Infraestrutura de Saúde Resiliente": Heart,
      "Prevenção e Monitoramento de Saúde": Shield,
      "Promoção do Bem-Estar Comunitário": Users,
      "Capacitação, Governança e Educação em Saúde": Award,
      "Produtos Financeiros Verdes e Inclusivos": DollarSign,
      "Mecanismos de Financiamento Público e PPPs": Building,
      "Captação Internacional e Finanças Globais": Globe,
      "Transparência, Monitoramento e Taxonomia": BarChart3,
      "Educação Ambiental e Sensibilização": BookOpen,
      "Inclusão e Empoderamento Comunitário": Users,
      "Capacitação Técnica e Tecnológica": Zap,
      "Participação, Planejamento e Governança": Target,
      "Infraestrutura Costeira e Proteção": Shield,
      "Monitoramento e Tecnologia": Target,
      "Gestão Pesqueira e Aquicultura": Leaf,
      "Planejamento e Governança": Users,
      "Estruturação de Políticas, Planos e Marcos Legais": Building,
      "Participação Social, Inclusão e Controle Social": Users,
      "Coordenação Interinstitucional e Governança Multinível": Target,
      "Monitoramento, Indicadores e Transparência": BarChart3,
    };
    return categoryIcons[category] || Globe;
  };

  const calculateEstimatedBenefits = (project: any) => {
    const avgInvestment = (project.typicalInvestment.min + project.typicalInvestment.max) / 2;
    const totalBenefits = avgInvestment * project.economicMultiplier;
    return {
      investment: avgInvestment,
      benefits: totalBenefits,
      firstDividend: totalBenefits * 0.4,
      secondDividend: totalBenefits * 0.35,
      thirdDividend: totalBenefits * 0.25
    };
  };

  return (
    <Card className="shadow-card-custom">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Biblioteca de Projetos Adaptativos & Benchmarks
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Explore 300+ projetos de adaptação climática com análise Triple Dividend completa
        </p>
      </CardHeader>
      <CardContent>
        {/* Filtros e Controles */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 min-w-64">
            <Input
              placeholder="Buscar projetos, setores ou categorias..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <Select value={selectedSector} onValueChange={(value) => setSelectedSector(value as Sector | "all")}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Todos os setores" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os setores</SelectItem>
              {SECTORS.map(sector => (
                <SelectItem key={sector} value={sector}>{sector}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Nome</SelectItem>
              <SelectItem value="investment">Investimento</SelectItem>
              <SelectItem value="roi">ROI</SelectItem>
              <SelectItem value="impact">Impacto Social</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Estatísticas Gerais */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center">
            <Award className="h-6 w-6 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{filteredProjects.length}</div>
            <div className="text-xs text-muted-foreground">Projetos</div>
          </Card>
          <Card className="p-4 text-center">
            <DollarSign className="h-6 w-6 mx-auto mb-2 text-success" />
            <div className="text-2xl font-bold">
              {(filteredProjects.reduce((acc, p) => acc + p.economicMultiplier, 0) / filteredProjects.length || 0).toFixed(1)}x
            </div>
            <div className="text-xs text-muted-foreground">ROI Médio</div>
          </Card>
          <Card className="p-4 text-center">
            <Shield className="h-6 w-6 mx-auto mb-2 text-destructive" />
            <div className="text-2xl font-bold">
              {(filteredProjects.reduce((acc, p) => acc + p.riskReduction, 0) / filteredProjects.length || 0).toFixed(0)}%
            </div>
            <div className="text-xs text-muted-foreground">Redução de Risco</div>
          </Card>
          <Card className="p-4 text-center">
            <Heart className="h-6 w-6 mx-auto mb-2 text-info" />
            <div className="text-2xl font-bold">
              {(filteredProjects.reduce((acc, p) => acc + p.socialImpact, 0) / filteredProjects.length || 0).toFixed(1)}/5
            </div>
            <div className="text-xs text-muted-foreground">Impacto Social</div>
          </Card>
        </div>

        {/* Lista de Projetos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project) => {
            const SectorIcon = getSectorIcon(project.sector);
            const analysis = calculateEstimatedBenefits(project);
            
            return (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-lg transition-all hover:scale-105">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="text-xs flex items-center gap-1">
                          <SectorIcon className="h-3 w-3" />
                          {project.category}
                        </Badge>
                        <div className="text-xs text-success font-semibold">
                          {project.riskReduction}% redução
                        </div>
                      </div>
                      <CardTitle className="text-lg line-clamp-2">
                        {project.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                        {project.description}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>Investimento:</span>
                          <span className="font-medium">
                            {formatCurrency(project.typicalInvestment.min)} - {formatCurrency(project.typicalInvestment.max)}
                          </span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>ROI Estimado:</span>
                          <span className="font-medium text-primary">
                            {project.economicMultiplier}x
                          </span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Implementação:</span>
                          <span className="font-medium">
                            {project.implementationTime.min}-{project.implementationTime.max} meses
                          </span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Impacto Social:</span>
                          <span className="font-medium text-success">
                            {project.socialImpact}/5
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <SectorIcon className="h-5 w-5" />
                      {project.name}
                      <Badge variant="outline">{project.category}</Badge>
                    </DialogTitle>
                  </DialogHeader>
                  
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-5">
                      <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                      <TabsTrigger value="economics">💰 Econômico</TabsTrigger>
                      <TabsTrigger value="dividends">📊 Dividendos</TabsTrigger>
                      <TabsTrigger value="financing">🏦 Financiamento</TabsTrigger>
                      <TabsTrigger value="partners">🤝 Parceiros</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Descrição</h4>
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>

                      {/* Métricas Principais */}
                      <div className="grid grid-cols-3 gap-4">
                        <Card className="p-4 text-center">
                          <Shield className="h-6 w-6 mx-auto mb-2 text-destructive" />
                          <div className="text-lg font-bold">{project.riskReduction}%</div>
                          <div className="text-xs text-muted-foreground">Redução de Risco</div>
                        </Card>
                        <Card className="p-4 text-center">
                          <TrendingUp className="h-6 w-6 mx-auto mb-2 text-info" />
                          <div className="text-lg font-bold">{project.economicMultiplier}x</div>
                          <div className="text-xs text-muted-foreground">Multiplicador</div>
                        </Card>
                        <Card className="p-4 text-center">
                          <Heart className="h-6 w-6 mx-auto mb-2 text-success" />
                          <div className="text-lg font-bold">{project.socialImpact}/5</div>
                          <div className="text-xs text-muted-foreground">Impacto Social</div>
                        </Card>
                      </div>

                      {/* Informações Básicas */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Investimento Típico</h4>
                          <p className="text-sm">
                            <span className="font-medium">Mínimo:</span> {formatCurrency(project.typicalInvestment.min)}
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Máximo:</span> {formatCurrency(project.typicalInvestment.max)}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Prazo de Implementação</h4>
                          <p className="text-sm">
                            {project.implementationTime.min} a {project.implementationTime.max} meses
                          </p>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="economics" className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <Card className="p-4">
                          <h4 className="font-semibold mb-4 flex items-center gap-2">
                            <Calculator className="h-4 w-4" />
                            Análise de Investimento
                          </h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-sm">Investimento Médio:</span>
                              <span className="font-medium">{formatCurrency(analysis.investment)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Benefícios Totais:</span>
                              <span className="font-medium text-success">{formatCurrency(analysis.benefits)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">ROI:</span>
                              <span className="font-medium text-primary">{project.economicMultiplier}x</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Retorno Anual:</span>
                              <span className="font-medium">
                                {((Math.pow(project.economicMultiplier, 1/3) - 1) * 100).toFixed(1)}%
                              </span>
                            </div>
                          </div>
                        </Card>

                        <Card className="p-4">
                          <h4 className="font-semibold mb-4 flex items-center gap-2">
                            <Target className="h-4 w-4" />
                            Escalabilidade
                          </h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-sm">Potencial:</span>
                              <Badge variant={project.economicMultiplier > 4 ? "default" : "secondary"}>
                                {project.economicMultiplier > 4 ? "Alto" : project.economicMultiplier > 2.5 ? "Médio" : "Baixo"}
                              </Badge>
                            </div>
                            <div className="text-sm">
                              <p className="font-medium mb-1">Fatores Facilitadores:</p>
                              <ul className="list-disc list-inside text-muted-foreground">
                                <li>Tecnologia comprovada</li>
                                <li>Múltiplas fontes de financiamento</li>
                                <li>Impacto mensurável</li>
                              </ul>
                            </div>
                          </div>
                        </Card>
                      </div>

                      {/* Comparação de Setores */}
                      <Card className="p-4">
                        <h4 className="font-semibold mb-4">Benchmark Setorial</h4>
                        <div className="text-sm text-muted-foreground">
                          <p>Este projeto apresenta ROI de <strong>{project.economicMultiplier}x</strong>, 
                          comparado à média setorial de 3.2x para {project.sector}.</p>
                        </div>
                      </Card>
                    </TabsContent>

                    <TabsContent value="dividends" className="space-y-6">
                      {/* Análise Triple Dividend */}
                      <div className="grid gap-4">
                        <Card className="p-4">
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Shield className="h-4 w-4 text-destructive" />
                            1º Dividendo - Redução de Perdas
                          </h4>
                          <div className="mb-3">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm">Valor Estimado:</span>
                              <span className="font-bold text-destructive">{formatCurrency(analysis.firstDividend)}</span>
                            </div>
                          </div>
                          <ul className="list-disc list-inside space-y-1">
                            {project.expectedBenefits.first.map((benefit, index) => (
                              <li key={index} className="text-sm text-muted-foreground">{benefit}</li>
                            ))}
                          </ul>
                        </Card>

                        <Card className="p-4">
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-info" />
                            2º Dividendo - Benefícios Econômicos
                          </h4>
                          <div className="mb-3">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm">Valor Estimado:</span>
                              <span className="font-bold text-info">{formatCurrency(analysis.secondDividend)}</span>
                            </div>
                          </div>
                          <ul className="list-disc list-inside space-y-1">
                            {project.expectedBenefits.second.map((benefit, index) => (
                              <li key={index} className="text-sm text-muted-foreground">{benefit}</li>
                            ))}
                          </ul>
                        </Card>

                        <Card className="p-4">
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Heart className="h-4 w-4 text-success" />
                            3º Dividendo - Benefícios Sociais
                          </h4>
                          <div className="mb-3">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm">Valor Estimado:</span>
                              <span className="font-bold text-success">{formatCurrency(analysis.thirdDividend)}</span>
                            </div>
                          </div>
                          <ul className="list-disc list-inside space-y-1">
                            {project.expectedBenefits.third.map((benefit, index) => (
                              <li key={index} className="text-sm text-muted-foreground">{benefit}</li>
                            ))}
                          </ul>
                        </Card>
                      </div>
                    </TabsContent>

                    <TabsContent value="financing" className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-4 flex items-center gap-2">
                          <DollarSign className="h-4 w-4" />
                          Fontes de Financiamento Sugeridas
                        </h4>
                        
                        {FINANCING_SOURCES[project.sector]?.map((source, index) => (
                          <Card key={index} className="p-4 mb-4">
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="font-medium">{source.name}</h5>
                              <Badge variant="outline">{source.type}</Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-3">
                              <div>
                                <p className="text-sm font-medium">Faixa de Financiamento:</p>
                                <p className="text-sm text-muted-foreground">
                                  {formatCurrency(source.typical_amount.min)} - {formatCurrency(source.typical_amount.max)}
                                </p>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Foco:</p>
                                <p className="text-sm text-muted-foreground">
                                  {source.focus.join(", ")}
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm font-medium mb-1">Requisitos principais:</p>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {source.requirements.map((req, i) => (
                                  <li key={i}>{req}</li>
                                ))}
                              </ul>
                            </div>
                            {source.contact_info && (
                              <p className="text-sm mt-2">
                                <strong>Contato:</strong> {source.contact_info}
                              </p>
                            )}
                          </Card>
                        )) || (
                          <p className="text-muted-foreground">
                            Fontes de financiamento específicas para este setor em desenvolvimento.
                          </p>
                        )}
                      </div>
                    </TabsContent>

                    <TabsContent value="partners" className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-4 flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Parceiros Técnicos Recomendados
                        </h4>
                        
                        {TECHNICAL_PARTNERS[project.sector]?.map((partner, index) => (
                          <Card key={index} className="p-4 mb-4">
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="font-medium">{partner.name}</h5>
                              <Badge variant="outline">{partner.type.replace('_', ' ')}</Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-3">
                              <div>
                                <p className="text-sm font-medium">Localização:</p>
                                <p className="text-sm text-muted-foreground">{partner.location}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Expertise:</p>
                                <p className="text-sm text-muted-foreground">
                                  {partner.expertise.join(", ")}
                                </p>
                              </div>
                            </div>
                            {partner.previous_projects && (
                              <div>
                                <p className="text-sm font-medium mb-1">Projetos anteriores:</p>
                                <ul className="list-disc list-inside text-sm text-muted-foreground">
                                  {partner.previous_projects.map((project, i) => (
                                    <li key={i}>{project}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </Card>
                        )) || (
                          <p className="text-muted-foreground">
                            Parceiros técnicos específicos para este setor em desenvolvimento.
                          </p>
                        )}
                      </div>
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="font-semibold mb-2">Nenhum projeto encontrado</h3>
            <p className="text-sm text-muted-foreground">
              Tente ajustar os filtros ou termos de busca
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
