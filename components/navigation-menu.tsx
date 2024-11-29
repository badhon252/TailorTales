import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { motion } from "framer-motion";
import { menuItems } from "@/public/data/menuItems";

export function NavigationMenu({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: (section: string) => void;
}) {
  return (
    <TooltipProvider>
      <nav className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md relative overflow-hidden">
        {/* Highlight bar for active section */}
        <motion.div
          className="absolute h-10 w-10 bg-gray-200 dark:bg-gray-600 rounded-full shadow-md"
          layoutId="activeIndicator"
          initial={false}
          animate={{
            top: `${
              menuItems.findIndex((item) => item.name === activeSection) * 60
            }px`,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />

        {menuItems.map((item) => (
          <Tooltip key={item.name}>
            <TooltipTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative z-10"
              >
                <Button
                  variant={activeSection === item.name ? "default" : "ghost"}
                  className={`flex  items-center justify-center p-3 transition-all duration-200 ease-in-out ${
                    activeSection === item.name
                      ? "bg-gray-200 dark:bg-gray-600 shadow-lg"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setActiveSection(item.name)}
                >
                  <item.icon className={`w-8 h-8 ${item.color}`} />{" "}
                  <span className="text-base text-gray-600 dark:text-gray-300 hidden sm:block">
                    {item.label}
                  </span>
                </Button>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent sideOffset={5}>
              <p className="text-sm">{item.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </TooltipProvider>
  );
}
