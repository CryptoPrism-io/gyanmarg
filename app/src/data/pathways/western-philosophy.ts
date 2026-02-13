import type { PathwayLevel } from "@/types";
import { wphilLessonsLevel1 } from "./western-philosophy-lessons";

const westernPhilosophyPathway: PathwayLevel[] = [
  {
    id: "wphil-level1",
    title: "Ancient Foundations",
    description: "Master the fundamental questions and methods that launched Western philosophy—from Socratic questioning to Stoic practice.",
    icon: "🏛️",
    color: "from-amber-500 to-yellow-500",
    lessons: wphilLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default westernPhilosophyPathway;
