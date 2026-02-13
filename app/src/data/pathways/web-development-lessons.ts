import type { PathwayLesson } from "@/types";

export const webdevLessonsLevel1: PathwayLesson[] = [
  {
    id: "webdev-001",
    title: "The Web's Hidden Language",
    type: "intro",
    duration: 10,
    xpReward: 100,
    content: {
      overview: "Discover how three simple languages power every website you've ever visited.",
      mainContent: `## The Trinity of the Web

Every website you've ever used -- from Google to Instagram -- is built with just three core technologies: HTML, CSS, and JavaScript. Understanding this trinity is like learning the alphabet before writing novels.

**HTML (HyperText Markup Language)** is the skeleton. It defines what content exists: paragraphs, headings, images, links. Think of it as the architectural blueprint of a building. When Tim Berners-Lee created HTML in 1991 at CERN, he just wanted scientists to share documents. He accidentally created the foundation of a trillion-dollar industry.

**CSS (Cascading Style Sheets)** is the skin and clothing. It makes things beautiful. CSS controls colors, fonts, layouts, animations -- everything visual. Before CSS (introduced in 1996), websites looked like academic papers. After CSS, the web became an art form.

**JavaScript** is the nervous system. It makes things interactive. Click a button? JavaScript. Live chat? JavaScript. That satisfying animation when you like a post? JavaScript. Created in just 10 days by Brendan Eich in 1995, it's now the most popular programming language in the world.

Here's the magic: these three technologies work together seamlessly. HTML creates a button, CSS makes it look gorgeous, JavaScript makes it do something when clicked. This separation of concerns -- structure, style, behavior -- is elegant engineering.

> "The web is more a social creation than a technical one. I designed it for a social effect -- to help people work together." -- Tim Berners-Lee

Today, 1.13 billion websites exist because three simple languages made web creation accessible to everyone.`,
      keyTakeaway: "Every website is just HTML (structure), CSS (style), and JavaScript (behavior) working together.",
      actionItem: "Open any website, right-click, and select 'View Page Source' to see the HTML behind it.",
    },
  },
  {
    id: "webdev-002",
    title: "HTML: Speaking the Web's Native Tongue",
    type: "concept",
    duration: 12,
    xpReward: 120,
    content: {
      overview: "Learn how HTML tags create the structure of every webpage.",
      mainContent: `## The Language of Structure

HTML uses **tags** to define content. Tags are words wrapped in angle brackets like \`<tagname>\`. Most tags come in pairs: an opening tag \`<p>\` and a closing tag \`</p>\`. Everything between them is affected by that tag.

**The Essential Tags:**

- \`<h1>\` to \`<h6>\`: Headings (h1 is biggest, h6 smallest)
- \`<p>\`: Paragraphs of text
- \`<a href="url">\`: Links to other pages
- \`<img src="image.jpg">\`: Images
- \`<div>\`: Generic container for grouping content
- \`<button>\`: Clickable buttons

Every HTML document starts with the same skeleton:

\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
\`\`\`

The \`<head>\` contains metadata (title, links to CSS files). The \`<body>\` contains everything visible on the page.

**Semantic HTML** means using tags that describe their content. Use \`<nav>\` for navigation, \`<article>\` for articles, \`<footer>\` for footers. This helps screen readers for visually impaired users and helps search engines understand your content. Google ranks semantically correct HTML higher.

Here's a pro insight: developers spend only 20% of their time writing new code and 80% reading existing code. Good HTML is like good writing -- clear, organized, and easy to scan. Use proper indentation. Add comments with \`<!-- explanation here -->\`. Future you (and your teammates) will thank present you.

The best HTML is invisible to users but crystal clear to developers and machines.`,
      keyTakeaway: "HTML tags define structure and meaning -- use semantic tags to communicate clearly with browsers and search engines.",
      actionItem: "Create a simple HTML file with a heading, paragraph, and link. Open it in your browser.",
    },
  },
  {
    id: "webdev-003",
    title: "Your First Webpage Challenge",
    type: "exercise",
    duration: 15,
    xpReward: 150,
    content: {
      overview: "Build a personal introduction page from scratch.",
      mainContent: `## From Learner to Builder

You're going to create your first real webpage. Not a tutorial. Not someone else's code. Yours.

**Your Mission:**
Create an HTML file called \`about-me.html\` that includes:

1. A main heading with your name
2. A paragraph about what you're learning and why
3. Three subheadings: "Skills," "Interests," and "Goals"
4. A bulleted list under each subheading
5. An image (use any image URL from the internet)
6. A link to your favorite website

**Starter Template:**

\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>About Me</title>
  </head>
  <body>
    <h1>Your Name</h1>
    <p>Write about yourself here...</p>

    <h2>Skills</h2>
    <ul>
      <li>Skill 1</li>
      <li>Skill 2</li>
    </ul>

    <!-- Add more sections -->
  </body>
</html>
\`\`\`

**How to test it:**
1. Open any text editor (Notepad, TextEdit, VS Code)
2. Write your HTML
3. Save as \`about-me.html\`
4. Double-click the file -- it opens in your browser
5. Edit, save, refresh browser to see changes

This is exactly how Mark Zuckerberg started -- building simple HTML pages in his dorm room. The first version of Facebook was just basic HTML and CSS. Every expert was once a beginner who kept building.

**Level up:** Try nesting lists (a list inside a list). Use \`<strong>\` to make important words bold. Experiment with \`<hr>\` for horizontal lines.`,
      keyTakeaway: "The best way to learn web development is to build, not just read -- start with simple projects and iterate.",
      actionItem: "Create your about-me.html page and open it in three different browsers to see how it looks.",
    },
  },
  {
    id: "webdev-004",
    title: "CSS: The Art of Making Things Beautiful",
    type: "concept",
    duration: 12,
    xpReward: 120,
    content: {
      overview: "Transform plain HTML into visually stunning pages with CSS.",
      mainContent: `## From Boring to Beautiful

CSS (Cascading Style Sheets) turns bland HTML documents into beautiful interfaces. It's the difference between a text document and a magazine spread.

**Three Ways to Add CSS:**

1. **Inline:** \`<p style="color: blue;">\` -- quick but messy
2. **Internal:** \`<style>\` tag in \`<head>\` -- good for single pages
3. **External:** Separate \`.css\` file -- best for real projects

**CSS Syntax:**
\`\`\`css
selector {
  property: value;
}
\`\`\`

Example: \`p { color: navy; }\` makes all paragraphs navy blue.

**Essential Properties:**

| Property | Purpose | Example |
|----------|---------|---------|
| \`color\` | Text color | \`color: #FF5733;\` |
| \`background-color\` | Background color | \`background-color: lightgray;\` |
| \`font-size\` | Text size | \`font-size: 18px;\` |
| \`font-family\` | Font style | \`font-family: Arial, sans-serif;\` |
| \`margin\` | Space outside element | \`margin: 20px;\` |
| \`padding\` | Space inside element | \`padding: 15px;\` |
| \`border\` | Border around element | \`border: 2px solid black;\` |

**The Box Model** is CSS's secret. Every element is a box with content, padding (inner space), border, and margin (outer space). Mastering this concept unlocks 80% of layout challenges.

**Selectors Get Specific:**
- \`p\` selects all paragraphs
- \`.classname\` selects all elements with that class
- \`#idname\` selects the element with that ID
- \`div p\` selects paragraphs inside divs

Here's industry wisdom: companies pay designers six figures to choose the right shade of blue. Color psychology is real. Blue conveys trust (banks, Facebook). Red conveys urgency (sales, Netflix). Green conveys growth (finance apps). Your CSS choices affect user behavior.`,
      keyTakeaway: "CSS transforms HTML structure into visual design using selectors and properties -- master the box model to control layout.",
      actionItem: "Add a \`<style>\` section to your about-me.html and change the colors, fonts, and spacing.",
    },
  },
  {
    id: "webdev-005",
    title: "CSS Mastery Quiz",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your understanding of CSS fundamentals.",
      mainContent: `## CSS Knowledge Check

CSS is the bridge between structure and beauty. These questions test whether you understand how to wield that power.

Understanding CSS selectors, the box model, and property syntax is fundamental. Every professional web developer uses these concepts hundreds of times per day.

Remember: the best way to truly learn CSS is to experiment. Change values, break things, see what happens. CSS is forgiving -- it won't crash your computer, it'll just look weird. That's the perfect learning environment.`,
      keyTakeaway: "CSS mastery comes from understanding selectors, properties, and the box model.",
      quiz: {
        question: "What does the CSS property 'margin' control?",
        options: [
          "Space outside an element's border",
          "Space inside an element's border",
          "The element's text color",
          "The element's border thickness"
        ],
        correct: 0,
        explanation: "Margin controls the space outside an element's border, pushing other elements away. Padding controls the space inside the border. This is part of the CSS box model: content → padding → border → margin."
      },
    },
  },
  {
    id: "webdev-006",
    title: "Responsive Design: One Site, Every Screen",
    type: "concept",
    duration: 13,
    xpReward: 130,
    content: {
      overview: "Learn how modern websites adapt seamlessly from phones to massive displays.",
      mainContent: `## Design for Everyone, Everywhere

In 2025, 63% of web traffic comes from mobile devices. If your site doesn't work on phones, you've lost 63% of your audience before they read a single word.

**Responsive design** means your website automatically adapts to any screen size -- phone, tablet, laptop, desktop, even TVs and smartwatches.

**The Foundation: Viewport Meta Tag**
\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`
This single line in your \`<head>\` tells mobile browsers: "Don't zoom out, use the actual screen width." Without it, your site will look like a desktop page shrunk down -- tiny and unusable.

**Fluid Layouts: Think Percentages, Not Pixels**

Bad: \`width: 800px;\` -- breaks on small screens
Good: \`width: 80%;\` -- adapts to any screen

**Media Queries: CSS That Adapts**
\`\`\`css
/* Default styles for mobile */
body {
  font-size: 16px;
}

/* Styles for tablets and larger */
@media (min-width: 768px) {
  body {
    font-size: 18px;
  }
}

/* Styles for desktops */
@media (min-width: 1024px) {
  body {
    font-size: 20px;
  }
}
\`\`\`

This is **mobile-first design** -- start with mobile styles, then enhance for larger screens. Why? It's easier to add features than remove them.

**Common Breakpoints:**
- 320px: Small phones
- 768px: Tablets
- 1024px: Laptops
- 1440px: Large desktops

Real-world impact: Airbnb's mobile redesign increased bookings by 30%. Amazon found that every 100ms of load time cost them 1% in sales. Responsive design isn't aesthetic -- it's business.

> "Content is like water. It takes the shape of whatever container you pour it into." -- Josh Clark, designer`,
      keyTakeaway: "Responsive design uses fluid layouts and media queries to create one website that works beautifully on every device.",
      actionItem: "Resize your browser window on any major website and watch how the layout transforms.",
    },
  },
  {
    id: "webdev-007",
    title: "JavaScript: Bringing Pages to Life",
    type: "concept",
    duration: 14,
    xpReward: 140,
    content: {
      overview: "Discover how JavaScript transforms static pages into interactive experiences.",
      mainContent: `## The Language of Interactivity

JavaScript is the only programming language that runs natively in web browsers. That monopoly made it the most used programming language on Earth.

**What JavaScript Does:**
- Responds to user actions (clicks, scrolling, typing)
- Modifies HTML and CSS in real-time
- Fetches data from servers without reloading
- Validates forms before submission
- Creates animations and visual effects

**Your First JavaScript:**
\`\`\`html
<button onclick="alert('Hello!')">Click Me</button>
\`\`\`

When clicked, a popup appears. That's JavaScript.

**Variables: Storing Information**
\`\`\`javascript
let userName = "Alex";
const birthYear = 1995;
var oldStyle = "avoid this";
\`\`\`

Use \`let\` for values that change, \`const\` for values that don't. Avoid \`var\` -- it's outdated and causes bugs.

**Functions: Reusable Code Blocks**
\`\`\`javascript
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("World")); // "Hello, World!"
\`\`\`

**DOM Manipulation: Changing HTML with JavaScript**
\`\`\`javascript
document.getElementById("demo").innerHTML = "Text changed!";
document.querySelector(".button").style.color = "red";
\`\`\`

The **DOM (Document Object Model)** is JavaScript's view of your HTML. You can change any element, style, or content instantly.

**Event Listeners: Responding to Users**
\`\`\`javascript
document.querySelector("button").addEventListener("click", function() {
  alert("Button clicked!");
});
\`\`\`

Industry insight: JavaScript frameworks (React, Vue, Angular) are just JavaScript with helpful tools. Learn vanilla JavaScript first. Once you understand the fundamentals, frameworks make sense. Learn frameworks first, and you'll struggle forever.

Netflix, Facebook, Gmail -- all powered by JavaScript. It's not just for websites anymore: it powers servers (Node.js), mobile apps (React Native), even desktop applications (Electron).`,
      keyTakeaway: "JavaScript adds interactivity to web pages by manipulating the DOM, handling events, and running logic in the browser.",
      actionItem: "Open your browser console (F12), type 'console.log('Hello')' and press Enter to run JavaScript.",
    },
  },
  {
    id: "webdev-008",
    title: "Web Development Foundations Quiz",
    type: "quiz",
    duration: 10,
    xpReward: 120,
    content: {
      overview: "Test your mastery of HTML, CSS, JavaScript, and responsive design.",
      mainContent: `## Level 1 Mastery Check

You've learned the trinity of web development: HTML for structure, CSS for style, JavaScript for behavior. You understand responsive design and why it matters.

These concepts form the foundation of every website ever built. Master them, and you can build anything on the web.

The web development journey is infinite. There's always more to learn -- new frameworks, new techniques, new best practices. But these fundamentals never change. HTML, CSS, and JavaScript have been the core technologies for 30 years and will be for 30 more.

Keep building. Every expert was once a beginner who didn't quit.`,
      keyTakeaway: "HTML, CSS, and JavaScript working together create the entire web -- master these fundamentals before moving to frameworks.",
      quiz: {
        question: "What is the primary purpose of JavaScript in web development?",
        options: [
          "To add interactivity and dynamic behavior to web pages",
          "To define the structure and content of web pages",
          "To style and layout web pages",
          "To store data in databases"
        ],
        correct: 0,
        explanation: "JavaScript's primary purpose is to add interactivity and dynamic behavior to web pages. HTML defines structure, CSS handles styling, and databases store data. JavaScript brings pages to life by responding to user actions and manipulating content in real-time."
      },
    },
  },
];
