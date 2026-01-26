import type { PathwayLesson } from '@/types';

export const socialEngineeringLessons: PathwayLesson[] = [
  {
    id: 'dp-social-001',
    title: 'What is Social Engineering - Overview',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Understanding the fundamental principles of social engineering and why humans are often the weakest link in security.',
      mainContent: `**The Human Element in Security**

Social engineering is the art of manipulating people into divulging confidential information or performing actions that compromise security. Unlike technical hacking, which exploits software vulnerabilities, social engineering exploits human psychology—our trust, helpfulness, fear, and desire to avoid conflict.

**Why Social Engineering Works**

Humans are inherently social creatures. We evolved to trust others within our community, to help those in need, and to defer to authority figures. Social engineers exploit these deeply ingrained behaviors. According to security research, over 90% of successful cyberattacks begin with some form of social engineering.

**The Six Principles of Influence**

Robert Cialdini identified six psychological principles that social engineers routinely exploit:

1. **Reciprocity** - We feel obligated to return favors
2. **Commitment/Consistency** - Once we agree to something small, we continue agreeing
3. **Social Proof** - We follow what others are doing
4. **Authority** - We defer to perceived experts and leaders
5. **Liking** - We comply more readily with people we like
6. **Scarcity** - We value things that seem rare or limited

**The Attack Lifecycle**

Most social engineering attacks follow a predictable pattern:

- **Research**: Gathering information about the target
- **Development**: Creating a believable pretext or scenario
- **Exploitation**: Executing the attack
- **Execution**: Achieving the objective (data theft, access, etc.)

**Defense Mindset**

Understanding social engineering is not about becoming paranoid—it's about developing healthy skepticism. The goal is to recognize manipulation attempts while maintaining genuine human connections. Throughout this module, you'll learn to identify common tactics and build resilient security habits.

**The Cost of Ignorance**

Organizations lose billions annually to social engineering. Individuals suffer identity theft, financial loss, and emotional trauma. By understanding these tactics, you protect not only yourself but everyone in your network.`,
      keyTakeaway: 'Social engineering exploits human psychology rather than technical vulnerabilities—understanding the six principles of influence is your first line of defense.',
      actionItem: 'This week, pay attention to how often you automatically comply with requests. Notice when someone uses urgency, authority, or reciprocity to influence your decisions.',
    },
  },
  {
    id: 'dp-social-002',
    title: 'Pretexting - Creating False Scenarios',
    type: 'concept',
    duration: 14,
    xpReward: 110,
    content: {
      overview: 'How attackers create elaborate fictional scenarios to gain trust and extract sensitive information.',
      mainContent: `**The Art of the Believable Lie**

Pretexting is the practice of creating a fabricated scenario (pretext) to engage a victim and gain their trust. Unlike simple lies, pretexts are carefully researched and rehearsed narratives designed to seem completely plausible.

**Common Pretext Categories**

**Technical Support Pretexts**
- "I'm from IT—we detected unusual activity on your account"
- "Your computer is sending error reports to our servers"
- "We need to verify your credentials for a system upgrade"

**Authority Pretexts**
- "This is the fraud department from your bank"
- "I'm calling from the CEO's office regarding an urgent matter"
- "This is a government agency investigating potential issues with your account"

**Service Provider Pretexts**
- "I'm your new account representative"
- "We're updating our records and need to verify information"
- "There's a problem with your recent order/shipment"

**Building a Pretext**

Skilled social engineers invest significant effort in pretext development:

1. **Research Phase**: Studying the organization's structure, terminology, and processes
2. **Role Selection**: Choosing a believable identity that provides justification for the request
3. **Story Development**: Creating a scenario that explains why information is needed urgently
4. **Prop Preparation**: Gathering supporting elements (fake IDs, uniforms, documents)
5. **Rehearsal**: Practicing responses to likely questions

**Red Flags to Watch For**

- Unsolicited contact asking for sensitive information
- Claims that can't be easily verified
- Pressure to act quickly without verification
- Requests that bypass normal procedures
- Overly detailed explanations (overcompensating for lies)
- Emotional manipulation through flattery or sympathy

**Verification Strategies**

When someone contacts you with a pretext, always verify independently:

- Hang up and call the organization's official number
- Ask for callback information and verify it
- Request written confirmation through official channels
- Consult with colleagues or supervisors before acting
- Trust your instincts if something feels wrong`,
      keyTakeaway: 'Pretexting relies on creating believable scenarios—always verify unsolicited requests through independent channels, never using contact information provided by the requester.',
      actionItem: 'Create a personal verification protocol: before sharing any sensitive information, commit to always calling back on a verified number or confirming through an alternative channel.',
    },
  },
  {
    id: 'dp-social-003',
    title: 'Phishing - Digital Deception',
    type: 'concept',
    duration: 15,
    xpReward: 120,
    content: {
      overview: 'Recognizing and defending against phishing attacks—the most prevalent form of social engineering in the digital age.',
      mainContent: `**The Phishing Epidemic**

Phishing attacks use fraudulent emails, websites, or messages to trick victims into revealing sensitive information. With over 3.4 billion phishing emails sent daily, it remains the most common attack vector for cybercriminals.

**Types of Phishing Attacks**

**Mass Phishing**
Generic emails sent to millions, hoping a small percentage will click. Often impersonate banks, shipping companies, or popular services.

**Spear Phishing**
Targeted attacks using personal information gathered about specific individuals. Much more convincing because details are accurate.

**Whaling**
Attacks targeting high-value individuals like executives, using sophisticated pretexts relevant to their role.

**Clone Phishing**
Duplicating legitimate emails but replacing links or attachments with malicious versions.

**Anatomy of a Phishing Email**

**Sender Manipulation**
- Spoofed addresses (support@amaz0n.com vs amazon.com)
- Display name tricks ("Bank of America" from random@attacker.com)
- Compromised legitimate accounts

**Urgency Triggers**
- "Your account will be suspended in 24 hours"
- "Unusual activity detected—verify immediately"
- "Missed delivery—reschedule now"

**Call to Action**
- Links to fake login pages
- Malicious attachments
- Requests to reply with personal information

**Detection Techniques**

**Examine the Sender**
- Hover over the sender's name to reveal the actual email address
- Check for misspellings or character substitutions
- Be suspicious of unexpected emails from known contacts

**Analyze Links Without Clicking**
- Hover over links to see the actual URL
- Look for HTTPS and valid certificates
- Check for misspellings in domains

**Evaluate the Content**
- Poor grammar or unusual phrasing
- Generic greetings ("Dear Customer" instead of your name)
- Requests for sensitive information via email

**Protective Measures**

- Enable multi-factor authentication on all accounts
- Use a password manager to prevent credential entry on fake sites
- Report phishing attempts to your organization and email provider
- Keep software and browsers updated
- When in doubt, navigate directly to websites rather than clicking links`,
      keyTakeaway: 'Phishing succeeds through urgency and impersonation—always verify sender addresses, hover before clicking links, and navigate directly to websites rather than trusting email links.',
      actionItem: 'Enable multi-factor authentication on your five most important accounts (email, banking, social media) this week. MFA stops most phishing attacks even if credentials are compromised.',
    },
  },
  {
    id: 'dp-social-004',
    title: 'Vishing & Smishing - Voice & SMS Attacks',
    type: 'concept',
    duration: 13,
    xpReward: 110,
    content: {
      overview: 'Understanding voice-based (vishing) and SMS-based (smishing) social engineering attacks that bypass email security.',
      mainContent: `**Beyond Email: Voice and Text Attacks**

As email security improves, attackers increasingly turn to phone calls (vishing) and text messages (smishing). These channels often bypass technical security measures and leverage the immediacy of real-time communication.

**Vishing: Voice Phishing**

Vishing uses phone calls to manipulate victims. Attackers exploit caller ID spoofing to appear as trusted entities.

**Common Vishing Scenarios**

**Technical Support Scams**
- "We detected a virus on your computer"
- Requests for remote access software installation
- Demands for payment via gift cards or wire transfer

**Financial Institution Fraud**
- "Suspicious activity on your account"
- Requests to "verify" card numbers or PINs
- Transfers to "secure" accounts controlled by attackers

**Government Impersonation**
- Fake IRS calls demanding immediate tax payment
- Social Security "suspension" threats
- Immigration status threats

**Vishing Red Flags**
- Unsolicited calls about problems you didn't report
- Requests for sensitive information over the phone
- Pressure to act immediately
- Requests for unusual payment methods (gift cards, cryptocurrency)
- Caller ID showing local numbers for "national" organizations

**Smishing: SMS Phishing**

Text message attacks exploit our tendency to trust SMS and the difficulty of verifying sender identity on mobile devices.

**Common Smishing Tactics**

- Package delivery notifications with tracking links
- Bank alerts requiring "verification"
- Prize/lottery winning notifications
- Account suspension warnings
- COVID-related scams (test results, benefits)

**Why Smishing Is Effective**
- SMS has higher open rates than email (98% vs 20%)
- Mobile screens make URL inspection difficult
- Texts feel more personal and immediate
- Limited security tools for SMS

**Defense Strategies**

**For Vishing**
- Never provide sensitive information to incoming callers
- Hang up and call the organization directly using a verified number
- Don't trust caller ID—it's easily spoofed
- Be suspicious of urgent requests or threats

**For Smishing**
- Don't click links in unexpected text messages
- Type URLs directly into your browser
- Use official apps instead of links for banking/shopping
- Block and report suspicious numbers
- Enable spam filtering on your phone`,
      keyTakeaway: 'Voice and SMS attacks exploit real-time pressure and trust in phone communications—always verify by calling back on official numbers and avoid clicking links in text messages.',
      actionItem: 'Program the official customer service numbers for your bank and major accounts into your phone contacts. When you receive suspicious calls, you can immediately call the verified number to check.',
    },
  },
  {
    id: 'dp-social-005',
    title: 'Tailgating & Physical Access',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'How social engineers gain unauthorized physical access to secure facilities through social manipulation.',
      mainContent: `**Breaching Physical Security**

Tailgating (also called "piggybacking") is a physical social engineering technique where an unauthorized person follows an authorized person into a restricted area. Despite sophisticated access control systems, human nature often renders them ineffective.

**Why Tailgating Works**

**Social Pressure**
- Holding doors is considered polite
- Challenging someone feels confrontational
- We assume others belong if they act confidently

**Authority and Props**
- Uniforms create automatic trust
- Badges (even fake ones) provide legitimacy
- Props like delivery boxes or tools justify presence

**Exploiting Routines**
- Busy entry points during shift changes
- Propped-open doors during deliveries
- Smoking areas with disabled access controls

**Common Tailgating Scenarios**

**The Delivery Person**
Carrying boxes, wearing a uniform, the attacker asks someone to "hold the door" since their hands are full.

**The New Employee**
"I'm new here and forgot my badge at my desk. Could you let me in? I'm running late for a meeting."

**The Repair Technician**
Wearing a utility company uniform, carrying tools, claiming to check a reported issue.

**The Overwhelmed Visitor**
Carrying coffee, laptop bag, and appearing rushed and stressed, appealing to others' empathy.

**Beyond Tailgating: Physical Social Engineering**

**Shoulder Surfing**
Observing passwords, PINs, or sensitive information by looking over someone's shoulder.

**Dumpster Diving**
Retrieving discarded documents containing sensitive information.

**Badge Cloning**
Using RFID readers to copy access credentials from proximity cards.

**Impersonation**
Posing as maintenance, IT support, or vendors to gain access and information.

**Protective Measures**

**Individual Responsibility**
- Never hold doors for unknown individuals in secure areas
- Politely ask for identification if uncertain
- Report tailgating attempts to security
- Be aware of shoulder surfers in public spaces

**Environmental Awareness**
- Note unfamiliar faces in secure areas
- Don't leave guests unattended
- Question people without visible badges
- Protect screens when entering credentials

**Organizational Support**
- Use mantrap entrances for high-security areas
- Implement visitor management systems
- Train all employees on physical security
- Create a culture where challenging unknown people is acceptable`,
      keyTakeaway: 'Physical security depends on every individual—politeness can be exploited, so create a culture where politely challenging unknown people in secure areas is expected and acceptable.',
      actionItem: 'Practice politely challenging tailgating: "I don\'t think I\'ve seen you before—let me help you check in with reception." Having a prepared phrase makes it easier in the moment.',
    },
  },
  {
    id: 'dp-social-006',
    title: 'Baiting - Using Curiosity Against You',
    type: 'concept',
    duration: 11,
    xpReward: 100,
    content: {
      overview: 'Understanding how attackers exploit human curiosity through physical and digital lures.',
      mainContent: `**The Power of Curiosity**

Baiting attacks exploit one of humanity's strongest drives: curiosity. By offering something enticing—whether physical or digital—attackers lure victims into compromising their security.

**Physical Baiting**

**The USB Drop**
Attackers leave infected USB drives in locations where targets will find them:
- Parking lots of target companies
- Coffee shops near offices
- Conference venues
- Public transportation

Studies show 45-98% of people will plug in found USB drives, often within minutes of discovery. The curiosity about the contents overrides security awareness.

**Other Physical Baits**
- CDs/DVDs labeled with intriguing content ("Confidential," "Salary Information")
- "Lost" phones with malware
- Free promotional items with hidden threats
- QR codes posted in public places

**Digital Baiting**

**Free Downloads**
- Pirated software containing malware
- "Cracked" versions of premium applications
- Free games from unofficial sources
- Fake streaming sites

**Enticing Content**
- Celebrity news or leaked content
- "Exclusive" videos or images
- Too-good-to-be-true offers
- Contest or prize notifications

**Social Media Baits**
- Viral quizzes that harvest personal information
- "See who viewed your profile" scams
- Free follower/engagement schemes
- Clickbait articles with malicious links

**Why Baiting Is Effective**

**Psychological Triggers**
- Curiosity: "What's on this drive?"
- Greed: "Free premium software!"
- FOMO: "Limited time offer!"
- Helpfulness: "Maybe I can return this to its owner"

**Risk Perception Gap**
People often don't perceive baiting attacks as risky because they initiated the action—they found the USB, they clicked the link. This creates a false sense of control.

**Defense Strategies**

**For Physical Baits**
- Never insert unknown USB drives into your computer
- Report found devices to IT security
- Use isolated systems for examining suspicious devices
- Be suspicious of "too convenient" findings

**For Digital Baits**
- Only download from official sources
- Be skeptical of free premium content
- Use ad blockers to reduce exposure to malicious ads
- Verify offers through official channels
- Remember: if it's too good to be true, it probably is

**Organizational Defenses**
- Disable USB autorun on all systems
- Restrict USB device access where possible
- Conduct baiting awareness tests
- Provide safe channels for reporting suspicious items`,
      keyTakeaway: 'Baiting exploits curiosity and the illusion of control—never insert found USB devices, and remember that "free" premium content often comes at the cost of your security.',
      actionItem: 'Audit your download habits: review where you get software and content. Commit to only using official sources, even if it means paying for services or waiting longer.',
    },
  },
  {
    id: 'dp-social-007',
    title: 'Quid Pro Quo Attacks - Fake Help',
    type: 'concept',
    duration: 12,
    xpReward: 110,
    content: {
      overview: 'How attackers offer "help" or services in exchange for access and information.',
      mainContent: `**The Exchange of Trust**

Quid pro quo (Latin for "something for something") attacks involve an attacker offering a service or benefit in exchange for information or access. These attacks exploit our natural tendency to reciprocate and our desire for help with problems.

**The Technical Support Scam**

The most common quid pro quo attack involves fake technical support:

1. **Initial Contact**: Attacker calls claiming to be from IT support
2. **Manufactured Problem**: "We've detected issues with your computer" or responds to a help request the victim never made
3. **Offer of Help**: "I can fix this for you right now"
4. **The Exchange**: Victim provides access, credentials, or installs remote software
5. **Exploitation**: Attacker achieves their objective

**Variations of Quid Pro Quo**

**The Survey Scam**
"Complete this quick survey and receive a $50 gift card"—harvests personal information or installs malware.

**The Free Security Audit**
"We're offering free security assessments for local businesses"—actually reconnaissance for future attacks.

**The Research Participant**
"We're conducting research and will pay $100 for an hour of your time"—extracts sensitive information through seemingly innocent questions.

**The Insider Offer**
"I can get you early access to [product/service]"—requests credentials or payment for something that doesn't exist.

**Why These Attacks Work**

**Reciprocity Principle**
When someone helps us (or offers to help), we feel obligated to reciprocate. This creates a sense of trust and indebtedness that attackers exploit.

**Problem-Solution Dynamic**
People actively seeking help are more vulnerable. When you have a problem and someone offers a solution, your guard drops.

**Authority Enhancement**
The offer of expertise creates perceived authority. We trust people who seem knowledgeable about our problems.

**Red Flags**

- Unsolicited offers of help
- Solutions that require unusual access
- Requests to bypass security procedures "just this once"
- Offers that seem disproportionately generous
- Pressure to accept help immediately

**Protective Measures**

**Verify Before Trusting**
- Confirm the identity of anyone offering technical help
- Use official IT support channels exclusively
- Don't provide access to cold callers
- Verify research studies through official channels

**Create Separation**
- Have designated contacts for technical issues
- Establish verification procedures for remote support
- Never let urgency override verification

**Trust Official Channels**
- Legitimate companies don't cold-call about computer problems
- Real IT departments have established request processes
- Be especially wary of unsolicited "help" during crises`,
      keyTakeaway: 'Quid pro quo attacks trade fake help for real access—verify the identity of anyone offering technical assistance and only accept help through official, verified channels.',
      actionItem: 'Know your organization\'s legitimate IT support process. Document the correct contact numbers and procedures so you can immediately recognize when something doesn\'t follow the proper channel.',
    },
  },
  {
    id: 'dp-social-008',
    title: 'Information Gathering (OSINT)',
    type: 'concept',
    duration: 15,
    xpReward: 120,
    content: {
      overview: 'Understanding how attackers use Open Source Intelligence to prepare targeted social engineering attacks.',
      mainContent: `**The Foundation of Social Engineering**

Open Source Intelligence (OSINT) is information collected from publicly available sources. Before launching an attack, social engineers invest significant time gathering information about their targets. Understanding what information you expose helps you protect yourself.

**What Attackers Look For**

**Personal Information**
- Full name, birthdate, hometown
- Family members and relationships
- Work history and current employer
- Educational background
- Daily routines and habits

**Security Information**
- Answers to common security questions (mother's maiden name, first pet, high school)
- Email addresses and usernames
- Phone numbers
- Physical addresses

**Professional Intelligence**
- Organizational structure
- Technologies used
- Vendors and partners
- Current projects and challenges
- Key personnel and their roles

**OSINT Sources**

**Social Media**
- LinkedIn: Professional history, colleagues, skills
- Facebook: Personal life, family, interests, check-ins
- Instagram: Visual information about lifestyle, locations
- Twitter/X: Opinions, routines, real-time activities

**Public Records**
- Property records
- Court records
- Business registrations
- Professional licenses

**Corporate Information**
- Company websites
- Press releases
- Job postings (reveal technologies used)
- Conference presentations
- Patent filings

**Technical Sources**
- Domain registration (WHOIS)
- DNS records
- Email headers
- Metadata in documents and images

**The Danger of Aggregation**

Individually, most pieces of information seem harmless. The danger emerges when they're combined:

- Birthday + mother's maiden name = security question answers
- Job title + company name = targeted spear phishing
- Vacation posts = knowledge of when you're away
- Coworker names + internal terminology = convincing pretexts

**Defensive OSINT**

**Audit Your Digital Footprint**
- Google yourself regularly
- Use tools like HaveIBeenPwned for breach exposure
- Review all social media privacy settings
- Search for your email addresses online

**Minimize Exposure**
- Limit personal information on social media
- Remove unnecessary details from profiles
- Be cautious about tagging locations in real-time
- Use privacy settings aggressively

**Control What You Can**
- Request removal from data broker sites
- Opt out of public records where possible
- Use separate email addresses for different purposes
- Be mindful of metadata in shared files

**Think Like an Attacker**
- What could someone learn about you online?
- What security questions could be answered?
- What pretexts could be crafted?
- Who in your life might be easier targets?`,
      keyTakeaway: 'Attackers build detailed profiles using publicly available information—regularly audit your digital footprint and minimize the personal details you share online.',
      actionItem: 'Perform a self-OSINT exercise: Google your name, email addresses, and phone number. Review your social media through the eyes of an attacker. Remove or secure any information that could enable social engineering.',
    },
  },
  {
    id: 'dp-social-009',
    title: 'Building Rapport for Exploitation',
    type: 'concept',
    duration: 13,
    xpReward: 110,
    content: {
      overview: 'How social engineers establish trust and connection to manipulate their targets.',
      mainContent: `**The Trust Bridge**

Rapport is the foundation of successful social engineering. Before asking for sensitive information or actions, skilled attackers invest time building genuine-feeling connections with their targets. Understanding these techniques helps you recognize when rapport-building crosses into manipulation.

**Rapport-Building Techniques**

**Mirroring and Matching**
Social engineers subtly copy their target's:
- Speech patterns and vocabulary
- Body language and gestures
- Energy level and enthusiasm
- Communication style (formal vs. casual)

This unconscious similarity creates feelings of comfort and trust.

**Finding Common Ground**
Attackers research targets to discover shared:
- Interests and hobbies
- Background (hometown, school, profession)
- Opinions and values
- Mutual acquaintances

These connections create instant bonding and lower defenses.

**Active Listening and Validation**
- Giving full attention and asking follow-up questions
- Remembering and referencing previous conversations
- Validating feelings and perspectives
- Making targets feel heard and understood

**Flattery and Admiration**
- Complimenting expertise or achievements
- Expressing admiration for work or decisions
- Making targets feel important and valued
- Seeking their "expert opinion"

**The Escalation Pattern**

Skilled social engineers don't immediately ask for sensitive information. They follow a gradual escalation:

1. **Innocent Interaction**: Casual conversation, small talk
2. **Information Exchange**: Sharing about themselves to encourage reciprocity
3. **Small Requests**: Asking for non-sensitive help or information
4. **Commitment Building**: Getting targets to agree to small things
5. **The Real Ask**: Requesting the sensitive information or action

Each step builds comfort and creates commitment that makes refusing larger requests harder.

**Warning Signs of Manipulative Rapport**

**Too Fast, Too Friendly**
Genuine relationships develop over time. Be wary of people who seem unusually interested in you immediately.

**Inconsistent Details**
Fabricated personas often have inconsistencies in their stories when pressed.

**Steering Conversations**
Manipulators subtly guide discussions toward information they need.

**Excessive Flattery**
Over-the-top compliments, especially about your expertise or access, should raise suspicion.

**Creating Obligation**
Doing favors specifically to create a sense of debt.

**Protecting Yourself**

**Maintain Professional Boundaries**
- Keep personal and professional information separate
- Be cautious about sharing with people you've just met
- Remember that friendliness doesn't equal trustworthiness

**Slow Down**
- Take time before responding to requests
- Don't let rapport pressure you into quick decisions
- It's okay to say "let me think about that"

**Verify Independently**
- Check the identity and affiliation of new contacts
- Confirm information through official channels
- Trust your instincts if something feels off`,
      keyTakeaway: 'Manipulative rapport follows a pattern of gradual escalation—recognize when connection-building feels too fast, too flattering, or steers toward sensitive topics.',
      actionItem: 'Practice pausing before responding to requests from new contacts. Create a mental checklist: How long have I known this person? What do they actually need? Would I do this for a stranger?',
    },
  },
  {
    id: 'dp-social-010',
    title: 'Authority Impersonation',
    type: 'concept',
    duration: 14,
    xpReward: 115,
    content: {
      overview: 'How attackers leverage the power of authority to bypass critical thinking and gain compliance.',
      mainContent: `**The Power of Authority**

Stanley Milgram's famous experiments demonstrated that ordinary people will perform actions they believe are harmful simply because an authority figure instructed them. Social engineers exploit this deeply ingrained deference to authority to bypass normal security procedures.

**Types of Authority Exploited**

**Organizational Hierarchy**
- CEO/Executive impersonation
- IT department authority
- HR or Legal department requests
- "Direct orders from management"

**Professional Authority**
- Technical experts
- Legal professionals
- Medical professionals
- Financial advisors

**Institutional Authority**
- Government agencies (IRS, FBI, police)
- Banks and financial institutions
- Utility companies
- Educational institutions

**Official Authority Markers**
- Uniforms and badges
- Professional jargon and terminology
- Official-looking documents
- Institutional email addresses

**Authority Impersonation Tactics**

**The Urgent Executive Request**
"This is the CEO's assistant. He needs the vendor payment list immediately for an emergency meeting."

**The IT Directive**
"This is IT Security. We've detected a breach and need you to provide your credentials for verification immediately."

**The Legal Threat**
"This is from Legal. If you don't provide these records within the hour, the company faces significant liability."

**The Government Agent**
"This is Agent Smith from the IRS. You have unpaid taxes and a warrant will be issued unless you pay immediately."

**Why Authority Works**

**Socialization**
From childhood, we're taught to respect and obey authority figures—parents, teachers, police, bosses.

**Fear of Consequences**
Disobeying legitimate authority can have real consequences. This fear transfers to perceived authority.

**Cognitive Shortcuts**
Authority serves as a mental shortcut: "This person knows better than me, so I should comply."

**Social Pressure**
Others around us typically comply with authority, creating additional pressure to conform.

**Defense Strategies**

**Verify Before Complying**
- Always verify identity through independent channels
- Call back on official numbers you look up yourself
- Request written authorization for unusual requests
- Confirm with your direct supervisor

**Question Authority**
- Legitimate authorities expect and accept verification
- Ask for specifics: name, department, callback number, reference numbers
- Be suspicious when verification is discouraged

**Know Your Rights**
- Understand what legitimate authorities can and cannot request
- Real government agencies provide documentation and time
- Legitimate IT never asks for passwords

**Create Organizational Support**
- Establish verification procedures for executive requests
- Empower employees to question unusual demands
- Create a culture where verification is expected, not insulting

**Trust Your Instincts**
- If something feels wrong, pause
- Urgency combined with authority is a major red flag
- It's better to delay and verify than to comply and regret`,
      keyTakeaway: 'Legitimate authority figures expect and welcome verification—anyone who discourages you from confirming their identity or authority is likely not who they claim to be.',
      actionItem: 'Create a personal policy: any request that bypasses normal procedures, regardless of apparent authority, requires independent verification. Practice the phrase: "I\'d be happy to help once I verify this through our standard process."',
    },
  },
  {
    id: 'dp-social-011',
    title: 'Urgency & Fear Tactics',
    type: 'concept',
    duration: 13,
    xpReward: 110,
    content: {
      overview: 'Understanding how attackers use time pressure and fear to bypass rational decision-making.',
      mainContent: `**Hijacking the Brain**

When we experience fear or urgency, our brain shifts from the prefrontal cortex (rational thinking) to the amygdala (emotional, reactive). Social engineers deliberately trigger this shift to prevent careful consideration of their requests.

**The Urgency Playbook**

**Artificial Deadlines**
- "This offer expires in 10 minutes"
- "Your account will be suspended within 24 hours"
- "The wire transfer must happen before close of business"
- "This security vulnerability must be addressed immediately"

**Scarcity Pressure**
- "Only 3 spots remaining"
- "Limited time opportunity"
- "First come, first served"
- "This information won't be available later"

**Manufactured Crises**
- "We've detected a breach on your account right now"
- "Someone is attempting to access your account as we speak"
- "Your system is actively being attacked"

**Fear-Based Tactics**

**Financial Threats**
- "Your account has been compromised and funds are being withdrawn"
- "You owe back taxes and face arrest"
- "Your credit will be destroyed if you don't act now"

**Legal Threats**
- "You're under investigation"
- "A lawsuit has been filed against you"
- "You'll be arrested if you don't comply"

**Social Threats**
- "This information will be made public"
- "Your employer will be notified"
- "Your family will find out"

**Professional Threats**
- "Your job is at risk if this isn't handled immediately"
- "The CEO is furious and demands immediate action"
- "This could end your career"

**Why These Tactics Work**

**Fight-or-Flight Response**
Fear triggers physiological responses that prioritize quick action over careful thought.

**Narrowed Attention**
Under stress, we focus on the immediate threat and miss red flags we'd normally notice.

**Social Compliance**
We tend to defer to those who seem to have control over threatening situations.

**Loss Aversion**
The fear of losing something (money, reputation, freedom) is more powerful than potential gains.

**Breaking the Spell**

**Recognize the Pattern**
- Any unsolicited contact creating urgency should trigger suspicion
- Legitimate emergencies still allow time for verification
- Threats combined with urgency are almost always scams

**Create Space**
- Take a breath before responding
- Say "I need a moment to think about this"
- Ask to call back after collecting yourself
- Write down what's being claimed before responding

**Verify Independently**
- Never use contact information provided by the threatening party
- Look up official numbers and call them directly
- Ask a trusted friend or colleague for perspective
- Remember: real emergencies have real documentation

**Know Common Scam Patterns**
- IRS doesn't demand immediate payment via phone
- Banks don't ask for full credentials over the phone
- Police don't call to collect fines
- Tech companies don't cold-call about viruses

**Establish Personal Rules**
- "I never make financial decisions under time pressure"
- "I always verify urgent requests through a different channel"
- "I will call back on a number I find myself"`,
      keyTakeaway: 'Urgency and fear are red flags, not reasons to comply faster—legitimate situations allow time for verification, and creating space to think is your best defense.',
      actionItem: 'Develop a personal "panic protocol": when you feel urgent pressure, commit to always taking three deep breaths, saying "I need to verify this," and using a contact number you find independently.',
    },
  },
  {
    id: 'dp-social-012',
    title: 'Recognizing Social Engineering Attempts',
    type: 'concept',
    duration: 14,
    xpReward: 115,
    content: {
      overview: 'Developing the pattern recognition skills to identify social engineering attacks across all channels.',
      mainContent: `**Building Your Detection System**

After learning individual techniques, the key skill is recognizing patterns in real-time. This lesson synthesizes everything into a practical detection framework you can apply immediately.

**The Universal Warning Signs**

**Unsolicited Contact**
Any unexpected communication asking for information or action should raise your alert level, regardless of how legitimate it appears.

**Request for Sensitive Information**
Legitimate organizations rarely ask for passwords, full social security numbers, or complete financial details through email, phone, or chat.

**Urgency or Pressure**
Creating time pressure is a manipulation tactic. Real emergencies provide documentation and allow verification.

**Emotional Manipulation**
Appeals to fear, greed, curiosity, or sympathy are designed to bypass rational thinking.

**Verification Resistance**
Anyone discouraging you from verifying their identity or claims is likely not legitimate.

**Bypassing Normal Procedures**
Requests to skip standard processes "just this once" are almost always attacks.

**Channel-Specific Red Flags**

**Email**
- Mismatched sender addresses and display names
- Generic greetings in supposedly personal messages
- Poor grammar or unusual phrasing
- Suspicious attachments or links
- Requests to reply with sensitive information

**Phone**
- Caller ID showing numbers that don't match claimed identity
- Background noise inconsistent with claimed location
- Unwillingness to provide callback information
- Scripts that don't allow for natural conversation
- Threats or extreme urgency

**In-Person**
- Unfamiliar faces in secure areas
- Reluctance to show identification
- Asking questions beyond what's needed for stated purpose
- Taking photos or notes in sensitive areas
- Attempting to follow you through secure doors

**Text/Chat**
- Messages from unknown numbers claiming to be known entities
- Links without context or explanation
- Requests to move to different communication platforms
- Unusual requests from known contacts (possibly compromised)

**The Trust Verification Framework**

When you encounter a potential social engineering attempt, run through this checklist:

**VERIFY: Is this person who they claim to be?**
- Can I confirm their identity through an independent channel?
- Does their story check out?
- Are they willing to wait while I verify?

**EVALUATE: Is this request appropriate?**
- Would this request normally come through this channel?
- Does this follow standard procedures?
- Would my organization approve of me complying?

**REFLECT: Am I being manipulated?**
- Am I feeling pressured, scared, or rushed?
- Is someone exploiting my desire to be helpful?
- Would I make this same decision tomorrow?

**ACT: What's the safest response?**
- When in doubt, don't act
- Verify through independent channels
- Report suspicious activity
- Consult with colleagues or security

**Building Detection Habits**

- Pause before responding to any unexpected request
- Verify sender/caller identity before providing information
- Question why this request is coming through this channel
- Trust your instincts when something feels wrong
- Report all suspicious incidents, even if you're not sure`,
      keyTakeaway: 'Social engineering detection is a skill that improves with practice—use the VERIFY-EVALUATE-REFLECT-ACT framework consistently until it becomes automatic.',
      actionItem: 'For the next week, consciously apply the VERA framework to every unexpected request you receive. Keep a log of what you notice and how often your initial suspicion was warranted.',
    },
  },
  {
    id: 'dp-social-013',
    title: 'Organizational Security Culture',
    type: 'concept',
    duration: 15,
    xpReward: 120,
    content: {
      overview: 'Building and maintaining a security-aware culture that resists social engineering at the organizational level.',
      mainContent: `**Security as Culture, Not Policy**

Individual awareness is important, but social engineering defense requires organizational commitment. A security culture means everyone—from the CEO to the newest hire—understands their role in protecting the organization.

**The Human Firewall Concept**

Technical security measures have limitations. The most sophisticated systems can be bypassed by one person who clicks the wrong link or holds open the wrong door. Building a "human firewall" means creating an environment where:

- Employees are trained to recognize threats
- Reporting suspicious activity is encouraged and rewarded
- Verification is expected, not insulting
- Security is everyone's responsibility

**Components of Security Culture**

**Leadership Commitment**
- Executives model security behaviors
- Security is discussed at the highest levels
- Resources are allocated for training and tools
- Leaders participate in security exercises

**Continuous Training**
- Regular, engaging security awareness programs
- Simulated phishing and social engineering tests
- Updates on emerging threats
- Role-specific training (finance, IT, reception)

**Clear Policies and Procedures**
- Documented procedures for common scenarios
- Clear escalation paths for suspicious activity
- Defined verification processes
- Regular policy reviews and updates

**Open Communication**
- Easy channels for reporting concerns
- No punishment for reporting false positives
- Regular security updates and reminders
- Sharing of anonymized incident examples

**Building the Culture**

**Make It Personal**
Connect security to personal life—the same skills protect employees at home, making training more relevant.

**Remove Blame**
Create a no-blame environment for reporting. Fear of punishment prevents people from reporting incidents that could be contained early.

**Celebrate Catches**
Recognize employees who identify and report threats. Share success stories (anonymized) to encourage others.

**Test Regularly**
Conduct simulated attacks to identify vulnerabilities and provide learning opportunities. Frame these as learning, not gotchas.

**Integrate Into Onboarding**
New employees should receive security training immediately, establishing expectations from day one.

**Common Organizational Vulnerabilities**

**Reception and Front Desk**
First line of defense often has minimal security training. Attackers specifically target these roles.

**Help Desk and IT Support**
Constant pressure to be helpful creates vulnerability to social engineering.

**Finance and HR**
Access to sensitive information and financial systems makes these high-value targets.

**Executives**
High access and public visibility make executives prime targets for whaling attacks.

**Remote Workers**
Reduced physical security and connection to the organization can increase vulnerability.

**Measuring Security Culture**

- Phishing simulation click rates
- Number of incidents reported
- Time to report suspicious activity
- Results of periodic security assessments
- Employee survey responses about security
- Reduction in successful attacks over time`,
      keyTakeaway: 'Security culture is built through leadership commitment, continuous training, and an environment where reporting suspicious activity is celebrated rather than punished.',
      actionItem: 'Evaluate your organization\'s security culture: Is reporting encouraged? Is training regular and engaging? Are leaders modeling good security behavior? Identify one area for improvement and propose a solution.',
    },
  },
  {
    id: 'dp-social-014',
    title: 'Personal Security Practices',
    type: 'concept',
    duration: 14,
    xpReward: 115,
    content: {
      overview: 'Implementing practical security habits that protect you from social engineering in both professional and personal life.',
      mainContent: `**Your Personal Security System**

Social engineering doesn't stop when you leave work. The same techniques used against organizations are used against individuals. Building robust personal security habits protects you everywhere.

**Digital Hygiene**

**Password Management**
- Use a password manager for unique, complex passwords
- Enable multi-factor authentication everywhere possible
- Never reuse passwords across sites
- Use passphrases for memorable passwords (20+ characters)

**Email Security**
- Don't click links in emails—type URLs directly
- Verify unexpected emails through other channels
- Use separate email addresses for different purposes
- Be cautious with attachments, even from known senders

**Social Media Privacy**
- Review privacy settings on all platforms regularly
- Limit personal information in public profiles
- Be selective about friend/connection requests
- Avoid posting real-time location information

**Device Security**
- Keep software and systems updated
- Use antivirus and enable firewalls
- Lock devices with strong passwords/biometrics
- Enable remote wipe capabilities

**Communication Practices**

**Phone Calls**
- Don't trust caller ID
- Never provide sensitive information to incoming callers
- Verify callers by calling back on known numbers
- Be wary of unsolicited offers of help

**Text Messages**
- Don't click links in unexpected texts
- Verify unusual messages from known contacts
- Report and block spam numbers
- Use official apps instead of text links

**In-Person Interactions**
- Protect PINs and passwords from shoulder surfers
- Be cautious discussing sensitive information in public
- Question unexpected visitors or service calls
- Shred sensitive documents before disposal

**Financial Protection**

**Account Monitoring**
- Set up alerts for all financial transactions
- Review statements regularly
- Check credit reports periodically
- Freeze credit when not actively applying

**Payment Security**
- Use credit cards (not debit) for better fraud protection
- Enable transaction notifications
- Never wire money to unknown parties
- Be extremely skeptical of unsolicited "investment" opportunities

**Information Protection**

**Personal Data**
- Minimize sharing of SSN, birthdate, and mother's maiden name
- Use unique security questions with false but memorable answers
- Limit the documents you carry with sensitive information
- Secure physical mail promptly

**Backup and Recovery**
- Maintain regular backups of important data
- Know your account recovery procedures
- Keep recovery codes in a secure location
- Have a plan for if your accounts are compromised

**Building Security Habits**

**Daily Practices**
- Lock devices when stepping away
- Check for secure connections before entering credentials
- Review permissions when installing apps
- Question unexpected requests

**Weekly Practices**
- Review account notifications and statements
- Update one piece of software or app
- Check for suspicious account activity
- Clear browser data and review extensions

**Monthly Practices**
- Review privacy settings on social media
- Check credit report or monitoring service
- Update security questions if needed
- Review what apps have access to your accounts

**Emergency Preparedness**
- Know who to contact if you're compromised
- Have backup communication channels
- Keep offline copies of critical information
- Know your bank's fraud reporting number`,
      keyTakeaway: 'Personal security is a system of habits—implement layered protections across passwords, communications, finances, and information to create resilience against social engineering.',
      actionItem: 'Implement one security improvement from each category today: set up a password manager, enable MFA on a critical account, and freeze your credit with all three bureaus.',
    },
  },
  {
    id: 'dp-social-015',
    title: 'Responding to Social Engineering Attacks',
    type: 'concept',
    duration: 15,
    xpReward: 125,
    content: {
      overview: 'How to respond effectively when you identify or fall victim to a social engineering attack.',
      mainContent: `**When Prevention Fails**

Even with the best training and awareness, social engineering attacks sometimes succeed. How you respond in the immediate aftermath can significantly impact the damage. This lesson covers response protocols for both suspected and confirmed incidents.

**Immediate Response: "I Think I Was Targeted"**

**If You Received a Suspicious Communication**
1. Do not respond, click links, or open attachments
2. Document what you received (screenshot if possible)
3. Report to your IT security team or supervisor
4. Delete the message only after reporting
5. Warn colleagues who might receive similar messages

**If You Were Approached In Person**
1. Document what happened while memory is fresh
2. Note physical description, what was asked, and what was said
3. Report to security immediately
4. If they're still present, alert others without confronting directly
5. Preserve any evidence (badges, documents, etc.)

**Emergency Response: "I Think I Fell for It"**

**Credential Compromise**

If you provided login credentials:
1. Change passwords immediately, starting with the compromised account
2. Change passwords on any accounts using the same credentials
3. Enable/strengthen multi-factor authentication
4. Check for unauthorized access or changes
5. Report to IT security
6. Monitor accounts for suspicious activity

**Financial Information Disclosed**

If you shared financial information:
1. Contact your bank/card company immediately to report fraud
2. Request new cards with new numbers
3. Set up fraud alerts on your accounts
4. Freeze your credit with all three bureaus
5. File a report with the FTC (IdentityTheft.gov)
6. Monitor all accounts closely for unauthorized transactions

**Malware Installation**

If you installed software or clicked malicious links:
1. Disconnect the device from the network immediately
2. Do not attempt to fix it yourself
3. Contact IT security for professional remediation
4. Report what you clicked/installed
5. Do not log into accounts from the compromised device

**Physical Access Granted**

If you allowed unauthorized physical access:
1. Alert security immediately
2. Describe who entered and where they went
3. Secure any areas they accessed
4. Review what information/systems they could have accessed
5. Consider whether credentials or devices need to be changed

**Reporting and Documentation**

**What to Document**
- Date, time, and duration of the incident
- Method of contact (email, phone, in-person)
- What was requested and what you provided
- Any identifying information about the attacker
- What actions you've taken since

**Who to Contact**
- Internal IT security team
- Direct supervisor
- Legal/compliance (for regulated industries)
- Law enforcement (for serious incidents)
- Affected third parties (if their data was exposed)

**Organizational Response**

**Incident Investigation**
- Determine scope of the compromise
- Identify what information/access was gained
- Assess potential impact
- Preserve evidence

**Containment and Recovery**
- Revoke compromised credentials
- Scan for malware on affected systems
- Restore from clean backups if needed
- Implement additional monitoring

**Communication**
- Notify affected individuals
- Report to regulatory bodies if required
- Update stakeholders appropriately
- Consider public disclosure if warranted

**Learning and Improvement**
- Conduct post-incident review
- Identify gaps in defenses
- Update training and procedures
- Share lessons learned (anonymized)

**Managing the Aftermath**

**Don't Beat Yourself Up**
Social engineers are skilled manipulators. Falling victim doesn't mean you're foolish—it means you're human.

**Stay Vigilant**
Attackers may attempt follow-up attacks while you're dealing with the initial incident.

**Learn From It**
Reflect on what made the attack effective and how you can protect yourself better.

**Help Others**
Share your experience (when appropriate) to help others avoid similar attacks.`,
      keyTakeaway: 'Speed matters in incident response—act immediately to contain damage, document everything while fresh, and report through proper channels without shame or delay.',
      actionItem: 'Create a personal incident response card: write down the phone numbers for your bank\'s fraud department, your IT security team, and credit bureau freeze lines. Keep this accessible but secure.',
    },
  },
];
