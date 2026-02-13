import type { PathwayLevel } from "@/types";
import { worldLessonsLevel1 } from "./world-building-lessons";

const worldBuildingPathway: PathwayLevel[] = [
  {
    id: "world-level1",
    title: "Universe Architecture Foundations",
    description: "Master the craft of building immersive fictional worlds: geography, cultures, magic systems, history, economics, and politics.",
    icon: "🌍",
    color: "from-violet-500 to-indigo-500",
    lessons: worldLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default worldBuildingPathway;
