'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button 
        onClick={() => setIsOpen(!isOpen)} 
        className="bg-accent hover:bg-accent/90 text-primary font-bold rounded-full w-16 h-16 flex items-center justify-center transition-all duration-300 transform hover:scale-110 animate-glow"
      >
        Try It
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-20 right-0 bg-white p-6 rounded-lg shadow-lg w-72"
          >
            <h3 className="font-heading text-lg font-bold mb-4 text-primary">Start Your Free Trial</h3>
            <form>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full mb-4 p-2 border border-neutral-dark rounded focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">Sign Up</Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

