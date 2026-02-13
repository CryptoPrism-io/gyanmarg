import type { PathwayLevel } from "@/types";
import { mlearnLessonsLevel1 } from "./meta-learning-lessons";

const metaLearningPathway: PathwayLevel[] = [
  {
    id: "mlearn-level1",
    title: "Foundations of Accelerated Learning",
    description: "Master the fundamental principles of meta-learning, deliberate practice, and memory techniques that transform how you acquire any skill.",
    icon: "🧠",
    color: "from-purple-500 to-violet-500",
    lessons: mlearnLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default metaLearningPathway;
