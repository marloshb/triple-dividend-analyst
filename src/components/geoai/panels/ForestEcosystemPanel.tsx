import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { UserProfile } from "@/types/geoai";

export function ForestEcosystemPanel({ userProfile }: { userProfile: UserProfile }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>🌳 Florestas e Ecossistemas</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Monitoramento de desmatamento, biodiversidade e conservação.</p>
      </CardContent>
    </Card>
  );
}