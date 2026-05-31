import { Lock, Key, ShieldAlert } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function SecurityBasics() {
  const basics = [
    {
      title: "Пароли",
      icon: <Lock className="h-6 w-6 text-primary" />,
      desc: "Используйте уникальные и сложные комбинации для каждой платформы. Избегайте использования дат рождения, имен и простых комбинаций вроде 123456.",
      tips: ["Минимум 12 символов", "Разные регистры букв", "Разнообразные спецсимволы"]
    },
    {
      title: "Двухфакторная аутентификация (2FA)",
      icon: <Key className="h-6 w-6 text-indigo-500" />,
      desc: "Второй фактор защиты запрашивает код из SMS или специального приложения, сводя к минимуму риск взлома даже при краже пароля.",
      tips: ["Генератор кодов (OTP)", "Резервные коды доступа", "Двойной контур защиты"]
    },
    {
      title: "Защита от фишинга",
      icon: <ShieldAlert className="h-6 w-6 text-rose-500" />,
      desc: "Остерегайтесь сообщений с незнакомых адресов с просьбой подтвердить данные аккаунта или перейти по ссылке. Службы поддержки никогда не запрашивают пароль.",
      tips: ["Проверка адреса отправителя", "Никаких переходов по ссылкам", "Блокировка подозрительных лиц"]
    }
  ];

  return (
    <section id="security-basics" className="py-12">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Основы цифровой гигиены
        </h2>
        <p className="mt-3 text-muted-foreground text-sm">
          Три фундаментальных столпа безопасности, обеспечивающие защиту до 99% всех потенциальных кибератак.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {basics.map((item, idx) => (
          <Card key={idx} className="border border-border bg-card shadow-sm hover:scale-[1.02] hover:shadow-lg transition-all flex flex-col justify-between">
            <CardHeader className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                {item.icon}
              </div>
              <CardTitle className="text-xl font-bold text-foreground">
                {item.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
              
              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.tips.map((t, i) => (
                  <span key={i} className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
