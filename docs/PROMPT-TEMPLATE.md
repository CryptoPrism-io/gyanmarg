# Multi-Page Documentation Creator Prompt

Use this prompt template to create professional multi-page documentation (PDF/SVG) for any project.

---

## THE PROMPT (Copy & Customize)

```
Create a multi-page printable documentation set for [PROJECT NAME] with the following structure:

### FORMAT REQUIREMENTS
- Output: [PDF / SVG / HTML]
- Page Size: A4 (210mm × 297mm) or US Letter (8.5" × 11")
- Pages: [NUMBER] total pages
- Theme: [Dark for screen / Light for printing / Both versions]
- File naming: [00-cover, 01-page1, 02-page2, etc.]

### COVER PAGE (Page 00)
Include:
1. **Header Section**
   - Project title (large, prominent)
   - Subtitle/tagline
   - Version/date information

2. **Product/Project Overview**
   - What is it? (2-3 sentences)
   - Core features (3-5 bullet points)
   - Key stats (in visual cards/boxes)

3. **Page Index**
   - List all pages with:
     - Page number
     - Page title
     - Brief description (1 line)
   - Organized by logical sections/categories

4. **Technical Information** (if applicable)
   - Tech stack
   - Dependencies
   - Environment requirements

5. **Usage Instructions**
   - How to use this documentation
   - Printing recommendations
   - Best practices

6. **Footer**
   - URLs, contact info, copyright

### CONTENT PAGES (Page 01-XX)
Each page should have:

**Standard Layout:**
- Header bar with page title + route/section identifier
- Main content area (wireframe/diagram/text)
- Feature labels and annotations
- Visual hierarchy using boxes, colors, typography

**Bottom Section (if applicable):**
- Navigation context: "How to reach this page" + "Where to go next"
- Related pages/cross-references
- Notes or warnings

**Design Consistency:**
- Same color scheme across all pages
- Consistent fonts and sizes
- Uniform spacing and margins
- Page numbers on every page

### COLOR SCHEME
Define your palette:
- Background: [COLOR]
- Primary accent: [COLOR]
- Secondary accent: [COLOR]
- Text primary: [COLOR]
- Text secondary: [COLOR]
- Border/stroke: [COLOR]
- Success/positive: [COLOR]
- Warning/caution: [COLOR]
- Error/danger: [COLOR]

### TYPOGRAPHY
- Headline font: [FONT NAME] at [SIZE]
- Body font: [FONT NAME] at [SIZE]
- Monospace/code: [FONT NAME] at [SIZE]
- Labels: [FONT NAME] at [SIZE]

### CONTENT STRUCTURE
Organize pages by:
1. [SECTION NAME]: Pages X-Y
   - [Page title]: [Description]
   - [Page title]: [Description]

2. [SECTION NAME]: Pages X-Y
   - [Page title]: [Description]
   - [Page title]: [Description]

3. [SECTION NAME]: Pages X-Y
   - [Page title]: [Description]

### SPECIAL REQUIREMENTS
- [ ] Include navigation flows between pages
- [ ] Add visual diagrams/wireframes
- [ ] Include code snippets
- [ ] Add data tables/charts
- [ ] Include screenshots
- [ ] Add interactive elements (for HTML)
- [ ] Create both screen and print versions
- [ ] Ensure all text is legible when printed
- [ ] No content overlaps or cutoffs
- [ ] XML-safe (escape special characters: &, <, >)

### OUTPUT DELIVERABLES
Generate:
1. Cover page (00-cover.[ext])
2. Individual content pages (01-XX.[ext])
3. [OPTIONAL] Combined/merged single file
4. [OPTIONAL] Light theme versions for printing (suffix: -bw)
5. [OPTIONAL] Source files for editing

### VALIDATION CHECKLIST
Before finalizing, verify:
- [ ] All pages open without errors
- [ ] Text is readable at normal size
- [ ] Colors work for intended use (screen/print)
- [ ] Page numbers are sequential
- [ ] Cross-references are accurate
- [ ] No content extends beyond page boundaries
- [ ] Special characters properly escaped (XML/HTML)
- [ ] File sizes are reasonable
- [ ] Consistent styling across all pages
```

