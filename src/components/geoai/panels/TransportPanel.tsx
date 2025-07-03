import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { UserProfile } from "@/types/geoai";

export function TransportPanel({ userProfile }: { userProfile: UserProfile }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>🚜 Transportes Resilientes</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Mobilidade sustentável, logística resiliente e transporte público.</p>
      </CardContent>
    </Card>
  );
}