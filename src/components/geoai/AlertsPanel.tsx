import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Droplet, Thermometer, Wind, AlertOctagon } from "lucide-react";
import type { UserProfile, AlertData } from "@/types/geoai";

interface AlertsPanelProps {
  userProfile: UserProfile;
}

export function AlertsPanel({ userProfile }: AlertsPanelProps) {
  const [alerts] = useState<AlertData[]>([
    {
      id: '1',
      type: 'drought',
      severity: 'high',
      location: { lat: -15.7942, lng: -47.8826, name: 'Região Centro-Oeste' },
      message: 'Risco elevado de seca identificado para os próximos 15 dias',
      timestamp: '2024-01-15T10:30:00Z',
      affected_area: 1250.5
    },
    {
      id: '2',
      type: 'water_quality',
      severity: 'medium',
      location: { lat: -23.5505, lng: -46.6333, name: 'Região Metropolitana de SP' },
      message: 'Qualidade da água em pontos críticos requer monitoramento',
      timestamp: '2024-01-15T08:15:00Z',
      affected_area: 890.2
    },
    {
      id: '3',
      type: 'soil_degradation',
      severity: 'critical',
      location: { lat: -8.0476, lng: -34.8770, name: 'Zona da Mata Pernambucana' },
      message: 'Degradação acelerada do solo detectada por análise de imagens',
      timestamp: '2024-01-14T16:45:00Z',
      affected_area: 350.8
    },
    {
      id: '4',
      type: 'flood',
      severity: 'low',
      location: { lat: -25.4284, lng: -49.2733, name: 'Região Metropolitana de Curitiba' },
      message: 'Potencial de alagamento em áreas baixas devido às chuvas previstas',
      timestamp: '2024-01-14T12:20:00Z',
      affected_area: 125.3
    }
  ]);

  const alertIcons = {
    drought: Thermometer,
    flood: Droplet,
    fire: AlertTriangle,
    water_quality: Droplet,
    soil_degradation: AlertOctagon
  };

  const severityColors = {
    low: 'bg-green-100 text-green-800 border-green-200',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    high: 'bg-orange-100 text-orange-800 border-orange-200',
    critical: 'bg-red-100 text-red-800 border-red-200'
  };

  const severityLabels = {
    low: 'Baixo',
    medium: 'Médio',
    high: 'Alto',
    critical: 'Crítico'
  };

  const alertsByType = alerts.reduce((acc, alert) => {
    if (!acc[alert.type]) acc[alert.type] = [];
    acc[alert.type].push(alert);
    return acc;
  }, {} as Record<string, AlertData[]>);

  const criticalAlerts = alerts.filter(alert => alert.severity === 'critical');
  const highAlerts = alerts.filter(alert => alert.severity === 'high');

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-red-200 bg-red-50/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-600">Alertas Críticos</p>
                <p className="text-2xl font-bold text-red-700">{criticalAlerts.length}</p>
              </div>
              <AlertOctagon className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200 bg-orange-50/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-orange-600">Alto Risco</p>
                <p className="text-2xl font-bold text-orange-700">{highAlerts.length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total de Alertas</p>
                <p className="text-2xl font-bold">{alerts.length}</p>
              </div>
              <Wind className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Área Afetada</p>
                <p className="text-2xl font-bold">
                  {alerts.reduce((sum, alert) => sum + alert.affected_area, 0).toFixed(0)}
                </p>
                <p className="text-xs text-muted-foreground">km²</p>
              </div>
              <Droplet className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts List */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Todos ({alerts.length})</TabsTrigger>
          <TabsTrigger value="critical">Críticos ({criticalAlerts.length})</TabsTrigger>
          <TabsTrigger value="drought">Seca ({alertsByType.drought?.length || 0})</TabsTrigger>
          <TabsTrigger value="flood">Enchentes ({alertsByType.flood?.length || 0})</TabsTrigger>
          <TabsTrigger value="water_quality">Qualidade da Água ({alertsByType.water_quality?.length || 0})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {alerts.map((alert) => {
            const IconComponent = alertIcons[alert.type] || AlertTriangle;
            return (
              <Card key={alert.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${severityColors[alert.severity]}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-base">{alert.location.name}</CardTitle>
                        <CardDescription className="text-sm">
                          {new Date(alert.timestamp).toLocaleString('pt-BR')}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={severityColors[alert.severity]}
                    >
                      {severityLabels[alert.severity]}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm mb-3">{alert.message}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      Área afetada: {alert.affected_area} km²
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Ver no Mapa
                      </Button>
                      <Button size="sm">
                        Detalhes
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>

        <TabsContent value="critical" className="space-y-4">
          {criticalAlerts.map((alert) => {
            const IconComponent = alertIcons[alert.type] || AlertTriangle;
            return (
              <Card key={alert.id} className="border-red-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-red-100 text-red-800">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-base text-red-900">{alert.location.name}</CardTitle>
                        <CardDescription className="text-sm">
                          {new Date(alert.timestamp).toLocaleString('pt-BR')}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-red-100 text-red-800 border-red-200">
                      CRÍTICO
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm mb-3">{alert.message}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      Área afetada: {alert.affected_area} km²
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Ver no Mapa
                      </Button>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        Ação Imediata
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>

        {/* Other type-specific tabs would follow similar pattern */}
      </Tabs>
    </div>
  );
}
