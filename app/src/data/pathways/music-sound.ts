import type { PathwayLevel } from "@/types";
import { musLessonsLevel1 } from "./music-sound-lessons";

const musicSoundPathway: PathwayLevel[] = [
  {
    id: "mus-level1",
    title: "Foundations of Music Theory",
    description: "Master the fundamental elements of music: scales, rhythm, harmony, and sound design.",
    icon: "🎵",
    color: "from-violet-500 to-purple-500",
    lessons: musLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default musicSoundPathway;
