import { motion } from "framer-motion"
import { FileInput, Wand2, Share } from 'lucide-react'

const steps = [
  {
    icon: FileInput,
    title: "Input your brand's details",
    description: "Provide information about your brand and target audience."
  },
  {
    icon: Wand2,
    title: "Generate AI-driven stories",
    description: "Our AI creates personalized content tailored to your brand."
  },
  {
    icon: Share,
    title: "Publish and track performance",
    description: "Share your stories and monitor their impact with detailed analytics."
  }
]

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-secondary-lavender/10">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-primary">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepCard({ icon: Icon, title, description, index }) {
  return (
    <div 
      className="flex flex-col items-center text-center max-w-xs"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="bg-white p-4 rounded-full shadow-md mb-4 transition-all duration-300 transform hover:scale-110">
        <Icon className="w-8 h-8 text-accent" />
      </div>
      <h3 className="font-heading text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-neutral-dark">{description}</p>
    </div>
  )
}

