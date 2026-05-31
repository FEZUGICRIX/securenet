'use client';

import { useRouter } from 'next/navigation';
import { Shield, Mail, Phone, MapPin, Globe, BookOpen } from 'lucide-react';

export default function Footer() {
  const router = useRouter();

  return (
    <footer id="app-footer" className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12 md:py-16 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => router.push('/')}>
              <div className="p-1.5 rounded-lg bg-primary/10 text-primary"><Shield className="h-5 w-5" /></div>
              <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">SecureNet</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Образовательный сайт для аудита безопасности аккаунтов в соцсетях. Помогаем распознать угрозы и защитить личные данные.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Компания</h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => router.push('/')} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer text-left">О проекте</button></li>
              <li><button onClick={() => router.push('/conclusion')} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer text-left">Безопасность</button></li>
              <li><button onClick={() => router.push('/checklist')} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer text-left">Чек-лист защиты</button></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Ресурсы</h4>
            <ul className="space-y-2.5">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground"><BookOpen className="h-4 w-4 shrink-0 text-primary" /><span>База знаний</span></li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground"><Globe className="h-4 w-4 shrink-0 text-primary" /><span>Блог по кибербезу</span></li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground"><Shield className="h-4 w-4 shrink-0 text-primary" /><span>Памятки по соцсетям</span></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-muted-foreground"><Mail className="h-5 w-5 shrink-0 text-primary" /><a href="mailto:info@securenet.ru" className="hover:text-primary transition-colors">info@securenet.ru</a></li>
              <li className="flex items-start space-x-3 text-sm text-muted-foreground"><Phone className="h-5 w-5 shrink-0 text-primary" /><a href="tel:+79991234567" className="hover:text-primary transition-colors">+7 (999) 123-45-67</a></li>
              <li className="flex items-start space-x-3 text-sm text-muted-foreground"><MapPin className="h-5 w-5 shrink-0 text-primary" /><span>Москва</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">(c) 2025 SecureNet. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
