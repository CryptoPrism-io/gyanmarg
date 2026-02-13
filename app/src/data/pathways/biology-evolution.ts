import type { PathwayLevel } from "@/types";
import { bioLessonsLevel1 } from "./biology-evolution-lessons";

const biologyEvolutionPathway: PathwayLevel[] = [
  {
    id: "bio-level1",
    title: "Life's Grand Design",
    description: "Explore the mechanisms of evolution, from natural selection to DNA, and witness how life adapts and diversifies across billions of years.",
    icon: "🧬",
    color: "from-green-500 to-emerald-500",
    lessons: bioLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default biologyEvolutionPathway;
