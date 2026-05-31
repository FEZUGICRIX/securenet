'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Shield, Sun, Moon, Menu } from 'lucide-react';
import { useTheme } from '../providers';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Главная', path: '/' },
    { label: 'Безопасность', path: '/conclusion' },
    { label: 'Чек-лист', path: '/checklist' },
  ];

  const handleNavClick = (path: string) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header id="app-header" className="sticky top-0 z-40 w-full border-b border-border bg-background/60 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <div onClick={() => handleNavClick('/')} className="flex items-center space-x-2 cursor-pointer group">
          <div className="p-1.5 rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
            <Shield className="h-6 w-6" id="logo-icon" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
            SecureNet
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <button key={item.path} onClick={() => handleNavClick(item.path)}
                className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer relative py-1 ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                {item.label}
                {isActive && <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary rounded-full" />}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full cursor-pointer hover:bg-accent hover:text-accent-foreground" id="theme-toggler" title="Переключить тему">
            {theme === 'dark' ? <Sun className="h-5 w-5 text-yellow-400 transition-transform hover:rotate-45" /> : <Moon className="h-5 w-5 text-indigo-600 transition-transform hover:-rotate-12" />}
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden rounded-full cursor-pointer" onClick={() => setIsMobileMenuOpen(true)} id="mobile-menu-trigger">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <Sheet isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
        <SheetContent>
          <SheetHeader className="pb-4 border-b border-border">
            <SheetTitle className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span>SecureNet</span>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col space-y-4 pt-6">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <button key={item.path} onClick={() => handleNavClick(item.path)}
                  className={`text-left text-base font-medium py-2 px-3 rounded-lg transition-colors cursor-pointer ${isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}`}>
                  {item.label}
                </button>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
