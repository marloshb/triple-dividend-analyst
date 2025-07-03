
import { AdaptiveProjectTemplate } from "@/types/climate";
import { saudeBemEstarProjects } from "./sectors/saude-bem-estar";
import { transportesResilientesProjects } from "./sectors/transportes-resilientes";
import { financasClimaticasProjects } from "./sectors/financas-climaticas";
import { ambienteSocialEducacaoProjects } from "./sectors/ambiente-social-educacao";
import { engenhariaCosteiraPescaProjects } from "./sectors/engenharia-costeira-pesca";
import { governancaProjects } from "./sectors/governanca";
import { turismoSustentavelProjects } from "./sectors/turismo-sustentavel";
import { ticProjects } from "./sectors/tic";
import { segurancaPublicaProjects } from "./sectors/seguranca-publica";
import { educacaoProjects } from "./sectors/educacao";
import { culturaPatrimonioProjects } from "./sectors/cultura-patrimonio";
import { comercioServicosProjects } from "./sectors/comercio-servicos";
import { mineracaoProjects } from "./sectors/mineracao";
import { mobilidadeUrbanaProjects } from "./sectors/mobilidade-urbana";
import { habitacaoSocialProjects } from "./sectors/habitacao-social";
import { industriaProjects } from "./sectors/industria";

export const adaptiveProjects: Record<string, AdaptiveProjectTemplate[]> = {
  "Saúde e Bem Estar": saudeBemEstarProjects,
  "Transportes Resilientes": transportesResilientesProjects,
  "Finanças Climáticas": financasClimaticasProjects,
  "Ambiente Social e Educação": ambienteSocialEducacaoProjects,
  "Engenharia Costeira e Pesca": engenhariaCosteiraPescaProjects,
  "Governança": governancaProjects,
  "Turismo Sustentável": turismoSustentavelProjects,
  "Tecnologia da Informação e Comunicação (TIC)": ticProjects,
  "Segurança Pública e Defesa Civil": segurancaPublicaProjects,
  "Educação Formal e Informal": educacaoProjects,
  "Cultura e Patrimônio Histórico": culturaPatrimonioProjects,
  "Comércio e Serviços": comercioServicosProjects,
  "Mineração e Recursos Naturais": mineracaoProjects,
  "Mobilidade Urbana e Transporte Público": mobilidadeUrbanaProjects,
  "Habitação Social e Desenvolvimento Comunitário": habitacaoSocialProjects,
  "Indústria e Manufatura": industriaProjects
};

// Export individual sector projects for easier access
export { 
  saudeBemEstarProjects, 
  transportesResilientesProjects, 
  financasClimaticasProjects,
  ambienteSocialEducacaoProjects,
  engenhariaCosteiraPescaProjects,
  governancaProjects,
  turismoSustentavelProjects,
  ticProjects,
  segurancaPublicaProjects,
  educacaoProjects,
  culturaPatrimonioProjects,
  comercioServicosProjects,
  mineracaoProjects,
  mobilidadeUrbanaProjects,
  habitacaoSocialProjects,
  industriaProjects
};
