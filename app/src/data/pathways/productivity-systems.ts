import type { PathwayLevel } from "@/types";
import { prodLessonsLevel1 } from "./productivity-systems-lessons";

const productivitySystemsPathway: PathwayLevel[] = [
  {
    id: "prod-level1",
    title: "Core Productivity Systems",
    description: "Master GTD, time blocking, energy management, deep work, and workflow automation to build a personalized productivity system that actually works.",
    icon: "⚡",
    color: "from-green-500 to-emerald-500",
    lessons: prodLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default productivitySystemsPathway;
