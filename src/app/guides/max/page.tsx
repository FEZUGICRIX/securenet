import fs from 'fs';
import path from 'path';
import { GuideContent } from '@/src/components/guides/GuideContent';

export default function MaxGuidePage() {
  const filePath = path.join(process.cwd(), 'guides', 'max.md');
  const content = fs.readFileSync(filePath, 'utf-8');

  return (
    <div className="animate-fade-in py-4">
      <GuideContent content={content} />
    </div>
  );
}
