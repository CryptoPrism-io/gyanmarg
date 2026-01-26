import type { PathwayLevel } from '@/types';
import { aiMlExpandedLessons } from './ai-ml-expanded';
import { aiAdvanced2026Lessons } from './ai-advanced-2026';

/**
 * AI & Machine Learning Pathway
 * 45 lessons covering AI fundamentals, prompt engineering, tools, business applications, and the future
 */
export const aiMlPathway: PathwayLevel[] = [
  {
    id: 'ai-level1',
    title: 'Level 1: Intelligence Foundations',
    description: 'Understand what intelligence is and how it evolved',
    icon: '🧠',
    color: 'blue',
    unlockRequirement: 0,
    lessons: [
      {
        id: 'ai-intro',
        title: 'What is Intelligence?',
        type: 'intro',
        duration: 8,
        xpReward: 50,
        content: {
          overview: 'Explore the fundamental question: What makes something intelligent?',
          mainContent: `**The Five Breakthroughs That Made Our Brains**

From "A Brief History of Intelligence" by Max Bennett, we learn that intelligence evolved through 5 key breakthroughs:

**Breakthrough 1: Steering (600M years ago)**
The first nervous systems allowed simple organisms to move toward food and away from danger.

**Breakthrough 2: Reinforcement Learning (500M years ago)**
Animals learned from rewards and punishments - the basis of all learning.

**Breakthrough 3: Simulation (300M years ago)**
Mammals developed the ability to imagine outcomes before acting.

**Breakthrough 4: Mentalizing (70M years ago)**
Primates evolved to understand that others have minds too.

**Breakthrough 5: Language (100K years ago)**
Humans alone developed symbolic language for abstract thought.

**Why This Matters for AI:**
Every AI system mimics one or more of these breakthroughs. Understanding evolution helps us understand where AI is headed.`,
          keyTakeaway: 'Intelligence is not magic - it evolved through specific capabilities that we can understand and replicate.',
          actionItem: 'Think about which of the 5 breakthroughs your smartphone uses.',
        },
      },
      {
        id: 'ai-neural-basics',
        title: 'How Neural Networks Work',
        type: 'concept',
        duration: 12,
        xpReward: 100,
        content: {
          overview: 'Demystify neural networks - they\'re simpler than you think!',
          mainContent: `**Neural Networks: The Simple Truth**

A neural network is just a fancy function that:
1. Takes numbers in
2. Does math
3. Outputs numbers

**The Building Block: A Single Neuron**
\`output = activation(weights × inputs + bias)\`

That's it! A neuron multiplies inputs by weights, adds a bias, and applies an activation function.

**Layers Make It Powerful**
- **Input Layer:** Raw data goes in (pixels, words, numbers)
- **Hidden Layers:** Learn patterns and features
- **Output Layer:** Final prediction

**Training = Adjusting Weights**
1. Make a prediction
2. Compare to correct answer (loss)
3. Adjust weights to reduce loss (backpropagation)
4. Repeat millions of times

**Types of Neural Networks:**
- **CNN (Convolutional):** For images
- **RNN/LSTM:** For sequences (text, time)
- **Transformer:** For language (GPT, BERT)
- **GAN:** For generation

**The Secret:** It's all just matrix multiplication + trial and error!`,
          keyTakeaway: 'Neural networks are not magic brains - they\'re math functions that learn by adjusting numbers.',
          quiz: {
            question: 'What does "training" a neural network actually mean?',
            options: [
              'Teaching it with human instructions',
              'Adjusting weights based on prediction errors',
              'Adding more layers',
              'Making it run faster',
            ],
            correct: 1,
            explanation: 'Training means iteratively adjusting the weights to minimize prediction errors (loss).',
          },
        },
      },
      {
        id: 'ai-types',
        title: 'Types of AI & Machine Learning',
        type: 'concept',
        duration: 10,
        xpReward: 75,
        content: {
          overview: 'Navigate the AI landscape - understand what\'s possible today.',
          mainContent: `**The AI Landscape**

**Narrow AI (What We Have Now)**
- Good at ONE specific task
- Can't transfer knowledge
- Examples: Siri, chess engines, spam filters

**General AI (AGI - The Goal)**
- Human-level reasoning across tasks
- Can learn anything
- Doesn't exist yet (despite hype)

**Three Types of Machine Learning:**

**1. Supervised Learning**
- Given: Input + Correct Answer
- Learns: To predict answers for new inputs
- Example: "This email is spam" → learns to detect spam

**2. Unsupervised Learning**
- Given: Just inputs, no answers
- Learns: Hidden patterns and structure
- Example: Customer segmentation

**3. Reinforcement Learning**
- Given: Environment + Rewards
- Learns: Actions that maximize reward
- Example: Game-playing AI, robotics

**Current State (2024):**
- LLMs (ChatGPT) are narrow AI that *seem* general
- They're pattern matching, not understanding
- Impressive but fundamentally limited`,
          keyTakeaway: 'We have narrow AI that\'s getting better, but true general intelligence remains elusive.',
          quiz: {
            question: 'What type of learning does ChatGPT primarily use?',
            options: [
              'Pure supervised learning',
              'Reinforcement learning only',
              'Supervised + Reinforcement (RLHF)',
              'Unsupervised only',
            ],
            correct: 2,
            explanation: 'LLMs like ChatGPT use supervised pre-training followed by Reinforcement Learning from Human Feedback (RLHF).',
          },
        },
      },
    ],
  },
  {
    id: 'ai-level2',
    title: 'Level 2: AI 2041 - Future Scenarios',
    description: 'Explore how AI will transform society by 2041',
    icon: '🚀',
    color: 'cyan',
    unlockRequirement: 2,
    lessons: [
      {
        id: 'ai-2041-intro',
        title: 'Ten Visions for Our Future',
        type: 'intro',
        duration: 10,
        xpReward: 75,
        content: {
          overview: 'Kai-Fu Lee and Chen Qiufan imagine AI\'s impact across 10 domains.',
          mainContent: `**AI 2041: A Glimpse Into the Future**

From the book by Kai-Fu Lee (AI expert) and Chen Qiufan (sci-fi author):

**The 10 Scenarios:**

1. **Deep Learning:** AI tutors that know students better than themselves
2. **Computer Vision:** Autonomous everything - cars, drones, robots
3. **NLP:** Real-time translation breaking language barriers
4. **AI in Entertainment:** Personalized content created for you
5. **AI in Finance:** Algorithmic everything - lending, insurance, investment
6. **AI in Healthcare:** Early diagnosis, drug discovery, robot surgery
7. **Autonomous Weapons:** The dark side we must prevent
8. **AI Jobs Disruption:** What work will humans do?
9. **AI & Happiness:** Can AI help us flourish?
10. **AGI Possibility:** Will we create thinking machines?

**Key Predictions:**
- 50% of jobs significantly affected by 2041
- AI tutors outperform human teachers in many subjects
- Privacy as we know it will be unrecognizable
- New jobs we can't imagine today

**The Critical Question:**
"The question is not whether AI will transform society, but whether we will guide it wisely."`,
          keyTakeaway: 'AI will transform every industry - the question is how we adapt and shape its development.',
          actionItem: 'Pick one domain from your life/work. How might AI change it by 2041?',
        },
      },
      {
        id: 'ai-your-industry',
        title: 'AI Impact on Your Industry',
        type: 'exercise',
        duration: 15,
        xpReward: 150,
        content: {
          overview: 'Analyze how AI will specifically impact YOUR field.',
          mainContent: `**Your AI Impact Analysis**

Complete this analysis for your industry/profession:

**Step 1: Map Current Tasks**
List the 10 main tasks in your job/field:
- Which are repetitive?
- Which require creativity?
- Which need human judgment?

**Step 2: AI Capability Match**
For each task, assess:
- Can AI do this NOW? (Yes/Partially/No)
- Can AI do this by 2030? (Likely/Maybe/Unlikely)
- Can AI do this by 2041? (Yes/Maybe/No)

**Step 3: Identify Opportunities**
- What new tasks could AI enable?
- What tasks become MORE valuable?
- Where is human + AI > either alone?

**Step 4: Personal Strategy**
- What skills should you develop?
- What tasks should you automate?
- How can you become AI-augmented?

**The Framework:**
- **Automate:** Let AI handle repetitive work
- **Augment:** Use AI to enhance your capabilities
- **Differentiate:** Focus on uniquely human skills

**Uniquely Human Skills (Hard to Automate):**
- Complex problem framing
- Ethical judgment
- Emotional intelligence
- Novel creativity
- Physical dexterity in unstructured environments`,
          keyTakeaway: 'Don\'t compete with AI - learn to leverage it while developing uniquely human skills.',
          actionItem: 'Create your personal AI adaptation plan for the next 5 years.',
        },
      },
    ],
  },
  {
    id: 'ai-level3',
    title: 'Level 3: AI Mastery',
    description: 'Advanced AI concepts, prompt engineering, tools, and career strategies',
    icon: '🤖',
    color: 'purple',
    unlockRequirement: 500,
    lessons: aiMlExpandedLessons,
  },
  {
    id: 'ai-level4',
    title: 'Level 4: Cutting Edge AI 2025-2026',
    description: 'Agentic AI, multi-modal models, reasoning breakthroughs, and AI strategy',
    icon: '⚡',
    color: 'orange',
    unlockRequirement: 2000,
    lessons: aiAdvanced2026Lessons,
  },
];

export default aiMlPathway;
