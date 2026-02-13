import type { PathwayLesson } from "@/types";

export const devopsLessonsLevel1: PathwayLesson[] = [
  {
    id: "devops-001",
    title: "The Cloud Revolution Explained",
    type: "intro",
    duration: 11,
    xpReward: 110,
    content: {
      overview: "Understand why companies moved from physical servers to the cloud -- and why it changed everything.",
      mainContent: `## From Server Rooms to Invisible Infrastructure

In 2006, a small startup needed servers to run their website. They had two options: spend $100,000 on physical servers, or pay Amazon $50/month to rent virtual servers. They chose Amazon. That startup was Dropbox. Today, they store 600+ petabytes of data in the cloud.

**What is the cloud?** Simply put: someone else's computers that you rent over the internet.

Before the cloud, companies bought physical servers, installed them in data centers, hired people to maintain them, and hoped they'd estimated capacity correctly. Too few servers? Your site crashes during traffic spikes. Too many? You wasted money on idle hardware.

**The cloud changed three things:**

1. **Elastic scaling:** Netflix uses 100,000 servers on Friday night and 20,000 on Tuesday morning. They only pay for what they use. Try doing that with physical hardware.

2. **No upfront investment:** Startups can launch with $10/month instead of $100,000. This democratized technology. Instagram had 13 employees when Facebook bought it for $1 billion -- possible only because cloud infrastructure was cheap.

3. **Global reach instantly:** Deploy servers in Tokyo, London, and São Paulo with a few clicks. Before the cloud, this required years and millions of dollars.

**The Big Three Cloud Providers:**
- **AWS (Amazon):** 32% market share, most services
- **Azure (Microsoft):** 23% market share, best for enterprises
- **GCP (Google):** 10% market share, best for data/ML

Here's the paradigm shift: you don't own infrastructure anymore, you rent capabilities. Need video transcoding? Storage? Machine learning? Databases? Just enable it -- no installation, no maintenance.

> "The cloud is about how you do computing, not where you do computing." -- Paul Maritz, VMware CEO

By 2025, 85% of enterprises have a cloud-first strategy. Understanding the cloud isn't optional anymore -- it's fundamental.`,
      keyTakeaway: "The cloud is rented computing infrastructure that scales instantly, costs only what you use, and eliminates hardware management.",
      actionItem: "Visit aws.amazon.com/free to see what services are available -- notice how they're categorized by capability, not hardware.",
    },
  },
  {
    id: "devops-002",
    title: "Containers: Apps in a Box",
    type: "concept",
    duration: 13,
    xpReward: 130,
    content: {
      overview: "Learn why Docker containers revolutionized how we build and deploy software.",
      mainContent: `## The 'It Works on My Machine' Problem

Developer: "The app works perfectly on my laptop!"
Operations: "It crashes in production. What's different?"
Developer: "Nothing! ...wait, I have Python 3.9, you have 3.7."
Operations: "And you have Linux, we have Windows Server."

This conversation happened millions of times before Docker.

**Containers solve the packaging problem.** Think of a container like a shipping container for code. Just as shipping containers can hold anything (toys, electronics, food) and fit on any ship, truck, or train -- Docker containers can hold any application and run on any computer.

**How Containers Work:**

A container packages your application with everything it needs:
- Your code
- Programming language runtime
- System libraries
- Dependencies
- Configuration files

All wrapped in a standardized format that runs identically everywhere -- your laptop, test servers, production, the cloud.

**Docker: The Standard Container Format**

\`\`\`dockerfile
# Example Dockerfile
FROM python:3.9
COPY app.py /app/
RUN pip install flask
CMD python /app/app.py
\`\`\`

This simple text file defines an entire environment. Anyone can run it and get identical results.

**Virtual Machines vs Containers:**

| Virtual Machines | Containers |
|-----------------|------------|
| Full OS each (heavy) | Share host OS (light) |
| GB in size | MB in size |
| Minutes to start | Seconds to start |
| 10s per host | 100s per host |

Containers are faster, lighter, and more efficient.

**Real Impact:**

Spotify runs 300+ microservices in containers. PayPal reduced deployment time from hours to minutes. The New York Times migrated 30+ years of content to containers in 2017.

Docker democratized deployment. Before containers, deployment was complex and error-prone. After containers, it's "docker run" and you're done.

**Kubernetes (K8s)** is Docker's orchestra conductor -- managing thousands of containers across hundreds of servers automatically. Google uses it to deploy 2+ billion containers per week.`,
      keyTakeaway: "Containers package applications with all dependencies into portable, lightweight units that run identically anywhere.",
      actionItem: "Search 'Docker Hub' to see thousands of pre-built container images you can run with one command.",
    },
  },
  {
    id: "devops-003",
    title: "CI/CD: The Deployment Assembly Line",
    type: "concept",
    duration: 12,
    xpReward: 120,
    content: {
      overview: "Discover how modern teams deploy code hundreds of times per day without breaking things.",
      mainContent: `## From Monthly Releases to Hourly Updates

In 2000, Microsoft released Windows once every 3 years. In 2025, they update Windows components multiple times per day. What changed? CI/CD.

**CI/CD stands for Continuous Integration / Continuous Deployment** -- the practice of automatically testing and deploying code changes.

**The Old Way:**
1. Developers write code for weeks
2. Someone manually combines everyone's code
3. Bugs appear (whose code broke it?)
4. Frantic debugging
5. Manual deployment to production
6. Hope nothing breaks
7. Repeat monthly (or less)

**The CI/CD Way:**
1. Developer writes code
2. Commits to version control (Git)
3. Automated tests run immediately
4. If tests pass, automatically deploy
5. Repeat hundreds of times daily

**Continuous Integration (CI):**
Every code change triggers automated tests. If someone's change breaks something, you know immediately -- before it affects others. It's like spell-check for code.

**Continuous Deployment (CD):**
If all tests pass, the code automatically deploys to production. No human clicks "deploy." No waiting. No ceremonies.

**The Pipeline:**

\`\`\`
Code Commit → Build → Test → Deploy → Monitor
     ↓           ↓       ↓        ↓        ↓
   GitHub    Compile  Unit    Staging   Logs
             Docker   Tests   Server    Alerts
                      Integration Prod
                      Tests    Server
\`\`\`

**Popular CI/CD Tools:**
- GitHub Actions (integrated with GitHub)
- GitLab CI/CD (integrated with GitLab)
- Jenkins (old but powerful)
- CircleCI (fast and simple)

**Real-World Impact:**

Amazon deploys every 11.7 seconds. Netflix deploys 1,000+ times daily. Etsy deploys 50+ times daily. This speed isn't reckless -- it's reliable because automation catches problems before humans see them.

> "If it hurts, do it more frequently, and bring the pain forward." -- Jez Humble, CI/CD pioneer

The counterintuitive truth: deploying more often is safer than deploying rarely. Small changes are easy to test and easy to fix. Large changes are complex nightmares.`,
      keyTakeaway: "CI/CD automates testing and deployment, enabling teams to ship code changes safely and frequently throughout the day.",
      actionItem: "Check if any open-source projects you use have a '.github/workflows' folder -- that's their CI/CD configuration.",
    },
  },
  {
    id: "devops-004",
    title: "Cloud & DevOps Concepts Quiz",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your understanding of cloud computing, containers, and CI/CD.",
      mainContent: `## Paradigm Shift Check

Cloud computing, containers, and CI/CD represent a fundamental shift in how software is built and deployed. These aren't just tools -- they're new ways of thinking.

The cloud thinks in terms of services, not servers. Containers think in terms of portability, not installation. CI/CD thinks in terms of flow, not releases.

Companies that embraced these concepts (Netflix, Spotify, Airbnb) scaled to millions of users with small teams. Companies that didn't (Blockbuster, Kodak, BlackBerry) struggled to adapt.

Technology changes, but these principles endure: automate repetitive tasks, standardize environments, deploy incrementally.`,
      keyTakeaway: "Cloud, containers, and CI/CD enable fast, reliable, scalable software delivery.",
      quiz: {
        question: "What is the primary advantage of using containers like Docker?",
        options: [
          "Applications run identically across different environments",
          "Applications run faster than on physical servers",
          "Applications require less code to write",
          "Applications automatically fix their own bugs"
        ],
        correct: 0,
        explanation: "The primary advantage of containers is consistency -- they package applications with all dependencies, ensuring they run identically on any system. This solves the 'works on my machine' problem. While containers can be efficient, speed isn't their main benefit, and they don't reduce code or fix bugs automatically."
      },
    },
  },
  {
    id: "devops-005",
    title: "Databases: Where Your Data Lives",
    type: "concept",
    duration: 14,
    xpReward: 140,
    content: {
      overview: "Understand how databases store, organize, and retrieve the data that powers applications.",
      mainContent: `## The Memory of the Internet

Every app you use -- social media, banking, shopping, email -- stores data somewhere. That somewhere is a database.

**What is a database?** An organized collection of data that can be easily accessed, managed, and updated. Think of it as a super-smart filing cabinet that can instantly find any piece of information among billions.

**The Two Main Types:**

**1. SQL (Relational Databases)**

Data organized in tables with rows and columns, like Excel spreadsheets. Tables relate to each other through shared IDs.

Example: A user table links to an orders table.

\`\`\`sql
SELECT * FROM users WHERE age > 25;
\`\`\`

**Popular SQL Databases:**
- PostgreSQL (powerful, open-source)
- MySQL (simple, popular)
- Microsoft SQL Server (enterprise)

**Pros:** Structured, reliable, handles complex queries
**Cons:** Harder to scale horizontally

**2. NoSQL (Non-Relational Databases)**

Data stored as documents (like JSON), key-value pairs, graphs, or columns. More flexible structure.

Example: MongoDB stores user profiles as JSON documents.

\`\`\`json
{
  "name": "Alex",
  "age": 28,
  "interests": ["coding", "music"]
}
\`\`\`

**Popular NoSQL Databases:**
- MongoDB (document-based)
- Redis (key-value, extremely fast)
- Cassandra (column-based, massive scale)

**Pros:** Flexible, scales easily, fast
**Cons:** Less structure can mean messier data

**Choosing the Right Database:**

Use SQL when:
- Data has clear relationships (users → orders → products)
- You need complex queries
- Data integrity is critical (banking, healthcare)

Use NoSQL when:
- Structure changes frequently
- You need extreme scale (millions of requests/second)
- Data is varied or hierarchical

**Real-World Examples:**

- **Facebook:** Started with MySQL, now uses custom databases for different needs
- **Netflix:** Uses Cassandra for scale (handles 1 trillion requests/day)
- **Twitter:** Uses both MySQL and Redis (Redis for timelines -- blazing fast reads)

Here's the secret: most large companies use multiple databases. They choose the right tool for each job. User profiles in PostgreSQL, caching in Redis, analytics in a data warehouse.

Understanding databases unlocks the ability to build applications that remember.`,
      keyTakeaway: "SQL databases use structured tables with relationships; NoSQL databases use flexible formats for scale and speed.",
      actionItem: "Think about an app you use daily -- what data does it store, and would SQL or NoSQL make more sense?",
    },
  },
  {
    id: "devops-006",
    title: "Infrastructure as Code: Configuration That Scales",
    type: "concept",
    duration: 12,
    xpReward: 120,
    content: {
      overview: "Learn how treating infrastructure like code enables reliability and rapid scaling.",
      mainContent: `## Clicking Buttons Doesn't Scale

Imagine setting up 100 servers by clicking through a web interface. Click "create server." Choose size. Select region. Configure network. Install software. Repeat 100 times. Hours of mind-numbing work, and if you make one mistake, your servers aren't identical.

**Infrastructure as Code (IaC)** means defining your entire infrastructure in text files. Want 100 servers? Write it once, run it once, get 100 identical servers.

**Example with Terraform:**

\`\`\`hcl
resource "aws_instance" "web_server" {
  count = 100
  ami = "ami-12345"
  instance_type = "t2.micro"

  tags = {
    Name = "web-server-\${count.index}"
  }
}
\`\`\`

This creates 100 servers. Change \`count = 100\` to \`count = 200\`, run again, get 100 more.

**Why IaC Changed Everything:**

**1. Repeatability:** Run the same script, get identical results
**2. Version Control:** Infrastructure changes tracked in Git like code
**3. Documentation:** The code IS the documentation
**4. Testing:** Test infrastructure changes before deploying
**5. Speed:** Minutes instead of hours

**Popular IaC Tools:**

- **Terraform:** Works with AWS, Azure, Google Cloud, and 1000+ providers
- **CloudFormation:** AWS-specific, deeply integrated
- **Ansible:** Configuration management and automation
- **Pulumi:** Write IaC in real programming languages (Python, JavaScript)

**The Mental Shift:**

Traditional: "Servers are pets. Name them, care for them, fix them when sick."
IaC: "Servers are cattle. Identical, replaceable, disposable."

If a server fails? Don't fix it. Destroy it and create a new one from code in 60 seconds.

**Real Impact:**

Capital One migrated from 8 data centers to the cloud using IaC. They shut down physical data centers worth $100+ million because cloud infrastructure defined in code was cheaper and more reliable.

HashiCorp (makers of Terraform) helps manage infrastructure for 60% of the Fortune 500.

> "The goal of automation is not to eliminate the human touch, but to amplify it." -- Werner Vogels, Amazon CTO

IaC doesn't replace engineers -- it frees them from repetitive tasks to solve harder problems.`,
      keyTakeaway: "Infrastructure as Code defines servers and resources in text files, enabling version control, testing, and rapid scaling.",
      actionItem: "Search for 'terraform aws examples' to see real infrastructure defined as code.",
    },
  },
  {
    id: "devops-007",
    title: "Monitoring & Observability: Know What's Happening",
    type: "concept",
    duration: 11,
    xpReward: 110,
    content: {
      overview: "Discover how modern teams detect and fix problems before users notice.",
      mainContent: `## You Can't Fix What You Can't See

Your app just crashed. Questions flood in:
- When did it start?
- What changed?
- Which servers are affected?
- Is it still happening?

Without monitoring, you're blind. With monitoring, you have answers in seconds.

**Monitoring vs Observability:**

**Monitoring** answers: "Is it working?" (Yes/No)
**Observability** answers: "Why isn't it working?" (Deep understanding)

**The Three Pillars of Observability:**

**1. Logs:** Text records of events
\`\`\`
2025-02-13 14:32:15 ERROR: Database connection timeout
2025-02-13 14:32:16 INFO: Retrying connection...
\`\`\`

**2. Metrics:** Numerical measurements over time
- CPU usage: 75%
- Response time: 234ms
- Requests per second: 1,203

**3. Traces:** Path of a single request through your system
\`\`\`
API → Database → Cache → Response
50ms   120ms      15ms    185ms total
\`\`\`

**Key Metrics to Monitor:**

| Metric | Why It Matters |
|--------|----------------|
| Response Time | Slow = bad user experience |
| Error Rate | Breaking for users? |
| CPU/Memory | Running out of resources? |
| Disk Space | Will the server crash tonight? |
| Request Rate | Traffic spike or attack? |

**Popular Tools:**

- **Prometheus:** Metrics collection and alerting
- **Grafana:** Beautiful dashboards
- **Datadog:** All-in-one monitoring (expensive but powerful)
- **ELK Stack:** Elasticsearch, Logstash, Kibana for log analysis
- **New Relic:** Application performance monitoring

**Alerting Done Right:**

Bad alert: "CPU is high" (fires 1000 times, team ignores)
Good alert: "API response time > 500ms for 5 minutes" (actionable, specific)

**Alert Fatigue** is real. Too many alerts = people stop paying attention. Only alert on things that require human action.

**Real Examples:**

- GitHub knew about a database issue 45 minutes before users noticed because metrics detected subtle slowdowns
- Netflix uses chaos engineering -- intentionally breaks things in production to ensure monitoring catches it

The irony: great monitoring is invisible. When everything works, nobody thinks about monitoring. When disaster strikes, monitoring is the difference between 5-minute fixes and 5-hour outages.`,
      keyTakeaway: "Monitoring shows that systems are working; observability explains why they're not -- both require logs, metrics, and traces.",
      actionItem: "Visit status.github.com to see how major companies display uptime and incidents publicly.",
    },
  },
  {
    id: "devops-008",
    title: "DevOps Fundamentals Mastery Quiz",
    type: "quiz",
    duration: 9,
    xpReward: 110,
    content: {
      overview: "Validate your understanding of cloud, DevOps, and modern infrastructure practices.",
      mainContent: `## The New Software Paradigm

DevOps isn't a job title or a tool -- it's a culture. It's developers and operations working together, automation replacing manual work, and infrastructure treated like code.

You've learned the building blocks: cloud elasticity, container portability, CI/CD automation, database patterns, infrastructure as code, and observability. These concepts work together to enable modern software delivery.

Companies that master DevOps ship faster, break less, and scale effortlessly. Companies that don't struggle with slow releases, frequent outages, and inability to scale.

The DevOps journey never ends. New tools emerge constantly. But the principles remain: automate everything, measure everything, improve continuously.

As Werner Vogels says: "Everything fails, all the time." DevOps is about building systems that fail gracefully and recover automatically.`,
      keyTakeaway: "DevOps combines culture, automation, and tools to enable fast, reliable, scalable software delivery.",
      quiz: {
        question: "What is the main goal of Continuous Integration (CI)?",
        options: [
          "To automatically test code changes immediately after they're committed",
          "To manually review all code before deployment",
          "To deploy code to production servers",
          "To create backups of databases"
        ],
        correct: 0,
        explanation: "Continuous Integration automatically tests code changes immediately after they're committed to version control. This catches bugs early, before they affect other developers or reach production. Manual reviews and deployment are separate steps, and CI doesn't handle database backups."
      },
    },
  },
];
