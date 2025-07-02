
import { useState } from "react";
import { ClimateHeader } from "@/components/ClimateHeader";
import { ProjectCalculator } from "@/components/ProjectCalculator";
import { ProjectLibrary } from "@/components/ProjectLibrary";
import { LocalPriorityAnalyzer } from "@/components/LocalPriorityAnalyzer";
import { ProjectPortfolio } from "@/components/ProjectPortfolio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClimateProject } from "@/types/climate";

const Index = () => {
  const [calculatedProjects, setCalculatedProjects] = useState<ClimateProject[]>([]);

  const handleCalculateProject = (project: ClimateProject) => {
    setCalculatedProjects(prev => [...prev, project]);
    console.log('Project calculated:', project);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
      <ClimateHeader />
      
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="calculator">💰 Calculadora</TabsTrigger>
            <TabsTrigger value="library">📚 Biblioteca</TabsTrigger>
            <TabsTrigger value="analysis">🎯 Análise Local</TabsTrigger>
            <TabsTrigger value="portfolio">📊 Portfólio</TabsTrigger>
            <TabsTrigger value="governance">🏛️ Governança</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator">
            <ProjectCalculator onCalculate={handleCalculateProject} />
          </TabsContent>

          <TabsContent value="library">
            <ProjectLibrary />
          </TabsContent>

          <TabsContent value="analysis">
            <LocalPriorityAnalyzer />
          </TabsContent>

          <TabsContent value="portfolio">
            <ProjectPortfolio />
          </TabsContent>

          <TabsContent value="governance">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">Módulo de Governança</h2>
              <p className="text-muted-foreground">
                Ferramentas avançadas de governança climática em desenvolvimento
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
