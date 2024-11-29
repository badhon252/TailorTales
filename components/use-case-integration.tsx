"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const useCases = [
  {
    id: "social-media",
    title: "Social Media Campaign",
    description: "Create a week of engaging social media posts",
    steps: [
      "Choose your target platform (e.g., Instagram, Twitter)",
      "Define your campaign goal",
      "Select content themes for each day",
      "Generate posts using AI",
      "Review and schedule your content",
    ],
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    description: "Craft an engaging newsletter",
    steps: [
      "Define your newsletter topic",
      "Choose a template from the library",
      "Generate content sections using AI",
      "Personalize your content",
      "Review and schedule your newsletter",
    ],
  },
  {
    id: "blog-content",
    title: "Blog Content",
    description: "Write SEO-friendly introductions or outlines",
    steps: [
      "Choose your blog topic",
      "Research relevant keywords",
      "Generate an outline using AI",
      "Expand on key points",
      "Optimize for SEO and readability",
    ],
  },
]

export function UseCaseIntegration() {
  const [activeUseCase, setActiveUseCase] = useState(useCases[0].id)
  const [currentStep, setCurrentStep] = useState(0)

  const handleNextStep = () => {
    const maxSteps = useCases.find((uc) => uc.id === activeUseCase)?.steps.length || 0
    setCurrentStep((prev) => Math.min(prev + 1, maxSteps - 1))
  }

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Use Case Integration</h2>
      <Tabs value={activeUseCase} onValueChange={setActiveUseCase}>
        <TabsList>
          {useCases.map((useCase) => (
            <TabsTrigger key={useCase.id} value={useCase.id}>
              {useCase.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {useCases.map((useCase) => (
          <TabsContent key={useCase.id} value={useCase.id}>
            <Card>
              <CardHeader>
                <CardTitle>{useCase.title}</CardTitle>
                <CardDescription>{useCase.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {useCase.steps.map((step, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-md ${
                        index === currentStep ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button onClick={handlePrevStep} disabled={currentStep === 0}>
                  Previous Step
                </Button>
                <Button onClick={handleNextStep} disabled={currentStep === useCase.steps.length - 1}>
                  Next Step
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

