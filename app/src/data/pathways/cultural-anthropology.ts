import type { PathwayLevel } from "@/types";
import { anthroLessonsLevel1 } from "./cultural-anthropology-lessons";

const culturalAnthropologyPathway: PathwayLevel[] = [
  {
    id: "anthro-level1",
    title: "Cultural Foundations",
    description: "Explore kinship systems, ritual practices, economic exchange, and linguistic diversity that reveal human cultural flexibility.",
    icon: "🌏",
    color: "from-teal-500 to-emerald-500",
    lessons: anthroLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default culturalAnthropologyPathway;
