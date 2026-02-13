import type { PathwayLevel } from "@/types";
import { geoLessonsLevel1 } from "./geopolitics-lessons";

const geopoliticsPathway: PathwayLevel[] = [
  {
    id: "geo-level1",
    title: "Foundations of Power",
    description: "Master the geographic, resource, and economic forces that determine which nations rise and which fall.",
    icon: "🌍",
    color: "from-blue-500 to-cyan-500",
    lessons: geoLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default geopoliticsPathway;
