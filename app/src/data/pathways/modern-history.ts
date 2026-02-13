import type { PathwayLevel } from "@/types";
import { modhistLessonsLevel1 } from "./modern-history-lessons";

const modernHistoryPathway: PathwayLevel[] = [
  {
    id: "modhist-level1",
    title: "Wars and Revolutions",
    description: "Understand the world wars, totalitarianism, Cold War, and decolonization that created the modern international order.",
    icon: "⚔️",
    color: "from-slate-500 to-gray-600",
    lessons: modhistLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default modernHistoryPathway;
