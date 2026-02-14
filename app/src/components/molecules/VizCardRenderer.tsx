import { lazy, Suspense } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';

// Lazy-load viz components by ID — only loads the one needed
const vizComponents: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  'habit-loop': lazy(() => import('@/components/visualizations/HabitLoopDiagram').then(m => ({ default: m.HabitLoopDiagram }))),
  'compound-growth': lazy(() => import('@/components/visualizations/CompoundGrowthChart').then(m => ({ default: m.CompoundGrowthChart }))),
  'activation-energy': lazy(() => import('@/components/visualizations/ActivationEnergy').then(m => ({ default: m.ActivationEnergy }))),
  'two-minute-rule': lazy(() => import('@/components/visualizations/TwoMinuteRule').then(m => ({ default: m.TwoMinuteRule }))),
  'eisenhower-matrix': lazy(() => import('@/components/visualizations/EisenhowerMatrix').then(m => ({ default: m.EisenhowerMatrix }))),
  'stoic-dichotomy': lazy(() => import('@/components/visualizations/StoicDichotomy').then(m => ({ default: m.StoicDichotomy }))),
  'dichotomy-control': lazy(() => import('@/components/visualizations/DichotomyOfControl').then(m => ({ default: m.DichotomyOfControl }))),
  'flow-state': lazy(() => import('@/components/visualizations/FlowStateDiagram').then(m => ({ default: m.FlowStateDiagram }))),
  'forgetting-curve': lazy(() => import('@/components/visualizations/ForgettingCurveDiagram').then(m => ({ default: m.ForgettingCurveDiagram }))),
  'dunning-kruger': lazy(() => import('@/components/visualizations/DunningKrugerCurve').then(m => ({ default: m.DunningKrugerCurve }))),
  'first-principles': lazy(() => import('@/components/visualizations/FirstPrinciples').then(m => ({ default: m.FirstPrinciples }))),
  'growth-mindset': lazy(() => import('@/components/visualizations/GrowthMindset').then(m => ({ default: m.GrowthMindset }))),
  'circle-of-control': lazy(() => import('@/components/visualizations/CircleOfControl').then(m => ({ default: m.CircleOfControl }))),
  'feynman-technique': lazy(() => import('@/components/visualizations/FeynmanTechnique').then(m => ({ default: m.FeynmanTechnique }))),
  'pareto-principle': lazy(() => import('@/components/visualizations/ParetoPrinciple').then(m => ({ default: m.ParetoPrinciple }))),
  'second-order-thinking': lazy(() => import('@/components/visualizations/SecondOrderThinking').then(m => ({ default: m.SecondOrderThinking }))),
  'inversion-thinking': lazy(() => import('@/components/visualizations/InversionThinking').then(m => ({ default: m.InversionThinking }))),
  'sunk-cost-fallacy': lazy(() => import('@/components/visualizations/SunkCostFallacy').then(m => ({ default: m.SunkCostFallacy }))),
  'ooda-loop': lazy(() => import('@/components/visualizations/OODALoop').then(m => ({ default: m.OODALoop }))),
  'circle-competence': lazy(() => import('@/components/visualizations/CircleOfCompetence').then(m => ({ default: m.CircleOfCompetence }))),
  'the-dip': lazy(() => import('@/components/visualizations/TheDip').then(m => ({ default: m.TheDip }))),
  'hedonic-treadmill': lazy(() => import('@/components/visualizations/HedonicTreadmill').then(m => ({ default: m.HedonicTreadmill }))),
  'loss-aversion': lazy(() => import('@/components/visualizations/LossAversion').then(m => ({ default: m.LossAversion }))),
  'confirmation-bias': lazy(() => import('@/components/visualizations/ConfirmationBias').then(m => ({ default: m.ConfirmationBias }))),
  'anchoring-bias': lazy(() => import('@/components/visualizations/AnchoringBias').then(m => ({ default: m.AnchoringBias }))),
  'availability-heuristic': lazy(() => import('@/components/visualizations/AvailabilityHeuristic').then(m => ({ default: m.AvailabilityHeuristic }))),
  'mere-exposure': lazy(() => import('@/components/visualizations/MereExposure').then(m => ({ default: m.MereExposure }))),
  'peak-end-rule': lazy(() => import('@/components/visualizations/PeakEndRule').then(m => ({ default: m.PeakEndRule }))),
  'dark-triad': lazy(() => import('@/components/visualizations/DarkTriad').then(m => ({ default: m.DarkTriad }))),
  'ladder-of-inference': lazy(() => import('@/components/visualizations/LadderOfInference').then(m => ({ default: m.LadderOfInference }))),
  'system-thinking': lazy(() => import('@/components/visualizations/System1vs2Diagram').then(m => ({ default: m.System1vs2Diagram }))),
  'iceberg-model': lazy(() => import('@/components/visualizations/IcebergModel').then(m => ({ default: m.IcebergModel }))),
  'sleep-architecture': lazy(() => import('@/components/visualizations/SleepArchitecture').then(m => ({ default: m.SleepArchitecture }))),
  'dopamine-baseline': lazy(() => import('@/components/visualizations/DopamineBaseline').then(m => ({ default: m.DopamineBaseline }))),
  'neuroplasticity': lazy(() => import('@/components/visualizations/Neuroplasticity').then(m => ({ default: m.Neuroplasticity }))),
  'hormesis': lazy(() => import('@/components/visualizations/Hormesis').then(m => ({ default: m.Hormesis }))),
  'circadian-rhythm': lazy(() => import('@/components/visualizations/CircadianRhythm').then(m => ({ default: m.CircadianRhythm }))),
  'box-breathing': lazy(() => import('@/components/visualizations/BoxBreathing').then(m => ({ default: m.BoxBreathing }))),
  'antifragility': lazy(() => import('@/components/visualizations/Antifragility').then(m => ({ default: m.Antifragility }))),
  'logotherapy': lazy(() => import('@/components/visualizations/Logotherapy').then(m => ({ default: m.Logotherapy }))),
  'be-water': lazy(() => import('@/components/visualizations/BeWater').then(m => ({ default: m.BeWater }))),
  'regret-minimization': lazy(() => import('@/components/visualizations/RegretMinimization').then(m => ({ default: m.RegretMinimization }))),
  'barbell-strategy': lazy(() => import('@/components/visualizations/BarbellStrategy').then(m => ({ default: m.BarbellStrategy }))),
  'compound-interest': lazy(() => import('@/components/visualizations/CompoundInterest').then(m => ({ default: m.CompoundInterest }))),
  'margin-of-safety': lazy(() => import('@/components/visualizations/MarginOfSafety').then(m => ({ default: m.MarginOfSafety }))),
  'lindy-effect': lazy(() => import('@/components/visualizations/LindyEffect').then(m => ({ default: m.LindyEffect }))),
  'time-in-market': lazy(() => import('@/components/visualizations/TimeInMarket').then(m => ({ default: m.TimeInMarket }))),
};

interface VizCardRendererProps {
  vizId: string;
}

export function VizCardRenderer({ vizId }: VizCardRendererProps) {
  const VizComponent = vizComponents[vizId];

  if (!VizComponent) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-3 p-4">
        <Sparkles className="w-10 h-10 text-lavender" />
        <p className="text-sm text-text-muted text-center">
          Visualization "{vizId}" — visit Visual Lab to explore
        </p>
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center h-full gap-3">
          <Loader2 className="w-8 h-8 text-lavender animate-spin" />
          <p className="text-sm text-text-muted">Loading visualization...</p>
        </div>
      }
    >
      <div className="w-full h-full flex items-center justify-center overflow-hidden">
        <div className="w-full h-full origin-center">
          <VizComponent />
        </div>
      </div>
    </Suspense>
  );
}
