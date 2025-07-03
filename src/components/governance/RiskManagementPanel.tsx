import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle } from "lucide-react";
import type { UserProfile } from "@/types/geoai";

interface RiskManagementPanelProps {
  userProfile: UserProfile;
}

export function RiskManagementPanel({ userProfile }: RiskManagementPanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Gestão de Riscos Climáticos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Identificação, avaliação e mitigação de riscos climáticos para a governança.
        </p>
      </CardContent>
    </Card>
  );
}