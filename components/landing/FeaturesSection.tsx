"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, Share2, Mic2, BarChart3 } from "lucide-react";
import { useRef } from "react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: Lightbulb,
    title: "AI-Powered Storytelling",
    description: "Generate personalized content in seconds.",
    color: "red",
  },
  {
    icon: Share2,
    title: "Multi-Channel Integration",
    description: "Ready-to-use stories for social media, blogs, and emails.",
    color: "red",
  },
  {
    icon: Mic2,
    title: "Brand Voice Customization",
    description: "Tailor stories to match your unique voice.",
    color: "red",
  },
  {
    icon: BarChart3,
    title: "Performance Insights",
    description: "Analyze content effectiveness with detailed metrics.",
    color: "red",
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden min-h-screen flex items-center justify-center"
      style={{
        background:
          "linear-gradient(180deg, rgba(7, 0, 32, 0.869) 0%, rgb(0, 0, 0) 100%)",
      }}
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y,
        }}
      />
      <div className="container mx-auto px-4 relative z-100">
        <motion.h2
          className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: Feature & { index: number }) {
  return (
    <motion.div
      className="backdrop-blur-md bg-black/20 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Icon className="w-12 h-12 text-blue-400 mb-6" />
      <h3 className="font-heading text-xl font-semibold mb-4 text-white">
        {title}
      </h3>
      <p className="text-gray-300 text-base">{description}</p>
    </motion.div>
  );
}
