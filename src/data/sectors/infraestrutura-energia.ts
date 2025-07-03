
import { AdaptiveProjectTemplate } from "@/types/climate";

export const infraestruturaEnergiaProjects: AdaptiveProjectTemplate[] = [
  // 🔆 A. Energia Solar (1-80)
  {
    id: "ene-001",
    name: "Instalação de painéis solares em telhados residenciais",
    sector: "Infraestrutura de Energia",
    category: "Energia Solar",
    description: "Sistema fotovoltaico residencial para geração de energia limpa e redução de custos",
    typicalInvestment: { min: 25000, max: 80000 },
    expectedBenefits: {
      first: ["Independência energética parcial", "Proteção contra apagões", "Redução na conta de luz"],
      second: ["ROI em 5-7 anos", "Valorização do imóvel", "Possibilidade de venda de excedente"],
      third: ["Redução de 2-4 ton CO2/ano", "Educação sobre energia limpa", "Exemplo para vizinhança"]
    },
    implementationTime: { min: 1, max: 3 },
    riskReduction: 30,
    economicMultiplier: 3.8,
    socialImpact: 3.5
  },
  {
    id: "ene-002",
    name: "Clusters solares comunitários em terrenos públicos",
    sector: "Infraestrutura de Energia",
    category: "Energia Solar",
    description: "Sistemas solares compartilhados para múltiplas famílias em terrenos municipais",
    typicalInvestment: { min: 500000, max: 2000000 },
    expectedBenefits: {
      first: ["Energia limpa para 100+ famílias", "Redução de 70% na conta de luz", "Segurança energética"],
      second: ["Economia coletiva de R$ 150k/ano", "Geração de 15 empregos", "Modelo replicável"],
      third: ["Redução de 50 ton CO2/ano", "Coesão comunitária", "Educação ambiental"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 45,
    economicMultiplier: 4.2,
    socialImpact: 4.6
  },
  {
    id: "ene-003",
    name: "Mini-grids solares para comunidades isoladas",
    sector: "Infraestrutura de Energia",
    category: "Energia Solar",
    description: "Redes elétricas locais alimentadas por energia solar para áreas remotas",
    typicalInvestment: { min: 300000, max: 1500000 },
    expectedBenefits: {
      first: ["Eletrificação de área isolada", "Serviços básicos garantidos", "Comunicação habilitada"],
      second: ["Desenvolvimento econômico local", "Novos negócios possíveis", "Turismo rural"],
      third: ["Inclusão digital", "Acesso à educação", "Qualidade de vida melhorada"]
    },
    implementationTime: { min: 8, max: 24 },
    riskReduction: 60,
    economicMultiplier: 5.5,
    socialImpact: 4.9
  },
  {
    id: "ene-004",
    name: "Sistemas solares com baterias domésticas",
    sector: "Infraestrutura de Energia",
    category: "Energia Solar",
    description: "Painéis solares residenciais com sistema de armazenamento em baterias",
    typicalInvestment: { min: 45000, max: 120000 },
    expectedBenefits: {
      first: ["Energia 24h mesmo sem sol", "Backup durante apagões", "Independência da rede"],
      second: ["ROI em 6-8 anos", "Economia mensal de R$ 300-800", "Valorização imobiliária"],
      third: ["Pegada carbono zero", "Tecnologia residencial avançada", "Autonomia familiar"]
    },
    implementationTime: { min: 2, max: 6 },
    riskReduction: 55,
    economicMultiplier: 4.1,
    socialImpact: 3.8
  },
  {
    id: "ene-005",
    name: "Estações de recarga solar para veículos elétricos",
    sector: "Infraestrutura de Energia",
    category: "Energia Solar",
    description: "Pontos de recarga de veículos elétricos alimentados por energia solar",
    typicalInvestment: { min: 150000, max: 800000 },
    expectedBenefits: {
      first: ["Mobilidade limpa garantida", "Independência de combustíveis fósseis", "Infraestrutura resiliente"],
      second: ["Receita de R$ 50-200/dia", "Atração de turismo sustentável", "Valorização local"],
      third: ["Transporte zero emissão", "Inovação tecnológica local", "Modelo para região"]
    },
    implementationTime: { min: 4, max: 12 },
    riskReduction: 35,
    economicMultiplier: 3.9,
    socialImpact: 4.2
  },

  // 💨 B. Energia Eólica (81-160)
  {
    id: "ene-081",
    name: "Micro-geradores eólicos domésticos",
    sector: "Infraestrutura de Energia",
    category: "Energia Eólica",
    description: "Pequenas turbinas eólicas para geração doméstica complementar",
    typicalInvestment: { min: 15000, max: 60000 },
    expectedBenefits: {
      first: ["Energia complementar renovável", "Funcionamento 24h com vento", "Diversificação energética"],
      second: ["Redução de 30% na conta", "ROI em 8-12 anos", "Baixa manutenção"],
      third: ["Tecnologia limpa acessível", "Educação sobre energia eólica", "Sustentabilidade doméstica"]
    },
    implementationTime: { min: 1, max: 4 },
    riskReduction: 25,
    economicMultiplier: 2.8,
    socialImpact: 3.2
  },
  {
    id: "ene-082",
    name: "Mini parques eólicos comunitários",
    sector: "Infraestrutura de Energia",
    category: "Energia Eólica",
    description: "Turbinas eólicas de pequeno porte para abastecimento comunitário",
    typicalInvestment: { min: 800000, max: 3000000 },
    expectedBenefits: {
      first: ["Energia limpa para comunidade", "Independência energética", "Fonte renovável constante"],
      second: ["Economia de R$ 200k/ano", "Geração de empregos locais", "Receita de excedente"],
      third: ["Zero emissões locais", "Orgulho comunitário", "Tecnologia avançada local"]
    },
    implementationTime: { min: 12, max: 36 },
    riskReduction: 50,
    economicMultiplier: 4.8,
    socialImpact: 4.5
  },
  {
    id: "ene-083",
    name: "Sistemas híbridos eólico+solar",
    sector: "Infraestrutura de Energia",
    category: "Energia Eólica",
    description: "Combinação de painéis solares e turbinas eólicas para máxima eficiência",
    typicalInvestment: { min: 100000, max: 500000 },
    expectedBenefits: {
      first: ["Geração 24h renovável", "Complementaridade sazonal", "Maior confiabilidade"],
      second: ["ROI otimizado em 5-7 anos", "Economia de 80% energia", "Tecnologia avançada"],
      third: ["Modelo de sustentabilidade", "Inovação tecnológica", "Educação energética"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 40,
    economicMultiplier: 4.4,
    socialImpact: 4.1
  },

  // ⚡ C. Armazenamento e Eficiência Energética (161-240)
  {
    id: "ene-161",
    name: "Bancos de baterias comunitários",
    sector: "Infraestrutura de Energia",
    category: "Armazenamento e Eficiência",
    description: "Sistema de armazenamento de energia compartilhado para resiliência comunitária",
    typicalInvestment: { min: 400000, max: 2000000 },
    expectedBenefits: {
      first: ["Backup energético coletivo", "Estabilidade da rede local", "Energia durante emergências"],
      second: ["Otimização de tarifas", "Serviços de grid", "Receita de estabilização"],
      third: ["Segurança energética", "Tecnologia avançada", "Cooperação comunitária"]
    },
    implementationTime: { min: 8, max: 24 },
    riskReduction: 65,
    economicMultiplier: 3.6,
    socialImpact: 4.4
  },
  {
    id: "ene-162",
    name: "Sistemas de gestão de demanda (DRMS)",
    sector: "Infraestrutura de Energia",
    category: "Armazenamento e Eficiência",
    description: "Sistemas inteligentes para otimização automática do consumo energético",
    typicalInvestment: { min: 80000, max: 400000 },
    expectedBenefits: {
      first: ["Redução de picos de demanda", "Otimização automática", "Eficiência energética"],
      second: ["Economia de 20-40% energia", "Redução de custos operacionais", "ROI em 3-5 anos"],
      third: ["Tecnologia inteligente", "Sustentabilidade automatizada", "Modelo escalável"]
    },
    implementationTime: { min: 4, max: 12 },
    riskReduction: 30,
    economicMultiplier: 4.2,
    socialImpact: 3.6
  },
  {
    id: "ene-163",
    name: "Centros de resfriamento comunitário",
    sector: "Infraestrutura de Energia",
    category: "Armazenamento e Eficiência",
    description: "Espaços climatizados eficientes para proteção contra calor extremo",
    typicalInvestment: { min: 200000, max: 1000000 },
    expectedBenefits: {
      first: ["Proteção contra ondas de calor", "Refúgio climático seguro", "Prevenção de mortes"],
      second: ["Centro multifuncional", "Economia de energia individual", "Serviços comunitários"],
      third: ["Inclusão social", "Saúde pública", "Coesão comunitária"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 70,
    economicMultiplier: 3.1,
    socialImpact: 4.8
  },

  // 🔗 D. Integração e Rede Inteligente (241-300)
  {
    id: "ene-241",
    name: "Sistemas de micro grids conectados",
    sector: "Infraestrutura de Energia",
    category: "Integração e Rede Inteligente",
    description: "Redes elétricas locais inteligentes conectadas à rede principal",
    typicalInvestment: { min: 1000000, max: 5000000 },
    expectedBenefits: {
      first: ["Resiliência energética máxima", "Operação isolada possível", "Qualidade de energia"],
      second: ["Eficiência otimizada", "Receitas de serviços", "Redução de perdas"],
      third: ["Tecnologia avançada", "Modelo de futuro", "Capacitação técnica local"]
    },
    implementationTime: { min: 18, max: 48 },
    riskReduction: 80,
    economicMultiplier: 4.9,
    socialImpact: 4.3
  },
  {
    id: "ene-242",
    name: "Smart grid para comunidades rurais",
    sector: "Infraestrutura de Energia",
    category: "Integração e Rede Inteligente",
    description: "Rede elétrica inteligente adaptada para comunidades rurais isoladas",
    typicalInvestment: { min: 600000, max: 3000000 },
    expectedBenefits: {
      first: ["Eletrificação inteligente", "Monitoramento remoto", "Manutenção preditiva"],
      second: ["Desenvolvimento rural", "Novos negócios", "Eficiência operacional"],
      third: ["Inclusão digital rural", "Qualidade de vida", "Tecnologia no campo"]
    },
    implementationTime: { min: 12, max: 36 },
    riskReduction: 55,
    economicMultiplier: 5.2,
    socialImpact: 4.7
  },
  {
    id: "ene-243",
    name: "Plataforma de gerenciamento de energia",
    sector: "Infraestrutura de Energia",
    category: "Integração e Rede Inteligente",
    description: "Software para monitoramento e otimização de sistemas energéticos locais",
    typicalInvestment: { min: 150000, max: 800000 },
    expectedBenefits: {
      first: ["Visibilidade total do sistema", "Otimização automática", "Alertas preventivos"],
      second: ["Redução de 15-30% custos", "Eficiência operacional", "ROI em 2-4 anos"],
      third: ["Transparência energética", "Educação sobre consumo", "Tecnologia acessível"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 35,
    economicMultiplier: 4.5,
    socialImpact: 3.9
  }
];
