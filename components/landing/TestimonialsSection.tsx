'use client'
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"

const testimonials = [
  {
    quote: "TailorTales transformed the way we connect with our audience!",
    author: "Sarah Johnson",
    company: "Bloom Boutique",
    avatar: "/placeholder-avatar-1.jpg"
  },
  {
    quote: "Our content engagement skyrocketed thanks to TailorTales!",
    author: "Mike Chen",
    company: "TechNova Solutions",
    avatar: "/placeholder-avatar-2.jpg"
  },
  {
    quote: "TailorTales made storytelling effortless for our small team.",
    author: "Emily Rodriguez",
    company: "Green Earth Cafe",
    avatar: "/placeholder-avatar-3.jpg"
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-secondary-yellow">What Our Users Say</h2>
        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-xl italic mb-4">"{testimonials[currentIndex].quote}"</p>
              <div className="flex items-center justify-center">
                <Image 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].author} width={100}
  height={100}
  sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-secondary-yellow">{testimonials[currentIndex].author}</p>
                  <p className="text-sm text-secondary-lavender">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button 
            onClick={prevTestimonial} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-secondary-lavender"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button 
            onClick={nextTestimonial} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-secondary-lavender"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  )
}

