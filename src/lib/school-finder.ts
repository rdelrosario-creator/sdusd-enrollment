import { schools } from '@/data/schools';
import { School } from '@/types/school';

interface SchoolAssignment {
  elementary: School | null;
  middle: School | null;
  high: School | null;
}

const zipToSchools: Record<string, { elementary: string; middle: string; high: string }> = {
  '92109': { elementary: 'pacific-beach-elem', middle: 'roosevelt-ib', high: 'mission-bay-ib' },
  '92117': { elementary: 'pacific-beach-elem', middle: 'montgomery-steam', high: 'clairemont-high' },
  '92103': { elementary: 'normal-heights-elem', middle: 'roosevelt-ib', high: 'sd-business-leadership' },
  '92104': { elementary: 'normal-heights-elem', middle: 'cpma-creative-arts', high: 'sd-business-leadership' },
  '92116': { elementary: 'normal-heights-elem', middle: 'roosevelt-ib', high: 'sd-business-leadership' },
  '92114': { elementary: 'encanto-elem', middle: 'millennial-tech', high: 'lincoln-high' },
  '92115': { elementary: 'spreckels-bilingual', middle: 'cpma-creative-arts', high: 'serra-high' },
  '92113': { elementary: 'webster-science', middle: 'cpma-creative-arts', high: 'lincoln-high' },
  '92139': { elementary: 'zamorano-arts', middle: 'millennial-tech', high: 'lincoln-high' },
  '92110': { elementary: 'longfellow-spanish', middle: 'montgomery-steam', high: 'point-loma-high' },
  '92106': { elementary: 'longfellow-spanish', middle: 'montgomery-steam', high: 'point-loma-high' },
  '92107': { elementary: 'longfellow-spanish', middle: 'montgomery-steam', high: 'point-loma-high' },
  '92111': { elementary: 'johnson-stem', middle: 'montgomery-steam', high: 'kearny-digital-media' },
  '92123': { elementary: 'johnson-stem', middle: 'montgomery-steam', high: 'serra-high' },
  '92124': { elementary: 'johnson-stem', middle: 'montgomery-steam', high: 'serra-high' },
  '92101': { elementary: 'webster-science', middle: 'roosevelt-ib', high: 'sd-business-leadership' },
  '92102': { elementary: 'webster-science', middle: 'cpma-creative-arts', high: 'sd-business-leadership' },
  '92126': { elementary: 'wangenheim-k8', middle: 'montgomery-steam', high: 'serra-high' },
  '92154': { elementary: 'zamorano-arts', middle: 'millennial-tech', high: 'lincoln-high' },
};

function findSchoolById(id: string): School | null {
  return schools.find((s) => s.id === id) || null;
}

export function findSchoolsByAddress(address: string): SchoolAssignment | null {
  const zipMatch = address.match(/\b9\d{4}\b/);
  if (!zipMatch) return null;

  const zip = zipMatch[0];
  const mapping = zipToSchools[zip];
  if (!mapping) return null;

  return {
    elementary: findSchoolById(mapping.elementary),
    middle: findSchoolById(mapping.middle),
    high: findSchoolById(mapping.high),
  };
}

export function extractZipFromAddress(address: string): string | null {
  const match = address.match(/\b9\d{4}\b/);
  return match ? match[0] : null;
}
