import type { PathwayLevel } from "@/types";
import { optLessonsLevel1 } from "./options-trading-lessons";

const optionsTradingPathway: PathwayLevel[] = [
  {
    id: "opt-level1",
    title: "Options Fundamentals",
    description: "Master calls and puts, options pricing, the Greeks, and essential risk management strategies for successful options trading.",
    icon: "📈",
    color: "from-green-500 to-emerald-500",
    lessons: optLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default optionsTradingPathway;
