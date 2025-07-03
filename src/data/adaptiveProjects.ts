
import { AdaptiveProjectTemplate } from "@/types/climate";
import { saudeBemEstarProjects } from "./sectors/saude-bem-estar";
import { transportesResilientesProjects } from "./sectors/transportes-resilientes";
import { financasClimaticasProjects } from "./sectors/financas-climaticas";

export const adaptiveProjects: Record<string, AdaptiveProjectTemplate[]> = {
  "Saúde e Bem Estar": saudeBemEstarProjects,
  "Transportes Resilientes": transportesResilientesProjects,
  "Finanças Climáticas": financasClimaticasProjects
};

// Export individual sector projects for easier access
export { saudeBemEstarProjects, transportesResilientesProjects, financasClimaticasProjects };
