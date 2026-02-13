import type { PathwayLesson } from "@/types";

export const bioLessonsLevel1: PathwayLesson[] = [
  {
    id: "bio-001",
    title: "Welcome to Life's Grand Story",
    type: "intro",
    duration: 10,
    xpReward: 100,
    content: {
      overview: "Discover how life evolved from simple molecules to the incredible diversity we see today over 3.8 billion years.",
      mainContent: `## The Most Extraordinary Journey

You are the product of an unbroken chain of life stretching back 3.8 billion years. Every one of your ancestors, from the first self-replicating molecule to your parents, survived long enough to reproduce. The odds of your existence are astronomically small, yet here you are.

**Biology is the study of life** — how it works, how it evolved, and how it continues to adapt and change. Evolution by natural selection, discovered independently by Charles Darwin and Alfred Russel Wallace, is the unifying principle that explains the diversity of life on Earth.

Consider this stunning fact: you share approximately 99% of your DNA with chimpanzees, 90% with cats, 60% with fruit flies, and even 50% with bananas. This is not coincidence — it is evidence of common ancestry. All life on Earth descended from a single common ancestor, a microbe that lived billions of years ago.

> "Nothing in biology makes sense except in the light of evolution." — Theodosius Dobzhansky

The story of life is written in DNA, the molecule of heredity. Your genome contains roughly 3 billion base pairs of DNA — if you could read it at one letter per second, it would take you 95 years to finish. Yet this entire instruction manual fits inside a cell nucleus smaller than the period at the end of this sentence.

**Evolution is not just theory; it is observed fact.** We have witnessed bacteria evolving antibiotic resistance in real-time, observed new species emerging in isolated island populations, and documented fossil transitions showing fish evolving into land animals.

In this pathway, you will explore natural selection, genetics, molecular biology, and the mechanisms that have shaped life for billions of years. You will understand not just what life is, but how it came to be this way.`,
      keyTakeaway: "You are the current link in an unbroken chain of life 3.8 billion years long, connected to all living things through common ancestry.",
      actionItem: "Look at your hand. The five-digit pattern you see evolved from the fins of ancient fish 375 million years ago. The same pattern appears in bats' wings, whales' flippers, and moles' digging claws.",
    },
  },
  {
    id: "bio-002",
    title: "Darwin's Dangerous Idea",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Understand natural selection, the elegant mechanism that explains how life evolves without any guiding intelligence.",
      mainContent: `## The Power of Small Changes

In 1835, Charles Darwin visited the Galápagos Islands and observed finches with beaks of different shapes. Each beak was perfectly suited to its food source — some for cracking seeds, others for catching insects. Darwin realized these finches had descended from a common ancestor, their beaks modified over generations to fit different ecological niches.

**Natural selection operates through four simple principles:**

1. **Variation**: Individuals in a population differ from one another
2. **Heredity**: Traits are passed from parents to offspring
3. **Differential survival**: Some variants survive and reproduce better than others
4. **Accumulation**: Advantageous traits become more common over generations

The mechanism is elegant in its simplicity. Imagine a population of beetles where some are green and others brown. Birds can spot green beetles more easily on brown tree bark, so they get eaten more often. Brown beetles survive longer and have more offspring. Over generations, the population becomes predominantly brown — not because individual beetles change color, but because brown beetles leave more descendants.

**The timescales are vast.** Small changes accumulate over millions of years. The evolution of the eye, often cited as too complex to evolve, has been modeled to require only 364,000 generations under realistic assumptions — a geological blink of an eye.

> Darwin delayed publishing his theory for 20 years, knowing its implications would shock Victorian society. When Alfred Russel Wallace independently conceived the same idea, Darwin was finally compelled to publish "On the Origin of Species" in 1859.

**Evidence for evolution is overwhelming**: Fossil records showing transitional forms like Tiktaalik (fish-to-tetrapod) and Archaeopteryx (dinosaur-to-bird), vestigial structures like whale hip bones and human tailbones, DNA similarities revealing family trees, and directly observed evolution in bacteria and insects.

Evolution has no goal or direction. It is not progress toward perfection, but adaptation to current environments. Species do not evolve "for" future needs — they survive with what works now.`,
      keyTakeaway: "Natural selection is an automatic process requiring no foresight or intelligence, yet it has produced all the complexity and diversity of life on Earth.",
      actionItem: "Research the evolution of antibiotic resistance in bacteria. This is natural selection happening in real-time, with each generation taking only 20 minutes.",
    },
  },
  {
    id: "bio-003",
    title: "DNA: The Code of Life",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Explore the molecule that carries genetic information and enables evolution through variation and heredity.",
      mainContent: `## The Most Important Molecule

In 1953, James Watson and Francis Crick (building on Rosalind Franklin's crucial X-ray crystallography work) discovered the double helix structure of DNA. This revelation transformed biology, revealing how genetic information is stored, copied, and transmitted across generations.

**DNA (deoxyribonucleic acid)** is a molecule made of four chemical bases: adenine (A), thymine (T), guanine (G), and cytosine (C). These bases pair specifically — A with T, G with C — forming the rungs of the twisted ladder we call the double helix.

The elegance of DNA's structure immediately suggested how it works. The two strands are complementary — if you know one strand's sequence, you know the other. This allows DNA to replicate: the strands separate, and each serves as a template for building a new partner strand. The result? Two identical DNA molecules from one.

**Genes are segments of DNA** that code for proteins, the molecular machines that do most of the work in cells. The human genome contains approximately 20,000 protein-coding genes, though surprisingly, these genes make up only about 1.5% of the genome. The rest includes regulatory sequences and DNA whose function we are still discovering.

Here is where evolution enters: **DNA replication is not perfect.** Mistakes (mutations) occur roughly once every 10 million base pairs copied. Most mutations are neutral or harmful, but occasionally one provides an advantage. These beneficial mutations spread through populations via natural selection.

> Your DNA mutates at a predictable rate, acting as a molecular clock. By comparing DNA sequences between species, we can estimate when they last shared a common ancestor.

**The genetic code is universal.** The same DNA triplet codes for the same amino acid in bacteria, redwood trees, and humans. This universality is powerful evidence that all life descended from a common ancestor that used this code billions of years ago.

Remarkably, you share about 60% of your genes with fruit flies and 85% with mice. These shared genes perform essential functions that have been conserved across hundreds of millions of years of evolution.`,
      keyTakeaway: "DNA is both the instruction manual for building organisms and the mechanism of heredity that allows evolution to occur through accumulated changes.",
      actionItem: "If you unwound all the DNA in one of your cells, it would stretch about 2 meters. You have approximately 37 trillion cells. That is enough DNA to reach from Earth to the Sun and back 100 times.",
    },
  },
  {
    id: "bio-004",
    title: "Quiz: Natural Selection Fundamentals",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your understanding of how natural selection drives evolutionary change.",
      mainContent: `## Knowledge Check

Verify your grasp of the mechanisms that power evolution.`,
      keyTakeaway: "Natural selection acts on existing variation, favoring traits that increase reproductive success in current environments.",
      quiz: {
        question: "Which statement best explains why natural selection cannot produce features that would be useful in the future but provide no current advantage?",
        options: [
          "Natural selection only acts on existing traits that affect current survival and reproduction, with no foresight for future needs",
          "Evolution is too slow to predict environmental changes",
          "DNA mutations only occur randomly and cannot anticipate future requirements",
          "Species lack the intelligence to plan for future adaptations",
        ],
        correct: 0,
        explanation: "Natural selection is not a forward-looking process. It can only favor traits that provide a reproductive advantage right now. Traits that might be useful in a future environment provide no current benefit and thus will not be selected for. This is why organisms sometimes go extinct when environments change too rapidly — they have not evolved 'for' those changes.",
      },
    },
  },
  {
    id: "bio-005",
    title: "The Tree of Life",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Trace the evolutionary relationships connecting all living organisms through 3.8 billion years of history.",
      mainContent: `## From One Ancestor to Millions of Species

Life on Earth can be visualized as a vast, branching tree. Every species alive today sits at the tip of a branch. Trace any two branches backward, and they eventually meet at a common ancestor. Go back far enough, and all branches converge at the trunk — the last universal common ancestor (LUCA) that lived roughly 3.8 billion years ago.

**The Three Domains of Life** represent the deepest divisions. Bacteria and Archaea are single-celled organisms without nuclei. Eukarya includes all organisms with complex cells containing nuclei — from yeast to redwood trees to humans.

An extraordinary event occurred about 2 billion years ago: **endosymbiosis**. A bacterium that could perform photosynthesis was engulfed by another cell but not digested. Instead, it became a symbiotic partner, eventually evolving into chloroplasts — the organelles that allow plants to capture sunlight. Similarly, oxygen-breathing bacteria became mitochondria, the powerhouses of cells. You carry the descendants of ancient bacteria inside every one of your cells.

**Mass extinctions** have repeatedly pruned the tree of life. The Permian extinction 252 million years ago killed 96% of marine species. The asteroid impact 66 million years ago ended the dinosaurs' reign (except for birds, which are living dinosaurs). Each extinction opened ecological niches for survivors to fill, driving rapid diversification.

Fossil records, comparative anatomy, and DNA sequencing all converge on the same tree of life. For example, humans are more closely related to chimpanzees than chimpanzees are to gorillas — our lineages split only 6-7 million years ago, while the chimp-gorilla split occurred 10 million years ago.

> The evolutionary biologist Theodosius Dobzhansky observed that humans have terrible sinuses because we evolved from ancestors that walked on all fours. Our upright posture changed drainage angles, but evolution works with existing structures, not optimal redesigns.

**You are related to every living thing.** The bacteria in your gut, the trees outside, the birds in the sky — all are your cousins, separated by varying degrees of evolutionary time. This is not metaphor. It is genetic fact.`,
      keyTakeaway: "All life on Earth descended from a single common ancestor, making every organism your relative in a vast family tree spanning billions of years.",
      actionItem: "Visit OneZoom.org, an interactive tree of life. Explore how different species are related and find the common ancestor you share with any organism.",
    },
  },
  {
    id: "bio-006",
    title: "Quiz: Genetics and Heredity",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your knowledge of DNA, genes, and molecular biology.",
      mainContent: `## Knowledge Check

Assess your understanding of the molecular basis of life and heredity.`,
      keyTakeaway: "DNA's structure enables both the storage of genetic information and the variation needed for evolution.",
      quiz: {
        question: "Why is the universality of the genetic code considered strong evidence for common ancestry of all life?",
        options: [
          "All life uses the same DNA triplets to code for the same amino acids, suggesting inheritance from a single ancestor",
          "DNA is the most efficient molecule for storing information",
          "The genetic code is the only possible chemical system for heredity",
          "All organisms need the same proteins to survive",
        ],
        correct: 0,
        explanation: "The genetic code is not the only possible code — there are many theoretical alternatives. The fact that all life on Earth (from bacteria to humans) uses the exact same code suggests we all inherited it from a single common ancestor. If life arose independently multiple times, we would expect different genetic codes.",
      },
    },
  },
  {
    id: "bio-007",
    title: "Evolution in Action: Adaptation and Speciation",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Witness how populations adapt to their environments and how new species arise through evolutionary processes.",
      mainContent: `## Evolution We Can Observe

Evolution is not just ancient history — it happens all around us, continuously. Scientists have documented evolutionary changes in populations within human lifetimes, providing direct evidence of natural selection in action.

**Peppered Moths in Industrial England**: Before the Industrial Revolution, most peppered moths were light-colored, camouflaging them against lichen-covered trees. As soot from factories darkened the trees, light moths became more visible to birds. Within decades, dark-colored moths (a rare variant) became predominant. When air quality improved in the late 20th century, light moths again became common. Evolution in real-time.

**Drug Resistance**: HIV can evolve resistance to antiretroviral drugs in a single patient within months. Malaria parasites evolve chloroquine resistance. Bacteria develop antibiotic resistance so rapidly that the CDC calls it a crisis. These are not hypothetical evolutionary scenarios — they are medical emergencies driven by evolution.

**Speciation** — the formation of new species — occurs when populations become reproductively isolated. Geographic separation is a common cause. Darwin's finches in the Galápagos evolved from a mainland ancestor that colonized different islands. Isolated populations diverged over time, adapting to different food sources. Eventually, they could no longer interbreed, becoming distinct species.

> Biologists Grant and Grant spent 40 years studying finches in the Galápagos, documenting real-time evolution. During a drought in 1977, birds with larger beaks survived better because they could crack harder seeds. Average beak size increased measurably within one generation.

**Ring Species** provide spectacular evidence of gradual speciation. The Ensatina salamanders of California form a ring around the Central Valley. Adjacent populations can interbreed, but at the ring's ends, populations cannot — they have diverged so much they are effectively different species, despite being connected by interfertile populations.

Humans are still evolving. Lactose tolerance in adults evolved within the last 10,000 years in populations that domesticated cattle. High-altitude populations in Tibet evolved genetic adaptations for low oxygen within 3,000 years. Evolution never stops.`,
      keyTakeaway: "Evolution is not just a historical process but an ongoing force that shapes life continuously, observable in real-time from bacteria to humans.",
      actionItem: "Research the Italian wall lizards introduced to Pod Mrčaru island. In just 36 years (about 30 generations), they evolved different head shapes, jaw muscles, and even new digestive structures.",
    },
  },
  {
    id: "bio-008",
    title: "Quiz: Evolutionary Evidence",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your understanding of the evidence supporting evolutionary theory.",
      mainContent: `## Knowledge Check

Verify your grasp of how we know evolution occurs and shapes the diversity of life.`,
      keyTakeaway: "Multiple independent lines of evidence — from fossils to DNA to observed changes — all confirm that evolution is a fact.",
      quiz: {
        question: "What do vestigial structures (like whale hip bones or human wisdom teeth) reveal about evolution?",
        options: [
          "They are remnants of features that were functional in ancestors but have lost most or all function in descendants",
          "They prove that evolution produces imperfect organisms",
          "They show that organisms contain backup structures for future use",
          "They demonstrate that all organisms are still evolving new features",
        ],
        correct: 0,
        explanation: "Vestigial structures are evolutionary leftovers. Whales evolved from land mammals that walked on four legs — their hip bones are remnants of that ancestry. Humans have a tailbone (coccyx) because our ancestors had tails. These structures make no sense from a design perspective but are exactly what we would expect from evolution, which modifies existing structures rather than starting from scratch.",
      },
    },
  },
];
