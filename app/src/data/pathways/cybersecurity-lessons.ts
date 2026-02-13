import type { PathwayLesson } from "@/types";

export const cyberLessonsLevel1: PathwayLesson[] = [
  {
    id: "cyber-001",
    title: "The Invisible War: Welcome to Cybersecurity",
    type: "intro",
    duration: 12,
    xpReward: 120,
    content: {
      overview: "Discover why cybersecurity is the most critical skill in the digital age.",
      mainContent: `## The Stakes Have Never Been Higher

In 2017, a single ransomware attack called WannaCry infected 300,000 computers in 150 countries in 4 hours. Hospitals cancelled surgeries. FedEx lost $300 million. The total damage? $4 billion. The vulnerability exploited? A Windows flaw the NSA discovered but kept secret.

Welcome to the world where a teenager in Romania can steal millions from a bank in Singapore while eating breakfast.

**Why Cybersecurity Matters Now:**

Every 11 seconds, a ransomware attack hits a business. The average data breach costs $4.45 million. In 2024, cybercrime caused over $8 trillion in damages -- more than the GDP of Germany.

But it's not just about money. Medical devices get hacked. Elections get influenced. Infrastructure gets shut down. In 2021, a hacker shut down a major US fuel pipeline, causing panic buying and gas shortages across the East Coast.

**The Fundamentals: CIA Triad**

No, not that CIA. In cybersecurity, CIA means:

**Confidentiality:** Keep secrets secret
- Encryption protects data
- Access controls limit who sees what
- Example: Your password should only be known by you

**Integrity:** Ensure data isn't tampered with
- Hashing detects changes
- Digital signatures prove authenticity
- Example: How you know a software update is really from Microsoft

**Availability:** Keep systems running
- Backups prevent data loss
- DDoS protection keeps sites online
- Example: Your bank's website works when you need it

**The Attacker's Advantage:**

Defenders must protect everything. Attackers only need to find one weakness. You could have perfect security on 999 systems, but if system 1,000 is vulnerable, that's the entry point.

> "There are two types of companies: those that have been hacked, and those that don't know they've been hacked." -- John Chambers, Cisco CEO

**The Human Element:**

95% of cybersecurity breaches involve human error. The most sophisticated security system fails if someone clicks a phishing link. Technology solves technical problems, but humans remain the weakest link.

The good news? Understanding cybersecurity fundamentals makes you exponentially safer than the average person.`,
      keyTakeaway: "Cybersecurity protects confidentiality, integrity, and availability of systems -- and humans are often the weakest link.",
      actionItem: "Check haveibeenpwned.com to see if your email has been in any data breaches.",
    },
  },
  {
    id: "cyber-002",
    title: "Password Power: Your First Line of Defense",
    type: "concept",
    duration: 11,
    xpReward: 110,
    content: {
      overview: "Learn why most passwords fail and how to create truly secure ones.",
      mainContent: `## The Password Problem

The most common password in 2024 was "123456" -- used by 4.5 million people. The second? "password". The third? "123456789".

Hackers don't guess passwords one at a time. They use automated tools that try billions of combinations per second. A 6-character password with only lowercase letters? Cracked in 2 seconds.

**What Makes Passwords Weak:**

1. **Predictability:** "password123", "qwerty", your birthday
2. **Dictionary words:** "coffee", "sunshine", "welcome"
3. **Personal info:** Your name, pet's name, favorite team
4. **Reuse:** Same password everywhere (one breach compromises all)
5. **Short length:** Under 12 characters

**What Makes Passwords Strong:**

- **Length:** 16+ characters
- **Complexity:** Mix of uppercase, lowercase, numbers, symbols
- **Randomness:** Not dictionary words or patterns
- **Uniqueness:** Different for every account

**Example Weak vs Strong:**

❌ Weak: \`Summer2024!\` (12 characters, predictable pattern)
✅ Strong: \`r9K$mPx3@Qv7nL2Z\` (16 random characters)

**The Passphrase Method:**

Easier to remember than random characters, still secure:

❌ Weak: \`ilovecoffee\`
✅ Strong: \`correct-horse-battery-staple-7#Blue\` (43 characters)

Inspired by the famous XKCD comic, this method uses random words plus numbers and symbols. Easy for humans to remember, extremely hard for computers to crack.

**Password Managers: The Best Solution**

Why remember 100 unique, complex passwords when software can do it for you?

**Popular Password Managers:**
- **Bitwarden** (open-source, free, excellent)
- **1Password** (user-friendly, paid)
- **LastPass** (popular, has had breaches)

Password managers:
- Generate random 20+ character passwords
- Remember them all
- Auto-fill login forms
- Sync across devices
- You only remember one master password

**Two-Factor Authentication (2FA):**

Even strong passwords can be stolen. 2FA adds a second verification:
1. Something you know (password)
2. Something you have (phone, security key)

Popular 2FA methods:
- SMS codes (better than nothing, but hackable)
- Authenticator apps (Google Authenticator, Authy -- much better)
- Hardware keys (YubiKey -- most secure)

**The Harsh Reality:**

In 2023, 81% of data breaches involved weak or stolen passwords. Your password is often the only thing between hackers and your entire digital life.`,
      keyTakeaway: "Strong passwords are long, random, and unique -- use a password manager and enable 2FA everywhere possible.",
      actionItem: "Install a password manager today and change your three most important passwords to generated 20+ character ones.",
    },
  },
  {
    id: "cyber-003",
    title: "Phishing: The Art of Digital Deception",
    type: "concept",
    duration: 13,
    xpReward: 130,
    content: {
      overview: "Learn how phishing attacks work and how to spot them before clicking.",
      mainContent: `## The Human Hack

In 2016, John Podesta, chairman of Hillary Clinton's presidential campaign, received an email: "Someone has your password. Click here to change it." He clicked. That single click led to 60,000 leaked emails and arguably influenced the election.

**Phishing** is tricking people into revealing sensitive information or clicking malicious links. It works because it exploits psychology, not technology.

**Common Phishing Tactics:**

**1. Urgency:** "Your account will be closed in 24 hours!"
**2. Authority:** "This is your bank's fraud department."
**3. Curiosity:** "You've won a prize!"
**4. Fear:** "Suspicious activity detected on your account."
**5. Greed:** "Click to claim your refund."

**Real Examples:**

❌ **Fake PayPal Email:**
\`\`\`
From: service@paypa1.com (note the "1" instead of "l")
Subject: Urgent: Verify Your Account
"Your account has been limited. Click here to verify."
\`\`\`

❌ **Fake Microsoft Email:**
\`\`\`
From: microsoft-security@outlook.com
"Unusual sign-in activity. Review now."
Link goes to: microsoft-verify.net (not microsoft.com)
\`\`\`

**How to Spot Phishing:**

✅ **Check the sender's email carefully**
- Real: support@amazon.com
- Fake: support@amazon-secure.net

✅ **Hover over links before clicking**
- The URL preview shows the real destination
- If it doesn't match the supposed sender, it's fake

✅ **Look for generic greetings**
- Phishing: "Dear Customer"
- Legitimate: "Dear Sarah Johnson"

✅ **Check for poor grammar and spelling**
- Legitimate companies proofread

✅ **Be skeptical of urgent requests**
- Real companies don't threaten account closure via email

✅ **Verify independently**
- Got a suspicious email from your bank? Call them directly (not the number in the email)

**Advanced Phishing: Spear Phishing**

Regular phishing casts a wide net. **Spear phishing** targets specific individuals with personalized information:

\`\`\`
"Hi John,
I saw your presentation at the TechConf last week -- great insights on cloud security. I wanted to share this related whitepaper with you.
[malicious link]
-- Mike"
\`\`\`

This feels personal because the attacker researched you on LinkedIn and Twitter.

**The Numbers:**

- 3.4 billion phishing emails sent daily
- 30% of phishing emails get opened
- 12% of people click the malicious link
- Average phishing campaign success rate: 4%

That might sound low, but 4% of a million emails is 40,000 victims.

**Protection:**

1. **Email filters** catch obvious phishing (but not all)
2. **Security awareness training** helps employees recognize attacks
3. **Verification processes** -- never click links in unexpected emails
4. **Report phishing** to your IT department or email provider`,
      keyTakeaway: "Phishing exploits human psychology through urgency, fear, and deception -- always verify before clicking links in emails.",
      actionItem: "Forward any suspicious email to your email provider's phishing report address (reportphishing@apple.com for iCloud, etc.).",
    },
  },
  {
    id: "cyber-004",
    title: "Security Awareness Quiz",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your ability to identify security threats and best practices.",
      mainContent: `## The Human Firewall

Technology provides tools, but humans make security decisions hundreds of times per day. Click this link? Use this password? Trust this email?

Security awareness transforms you from a potential vulnerability into a human firewall -- someone who protects themselves and their organization through informed decisions.

The attackers are sophisticated, patient, and motivated by money. But they rely on one thing: human mistakes. Remove the mistakes, and their attacks fail.

Every quiz question reflects a real attack pattern that has compromised millions of people. Learning to recognize these patterns is your strongest defense.`,
      keyTakeaway: "Security awareness turns human behavior from the weakest link into a powerful defense.",
      quiz: {
        question: "You receive an email from your 'bank' asking you to verify your account by clicking a link. What should you do first?",
        options: [
          "Close the email and contact your bank directly using a known phone number or website",
          "Click the link to check if it's legitimate",
          "Reply to the email asking if it's real",
          "Forward it to friends to see if they got the same email"
        ],
        correct: 0,
        explanation: "Never click links in unsolicited emails claiming to be from your bank. Close the email and contact your bank directly using a phone number from their official website or your bank card. This verifies the request independently. Clicking the link could install malware, and replying confirms your email is active."
      },
    },
  },
  {
    id: "cyber-005",
    title: "Encryption: The Math That Keeps Secrets",
    type: "concept",
    duration: 14,
    xpReward: 140,
    content: {
      overview: "Understand how encryption transforms readable data into unbreakable codes.",
      mainContent: `## The Unbreakable Code

When you buy something on Amazon, your credit card travels through dozens of computers between you and their servers. Yet nobody can steal it. How? Encryption.

**Encryption** transforms readable data (plaintext) into unreadable gibberish (ciphertext) using mathematical algorithms. Only someone with the correct key can reverse the process.

**Simple Example:**

Plaintext: \`HELLO\`
Key: Shift each letter by 3
Ciphertext: \`KHOOR\`

This is the Caesar cipher, used by Julius Caesar 2,000 years ago. Modern encryption is... slightly more sophisticated.

**The Two Types:**

**1. Symmetric Encryption** (Same key for encryption and decryption)

\`\`\`
Message: "Attack at dawn"
Key: "secret123"
Encrypted: "x7#mKp!3%9qL"

To decrypt, you need the same key: "secret123"
\`\`\`

**Popular algorithm:** AES-256 (used by governments, banks, WhatsApp)

**Problem:** How do you securely share the key? If intercepted, the encryption is useless.

**2. Asymmetric Encryption** (Public key encrypts, private key decrypts)

You have two keys:
- **Public key:** Share with everyone (encrypts messages)
- **Private key:** Keep secret (decrypts messages)

\`\`\`
Bob wants to send Alice a secret message.

1. Bob gets Alice's public key (she shared it publicly)
2. Bob encrypts the message with her public key
3. Only Alice's private key can decrypt it
4. Even if someone intercepts the message, they can't read it
\`\`\`

**Popular algorithm:** RSA, used for HTTPS, email encryption, digital signatures

**Real-World Applications:**

**HTTPS** (the padlock in your browser)
- Uses asymmetric encryption to exchange a symmetric key
- Then uses symmetric encryption for speed
- Your password is encrypted before leaving your computer

**End-to-End Encryption** (WhatsApp, Signal)
- Messages encrypted on your device
- Decrypted on recipient's device
- Even the company running the service can't read them

**Full Disk Encryption** (BitLocker, FileVault)
- Entire hard drive encrypted
- Laptop stolen? Data is useless without password
- Edward Snowden used this to protect NSA documents

**The Math:**

Modern encryption relies on mathematical problems that are easy one way but extremely hard to reverse.

Example: Multiplying two large prime numbers is easy. Factoring the result back into those primes? With big enough numbers, it would take all the world's computers millions of years.

**Encryption Strength:**

| Key Size | Security Level |
|----------|----------------|
| 128-bit | Secure for most uses |
| 256-bit | Unbreakable with current technology |
| 512-bit+ | Overkill (but quantum-safe) |

**The Quantum Threat:**

Quantum computers could break current encryption. Governments and researchers are developing **quantum-resistant encryption** algorithms now.

> "Encryption works. Properly implemented strong crypto systems are one of the few things you can rely on." -- Edward Snowden`,
      keyTakeaway: "Encryption uses math to make data unreadable without the correct key -- symmetric uses one key, asymmetric uses public/private key pairs.",
      actionItem: "Check if websites you visit use HTTPS -- look for the padlock icon in your browser's address bar.",
    },
  },
  {
    id: "cyber-006",
    title: "Network Security: Defending the Digital Perimeter",
    type: "concept",
    duration: 12,
    xpReward: 120,
    content: {
      overview: "Learn how firewalls, VPNs, and network defenses protect data in transit.",
      mainContent: `## The Digital Castle

Medieval castles had moats, walls, and gates. Modern networks have firewalls, VPNs, and intrusion detection systems. The principle is the same: control who gets in and watch for threats.

**Firewalls: The Gatekeeper**

A **firewall** examines network traffic and blocks anything suspicious. Think of it as a bouncer at a club -- checking IDs, looking for weapons, denying entry to troublemakers.

**How Firewalls Work:**

1. **Packet Filtering:** Check source, destination, port
   - Allow: HTTP traffic (port 80) from anywhere
   - Block: SSH traffic (port 22) except from trusted IPs

2. **Stateful Inspection:** Track connection state
   - Remember: "This user logged in from IP 1.2.3.4"
   - Block: "Now they're trying to access admin panel from IP 5.6.7.8"

3. **Application Layer:** Deep inspection of content
   - Detect: SQL injection attempts in web traffic
   - Block: Malware hidden in uploaded files

**Types of Firewalls:**

- **Software:** Runs on your computer (Windows Defender Firewall)
- **Hardware:** Dedicated device for networks (Cisco, Palo Alto)
- **Cloud:** Protects cloud infrastructure (AWS Security Groups)

**VPNs: The Secret Tunnel**

When you connect to public WiFi at a coffee shop, anyone nearby can intercept your data. A **VPN (Virtual Private Network)** creates an encrypted tunnel between you and the internet.

**Without VPN:**
\`\`\`
You → Coffee Shop WiFi → Internet
      ↑ (Anyone can see your traffic)
\`\`\`

**With VPN:**
\`\`\`
You → Encrypted Tunnel → VPN Server → Internet
      ↑ (Encrypted, unreadable)
\`\`\`

**VPN Benefits:**

1. **Privacy:** ISPs and hackers can't see what you're doing
2. **Security:** Data encrypted on public WiFi
3. **Bypass restrictions:** Access content blocked in your country
4. **Anonymous browsing:** Websites see VPN's IP, not yours

**Popular VPNs:** NordVPN, ExpressVPN, ProtonVPN, Mullvad

**Warning:** Free VPNs often sell your data. You're not the customer, you're the product.

**Intrusion Detection Systems (IDS):**

Firewalls block known threats. IDS detect new, unusual threats by watching for patterns:

- 100 failed login attempts in 1 minute? Probably an attack.
- Database query requesting 1 million rows? Suspicious.
- Traffic to a known malware command server? Alert!

**Intrusion Prevention Systems (IPS):**

Like IDS, but actively blocks threats instead of just alerting.

**Network Segmentation:**

Don't put everything on one network. Segment it:

\`\`\`
Public WiFi → [Firewall] → Guest Network
                           ↓
                        [Firewall]
                           ↓
Employee Network → [Firewall] → Server Network
\`\`\`

If someone hacks the guest network, they can't reach servers.

**The Zero Trust Model:**

Old approach: "Trust internal network, suspect external"
New approach: "Trust nothing, verify everything"

Every request gets authenticated and authorized, regardless of source. This is how Google, Microsoft, and modern companies operate.`,
      keyTakeaway: "Network security uses firewalls to filter traffic, VPNs to encrypt connections, and IDS/IPS to detect and prevent intrusions.",
      actionItem: "Check if your home router's firewall is enabled in its settings -- most are on by default but worth verifying.",
    },
  },
  {
    id: "cyber-007",
    title: "Malware: Know Your Enemy",
    type: "concept",
    duration: 13,
    xpReward: 130,
    content: {
      overview: "Understand different types of malicious software and how to defend against them.",
      mainContent: `## The Digital Disease

In 1988, the Morris Worm infected 10% of the internet (6,000 computers). In 2017, WannaCry infected 300,000 computers in one afternoon. Malware evolves faster than biological viruses.

**Malware** (malicious software) is any program designed to harm, exploit, or take control of systems.

**The Malware Zoo:**

**1. Viruses**
- Attach to legitimate files
- Spread when you share the file
- Can corrupt data or spy on you
- Example: Melissa (1999) spread via Microsoft Word documents

**2. Worms**
- Self-replicating, no file needed
- Spread automatically across networks
- Example: WannaCry locked files and demanded Bitcoin ransom

**3. Trojans**
- Disguised as legitimate software
- "Free game download" that installs spyware
- Named after the Trojan Horse from Greek mythology

**4. Ransomware**
- Encrypts all your files
- Demands payment (usually Bitcoin) for the key
- Even if you pay, no guarantee you get files back
- Average ransom: $200,000 for businesses

**5. Spyware**
- Secretly monitors your activity
- Records keystrokes (keyloggers)
- Screenshots your banking sessions
- Sends data to attackers

**6. Adware**
- Shows unwanted ads
- Redirects your browser
- Slows down your computer
- Usually comes bundled with "free" software

**7. Rootkits**
- Hides deep in your operating system
- Nearly invisible to antivirus
- Gives attackers full control
- Extremely difficult to remove

**8. Cryptominers**
- Uses your computer to mine cryptocurrency
- You pay the electricity, they profit
- Makes your computer slow and hot

**How Malware Spreads:**

1. **Email attachments:** "Invoice.pdf.exe"
2. **Malicious downloads:** Pirated software, fake updates
3. **Drive-by downloads:** Visiting compromised websites
4. **USB drives:** Infected devices spread to computers
5. **Network vulnerabilities:** Worms exploit unpatched systems
6. **Social engineering:** "Click here to claim your prize"

**Defense Strategies:**

**1. Antivirus/Anti-malware**
- Windows Defender (built-in, good)
- Malwarebytes (excellent for removal)
- Bitdefender, Kaspersky (comprehensive)

**2. Keep Software Updated**
- 99% of breaches exploit known vulnerabilities
- Updates patch these holes
- Enable automatic updates

**3. Be Suspicious**
- Unknown sender? Don't open attachments
- Free software? Research it first
- Too good to be true? It is

**4. Use Standard User Accounts**
- Don't browse as Administrator
- Malware has less access with limited accounts

**5. Backup Everything**
- Ransomware can't hurt backed-up data
- 3-2-1 rule: 3 copies, 2 different media, 1 offsite

**Real-World Impact:**

- **CryptoLocker (2013):** $3 million in ransom paid in first 100 days
- **NotPetya (2017):** $10 billion in total damages
- **SolarWinds (2020):** Compromised 18,000 organizations including US government

**The Arms Race:**

Malware creators and defenders are in constant evolution. Attackers develop new techniques, defenders create new protections, attackers bypass them, and the cycle continues.

AI-powered malware that adapts to avoid detection is the next frontier. But AI-powered defense is evolving too.`,
      keyTakeaway: "Malware includes viruses, worms, trojans, ransomware, and spyware -- defend with antivirus, updates, backups, and skepticism.",
      actionItem: "Run a full malware scan on your computer right now using Windows Defender or your installed antivirus.",
    },
  },
  {
    id: "cyber-008",
    title: "Cybersecurity Foundations Mastery Quiz",
    type: "quiz",
    duration: 10,
    xpReward: 120,
    content: {
      overview: "Validate your cybersecurity knowledge across all core concepts.",
      mainContent: `## Digital Defense Readiness

You've learned the fundamentals: the CIA triad, password security, phishing recognition, encryption principles, network defenses, and malware identification.

These concepts form your digital immune system. Just as your body fights off biological threats, these practices protect you from digital ones.

Cybersecurity isn't paranoia -- it's pragmatism. The threats are real, constant, and evolving. But informed, cautious users are exponentially safer than the average person.

**Your Security Posture Now:**

✅ Strong, unique passwords with a password manager
✅ Two-factor authentication on important accounts
✅ Ability to recognize phishing attempts
✅ Understanding of encryption and network security
✅ Knowledge of malware types and defenses

This foundation prepares you for deeper security topics: penetration testing, incident response, security architecture, and ethical hacking.

Remember: security is a process, not a product. It requires constant vigilance, regular updates, and healthy skepticism.

Stay safe. Stay informed. Stay secure.`,
      keyTakeaway: "Cybersecurity combines technical defenses with human awareness -- both are essential for comprehensive protection.",
      quiz: {
        question: "What is the purpose of two-factor authentication (2FA)?",
        options: [
          "To add a second verification step beyond just a password",
          "To make passwords twice as long",
          "To automatically encrypt all your data",
          "To back up your passwords to the cloud"
        ],
        correct: 0,
        explanation: "Two-factor authentication requires two different types of verification: something you know (password) and something you have (phone, security key). This means even if someone steals your password, they still can't access your account without the second factor. It doesn't affect password length, encryption, or backups."
      },
    },
  },
];
