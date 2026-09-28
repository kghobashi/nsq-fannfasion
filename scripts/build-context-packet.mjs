import fs from 'node:fs';
import path from 'node:path';
import { validateBrandPackage } from './validate-brand-package.mjs';

const SCOPE_FILES = {
  identity: ['identity.md'],
  philosophy: ['philosophy.md'],
  portfolio: ['portfolio.md'],
  experience: ['experience.md'],
  voice: ['voice-and-copy.md'],
  visual: ['visual-system.md'],
  website: ['identity.md', 'voice-and-copy.md', 'visual-system.md', 'experience.md', 'website.md'],
  decisions: ['decisions.md'],
};

function unique(values) { return [...new Set(values)]; }
function bullets(text) {
  return text.split(/\r?\n/).map((line) => line.trim()).filter((line) => /^[-*]\s+/.test(line)).map((line) => line.replace(/^[-*]\s+/, '').trim());
}
function markers(text) {
  return text.split(/\r?\n/).map((line) => line.trim()).filter((line) => /^(OPEN QUESTION:|CONFLICT:)/.test(line));
}
function readSection(brandDir, filename) {
  const fullPath = path.join(brandDir, filename);
  return fs.existsSync(fullPath) ? fs.readFileSync(fullPath, 'utf8') : '';
}

export function buildContextPacket(repoRoot, scope = ['identity']) {
  const validation = validateBrandPackage(repoRoot);
  if (!validation.valid) {
    const error = new Error(`Invalid brand package: ${validation.errors.join('; ')}`);
    error.errors = validation.errors;
    throw error;
  }

  const requested = Array.isArray(scope) ? scope : [scope];
  const filenames = unique(requested.flatMap((item) => SCOPE_FILES[item] ?? []));
  const brandDir = path.join(repoRoot, 'brand');
  const content = new Map(filenames.map((filename) => [filename, readSection(brandDir, filename)]));
  const from = (filename) => bullets(content.get(filename) ?? '');
  const openQuestions = unique([...content.values()].flatMap(markers));

  return {
    brand: validation.manifest.brand,
    context_version: validation.manifest.context_version,
    source: 'github',
    loaded_sections: filenames,
    locked: {
      identity: filenames.includes('identity.md') ? from('identity.md') : [],
      voice: filenames.includes('voice-and-copy.md') ? from('voice-and-copy.md') : [],
      visual: filenames.includes('visual-system.md') ? from('visual-system.md') : [],
    },
    principles: filenames.includes('philosophy.md') ? from('philosophy.md') : [],
    experience: filenames.includes('experience.md') ? from('experience.md') : [],
    website: filenames.includes('website.md') ? from('website.md') : [],
    constraints: filenames.includes('decisions.md') ? from('decisions.md') : [],
    open_questions: openQuestions,
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const repoRoot = process.argv[2] ?? process.cwd();
  const scope = process.argv.slice(3);
  const packet = buildContextPacket(repoRoot, scope.length ? scope : ['identity']);
  console.log(JSON.stringify(packet, null, 2));
}
