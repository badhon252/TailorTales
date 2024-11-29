import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sparkles, Zap } from "lucide-react";

export function WelcomeSection({
  setActiveSection,
}: {
  setActiveSection: (section: string) => void;
}) {
  return (
    <Card className="overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <CardHeader className="pb-0">
        <CardTitle className="text-4xl font-bold">
          Welcome back, User!
        </CardTitle>
        <CardDescription className="text-lg text-purple-100">
          Let&quot;s craft something amazing today!
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-wrap gap-4">
          <Button
            onClick={() => setActiveSection("content-generator")}
            variant="secondary"
            className="bg-white text-purple-600 hover:bg-purple-100 transition-colors"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Generate Content
          </Button>
          <Button
            onClick={() => setActiveSection("templates-library")}
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600 transition-colors"
          >
            <Zap className="mr-2 h-4 w-4" />
            Explore Templates
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
