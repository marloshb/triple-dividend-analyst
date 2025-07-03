import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  FileText, 
  Search, 
  Filter, 
  Calendar, 
  Users, 
  BarChart2,
  ExternalLink,
  Plus,
  Edit,
  Eye
} from "lucide-react";
import type { UserProfile } from "@/types/geoai";
import type { GovernancePolicy } from "@/types/governance";

interface PolicyManagementPanelProps {
  userProfile: UserProfile;
}

export function PolicyManagementPanel({ userProfile }: PolicyManagementPanelProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterSector, setFilterSector] = useState("all");

  // Mock data for policies
  const [policies] = useState<GovernancePolicy[]>([
    {
      id: "1",
      name: "Plano Municipal de Adaptação Climática 2024-2030",
      type: "plano_municipal",
      status: "implementacao",
      sector: "Governança",
      description: "Plano abrangente para adaptação às mudanças climáticas no município",
      budget: 15000000,
      timeline: {
        start_date: "2024-01-01",
        end_date: "2030-12-31",
        current_phase: "Implementação inicial"
      },
      responsible_entity: "Secretaria de Meio Ambiente",
      stakeholders: ["Defesa Civil", "Secretaria de Obras", "Sociedade Civil"],
      progress: 35,
      impact_indicators: [
        {
          id: "1",
          name: "Vulnerabilidade Reduzida",
          value: 25,
          target: 50,
          unit: "%",
          trend: "improving",
          last_updated: "2024-01-15"
        }
      ],
      transparency_score: 85,
      participation_level: "alta"
    },
    {
      id: "2", 
      name: "Lei Municipal de Mudanças Climáticas",
      type: "lei_climatica",
      status: "aprovado",
      sector: "Governança",
      description: "Marco legal municipal para ações climáticas",
      budget: 500000,
      timeline: {
        start_date: "2023-06-01",
        end_date: "2024-06-01",
        current_phase: "Regulamentação"
      },
      responsible_entity: "Gabinete do Prefeito",
      stakeholders: ["Câmara Municipal", "Ministério Público", "ONGs"],
      progress: 90,
      impact_indicators: [
        {
          id: "2",
          name: "Compliance Legal",
          value: 90,
          target: 100,
          unit: "%",
          trend: "improving",
          last_updated: "2024-01-10"
        }
      ],
      transparency_score: 92,
      participation_level: "media"
    },
    {
      id: "3",
      name: "Programa de Infraestrutura Verde Urbana",
      type: "programa_governo",
      status: "em_elaboracao",
      sector: "Infraestrutura e Urbanismo",
      description: "Implementação de soluções baseadas na natureza em áreas urbanas",
      budget: 8000000,
      timeline: {
        start_date: "2024-03-01",
        end_date: "2026-12-31",
        current_phase: "Planejamento detalhado"
      },
      responsible_entity: "Secretaria de Obras",
      stakeholders: ["Secretaria de Meio Ambiente", "Comunidades locais"],
      progress: 15,
      impact_indicators: [
        {
          id: "3",
          name: "Áreas Verdes Criadas",
          value: 0,
          target: 25,
          unit: "hectares",
          trend: "stable",
          last_updated: "2024-01-08"
        }
      ],
      transparency_score: 78,
      participation_level: "baixa"
    }
  ]);

  const statusColors = {
    em_elaboracao: "bg-blue-100 text-blue-800",
    aprovado: "bg-green-100 text-green-800", 
    implementacao: "bg-orange-100 text-orange-800",
    concluido: "bg-gray-100 text-gray-800",
    suspenso: "bg-red-100 text-red-800"
  };

  const statusLabels = {
    em_elaboracao: "Em Elaboração",
    aprovado: "Aprovado",
    implementacao: "Em Implementação", 
    concluido: "Concluído",
    suspenso: "Suspenso"
  };

  const typeLabels = {
    plano_municipal: "Plano Municipal",
    lei_climatica: "Lei Climática",
    politica_publica: "Política Pública", 
    programa_governo: "Programa de Governo"
  };

  const filteredPolicies = policies.filter(policy => {
    const matchesSearch = policy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         policy.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || policy.status === filterStatus;
    const matchesSector = filterSector === "all" || policy.sector === filterSector;
    
    return matchesSearch && matchesStatus && matchesSector;
  });

  return (
    <div className="space-y-6">
      {/* Header com filtros e ações */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Gestão de Políticas Climáticas
              </CardTitle>
            </div>
            {userProfile.role === 'gestor_publico' && (
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Nova Política
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
                <Input
                  placeholder="Buscar políticas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Status</SelectItem>
                <SelectItem value="em_elaboracao">Em Elaboração</SelectItem>
                <SelectItem value="aprovado">Aprovado</SelectItem>
                <SelectItem value="implementacao">Em Implementação</SelectItem>
                <SelectItem value="concluido">Concluído</SelectItem>
                <SelectItem value="suspenso">Suspenso</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterSector} onValueChange={setFilterSector}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Setor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Setores</SelectItem>
                <SelectItem value="Governança">Governança</SelectItem>
                <SelectItem value="Infraestrutura e Urbanismo">Infraestrutura</SelectItem>
                <SelectItem value="Agricultura">Agricultura</SelectItem>
                <SelectItem value="Energia">Energia</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Lista de políticas */}
      <div className="grid gap-6">
        {filteredPolicies.map((policy) => (
          <Card key={policy.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-lg">{policy.name}</CardTitle>
                    <Badge variant="secondary">
                      {typeLabels[policy.type]}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {policy.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(policy.timeline.start_date).toLocaleDateString('pt-BR')} - {new Date(policy.timeline.end_date).toLocaleDateString('pt-BR')}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {policy.responsible_entity}
                    </span>
                    <span className="flex items-center gap-1">
                      <BarChart2 className="h-3 w-3" />
                      R$ {(policy.budget / 1000000).toFixed(1)}M
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge className={statusColors[policy.status]}>
                    {statusLabels[policy.status]}
                  </Badge>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-3 w-3 mr-1" />
                      Ver
                    </Button>
                    {userProfile.role === 'gestor_publico' && (
                      <Button size="sm" variant="outline">
                        <Edit className="h-3 w-3 mr-1" />
                        Editar
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progresso</span>
                  <span>{policy.progress}%</span>
                </div>
                <Progress value={policy.progress} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  Fase atual: {policy.timeline.current_phase}
                </p>
              </div>

              {/* Indicadores */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-medium">Transparência</p>
                  <div className="flex items-center gap-2">
                    <Progress value={policy.transparency_score} className="h-1 flex-1" />
                    <span className="text-xs">{policy.transparency_score}%</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium">Participação Social</p>
                  <Badge 
                    variant={policy.participation_level === 'alta' ? 'default' : 
                            policy.participation_level === 'media' ? 'secondary' : 'outline'}
                    className="text-xs"
                  >
                    {policy.participation_level.charAt(0).toUpperCase() + policy.participation_level.slice(1)}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium">Stakeholders</p>
                  <p className="text-xs text-muted-foreground">
                    {policy.stakeholders.length} envolvidos
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPolicies.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Nenhuma política encontrada com os filtros aplicados.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}