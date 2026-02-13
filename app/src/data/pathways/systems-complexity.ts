import type { PathwayLevel } from "@/types";
import { sysLessonsLevel1 } from "./systems-complexity-lessons";

const systemsComplexityPathway: PathwayLevel[] = [
  {
    id: "sys-level1",
    title: "Systems Thinking Fundamentals",
    description: "Learn to see feedback loops, emergence, and leverage points in complex systems.",
    icon: "🔄",
    color: "from-indigo-500 to-purple-500",
    lessons: sysLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default systemsComplexityPathway;
