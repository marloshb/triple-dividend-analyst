import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, MapPin, MessageSquare, Plus } from "lucide-react";
import type { UserProfile } from "@/types/geoai";
import type { ParticipationEvent } from "@/types/governance";

interface ParticipationPanelProps {
  userProfile: UserProfile;
}

export function ParticipationPanel({ userProfile }: ParticipationPanelProps) {
  const [events] = useState<ParticipationEvent[]>([
    {
      id: "1",
      title: "Audiência Pública sobre Plano Municipal de Adaptação",
      type: "audiencia_publica",
      date: "2024-01-20",
      location: "Câmara Municipal",
      participants_count: 85,
      topics: ["Adaptação climática", "Infraestrutura verde", "Orçamento 2024"],
      outcomes: ["Aprovação de 3 emendas", "Criação de grupo de trabalho"],
      status: "realizado"
    },
    {
      id: "2",
      title: "Consulta Popular sobre Recursos Hídricos",
      type: "consulta_popular",
      date: "2024-01-25",
      location: "Online e presencial",
      participants_count: 0,
      topics: ["Gestão de recursos hídricos", "Tarifação", "Conservação"],
      outcomes: [],
      status: "agendado"
    }
  ]);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Participação Social
          </CardTitle>
          {userProfile.role === 'gestor_publico' && (
            <Button>
              <Plus className="h-4 w-4 mr-1" />
              Novo Evento
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="p-4 border rounded-lg">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-medium mb-2">{event.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(event.date).toLocaleDateString('pt-BR')}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {event.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {event.participants_count} participantes
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {event.topics.map((topic, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
                {event.outcomes.length > 0 && (
                  <div className="mt-2">
                    <p className="text-xs font-medium mb-1">Resultados:</p>
                    <ul className="text-xs text-muted-foreground list-disc list-inside">
                      {event.outcomes.map((outcome, index) => (
                        <li key={index}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <Badge 
                variant={event.status === 'realizado' ? 'default' : 'secondary'}
              >
                {event.status}
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}