import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { UserProfile } from "@/types/geoai";

export function WaterResourcesPanel({ userProfile }: { userProfile: UserProfile }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>🚰 Painel de Recursos Hídricos</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Balanço hídrico, conflitos de uso e monitoramento em tempo real.</p>
      </CardContent>
    </Card>
  );
}