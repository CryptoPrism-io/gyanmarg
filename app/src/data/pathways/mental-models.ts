import type { PathwayLevel } from "@/types";
import { mmLessonsLevel1 } from "./mental-models-lessons";

const mentalModelsPathway: PathwayLevel[] = [
  {
    id: "mm-level1",
    title: "Core Mental Models",
    description: "Master essential thinking frameworks: inversion, circle of competence, second-order thinking, and incentives.",
    icon: "🧠",
    color: "from-indigo-500 to-blue-500",
    lessons: mmLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default mentalModelsPathway;
