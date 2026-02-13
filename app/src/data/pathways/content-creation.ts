import type { PathwayLevel } from "@/types";
import { contentLessonsLevel1 } from "./content-creation-lessons";

const contentCreationPathway: PathwayLevel[] = [
  {
    id: "content-level1",
    title: "Digital Creator Foundations",
    description: "Master audience building, viral mechanics, storytelling, community, monetization, and sustainable systems.",
    icon: "📱",
    color: "from-red-500 to-orange-500",
    lessons: contentLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default contentCreationPathway;
