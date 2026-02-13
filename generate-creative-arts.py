#!/usr/bin/env python3
"""Generate Creative Arts lessons (levels 6-10) for 5 modules using Gemini AI.

Modules:
  1. Writing & Storytelling (ws-) — Levels 6-10
  2. Music & Sound (mus-) — Levels 6-10
  3. Creative Writing (cw-) — Levels 6-10
  4. Content Creation (content-) — Levels 6-10
  5. World Building (world-) — Levels 6-10

Total: 5 modules x 5 levels x 8 lessons = 200 lessons
"""

import os
import sys
import time
import json
import re
from pathlib import Path

try:
    from google import genai
except ImportError:
    print("ERROR: google-genai not installed")
    print("Install with: pip install google-genai")
    sys.exit(1)

# Load .env
try:
    from dotenv import load_dotenv
    env_path = Path(__file__).parent / 'app' / '.env'
    if env_path.exists():
        load_dotenv(env_path)
except ImportError:
    pass

API_KEY = os.getenv('GEMINI_API_KEY')
if not API_KEY:
    print("ERROR: GEMINI_API_KEY not set")
    print("Get key from: https://aistudio.google.com/apikey")
    sys.exit(1)

client = genai.Client(api_key=API_KEY)
MODEL_NAME = 'gemini-2.0-flash'

# ============================================================================
# MODULE DEFINITIONS — Levels 6-10 for each Creative Arts module
# ============================================================================

