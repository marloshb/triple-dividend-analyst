import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, BarChart2 } from "lucide-react";
import type { UserProfile } from "@/types/geoai";

interface BudgetMonitoringPanelProps {
  userProfile: UserProfile;
}

export function BudgetMonitoringPanel({ userProfile }: BudgetMonitoringPanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          Monitoramento Orçamentário
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Acompanhamento da execução orçamentária de programas climáticos.
        </p>
      </CardContent>
    </Card>
  );
}