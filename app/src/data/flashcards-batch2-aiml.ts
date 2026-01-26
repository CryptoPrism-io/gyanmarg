import type { SpacedRepetitionCard } from '@/types';

export const aiMlFlashcards: SpacedRepetitionCard[] = [
  // Machine Learning Fundamentals - Beginner
  {
    id: 'fc-aiml-001',
    front: 'What is the fundamental difference between supervised and unsupervised learning?',
    back: 'Supervised learning uses labeled data where the correct output is known during training (e.g., classifying emails as spam/not spam). Unsupervised learning finds patterns in unlabeled data without predefined outputs (e.g., customer segmentation). The key distinction is the presence or absence of ground truth labels.',
    category: 'AI & ML',
    source: 'ML Fundamentals',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['machine-learning', 'supervised-learning', 'unsupervised-learning']
  },
  {
    id: 'fc-aiml-002',
    front: 'What is overfitting in machine learning, and why is it problematic?',
    back: 'Overfitting occurs when a model learns the training data too well, including noise and outliers, resulting in poor generalization to new data. Signs include high training accuracy but low test accuracy. Solutions include regularization, cross-validation, early stopping, and using more training data.',
    category: 'AI & ML',
    source: 'ML Fundamentals',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['machine-learning', 'overfitting', 'model-training']
  },
  {
    id: 'fc-aiml-003',
    front: 'What is a feature in machine learning?',
    back: 'A feature is an individual measurable property or characteristic of the data used as input to a machine learning model. Features are the variables the model uses to make predictions. Good feature selection and engineering are crucial for model performance. Examples: age, income, pixel values in images.',
    category: 'AI & ML',
    source: 'ML Fundamentals',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['machine-learning', 'features', 'data-preprocessing']
  },
  {
    id: 'fc-aiml-004',
    front: 'What is the purpose of a training, validation, and test split in ML?',
    back: 'Training set (60-80%): Used to train the model. Validation set (10-20%): Used to tune hyperparameters and prevent overfitting during training. Test set (10-20%): Used only once at the end to evaluate final model performance on unseen data. This ensures unbiased evaluation of model generalization.',
    category: 'AI & ML',
    source: 'ML Fundamentals',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['machine-learning', 'data-splitting', 'model-evaluation']
  },
  {
    id: 'fc-aiml-005',
    front: 'What is reinforcement learning and how does it differ from other ML paradigms?',
    back: 'Reinforcement learning involves an agent learning to make decisions by interacting with an environment to maximize cumulative reward. Unlike supervised learning (learns from labeled examples) or unsupervised learning (finds patterns), RL learns through trial and error with delayed feedback. Key concepts: agent, environment, state, action, reward, policy.',
    category: 'AI & ML',
    source: 'ML Fundamentals',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['reinforcement-learning', 'machine-learning', 'agent']
  },
  {
    id: 'fc-aiml-006',
    front: 'What is the bias-variance tradeoff in machine learning?',
    back: 'Bias: Error from oversimplified assumptions (underfitting). Variance: Error from sensitivity to training data fluctuations (overfitting). The tradeoff: reducing one often increases the other. Optimal models balance both to minimize total error. High bias = underfitting, high variance = overfitting.',
    category: 'AI & ML',
    source: 'ML Fundamentals',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['machine-learning', 'bias-variance', 'model-optimization']
  },
  {
    id: 'fc-aiml-007',
    front: 'What is gradient descent and why is it fundamental to ML?',
    back: 'Gradient descent is an optimization algorithm that iteratively adjusts model parameters to minimize a loss function. It calculates the gradient (direction of steepest increase) and moves in the opposite direction. Variants include: Batch GD (all data), Stochastic GD (one sample), Mini-batch GD (subset). Learning rate controls step size.',
    category: 'AI & ML',
    source: 'ML Fundamentals',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['machine-learning', 'optimization', 'gradient-descent']
  },
  {
    id: 'fc-aiml-008',
    front: 'What is cross-validation and when should you use it?',
    back: 'Cross-validation is a technique to assess model generalization by partitioning data into multiple train-test splits. K-fold CV divides data into k subsets, training on k-1 and testing on 1, rotating through all folds. Use when: limited data, comparing models, tuning hyperparameters, or needing robust performance estimates.',
    category: 'AI & ML',
    source: 'ML Fundamentals',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['machine-learning', 'cross-validation', 'model-evaluation']
  },

  // Neural Networks and Deep Learning
  {
    id: 'fc-aiml-009',
    front: 'What is a neural network and what are its basic components?',
    back: 'A neural network is a computational model inspired by biological neurons. Components: 1) Input layer (receives data), 2) Hidden layers (process information), 3) Output layer (produces predictions), 4) Weights (connection strengths), 5) Biases (threshold adjustments), 6) Activation functions (introduce non-linearity).',
    category: 'AI & ML',
    source: 'Deep Learning',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['neural-networks', 'deep-learning', 'architecture']
  },
  {
    id: 'fc-aiml-010',
    front: 'What is an activation function and why is it necessary?',
    back: 'An activation function introduces non-linearity into neural networks, enabling them to learn complex patterns. Without it, multiple layers would collapse into a single linear transformation. Common types: ReLU (max(0,x)), Sigmoid (0-1 range), Tanh (-1 to 1), Softmax (probability distribution for classification).',
    category: 'AI & ML',
    source: 'Deep Learning',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['neural-networks', 'activation-functions', 'non-linearity']
  },
  {
    id: 'fc-aiml-011',
    front: 'What is backpropagation and how does it enable neural network training?',
    back: 'Backpropagation is the algorithm for computing gradients in neural networks. It propagates the error backward from output to input layers using the chain rule of calculus. Steps: 1) Forward pass (compute predictions), 2) Calculate loss, 3) Backward pass (compute gradients), 4) Update weights using gradient descent.',
    category: 'AI & ML',
    source: 'Deep Learning',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['neural-networks', 'backpropagation', 'training']
  },
  {
    id: 'fc-aiml-012',
    front: 'What is a Convolutional Neural Network (CNN) and what makes it effective for images?',
    back: 'CNNs are specialized neural networks for grid-like data (images). Key features: 1) Convolutional layers detect local patterns using filters, 2) Pooling layers reduce spatial dimensions, 3) Parameter sharing reduces computation, 4) Translation invariance (detects patterns regardless of position). Used in image classification, object detection, facial recognition.',
    category: 'AI & ML',
    source: 'Deep Learning',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['cnn', 'computer-vision', 'deep-learning']
  },
  {
    id: 'fc-aiml-013',
    front: 'What is a Recurrent Neural Network (RNN) and what problem does it solve?',
    back: 'RNNs are neural networks designed for sequential data with temporal dependencies. They maintain a hidden state that captures information from previous timesteps. Problems: vanishing/exploding gradients limit long-term memory. Used for: time series, natural language, speech. Improved variants: LSTM and GRU address gradient issues.',
    category: 'AI & ML',
    source: 'Deep Learning',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['rnn', 'sequential-data', 'deep-learning']
  },
  {
    id: 'fc-aiml-014',
    front: 'What is the vanishing gradient problem and how do LSTMs address it?',
    back: 'Vanishing gradients occur when gradients become extremely small during backpropagation through many layers, preventing learning of long-range dependencies. LSTMs (Long Short-Term Memory) solve this with a cell state and gating mechanisms: forget gate (what to discard), input gate (what to store), output gate (what to output). This allows gradients to flow unchanged.',
    category: 'AI & ML',
    source: 'Deep Learning',
    pathwayId: 'ai-ml',
    difficulty: 'advanced',
    tags: ['lstm', 'vanishing-gradient', 'deep-learning']
  },
  {
    id: 'fc-aiml-015',
    front: 'What is dropout and how does it prevent overfitting?',
    back: 'Dropout is a regularization technique that randomly sets a fraction of neuron activations to zero during training. Benefits: 1) Prevents co-adaptation of neurons, 2) Acts as ensemble of sub-networks, 3) Forces redundant representations. Typically 20-50% dropout rate. Disabled during inference (predictions scaled accordingly).',
    category: 'AI & ML',
    source: 'Deep Learning',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['dropout', 'regularization', 'deep-learning']
  },
  {
    id: 'fc-aiml-016',
    front: 'What is batch normalization and why is it important?',
    back: 'Batch normalization normalizes layer inputs across a mini-batch during training. Benefits: 1) Accelerates training by reducing internal covariate shift, 2) Acts as regularization, 3) Allows higher learning rates, 4) Reduces sensitivity to initialization. Applied before or after activation functions, with learnable scale and shift parameters.',
    category: 'AI & ML',
    source: 'Deep Learning',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['batch-normalization', 'training', 'deep-learning']
  },

  // Transformers and Attention
  {
    id: 'fc-aiml-017',
    front: 'What is the attention mechanism and why was it revolutionary?',
    back: 'Attention allows models to focus on relevant parts of the input when producing output. It computes weighted combinations of values based on query-key similarity. Revolution: 1) Handles long-range dependencies better than RNNs, 2) Enables parallelization, 3) Provides interpretability through attention weights. Foundation of modern LLMs.',
    category: 'AI & ML',
    source: 'Transformers',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['attention', 'transformers', 'nlp']
  },
  {
    id: 'fc-aiml-018',
    front: 'What are Query, Key, and Value in the attention mechanism?',
    back: 'In attention: Query (Q) represents what we are looking for, Key (K) represents what information is available, Value (V) represents the actual content to retrieve. Attention scores = softmax(QK^T/sqrt(d_k)) * V. This computes how much each value contributes based on query-key similarity, scaled for stability.',
    category: 'AI & ML',
    source: 'Transformers',
    pathwayId: 'ai-ml',
    difficulty: 'advanced',
    tags: ['attention', 'transformers', 'qkv']
  },
  {
    id: 'fc-aiml-019',
    front: 'What is multi-head attention and what advantage does it provide?',
    back: 'Multi-head attention runs multiple attention operations in parallel with different learned projections, then concatenates results. Benefits: 1) Attends to different representation subspaces, 2) Captures various types of relationships simultaneously, 3) Different heads can focus on different aspects (syntax, semantics, position). Typically 8-16 heads in modern models.',
    category: 'AI & ML',
    source: 'Transformers',
    pathwayId: 'ai-ml',
    difficulty: 'advanced',
    tags: ['multi-head-attention', 'transformers', 'architecture']
  },
  {
    id: 'fc-aiml-020',
    front: 'What is positional encoding in Transformers and why is it needed?',
    back: 'Positional encoding adds information about token positions since Transformers process all tokens in parallel (no inherent sequence order). Original paper used sinusoidal functions of different frequencies. Modern models often use learned positional embeddings or relative positional encodings (RoPE, ALiBi). Essential for understanding word order.',
    category: 'AI & ML',
    source: 'Transformers',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['positional-encoding', 'transformers', 'sequence']
  },
  {
    id: 'fc-aiml-021',
    front: 'How does the Transformer architecture differ from RNNs for sequence processing?',
    back: 'Transformers: 1) Process entire sequence in parallel (faster training), 2) Use self-attention for dependencies (any distance equally), 3) Fixed context window. RNNs: 1) Process sequentially (slower), 2) Hidden state accumulates information (struggles with long range), 3) Theoretically unlimited context. Transformers dominate due to parallelization and better long-range modeling.',
    category: 'AI & ML',
    source: 'Transformers',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['transformers', 'rnn', 'comparison']
  },

  // Large Language Models
  {
    id: 'fc-aiml-022',
    front: 'What is a Large Language Model (LLM) and how is it trained?',
    back: 'LLMs are neural networks with billions of parameters trained on massive text corpora to predict next tokens. Training phases: 1) Pre-training: self-supervised learning on internet text, 2) Fine-tuning: task-specific or instruction following, 3) RLHF: human feedback alignment. Emergent capabilities appear at scale. Examples: GPT-4, Claude, Llama.',
    category: 'AI & ML',
    source: 'Large Language Models',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['llm', 'training', 'gpt']
  },
  {
    id: 'fc-aiml-023',
    front: 'What is RLHF (Reinforcement Learning from Human Feedback)?',
    back: 'RLHF is a technique to align LLMs with human preferences. Steps: 1) Collect human comparisons of model outputs, 2) Train a reward model on these preferences, 3) Use the reward model to fine-tune the LLM via reinforcement learning (PPO). Results in more helpful, harmless, and honest responses. Key for ChatGPT, Claude success.',
    category: 'AI & ML',
    source: 'Large Language Models',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['rlhf', 'alignment', 'llm']
  },
  {
    id: 'fc-aiml-024',
    front: 'What are tokens in the context of LLMs?',
    back: 'Tokens are the basic units LLMs process - subword pieces that balance vocabulary size and meaning. Common tokenizers: BPE, WordPiece, SentencePiece. Examples: "unhappiness" might become ["un", "happiness"]. Important because: 1) Context windows are measured in tokens, 2) Pricing based on tokens, 3) Affects model understanding of rare words.',
    category: 'AI & ML',
    source: 'Large Language Models',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['tokenization', 'llm', 'nlp']
  },
  {
    id: 'fc-aiml-025',
    front: 'What is the context window in LLMs and why does it matter?',
    back: 'The context window is the maximum number of tokens an LLM can process in a single interaction. Limits: affects how much text/conversation history the model can reference. Ranges from 4K (early GPT-3.5) to 128K+ (GPT-4 Turbo, Claude). Longer contexts enable: document analysis, extended conversations, complex reasoning with more information.',
    category: 'AI & ML',
    source: 'Large Language Models',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['context-window', 'llm', 'limitations']
  },
  {
    id: 'fc-aiml-026',
    front: 'What is emergent behavior in large language models?',
    back: 'Emergent behaviors are capabilities that appear unpredictably as models scale, not explicitly trained for. Examples: few-shot learning, chain-of-thought reasoning, code generation, mathematical reasoning. Appear at certain parameter/data thresholds. Challenges: hard to predict, difficult to control. Active research area in AI safety.',
    category: 'AI & ML',
    source: 'Large Language Models',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['emergence', 'scaling', 'llm']
  },
  {
    id: 'fc-aiml-027',
    front: 'What is the difference between fine-tuning and prompting an LLM?',
    back: 'Fine-tuning: modifies model weights on new data, requires compute/expertise, permanent changes, good for specialized domains. Prompting: guides model behavior through input text, no training needed, temporary per-request, flexible but limited by base model capabilities. Modern trend: sophisticated prompting often preferred over fine-tuning due to cost and flexibility.',
    category: 'AI & ML',
    source: 'Large Language Models',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['fine-tuning', 'prompting', 'llm']
  },
  {
    id: 'fc-aiml-028',
    front: 'What is hallucination in AI language models?',
    back: 'Hallucination is when LLMs generate confident but factually incorrect or fabricated information. Causes: 1) Training on imperfect data, 2) Optimizing for plausibility over accuracy, 3) No real-time fact-checking. Mitigation: RAG (retrieval augmented generation), grounding, chain-of-thought reasoning, uncertainty quantification, human verification.',
    category: 'AI & ML',
    source: 'Large Language Models',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['hallucination', 'llm', 'safety']
  },

  // Prompt Engineering
  {
    id: 'fc-aiml-029',
    front: 'What is chain-of-thought (CoT) prompting?',
    back: 'Chain-of-thought prompting encourages LLMs to show reasoning steps before giving final answers. Methods: 1) Add "Let\'s think step by step", 2) Provide few-shot examples with reasoning, 3) Ask for explanation before answer. Benefits: improved accuracy on complex tasks, interpretable reasoning, reduced errors. Particularly effective for math, logic, and multi-step problems.',
    category: 'AI & ML',
    source: 'Prompt Engineering',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['prompt-engineering', 'chain-of-thought', 'llm']
  },
  {
    id: 'fc-aiml-030',
    front: 'What is few-shot learning in the context of LLMs?',
    back: 'Few-shot learning provides a small number of examples in the prompt to guide model behavior without fine-tuning. Zero-shot: no examples, one-shot: single example, few-shot: 2-10 examples. Benefits: quick adaptation, no training needed. Best practices: diverse representative examples, consistent format, clear patterns for the model to follow.',
    category: 'AI & ML',
    source: 'Prompt Engineering',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['few-shot', 'prompt-engineering', 'llm']
  },
  {
    id: 'fc-aiml-031',
    front: 'What is a system prompt and how does it differ from user prompts?',
    back: 'System prompt: sets context, behavior, and constraints for the AI at the start of a conversation (e.g., "You are a helpful coding assistant"). User prompt: the actual queries/requests from users. System prompts establish persistent guidelines, while user prompts are individual interactions. System prompts shape personality, capabilities, and safety guardrails.',
    category: 'AI & ML',
    source: 'Prompt Engineering',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['system-prompt', 'prompt-engineering', 'llm']
  },
  {
    id: 'fc-aiml-032',
    front: 'What is RAG (Retrieval-Augmented Generation)?',
    back: 'RAG combines LLMs with external knowledge retrieval. Process: 1) Embed documents into vector database, 2) At query time, retrieve relevant chunks, 3) Include retrieved context in prompt, 4) LLM generates answer grounded in retrieved information. Benefits: reduces hallucinations, enables knowledge updates without retraining, provides source attribution.',
    category: 'AI & ML',
    source: 'Prompt Engineering',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['rag', 'retrieval', 'llm']
  },
  {
    id: 'fc-aiml-033',
    front: 'What is prompt injection and why is it a security concern?',
    back: 'Prompt injection is an attack where malicious input manipulates LLM behavior by overriding or bypassing system instructions. Types: direct injection (user input contains instructions), indirect injection (external data contains hidden prompts). Risks: data leakage, unauthorized actions, bypassing safety filters. Mitigations: input sanitization, output filtering, least privilege, human-in-the-loop.',
    category: 'AI & ML',
    source: 'AI Safety',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['prompt-injection', 'security', 'llm']
  },

  // AI Ethics and Safety
  {
    id: 'fc-aiml-034',
    front: 'What is AI alignment and why is it considered crucial?',
    back: 'AI alignment ensures AI systems pursue goals that match human values and intentions. Challenges: 1) Specifying human values precisely, 2) Avoiding reward hacking, 3) Maintaining alignment at superhuman levels, 4) Value lock-in concerns. Approaches: RLHF, Constitutional AI, debate, interpretability research. Critical for preventing unintended harmful behaviors as AI capabilities grow.',
    category: 'AI & ML',
    source: 'AI Safety',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['alignment', 'ai-safety', 'ethics']
  },
  {
    id: 'fc-aiml-035',
    front: 'What is algorithmic bias and how does it manifest in AI systems?',
    back: 'Algorithmic bias occurs when AI systems produce unfair outcomes for certain groups. Sources: 1) Biased training data reflecting historical discrimination, 2) Unrepresentative datasets, 3) Biased labeling, 4) Proxy variables encoding protected characteristics. Examples: facial recognition accuracy disparities, biased hiring algorithms, discriminatory lending decisions. Requires diverse teams, auditing, and fairness metrics.',
    category: 'AI & ML',
    source: 'AI Ethics',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['bias', 'fairness', 'ethics']
  },
  {
    id: 'fc-aiml-036',
    front: 'What is explainable AI (XAI) and why does it matter?',
    back: 'XAI aims to make AI decision-making transparent and understandable to humans. Importance: 1) Regulatory compliance (GDPR right to explanation), 2) Building trust, 3) Debugging and improving models, 4) Ethical accountability. Techniques: LIME, SHAP, attention visualization, concept-based explanations. Trade-off: simpler models are more interpretable but may be less accurate.',
    category: 'AI & ML',
    source: 'AI Ethics',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['explainability', 'xai', 'transparency']
  },
  {
    id: 'fc-aiml-037',
    front: 'What are the key principles of responsible AI development?',
    back: 'Key principles: 1) Fairness: equitable treatment across groups, 2) Transparency: explainable decisions, 3) Privacy: data protection and consent, 4) Safety: robust and secure systems, 5) Accountability: clear responsibility for outcomes, 6) Human oversight: meaningful human control, 7) Beneficence: net positive societal impact. Organizations should implement governance frameworks.',
    category: 'AI & ML',
    source: 'AI Ethics',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['responsible-ai', 'ethics', 'governance']
  },
  {
    id: 'fc-aiml-038',
    front: 'What is Constitutional AI and how does it work?',
    back: 'Constitutional AI (Anthropic) trains AI systems using a set of principles (constitution) rather than just human feedback. Process: 1) Model critiques its own outputs against principles, 2) Revises responses to align with constitution, 3) Trains on self-improved outputs. Benefits: more scalable than pure RLHF, principles can encode nuanced values, reduces reliance on human labelers.',
    category: 'AI & ML',
    source: 'AI Safety',
    pathwayId: 'ai-ml',
    difficulty: 'advanced',
    tags: ['constitutional-ai', 'alignment', 'anthropic']
  },

  // AI Tools and Frameworks
  {
    id: 'fc-aiml-039',
    front: 'What are the key differences between PyTorch and TensorFlow?',
    back: 'PyTorch: dynamic computation graphs, Pythonic feel, preferred in research, easier debugging, TorchScript for production. TensorFlow: static graphs (now eager mode too), TensorBoard visualization, TF Serving for deployment, broader production ecosystem. Both support: GPU acceleration, distributed training, mobile deployment. PyTorch gaining popularity; TensorFlow strong in enterprise.',
    category: 'AI & ML',
    source: 'ML Frameworks',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['pytorch', 'tensorflow', 'frameworks']
  },
  {
    id: 'fc-aiml-040',
    front: 'What is Hugging Face and why is it important in the ML ecosystem?',
    back: 'Hugging Face is the leading platform for sharing ML models and datasets. Key offerings: 1) Transformers library: unified API for pretrained models, 2) Model Hub: thousands of open-source models, 3) Datasets library: standardized dataset access, 4) Spaces: ML app hosting, 5) Tokenizers: fast tokenization. Democratizes access to state-of-the-art models.',
    category: 'AI & ML',
    source: 'ML Frameworks',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['hugging-face', 'transformers', 'open-source']
  },
  {
    id: 'fc-aiml-041',
    front: 'What is transfer learning and why is it so powerful?',
    back: 'Transfer learning uses knowledge from a model trained on one task to improve performance on a different but related task. Process: take pretrained model (e.g., ImageNet for vision, BERT for NLP), freeze early layers, fine-tune later layers on new task. Benefits: requires less data, faster training, better performance on small datasets. Foundation of modern AI applications.',
    category: 'AI & ML',
    source: 'ML Techniques',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['transfer-learning', 'pretrained-models', 'fine-tuning']
  },
  {
    id: 'fc-aiml-042',
    front: 'What is MLOps and what problems does it solve?',
    back: 'MLOps applies DevOps principles to ML systems. Key components: 1) Data versioning and management, 2) Experiment tracking, 3) Model versioning and registry, 4) CI/CD for ML pipelines, 5) Monitoring and observability, 6) Feature stores. Solves: reproducibility, collaboration, deployment reliability, model drift detection. Tools: MLflow, Kubeflow, Weights & Biases.',
    category: 'AI & ML',
    source: 'ML Engineering',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['mlops', 'deployment', 'engineering']
  },

  // Practical AI Applications
  {
    id: 'fc-aiml-043',
    front: 'How does AI-powered image generation (like DALL-E, Midjourney) work?',
    back: 'Modern image generation uses diffusion models: 1) Train model to denoise images (reverse gradual noise addition), 2) At generation, start from pure noise, 3) Iteratively denoise guided by text embedding, 4) Text understanding via CLIP or similar. Variants: Stable Diffusion (open source), DALL-E 3, Midjourney. Applications: art, design, advertising, prototyping.',
    category: 'AI & ML',
    source: 'AI Applications',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['image-generation', 'diffusion', 'generative-ai']
  },
  {
    id: 'fc-aiml-044',
    front: 'What is computer vision and what are its main applications?',
    back: 'Computer vision enables machines to interpret visual information. Key tasks: 1) Image classification: categorizing images, 2) Object detection: locating and identifying objects, 3) Semantic segmentation: pixel-level classification, 4) Face recognition, 5) OCR: text extraction. Applications: autonomous vehicles, medical imaging, surveillance, augmented reality, quality control.',
    category: 'AI & ML',
    source: 'AI Applications',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['computer-vision', 'image-processing', 'applications']
  },
  {
    id: 'fc-aiml-045',
    front: 'What is Natural Language Processing (NLP) and its major tasks?',
    back: 'NLP enables machines to understand and generate human language. Major tasks: 1) Text classification (sentiment, topic), 2) Named entity recognition, 3) Machine translation, 4) Question answering, 5) Summarization, 6) Text generation. Evolution: rule-based to statistical to deep learning to transformers. LLMs now achieve human-level performance on many NLP benchmarks.',
    category: 'AI & ML',
    source: 'AI Applications',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['nlp', 'language', 'applications']
  },
  {
    id: 'fc-aiml-046',
    front: 'How is AI being used in healthcare?',
    back: 'Healthcare AI applications: 1) Medical imaging: detecting tumors, diseases from X-rays/MRIs, 2) Drug discovery: molecular modeling, candidate screening, 3) Clinical decision support: diagnosis assistance, 4) Administrative: scheduling, documentation, 5) Genomics: personalized medicine, 6) Robot-assisted surgery. Challenges: regulatory approval, data privacy, liability, integration with workflows.',
    category: 'AI & ML',
    source: 'AI Applications',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['healthcare', 'medical-ai', 'applications']
  },

  // AI in Business and Society
  {
    id: 'fc-aiml-047',
    front: 'What is the economic impact of AI on employment?',
    back: 'AI\'s employment impact is complex: 1) Automation: routine tasks most affected (data entry, basic analysis), 2) Augmentation: AI enhances human capabilities in many jobs, 3) Creation: new roles emerge (prompt engineers, AI trainers), 4) Transformation: job requirements shift toward AI collaboration skills. Studies suggest net job growth but significant transition challenges and inequality concerns.',
    category: 'AI & ML',
    source: 'AI & Society',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['employment', 'economics', 'society']
  },
  {
    id: 'fc-aiml-048',
    front: 'What are AI agents and how do they extend LLM capabilities?',
    back: 'AI agents are LLMs augmented with ability to take actions and use tools. Components: 1) Planning: breaking tasks into steps, 2) Tool use: APIs, code execution, search, 3) Memory: maintaining state across interactions, 4) Reflection: evaluating and correcting actions. Examples: AutoGPT, Claude with tools, Microsoft Copilot. Enable complex multi-step workflows beyond simple Q&A.',
    category: 'AI & ML',
    source: 'AI Applications',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['ai-agents', 'tools', 'llm']
  },

  // Future of AI
  {
    id: 'fc-aiml-049',
    front: 'What is Artificial General Intelligence (AGI) and what would it mean?',
    back: 'AGI refers to AI systems with human-level cognitive abilities across all domains, capable of learning any intellectual task humans can. Current AI is narrow (specialized). AGI would: transfer knowledge between domains, reason abstractly, adapt to novel situations. Implications: transformative economic impact, existential considerations, need for robust alignment. Timeline estimates vary widely (years to decades).',
    category: 'AI & ML',
    source: 'AI Future',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['agi', 'future', 'ai-safety']
  },
  {
    id: 'fc-aiml-050',
    front: 'What are the current limitations of large language models?',
    back: 'Key LLM limitations: 1) Hallucinations: generating false information confidently, 2) Limited reasoning: struggle with novel multi-step logic, 3) No persistent memory: context window constraints, 4) Knowledge cutoff: no real-time information, 5) Lack of grounding: no physical world understanding, 6) Prompt sensitivity: small changes affect outputs, 7) Resource intensive: high compute costs. Active research addresses each limitation.',
    category: 'AI & ML',
    source: 'Large Language Models',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['llm', 'limitations', 'challenges']
  }
];
