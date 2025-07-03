import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, BarChart2, Settings, Users, Bell } from "lucide-react";
import { InteractiveMap } from "./InteractiveMap";
import { AgriculturePanel } from "./panels/AgriculturePanel";
import { WaterResourcesPanel } from "./panels/WaterResourcesPanel";
import { ForestEcosystemPanel } from "./panels/ForestEcosystemPanel";
import { UrbanInfrastructurePanel } from "./panels/UrbanInfrastructurePanel";
import { SanitationHealthPanel } from "./panels/SanitationHealthPanel";
import { EnergyInfrastructurePanel } from "./panels/EnergyInfrastructurePanel";
import { TransportPanel } from "./panels/TransportPanel";
import { CoastalEngineeringPanel } from "./panels/CoastalEngineeringPanel";
import { AlertsPanel } from "./AlertsPanel";
import type { UserProfile } from "@/types/geoai";

interface GeoAILayoutProps {
  user: UserProfile;
}

export function GeoAILayout({ user }: GeoAILayoutProps) {
  const [activeTab, setActiveTab] = useState("map");
  const [selectedLayers, setSelectedLayers] = useState<string[]>([]);

  const sectorPanels = [
    { id: "agriculture", name: "Agricultura", icon: "🌾", component: AgriculturePanel },
    { id: "water", name: "Recursos Hídricos", icon: "🚰", component: WaterResourcesPanel },
    { id: "forest", name: "Florestas", icon: "🌳", component: ForestEcosystemPanel },
    { id: "urban", name: "Infraestrutura Urbana", icon: "🏘️", component: UrbanInfrastructurePanel },
    { id: "sanitation", name: "Saneamento", icon: "🚰", component: SanitationHealthPanel },
    { id: "energy", name: "Energia", icon: "🌆", component: EnergyInfrastructurePanel },
    { id: "transport", name: "Transportes", icon: "🚜", component: TransportPanel },
    { id: "coastal", name: "Engenharia Costeira", icon: "🏗️", component: CoastalEngineeringPanel },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-bold">GeoIA Platform</h1>
              </div>
              <Badge variant="secondary">v1.0</Badge>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge variant={user.role === 'gestor_publico' ? 'default' : 'secondary'}>
                {user.role === 'gestor_publico' ? 'Gestor Público' : 'Usuário Técnico'}
              </Badge>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="text-sm font-medium">{user.name}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-4 lg:grid-cols-10 w-full">
            <TabsTrigger value="map" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Mapa
            </TabsTrigger>
            <TabsTrigger value="alerts" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Alertas
            </TabsTrigger>
            {sectorPanels.map((panel) => (
              <TabsTrigger key={panel.id} value={panel.id} className="flex items-center gap-1">
                <span className="text-xs">{panel.icon}</span>
                <span className="hidden sm:inline">{panel.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="map" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Mapa Interativo Multicamadas
                </CardTitle>
                <CardDescription>
                  Visualize dados geoespaciais em tempo real com análise por IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveMap
                  selectedLayers={selectedLayers}
                  onLayersChange={setSelectedLayers}
                  userProfile={user}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-4">
            <AlertsPanel userProfile={user} />
          </TabsContent>

          {sectorPanels.map((panel) => (
            <TabsContent key={panel.id} value={panel.id} className="space-y-4">
              <panel.component userProfile={user} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}