MODULES = {
    'writing-storytelling': {
        'prefix': 'ws',
        'export_prefix': 'wsLessonsLevel',
        'file': 'app/src/data/pathways/writing-storytelling-lessons.ts',
        'subject': 'Writing & Storytelling',
        'books': '"On Writing" by Stephen King, "Story" by Robert McKee, "Bird by Bird" by Anne Lamott, "Self-Editing for Fiction Writers" by Browne & King, "The Art of Fiction" by John Gardner, "Steering the Craft" by Ursula K. Le Guin',
        'levels': {
            6: {
                'title': 'World & Setting',
                'description': 'Create immersive settings that become characters and ground narrative in place',
                'lessons': [
                    {'id': 'ws-041', 'title': 'Setting as Story Engine', 'type': 'intro'},
                    {'id': 'ws-042', 'title': 'Sensory Worldbuilding', 'type': 'concept'},
                    {'id': 'ws-043', 'title': 'Research for Authentic Settings', 'type': 'concept'},
                    {'id': 'ws-044', 'title': 'Time Period & Historical Detail', 'type': 'concept'},
                    {'id': 'ws-045', 'title': 'Atmosphere & Environmental Mood', 'type': 'concept'},
                    {'id': 'ws-046', 'title': 'Setting & Theme Integration', 'type': 'concept'},
                    {'id': 'ws-047', 'title': 'Setting Immersion Exercise', 'type': 'exercise'},
                    {'id': 'ws-048', 'title': 'Build a Living World', 'type': 'challenge'},
                ],
            },
            7: {
                'title': 'Editing & Revision',
                'description': 'Transform rough drafts into polished prose through systematic revision',
                'lessons': [
                    {'id': 'ws-049', 'title': 'The Revision Mindset', 'type': 'intro'},
                    {'id': 'ws-050', 'title': 'Macro Editing -- Structure & Story', 'type': 'concept'},
                    {'id': 'ws-051', 'title': 'Micro Editing -- Line by Line', 'type': 'concept'},
                    {'id': 'ws-052', 'title': 'Cutting -- Kill Your Darlings', 'type': 'concept'},
                    {'id': 'ws-053', 'title': 'Beta Readers & Feedback Loops', 'type': 'concept'},
                    {'id': 'ws-054', 'title': 'Common Manuscript Problems', 'type': 'concept'},
                    {'id': 'ws-055', 'title': 'Self-Edit Your Draft', 'type': 'exercise'},
                    {'id': 'ws-056', 'title': 'Complete Revision Challenge', 'type': 'challenge'},
                ],
            },
            8: {
                'title': 'Genre & Form',
                'description': 'Master genre conventions and innovate within literary and commercial forms',
                'lessons': [
                    {'id': 'ws-057', 'title': 'Understanding Genre', 'type': 'intro'},
                    {'id': 'ws-058', 'title': 'Literary Fiction Craft', 'type': 'concept'},
                    {'id': 'ws-059', 'title': 'Thriller & Suspense Mechanics', 'type': 'concept'},
                    {'id': 'ws-060', 'title': 'Fantasy & Science Fiction Worldbuilding', 'type': 'concept'},
                    {'id': 'ws-061', 'title': 'Romance & Emotional Arcs', 'type': 'concept'},
                    {'id': 'ws-062', 'title': 'Genre-Blending & Innovation', 'type': 'concept'},
                    {'id': 'ws-063', 'title': 'Genre Analysis Exercise', 'type': 'exercise'},
                    {'id': 'ws-064', 'title': 'Write Across Genres', 'type': 'challenge'},
                ],
            },
            9: {
                'title': 'Publishing & Platform',
                'description': 'Navigate the modern publishing landscape from queries to self-publishing',
                'lessons': [
                    {'id': 'ws-065', 'title': 'The Publishing Landscape Today', 'type': 'intro'},
                    {'id': 'ws-066', 'title': 'Query Letters & Pitching', 'type': 'concept'},
                    {'id': 'ws-067', 'title': 'Literary Agents & Traditional Publishing', 'type': 'concept'},
                    {'id': 'ws-068', 'title': 'Self-Publishing Mastery', 'type': 'concept'},
                    {'id': 'ws-069', 'title': 'Building Your Author Platform', 'type': 'concept'},
                    {'id': 'ws-070', 'title': 'Marketing Your Book', 'type': 'concept'},
                    {'id': 'ws-071', 'title': 'Write Your Query Letter', 'type': 'exercise'},
                    {'id': 'ws-072', 'title': 'Launch Plan Challenge', 'type': 'challenge'},
                ],
            },
            10: {
                'title': 'The Writer\'s Life',
                'description': 'Sustain a lifelong creative practice with resilience and artistic growth',
                'lessons': [
                    {'id': 'ws-073', 'title': 'The Long Game of Writing', 'type': 'intro'},
                    {'id': 'ws-074', 'title': 'Daily Practice & Creative Habits', 'type': 'concept'},
                    {'id': 'ws-075', 'title': 'Writer\'s Block & Creative Drought', 'type': 'concept'},
                    {'id': 'ws-076', 'title': 'Building a Writing Community', 'type': 'concept'},
                    {'id': 'ws-077', 'title': 'Reading as a Writer', 'type': 'concept'},
                    {'id': 'ws-078', 'title': 'The Business of Being a Writer', 'type': 'concept'},
                    {'id': 'ws-079', 'title': 'Your Writing Manifesto', 'type': 'exercise'},
                    {'id': 'ws-080', 'title': 'Design Your Writer\'s Life', 'type': 'challenge'},
                ],
            },
        },
    },
    'music-sound': {
        'prefix': 'mus',
        'export_prefix': 'musLessonsLevel',
        'file': 'app/src/data/pathways/music-sound-lessons.ts',
        'subject': 'Music & Sound',
        'books': '"This Is Your Brain on Music" by Daniel Levitin, "How Music Works" by David Byrne, "The Rest Is Noise" by Alex Ross, "Musicophilia" by Oliver Sacks, "Making Music" by Dennis DeSantis, "Behind the Glass" by Howard Massey',
        'levels': {
            6: {
                'title': 'Sound Design & Synthesis',
                'description': 'Create original sounds from scratch using synthesis and sampling',
                'lessons': [
                    {'id': 'mus-041', 'title': 'The Sound Designer\'s Mindset', 'type': 'intro'},
                    {'id': 'mus-042', 'title': 'Subtractive Synthesis Fundamentals', 'type': 'concept'},
                    {'id': 'mus-043', 'title': 'FM & Wavetable Synthesis', 'type': 'concept'},
                    {'id': 'mus-044', 'title': 'Sampling & Manipulation', 'type': 'concept'},
                    {'id': 'mus-045', 'title': 'Effects Processing -- Reverb, Delay & Beyond', 'type': 'concept'},
                    {'id': 'mus-046', 'title': 'Foley & Field Recording', 'type': 'concept'},
                    {'id': 'mus-047', 'title': 'Sound Design Workshop', 'type': 'exercise'},
                    {'id': 'mus-048', 'title': 'Create a Sound Palette', 'type': 'challenge'},
                ],
            },
            7: {
                'title': 'Recording Techniques',
                'description': 'Capture professional-quality recordings with proper technique',
                'lessons': [
                    {'id': 'mus-049', 'title': 'The Art of Capturing Sound', 'type': 'intro'},
                    {'id': 'mus-050', 'title': 'Microphone Types & Placement', 'type': 'concept'},
                    {'id': 'mus-051', 'title': 'Signal Flow & Gain Staging', 'type': 'concept'},
                    {'id': 'mus-052', 'title': 'Recording Vocals', 'type': 'concept'},
                    {'id': 'mus-053', 'title': 'Recording Acoustic Instruments', 'type': 'concept'},
                    {'id': 'mus-054', 'title': 'Home Studio Setup & Acoustics', 'type': 'concept'},
                    {'id': 'mus-055', 'title': 'Recording Session Exercise', 'type': 'exercise'},
                    {'id': 'mus-056', 'title': 'Record a Complete Track', 'type': 'challenge'},
                ],
            },
            8: {
                'title': 'Mixing & Mastering',
                'description': 'Transform raw tracks into polished, release-ready productions',
                'lessons': [
                    {'id': 'mus-057', 'title': 'The Mixing Philosophy', 'type': 'intro'},
                    {'id': 'mus-058', 'title': 'EQ -- Sculpting Frequency Space', 'type': 'concept'},
                    {'id': 'mus-059', 'title': 'Compression & Dynamics', 'type': 'concept'},
                    {'id': 'mus-060', 'title': 'Space -- Reverb, Delay & Width', 'type': 'concept'},
                    {'id': 'mus-061', 'title': 'Automation & Movement', 'type': 'concept'},
                    {'id': 'mus-062', 'title': 'Mastering Fundamentals', 'type': 'concept'},
                    {'id': 'mus-063', 'title': 'Mix Critique Exercise', 'type': 'exercise'},
                    {'id': 'mus-064', 'title': 'Mix & Master a Song', 'type': 'challenge'},
                ],
            },
            9: {
                'title': 'Music Business & Marketing',
                'description': 'Navigate the modern music industry and build your career',
                'lessons': [
                    {'id': 'mus-065', 'title': 'The Modern Music Business', 'type': 'intro'},
                    {'id': 'mus-066', 'title': 'Distribution & Streaming Strategy', 'type': 'concept'},
                    {'id': 'mus-067', 'title': 'Music Marketing & Social Media', 'type': 'concept'},
                    {'id': 'mus-068', 'title': 'Revenue Streams for Musicians', 'type': 'concept'},
                    {'id': 'mus-069', 'title': 'Copyright, Publishing & Royalties', 'type': 'concept'},
                    {'id': 'mus-070', 'title': 'Live Performance & Touring', 'type': 'concept'},
                    {'id': 'mus-071', 'title': 'Release Strategy Exercise', 'type': 'exercise'},
                    {'id': 'mus-072', 'title': 'Plan Your First Release', 'type': 'challenge'},
                ],
            },
            10: {
                'title': 'The Complete Musician',
                'description': 'Integrate all skills into a sustainable creative practice',
                'lessons': [
                    {'id': 'mus-073', 'title': 'The Musician\'s Journey', 'type': 'intro'},
                    {'id': 'mus-074', 'title': 'Developing Your Artistic Identity', 'type': 'concept'},
                    {'id': 'mus-075', 'title': 'Cross-Genre Fluency', 'type': 'concept'},
                    {'id': 'mus-076', 'title': 'Collaboration & Co-Creation', 'type': 'concept'},
                    {'id': 'mus-077', 'title': 'Music & Technology Futures', 'type': 'concept'},
                    {'id': 'mus-078', 'title': 'Building a Sustainable Practice', 'type': 'concept'},
                    {'id': 'mus-079', 'title': 'Your Musical Manifesto', 'type': 'exercise'},
                    {'id': 'mus-080', 'title': 'Design Your Music Career', 'type': 'challenge'},
                ],
            },
        },
    },
    'creative-writing': {
        'prefix': 'cw',
        'export_prefix': 'cwLessonsLevel',
        'file': 'app/src/data/pathways/creative-writing-lessons.ts',
        'subject': 'Creative Writing',
        'books': '"On Writing" by Stephen King, "The Art of Fiction" by John Gardner, "Steering the Craft" by Ursula K. Le Guin, "Wonderbook" by Jeff VanderMeer, "The Anatomy of Story" by John Truby, "Bird by Bird" by Anne Lamott',
        'levels': {
            6: {
                'title': 'Emotion & Theme',
                'description': 'Weave emotional resonance and thematic depth into fiction',
                'lessons': [
                    {'id': 'cw-041', 'title': 'Writing That Makes Readers Feel', 'type': 'intro'},
                    {'id': 'cw-042', 'title': 'Emotional Beats & Pacing', 'type': 'concept'},
                    {'id': 'cw-043', 'title': 'Theme -- The Story Beneath the Story', 'type': 'concept'},
                    {'id': 'cw-044', 'title': 'Symbolism & Motif', 'type': 'concept'},
                    {'id': 'cw-045', 'title': 'Catharsis & Emotional Payoff', 'type': 'concept'},
                    {'id': 'cw-046', 'title': 'Subtlety vs. Didacticism', 'type': 'concept'},
                    {'id': 'cw-047', 'title': 'Emotional Scene Exercise', 'type': 'exercise'},
                    {'id': 'cw-048', 'title': 'Write a Theme-Driven Scene', 'type': 'challenge'},
                ],
            },
            7: {
                'title': 'Genre Fiction Mastery',
                'description': 'Master conventions and reader expectations of major fiction genres',
                'lessons': [
                    {'id': 'cw-049', 'title': 'Genre as Promise', 'type': 'intro'},
                    {'id': 'cw-050', 'title': 'Mystery & Crime Fiction', 'type': 'concept'},
                    {'id': 'cw-051', 'title': 'Science Fiction & Speculative', 'type': 'concept'},
                    {'id': 'cw-052', 'title': 'Fantasy & Magical Realism', 'type': 'concept'},
                    {'id': 'cw-053', 'title': 'Horror & Gothic Fiction', 'type': 'concept'},
                    {'id': 'cw-054', 'title': 'Romance & Literary Crossover', 'type': 'concept'},
                    {'id': 'cw-055', 'title': 'Genre Convention Exercise', 'type': 'exercise'},
                    {'id': 'cw-056', 'title': 'Write in an Unfamiliar Genre', 'type': 'challenge'},
                ],
            },
            8: {
                'title': 'Short Fiction Craft',
                'description': 'Write powerful short stories with economy and impact',
                'lessons': [
                    {'id': 'cw-057', 'title': 'The Power of Short Fiction', 'type': 'intro'},
                    {'id': 'cw-058', 'title': 'The First Sentence & Opening Gambit', 'type': 'concept'},
                    {'id': 'cw-059', 'title': 'Economy & Compression', 'type': 'concept'},
                    {'id': 'cw-060', 'title': 'The Pivot -- Turning Points in Short Fiction', 'type': 'concept'},
                    {'id': 'cw-061', 'title': 'Endings -- Open, Closed & Ambiguous', 'type': 'concept'},
                    {'id': 'cw-062', 'title': 'Flash Fiction & Micro-Fiction', 'type': 'concept'},
                    {'id': 'cw-063', 'title': 'Short Story Analysis', 'type': 'exercise'},
                    {'id': 'cw-064', 'title': 'Write a Complete Short Story', 'type': 'challenge'},
                ],
            },
            9: {
                'title': 'The Novel Journey',
                'description': 'Plan, draft, and revise a novel from concept to manuscript',
                'lessons': [
                    {'id': 'cw-065', 'title': 'Thinking in Novel Scale', 'type': 'intro'},
                    {'id': 'cw-066', 'title': 'Outlining vs. Discovery Writing', 'type': 'concept'},
                    {'id': 'cw-067', 'title': 'Managing Complexity -- Characters & Subplots', 'type': 'concept'},
                    {'id': 'cw-068', 'title': 'The First Draft -- Momentum & Permission', 'type': 'concept'},
                    {'id': 'cw-069', 'title': 'Revision Strategy for Novels', 'type': 'concept'},
                    {'id': 'cw-070', 'title': 'Pacing & Chapter Design', 'type': 'concept'},
                    {'id': 'cw-071', 'title': 'Novel Planning Exercise', 'type': 'exercise'},
                    {'id': 'cw-072', 'title': 'Write Your Novel\'s First Chapter', 'type': 'challenge'},
                ],
            },
            10: {
                'title': 'The Writing Career',
                'description': 'Build a sustainable writing career through publishing and lifelong craft',
                'lessons': [
                    {'id': 'cw-073', 'title': 'Writer as Professional', 'type': 'intro'},
                    {'id': 'cw-074', 'title': 'Submissions & Literary Magazines', 'type': 'concept'},
                    {'id': 'cw-075', 'title': 'Agents, Editors & Publishing Paths', 'type': 'concept'},
                    {'id': 'cw-076', 'title': 'Writing Workshops & MFA Programs', 'type': 'concept'},
                    {'id': 'cw-077', 'title': 'Building Your Author Brand', 'type': 'concept'},
                    {'id': 'cw-078', 'title': 'The Lifelong Writer', 'type': 'concept'},
                    {'id': 'cw-079', 'title': 'Your Writer\'s Business Plan', 'type': 'exercise'},
                    {'id': 'cw-080', 'title': 'Design Your Writing Life', 'type': 'challenge'},
                ],
            },
        },
    },
    'content-creation': {
        'prefix': 'content',
        'export_prefix': 'contentLessonsLevel',
        'file': 'app/src/data/pathways/content-creation-lessons.ts',
        'subject': 'Content Creation',
        'books': '"Building a StoryBrand" by Donald Miller, "Content Inc." by Joe Pulizzi, "Everybody Writes" by Ann Handley, "Made to Stick" by Chip & Dan Heath, "Contagious" by Jonah Berger, "The YouTube Formula" by Derral Eves',
        'levels': {
            6: {
                'title': 'Podcasting & Audio',
                'description': 'Launch and grow a podcast with professional audio and loyal listeners',
                'lessons': [
                    {'id': 'content-041', 'title': 'The Podcast Opportunity', 'type': 'intro'},
                    {'id': 'content-042', 'title': 'Podcast Format & Concept Design', 'type': 'concept'},
                    {'id': 'content-043', 'title': 'Interview Skills & Guest Booking', 'type': 'concept'},
                    {'id': 'content-044', 'title': 'Audio Production for Podcasters', 'type': 'concept'},
                    {'id': 'content-045', 'title': 'Podcast Growth & Discovery', 'type': 'concept'},
                    {'id': 'content-046', 'title': 'Monetizing Your Podcast', 'type': 'concept'},
                    {'id': 'content-047', 'title': 'Podcast Episode Planning', 'type': 'exercise'},
                    {'id': 'content-048', 'title': 'Launch Your Podcast', 'type': 'challenge'},
                ],
            },
            7: {
                'title': 'Newsletter & Email',
                'description': 'Build a newsletter empire with list growth and reader retention',
                'lessons': [
                    {'id': 'content-049', 'title': 'Email -- Your Most Valuable Channel', 'type': 'intro'},
                    {'id': 'content-050', 'title': 'Newsletter Formats That Work', 'type': 'concept'},
                    {'id': 'content-051', 'title': 'List Building Strategies', 'type': 'concept'},
                    {'id': 'content-052', 'title': 'Subject Lines & Open Rates', 'type': 'concept'},
                    {'id': 'content-053', 'title': 'Email Automation & Sequences', 'type': 'concept'},
                    {'id': 'content-054', 'title': 'Segmentation & Personalization', 'type': 'concept'},
                    {'id': 'content-055', 'title': 'Newsletter Audit Exercise', 'type': 'exercise'},
                    {'id': 'content-056', 'title': 'Design Your Newsletter System', 'type': 'challenge'},
                ],
            },
            8: {
                'title': 'Monetization Deep Dive',
                'description': 'Maximize revenue with sponsorships, products, and memberships',
                'lessons': [
                    {'id': 'content-057', 'title': 'Beyond Ad Revenue', 'type': 'intro'},
                    {'id': 'content-058', 'title': 'Sponsorship & Brand Deals', 'type': 'concept'},
                    {'id': 'content-059', 'title': 'Digital Products -- Courses, Templates, eBooks', 'type': 'concept'},
                    {'id': 'content-060', 'title': 'Membership & Subscription Models', 'type': 'concept'},
                    {'id': 'content-061', 'title': 'Affiliate Marketing Done Right', 'type': 'concept'},
                    {'id': 'content-062', 'title': 'Pricing Psychology & Packaging', 'type': 'concept'},
                    {'id': 'content-063', 'title': 'Revenue Stack Exercise', 'type': 'exercise'},
                    {'id': 'content-064', 'title': 'Build Your Monetization Plan', 'type': 'challenge'},
                ],
            },
            9: {
                'title': 'Team & Scale',
                'description': 'Build a content team and create systems for sustainable scaling',
                'lessons': [
                    {'id': 'content-065', 'title': 'From Solo to Team', 'type': 'intro'},
                    {'id': 'content-066', 'title': 'Your First Hire -- Editor, VA, or Manager', 'type': 'concept'},
                    {'id': 'content-067', 'title': 'SOPs & Content Workflows', 'type': 'concept'},
                    {'id': 'content-068', 'title': 'Delegation Without Losing Quality', 'type': 'concept'},
                    {'id': 'content-069', 'title': 'Multi-Platform Content Systems', 'type': 'concept'},
                    {'id': 'content-070', 'title': 'Building a Media Company', 'type': 'concept'},
                    {'id': 'content-071', 'title': 'Workflow Design Exercise', 'type': 'exercise'},
                    {'id': 'content-072', 'title': 'Scale Your Content Operation', 'type': 'challenge'},
                ],
            },
            10: {
                'title': 'Creator Legacy',
                'description': 'Build a lasting creative brand and create generational impact',
                'lessons': [
                    {'id': 'content-073', 'title': 'Beyond Content -- Building Legacy', 'type': 'intro'},
                    {'id': 'content-074', 'title': 'Platform Independence & Owned Media', 'type': 'concept'},
                    {'id': 'content-075', 'title': 'Building Multiple Brands', 'type': 'concept'},
                    {'id': 'content-076', 'title': 'Creator to CEO Transition', 'type': 'concept'},
                    {'id': 'content-077', 'title': 'Impact, Influence & Responsibility', 'type': 'concept'},
                    {'id': 'content-078', 'title': 'The 10-Year Creator Vision', 'type': 'concept'},
                    {'id': 'content-079', 'title': 'Your Creator Mission Statement', 'type': 'exercise'},
                    {'id': 'content-080', 'title': 'Design Your Creator Legacy', 'type': 'challenge'},
                ],
            },
        },
    },
    'world-building': {
        'prefix': 'world',
        'export_prefix': 'worldLessonsLevel',
        'file': 'app/src/data/pathways/world-building-lessons.ts',
        'subject': 'World Building',
        'books': '"Wonderbook" by Jeff VanderMeer, "On Writing and Worldbuilding" by Timothy Hickson, "Guns, Germs, and Steel" by Jared Diamond, "Sapiens" by Yuval Noah Harari, "The Art of Language Invention" by David J. Peterson, "Rhetorics of Fantasy" by Farah Mendlesohn',
        'levels': {
            6: {
                'title': 'Languages & Communication',
                'description': 'Develop naming conventions, constructed languages, and writing systems',
                'lessons': [
                    {'id': 'world-041', 'title': 'Words Shape Worlds', 'type': 'intro'},
                    {'id': 'world-042', 'title': 'Naming Conventions & Phonetics', 'type': 'concept'},
                    {'id': 'world-043', 'title': 'Constructed Languages -- Conlang Basics', 'type': 'concept'},
                    {'id': 'world-044', 'title': 'Writing Systems & Literacy', 'type': 'concept'},
                    {'id': 'world-045', 'title': 'Language & Power -- Who Speaks What', 'type': 'concept'},
                    {'id': 'world-046', 'title': 'Communication Technology & Networks', 'type': 'concept'},
                    {'id': 'world-047', 'title': 'Naming System Workshop', 'type': 'exercise'},
                    {'id': 'world-048', 'title': 'Build Your World\'s Language', 'type': 'challenge'},
                ],
            },
            7: {
                'title': 'Economics & Trade',
                'description': 'Build believable economic systems, trade routes, and currencies',
                'lessons': [
                    {'id': 'world-049', 'title': 'Money Makes Worlds Go Round', 'type': 'intro'},
                    {'id': 'world-050', 'title': 'Currency & Value Systems', 'type': 'concept'},
                    {'id': 'world-051', 'title': 'Trade Routes & Networks', 'type': 'concept'},
                    {'id': 'world-052', 'title': 'Guilds, Markets & Economic Structures', 'type': 'concept'},
                    {'id': 'world-053', 'title': 'Scarcity, Abundance & Conflict', 'type': 'concept'},
                    {'id': 'world-054', 'title': 'Technology\'s Impact on Economy', 'type': 'concept'},
                    {'id': 'world-055', 'title': 'Economic System Exercise', 'type': 'exercise'},
                    {'id': 'world-056', 'title': 'Design Your World\'s Economy', 'type': 'challenge'},
                ],
            },
            8: {
                'title': 'Conflict & Power',
                'description': 'Design political systems, power structures, and driving tensions',
                'lessons': [
                    {'id': 'world-057', 'title': 'Power Shapes Everything', 'type': 'intro'},
                    {'id': 'world-058', 'title': 'Government Systems & Political Structure', 'type': 'concept'},
                    {'id': 'world-059', 'title': 'Factions, Alliances & Rivalries', 'type': 'concept'},
                    {'id': 'world-060', 'title': 'War & Military in World Building', 'type': 'concept'},
                    {'id': 'world-061', 'title': 'Law, Justice & Social Control', 'type': 'concept'},
                    {'id': 'world-062', 'title': 'Revolution, Reform & Change', 'type': 'concept'},
                    {'id': 'world-063', 'title': 'Political Map Exercise', 'type': 'exercise'},
                    {'id': 'world-064', 'title': 'Design Your Power Structure', 'type': 'challenge'},
                ],
            },
            9: {
                'title': 'Narrative Integration',
                'description': 'Weave your world seamlessly into story without info-dumps',
                'lessons': [
                    {'id': 'world-065', 'title': 'Show, Don\'t Lecture', 'type': 'intro'},
                    {'id': 'world-066', 'title': 'Iceberg Theory in Practice', 'type': 'concept'},
                    {'id': 'world-067', 'title': 'Exposition Through Character', 'type': 'concept'},
                    {'id': 'world-068', 'title': 'Environmental Storytelling', 'type': 'concept'},
                    {'id': 'world-069', 'title': 'Reader Discovery & Mystery', 'type': 'concept'},
                    {'id': 'world-070', 'title': 'World-Building for Different Media', 'type': 'concept'},
                    {'id': 'world-071', 'title': 'Info-Dump Revision Exercise', 'type': 'exercise'},
                    {'id': 'world-072', 'title': 'Write a World-Revealing Scene', 'type': 'challenge'},
                ],
            },
            10: {
                'title': 'Master World Builder',
                'description': 'Create a complete world bible and develop your philosophy',
                'lessons': [
                    {'id': 'world-073', 'title': 'The Complete World Builder', 'type': 'intro'},
                    {'id': 'world-074', 'title': 'The World Bible -- Your Master Document', 'type': 'concept'},
                    {'id': 'world-075', 'title': 'Consistency & Continuity Management', 'type': 'concept'},
                    {'id': 'world-076', 'title': 'Collaborative World Building', 'type': 'concept'},
                    {'id': 'world-077', 'title': 'Transmedia World Building', 'type': 'concept'},
                    {'id': 'world-078', 'title': 'Your World-Building Philosophy', 'type': 'concept'},
                    {'id': 'world-079', 'title': 'World Bible Assembly', 'type': 'exercise'},
                    {'id': 'world-080', 'title': 'Present Your Complete World', 'type': 'challenge'},
                ],
            },
        },
    },
}

