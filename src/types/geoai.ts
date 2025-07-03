export interface GeoLayer {
  id: string;
  name: string;
  type: 'raster' | 'vector' | 'geojson';
  url?: string;
  data?: any;
  visible: boolean;
  opacity: number;
}

export interface MapSettings {
  center: [number, number];
  zoom: number;
  pitch: number;
  bearing: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'gestor_publico' | 'usuario_tecnico';
  region?: string;
  permissions: string[];
}

export interface AnalysisResult {
  id: string;
  type: string;
  title: string;
  description: string;
  value: number;
  unit: string;
  risk_level: 'baixo' | 'medio' | 'alto' | 'critico';
  recommendations: string[];
  created_at: string;
}

export interface SectorPanel {
  id: string;
  name: string;
  icon: string;
  description: string;
  indicators: AnalysisIndicator[];
}

export interface AnalysisIndicator {
  id: string;
  name: string;
  value: number;
  unit: string;
  status: 'good' | 'warning' | 'danger';
  trend: 'up' | 'down' | 'stable';
  description: string;
}

export interface AlertData {
  id: string;
  type: 'drought' | 'flood' | 'fire' | 'water_quality' | 'soil_degradation';
  severity: 'low' | 'medium' | 'high' | 'critical';
  location: {
    lat: number;
    lng: number;
    name: string;
  };
  message: string;
  timestamp: string;
  affected_area: number;
}

export interface GeospatialData {
  type: 'FeatureCollection';
  features: Array<{
    type: 'Feature';
    geometry: {
      type: string;
      coordinates: any;
    };
    properties: Record<string, any>;
  }>;
}