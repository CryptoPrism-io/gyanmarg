#!/usr/bin/env python3
"""
Image Compression Script for Polymind
Compresses WebP images to reduce file size while maintaining quality.

Usage:
  pip install Pillow
  python scripts/compress-images.py
"""

import os
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Missing Pillow. Install with: pip install Pillow")
    exit(1)

# Directories
SCRIPT_DIR = Path(__file__).parent
APP_DIR = SCRIPT_DIR.parent
LEVELS_DIR = APP_DIR / "src" / "assets" / "ai-images" / "levels"
MODULES_DIR = APP_DIR / "src" / "assets" / "ai-images" / "modules"

# Target max dimension and quality
MAX_WIDTH = 800  # Max width for level images
MAX_HEIGHT = 600  # Max height
QUALITY = 75  # WebP quality (0-100)


def compress_image(input_path: Path, max_width: int = MAX_WIDTH, max_height: int = MAX_HEIGHT, quality: int = QUALITY):
    """Compress and resize a single image."""
    try:
        with Image.open(input_path) as img:
            original_size = input_path.stat().st_size / 1024  # KB

            # Convert to RGB if necessary (for WebP compatibility)
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')

            # Calculate new size maintaining aspect ratio
            width, height = img.size
            ratio = min(max_width / width, max_height / height)

            if ratio < 1:  # Only resize if larger than target
                new_width = int(width * ratio)
                new_height = int(height * ratio)
                img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)

            # Save with compression
            img.save(input_path, 'WEBP', quality=quality, method=6)

            new_size = input_path.stat().st_size / 1024  # KB
            reduction = ((original_size - new_size) / original_size) * 100

            print(f"  {input_path.name}: {original_size:.0f}KB -> {new_size:.0f}KB ({reduction:.0f}% smaller)")
            return True

    except Exception as e:
        print(f"  ERROR {input_path.name}: {e}")
        return False


def compress_directory(directory: Path, max_width: int, max_height: int):
    """Compress all WebP images in a directory."""
    if not directory.exists():
        print(f"Directory not found: {directory}")
        return

    images = list(directory.glob("*.webp"))
    print(f"\nCompressing {len(images)} images in {directory.name}/")
    print("-" * 50)

    total_before = sum(f.stat().st_size for f in images) / 1024 / 1024  # MB

    for img_path in sorted(images):
        compress_image(img_path, max_width, max_height)

    total_after = sum(f.stat().st_size for f in images) / 1024 / 1024  # MB
    print("-" * 50)
    print(f"Total: {total_before:.1f}MB -> {total_after:.1f}MB")


def main():
    print("=" * 50)
    print("POLYMIND IMAGE COMPRESSOR")
    print("=" * 50)

    # Compress level images (smaller, used in cards)
    compress_directory(LEVELS_DIR, max_width=640, max_height=480)

    # Compress module images (medium size)
    compress_directory(MODULES_DIR, max_width=800, max_height=600)

    print("\nDone!")


if __name__ == "__main__":
    main()
