import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Layers, Download, Upload, Settings } from "lucide-react";
import type { UserProfile, GeoLayer } from "@/types/geoai";

interface InteractiveMapProps {
  selectedLayers: string[];
  onLayersChange: (layers: string[]) => void;
  userProfile: UserProfile;
}

export function InteractiveMap({ selectedLayers, onLayersChange, userProfile }: InteractiveMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapReady, setIsMapReady] = useState(false);

  const [availableLayers] = useState<GeoLayer[]>([
    {
      id: 'landuse',
      name: 'Uso e Cobertura do Solo',
      type: 'raster',
      visible: true,
      opacity: 0.7
    },
    {
      id: 'ndvi',
      name: 'Índice de Vegetação (NDVI)',
      type: 'raster',
      visible: false,
      opacity: 0.8
    },
    {
      id: 'water_bodies',
      name: 'Corpos Hídricos',
      type: 'vector',
      visible: true,
      opacity: 0.9
    },
    {
      id: 'precipitation',
      name: 'Precipitação',
      type: 'raster',
      visible: false,
      opacity: 0.6
    },
    {
      id: 'soil_classification',
      name: 'Classificação de Solo',
      type: 'raster',
      visible: false,
      opacity: 0.7
    },
    {
      id: 'topography',
      name: 'Topografia',
      type: 'raster',
      visible: false,
      opacity: 0.5
    }
  ]);

  // Mock center coordinates for Brazil
  const defaultCenter: [number, number] = [-47.8826, -15.7942]; // Brasília

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // For demo purposes, we'll show a token input
    if (!mapboxToken) {
      return;
    }

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: defaultCenter,
      zoom: 5,
      pitch: 0,
      bearing: 0
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    map.current.addControl(new mapboxgl.FullscreenControl(), 'top-right');

    map.current.on('load', () => {
      setIsMapReady(true);
      loadLayers();
    });

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const loadLayers = () => {
    if (!map.current) return;

    // Add sample layers (in a real implementation, these would be actual data sources)
    availableLayers.forEach((layer) => {
      if (layer.type === 'vector') {
        // Add sample vector layer
        map.current?.addSource(layer.id, {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: []
          }
        });

        map.current?.addLayer({
          id: layer.id,
          type: 'fill',
          source: layer.id,
          paint: {
            'fill-color': '#0080ff',
            'fill-opacity': layer.opacity
          },
          layout: {
            visibility: layer.visible ? 'visible' : 'none'
          }
        });
      }
    });
  };

  const toggleLayer = (layerId: string, visible: boolean) => {
    if (!map.current) return;
    
    map.current.setLayoutProperty(
      layerId,
      'visibility',
      visible ? 'visible' : 'none'
    );

    const newLayers = visible 
      ? [...selectedLayers, layerId]
      : selectedLayers.filter(id => id !== layerId);
    
    onLayersChange(newLayers);
  };

  const updateLayerOpacity = (layerId: string, opacity: number) => {
    if (!map.current) return;
    
    const layer = map.current.getLayer(layerId);
    if (layer) {
      if (layer.type === 'fill') {
        map.current.setPaintProperty(layerId, 'fill-opacity', opacity / 100);
      } else if (layer.type === 'raster') {
        map.current.setPaintProperty(layerId, 'raster-opacity', opacity / 100);
      }
    }
  };

  if (!mapboxToken) {
    return (
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Configuração do Mapa</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Token do Mapbox</label>
              <input
                type="text"
                className="w-full mt-1 px-3 py-2 border rounded-md"
                placeholder="Cole seu token público do Mapbox aqui"
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Obtenha seu token em: <a href="https://mapbox.com" target="_blank" className="text-blue-500">https://mapbox.com</a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      {/* Map Container */}
      <div className="lg:col-span-3">
        <div className="relative">
          <div ref={mapContainer} className="w-full h-[600px] rounded-lg shadow-lg" />
          
          {/* Map Controls Overlay */}
          <div className="absolute top-4 left-4 bg-card/90 backdrop-blur rounded-lg p-3 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <Layers className="h-4 w-4" />
              <span className="text-sm font-medium">Camadas Ativas</span>
            </div>
            <div className="space-y-1">
              {selectedLayers.map((layerId) => {
                const layer = availableLayers.find(l => l.id === layerId);
                return layer ? (
                  <Badge key={layerId} variant="secondary" className="text-xs">
                    {layer.name}
                  </Badge>
                ) : null;
              })}
              {selectedLayers.length === 0 && (
                <span className="text-xs text-muted-foreground">Nenhuma camada selecionada</span>
              )}
            </div>
          </div>

          {/* Export Controls */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <Button size="sm" variant="secondary">
              <Upload className="h-4 w-4 mr-1" />
              Upload
            </Button>
            <Button size="sm" variant="secondary">
              <Download className="h-4 w-4 mr-1" />
              Exportar
            </Button>
          </div>
        </div>
      </div>

      {/* Layer Control Panel */}
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-4 w-4" />
              Controle de Camadas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {availableLayers.map((layer) => (
              <div key={layer.id} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={layer.id}
                    checked={selectedLayers.includes(layer.id)}
                    onCheckedChange={(checked) => 
                      toggleLayer(layer.id, checked as boolean)
                    }
                  />
                  <label
                    htmlFor={layer.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {layer.name}
                  </label>
                </div>
                
                {selectedLayers.includes(layer.id) && (
                  <div className="ml-6 space-y-2">
                    <label className="text-xs text-muted-foreground">
                      Opacidade: {Math.round(layer.opacity * 100)}%
                    </label>
                    <Slider
                      value={[layer.opacity * 100]}
                      onValueChange={([value]) => updateLayerOpacity(layer.id, value)}
                      max={100}
                      min={0}
                      step={10}
                      className="w-full"
                    />
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Configurações
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" size="sm" className="w-full">
              Filtro Temporal
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              Seleção por Polígono
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              Análise Avançada
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}