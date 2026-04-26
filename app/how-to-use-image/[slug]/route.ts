import { promises as fs } from "node:fs";
import path from "node:path";

const EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp"]);

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function tokenize(value: string) {
  return value.toLowerCase().split(/[^a-z0-9]+/g).filter(Boolean);
}

function placeholderSvg(slug: string) {
  const safeSlug = slug.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1600" viewBox="0 0 900 1600">
  <rect width="100%" height="100%" fill="#F7F9FC"/>
  <rect x="60" y="80" width="780" height="1440" rx="24" fill="#FFFFFF" stroke="#D7DEE8" stroke-width="2"/>
  <text x="90" y="170" font-family="Arial, sans-serif" font-size="34" fill="#0E1622">Screenshot missing</text>
  <text x="90" y="220" font-family="Arial, sans-serif" font-size="24" fill="#2B3646">Place an image in:</text>
  <text x="90" y="260" font-family="Arial, sans-serif" font-size="22" fill="#2B3646">public/how-to-use/</text>
  <text x="90" y="330" font-family="Arial, sans-serif" font-size="22" fill="#5C6B7A">Expected slug: ${safeSlug}</text>
</svg>`;
}

async function resolveImagePath(slug: string) {
  const screenshotsDir = path.join(process.cwd(), "public", "how-to-use");
  const entries = await fs.readdir(screenshotsDir, { withFileTypes: true }).catch(() => []);
  const files = entries.filter((entry) => entry.isFile()).map((entry) => entry.name);

  if (!files.length) return null;

  const target = normalize(slug);
  const slugTokens = tokenize(slug);

  for (const filename of files) {
    const ext = path.extname(filename).toLowerCase();
    if (!EXTENSIONS.has(ext)) continue;
    const base = normalize(path.basename(filename, ext));
    if (base === target) {
      return path.join(screenshotsDir, filename);
    }
  }

  for (const filename of files) {
    const ext = path.extname(filename).toLowerCase();
    if (!EXTENSIONS.has(ext)) continue;
    const base = path.basename(filename, ext).toLowerCase();
    const baseNormalized = normalize(base);
    if (baseNormalized.includes(target)) {
      return path.join(screenshotsDir, filename);
    }
    const matchesAllTokens = slugTokens.every((token) => base.includes(token));
    if (matchesAllTokens) {
      return path.join(screenshotsDir, filename);
    }
  }

  return null;
}

function getContentType(filepath: string) {
  const ext = path.extname(filepath).toLowerCase();
  if (ext === ".png") return "image/png";
  if (ext === ".webp") return "image/webp";
  return "image/jpeg";
}

export const runtime = "nodejs";

export async function GET(_: Request, context: { params: { slug: string } }) {
  const { slug } = context.params;
  const imagePath = await resolveImagePath(slug);

  if (!imagePath) {
    return new Response(placeholderSvg(slug), {
      status: 200,
      headers: {
        "content-type": "image/svg+xml; charset=utf-8",
        "cache-control": "no-store"
      }
    });
  }

  const data = await fs.readFile(imagePath);
  return new Response(data, {
    status: 200,
    headers: {
      "content-type": getContentType(imagePath),
      "cache-control": "public, max-age=3600"
    }
  });
}
