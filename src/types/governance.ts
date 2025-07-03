export interface GovernancePolicy {
  id: string;
  name: string;
  type: 'plano_municipal' | 'lei_climatica' | 'politica_publica' | 'programa_governo';
  status: 'em_elaboracao' | 'aprovado' | 'implementacao' | 'concluido' | 'suspenso';
  sector: string;
  description: string;
  budget: number;
  timeline: {
    start_date: string;
    end_date: string;
    current_phase: string;
  };
  responsible_entity: string;
  stakeholders: string[];
  progress: number;
  impact_indicators: PolicyIndicator[];
  transparency_score: number;
  participation_level: 'baixa' | 'media' | 'alta';
}

export interface PolicyIndicator {
  id: string;
  name: string;
  value: number;
  target: number;
  unit: string;
  trend: 'improving' | 'stable' | 'declining';
  last_updated: string;
}

export interface ParticipationEvent {
  id: string;
  title: string;
  type: 'audiencia_publica' | 'consulta_popular' | 'oficina_participativa' | 'conselho_municipal';
  date: string;
  location: string;
  participants_count: number;
  topics: string[];
  outcomes: string[];
  status: 'agendado' | 'realizado' | 'cancelado';
}

export interface TransparencyReport {
  id: string;
  title: string;
  period: string;
  published_date: string;
  category: 'orcamento' | 'execucao' | 'resultados' | 'impactos';
  data_quality: number;
  accessibility_score: number;
  download_url: string;
  summary: string;
}

export interface InstitutionalCoordination {
  id: string;
  name: string;
  type: 'comite_intersetorial' | 'grupo_trabalho' | 'forum_regional' | 'consorcio_municipal';
  institutions: string[];
  coordinator: string;
  meeting_frequency: string;
  last_meeting: string;
  next_meeting: string;
  objectives: string[];
  achievements: string[];
  challenges: string[];
}

export interface ClimateRisk {
  id: string;
  name: string;
  category: 'fisico' | 'transicao' | 'governanca' | 'financeiro';
  probability: 'baixa' | 'media' | 'alta';
  impact: 'baixo' | 'medio' | 'alto' | 'critico';
  current_level: number;
  mitigation_measures: string[];
  responsible_entity: string;
  monitoring_frequency: string;
  last_assessment: string;
}

export interface PublicBudget {
  id: string;
  program_name: string;
  sector: string;
  allocated_amount: number;
  executed_amount: number;
  execution_percentage: number;
  beneficiaries_target: number;
  beneficiaries_reached: number;
  year: number;
  quarter: number;
  status: 'planejado' | 'em_execucao' | 'executado' | 'cancelado';
}