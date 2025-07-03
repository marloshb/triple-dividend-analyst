import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { UserProfile } from "@/types/geoai";

export function UrbanInfrastructurePanel({ userProfile }: { userProfile: UserProfile }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>🏘️ Infraestrutura e Urbanismo</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Análise urbana, infraestrutura resiliente e planejamento territorial.</p>
      </CardContent>
    </Card>
  );
}