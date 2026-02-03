const { Jimp } = require('jimp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 72, 96, 128, 144, 152, 167, 180, 192, 384, 512];
const iconsDir = path.join(__dirname, '..', 'public', 'icons');

// Colors (RGBA as hex)
const BG_COLOR = 0x0A0A0BFF;       // Dark background
const AMBER_COLOR = 0xF59E0BFF;    // Amber/gold
const LIGHT_AMBER = 0xFCD34DFF;    // Light amber
const CREAM = 0xFDE68AFF;          // Cream/pale yellow
const DARK_AMBER = 0xB45309FF;     // Dark amber for depth

// Ensure icons directory exists
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Helper to draw a filled circle
function drawCircle(image, cx, cy, radius, color, filled = true) {
  const size = image.width;
  for (let y = Math.max(0, Math.floor(cy - radius)); y < Math.min(size, Math.ceil(cy + radius)); y++) {
    for (let x = Math.max(0, Math.floor(cx - radius)); x < Math.min(size, Math.ceil(cx + radius)); x++) {
      const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
      if (filled ? dist <= radius : Math.abs(dist - radius) < 1.5) {
        image.setPixelColor(color, x, y);
      }
    }
  }
}

// Helper to draw an ellipse ring (unfilled)
function drawEllipseRing(image, cx, cy, rx, ry, angle, color, strokeWidth = 1) {
  const size = image.width;
  const cosA = Math.cos(angle * Math.PI / 180);
  const sinA = Math.sin(angle * Math.PI / 180);

  // Draw by sampling many points along the ellipse
  for (let t = 0; t < 360; t += 0.5) {
    const rad = t * Math.PI / 180;
    // Point on unrotated ellipse
    const ex = rx * Math.cos(rad);
    const ey = ry * Math.sin(rad);
    // Rotate
    const px = cx + ex * cosA - ey * sinA;
    const py = cy + ex * sinA + ey * cosA;

    // Draw with stroke width
    for (let dx = -strokeWidth; dx <= strokeWidth; dx++) {
      for (let dy = -strokeWidth; dy <= strokeWidth; dy++) {
        if (dx * dx + dy * dy <= strokeWidth * strokeWidth) {
          const ix = Math.round(px + dx);
          const iy = Math.round(py + dy);
          if (ix >= 0 && ix < size && iy >= 0 && iy < size) {
            image.setPixelColor(color, ix, iy);
          }
        }
      }
    }
  }
}

// Get electron position on ellipse at given angle
function getElectronPosition(cx, cy, rx, ry, rotationAngle, electronAngle) {
  const cosR = Math.cos(rotationAngle * Math.PI / 180);
  const sinR = Math.sin(rotationAngle * Math.PI / 180);
  const rad = electronAngle * Math.PI / 180;

  const ex = rx * Math.cos(rad);
  const ey = ry * Math.sin(rad);

  return {
    x: cx + ex * cosR - ey * sinR,
    y: cy + ex * sinR + ey * cosR
  };
}

async function createIcon(size) {
  const image = new Jimp({ width: size, height: size, color: BG_COLOR });

  const cx = size / 2;
  const cy = size / 2;

  // Scale all dimensions based on size
  const scale = size / 512;

  // Orbital dimensions
  const orbitRx = 180 * scale;
  const orbitRy = 60 * scale;
  const strokeWidth = Math.max(1, Math.round(3 * scale));

  // Core dimensions
  const coreOuterRadius = 50 * scale;
  const coreInnerRadius = 16 * scale;

  // Electron radius
  const electronRadius = Math.max(2, Math.round(10 * scale));
  const smallElectronRadius = Math.max(1.5, Math.round(8 * scale));

  // Draw orbital rings (3 rings at different angles)
  const orbitAngles = [-20, 40, 100];
  const orbitColors = [AMBER_COLOR, LIGHT_AMBER, AMBER_COLOR];

  for (let i = 0; i < orbitAngles.length; i++) {
    drawEllipseRing(image, cx, cy, orbitRx, orbitRy, orbitAngles[i], orbitColors[i], strokeWidth);
  }

  // Draw core - outer ring
  drawCircle(image, cx, cy, coreOuterRadius, BG_COLOR, true);

  // Draw core border
  for (let r = coreOuterRadius - strokeWidth; r <= coreOuterRadius; r += 0.5) {
    const points = Math.ceil(2 * Math.PI * r);
    for (let i = 0; i < points; i++) {
      const angle = (i / points) * 2 * Math.PI;
      const px = Math.round(cx + r * Math.cos(angle));
      const py = Math.round(cy + r * Math.sin(angle));
      if (px >= 0 && px < size && py >= 0 && py < size) {
        image.setPixelColor(AMBER_COLOR, px, py);
      }
    }
  }

  // Draw inner glow
  drawCircle(image, cx, cy, coreOuterRadius * 0.6, AMBER_COLOR, true);

  // Draw bright center
  drawCircle(image, cx, cy, coreInnerRadius, CREAM, true);

  // Draw electrons on each orbit
  // Orbit 1 (-20 deg): electrons at 0 and 180 degrees
  let pos = getElectronPosition(cx, cy, orbitRx, orbitRy, -20, 45);
  drawCircle(image, pos.x, pos.y, electronRadius, LIGHT_AMBER, true);
  pos = getElectronPosition(cx, cy, orbitRx, orbitRy, -20, 225);
  drawCircle(image, pos.x, pos.y, smallElectronRadius, AMBER_COLOR, true);

  // Orbit 2 (40 deg): electrons at 90 and 270 degrees
  pos = getElectronPosition(cx, cy, orbitRx, orbitRy, 40, 135);
  drawCircle(image, pos.x, pos.y, electronRadius, AMBER_COLOR, true);
  pos = getElectronPosition(cx, cy, orbitRx, orbitRy, 40, 315);
  drawCircle(image, pos.x, pos.y, smallElectronRadius, LIGHT_AMBER, true);

  // Orbit 3 (100 deg): electrons at 30 and 210 degrees
  pos = getElectronPosition(cx, cy, orbitRx, orbitRy, 100, 75);
  drawCircle(image, pos.x, pos.y, electronRadius, LIGHT_AMBER, true);
  pos = getElectronPosition(cx, cy, orbitRx, orbitRy, 100, 255);
  drawCircle(image, pos.x, pos.y, smallElectronRadius, DARK_AMBER, true);

  // Round corners for PWA maskable icons
  const cornerRadius = size * 0.21;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
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
  console.log('Generating PWA icons with Knowledge Atom design...\n');

  for (const size of sizes) {
    await createIcon(size);
  }

  // Also create apple-touch-icon
  const icon180 = await Jimp.read(path.join(iconsDir, 'icon-180x180.png'));
  await icon180.write(path.join(iconsDir, 'apple-touch-icon.png'));
  console.log('Created: apple-touch-icon.png');

  console.log('\n✅ All icons generated successfully!');
  console.log('Icons now match the Knowledge Atom logo design.');
}

generateAllIcons().catch(console.error);