# ============================================================================
# Prompt template
# ============================================================================

LESSON_PROMPT = """You are creating a lesson for a {subject} course on the Polymind learning platform.

Level: {level_num} - {level_title}
Level Description: {level_desc}

Lesson: {lesson_id} - {lesson_title}
Type: {lesson_type}

Reference books for citations: {books}

Create the lesson content following this structure:

For INTRO lessons (10 min, 100 XP):
- overview: 1-2 sentence preview
- mainContent: 800-1000 words with markdown formatting including ## headers, **bold**, *italic*, lists, tables, blockquotes
- keyTakeaway: One clear sentence
- actionItem: Practical, specific task

For CONCEPT lessons (12 min, 100 XP):
- overview: 1-2 sentence preview
- mainContent: 1000-1500 words with ## headers, ### sub-headers, **bold**, *italic*, lists, markdown tables, blockquotes
- keyTakeaway: One clear sentence
- actionItem: Specific practice exercise
- quiz: scenario-based question with 4 options (for concept lessons at positions 2,3,5,7 in each level)

For EXERCISE lessons (15 min, 125 XP):
- overview: What they'll practice
- mainContent: 1200-1800 words with step-by-step instructions
- keyTakeaway: What they'll learn by doing
- actionItem: Complete the exercise
- quiz: application-based question

For CHALLENGE lessons (15 min, 150 XP):
- overview: The challenge description
- mainContent: 1000-1500 words with the challenge, steps, and criteria
- keyTakeaway: Key mastery insight
- actionItem: Complete the challenge this week
- quiz: synthesis question

CRITICAL RULES:
1. Use rich markdown: ## headers, ### sub-headers, **bold**, *italic*, bullet lists, numbered lists, markdown tables (| Header | Header |), blockquotes (> "quote" -- attribution)
2. Be practical and actionable with real-world examples
3. EVERY lesson MUST end mainContent with:
   ## Sources & Further Reading
   - **"Book Title" by Author** -- specific chapter or insight referenced
   - **Research**: Real study or finding (Year) -- what it showed
   (Include 3-5 citations per lesson)
4. For quiz: create scenario-based questions testing APPLICATION not memorization
5. Escape single quotes in text (use \\' instead of ')
6. Keep content engaging and conversational
7. Reference famous works, creators, and research

Output ONLY valid TypeScript object in this exact format:
{{
  id: '{lesson_id}',
  title: '{lesson_title}',
  type: '{lesson_type}',
  duration: {duration},
  xpReward: {xp},
  content: {{
    overview: 'text here',
    mainContent: `text with markdown here`,
    keyTakeaway: 'text here',
    actionItem: 'text here',{quiz_field}
  }}
}}

Do not include any explanation, just the TypeScript object."""

