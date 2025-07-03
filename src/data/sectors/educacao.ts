
import { AdaptiveProjectTemplate } from "@/types/climate";

export const educacaoProjects: AdaptiveProjectTemplate[] = [
  // A. Educação Formal Climática (1-15)
  {
    id: "edu-001",
    name: "Inserção de conteúdos sobre mudanças climáticas nos currículos escolares",
    sector: "Educação Formal e Informal",
    category: "Educação Formal Climática",
    description: "Integração de conteúdos sobre mudanças climáticas, adaptação e sustentabilidade nos currículos da educação básica.",
    typicalInvestment: { min: 500000, max: 3000000 },
    expectedBenefits: {
      first: ["Conscientização estudantil", "Preparação para futuros desafios", "Mudança comportamental"],
      second: ["Formação de profissionais conscientes", "Inovação educacional", "Competitividade educacional"],
      third: ["Cidadania ativa", "Transformação social", "Cultura sustentável"]
    },
    implementationTime: { min: 12, max: 36 },
    riskReduction: 30,
    economicMultiplier: 3.5,
    socialImpact: 4.7
  },

  // B. Capacitação de Educadores (16-30)
  {
    id: "edu-016",
    name: "Capacitação de professores para ensino de temas climáticos e ambientais",
    sector: "Educação Formal e Informal",
    category: "Capacitação de Educadores",
    description: "Programas de formação continuada para professores sobre pedagogia climática e metodologias de ensino ambiental.",
    typicalInvestment: { min: 300000, max: 1500000 },
    expectedBenefits: {
      first: ["Qualidade do ensino", "Atualização pedagógica", "Preparação docente"],
      second: ["Melhoria do sistema educacional", "Produtividade educacional", "Competitividade"],
      third: ["Capacitação profissional", "Desenvolvimento educacional", "Multiplicação do conhecimento"]
    },
    implementationTime: { min: 6, max: 24 },
    riskReduction: 25,
    economicMultiplier: 2.8,
    socialImpact: 4.4
  },

  // C. Educação Comunitária (31-45)
  {
    id: "edu-031",
    name: "Oficinas comunitárias sobre práticas sustentáveis e adaptação ao clima",
    sector: "Educação Formal e Informal",
    category: "Educação Comunitária",
    description: "Oficinas práticas para comunidades sobre tecnologias sustentáveis, adaptação climática e práticas ambientais.",
    typicalInvestment: { min: 200000, max: 1000000 },
    expectedBenefits: {
      first: ["Capacitação comunitária", "Adoção de práticas sustentáveis", "Preparação local"],
      second: ["Economia doméstica", "Eficiência no uso de recursos", "Geração de renda"],
      third: ["Empoderamento comunitário", "Coesão social", "Multiplicação de conhecimento"]
    },
    implementationTime: { min: 6, max: 18 },
    riskReduction: 35,
    economicMultiplier: 2.2,
    socialImpact: 4.5
  },

  // D. Tecnologia Educacional (46-50)
  {
    id: "edu-046",
    name: "Desenvolvimento de jogos educacionais digitais sobre mudanças climáticas",
    sector: "Educação Formal e Informal",
    category: "Tecnologia Educacional",
    description: "Jogos digitais educativos interativos para ensino de conceitos climáticos e práticas sustentáveis.",
    typicalInvestment: { min: 400000, max: 2000000 },
    expectedBenefits: {
      first: ["Engajamento estudantil", "Aprendizado lúdico", "Compreensão de conceitos complexos"],
      second: ["Inovação educacional", "Redução de custos educacionais", "Escalabilidade"],
      third: ["Inclusão digital", "Democratização do conhecimento", "Transformação pedagógica"]
    },
    implementationTime: { min: 9, max: 24 },
    riskReduction: 20,
    economicMultiplier: 3.2,
    socialImpact: 4.3
  }
];
