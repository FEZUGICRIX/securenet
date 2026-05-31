import fs from 'fs';
import path from 'path';
import { GuideContent } from '@/src/components/guides/GuideContent';

export default function VkGuidePage() {
  const filePath = path.join(process.cwd(), 'guides', 'vk.md');
  const content = fs.readFileSync(filePath, 'utf-8');

  return (
    <div className="animate-fade-in py-4">
      <GuideContent content={content} />
    </div>
  );
}
