import type { SpacedRepetitionCard } from '@/types';

export const aiMlFlashcards: SpacedRepetitionCard[] = [
  // Machine Learning Fundamentals - Beginner
  {
    id: 'fc-aiml-001',
    front: 'Supervised vs. Unsupervised Learning: Key difference?',
    back: 'Supervised: Learn from labeled data; predict outputs. Unsupervised: Discover patterns in unlabeled data; no target',
    category: 'AI & ML',
    source: 'ML Fundamentals',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['machine-learning', 'supervised-learning', 'unsupervised-learning']
  },
  {
    id: 'fc-aiml-002',
    front: 'Overfitting: What is it, and why does it hurt ML model performance?',
    back: 'Model learns noise; generalize poorly. Detect: high train, low test accuracy. Fix: Regularize; cross-validate; early stop; add data',
    category: 'AI & ML',
    source: 'ML Fundamentals',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['machine-learning', 'overfitting', 'model-training']
  },
  {
    id: 'fc-aiml-003',
    front: 'Define a feature in machine learning',
    back: 'Represent data properties as input for models; select and engineer features for performance. Examples: age; income',
    category: 'AI & ML',
    source: 'ML Fundamentals',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['machine-learning', 'features', 'data-preprocessing']
  },
  {
    id: 'fc-aiml-004',
    front: 'Why split data into training, validation, and test sets in ML?',
    back: 'Train: Build model. Validate: Tune hyperparameters, prevent overfitting. Test: Evaluate final model performance on unseen data',
    category: 'AI & ML',
    source: 'ML Fundamentals',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['machine-learning', 'data-splitting', 'model-evaluation']
  },
  {
    id: 'fc-aiml-005',
    front: 'Reinforcement Learning: Define it and how it differs from other ML methods',
    back: 'Agent learns optimal actions by interacting with an environment to maximize rewards. Differs from supervised/unsupervised learning via trial & error; delayed feedback',
    category: 'AI & ML',
    source: 'ML Fundamentals',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['reinforcement-learning', 'machine-learning', 'agent']
  },
  {
    id: 'fc-aiml-006',
    front: 'Explain the bias-variance tradeoff in machine learning',
    back: 'Bias: Model simplifies too much; Variance: Model is too sensitive. Reduce one, increase the other. Aim: Balance to minimize error; High bias=underfitting, High variance=overfitting',
    category: 'AI & ML',
    source: 'ML Fundamentals',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['machine-learning', 'bias-variance', 'model-optimization']
  },
  {
    id: 'fc-aiml-007',
    front: 'Gradient descent: What is it, and why is it key to machine learning?',
    back: 'Optimize ML models: Iteratively adjust parameters to minimize loss by moving opposite the gradient. Variants: Batch, Stochastic, Mini-batch. Control step size with learning rate',
    category: 'AI & ML',
    source: 'ML Fundamentals',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['machine-learning', 'optimization', 'gradient-descent']
  },
  {
    id: 'fc-aiml-008',
    front: 'Define cross-validation and when is it useful?',
    back: 'Assess model generalization with multiple train-test splits. Use for: limited data; model comparison; hyperparameter tuning; robust estimates',
    category: 'AI & ML',
    source: 'ML Fundamentals',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['machine-learning', 'cross-validation', 'model-evaluation']
  },
  {
    id: 'fc-aiml-009',
    front: 'Define neural network; list its core components',
    back: 'Model inspired by neurons. Core: Input, hidden, output layers; weights; biases; activation functions. Process input to produce predictions',
    category: 'AI & ML',
    source: 'Deep Learning',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['neural-networks', 'deep-learning', 'architecture']
  },
  {
    id: 'fc-aiml-010',
    front: 'Activation function: What is it and why must neural nets use it?',
    back: 'Add non-linearity so nets learn complex patterns; prevents layer collapse. Examples: ReLU; Sigmoid; Tanh; Softmax. ID: fc-aiml-010',
    category: 'AI & ML',
    source: 'Deep Learning',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['neural-networks', 'activation-functions', 'non-linearity']
  },
  {
    id: 'fc-aiml-011',
    front: 'Explain backpropagation\'s role in training neural networks (NN)',
    back: 'Backpropagation calculates gradients; Propagate errors back through NN. Update weights with gradient descent after forward pass & loss calculation',
    category: 'AI & ML',
    source: 'Deep Learning',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['neural-networks', 'backpropagation', 'training']
  },
  {
    id: 'fc-aiml-012',
    front: 'CNN: What are they & why are they effective for image data?',
    back: 'CNNs process image data; Convolutions extract local features, pooling reduces dimensions, parameter sharing boosts efficiency; Translation invariance enables robust object detection',
    category: 'AI & ML',
    source: 'Deep Learning',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['cnn', 'computer-vision', 'deep-learning']
  },
  {
    id: 'fc-aiml-013',
    front: 'What\'s an RNN & what problem does it tackle with sequential data?',
    back: 'Process sequences using hidden state; handle temporal dependencies. Fix: LSTM/GRU address vanishing/exploding gradients; use for NLP, speech, time series',
    category: 'AI & ML',
    source: 'Deep Learning',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['rnn', 'sequential-data', 'deep-learning']
  },
  {
    id: 'fc-aiml-014',
    front: 'What is the vanishing gradient problem? How do LSTMs solve it?',
    back: 'Small gradients block learning long-range dependencies. LSTMs use cell states and gating (forget, input, output) to allow gradients to flow',
    category: 'AI & ML',
    source: 'Deep Learning',
    pathwayId: 'ai-ml',
    difficulty: 'advanced',
    tags: ['lstm', 'vanishing-gradient', 'deep-learning']
  },
  {
    id: 'fc-aiml-015',
    front: 'What is dropout? How does it prevent overfitting in neural nets?',
    back: 'Dropout: Randomly zero neuron activations during training to prevent co-adaptation and force redundant representations. Disable during inference; scale predictions',
    category: 'AI & ML',
    source: 'Deep Learning',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['dropout', 'regularization', 'deep-learning']
  },
  {
    id: 'fc-aiml-016',
    front: 'What does batch normalization do & why is it vital in deep learning?',
    back: 'Normalize layer inputs per mini-batch, speeding up training and regularizing.  Use learnable scale/shift; reduces covariate shift; enable higher LR',
    category: 'AI & ML',
    source: 'Deep Learning',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['batch-normalization', 'training', 'deep-learning']
  },
  {
    id: 'fc-aiml-017',
    front: 'Explain the attention mechanism & its revolutionary impact in deep learning',
    back: 'Model focuses on relevant input parts via weighted query-key similarity. Revolution: Handles long dependencies better; enables parallelization; adds interpretability. Foundation of LLMs',
    category: 'AI & ML',
    source: 'Transformers',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['attention', 'transformers', 'nlp']
  },
  {
    id: 'fc-aiml-018',
    front: 'Attention: Define Query, Key, and Value roles',
    back: 'Query: what you seek; Key: available info; Value: content. Attention scores: find Q-K similarity, scale, weight values',
    category: 'AI & ML',
    source: 'Transformers',
    pathwayId: 'ai-ml',
    difficulty: 'advanced',
    tags: ['attention', 'transformers', 'qkv']
  },
  {
    id: 'fc-aiml-019',
    front: 'Explain multi-head attention & its key advantage in Transformers',
    back: 'Project, attend, concatenate.  Advantage: Attend to diverse representation subspaces; capture varied relationships simultaneously',
    category: 'AI & ML',
    source: 'Transformers',
    pathwayId: 'ai-ml',
    difficulty: 'advanced',
    tags: ['multi-head-attention', 'transformers', 'architecture']
  },
  {
    id: 'fc-aiml-020',
    front: 'Why do Transformers use positional encoding?',
    back: 'Encode token order because Transformers process all tokens in parallel; use sines, learned embeddings, or relative encodings like RoPE and ALiBi. Critical for sequence understanding',
    category: 'AI & ML',
    source: 'Transformers',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['positional-encoding', 'transformers', 'sequence']
  },
  {
    id: 'fc-aiml-021',
    front: 'Transformers vs RNNs: Sequence Processing Differences?',
    back: 'Transformers: Parallelize; Self-attention; Fixed context. RNNs: Sequential; Hidden state struggles long range; Unlimited context. Transformers excel due to parallelization',
    category: 'AI & ML',
    source: 'Transformers',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['transformers', 'rnn', 'comparison']
  },
  {
    id: 'fc-aiml-022',
    front: 'Define Large Language Model (LLM) & its training process',
    back: 'LLMs predict next tokens using massive data; pre-train on internet text, fine-tune for tasks, align via RLHF. Scale enables capabilities',
    category: 'AI & ML',
    source: 'Large Language Models',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['llm', 'training', 'gpt']
  },
  {
    id: 'fc-aiml-023',
    front: 'Define RLHF (Reinforcement Learning from Human Feedback)',
    back: 'Align LLMs to human preferences: Collect/compare outputs; train reward model; fine-tune with RL. Improves helpfulness; harmlessness; honesty. ID: fc-aiml-023',
    category: 'AI & ML',
    source: 'Large Language Models',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['rlhf', 'alignment', 'llm']
  },
  {
    id: 'fc-aiml-024',
    front: 'What are tokens for LLMs?',
    back: 'AI & ML: Tokens are LLM\'s processing units; subwords balancing vocabulary and meaning. Tokenizers: BPE; WordPiece; SentencePiece',
    category: 'AI & ML',
    source: 'Large Language Models',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['tokenization', 'llm', 'nlp']
  },
  {
    id: 'fc-aiml-025',
    front: 'LLM Context Window: What is it, and why does it limit model behavior?',
    back: 'It\'s the max tokens an LLM processes. Limits text referenced; affects document analysis, reasoning, conversations. Longer windows = better performance',
    category: 'AI & ML',
    source: 'Large Language Models',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['context-window', 'llm', 'limitations']
  },
  {
    id: 'fc-aiml-026',
    front: 'Define emergent behavior in large language models (LLMs)',
    back: 'Unexpectedly appearing capabilities from scaling; not explicitly trained. E.g., few-shot learning; chain-of-thought. Predict and control them for AI safety',
    category: 'AI & ML',
    source: 'Large Language Models',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['emergence', 'scaling', 'llm']
  },
  {
    id: 'fc-aiml-027',
    front: 'Fine-tuning vs. Prompting an LLM: What\'s the key difference?',
    back: 'Fine-tune: Retrain model weights; specialized, permanent. Prompt: Guide behavior via input; flexible, temporary; limited by base model',
    category: 'AI & ML',
    source: 'Large Language Models',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['fine-tuning', 'prompting', 'llm']
  },
  {
    id: 'fc-aiml-028',
    front: 'AI Model Hallucination: What is it?',
    back: 'LLMs generate factually incorrect info. Fix: RAG; grounding; chain-of-thought; uncertainty; human verification',
    category: 'AI & ML',
    source: 'Large Language Models',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['hallucination', 'llm', 'safety']
  },
  {
    id: 'fc-aiml-029',
    front: 'What is chain-of-thought (CoT) prompting?',
    back: 'Make LLMs show reasoning steps before answers. Implement by adding \'Let\'s think step by step\' to prompts',
    category: 'AI & ML',
    source: 'Prompt Engineering',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['prompt-engineering', 'chain-of-thought', 'llm']
  },
  {
    id: 'fc-aiml-030',
    front: 'What is few-shot learning for LLMs?',
    back: 'Guide LLMs with examples in the prompt; no fine-tuning. Zero-shot: none; One-shot: 1; Few-shot: 2-10. Adapt quickly with diverse, consistent examples',
    category: 'AI & ML',
    source: 'Prompt Engineering',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['few-shot', 'prompt-engineering', 'llm']
  },
  {
    id: 'fc-aiml-031',
    front: 'System Prompt vs. User Prompt: What\'s the key difference?',
    back: 'System: Guide AI behavior & set context at start; define constraints. User: Request specific actions or info from AI',
    category: 'AI & ML',
    source: 'Prompt Engineering',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['system-prompt', 'prompt-engineering', 'llm']
  },
  {
    id: 'fc-aiml-032',
    front: 'What is Retrieval-Augmented Generation (RAG)?',
    back: 'Combine LLMs with retrieved knowledge. Embed documents; retrieve relevant chunks; include context in prompt; LLM generates grounded answer',
    category: 'AI & ML',
    source: 'Prompt Engineering',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['rag', 'retrieval', 'llm']
  },
  {
    id: 'fc-aiml-033',
    front: 'Explain prompt injection attack and why it\'s a security risk?',
    back: 'Malicious input overrides LLM instructions. Prevent by sanitizing inputs, filtering outputs; apply least privilege; add human review. Risk: data leaks; unauthorized actions',
    category: 'AI & ML',
    source: 'AI Safety',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['prompt-injection', 'security', 'llm']
  },
  {
    id: 'fc-aiml-034',
    front: 'Define AI alignment. Why is it crucial?',
    back: 'Align AI goals with human values. Prevent harmful unintended behavior as AI capabilities grow; Specifying values; Avoid hacking; Superhuman alignment; Value lock-in',
    category: 'AI & ML',
    source: 'AI Safety',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['alignment', 'ai-safety', 'ethics']
  },
  {
    id: 'fc-aiml-035',
    front: 'Algorithmic bias: What is it and how does it show up in AI?',
    back: 'AI gives unfair results due to: biased data, unrepresentative samples, biased labels, or proxy variables. Address it with diverse teams, auditing, and fairness metrics; fix issues like facial recognition disparities',
    category: 'AI & ML',
    source: 'AI Ethics',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['bias', 'fairness', 'ethics']
  },
  {
    id: 'fc-aiml-036',
    front: 'Explainable AI (XAI): What is it, and why is it important?',
    back: 'XAI: Make AI decisions transparent & understandable. Enables compliance; builds trust; debugs models; ensures ethics. LIME, SHAP, attention visualization',
    category: 'AI & ML',
    source: 'AI Ethics',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['explainability', 'xai', 'transparency']
  },
  {
    id: 'fc-aiml-037',
    front: 'What are key principles for responsible AI development?',
    back: 'Ensure fairness, transparency, privacy, safety, accountability, human oversight, and beneficence. Implement AI governance frameworks',
    category: 'AI & ML',
    source: 'AI Ethics',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['responsible-ai', 'ethics', 'governance']
  },
  {
    id: 'fc-aiml-038',
    front: 'Constitutional AI: What is it and how does it train AI?',
    back: 'Train AI using principles (constitution), not just human feedback. Model critiques/revises; train on self-improved outputs; scalable; encode values',
    category: 'AI & ML',
    source: 'AI Safety',
    pathwayId: 'ai-ml',
    difficulty: 'advanced',
    tags: ['constitutional-ai', 'alignment', 'anthropic']
  },
  {
    id: 'fc-aiml-039',
    front: 'Compare PyTorch & TensorFlow\'s key features',
    back: 'PyTorch: dynamic graphs, Pythonic, research-focused; TensorFlow: static (eager mode exists), TensorBoard, production-strong. Both support GPU, distributed & mobile deployment',
    category: 'AI & ML',
    source: 'ML Frameworks',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['pytorch', 'tensorflow', 'frameworks']
  },
  {
    id: 'fc-aiml-040',
    front: 'What is Hugging Face\'s core mission and key offerings in ML?',
    back: 'Share ML models and datasets. Use Transformers; access the Model Hub, Datasets, Spaces; tokenize quickly. Democratize model access',
    category: 'AI & ML',
    source: 'ML Frameworks',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['hugging-face', 'transformers', 'open-source']
  },
  {
    id: 'fc-aiml-041',
    front: 'Transfer learning: What is it & why is it effective?',
    back: 'Use a pre-trained model for a new, related task. Freeze early layers; fine-tune later layers. Less data needed; train faster; perform better',
    category: 'AI & ML',
    source: 'ML Techniques',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['transfer-learning', 'pretrained-models', 'fine-tuning']
  },
  {
    id: 'fc-aiml-042',
    front: 'Define MLOps and its primary purposes for ML systems',
    back: 'Apply DevOps to ML; Ensure reproducibility, collaboration, and reliable deployment. Track data/experiments/models; implement CI/CD pipelines; monitor models',
    category: 'AI & ML',
    source: 'ML Engineering',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['mlops', 'deployment', 'engineering']
  },
  {
    id: 'fc-aiml-043',
    front: 'How do AI image generators (DALL-E, Midjourney) work?',
    back: 'Use diffusion models: Train to denoise images; Generate by iteratively denoising pure noise guided by text. Examples: Stable Diffusion, DALL-E 3. Applications: Art, design',
    category: 'AI & ML',
    source: 'AI Applications',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['image-generation', 'diffusion', 'generative-ai']
  },
  {
    id: 'fc-aiml-044',
    front: 'Define computer vision. What are some of its major applications?',
    back: 'Enable machines to \'see\'. Apply it to image classification; object detection; semantic segmentation; face recognition; OCR. Use in vehicles, medicine, surveillance, AR, QC',
    category: 'AI & ML',
    source: 'AI Applications',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['computer-vision', 'image-processing', 'applications']
  },
  {
    id: 'fc-aiml-045',
    front: 'What is Natural Language Processing (NLP)? List key tasks',
    back: 'NLP lets machines understand/generate language. Tasks: classify text; recognize entities; translate; answer questions; summarize; generate text',
    category: 'AI & ML',
    source: 'AI Applications',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['nlp', 'language', 'applications']
  },
  {
    id: 'fc-aiml-046',
    front: 'How does AI apply to healthcare?',
    back: 'Detect tumors; discover drugs via modeling; assist clinical decisions; automate admin; personalize genomics; enable robotic surgery; face regulatory hurdles',
    category: 'AI & ML',
    source: 'AI Applications',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['healthcare', 'medical-ai', 'applications']
  },
  {
    id: 'fc-aiml-047',
    front: 'How does AI impact job markets economically?',
    back: 'AI automates tasks; expect job displacement and creation. Adapt skills; focus on AI-augmented roles',
    category: 'AI & ML',
    source: 'AI & Society',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['employment', 'economics', 'society']
  },
  {
    id: 'fc-aiml-048',
    front: 'AI agents: What are they & how do they boost LLM abilities?',
    back: 'Agents extend LLMs by acting and using tools. Plan; use tools like APIs/code; remember state; reflect. Enable complex workflows',
    category: 'AI & ML',
    source: 'AI Applications',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['ai-agents', 'tools', 'llm']
  },
  {
    id: 'fc-aiml-049',
    front: 'Define Artificial General Intelligence (AGI) and its significance',
    back: 'AGI: AI with human-level cognition across all domains. Significance: Transformative economic impact; existential considerations; demand robust alignment',
    category: 'AI & ML',
    source: 'AI Future',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['agi', 'future', 'ai-safety']
  },
  {
    id: 'fc-aiml-050',
    front: 'What are the major limitations impacting large language models (LLMs)?',
    back: 'LLMs hallucinate, reason poorly, lack memory/grounding, have knowledge cutoffs, are prompt sensitive, & resource intensive; Research addresses each',
    category: 'AI & ML',
    source: 'Large Language Models',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['llm', 'limitations', 'challenges']
  }
];
