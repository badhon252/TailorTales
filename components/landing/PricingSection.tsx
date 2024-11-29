import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free Trial",
    price: "0",
    features: ["Basic story generation", "Limited templates", "1 user"],
    cta: "Start Free Trial",
  },
  {
    name: "Starter Plan",
    price: "15",
    features: [
      "Social media content",
      "Unlimited templates",
      "3 users",
      "Basic analytics",
    ],
    cta: "Subscribe Now",
  },
  {
    name: "Pro Plan",
    price: "45",
    features: [
      "Advanced features",
      "Multi-channel integration",
      "10 users",
      "Advanced analytics",
      "Priority support",
    ],
    cta: "Subscribe Now",
  },
];
// Define an interface for your pricing plan data
interface PricingPlan {
  name: string;
  price: string; // Or number if you prefer
  features: string[];
  cta: string;
  index: number;
}

export default function PricingSection() {
  return (
    <section className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <h2
          className="font-heading text-3xl m
d:text-4xl font-bold text-center mb-12 text-primary"
        >
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ name, price, features, cta, index }: PricingPlan) {
  return (
    <motion.div
      className={`bg-white rounded-lg shadow-md p-8 ${
        index === 1 ? "border-2 border-accent" : ""
      } transition-all duration-300 hover:shadow-xl`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className="font-heading text-2xl font-bold mb-4 text-primary">
        {name}
      </h3>
      <p className="text-4xl font-bold mb-6 text-accent">
        ${price}
        <span className="text-lg font-normal text-neutral-dark">/month</span>
      </p>
      <ul className="mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center mb-2">
            <Check className="w-5 h-5 text-accent mr-2" />
            <span className="text-neutral-dark">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
        {cta}
      </Button>
    </motion.div>
  );
}
