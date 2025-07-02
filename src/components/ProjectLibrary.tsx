import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { adaptiveProjects } from "@/data/adaptiveProjects";
import { SECTORS, Sector } from "@/types/climate";
import { formatCurrency } from "@/utils/climateCalculations";
import { Search, BookOpen, TrendingUp, Shield, Heart } from "lucide-react";

export function ProjectLibrary() {
  const [selectedSector, setSelectedSector] = useState<Sector | "">("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = Object.entries(adaptiveProjects).flatMap(([sector, projects]) => {
    return projects
      .filter(project => {
        const matchesSector = !selectedSector || project.sector === selectedSector;
        const matchesSearch = !searchTerm || 
          project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSector && matchesSearch;
      })
      .map(project => ({ ...project, sector: sector as Sector }));
  });

  return (
    <Card className="shadow-card-custom">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Biblioteca de Projetos Adaptativos
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Explore templates de projetos baseados em casos reais de adaptação climática
        </p>
      </CardHeader>
      <CardContent>
        {/* Filtros */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <Input
              placeholder="Buscar projetos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <Select value={selectedSector} onValueChange={(value) => setSelectedSector(value as Sector)}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Todos os setores" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Todos os setores</SelectItem>
              {SECTORS.map(sector => (
                <SelectItem key={sector} value={sector}>{sector}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Lista de Projetos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-all hover:scale-105">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="text-xs">
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
                        <span>Implementação:</span>
                        <span className="font-medium">
                          {project.implementationTime.min}-{project.implementationTime.max} meses
                        </span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Multiplicador:</span>
                        <span className="font-medium text-primary">
                          {project.economicMultiplier}x
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    {project.name}
                    <Badge variant="outline">{project.category}</Badge>
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  {/* Métricas */}
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

                  {/* Investimento e Prazo */}
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

                  {/* Benefícios Esperados */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Shield className="h-4 w-4 text-destructive" />
                        1º Dividendo - Redução de Perdas
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {project.expectedBenefits.first.map((benefit, index) => (
                          <li key={index} className="text-sm text-muted-foreground">{benefit}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-info" />
                        2º Dividendo - Benefícios Econômicos
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {project.expectedBenefits.second.map((benefit, index) => (
                          <li key={index} className="text-sm text-muted-foreground">{benefit}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Heart className="h-4 w-4 text-success" />
                        3º Dividendo - Benefícios Sociais
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {project.expectedBenefits.third.map((benefit, index) => (
                          <li key={index} className="text-sm text-muted-foreground">{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
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