# ============================================================================
# Generation logic
# ============================================================================

def get_duration_xp(lesson_type):
    durations = {'intro': 10, 'concept': 12, 'exercise': 15, 'challenge': 15}
    xps = {'intro': 100, 'concept': 100, 'exercise': 125, 'challenge': 150}
    return durations.get(lesson_type, 12), xps.get(lesson_type, 100)

def needs_quiz(lesson_type, position):
    """Determine if this lesson should have a quiz based on type and position (0-indexed)"""
    if lesson_type in ('exercise', 'challenge'):
        return True
    if lesson_type == 'concept' and position in (1, 2, 4, 6):  # positions 2,3,5,7 in 1-indexed
        return True
    return False

def generate_lesson(module_data, level_num, level_data, lesson_data, position):
    """Generate a single lesson using Gemini"""
    duration, xp = get_duration_xp(lesson_data['type'])
    has_quiz = needs_quiz(lesson_data['type'], position)

    quiz_field = ''
    if has_quiz:
        quiz_field = "\n    quiz: { question: 'question', options: ['A', 'B', 'C', 'D'], correct: 0, explanation: 'explanation' }"

    prompt = LESSON_PROMPT.format(
        subject=module_data['subject'],
        level_num=level_num,
        level_title=level_data['title'],
        level_desc=level_data['description'],
        lesson_id=lesson_data['id'],
        lesson_title=lesson_data['title'],
        lesson_type=lesson_data['type'],
        books=module_data['books'],
        duration=duration,
        xp=xp,
        quiz_field=quiz_field,
    )

    print(f"  Generating {lesson_data['id']}: {lesson_data['title']}...", end=' ', flush=True)

    for attempt in range(3):
        try:
            response = client.models.generate_content(
                model=MODEL_NAME,
                contents=[prompt],
            )
            content = response.text.strip()

            # Clean up response
            if content.startswith('```typescript'):
                content = content[len('```typescript'):]
            elif content.startswith('```ts'):
                content = content[len('```ts'):]
            if content.startswith('```'):
                content = content[3:]
            if content.endswith('```'):
                content = content[:-3]
            content = content.strip()

            # Add trailing comma
            if not content.endswith(','):
                content += ','

            print("OK")
            return content

        except Exception as e:
            err_str = str(e)
            if '429' in err_str or 'RESOURCE_EXHAUSTED' in err_str:
                wait = 30 * (attempt + 1)
                print(f"rate limited, waiting {wait}s...", end=' ', flush=True)
                time.sleep(wait)
            elif '400' in err_str or 'INVALID_ARGUMENT' in err_str:
                print(f"SKIP (bad request)")
                return None
            else:
                print(f"error: {e}")
                if attempt < 2:
                    time.sleep(5)
                else:
                    return None

    return None

