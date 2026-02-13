import type { PathwayLevel } from "@/types";
import { leadLessonsLevel1 } from "./leadership-lessons";

const leadershipPathway: PathwayLevel[] = [
  {
    id: "lead-level1",
    title: "Leadership Fundamentals",
    description: "Build the essential skills of effective leadership—executive presence, decision-making, influence, team building, and crisis management.",
    icon: "👑",
    color: "from-amber-500 to-orange-500",
    lessons: leadLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default leadershipPathway;
