import {
  Home,
  PenTool,
  LayoutTemplate,
  BarChart2,
  User,
  Layers,
} from "lucide-react";
export const menuItems = [
  {
    name: "home",
    icon: Home,
    label: "Home",
    color: "text-blue-500 hover:text-blue-600",
  },
  {
    name: "content-generator",
    icon: PenTool,
    label: "Content Generator",
    color: "text-green-500 hover:text-green-600",
  },
  {
    name: "templates-library",
    icon: LayoutTemplate,
    label: "Templates Library",
    color: "text-purple-500 hover:text-purple-600",
  },
  {
    name: "use-case-integration",
    icon: Layers,
    label: "Use Cases",
    color: "text-orange-500 hover:text-orange-600",
  },
  {
    name: "analytics",
    icon: BarChart2,
    label: "Analytics",
    color: "text-red-500 hover:text-red-600",
  },
  {
    name: "profile-settings",
    icon: User,
    label: "Profile & Settings",
    color: "text-teal-500 hover:text-teal-600",
  },
];
