import type { PathwayLevel } from "@/types";
import { cwLessonsLevel1 } from "./creative-writing-lessons";

const creativeWritingPathway: PathwayLevel[] = [
  {
    id: "cw-level1",
    title: "Fiction Fundamentals",
    description: "Master the essential craft of fiction: POV, character, plot, worldbuilding, and prose style.",
    icon: "📖",
    color: "from-rose-500 to-red-500",
    lessons: cwLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default creativeWritingPathway;
