#!/usr/bin/env python3
"""
Watch for generated lesson files and integrate them automatically.
Runs in a loop, checking every 30 seconds for new -generated.ts files.
"""
import sys
import time
import subprocess
from pathlib import Path

sys.stdout.reconfigure(line_buffering=True)

SCRIPT_DIR = Path(__file__).parent
PATHWAYS_DIR = SCRIPT_DIR.parent / "src" / "data" / "pathways"
INTEGRATE_SCRIPT = SCRIPT_DIR / "integrate-generated-lessons.py"

integrated = set()

print("=" * 60)
print("POLYMIND LESSON WATCHER")
print("Watching for generated lesson files...")
print("=" * 60)

while True:
    generated_files = sorted(PATHWAYS_DIR.glob("*-lessons-generated.ts"))

    new_files = [f for f in generated_files if f.name not in integrated]

    if new_files:
        for f in new_files:
            module_id = f.stem.replace("-lessons-generated", "")
            print(f"\n{'=' * 40}")
            print(f"NEW: {module_id} ({f.stat().st_size / 1024:.1f} KB)")
            print(f"{'=' * 40}")

            # Wait 2 seconds to make sure file is fully written
            time.sleep(2)

            result = subprocess.run(
                [sys.executable, "-u", str(INTEGRATE_SCRIPT), "--module", module_id],
                cwd=str(SCRIPT_DIR.parent),
                capture_output=False,
            )

            if result.returncode == 0:
                integrated.add(f.name)
                print(f"  OK: {module_id} integrated ({len(integrated)} total)")
            else:
                print(f"  FAIL: {module_id} integration failed")

    if len(integrated) >= 22:  # All modules done
        print(f"\n{'=' * 60}")
        print(f"ALL {len(integrated)} MODULES INTEGRATED!")
        print(f"{'=' * 60}")
        break

    # Show status every check
    total_generated = len(list(PATHWAYS_DIR.glob("*-lessons-generated.ts")))
    print(f"  [{time.strftime('%H:%M:%S')}] Integrated: {len(integrated)}/22, Pending: {total_generated}", end="\r")

    time.sleep(30)
