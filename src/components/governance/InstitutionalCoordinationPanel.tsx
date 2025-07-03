import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Calendar } from "lucide-react";
import type { UserProfile } from "@/types/geoai";

interface InstitutionalCoordinationPanelProps {
  userProfile: UserProfile;
}

export function InstitutionalCoordinationPanel({ userProfile }: InstitutionalCoordinationPanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building className="h-5 w-5" />
          Coordenação Interinstitucional
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Gestão de comitês intersetoriais, grupos de trabalho e articulação entre instituições.
        </p>
      </CardContent>
    </Card>
  );
}