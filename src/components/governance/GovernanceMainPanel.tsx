import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  FileText, 
  BarChart2, 
  Shield, 
  Eye, 
  Calendar,
  DollarSign,
  AlertTriangle,
  CheckCircle
} from "lucide-react";
import { PolicyManagementPanel } from "./PolicyManagementPanel";
import { TransparencyDashboard } from "./TransparencyDashboard";
import { ParticipationPanel } from "./ParticipationPanel";
import { InstitutionalCoordinationPanel } from "./InstitutionalCoordinationPanel";
import { RiskManagementPanel } from "./RiskManagementPanel";
import { BudgetMonitoringPanel } from "./BudgetMonitoringPanel";
import type { UserProfile } from "@/types/geoai";

interface GovernanceMainPanelProps {
  userProfile: UserProfile;
}

export function GovernanceMainPanel({ userProfile }: GovernanceMainPanelProps) {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data para indicadores gerais
  const governanceKPIs = [
    {
      title: "Políticas Ativas",
      value: 24,
      target: 30,
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Transparência Média",
      value: 78,
      target: 85,
      icon: Eye,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Participação Social",
      value: 156,
      target: 200,
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Execução Orçamentária",
      value: 67,
      target: 80,
      icon: DollarSign,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const recentActivities = [
    {
      id: "1",
      type: "policy",
      title: "Aprovação do Plano Municipal de Adaptação Climática",
      date: "2024-01-15",
      status: "concluido"
    },
    {
      id: "2", 
      type: "participation",
      title: "Audiência Pública sobre Recursos Hídricos",
      date: "2024-01-12",
      status: "realizado"
    },
    {
      id: "3",
      type: "budget",
      title: "Liberação de verba para projetos de infraestrutura verde",
      date: "2024-01-10",
      status: "em_execucao"
    },
    {
      id: "4",
      type: "coordination",
      title: "Reunião do Comitê Intersetorial de Clima",
      date: "2024-01-08",
      status: "realizado"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header com KPIs principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {governanceKPIs.map((kpi) => (
          <Card key={kpi.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg ${kpi.bgColor}`}>
                  <kpi.icon className={`h-5 w-5 ${kpi.color}`} />
                </div>
                <Badge variant="secondary">
                  {((kpi.value / kpi.target) * 100).toFixed(0)}%
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">{kpi.value}</span>
                  <span className="text-sm text-muted-foreground">/ {kpi.target}</span>
                </div>
                <p className="text-sm font-medium">{kpi.title}</p>
                <Progress value={(kpi.value / kpi.target) * 100} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs principais */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-3 lg:grid-cols-7 w-full">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="policies">Políticas</TabsTrigger>
          <TabsTrigger value="transparency">Transparência</TabsTrigger>
          <TabsTrigger value="participation">Participação</TabsTrigger>
          <TabsTrigger value="coordination">Coordenação</TabsTrigger>
          <TabsTrigger value="risks">Riscos</TabsTrigger>
          <TabsTrigger value="budget">Orçamento</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Atividades Recentes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Atividades Recentes
                </CardTitle>
                <CardDescription>
                  Últimas atualizações na governança climática
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="flex-shrink-0 mt-1">
                      {activity.status === 'concluido' || activity.status === 'realizado' ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 text-orange-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(activity.date).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                    <Badge 
                      variant={activity.status === 'concluido' || activity.status === 'realizado' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {activity.status.replace('_', ' ')}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Alertas e Pendências */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Alertas e Pendências
                </CardTitle>
                <CardDescription>
                  Itens que requerem atenção imediata
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 border border-red-200 bg-red-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <span className="text-sm font-medium text-red-900">Orçamento em atraso</span>
                  </div>
                  <p className="text-xs text-red-700">
                    Programa de Infraestrutura Verde com execução abaixo de 50%
                  </p>
                </div>
                
                <div className="p-3 border border-orange-200 bg-orange-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="h-4 w-4 text-orange-600" />
                    <span className="text-sm font-medium text-orange-900">Consulta pendente</span>
                  </div>
                  <p className="text-xs text-orange-700">
                    Audiência pública sobre uso do solo agendada para esta semana
                  </p>
                </div>

                <div className="p-3 border border-yellow-200 bg-yellow-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm font-medium text-yellow-900">Risco identificado</span>
                  </div>
                  <p className="text-xs text-yellow-700">
                    Possível conflito de uso da água em região metropolitana
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="policies">
          <PolicyManagementPanel userProfile={userProfile} />
        </TabsContent>

        <TabsContent value="transparency">
          <TransparencyDashboard userProfile={userProfile} />
        </TabsContent>

        <TabsContent value="participation">
          <ParticipationPanel userProfile={userProfile} />
        </TabsContent>

        <TabsContent value="coordination">
          <InstitutionalCoordinationPanel userProfile={userProfile} />
        </TabsContent>

        <TabsContent value="risks">
          <RiskManagementPanel userProfile={userProfile} />
        </TabsContent>

        <TabsContent value="budget">
          <BudgetMonitoringPanel userProfile={userProfile} />
        </TabsContent>
      </Tabs>
    </div>
  );
}