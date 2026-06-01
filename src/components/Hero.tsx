import { ShieldAlert, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";

interface HeroProps {
  onStartAudit: () => void;
  onExploreSocial: () => void;
}

export default function Hero({ onStartAudit, onExploreSocial }: HeroProps) {
  return (
    <section className="relative py-16 lg:py-24">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl lg:h-96 lg:w-96" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Text Column */}
          <div className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <ShieldAlert className="h-4 w-4" />
              <span>Мини-гид по цифровой безопасности</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Защити свои аккаунты в соцсетях
            </h1>

            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed sm:text-xl">
              Получите практические рекомендации и пошаговые инструкции по
              настройке приватности и усилению защиты для Telegram, ВКонтакте и
              MAX. Чек-листы и интерактивные аудиты знаний прямо сейчас.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                onClick={onStartAudit}
                className="font-semibold cursor-pointer group shadow-lg shadow-primary/20 transition-all hover:shadow-primary/30"
                id="hero-start-btn"
              >
                <span>Начать проверку</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onExploreSocial}
                className="font-semibold cursor-pointer"
                id="hero-details-btn"
              >
                <ShieldCheck className="mr-2 h-4.5 w-4.5 text-primary" />
                <span>Подробнее</span>
              </Button>
            </div>
          </div>

          {/* Right Illustration Column */}
          <div className="flex justify-center lg:col-span-5">
            <div className="relative w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden shadow-3xl bg-card border border-border flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-linear-to-tr from-primary/10 via-transparent to-indigo-500/10" />
              <img
                src="/guard.png"
                alt="SecureNet Guard Protection Illustration"
                referrerPolicy="no-referrer"
                className="w-full rounded-4xl h-full  transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  // Fallback if image fails to load
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              {/* Modern SVG Backup element overlay if image error occurred */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-background/40 pointer-events-none">
                <ShieldCheck className="h-20 w-20 text-primary animate-pulse" />
                <span className="text-xs font-mono text-muted-foreground mt-2">
                  SECURE_SHELL_ACTIVE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
