import type { PathwayLevel } from "@/types";
import { histLessonsLevel1 } from "./history-civilizations-lessons";

const historyCivilizationsPathway: PathwayLevel[] = [
  {
    id: "hist-level1",
    title: "Foundations of Civilizations",
    description: "Understand the patterns of rise, fall, and cultural transmission that define human civilization.",
    icon: "🏛️",
    color: "from-orange-500 to-amber-500",
    lessons: histLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default historyCivilizationsPathway;
