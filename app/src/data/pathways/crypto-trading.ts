import type { PathwayLevel } from "@/types";
import { cryptoLessonsLevel1 } from "./crypto-trading-lessons";

const cryptoTradingPathway: PathwayLevel[] = [
  {
    id: "crypto-level1",
    title: "Crypto Fundamentals",
    description: "Master Bitcoin, Ethereum, smart contracts, market cycles, on-chain analysis, and risk management for cryptocurrency trading and investing.",
    icon: "₿",
    color: "from-green-500 to-emerald-500",
    lessons: cryptoLessonsLevel1,
    unlockRequirement: 0,
  },
];

export default cryptoTradingPathway;
