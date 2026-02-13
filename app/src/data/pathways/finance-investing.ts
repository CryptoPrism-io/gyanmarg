import type { PathwayLevel } from "@/types";
import { fiLessonsLevel1 } from "./finance-investing-lessons";

const financeInvestingPathway: PathwayLevel[] = [
  {
    id: "fi-level1",
    title: "Investment Foundations",
    description: "Master the core principles of finance and investing -- asset classes, risk management, portfolio theory, and the psychology of successful investing.",
    icon: "📊",
    color: "from-green-500 to-emerald-500",
    lessons: fiLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default financeInvestingPathway;
