import type { PathwayLevel } from "@/types";
import { wsLessonsLevel1 } from "./writing-storytelling-lessons";

const writingStorytellingPathway: PathwayLevel[] = [
  {
    id: "ws-level1",
    title: "Foundations of Narrative Craft",
    description: "Master the core principles of storytelling, from character development to story structure.",
    icon: "✍️",
    color: "from-rose-500 to-pink-500",
    lessons: wsLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default writingStorytellingPathway;
