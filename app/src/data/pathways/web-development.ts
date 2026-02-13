import type { PathwayLevel } from "@/types";
import { webdevLessonsLevel1 } from "./web-development-lessons";

const webDevelopmentPathway: PathwayLevel[] = [
  {
    id: "webdev-level1",
    title: "Web Foundations",
    description: "Master HTML, CSS, and JavaScript -- the three languages that power every website.",
    icon: "💻",
    color: "from-blue-500 to-cyan-500",
    lessons: webdevLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default webDevelopmentPathway;
