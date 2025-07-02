import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ClimateProject } from "@/types/climate";
import { SECTORS } from "@/types/climate";
import { SECTOR_BENCHMARKS, ADAPTIVE_PROJECTS_BY_SECTOR } from "@/data/sectorBenchmarks";
import { formatCurrency } from "@/utils/advancedCalculations";
import { AdvancedAnalysisDashboard } from "@/components/AdvancedAnalysisDashboard";
import { Calculator, TrendingUp } from "lucide-react";

interface ProjectCalculatorProps {
  onCalculate: (project: ClimateProject) => void;
}

export function ProjectCalculator({ onCalculate }: ProjectCalculatorProps) {
  const [formData, setFormData] = useState({
    name: "",
    sector: "",
    description: "",
    investment: "",
    timeline: "",
    region: "",
    
    // 1º Dividendo
    disasterRiskReduction: "",
    infrastructureProtection: "",
    livesProtected: "",
    
    // 2º Dividendo
    jobsCreated: "",
    productivityGains: "",
    economicGrowth: "",
    operationalEfficiency: "",
    
    // 3º Dividendo
    healthBenefits: "",
    educationImpact: "",
    biodiversityValue: "",
    socialInclusion: ""
  });

  const [selectedProject, setSelectedProject] = useState<string>("");
  const [showAdvancedAnalysis, setShowAdvancedAnalysis] = useState(false);
  const [calculatedProject, setCalculatedProject] = useState<ClimateProject | null>(null);

  // Função para preencher formulário com dados do projeto selecionado
  const fillWithProjectData = (projectName: string) => {
    const sectorProjects = ADAPTIVE_PROJECTS_BY_SECTOR[formData.sector as keyof typeof ADAPTIVE_PROJECTS_BY_SECTOR];
    const selectedProjectData = sectorProjects?.find(p => p.name === projectName);
    
    if (selectedProjectData && formData.sector) {
      const benchmark = SECTOR_BENCHMARKS[formData.sector];
      
      setFormData(prev => ({
        ...prev,
        name: selectedProjectData.name,
        investment: selectedProjectData.typical_cost.toString(),
        timeline: Math.round((benchmark.implementation_time.min + benchmark.implementation_time.max) / 2 / 12).toString(),
        
        // Valores estimados baseados no ROI típico
        disasterRiskReduction: Math.round(selectedProjectData.typical_cost * 0.3).toString(),
        infrastructureProtection: Math.round(selectedProjectData.typical_cost * 0.2).toString(),
        livesProtected: Math.round(selectedProjectData.typical_cost / 500).toString(),
        
        jobsCreated: Math.round(selectedProjectData.typical_cost / 50000).toString(),
        productivityGains: Math.round(selectedProjectData.typical_cost * 0.4).toString(),
        economicGrowth: Math.round(selectedProjectData.typical_cost * 0.3).toString(),
        operationalEfficiency: Math.round(selectedProjectData.typical_cost * 0.2).toString(),
        
        healthBenefits: Math.round(selectedProjectData.typical_cost * 0.15).toString(),
        educationImpact: Math.round(selectedProjectData.typical_cost * 0.1).toString(),
        biodiversityValue: Math.round(selectedProjectData.typical_cost * 0.25).toString(),
        socialInclusion: Math.round(selectedProjectData.typical_cost * 0.1).toString()
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const project: ClimateProject = {
      id: Date.now().toString(),
      name: formData.name,
      sector: formData.sector,
      description: formData.description,
      investment: Number(formData.investment),
      timeline: Number(formData.timeline),
      region: formData.region,
      
      firstDividend: {
        disasterRiskReduction: Number(formData.disasterRiskReduction),
        infrastructureProtection: Number(formData.infrastructureProtection),
        livesProtected: Number(formData.livesProtected)
      },
      
      secondDividend: {
        jobsCreated: Number(formData.jobsCreated),
        productivityGains: Number(formData.productivityGains),
        economicGrowth: Number(formData.economicGrowth),
        operationalEfficiency: Number(formData.operationalEfficiency)
      },
      
      thirdDividend: {
        healthBenefits: Number(formData.healthBenefits),
        educationImpact: Number(formData.educationImpact),
        biodiversityValue: Number(formData.biodiversityValue),
        socialInclusion: Number(formData.socialInclusion)
      }
    };
    
    setCalculatedProject(project);
    setShowAdvancedAnalysis(true);
    onCalculate(project);
  };

  const availableProjects = formData.sector ? 
    ADAPTIVE_PROJECTS_BY_SECTOR[formData.sector as keyof typeof ADAPTIVE_PROJECTS_BY_SECTOR] || [] : [];

  const sectorBenchmark = formData.sector ? SECTOR_BENCHMARKS[formData.sector] : null;

  return (
    <div className="space-y-6">
      <Card className="shadow-card-custom">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Calculadora Avançada de Projetos Adaptativos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Seleção de Projeto Pré-definido */}
            {formData.sector && (
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">🎯 Projetos Pré-configurados</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Selecione um projeto da nossa biblioteca para preenchimento automático
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div>
                      <Label htmlFor="predefinedProject">Projeto Sugerido</Label>
                      <Select value={selectedProject} onValueChange={(value) => {
                        setSelectedProject(value);
                        fillWithProjectData(value);
                      }}>
                        <SelectTrigger>
                          <SelectValue placeholder="Escolha um projeto da biblioteca" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableProjects.map(project => (
                            <SelectItem key={project.name} value={project.name}>
                              {project.name} - {formatCurrency(project.typical_cost)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {sectorBenchmark && (
                      <div className="grid md:grid-cols-3 gap-4 p-4 bg-white rounded-lg">
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary">
                            {formatCurrency(sectorBenchmark.typical_investment.median)}
                          </div>
                          <p className="text-xs text-muted-foreground">Investimento Típico</p>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">
                            {sectorBenchmark.roi_benchmarks.average}%
                          </div>
                          <p className="text-xs text-muted-foreground">ROI Médio</p>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">
                            {sectorBenchmark.success_rate}%
                          </div>
                          <p className="text-xs text-muted-foreground">Taxa de Sucesso</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Informações Básicas */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nome do Projeto</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Ex: Sistema de Irrigação Inteligente"
                  required
                />
              </div>
            
              <div>
                <Label htmlFor="sector">Setor</Label>
                <Select value={formData.sector} onValueChange={(value) => setFormData({...formData, sector: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o setor" />
                  </SelectTrigger>
                  <SelectContent>
                    {SECTORS.map(sector => (
                      <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="investment">Investimento (R$)</Label>
                <Input
                  id="investment"
                  type="number"
                  value={formData.investment}
                  onChange={(e) => setFormData({...formData, investment: e.target.value})}
                  placeholder="1000000"
                  required
                />
              </div>
            
              <div>
                <Label htmlFor="timeline">Prazo (anos)</Label>
                <Input
                  id="timeline"
                  type="number"
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                  placeholder="10"
                  required
                />
              </div>
            
              <div>
                <Label htmlFor="region">Região</Label>
                <Input
                  id="region"
                  value={formData.region}
                  onChange={(e) => setFormData({...formData, region: e.target.value})}
                  placeholder="Ex: Nordeste"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Descreva o projeto e seus objetivos..."
                rows={3}
              />
            </div>

            {/* 1º Dividendo */}
            <div className="border rounded-lg p-4 space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                🛡️ 1º Dividendo - Redução de Perdas
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="disasterRiskReduction">Redução de Riscos (R$)</Label>
                  <Input
                    id="disasterRiskReduction"
                    type="number"
                    value={formData.disasterRiskReduction}
                    onChange={(e) => setFormData({...formData, disasterRiskReduction: e.target.value})}
                    placeholder="500000"
                  />
                </div>
                <div>
                  <Label htmlFor="infrastructureProtection">Proteção de Infraestrutura (R$)</Label>
                  <Input
                    id="infrastructureProtection"
                    type="number"
                    value={formData.infrastructureProtection}
                    onChange={(e) => setFormData({...formData, infrastructureProtection: e.target.value})}
                    placeholder="300000"
                  />
                </div>
                <div>
                  <Label htmlFor="livesProtected">Vidas Protegidas (nº pessoas)</Label>
                  <Input
                    id="livesProtected"
                    type="number"
                    value={formData.livesProtected}
                    onChange={(e) => setFormData({...formData, livesProtected: e.target.value})}
                    placeholder="1000"
                  />
                </div>
              </div>
            </div>

            {/* 2º Dividendo */}
            <div className="border rounded-lg p-4 space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                📈 2º Dividendo - Benefícios Econômicos
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="jobsCreated">Empregos Criados (nº)</Label>
                  <Input
                    id="jobsCreated"
                    type="number"
                    value={formData.jobsCreated}
                    onChange={(e) => setFormData({...formData, jobsCreated: e.target.value})}
                    placeholder="50"
                  />
                </div>
                <div>
                  <Label htmlFor="productivityGains">Ganhos de Produtividade (R$)</Label>
                  <Input
                    id="productivityGains"
                    type="number"
                    value={formData.productivityGains}
                    onChange={(e) => setFormData({...formData, productivityGains: e.target.value})}
                    placeholder="800000"
                  />
                </div>
                <div>
                  <Label htmlFor="economicGrowth">Crescimento Econômico (R$)</Label>
                  <Input
                    id="economicGrowth"
                    type="number"
                    value={formData.economicGrowth}
                    onChange={(e) => setFormData({...formData, economicGrowth: e.target.value})}
                    placeholder="600000"
                  />
                </div>
                <div>
                  <Label htmlFor="operationalEfficiency">Eficiência Operacional (R$)</Label>
                  <Input
                    id="operationalEfficiency"
                    type="number"
                    value={formData.operationalEfficiency}
                    onChange={(e) => setFormData({...formData, operationalEfficiency: e.target.value})}
                    placeholder="400000"
                  />
                </div>
              </div>
            </div>

            {/* 3º Dividendo */}
            <div className="border rounded-lg p-4 space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                ❤️ 3º Dividendo - Benefícios Sociais e Ambientais
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="healthBenefits">Benefícios de Saúde (R$)</Label>
                  <Input
                    id="healthBenefits"
                    type="number"
                    value={formData.healthBenefits}
                    onChange={(e) => setFormData({...formData, healthBenefits: e.target.value})}
                    placeholder="200000"
                  />
                </div>
                <div>
                  <Label htmlFor="educationImpact">Impacto Educacional (R$)</Label>
                  <Input
                    id="educationImpact"
                    type="number"
                    value={formData.educationImpact}
                    onChange={(e) => setFormData({...formData, educationImpact: e.target.value})}
                    placeholder="150000"
                  />
                </div>
                <div>
                  <Label htmlFor="biodiversityValue">Valor da Biodiversidade (R$)</Label>
                  <Input
                    id="biodiversityValue"
                    type="number"
                    value={formData.biodiversityValue}
                    onChange={(e) => setFormData({...formData, biodiversityValue: e.target.value})}
                    placeholder="300000"
                  />
                </div>
                <div>
                  <Label htmlFor="socialInclusion">Inclusão Social (R$)</Label>
                  <Input
                    id="socialInclusion"
                    type="number"
                    value={formData.socialInclusion}
                    onChange={(e) => setFormData({...formData, socialInclusion: e.target.value})}
                    placeholder="100000"
                  />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full bg-gradient-primary text-white font-semibold py-3">
              <TrendingUp className="h-4 w-4 mr-2" />
              Calcular Análise Avançada
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Análise Avançada */}
      {showAdvancedAnalysis && calculatedProject && (
        <AdvancedAnalysisDashboard project={calculatedProject} />
      )}
    </div>
  );
}
