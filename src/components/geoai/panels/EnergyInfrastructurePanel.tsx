import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { UserProfile } from "@/types/geoai";

export function EnergyInfrastructurePanel({ userProfile }: { userProfile: UserProfile }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>🌆 Infraestrutura de Energia</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Energia renovável, eficiência energética e redes inteligentes.</p>
      </CardContent>
    </Card>
  );
}