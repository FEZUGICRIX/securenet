import fs from 'fs';
import path from 'path';
import { GuideContent } from '@/src/components/guides/GuideContent';

export default function TelegramGuidePage() {
  const filePath = path.join(process.cwd(), 'guides', 'telegram.md');
  const content = fs.readFileSync(filePath, 'utf-8');

  return (
    <div className="animate-fade-in py-4">
      <GuideContent content={content} />
    </div>
  );
}
