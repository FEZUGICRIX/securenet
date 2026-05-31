'use client';

import SecurityBasics from '@/src/components/SecurityBasics';
import Conclusion from '@/src/components/Conclusion';

export default function ConclusionPage() {
  return (
    <div className="space-y-4 animate-fade-in py-4">
      <SecurityBasics />
      <Conclusion />
    </div>
  );
}