def generate_module(module_key, module_data, specific_levels=None):
    """Generate all levels for a module"""
    output_lines = []
    levels_to_gen = specific_levels or sorted(module_data['levels'].keys())

    for level_num in levels_to_gen:
        level_data = module_data['levels'][level_num]
        print(f"\n  Level {level_num}: {level_data['title']}")
        print("  " + "=" * 50)

        var_name = f"{module_data['export_prefix']}{level_num}"
        output_lines.append(f"\n// Level {level_num}: {level_data['title']}")
        output_lines.append(f"export const {var_name}: PathwayLesson[] = [")

        for i, lesson_data in enumerate(level_data['lessons']):
            lesson_content = generate_lesson(module_data, level_num, level_data, lesson_data, i)
            if lesson_content:
                output_lines.append(f"  {lesson_content}")
            else:
                print(f"  WARNING: Failed to generate {lesson_data['id']}")
                # Create placeholder
                duration, xp = get_duration_xp(lesson_data['type'])
                output_lines.append(f"  {{ id: '{lesson_data['id']}', title: '{lesson_data['title']}', type: '{lesson_data['type']}', duration: {duration}, xpReward: {xp}, content: {{ overview: 'Coming soon.', mainContent: `# {lesson_data['title']}\\n\\nContent coming soon.`, keyTakeaway: 'Coming soon.', actionItem: 'Stay tuned.' }} }},")

            # Small delay between lessons to avoid rate limits
            time.sleep(1)

        output_lines.append("];")

    return '\n'.join(output_lines)

