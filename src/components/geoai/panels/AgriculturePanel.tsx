import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart2, AlertTriangle, Droplet, Thermometer } from "lucide-react";
import type { UserProfile } from "@/types/geoai";

interface AgriculturePanelProps {
  userProfile: UserProfile;
}

export function AgriculturePanel({ userProfile }: AgriculturePanelProps) {
  const indicators = [
    { name: "Risco de Seca", value: 78, status: "warning", icon: Thermometer, description: "Análise baseada em precipitação e temperatura" },
    { name: "Potencial Reúso Água", value: 45, status: "good", icon: Droplet, description: "Áreas identificadas para sistemas de reúso" },
    { name: "Degradação do Solo", value: 23, status: "danger", icon: AlertTriangle, description: "Detecção por IA em imagens de satélite" },
    { name: "Produtividade", value: 89, status: "good", icon: BarChart2, description: "Índice de produtividade por hectare" },
  ];

  const recommendations = [
    "Implementar sistemas de irrigação eficiente em 12 propriedades identificadas",
    "Aplicar técnicas de conservação do solo em áreas com degradação detectada",
    "Diversificar culturas com espécies mais resistentes à seca",
    "Instalar sensores IoT para monitoramento em tempo real"
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>🌾 Painel de Análise para Agricultura</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {indicators.map((indicator) => (
              <Card key={indicator.name}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <indicator.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{indicator.name}</span>
                  </div>
                  <div className="text-2xl font-bold mb-1">{indicator.value}%</div>
                  <Badge variant={indicator.status === "good" ? "default" : indicator.status === "warning" ? "secondary" : "destructive"}>
                    {indicator.status === "good" ? "Bom" : indicator.status === "warning" ? "Atenção" : "Crítico"}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-2">{indicator.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recomendações IA</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5">{index + 1}</Badge>
                    <span className="text-sm">{rec}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}