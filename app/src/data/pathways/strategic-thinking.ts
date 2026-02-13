import type { PathwayLevel } from "@/types";
import { stratLessonsLevel1 } from "./strategic-thinking-lessons";

const strategicThinkingPathway: PathwayLevel[] = [
  {
    id: "strat-level1",
    title: "Strategy Fundamentals",
    description: "Master the core concepts of strategic thinking—diagnosis, guiding policy, and coherent actions.",
    icon: "♟️",
    color: "from-slate-500 to-gray-500",
    lessons: stratLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default strategicThinkingPathway;
