import type { PathwayLevel } from "@/types";
import { decideLessonsLevel1 } from "./decision-making-lessons";

const decisionMakingPathway: PathwayLevel[] = [
  {
    id: "decide-level1",
    title: "Decision Fundamentals",
    description: "Master probabilistic thinking, bias mitigation, and decision frameworks for better choices under uncertainty.",
    icon: "⚖️",
    color: "from-amber-500 to-yellow-500",
    lessons: decideLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default decisionMakingPathway;
