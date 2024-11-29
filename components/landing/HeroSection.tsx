"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const snippets = [
    "Engaging Stories",
    "Brand Voice",
    "AI-Powered",
    "Personalized Content",
    "Multi-Channel",
    "Creativity",
    "Storytelling",
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle, rgba(255,0,74,1) 0%, rgba(0,0,119,1) 100%)",
        filter:
          "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff004a',endColorstr='#0001ff',GradientType=1)", // For older IE
      }}
    >
      <div className="container mx-auto z-10 px-4 relative">
        <div className="max-w-3xl mx-auto">
          {/* Hero Heading */}
          <motion.h1
            className="font-heading text-4xl text-[#FFF] md:text-6xl font-bold mb-6 text-center drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Craft Your Brand&quot;s Story with AI-Powered Creativity
          </motion.h1>
          {/* Subheading */}
          <motion.p
            className="text-xl md:text-xl mb-8 text-gray-300 text-center text-neutral drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Personalized content tailored to your audience—blogs, social media,
            and beyond.
          </motion.p>
          {/* Call-to-Action Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-[#ffd900c7] hover:bg-[#ffd000] text-[#4B0082] font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Link href="/dashboard">Generate Your First Story Now</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      {/* Floating Text Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingTextBackground snippets={snippets} />
      </div>
    </section>
  );
}

function FloatingTextBackground({ snippets }: { snippets: string[] }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions(); // Set initial dimensions
    window.addEventListener("resize", updateDimensions); // Update on resize

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden mx-auto">
      {snippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute text-white text-opacity-50 text-3xl md:text-5xl font-bold pointer-events-none"
          initial={{
            x: (Math.random() * dimensions.width) / 2,
            y: (Math.random() * dimensions.height) / 2,
            opacity: 0,
          }}
          animate={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            opacity: 0.2,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          {snippet}
        </motion.div>
      ))}
    </div>
  );
}
