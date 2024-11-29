"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { WelcomeSection } from "./welcome-section";
import { OverviewPanel } from "./overview-panel";
import { NavigationMenu } from "./navigation-menu";
import { DynamicNotifications } from "./dynamic-notifications";
import { ContentGenerator } from "./content-generator";
import { TemplatesLibrary } from "./templates-library";
import { UseCaseIntegration } from "./use-case-integration";
import { Analytics } from "./analytics";
import { ProfileSettings } from "./profile-settings";

const pageVariants = {
  initial: { opacity: 0, x: -20 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 20 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

export function Dashboard() {
  const [activeSection, setActiveSection] = useState("home");
  const searchParams = useSearchParams();

  useEffect(() => {
    const template = searchParams.get("template");
    if (template) {
      setActiveSection("content-generator");
    }
  }, [searchParams]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <NavigationMenu
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="mt-8"
        >
          {activeSection === "home" && (
            <div className="space-y-8">
              <WelcomeSection setActiveSection={setActiveSection} />
              <OverviewPanel />
              <DynamicNotifications />
            </div>
          )}
          {activeSection === "content-generator" && <ContentGenerator />}
          {activeSection === "templates-library" && <TemplatesLibrary />}
          {activeSection === "use-case-integration" && <UseCaseIntegration />}
          {activeSection === "analytics" && <Analytics />}
          {activeSection === "profile-settings" && <ProfileSettings />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
