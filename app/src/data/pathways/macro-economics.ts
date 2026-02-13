import type { PathwayLevel } from "@/types";
import { macroLessonsLevel1 } from "./macro-economics-lessons";

const macroEconomicsPathway: PathwayLevel[] = [
  {
    id: "macro-level1",
    title: "Macro Fundamentals",
    description: "Master central bank policy, yield curves, economic indicators, and currency dynamics to understand the forces that drive global markets.",
    icon: "🌍",
    color: "from-green-500 to-emerald-500",
    lessons: macroLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default macroEconomicsPathway;
