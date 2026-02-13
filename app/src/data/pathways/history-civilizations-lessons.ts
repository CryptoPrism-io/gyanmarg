import type { PathwayLesson } from "@/types";

export const histLessonsLevel1: PathwayLesson[] = [
  {
    id: "hist-001",
    title: "What Makes a Civilization?",
    type: "intro",
    duration: 10,
    xpReward: 100,
    content: {
      overview: "Discover the essential ingredients that transform scattered tribes into enduring civilizations.",
      mainContent: `## The Birth of Complexity

When archaeologists V. Gordon Childe examined the ruins of ancient Mesopotamia in the 1930s, he identified a revolutionary pattern. Civilizations didn't emerge randomly—they followed a blueprint.

**The Six Pillars of Civilization:**

1. **Urban Centers** - Dense populations creating division of labor
2. **Surplus Agriculture** - Food security enabling specialization
3. **Writing Systems** - Record-keeping and cultural transmission
4. **Monumental Architecture** - Temples, pyramids, walls demonstrating organized labor
5. **Social Stratification** - Classes, hierarchies, governance
6. **Advanced Technology** - Metallurgy, irrigation, mathematics

> "The urban revolution was as momentous as the agricultural revolution that preceded it." — V. Gordon Childe

Consider the Sumerians around 3500 BCE. They didn't just build cities—they invented the wheel, developed cuneiform writing, created legal codes, and established trade networks spanning hundreds of miles. Within generations, they transformed from village farmers into administrators, priests, merchants, and scribes.

But here's the paradox: every civilization that has risen has also fallen. The Roman Empire lasted 1000 years. The Mayans built magnificent cities, then abandoned them. Egypt's pharaohs ruled for 3000 years before fading into history.

Understanding what builds civilizations also reveals what destroys them—resource depletion, environmental degradation, internal corruption, external invasion, or simply the inability to adapt to change.`,
      keyTakeaway: "Civilizations emerge when societies develop surplus resources, complex organization, and cultural transmission systems—but their survival depends on continuous adaptation.",
      actionItem: "Identify which of the six pillars you see strongest in your own society today. Which seems most vulnerable?",
    },
  },
  {
    id: "hist-002",
    title: "The River Valley Revolution",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Four great rivers gave birth to humanity's first civilizations—and the patterns they established echo through history.",
      mainContent: `## Where Civilization Began

Between 4000-2500 BCE, something extraordinary happened along four river systems. Independent of each other, complex societies emerged that would define human organization for millennia.

**The Four Cradles:**

- **Mesopotamia** (Tigris-Euphrates) - "Land between rivers," birthplace of writing, law, and urban planning
- **Egypt** (Nile) - Predictable floods enabled 3000 years of stable pharaonic rule
- **Indus Valley** (Indus River) - Advanced urban planning with sophisticated drainage systems
- **China** (Yellow River) - Isolated geography created unique cultural continuity

The pattern is striking. Rivers provided water, fertile soil, transportation, and natural boundaries. But they also demanded cooperation—irrigation required organized labor, flood control needed central planning.

> "Egypt is the gift of the Nile." — Herodotus, 440 BCE

The Egyptians leveraged this gift with precision. When the Nile flooded annually, it deposited nutrient-rich silt. Farmers planted immediately after floods receded, harvested before the next cycle. This predictability enabled surplus storage, freeing citizens to build pyramids, develop mathematics, and create art.

Compare this to Mesopotamia's volatile rivers. Unpredictable floods destroyed crops, shifted riverbeds, and devastated cities. The Sumerians responded with aggressive engineering—dikes, canals, reservoirs—and developed more militaristic, competitive city-states.

**Environment shapes culture.** Egypt's stability fostered conservatism and continuity. Mesopotamia's chaos bred innovation and conflict. The Indus Valley's planned cities reflected cooperative values. China's isolation enabled unbroken cultural identity.

This isn't just ancient history. Silicon Valley emerged near Stanford's research ecosystem. Financial centers cluster in port cities. Geography still determines destiny.`,
      keyTakeaway: "The first civilizations arose where rivers provided resources and demanded organization—proving that environmental constraints drive cultural innovation.",
      actionItem: "Research how geography shaped the development of your own region or city. What natural features determined its growth?",
    },
  },
  {
    id: "hist-003",
    title: "The Collapse Pattern",
    type: "concept",
    duration: 11,
    xpReward: 100,
    content: {
      overview: "Great civilizations don't just fade away—they follow predictable patterns of decline that repeat across history.",
      mainContent: `## The Anatomy of Collapse

In 1177 BCE, the Bronze Age Mediterranean world imploded. Within 50 years, the Hittite Empire vanished, Mycenaean Greece collapsed, and Egyptian power fractured. What happened?

Historian Eric Cline identifies a "perfect storm" of factors:

**The Collapse Cascade:**

1. **Environmental Stress** - Drought, famine, resource depletion
2. **Economic Disruption** - Trade network failures, currency collapse
3. **Military Pressure** - Invasions, internal rebellions
4. **Social Fragmentation** - Elite detachment, loss of shared identity
5. **System Complexity** - Over-specialized systems too rigid to adapt

The Bronze Age collapse began with drought. Crop failures triggered migrations. Migrations disrupted trade routes. Trade disruptions starved cities dependent on imports. Cities weakened, enabling invasions. Invasions destroyed the administrative apparatus. Within decades, writing disappeared, urban centers emptied, and societies fragmented into local subsistence farming.

> "Civilizations die from suicide, not by murder." — Arnold Toynbee

Consider Rome's fall in 476 CE. Lead poisoning from pipes? Barbarian invasions? Currency debasement? Christian pacifism? Historians count over 200 proposed causes. The truth: all of the above, in cascading combination.

**Modern Parallels:**

- Climate change stressing agricultural systems
- Global supply chain vulnerabilities
- Political polarization and institutional distrust
- Increasing system complexity and fragility

Joseph Tainter's research shows civilizations collapse when the cost of complexity exceeds its benefits. Rome's bureaucracy eventually consumed more resources than it produced. When stressed, the system couldn't adapt—it shattered.

The Maya, Angkor, Easter Island—each followed similar patterns. Success bred complexity, complexity bred rigidity, rigidity prevented adaptation to change.`,
      keyTakeaway: "Civilizations collapse when multiple stresses—environmental, economic, military, social—overwhelm systems too complex and rigid to adapt.",
      actionItem: "Identify three modern systems you depend on daily. What would happen if just one failed? How interconnected is your life?",
    },
  },
  {
    id: "hist-004",
    title: "Patterns in Decline",
    type: "quiz",
    duration: 8,
    xpReward: 150,
    content: {
      overview: "Test your understanding of how and why great civilizations fall.",
      mainContent: `## Knowledge Check: Collapse Patterns

Civilizational collapse isn't random—it follows identifiable patterns that repeat across cultures and centuries. This quiz examines your grasp of these critical dynamics.

Understanding collapse patterns isn't academic—it's survival knowledge. Societies that recognize early warning signs can adapt. Those that ignore them repeat history's most devastating mistakes.`,
      keyTakeaway: "Recognizing collapse patterns enables proactive adaptation rather than reactive crisis management.",
      quiz: {
        question: "According to Joseph Tainter's research, what is the primary driver of civilizational collapse?",
        options: [
          "When the cost of maintaining complexity exceeds its benefits",
          "External military invasions by stronger enemies",
          "Moral decay and loss of traditional values",
          "Natural disasters and environmental catastrophes",
        ],
        correct: 0,
        explanation: "Tainter's 'The Collapse of Complex Societies' argues that civilizations collapse when diminishing returns on complexity make systems unsustainable. While invasions, moral issues, and disasters contribute, the core problem is overly complex systems that consume more resources than they generate.",
      },
    },
  },
  {
    id: "hist-005",
    title: "Empires vs. City-States",
    type: "concept",
    duration: 11,
    xpReward: 100,
    content: {
      overview: "Two fundamentally different models of political organization have competed throughout history—each with distinct advantages and fatal flaws.",
      mainContent: `## The Centralization Paradox

Ancient Greece chose fragmentation. Rome chose unity. Their competition defined Western civilization.

**City-State Model (Athens, Venice, Renaissance Italy):**

- Autonomous units, typically 5,000-50,000 citizens
- Direct democracy or republican governance
- Cultural flowering and innovation
- Vulnerability to external conquest
- Economic dynamism through competition

**Empire Model (Rome, Persia, China):**

- Centralized authority over vast territories
- Bureaucratic administration
- Military dominance and security
- Cultural standardization
- Economic integration and stability

> "The price of empire is America's soul, and that price is too high." — J. William Fulbright

Athens at its peak (450 BCE) was a city of perhaps 300,000, yet it produced Socrates, Plato, Aristotle, Sophocles, and Pericles. Its democratic assembly made collective decisions. Innovation exploded—philosophy, drama, mathematics, architecture.

But when Sparta and Persia threatened, Athens couldn't defend itself alone. By 338 BCE, Macedonia conquered all Greek city-states.

Rome learned this lesson. Starting as one city-state, it systematically absorbed its neighbors, eventually controlling the entire Mediterranean. This created unprecedented peace (Pax Romana) and prosperity—but at the cost of republican liberty.

**The Pattern Repeats:**

- Medieval Italian city-states (Florence, Venice) vs. rising nation-states (France, Spain)
- German principalities vs. Prussian consolidation
- American federalism balancing state autonomy with federal power

Modern corporations face this dilemma. Decentralized startups innovate rapidly but struggle to scale. Centralized corporations achieve efficiency but stifle creativity.

The optimal solution? Neither extreme. Successful systems combine local autonomy with coordinated collective action—federation, not empire or anarchy.`,
      keyTakeaway: "City-states maximize innovation and freedom but lack defensive power; empires provide security and scale but suppress local dynamism—successful systems balance both.",
      actionItem: "Examine your workplace or community. Is it more city-state (autonomous, innovative) or empire (centralized, standardized)? What are the tradeoffs?",
    },
  },
  {
    id: "hist-006",
    title: "Historical Cycles Theory",
    type: "quiz",
    duration: 8,
    xpReward: 150,
    content: {
      overview: "Do civilizations follow predictable cycles, or is history truly unpredictable?",
      mainContent: `## Knowledge Check: Cyclical History

From ancient China's "Mandate of Heaven" to Ibn Khaldun's dynastic cycles to modern economic boom-bust patterns, thinkers have identified recurring rhythms in human civilization.

Understanding whether history cycles or progresses linearly affects everything from investment strategy to political forecasting to personal planning.`,
      keyTakeaway: "Cyclical theories provide useful pattern recognition, but treating them as deterministic laws ignores human agency and adaptation.",
      quiz: {
        question: "Ibn Khaldun's 14th-century theory of dynastic cycles identified what as the critical factor in empire rise and fall?",
        options: [
          "Asabiyyah (social cohesion) strengthens in hardship, weakens in prosperity",
          "Divine favor granted and withdrawn based on ruler virtue",
          "Technological advantage determining military superiority",
          "Population growth exceeding agricultural capacity",
        ],
        correct: 0,
        explanation: "Ibn Khaldun observed that tribal groups with strong asabiyyah (social solidarity) could conquer civilized areas, but prosperity gradually eroded their cohesion across generations, making them vulnerable to new groups with stronger bonds. This cycle repeated across Islamic dynasties, and his analysis remains influential in understanding institutional decay.",
      },
    },
  },
  {
    id: "hist-007",
    title: "Cultural Transmission Across Civilizations",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Great ideas don't die with civilizations—they migrate, transform, and resurface in unexpected places.",
      mainContent: `## The Knowledge Pipeline

When Rome fell in 476 CE, classical learning didn't vanish—it traveled.

**The Preservation Path:**

1. **Byzantine Empire (330-1453 CE)** - Preserved Greek texts in Constantinople
2. **Islamic Golden Age (750-1258 CE)** - Translated, expanded, and innovated on Greek science
3. **Medieval Europe (1000-1400 CE)** - Received translations from Arabic back to Latin
4. **Renaissance (1400-1600 CE)** - Rediscovered and celebrated classical learning

Consider Aristotle's journey. His works were preserved by Christian monks in Constantinople, translated into Arabic by scholars in Baghdad's House of Wisdom, enhanced with commentary by Ibn Sina (Avicenna) and Ibn Rushd (Averroes), then retranslated into Latin at Toledo's translation centers, and finally sparked the European Renaissance.

> "We are like dwarfs sitting on the shoulders of giants. We see more than they do, not because our sight is better, but because they raise us up." — Bernard of Chartres, 12th century

The Islamic world didn't just preserve—they advanced. Al-Khwarizmi developed algebra. Ibn al-Haytham pioneered optics and the scientific method. Al-Biruni calculated Earth's circumference with remarkable accuracy. These innovations flowed back to Europe through Spain and Sicily.

**Modern Parallels:**

When the Nazis expelled Jewish scientists, America gained Einstein, Fermi, von Neumann, and the Manhattan Project. When the Soviet Union collapsed, brilliant mathematicians migrated to Silicon Valley. Brain drain for one civilization becomes brain gain for another.

**The Pattern:** Knowledge seeks fertile ground. When one civilization restricts inquiry, innovators migrate to freer environments. This creates competitive advantage for open societies—but also explains why closed systems eventually stagnate.

China's early technological lead (printing, gunpowder, compass, paper) didn't translate to lasting dominance because Ming Dynasty isolationism blocked knowledge exchange.`,
      keyTakeaway: "Civilizations rise by importing and building on others' knowledge; they decline when they close themselves to external learning and talent.",
      actionItem: "Trace one modern technology or idea backwards through history. What civilizations contributed to its development?",
    },
  },
  {
    id: "hist-008",
    title: "Foundations Assessment",
    type: "quiz",
    duration: 10,
    xpReward: 150,
    content: {
      overview: "Demonstrate your mastery of civilizational patterns and historical dynamics.",
      mainContent: `## Comprehensive Review

You've explored the fundamental patterns that govern civilizational rise and fall—from the environmental constraints that shape cultures to the knowledge transmission that links disparate societies.

These aren't just historical curiosities. They're operational principles that determine which nations thrive, which companies dominate, which communities flourish.

**Integration Challenge:** The best historical thinking combines multiple frameworks simultaneously. Great strategists see environmental factors, cultural dynamics, economic systems, and individual agency operating together, not in isolation.`,
      keyTakeaway: "Historical literacy means recognizing patterns without becoming deterministic—understanding constraints while preserving agency.",
      quiz: {
        question: "What best explains why the Indus Valley Civilization (2600-1900 BCE) remains mysterious despite extensive archaeological evidence?",
        options: [
          "Their writing system remains undeciphered, blocking access to their records and culture",
          "Religious prohibitions prevented them from building monuments or leaving inscriptions",
          "Climate change erased all physical evidence of their cities and infrastructure",
          "They deliberately destroyed all records before their civilization ended",
        ],
        correct: 0,
        explanation: "Despite excavating sophisticated urban centers like Mohenjo-daro with advanced drainage, uniform weights, and extensive trade networks, we cannot read their script. Unlike Egyptian hieroglyphics (deciphered via the Rosetta Stone) or cuneiform (deciphered through bilingual texts), Indus script appears on brief seal inscriptions without bilingual keys, leaving their governance, beliefs, and decline mysterious.",
      },
    },
  },
];
