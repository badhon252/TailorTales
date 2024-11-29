"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import avater from "@/public/avater.jpg";

const testimonials = [
  {
    quote: "TailorTales transformed our audience connection!",
    author: "Sarah J.",
    company: "Bloom Boutique",
    avatar: avater,
    rating: 5,
  },
  {
    quote: "Our engagement skyrocketed with TailorTales!",
    author: "Mike C.",
    company: "TechNova",
    avatar: avater,
    rating: 5,
  },
  {
    quote:
      "Storytelling made easy for our small team. Storytelling made easy for our small team.",
    author: "Emily R.",
    company: "Green Earth",
    avatar: avater,
    rating: 4,
  },
  {
    quote: "Our engagement skyrocketed with TailorTales!",
    author: "Mike C.",
    company: "TechNova",
    avatar: "/placeholder-avatar-2.jpg",
    rating: 5,
  },
  {
    quote: "Storytelling made easy for our small team.",
    author: "Emily R.",
    company: "Green Earth",
    avatar: "/placeholder-avatar-3.jpg",
    rating: 4,
  },
  {
    quote: "Our engagement skyrocketed with TailorTales!",
    author: "Mike C.",
    company: "TechNova",
    avatar: "/placeholder-avatar-2.jpg",
    rating: 5,
  },
  {
    quote: "Storytelling made easy for our small team.",
    author: "Emily R.",
    company: "Green Earth",
    avatar: "/placeholder-avatar-3.jpg",
    rating: 4,
  },
];

export default function ExpandingGrid() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-40 bg-black text-white ">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`backdrop-blur-md bg-gray-800/20 border border-gray-600 rounded-xl p-6 shadow-xl cursor-pointer ${
                expandedIndex === index ? "md:col-span-3" : ""
              }`}
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
              layout
            >
              <motion.div layout="position">
                <div className="flex items-center mb-4 justify-between">
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-blue-300 text-sm">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-600"
                        }`}
                        fill={i < testimonial.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                </div>
                <p
                  className={`italic mb-4 ${
                    expandedIndex === index
                      ? "text-xl"
                      : "text-base line-clamp-2"
                  }`}
                >
                  &quot;{testimonial.quote}&quot;
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
