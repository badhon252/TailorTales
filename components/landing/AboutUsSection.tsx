import { motion } from "framer-motion"

export default function AboutUsSection() {
  return (
    <section className="py-20 bg-secondary-lavender/10">
      <div className="container mx-auto text-center px-4">
        <h2 
          className="font-heading text-3xl md:text-4xl font-bold mb-6 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About TailorTales
        </h2>
        <p 
          className="text-xl max-w-2xl mx-auto text-neutral-dark"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Helping small businesses tell big stories with the power of AI. We're on a mission to revolutionize content creation and empower brands to connect with their audience like never before.
        </p>
      </div>
    </section>
  )
}

