'use client';

import Hero from '@/src/components/Hero';
import SocialNetworks from '@/src/components/SocialNetworks';
import AnalysisForm from '@/src/components/AnalysisForm';

export default function HomePage() {
  const handleStartAudit = () => {
    const el = document.getElementById('basics');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreSocial = () => {
    const el = document.getElementById('social-networks');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <Hero onStartAudit={handleStartAudit} onExploreSocial={handleExploreSocial} />
      <SocialNetworks />
      <AnalysisForm />
    </div>
  );
}
