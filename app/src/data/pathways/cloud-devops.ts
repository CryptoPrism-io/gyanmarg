import type { PathwayLevel } from "@/types";
import { devopsLessonsLevel1 } from "./cloud-devops-lessons";

const cloudDevopsPathway: PathwayLevel[] = [
  {
    id: "devops-level1",
    title: "Cloud & DevOps Essentials",
    description: "Understand the cloud revolution, containers, CI/CD, databases, and modern infrastructure practices.",
    icon: "☁️",
    color: "from-sky-500 to-blue-600",
    lessons: devopsLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default cloudDevopsPathway;
