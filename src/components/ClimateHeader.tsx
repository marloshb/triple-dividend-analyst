import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Leaf, Shield, Heart } from "lucide-react";

export function ClimateHeader() {
  return (
    <div className="bg-gradient-hero text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">
            Triple Dividend Climate Platform
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
            Análise econômica completa para projetos de adaptação climática baseada na metodologia WRI
          </p>
          <div className="flex justify-center gap-3 mt-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              ROI Médio: 10.5x
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Retorno: 20-27% a.a.
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              US$ 133bi Analisados
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6 text-center">
            <Shield className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-lg font-semibold mb-2">1º Dividendo</h3>
            <p className="text-white/80 text-sm">
              Redução de perdas por desastres climáticos e proteção de ativos
            </p>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6 text-center">
            <TrendingUp className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-lg font-semibold mb-2">2º Dividendo</h3>
            <p className="text-white/80 text-sm">
              Benefícios econômicos: empregos, produtividade e crescimento
            </p>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6 text-center">
            <Heart className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-lg font-semibold mb-2">3º Dividendo</h3>
            <p className="text-white/80 text-sm">
              Benefícios sociais e ambientais: saúde, educação e biodiversidade
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}