---

## EXAMPLE USAGE

### For Software Product Documentation:
```
Create a multi-page printable documentation set for "TaskMaster Pro" with the following structure:

FORMAT: SVG, A4 size, 20 pages total, both dark and light themes
COVER: Include product overview, feature list, 18-page index, tech stack
PAGES:
- Section 1 (Entry): Landing, Login, Dashboard, Onboarding (4 pages)
- Section 2 (Core): Task List, Task Detail, Calendar View, Team Board (4 pages)
- Section 3 (Features): Reports, Settings, Integrations, Notifications (4 pages)
- Section 4 (Admin): User Management, Billing, Analytics (3 pages)
- Section 5 (Mobile): Mobile App Screens (3 pages)

COLOR SCHEME: Dark blue (#0F172A), Cyan accent (#06B6D4), White text
Each page should show wireframe + navigation flows at bottom
```

### For Architecture Documentation:
```
Create a multi-page PDF architecture documentation for "E-Commerce Platform":

FORMAT: PDF, US Letter, 15 pages, light theme for printing
COVER: System overview, components, page index, tech stack
PAGES:
- System Architecture (high-level diagram)
- Database Schema (ERD)
- API Endpoints (6 pages, grouped by resource)
- Authentication Flow
- Payment Processing Flow
- Deployment Architecture
- Monitoring & Logging
- Security Considerations

Include: Diagrams, code snippets, tables, cross-references
```

### For Business Process Documentation:
```
Create a multi-page process documentation for "Customer Onboarding":

FORMAT: HTML (convertible to PDF), A4, 10 pages, professional theme
COVER: Process overview, stakeholders, page index, KPIs
PAGES:
- Process flowchart overview
- Step-by-step procedures (6 pages, one per major step)
- Roles & responsibilities matrix
- Tools & systems used
- Troubleshooting guide

COLOR SCHEME: Corporate colors, print-friendly
Include: Flowcharts, checklists, decision trees
```

---

## TOOLS YOU CAN USE

### For SVG (like we did):
- **Python script**: Generate SVG text programmatically
- **AI tools**: Claude, ChatGPT with detailed prompts
- **Design tools**: Figma, Adobe Illustrator (export to SVG)
- **Benefits**: Vector graphics, scales infinitely, small file size

### For PDF:
- **Python libraries**: ReportLab, WeasyPrint (HTML→PDF), FPDF
- **Document processors**: LaTeX (for technical docs)
- **Design tools**: Canva, Adobe InDesign
- **Benefits**: Universal format, embedded fonts, print-ready

### For HTML (convertible to PDF):
- **Static site generators**: 11ty, Hugo, Jekyll
- **Print CSS**: Use @media print rules for PDF output
- **Conversion**: Puppeteer, wkhtmltopdf, browser print
- **Benefits**: Interactive, searchable, styleable, responsive

---

## KEY LEARNINGS FROM POLYMIND WIREFRAME PROJECT

### What We Did Right:
1. ✅ **Modular structure**: Each page is independent
2. ✅ **Consistent layout**: Same header/footer pattern
3. ✅ **Navigation context**: Shows entry/exit flows
4. ✅ **Two themes**: Dark for screen, light for print
5. ✅ **Proper escaping**: XML special characters handled
6. ✅ **Scalable format**: SVG works at any size
7. ✅ **Clear hierarchy**: Cover → Index → Content
8. ✅ **Print-ready**: A4 size, no overlaps

### Common Pitfalls to Avoid:
1. ❌ Don't hardcode dimensions that don't fit standard paper
2. ❌ Don't forget to escape special characters (&, <, >, etc.)
3. ❌ Don't use tiny fonts that won't print legibly
4. ❌ Don't create massive single files (split into pages)
5. ❌ Don't ignore print margins (20-40px safe zone)
6. ❌ Don't use colors that don't print well (pure blacks, light grays)
7. ❌ Don't forget page numbers and navigation aids
8. ❌ Don't overlook cross-references and indexes

