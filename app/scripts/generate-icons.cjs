const { Jimp } = require('jimp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 72, 96, 128, 144, 152, 167, 180, 192, 384, 512];
const iconsDir = path.join(__dirname, '..', 'public', 'icons');

// Colors (RGBA as hex)
const BG_COLOR = 0x0A0A0BFF;       // Dark background
const AMBER_COLOR = 0xF59E0BFF;    // Amber/gold
const LIGHT_AMBER = 0xFBBF24FF;    // Light amber
const CREAM = 0xFDE68AFF;          // Cream/pale yellow

// Ensure icons directory exists
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

async function createIcon(size) {
  const image = new Jimp({ width: size, height: size, color: BG_COLOR });

  const cx = size / 2;
  const padding = size * 0.12;
  const flameBottom = size - padding - size * 0.12; // Leave room for text
  const flameTop = padding;
  const flameHeight = flameBottom - flameTop;
  const flameWidth = flameHeight * 0.45;

  // Draw flame shape
  for (let y = Math.floor(flameTop); y < Math.floor(flameBottom); y++) {
    const normalizedY = (y - flameTop) / flameHeight; // 0 at top, 1 at bottom

    // Flame shape: narrow at top, wider in middle, slightly narrow at bottom
    // Using a custom curve
    let widthFactor;
    if (normalizedY < 0.3) {
      // Top part - starts narrow, expands
      widthFactor = normalizedY * 2.5;
    } else if (normalizedY < 0.7) {
      // Middle - widest
      widthFactor = 0.75 + Math.sin((normalizedY - 0.3) * Math.PI / 0.4) * 0.25;
    } else {
      // Bottom - slightly narrower
      widthFactor = 1 - (normalizedY - 0.7) * 0.5;
    }

    const widthAtY = flameWidth * widthFactor;
    const leftEdge = Math.floor(cx - widthAtY);
    const rightEdge = Math.ceil(cx + widthAtY);

    for (let x = leftEdge; x < rightEdge; x++) {
      if (x >= 0 && x < size) {
        // Color based on position - lighter at top center
        const distFromCenter = Math.abs(x - cx) / widthAtY;
        const brightness = (1 - normalizedY) * (1 - distFromCenter * 0.5);

        let color;
        if (brightness > 0.7) {
          color = CREAM;
        } else if (brightness > 0.4) {
          color = LIGHT_AMBER;
        } else {
          color = AMBER_COLOR;
        }

        image.setPixelColor(color, x, y);
      }
    }
  }

  // Round corners
  const cornerRadius = size * 0.21;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      // Check each corner
      let inCorner = false;
      let cornerCenterX, cornerCenterY;

      if (x < cornerRadius && y < cornerRadius) {
        cornerCenterX = cornerRadius;
        cornerCenterY = cornerRadius;
        inCorner = true;
      } else if (x >= size - cornerRadius && y < cornerRadius) {
        cornerCenterX = size - cornerRadius;
        cornerCenterY = cornerRadius;
        inCorner = true;
      } else if (x < cornerRadius && y >= size - cornerRadius) {
        cornerCenterX = cornerRadius;
        cornerCenterY = size - cornerRadius;
        inCorner = true;
      } else if (x >= size - cornerRadius && y >= size - cornerRadius) {
        cornerCenterX = size - cornerRadius;
        cornerCenterY = size - cornerRadius;
        inCorner = true;
      }

      if (inCorner) {
        const dist = Math.sqrt(
          Math.pow(x - cornerCenterX, 2) + Math.pow(y - cornerCenterY, 2)
        );
        if (dist > cornerRadius) {
          image.setPixelColor(0x00000000, x, y); // Transparent
        }
      }
    }
  }

  const outputPath = path.join(iconsDir, `icon-${size}x${size}.png`);
  await image.write(outputPath);
  console.log(`Created: icon-${size}x${size}.png`);
}

async function generateAllIcons() {
  console.log('Generating PWA icons with flame design...\n');

  for (const size of sizes) {
    await createIcon(size);
  }

  // Also create apple-touch-icon
  const icon180 = await Jimp.read(path.join(iconsDir, 'icon-180x180.png'));
  await icon180.write(path.join(iconsDir, 'apple-touch-icon.png'));
  console.log('Created: apple-touch-icon.png');

  console.log('\n✅ All icons generated successfully!');
}

generateAllIcons().catch(console.error);
