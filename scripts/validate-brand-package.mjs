import fs from 'node:fs';
import path from 'node:path';

const REQUIRED_FIELDS = {
  schema_version: 'string',
  brand: 'string',
  slug: 'string',
  type: 'string',
  status: 'string',
  canonical: 'boolean',
  domain: 'string',
  context_version: 'string',
  last_reviewed: 'string',
};

const BASE_REQUIRED_FILES = [
  'README.md',
  'identity.md',
  'philosophy.md',
  'experience.md',
  'voice-and-copy.md',
  'visual-system.md',
  'website.md',
  'decisions.md',
];

export function validateBrandPackage(repoRoot) {
  const errors = [];
  const brandDir = path.join(repoRoot, 'brand');
  const manifestPath = path.join(brandDir, 'brand.json');
  let manifest;

  if (!fs.existsSync(manifestPath)) {
    return { valid: false, errors: ['Missing required file: brand/brand.json'] };
  }

  try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  } catch (error) {
    return { valid: false, errors: [`Invalid JSON in brand/brand.json: ${error.message}`] };
  }

  for (const [field, expectedType] of Object.entries(REQUIRED_FIELDS)) {
    if (!(field in manifest)) {
      errors.push(`Missing required manifest field: ${field}`);
      continue;
    }
    if (typeof manifest[field] !== expectedType) {
      errors.push(`Invalid type for manifest field ${field}: expected ${expectedType}`);
    }
  }

  const unknownFields = Object.keys(manifest).filter((key) => !(key in REQUIRED_FIELDS));
  for (const field of unknownFields.sort()) {
    errors.push(`Unknown manifest field: ${field}`);
  }

  if (manifest.canonical !== true) {
    errors.push('Manifest field canonical must be true');
  }

  if (typeof manifest.context_version === 'string' && !/^\d+\.\d+\.\d+$/.test(manifest.context_version)) {
    errors.push('Manifest field context_version must be semantic version x.y.z');
  }

  if (typeof manifest.last_reviewed === 'string' && !/^\d{4}-\d{2}-\d{2}$/.test(manifest.last_reviewed)) {
    errors.push('Manifest field last_reviewed must use YYYY-MM-DD');
  }

  const requiredFiles = [...BASE_REQUIRED_FILES];
  if (manifest.type === 'holding') requiredFiles.push('portfolio.md');

  for (const file of requiredFiles) {
    if (!fs.existsSync(path.join(brandDir, file))) {
      errors.push(`Missing required file: brand/${file}`);
    }
  }

  return { valid: errors.length === 0, errors, manifest };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const repoRoot = process.argv[2] ?? process.cwd();
  const result = validateBrandPackage(repoRoot);
  console.log(JSON.stringify(result, null, 2));
  process.exitCode = result.valid ? 0 : 1;
}
