import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart2, AlertTriangle, Droplet, Thermometer } from "lucide-react";
import type { UserProfile } from "@/types/geoai";

interface AgriculturePanelProps {
  userProfile: UserProfile;
}

export function AgriculturePanel({ userProfile }: AgriculturePanelProps) {
  const indicators = [
    { name: "Risco de Seca", value: 78, status: "warning", icon: Thermometer },
    { name: "Potencial Reúso Água", value: 45, status: "good", icon: Droplet },
    { name: "Degradação do Solo", value: 23, status: "danger", icon: AlertTriangle },
    { name: "Produtividade", value: 89, status: "good", icon: BarChart2 },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>🌾 Painel de Análise para Agricultura</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {indicators.map((indicator) => (
              <Card key={indicator.name}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <indicator.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{indicator.name}</span>
                  </div>
                  <div className="text-2xl font-bold">{indicator.value}%</div>
                  <Badge variant={indicator.status === "good" ? "default" : indicator.status === "warning" ? "secondary" : "destructive"}>
                    {indicator.status === "good" ? "Bom" : indicator.status === "warning" ? "Atenção" : "Crítico"}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}