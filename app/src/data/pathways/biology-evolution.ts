import type { PathwayLevel } from "@/types";
import {
  bioLessonsLevel1,
  bioLessonsLevel2,
  bioLessonsLevel3,
  bioLessonsLevel4,
  bioLessonsLevel5,
  bioLessonsLevel6,
  bioLessonsLevel7,
  bioLessonsLevel8,
  bioLessonsLevel9,
  bioLessonsLevel10,
} from "./biology-evolution-lessons";

const biologyEvolutionPathway: PathwayLevel[] = [
  {
    id: "bio-level1",
    title: "Life's Grand Design",
    description: "Explore the mechanisms of evolution, from natural selection to DNA, and witness how life adapts and diversifies across billions of years.",
    icon: "🧬",
    color: "from-green-500 to-emerald-500",
    lessons: bioLessonsLevel1,
    unlockRequirement: 0,
  },
  {
    id: "bio-level2",
    title: "Cell Biology & Genetics",
    description:
      "Dive into the microscopic world of cells, DNA replication, protein synthesis, and the mechanisms of heredity that underpin all life.",
    icon: "🔬",
    color: "from-emerald-500 to-teal-500",
    lessons: bioLessonsLevel2,
    unlockRequirement: 500,
  },
  {
    id: "bio-level3",
    title: "Evolution & Natural Selection",
    description:
      "Master the forces driving evolutionary change, from genetic drift and gene flow to sexual selection and coevolution.",
    icon: "🦎",
    color: "from-teal-500 to-cyan-500",
    lessons: bioLessonsLevel3,
    unlockRequirement: 1000,
  },
  {
    id: "bio-level4",
    title: "Human Evolution",
    description:
      "Trace humanity's remarkable journey from early primates through Homo erectus to modern Homo sapiens and beyond.",
    icon: "🧠",
    color: "from-cyan-500 to-blue-500",
    lessons: bioLessonsLevel4,
    unlockRequirement: 1500,
  },
  {
    id: "bio-level5",
    title: "Ecosystems & Ecology",
    description:
      "Explore the intricate web of relationships between organisms and their environments, from food webs to biogeochemical cycles.",
    icon: "🌍",
    color: "from-blue-500 to-indigo-500",
    lessons: bioLessonsLevel5,
    unlockRequirement: 2000,
  },
  {
    id: "bio-level6",
    title: "Molecular Biology",
    description:
      "Uncover the molecular machinery of life, from gene regulation and epigenetics to advanced genomic techniques.",
    icon: "🧪",
    color: "from-indigo-500 to-violet-500",
    lessons: bioLessonsLevel6,
    unlockRequirement: 2500,
  },
  {
    id: "bio-level7",
    title: "Microbiology & Viruses",
    description:
      "Discover the invisible world of bacteria, viruses, fungi, and their profound impact on health, ecosystems, and evolution.",
    icon: "🦠",
    color: "from-violet-500 to-purple-500",
    lessons: bioLessonsLevel7,
    unlockRequirement: 3000,
  },
  {
    id: "bio-level8",
    title: "Neuroscience & Behavior",
    description:
      "Explore the brain, nervous system, and the biological basis of behavior, consciousness, and cognition.",
    icon: "⚡",
    color: "from-purple-500 to-fuchsia-500",
    lessons: bioLessonsLevel8,
    unlockRequirement: 3500,
  },
  {
    id: "bio-level9",
    title: "Biotechnology & Synthetic Biology",
    description:
      "Investigate cutting-edge technologies reshaping life itself, from CRISPR gene editing to synthetic organisms and bioengineering.",
    icon: "🧬",
    color: "from-fuchsia-500 to-pink-500",
    lessons: bioLessonsLevel9,
    unlockRequirement: 4000,
  },
  {
    id: "bio-level10",
    title: "The Future of Life",
    description:
      "Contemplate the frontiers of biology, from astrobiology and de-extinction to post-biological evolution and the long-term fate of life.",
    icon: "🚀",
    color: "from-pink-500 to-rose-500",
    lessons: bioLessonsLevel10,
    unlockRequirement: 4500,
  },
];

export default biologyEvolutionPathway;
