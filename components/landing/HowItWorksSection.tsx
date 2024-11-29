"use client";

import { motion } from "framer-motion";
import { FileInput, Wand2, Share } from "lucide-react";

const steps = [
  {
    icon: FileInput,
    title: "Input your brand's details",
    description: "Provide information about your brand and target audience.",
  },
  {
    icon: Wand2,
    title: "Generate AI-driven stories",
    description: "Our AI creates personalized content tailored to your brand.",
  },
  {
    icon: Share,
    title: "Publish and track performance",
    description:
      "Share your stories and monitor their impact with detailed analytics.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      className="py-20 min-h-screen"
      style={{
        background:
          "radial-gradient(circle,rgb(31, 0, 134) 0%, rgb(60, 0, 255) 20%, rgba(0,0,0,1) 46%",
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          How It Works ?
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white"></div>
          {steps.map((step, index) => (
            <StepCard key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ComponentType;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      className={`flex items-center mb-12 ${
        index % 2 === 0 ? "justify-start" : "justify-end"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div
        className={`backdrop-blur-md bg-black/30 rounded-lg shadow-xl p-6 max-w-md border border-slate-800 ${
          index % 2 === 0 ? "mr-8" : "ml-8"
        }`}
      >
        <div className="flex items-center mb-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full mr-4">
            <Icon />
          </div>
          <h3 className="font-heading text-2xl font-semibold text-gray-50">
            {title}
          </h3>
        </div>
        <p className="text-gray-200">{description}</p>
      </div>
      <div className="bg-white w-6 h-6 rounded-full border-4 border-purple-500 absolute left-1/2 transform -translate-x-1/2"></div>
    </motion.div>
  );
}
