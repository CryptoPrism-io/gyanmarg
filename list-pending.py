#!/usr/bin/env python3
import re

with open('app/src/data/modules.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Split into module blocks
modules = re.split(r'  {', content)[1:]  # Skip header

available = []
unavailable = []

for mod in modules:
    if 'isAvailable:' not in mod:
        continue

    title_match = re.search(r"title:\s*['\"]([^'\"]+)['\"]", mod)
    number_match = re.search(r"number:\s*(\d+)", mod)
    id_match = re.search(r"id:\s*['\"]([^'\"]+)['\"]", mod)
    is_avail = 'isAvailable: true' in mod

    if title_match and number_match:
        title = title_match.group(1)
        number = int(number_match.group(1))
        id_val = id_match.group(1) if id_match else 'unknown'

        if is_avail:
            available.append((number, title, id_val))
        else:
            unavailable.append((number, title, id_val))

print(f"📊 POLYMIND MODULES STATUS\n")
print(f"✅ Available: {len(available)}/76 (have full pathway content)")
print(f"🔒 Coming Soon: {len(unavailable)}/76 (need pathway creation)\n")

print("="*70)
print("\n🔒 MODULES NEEDING PATHWAYS (39 total):\n")

unavailable.sort(key=lambda x: x[0])
for num, title, id_val in unavailable:
    print(f"  {num:2d}. {title:40s} ({id_val})")

print(f"\n{'='*70}\n")
print("💡 SUGGESTED PRIORITY (Most Impactful):\n")
print("  1. Western Philosophy - foundational thinking frameworks")
print("  2. Design Thinking - creative problem solving")
print("  3. Cybersecurity - practical tech security")
print("  4. Startups & Innovation - entrepreneurial mindset")
print("  5. Geopolitics - understanding global dynamics")
