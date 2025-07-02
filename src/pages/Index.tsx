import { useState } from "react";
import { ClimateHeader } from "@/components/ClimateHeader";
import { ProjectCalculator } from "@/components/ProjectCalculator";
import { ResultsDashboard } from "@/components/ResultsDashboard";
import { ProjectLibrary } from "@/components/ProjectLibrary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClimateProject } from "@/types/climate";
import { Calculator, BookOpen, BarChart3 } from "lucide-react";

const Index = () => {
  const [currentProject, setCurrentProject] = useState<ClimateProject | null>(null);
  const [activeTab, setActiveTab] = useState("calculator");

  const handleCalculate = (project: ClimateProject) => {
    setCurrentProject(project);
    setActiveTab("results");
  };

  return (
    <div className="min-h-screen bg-background">
      <ClimateHeader />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="calculator" className="flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              Calculadora
            </TabsTrigger>
            <TabsTrigger value="results" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Resultados
            </TabsTrigger>
            <TabsTrigger value="library" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Biblioteca
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calculator">
            <ProjectCalculator onCalculate={handleCalculate} />
          </TabsContent>

          <TabsContent value="results">
            {currentProject ? (
              <ResultsDashboard project={currentProject} />
            ) : (
              <div className="text-center py-12">
                <BarChart3 className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Nenhum projeto calculado</h3>
                <p className="text-muted-foreground">
                  Use a calculadora para analisar um projeto e ver os resultados aqui
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="library">
            <ProjectLibrary />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;