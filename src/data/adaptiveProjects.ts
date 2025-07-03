
import { AdaptiveProjectTemplate } from "@/types/climate";
import { saudeBemEstarProjects } from "./sectors/saude-bem-estar";
import { transportesResilientesProjects } from "./sectors/transportes-resilientes";
import { financasClimaticasProjects } from "./sectors/financas-climaticas";
import { ambienteSocialEducacaoProjects } from "./sectors/ambiente-social-educacao";

export const adaptiveProjects: Record<string, AdaptiveProjectTemplate[]> = {
  "Saúde e Bem Estar": saudeBemEstarProjects,
  "Transportes Resilientes": transportesResilientesProjects,
  "Finanças Climáticas": financasClimaticasProjects,
  "Ambiente Social e Educação": ambienteSocialEducacaoProjects
};

// Export individual sector projects for easier access
export { 
  saudeBemEstarProjects, 
  transportesResilientesProjects, 
  financasClimaticasProjects,
  ambienteSocialEducacaoProjects 
};
