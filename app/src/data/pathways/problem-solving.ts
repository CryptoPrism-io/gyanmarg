import type { PathwayLevel } from "@/types";
import { solveLessonsLevel1 } from "./problem-solving-lessons";

const problemSolvingPathway: PathwayLevel[] = [
  {
    id: "solve-level1",
    title: "Core Problem-Solving Skills",
    description: "Master systematic troubleshooting, root cause analysis, debugging mindsets, and pattern recognition that separate expert problem solvers from amateurs.",
    icon: "🔍",
    color: "from-blue-500 to-cyan-500",
    lessons: solveLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default problemSolvingPathway;
