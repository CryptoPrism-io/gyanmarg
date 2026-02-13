import type { PathwayLevel } from "@/types";
import { cyberLessonsLevel1 } from "./cybersecurity-lessons";

const cybersecurityPathway: PathwayLevel[] = [
  {
    id: "cyber-level1",
    title: "Security Fundamentals",
    description: "Master the essentials of digital defense: passwords, phishing, encryption, and threat awareness.",
    icon: "🔒",
    color: "from-red-500 to-orange-500",
    lessons: cyberLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default cybersecurityPathway;