---

## PROMPT ENGINEERING TIPS

### Be Specific About:
- Exact dimensions and units
- File naming conventions
- Color codes (hex, RGB)
- Font names and sizes
- Spacing and margins
- Content hierarchy
- Special requirements

### Provide Examples:
- Show desired layout structure
- Include sample content
- Reference similar docs you like
- Specify what to avoid

### Iterate:
- Start with cover + 2-3 sample pages
- Review and refine
- Then generate full set
- Fix issues systematically

---

## AUTOMATION WORKFLOW

### Step 1: Plan
- Define page count and sections
- Sketch rough layout on paper
- List all content needed
- Choose format (SVG/PDF/HTML)

### Step 2: Create Template
- Design one page with all elements
- Establish color scheme
- Set up typography
- Define reusable components

### Step 3: Generate Content
- Use AI to generate individual pages
- Or write scripts to automate
- Maintain consistency
- Version control your source

### Step 4: Validate
- Check all pages open correctly
- Print test pages
- Verify navigation flows
- Fix escaping issues
- Check cross-references

### Step 5: Package
- Create both screen and print versions
- Organize in logical folders
- Add README with instructions
- Consider creating merged PDF

---

## REUSABLE SCRIPT TEMPLATE

```python
#!/usr/bin/env python3
"""Generic multi-page documentation generator"""

import os

# Configuration
PROJECT_NAME = "Your Project"
PAGE_WIDTH = 1080
PAGE_HEIGHT = 1520
OUTPUT_FORMAT = "svg"  # or "pdf", "html"
THEME = "dark"  # or "light"

# Color schemes
COLORS = {
    'dark': {
        'bg': '#0A0A0B',
        'surface': '#1A1A1D',
        'primary': '#F59E0B',
        'text': '#E5E5E5',
        'secondary': '#888888'
    },
    'light': {
        'bg': '#FFFFFF',
        'surface': '#F8F8F8',
        'primary': '#D97706',
        'text': '#1A1A1D',
        'secondary': '#666666'
    }
}

# Page definitions
pages = [
    {
        'id': '00-cover',
        'title': 'Cover Page',
        'content': {
            'overview': '...',
            'stats': [...],
            'index': [...]
        }
    },
    {
        'id': '01-page1',
        'title': 'First Page',
        'content': {...}
    },
    # Add more pages...
]

def create_page(page_data, theme='dark'):
    """Generate a single page"""
    colors = COLORS[theme]
    # Your page generation logic here
    return page_content

def generate_all_pages():
    """Generate all pages"""
    os.makedirs('output', exist_ok=True)

    for page in pages:
        content = create_page(page, THEME)
        filename = f"output/{page['id']}.{OUTPUT_FORMAT}"

        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"✓ Created {filename}")

if __name__ == '__main__':
    generate_all_pages()
    print(f"\n✅ Generated {len(pages)} pages!")
```

---

## NEXT STEPS FOR YOU

1. **Copy the main prompt** above
2. **Customize** for your specific project
3. **Add your content** details
4. **Paste into AI tool** (Claude, ChatGPT, etc.)
5. **Iterate** based on output
6. **Validate** all pages
7. **Print test** a few pages
8. **Refine** and finalize

---

## QUESTIONS TO ASK YOURSELF

Before starting:
- What is the purpose of this documentation?
- Who is the audience?
- Will it be viewed on screen, printed, or both?
- How many pages do I need?
- What level of detail is appropriate?
- Do pages need to cross-reference each other?
- What's the logical structure/flow?
- What format best serves my needs?

---

**Remember**: Good documentation is:
- **Clear**: Easy to understand at a glance
- **Consistent**: Same patterns throughout
- **Complete**: Covers all necessary topics
- **Accessible**: Works for intended medium (screen/print)
- **Maintainable**: Easy to update later

---

*Based on: Polymind Product Wireframe Documentation Project (Feb 2026)*
*17 pages • SVG format • Dark + Light themes • A4 print-ready*
