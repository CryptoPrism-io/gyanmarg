import type { PathwayLesson } from "@/types";

export const anthroLessonsLevel1: PathwayLesson[] = [
  {
    id: "anthro-001",
    title: "What Makes Us Human?",
    type: "intro",
    duration: 10,
    xpReward: 100,
    content: {
      overview: "Anthropology reveals that human nature is far more flexible and culture far more powerful than we assume—what seems 'natural' is often culturally constructed.",
      mainContent: `## The Anthropological Lens

Margaret Mead traveled to Samoa in 1925 with a radical question: Is adolescent rebellion a biological inevitability or a cultural creation?

Her research suggested the latter. Samoan teenagers experienced minimal stress transitioning to adulthood. No rebellion, no identity crisis, no generation gap. The Western assumption that teenage angst was "natural" appeared to be culturally specific, not universal.

**The Core Insight:**

> "We are not born human; we are made human through culture." — Clifford Geertz

**What Anthropology Studies:**

**Cultural Anthropology:**
- Beliefs, values, symbols, and meanings
- Kinship systems and social organization
- Rituals, myths, and religious practices
- Economic systems and exchange

**Biological Anthropology:**
- Human evolution and adaptation
- Primatology and comparative anatomy
- Genetics and population variation
- Forensics and skeletal analysis

**Linguistic Anthropology:**
- Language structure and meaning
- Language and thought relationships
- Communication and power
- Language evolution and change

**Archaeological Anthropology:**
- Material culture and artifacts
- Settlement patterns and ancient societies
- Cultural change over time
- Human-environment interactions

**The Method: Participant Observation**

Anthropologists live with communities, learning languages, participating in daily life, and suspending judgment. Bronisław Malinowski spent years in the Trobriand Islands (1915-1918), documenting intricate gift exchange systems that governed social relationships.

He discovered the Kula Ring—a ceremonial exchange network spanning hundreds of miles where valuables circulated in opposite directions. This wasn't economic trade but social relationship-building. The pattern revealed universal human needs for reciprocity and status, expressed through culturally specific forms.

**Cultural Relativism:**

Anthropology teaches that practices making sense within their cultural context might seem bizarre from outside. Judging other cultures by your own standards (ethnocentrism) prevents understanding.

This doesn't mean "anything goes"—it means understanding before judging. Female genital cutting, honor killings, caste systems—these require understanding their cultural logic while still allowing ethical critique.

**Why This Matters:**

Anthropology defamiliarizes the familiar and familiarizes the strange. It reveals that:
- Gender roles vary enormously across cultures
- Rationality and logic are culturally shaped
- Emotions are partially culturally constructed
- Kinship isn't just biology
- Economics isn't just markets

Your deepest assumptions about "human nature" may be cultural habits mistaken for biological inevitabilities.`,
      keyTakeaway: "Anthropology reveals that much of what we consider 'natural' human behavior is actually culturally constructed—human flexibility exceeds our assumptions.",
      actionItem: "Identify one behavior you consider 'natural' or 'universal.' Research whether other cultures share this pattern or express it differently.",
    },
  },
  {
    id: "anthro-002",
    title: "Kinship Beyond Biology",
    type: "concept",
    duration: 11,
    xpReward: 100,
    content: {
      overview: "How societies define family, track descent, and organize relationships reveals profound cultural diversity in structuring human bonds.",
      mainContent: `## The Social Construction of Family

In Western societies, you typically have one father, one mother, perhaps siblings. Simple. But anthropology reveals extraordinary diversity in how humans organize kinship.

**Descent Systems:**

**Patrilineal (Father's Line):**
- Trace ancestry through males
- Common in pastoral/agricultural societies
- Property, status, identity through father
- Examples: Most Arab societies, traditional Chinese, many African groups

**Matrilineal (Mother's Line):**
- Trace ancestry through females
- Mother's brother often more important than father
- Women hold property rights
- Examples: Minangkabau (Indonesia), Khasi (India), Akan (Ghana)

**Bilateral (Both Lines):**
- Recognize both mother's and father's relatives equally
- Common in Western societies
- Flexible but can create competing obligations
- Examples: United States, Canada, most Europe

> "Kinship is to anthropology what logic is to philosophy—the central organizing principle." — Robin Fox

**Fictive Kinship:**

Many societies create family relationships without biological connection:

**Godparents (Compadrazgo):**
In Latin American cultures, godparents aren't ceremonial—they're genuine family with obligations to support children. This creates extensive social networks beyond biology.

**Blood Brothers/Sisters:**
Ritualized friendship creating kinship-level obligations. Among Scythian warriors, blood-mixing ceremonies created bonds stronger than marriage.

**Adoption Practices:**
Polynesian societies practiced widespread adoption, with children moving between households to strengthen social ties. Western-style exclusive parent-child bonds were rare.

**Marriage Systems:**

**Monogamy:** One spouse at a time (most common legally, though serial monogamy is frequent)

**Polygyny:** One man, multiple wives (common historically, correlates with resource inequality)

**Polyandry:** One woman, multiple husbands (rare, found in resource-scarce environments like Tibet, where brothers share a wife to prevent land division)

**Group Marriage:** Multiple husbands and wives in complex arrangements (extremely rare, some intentional communities)

**The Nuer Paradox:**

Among the Nuer of Sudan, documented by E.E. Evans-Pritchard, a woman could marry another woman in a "ghost marriage." The wife would bear children through a male consort, but those children belonged to the female "father" and her lineage.

This demonstrates that social parenthood can be entirely separate from biological parenthood—and that gender roles in kinship are culturally flexible.

**Incest Taboos:**

Every society prohibits some sexual/marital relationships, but which ones vary dramatically:

- **Nuclear Family:** Universally prohibited (parent-child, sibling)
- **First Cousins:** Prohibited in some cultures, preferred in others
- **Parallel vs. Cross Cousins:** Many societies distinguish—father's brother's children (parallel) prohibited, but mother's brother's children (cross) preferred marriage partners

Claude Lévi-Strauss argued incest taboos force exchange between groups, creating alliances. "Marry out or die out" through isolation.

**Modern Implications:**

- Foster care systems clash with extended family practices
- Immigration brings competing kinship obligations
- LGBTQ+ families challenge biological assumptions
- Reproductive technology separates genetic, gestational, and social parenthood

Anthropology reveals kinship as flexible cultural creation, not fixed biological reality.`,
      keyTakeaway: "Kinship systems vary enormously across cultures, demonstrating that 'family' is socially constructed through descent rules, marriage patterns, and fictive bonds—not just biology.",
      actionItem: "Map your own kinship network. Does it follow patrilineal, matrilineal, or bilateral patterns? Do you have fictive kin (godparents, close family friends considered 'aunt/uncle')?",
    },
  },
  {
    id: "anthro-003",
    title: "Rituals and Symbols",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Rituals aren't primitive superstition—they're sophisticated technologies for managing transitions, building community, and creating meaning.",
      mainContent: `## The Power of Symbolic Action

Why do secular graduations wear medieval robes? Why do courtrooms require standing for judges? Why do military funerals fold flags precisely? Ritual.

Arnold van Gennep's Rites of Passage (1909) identified a universal pattern in rituals marking life transitions:

**Three Stages:**

1. **Separation** - Individual removed from normal social status
2. **Liminality** - Transitional state, "betwixt and between"
3. **Incorporation** - Return with new status/identity

**Examples:**

**Coming-of-Age Rituals:**

**Maasai Warriors (Kenya/Tanzania):**
Boys leave their villages, live in warrior camps, undergo circumcision, learn fighting skills, and return as morans (warriors). The liminal period transforms children into adults through shared ordeal.

**Jewish Bar/Bat Mitzvah:**
Thirteen-year-old becomes obligated to follow Jewish law. The ceremony publicly marks transition from child to adult community member.

**Quinceañera (Latin America):**
Fifteen-year-old girl's transition to womanhood celebrated with mass, formal party, symbolic objects (tiara, shoes, doll). Marks availability for courtship and adult responsibilities.

> "Ritual is the most basic social act." — Victor Turner

**Funeral Rituals:**

Death creates social disruption—the deceased's roles must be redistributed, relationships restructured, group identity maintained.

**Balinese Cremation:**
Elaborate ceremonies lasting days, with entire village participating. Bodies may be stored for months or years until proper ritual possible. The ceremony releases the soul and reintegrates the community.

**Irish Wake:**
Traditionally held in home with open casket, featuring drinking, storytelling, even humor. Celebrates life while acknowledging death, transforms grief through communal participation.

**Tibetan Sky Burial:**
Body placed on mountain to be consumed by vultures. This embodies Buddhist impermanence, returns body to nature, and feeds animals—transforming death into ecological cycle.

**Symbolic Inversion:**

Many rituals temporarily reverse normal social hierarchies:

**Carnival (Brazil, New Orleans):**
Before Lent's austerity, carnival allows excess—sexual freedom, mockery of authority, costume disguise. Turner called this "communitas"—temporary erasure of status differences.

**Saturnalia (Ancient Rome):**
Slaves and masters switched places. The powerful served the powerless. After the festival, hierarchy resumed—but the inversion acknowledged its arbitrariness.

**Political Rituals:**

Modern societies ritualize power:
- Presidential inaugurations create legitimacy through tradition
- Military parades display strength and unity
- Courtroom procedures invoke authority through archaic language
- National anthems and flags create collective identity

**Why Rituals Work:**

**Psychological Functions:**
- Reduce anxiety during transitions
- Create sense of control over uncertainty
- Mark time and create memory

**Social Functions:**
- Build group cohesion through shared experience
- Transmit cultural values across generations
- Maintain hierarchy or temporarily subvert it
- Manage conflict through structured outlet

**Cognitive Functions:**
- Make abstract concepts concrete through symbols
- Enable shared understanding without explicit explanation
- Create frameworks for interpreting experience

Even secular moderns are ritualistic—graduation ceremonies, retirement parties, weddings (especially weddings). We perform rituals constantly, often without recognizing them as such.`,
      keyTakeaway: "Rituals use symbolic actions to manage life transitions, build community, and create shared meaning—they're sophisticated social technologies, not primitive superstitions.",
      actionItem: "Identify a ritual you participate in (graduation, birthday celebration, work tradition). Analyze it using van Gennep's three stages. What transition does it mark?",
    },
  },
  {
    id: "anthro-004",
    title: "Cultural Foundations Assessment",
    type: "quiz",
    duration: 8,
    xpReward: 150,
    content: {
      overview: "Test your grasp of anthropological concepts—kinship, ritual, and cultural construction.",
      mainContent: `## Knowledge Check: Core Concepts

Anthropology's fundamental insights—cultural relativism, constructed kinship, ritual function—challenge assumptions about what's "natural" versus culturally specific.

These concepts aren't just academic—they're practical tools for navigating diverse societies, understanding your own cultural biases, and recognizing human behavioral flexibility.`,
      keyTakeaway: "Anthropological literacy means recognizing cultural construction in systems that appear natural or inevitable—seeing the arbitrary in the familiar.",
      quiz: {
        question: "According to Arnold van Gennep's theory, what is the 'liminal' stage in rites of passage?",
        options: [
          "The transitional 'betwixt and between' state where normal status is suspended before incorporation into new identity",
          "The final celebration when the individual is welcomed back into society with new status",
          "The initial separation from childhood when the individual leaves their family",
          "The religious or spiritual component that gives meaning to the physical transformation",
        ],
        correct: 0,
        explanation: "Liminality (from Latin 'limen' meaning threshold) is the ambiguous middle stage where participants are neither their old identity nor yet their new one. During liminal phases—initiates during coming-of-age, brides/grooms during weddings, medical students during training—normal social rules are suspended. Victor Turner studied how this 'betwixt and between' state enables transformation and creates powerful bonding ('communitas') among those sharing the liminal experience.",
      },
    },
  },
  {
    id: "anthro-005",
    title: "Economic Systems and Exchange",
    type: "concept",
    duration: 11,
    xpReward: 100,
    content: {
      overview: "Market capitalism is just one of many ways humans organize production and exchange—anthropology reveals radically different economic logics.",
      mainContent: `## Beyond Markets

Modern economics assumes universal principles: supply and demand, profit maximization, rational self-interest. Anthropology reveals these are culturally specific, not human universals.

**Three Forms of Exchange (Karl Polanyi):**

**1. Reciprocity** - Mutual exchange between equals
**2. Redistribution** - Central authority collects and reallocates
**3. Market** - Price-setting through supply and demand

> "The human economy is embedded and enmeshed in institutions, economic and non-economic. The inclusion of the non-economic is vital." — Karl Polanyi

**Reciprocity Systems:**

**The Kula Ring (Trobriand Islands):**

Malinowski documented elaborate ceremonial exchange where valuable shell necklaces (soulava) circulated clockwise and armbands (mwali) circulated counterclockwise across hundreds of miles.

These items had no "use value"—they couldn't be consumed or converted to other goods. Their value was purely social—prestige, relationships, obligations. Individuals spent years building reputations as reliable exchange partners.

This system integrated multiple islands politically and economically, created peace between potentially hostile groups, and distributed resources—all without central authority or markets.

**Generalized Reciprocity:**
- Giving without expectation of immediate return
- Based on social relationship
- Examples: Parent-child care, sharing food with family

**Balanced Reciprocity:**
- Expectation of equivalent return
- Explicit accounting of obligations
- Examples: Gift exchange between friends, barter

**Negative Reciprocity:**
- Attempt to maximize gain, minimize giving
- Between strangers or enemies
- Examples: Haggling, theft, warfare

**Redistribution:**

**Potlatch (Pacific Northwest Indigenous Peoples):**

Chiefs hosted lavish feasts, giving away or destroying enormous wealth—blankets, coppers, even slaves. This wasn't foolish waste—it was sophisticated political economy.

By giving away more than rivals could match, chiefs demonstrated superior status. Recipients incurred obligations to reciprocate or acknowledge subordination. The system redistributed resources from wealthy to community while maintaining hierarchy.

Canadian authorities banned potlatch (1884-1951) because it seemed economically irrational. But it functioned as taxation, social security, and political legitimation combined.

**Modern Redistribution:**
- Progressive taxation
- Social welfare systems
- Corporate hierarchies with centralized budgets

**Market Exchange:**

Pure market exchange—impersonal transactions based solely on price—is actually historically rare. Most exchange mixes economic and social elements.

**Spheres of Exchange (Tiv, Nigeria):**

Paul Bohannan documented three separate exchange spheres, each with different items and logic:

1. **Subsistence:** Food, household items—daily reciprocity
2. **Prestige:** Cattle, slaves, ritual items—status competition
3. **Supreme:** Rights in people (marriage exchanges)—social reproduction

Crossing spheres was culturally problematic. Using money from trade to "buy" a wife violated categories. Markets could disrupt entire social systems.

**Moral Economy:**

James C. Scott studied Southeast Asian peasants who prioritized subsistence security over profit maximization. "Safety first" meant avoiding risk, maintaining reciprocal obligations, and resisting market integration that threatened survival.

When colonial powers imposed market logic—cash crops, taxation, private property—they destroyed safety nets, triggering resistance and rebellion.

**Modern Implications:**

- Gift economies persist (open source software, Wikipedia)
- Status goods signal identity, not just utility (luxury brands)
- Reciprocity obligations shape business relationships
- "Moral economy" concerns drive resistance to globalization

Economic anthropology reveals markets as one option among many—historically recent, culturally specific, and coexisting with other exchange forms even today.`,
      keyTakeaway: "Human economic systems range far beyond market exchange—reciprocity, redistribution, and gift economies follow different logics serving social and political goals, not just material ones.",
      actionItem: "Identify three economic transactions you've made recently. Categorize each as reciprocity, redistribution, or market exchange. Are any hybrids?",
    },
  },
  {
    id: "anthro-006",
    title: "Language and Thought",
    type: "concept",
    duration: 11,
    xpReward: 100,
    content: {
      overview: "Does language shape how we think, or just how we communicate? The Sapir-Whorf hypothesis reveals language's power over perception and cognition.",
      mainContent: `## How Language Shapes Reality

The Pirahã people of the Amazon have no numbers. No words for "one," "two," "three"—only approximate terms like "few" and "many." Psychologist Peter Gordon tested whether this affected cognition. It did.

In tasks requiring exact quantity matching, Pirahã performed poorly compared to numerate cultures. Without linguistic categories for precise counting, they couldn't easily perform tasks we consider simple.

**The Sapir-Whorf Hypothesis:**

> "The 'real world' is to a large extent unconsciously built upon the language habits of the group." — Edward Sapir

**Strong Version (Linguistic Determinism):**
Language determines thought—you cannot think concepts your language doesn't express.

**Weak Version (Linguistic Relativity):**
Language influences thought—linguistic categories make some thoughts easier, more frequent, or more salient.

Modern research supports the weak version. Language doesn't imprison thought, but it channels attention and facilitates certain cognitive patterns.

**Color Categories:**

English speakers distinguish "blue" and "green" easily—separate words, separate concepts. Some languages (Korean, Russian) have no single "blue" word but distinguish shades English speakers consider variants.

Russian splits blue into "siniy" (dark blue) and "goluboy" (light blue). Russian speakers detect differences between these shades faster than English speakers—linguistic category enhances perceptual discrimination.

The Himba people of Namibia have no word distinguishing green from blue, but many words for green shades. Tests show they discriminate green variants quickly but struggle with blue-green boundaries that seem obvious to English speakers.

**Spatial Reference Frames:**

English uses egocentric (body-relative) spatial language: "The cup is to your left." Turn around and "left" changes.

Guugu Yimithirr (Australian Aboriginal language) uses absolute cardinal directions: "The cup is north of you." This never changes regardless of body position.

Speakers of such languages must constantly track cardinal directions to communicate about space. They develop extraordinary orientation abilities—always knowing which direction is north, even in unfamiliar environments.

**Grammatical Gender:**

Spanish assigns "bridge" (el puente) masculine gender. German makes it feminine (die Brücke). When asked to describe bridges, Spanish speakers used words like "strong, sturdy, towering"—German speakers said "beautiful, elegant, fragile."

Grammatical gender subtly influences associations, despite having no logical connection to the objects.

**Time Conceptualization:**

English treats time spatially: "long time," "short meeting," "looking forward to the future, back at the past."

Aymara (Andes) reverses this: the future is behind (invisible, unknown) while the past is ahead (visible, known). This reflects different cultural orientations toward time and knowledge.

**Political Implications:**

George Orwell's 1984 invented "Newspeak"—a language deliberately impoverished to make thoughtcrime impossible. "Freedom" was eliminated; only "crimethink" remained. While fictional, this reflects real understanding of language's power.

Totalitarian regimes manipulate language precisely because controlling vocabulary influences thinking:
- Nazi euphemisms ("special treatment" = murder)
- Soviet newspeak ("people's democracy" = dictatorship)
- Modern corporate speak ("rightsizing" = layoffs)

**Linguistic Diversity Under Threat:**

Of 7,000+ languages, 50% are endangered. When languages die, unique conceptual systems and cognitive tools vanish.

Maintaining linguistic diversity isn't just cultural preservation—it's cognitive diversity, preserving different ways of thinking about reality.`,
      keyTakeaway: "Language doesn't determine thought absolutely, but it profoundly influences perception, cognition, and conceptual categories—different languages create different cognitive habits.",
      actionItem: "Identify a concept easily expressed in another language but awkward in your native language (schadenfreude, ubuntu, hygge). How does lacking this word affect your thinking about the concept?",
    },
  },
  {
    id: "anthro-007",
    title: "Applied Anthropology Assessment",
    type: "quiz",
    duration: 8,
    xpReward: 150,
    content: {
      overview: "Test your understanding of economic exchange, linguistic relativity, and anthropology's practical applications.",
      mainContent: `## Knowledge Check: Advanced Concepts

Anthropological insights about exchange systems, language-thought relationships, and cultural relativism have practical applications in international development, business, education, and policy.

Understanding these dynamics helps navigate cultural differences, design effective interventions, and avoid ethnocentric assumptions when working across cultures.`,
      keyTakeaway: "Applied anthropology uses cultural understanding to solve practical problems—from development failures to business miscommunication to policy effectiveness.",
      quiz: {
        question: "What does Karl Polanyi's concept of 'embeddedness' mean in economic anthropology?",
        options: [
          "Economic activities are embedded in social relationships and cultural values, not separate from them",
          "Market systems naturally evolve and become embedded in all human societies over time",
          "Traditional economies are trapped (embedded) in inefficient practices that prevent development",
          "Economic rationality is embedded in human biology as an evolutionary adaptation",
        ],
        correct: 0,
        explanation: "Polanyi argued that the modern separation of 'economy' from society is historically unusual. In most human societies, economic activities are embedded in social relationships, kinship obligations, religious duties, and political hierarchies. Markets weren't separate spheres—they were embedded in cultural context. Only with industrial capitalism did we create the fiction of a separate 'economic sphere' governed by autonomous principles. This insight explains why imposing market logic on traditional societies often destroys their social fabric.",
      },
    },
  },
  {
    id: "anthro-008",
    title: "Globalization and Cultural Change",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Globalization doesn't simply homogenize cultures—it creates complex hybridities, resistance movements, and new forms of identity.",
      mainContent: `## The Culture Industry Goes Global

Critics feared globalization would create cultural homogeneity—every city with the same McDonald's, Starbucks, and Gap stores. Reality proved more complex.

**Glocalization:**

Rather than simple cultural imperialism, global forces mix with local cultures creating hybrids.

**Examples:**

**McDonald's in India:**
No beef burgers (Hindu taboos), extensive vegetarian menu, spiced potato patties (McAloo Tikki), emphasis on family dining rather than quick service. The brand is global, but content is localized.

**Hip-Hop Culture:**
Born in 1970s Bronx, hip-hop spread globally but transformed locally:
- **French rap** addresses immigration, colonialism, banlieue (suburb) poverty
- **Korean hip-hop** combines with K-pop, creating hybrid genres
- **Palestinian rap** becomes resistance music against occupation
- **Brazilian funk carioca** blends with local favela culture

Each adaptation maintains core elements (beats, vocal style) while expressing local concerns in local languages.

> "Globalization is not the erasure of difference but the awareness of it." — Arjun Appadurai

**Cultural Flows (Appadurai's -scapes):**

**Ethnoscapes:** Migration flows creating diasporic communities
**Technoscapes:** Technology distribution (uneven global access)
**Financescapes:** Capital flows and markets
**Mediascapes:** Images and information flows
**Ideoscapes:** Political ideas and ideologies

These flows move at different speeds, in different directions, creating disjunctures rather than uniform global culture.

**Resistance and Fundamentalism:**

Globalization provokes reactions:

**Islamic Fundamentalism:**
Partly resistance to Western cultural penetration. Saudi Wahhabism and Iranian Revolution rejected Western modernity, reasserting "authentic" religious culture—though using modern technology to spread the message.

**Indigeneity Movements:**
Native peoples globally organize to resist cultural erasure, reclaim languages, and protect sacred sites. This mobilization uses global networks (UN forums, NGOs) to defend local cultures.

**Anti-Globalization:**
From Seattle WTO protests (1999) to Occupy Wall Street (2011), movements resist economic globalization's cultural and economic effects.

**Creolization and Hybridity:**

Pure cultures are myths—all cultures are already hybrids.

**Caribbean Creole Cultures:**
Mixing African, European, Indigenous, and Asian influences through colonialism and plantation economies. Languages, religions, music, food—all hybrid.

**Postcolonial Identity:**
Writers like Salman Rushdie, Chimamanda Ngozi Adichie explore hybrid identities—neither fully "traditional" nor fully "Western," but creative combinations.

**Digital Cultures:**

Internet enables global subcultures transcending geography:
- Gaming communities with global membership
- Anime fandoms spanning continents
- Political movements coordinating across borders (Arab Spring, climate activism)

But digital divides persist—access determined by wealth, infrastructure, language, and censorship.

**Authenticity Paradoxes:**

**Cultural Tourism:**
Desire for "authentic" experiences drives commodification. Indigenous rituals become performances for tourists. "Authentic" crafts are manufactured for export.

When culture becomes commodity, what happens to meaning? Some argue tourism preserves dying traditions by making them economically valuable. Others see exploitation and cultural degradation.

**The Future:**

Globalization won't create uniformity—it creates complex mixing, selective adoption, creative resistance, and new hybrid forms. Cultural change accelerates, but human creativity adapts global forces to local meanings.`,
      keyTakeaway: "Globalization creates cultural hybrids and resistance movements rather than simple homogenization—local cultures actively adapt, resist, and transform global influences.",
      actionItem: "Identify a global brand or cultural product in your area. How has it been adapted or 'glocalized' to fit local culture? What's changed and what's remained the same?",
    },
  },
];
