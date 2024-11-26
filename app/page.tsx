import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Welcome to TailorTales</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Craft compelling content for your niche market with our AI-powered tools. Boost your engagement and save time with personalized content generation.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="gradient-bg hover-shadow">
            <Link href="/dashboard">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="hover-shadow">
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </div>

      <div id="features" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[
          "AI-Powered Content Generation",
          "Multi-Platform Support",
          "Customizable Brand Voice",
          "Pre-made Templates",
          "Analytics Dashboard",
          "SEO Optimization",
        ].map((feature, index) => (
          <div key={index} className="flex items-start space-x-2">
            <CheckCircle className="text-primary mt-1" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "1. Choose Your Platform",
              description: "Select the platform you want to create content for - blog, social media, or email.",
            },
            {
              title: "2. Set Your Parameters",
              description: "Input your topic, tone, and key points to guide the AI content generation.",
            },
            {
              title: "3. Generate and Refine",
              description: "Let our AI create your content, then edit and refine as needed.",
            },
          ].map((step, index) => (
            <div key={index} className="p-4 border rounded-lg hover-shadow">
              <h3 className="font-bold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Content Strategy?</h2>
        <Button asChild size="lg" className="gradient-bg hover-shadow">
          <Link href="/dashboard">Start Creating Now</Link>
        </Button>
      </div>
    </div>
  )
}

