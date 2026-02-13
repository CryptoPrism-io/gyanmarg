import type { PathwayLevel } from "@/types";
import { earthLessonsLevel1 } from "./earth-sciences-lessons";

const earthSciencesPathway: PathwayLevel[] = [
  {
    id: "earth-level1",
    title: "Dynamic Planet",
    description: "Explore plate tectonics, the rock cycle, climate systems, and the hydrological cycle that shape our ever-changing planet.",
    icon: "🌍",
    color: "from-blue-500 to-teal-500",
    lessons: earthLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default earthSciencesPathway;
