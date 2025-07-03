
import { AdaptiveProjectTemplate } from "@/types/climate";
import { saudeBemEstarProjects } from "./sectors/saude-bem-estar";
import { transportesResilientesProjects } from "./sectors/transportes-resilientes";

export const adaptiveProjects: Record<string, AdaptiveProjectTemplate[]> = {
  "Saúde e Bem Estar": saudeBemEstarProjects,
  "Transportes Resilientes": transportesResilientesProjects
};

// Export individual sector projects for easier access
export { saudeBemEstarProjects, transportesResilientesProjects };
