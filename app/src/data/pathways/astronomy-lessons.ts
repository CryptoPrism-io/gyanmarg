import type { PathwayLesson } from "@/types";

export const astroLessonsLevel1: PathwayLesson[] = [
  {
    id: "astro-001",
    title: "Welcome to the Cosmos",
    type: "intro",
    duration: 10,
    xpReward: 100,
    content: {
      overview: "Embark on a journey through space and time to understand our place in the universe.",
      mainContent: `## The Greatest Story Ever Told

When you look up at the night sky, you are seeing the universe as it was in the past. The light from the nearest star, Proxima Centauri, takes 4.2 years to reach your eyes. When you gaze at the Andromeda galaxy, you see it as it appeared 2.5 million years ago, when our ancestors were just learning to make stone tools.

**Astronomy is the science of everything beyond Earth.** It encompasses the study of planets, stars, galaxies, black holes, and the very fabric of spacetime itself. More than any other science, astronomy humbles us while simultaneously elevating our understanding of what is possible.

Consider this: there are more stars in the universe than grains of sand on all of Earth's beaches. The Hubble Space Telescope has revealed that in a patch of sky no bigger than a grain of sand held at arm's length, there are over 10,000 galaxies. Each of those galaxies contains hundreds of billions of stars.

> "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself." — Carl Sagan

This is not poetic exaggeration. The carbon in your DNA, the calcium in your bones, the iron in your blood — all of it was forged in the nuclear furnaces of stars that exploded billions of years ago. You are literally made of stardust.

In this pathway, you will explore the solar system that is our cosmic neighborhood, understand the life cycles of stars, peer into the mysterious nature of black holes, and contemplate the possibility of life beyond Earth. By the end, you will never look at the night sky the same way again.`,
      keyTakeaway: "Astronomy reveals that we are made of stardust, connected to the cosmos in ways both profound and literal.",
      actionItem: "Tonight, step outside and look at the stars. Find one bright star and realize its light began its journey years ago, just to reach your eyes in this moment.",
    },
  },
  {
    id: "astro-002",
    title: "Our Solar System: A Cosmic Neighborhood",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Discover the eight planets, dwarf planets, and countless celestial objects that orbit our Sun.",
      mainContent: `## A Family Portrait in Space

Our solar system formed 4.6 billion years ago from a collapsing cloud of gas and dust. At its center, the Sun contains 99.86% of the solar system's total mass. The remaining 0.14% is divided among eight planets, their moons, asteroids, comets, and interplanetary dust.

**The Four Terrestrial Planets** — Mercury, Venus, Earth, and Mars — are rocky worlds closest to the Sun. Mercury experiences temperature swings of over 600°C between day and night. Venus, shrouded in thick clouds of sulfuric acid, has a surface hot enough to melt lead (462°C). Mars, the red planet, once had flowing water and may have harbored microbial life.

**The Gas Giants** — Jupiter and Saturn — are massive worlds without solid surfaces. Jupiter is so large that 1,300 Earths could fit inside it. Its Great Red Spot is a storm that has raged for at least 400 years. Saturn's rings, made of billions of chunks of ice and rock, stretch 282,000 km across but are only 10 meters thick in some places.

**The Ice Giants** — Uranus and Neptune — orbit in the cold outer reaches. Uranus rotates on its side, likely knocked over by a massive collision billions of years ago. Neptune, the windiest planet, has storms with speeds exceeding 2,000 km/h.

Beyond Neptune lies the Kuiper Belt, home to Pluto and thousands of icy bodies. Even farther out, the Oort Cloud contains trillions of comets, extending halfway to the nearest star.

> The solar system is so vast that light from the Sun takes over 5 hours to reach Pluto.

Recent discoveries have revealed surprising complexity: subsurface oceans on Jupiter's moon Europa and Saturn's moon Enceladus, methane lakes on Saturn's moon Titan, and towering volcanoes on Io.`,
      keyTakeaway: "The solar system is a diverse collection of worlds, each with unique characteristics shaped by billions of years of cosmic evolution.",
      actionItem: "Download a stargazing app and locate Jupiter or Saturn in tonight's sky. If you have binoculars, try to spot Jupiter's four largest moons.",
    },
  },
  {
    id: "astro-003",
    title: "The Life and Death of Stars",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Understand how stars are born, live, and die in spectacular cosmic events.",
      mainContent: `## Nuclear Furnaces in the Sky

Stars are not eternal. They are born, they live, and they die — sometimes in the most violent explosions in the universe. Every star's fate is determined primarily by one factor: its mass.

**Star Birth** begins in nebulae, vast clouds of gas and dust. When a region becomes dense enough, gravity causes it to collapse. As the core compresses, temperature and pressure increase until nuclear fusion ignites. Hydrogen atoms fuse into helium, releasing tremendous energy. A star is born.

Our Sun, a medium-sized star, has been fusing hydrogen for 4.6 billion years and will continue for another 5 billion. It converts 600 million tons of hydrogen into helium every second, releasing energy according to Einstein's famous equation: E=mc².

**Small stars** (less than 0.5 solar masses) burn their fuel slowly and can shine for trillions of years — longer than the current age of the universe. **Medium stars** like our Sun will eventually expand into red giants, swallowing inner planets, before gently shedding their outer layers to form beautiful planetary nebulae. The core becomes a white dwarf, slowly cooling over billions of years.

**Massive stars** (over 8 solar masses) live fast and die young. They burn through their fuel in mere millions of years. When fusion stops, the core collapses in less than a second, triggering a supernova explosion so bright it can outshine an entire galaxy. These explosions forge elements heavier than iron — including gold, platinum, and uranium.

> The iron in your blood came from exploding stars. We are, quite literally, the universe's way of knowing itself.

The remnant core becomes either a neutron star (where a teaspoon of material weighs a billion tons) or, if massive enough, a black hole.`,
      keyTakeaway: "Stars are cosmic alchemists, transforming simple hydrogen into all the elements needed for planets and life through nuclear fusion and explosive death.",
      actionItem: "Look up images of the Crab Nebula, the remnant of a supernova that exploded in 1054 AD. Chinese astronomers recorded it as visible during the day.",
    },
  },
  {
    id: "astro-004",
    title: "Quiz: Solar System Fundamentals",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your knowledge of our cosmic neighborhood.",
      mainContent: `## Knowledge Check

Let's verify your understanding of the solar system's structure and characteristics.`,
      keyTakeaway: "Reviewing key facts helps solidify your understanding of planetary science.",
      quiz: {
        question: "Which planet in our solar system has the most extreme temperature variation between day and night?",
        options: [
          "Mercury, with temperature swings exceeding 600°C",
          "Mars, due to its thin atmosphere",
          "Venus, despite its thick atmosphere",
          "Pluto, being farthest from the Sun",
        ],
        correct: 0,
        explanation: "Mercury has virtually no atmosphere to retain heat, causing extreme temperature variations. Its day side reaches 430°C while its night side drops to -180°C, a difference of over 600°C.",
      },
    },
  },
  {
    id: "astro-005",
    title: "Black Holes: The Ultimate Mystery",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Explore the most extreme objects in the universe where gravity becomes so strong that nothing can escape.",
      mainContent: `## Where Physics Breaks Down

Black holes are regions of spacetime where gravity is so intense that nothing — not even light — can escape once it crosses the boundary called the event horizon. They represent the most extreme predictions of Einstein's general relativity.

**How Black Holes Form**: When a massive star (over 25 solar masses) exhausts its nuclear fuel, its core collapses catastrophically. The collapse is so complete that all the star's mass compresses into an infinitely small point called a singularity. The result? A black hole.

The numbers are staggering. A stellar-mass black hole might contain 10 solar masses compressed into a sphere just 60 km across. Supermassive black holes, lurking at the centers of most galaxies, can contain billions of solar masses. Sagittarius A*, the black hole at our Milky Way's center, has a mass of 4 million suns.

**Time Dilation**: Near a black hole's event horizon, time slows down relative to an outside observer. If you could watch someone fall into a black hole, you would see them slow down, redden, and eventually freeze at the horizon — though from their perspective, they would cross it in finite time.

> In 2019, the Event Horizon Telescope captured the first direct image of a black hole's shadow in galaxy M87, confirming Einstein's predictions made over a century ago.

**Hawking Radiation**: Stephen Hawking discovered that black holes aren't entirely black. Quantum effects near the event horizon cause them to emit radiation and slowly evaporate. A black hole with the mass of the Sun would take 10⁶⁷ years to evaporate — trillions of times longer than the universe's current age.

Black holes are cosmic laboratories where the laws of quantum mechanics and general relativity collide. Understanding them may unlock the secrets of a unified theory of physics.`,
      keyTakeaway: "Black holes are not cosmic vacuum cleaners but rather the universe's most extreme laboratories for testing the limits of physics.",
      actionItem: "Search for the Event Horizon Telescope's image of the M87 black hole. You're looking at a shadow cast by gravity so strong it warps spacetime itself.",
    },
  },
  {
    id: "astro-006",
    title: "Quiz: Stellar Evolution",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your understanding of how stars live and die.",
      mainContent: `## Knowledge Check

Verify your grasp of stellar lifecycles and their cosmic significance.`,
      keyTakeaway: "Understanding stellar evolution reveals how the universe creates the building blocks of life.",
      quiz: {
        question: "What determines a star's ultimate fate — whether it becomes a white dwarf, neutron star, or black hole?",
        options: [
          "Its initial mass at formation",
          "Its distance from other stars",
          "The composition of its atmosphere",
          "The speed of its rotation",
        ],
        correct: 0,
        explanation: "A star's initial mass is the primary factor determining its fate. Stars under 8 solar masses become white dwarfs, those between 8-25 solar masses become neutron stars, and those above 25 solar masses collapse into black holes.",
      },
    },
  },
  {
    id: "astro-007",
    title: "The Search for Extraterrestrial Life",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Examine the scientific quest to answer humanity's oldest question: Are we alone?",
      mainContent: `## The Cosmic Question

For thousands of years, humans have wondered if life exists elsewhere in the universe. Today, we are closer than ever to answering that question scientifically.

**The Drake Equation**, proposed by astronomer Frank Drake in 1961, estimates the number of communicative civilizations in our galaxy. It considers factors like the rate of star formation, the fraction of stars with planets, and the likelihood that life develops intelligence. Estimates range from zero to millions, depending on the assumptions.

**Exoplanet Revolution**: Before 1992, we knew of no planets beyond our solar system. Today, we have confirmed over 5,500 exoplanets. The Kepler Space Telescope revealed that roughly 20-25% of Sun-like stars have Earth-sized planets in their habitable zones — regions where liquid water could exist on the surface.

This means there could be **40 billion Earth-sized planets** in habitable zones throughout the Milky Way galaxy alone.

**Biosignatures** are signs of life we might detect from afar. Oxygen, produced by photosynthesis on Earth, is a potential biosignature. The James Webb Space Telescope can analyze exoplanet atmospheres for such molecules. In 2023, it detected carbon dioxide and water vapor in the atmosphere of exoplanet K2-18b, a potentially habitable world 120 light-years away.

**The Fermi Paradox** asks: If life is common, where is everybody? The silence is puzzling. Perhaps intelligence is rare, or civilizations destroy themselves, or we are listening in the wrong way.

> "Two possibilities exist: either we are alone in the Universe or we are not. Both are equally terrifying." — Arthur C. Clarke

Closer to home, subsurface oceans on Jupiter's moon Europa and Saturn's moon Enceladus are prime candidates for microbial life. NASA's Europa Clipper mission will investigate Europa's potential habitability.`,
      keyTakeaway: "The discovery of thousands of exoplanets and potentially habitable moons in our own solar system suggests we may be on the verge of answering whether life exists beyond Earth.",
      actionItem: "Visit the NASA Exoplanet Archive online and explore one confirmed exoplanet. Read about its characteristics and consider what life there might be like.",
    },
  },
  {
    id: "astro-008",
    title: "Quiz: The Search for Life",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your knowledge of astrobiology and the search for extraterrestrial life.",
      mainContent: `## Knowledge Check

Assess your understanding of the scientific search for life beyond Earth.`,
      keyTakeaway: "The search for extraterrestrial life combines astronomy, biology, chemistry, and physics in humanity's greatest quest.",
      quiz: {
        question: "Why are Jupiter's moon Europa and Saturn's moon Enceladus considered prime candidates for extraterrestrial life?",
        options: [
          "They both have subsurface liquid water oceans beneath their icy crusts",
          "They receive enough sunlight for photosynthesis",
          "They have oxygen-rich atmospheres",
          "They are closest to Earth and easiest to explore",
        ],
        correct: 0,
        explanation: "Both Europa and Enceladus have subsurface liquid water oceans kept warm by tidal heating from their parent planets. Water is essential for life as we know it, and these oceans may contain the chemical ingredients and energy sources needed for microbial life. Enceladus even shoots geysers of ocean water into space, which spacecraft have sampled.",
      },
    },
  },
];