def main():
    import argparse
    parser = argparse.ArgumentParser(description='Generate Creative Arts lessons (levels 6-10)')
    parser.add_argument('--module', '-m', help='Specific module to generate (e.g., writing-storytelling)')
    parser.add_argument('--level', '-l', type=int, help='Specific level to generate (6-10)')
    parser.add_argument('--dry-run', action='store_true', help='Just show what would be generated')
    args = parser.parse_args()

    modules_to_gen = {args.module: MODULES[args.module]} if args.module else MODULES

    print("Creative Arts Lesson Generator (Levels 6-10)")
    print("=" * 60)
    print(f"Model: {MODEL_NAME}")
    print(f"Modules: {len(modules_to_gen)}")

    total_lessons = 0
    for mk, mv in modules_to_gen.items():
        levels = [args.level] if args.level else sorted(mv['levels'].keys())
        count = sum(len(mv['levels'][l]['lessons']) for l in levels if l in mv['levels'])
        total_lessons += count
        print(f"  {mk}: {count} lessons (levels {levels})")

    print(f"Total lessons to generate: {total_lessons}")

    if args.dry_run:
        print("\n[DRY RUN] Would generate the above. Use without --dry-run to proceed.")
        return

    print()

    for module_key, module_data in modules_to_gen.items():
        print(f"\n{'=' * 60}")
        print(f"MODULE: {module_data['subject']}")
        print(f"{'=' * 60}")

        specific_levels = [args.level] if args.level else None
        generated_content = generate_module(module_key, module_data, specific_levels)

        # Read existing file
        filepath = Path(module_data['file'])
        with open(filepath, 'r', encoding='utf-8') as f:
            existing = f.read()

        # Append generated content
        updated = existing.rstrip() + '\n' + generated_content + '\n'

        # Write back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(updated)

        print(f"\n  Updated: {filepath}")

    print(f"\n{'=' * 60}")
    print(f"DONE! Generated {total_lessons} lessons.")
    print("\nNext steps:")
    print("  1. Review generated content for quality")
    print("  2. Fix any unescaped apostrophes in single-quoted strings")
    print("  3. Run: cd app && npx tsc --noEmit")
    print("  4. Test in browser")

if __name__ == '__main__':
    main()
