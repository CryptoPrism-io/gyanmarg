import type { PathwayLevel } from "@/types";
import { astroLessonsLevel1 } from "./astronomy-lessons";

const astronomyPathway: PathwayLevel[] = [
  {
    id: "astro-level1",
    title: "Cosmic Foundations",
    description: "Journey through the solar system, explore stellar lifecycles, and confront the mysteries of black holes and extraterrestrial life.",
    icon: "🔭",
    color: "from-cyan-500 to-blue-500",
    lessons: astroLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default astronomyPathway;
