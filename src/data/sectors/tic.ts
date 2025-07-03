
import { AdaptiveProjectTemplate } from "@/types/climate";

export const ticProjects: AdaptiveProjectTemplate[] = [
  // A. Sistemas de Monitoramento e Alerta (1-15)
  {
    id: "tic-001",
    name: "Desenvolvimento de plataformas digitais para monitoramento climático em tempo real",
    sector: "Tecnologia da Informação e Comunicação (TIC)",
    category: "Sistemas de Monitoramento e Alerta",
    description: "Plataformas integradas para coleta, processamento e visualização de dados climáticos em tempo real com dashboards interativos.",
    typicalInvestment: { min: 800000, max: 5000000 },
    expectedBenefits: {
      first: ["Monitoramento contínuo", "Detecção precoce de riscos", "Dados precisos para decisões"],
      second: ["Redução de custos operacionais", "Otimização de recursos", "Eficiência na gestão"],
      third: ["Transparência pública", "Educação digital", "Capacitação técnica"]
    },
    implementationTime: { min: 12, max: 30 },
    riskReduction: 55,
    economicMultiplier: 4.2,
    socialImpact: 4.3
  },
  {
    id: "tic-002",
    name: "Implantação de redes de sensores IoT para coleta de dados ambientais",
    sector: "Tecnologia da Informação e Comunicação (TIC)",
    category: "Sistemas de Monitoramento e Alerta",
    description: "Rede distribuída de sensores IoT para monitoramento ambiental automatizado com transmissão de dados em tempo real.",
    typicalInvestment: { min: 1000000, max: 8000000 },
    expectedBenefits: {
      first: ["Cobertura ampla de monitoramento", "Dados automatizados", "Resposta rápida a eventos"],
      second: ["Redução de custos de monitoramento manual", "Melhoria da precisão", "Economia operacional"],
      third: ["Capacitação tecnológica", "Inovação local", "Desenvolvimento digital"]
    },
    implementationTime: { min: 18, max: 36 },
    riskReduction: 50,
    economicMultiplier: 3.8,
    socialImpact: 3.9
  },

  // B. Inteligência Artificial e Análise de Dados (16-30)
  {
    id: "tic-016",
    name: "Criação de sistemas de alerta precoce baseados em inteligência artificial (IA)",
    sector: "Tecnologia da Informação e Comunicação (TIC)",
    category: "Inteligência Artificial e Análise de Dados",
    description: "Sistemas inteligentes que utilizam IA para previsão e alerta automático de eventos climáticos extremos.",
    typicalInvestment: { min: 1200000, max: 6000000 },
    expectedBenefits: {
      first: ["Previsão precisa de eventos", "Alerta automático", "Redução de perdas"],
      second: ["Otimização de recursos de emergência", "Redução de custos de desastres", "Eficiência operacional"],
      third: ["Proteção de vidas", "Segurança comunitária", "Confiança pública"]
    },
    implementationTime: { min: 15, max: 30 },
    riskReduction: 65,
    economicMultiplier: 4.5,
    socialImpact: 4.8
  },

  // C. Plataformas Digitais e Aplicações (31-45)
  {
    id: "tic-031",
    name: "Desenvolvimento de aplicativos móveis para educação ambiental e adaptação",
    sector: "Tecnologia da Informação e Comunicação (TIC)",
    category: "Plataformas Digitais e Aplicações",
    description: "Aplicativos móveis interativos para educação ambiental, conscientização climática e orientações de adaptação.",
    typicalInvestment: { min: 300000, max: 1500000 },
    expectedBenefits: {
      first: ["Educação ambiental acessível", "Conscientização climática", "Informação em tempo real"],
      second: ["Redução de custos educacionais", "Alcance massivo", "Eficiência comunicacional"],
      third: ["Capacitação digital", "Engajamento cidadão", "Mudança comportamental"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 30,
    economicMultiplier: 2.8,
    socialImpact: 4.2
  },

  // D. Tecnologias Emergentes (46-50)
  {
    id: "tic-046",
    name: "Uso de drones para mapeamento e monitoramento de áreas vulneráveis",
    sector: "Tecnologia da Informação e Comunicação (TIC)",
    category: "Tecnologias Emergentes",
    description: "Sistemas de drones autônomos para mapeamento aéreo, monitoramento ambiental e avaliação de riscos em áreas vulneráveis.",
    typicalInvestment: { min: 500000, max: 3000000 },
    expectedBenefits: {
      first: ["Mapeamento preciso", "Monitoramento contínuo", "Acesso a áreas remotas"],
      second: ["Redução de custos operacionais", "Rapidez na coleta de dados", "Eficiência logística"],
      third: ["Capacitação técnica", "Inovação tecnológica", "Desenvolvimento local"]
    },
    implementationTime: { min: 9, max: 24 },
    riskReduction: 45,
    economicMultiplier: 3.5,
    socialImpact: 3.8
  }
];
