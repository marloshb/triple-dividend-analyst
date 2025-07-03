import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { UserProfile } from "@/types/geoai";

export function CoastalEngineeringPanel({ userProfile }: { userProfile: UserProfile }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>🏗️ Engenharia Costeira e Pesca</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Proteção costeira, aquicultura sustentável e gestão pesqueira.</p>
      </CardContent>
    </Card>
  );
}