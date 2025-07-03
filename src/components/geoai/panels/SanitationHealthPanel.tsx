import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { UserProfile } from "@/types/geoai";

export function SanitationHealthPanel({ userProfile }: { userProfile: UserProfile }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>🚰 Saneamento e Saúde Pública</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Qualidade da água, saneamento básico e indicadores de saúde.</p>
      </CardContent>
    </Card>
  );
}