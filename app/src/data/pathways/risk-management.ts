import type { PathwayLevel } from "@/types";
import { riskLessonsLevel1 } from "./risk-management-lessons";

const riskManagementPathway: PathwayLevel[] = [
  {
    id: "risk-level1",
    title: "Risk Fundamentals",
    description: "Master tail risk protection, margin of safety, asymmetric risk-reward, and antifragility principles.",
    icon: "🎲",
    color: "from-red-500 to-pink-500",
    lessons: riskLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default riskManagementPathway;
