"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingTextBackground({
  snippets,
}: {
  snippets: string[];
}) {
  const controls = useAnimation();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      snippets.forEach((snippet, index) => {
        controls.start({
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          opacity: 0,
        });
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snippets, controls]); // Add snippets to trigger re-animation when snippets changes

  return (
    <div className="absolute inset-0 overflow-hidden">
      {snippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute text-white text-opacity-50 text-3xl md:text-5xl font-bold pointer-events-none"
          style={{ zIndex: 1000 }} //add a large z-index to ensure visibility
          animate={controls}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          {snippet}
        </motion.div>
      ))}
    </div>
  );
}
