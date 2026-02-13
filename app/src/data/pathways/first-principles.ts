import type { PathwayLevel } from "@/types";
import { fpLessonsLevel1 } from "./first-principles-lessons";

const firstPrinciplesPathway: PathwayLevel[] = [
  {
    id: "fp-level1",
    title: "First Principles Fundamentals",
    description: "Learn to break problems down to fundamental truths and rebuild solutions from scratch like Elon Musk.",
    icon: "⚛️",
    color: "from-red-500 to-orange-500",
    lessons: fpLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default firstPrinciplesPathway;
