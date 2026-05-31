import { Lock, Smartphone, Eye, ShieldAlert, UserCheck, RefreshCw } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function Conclusion() {
  const cards = [
    {
      title: "Надёжные пароли",
      icon: <Lock className="h-5 w-5 text-indigo-500" />,
      text: "Создавайте исключительно уникальные, длинные и сложные комбинации символов для каждого сервиса по отдельности. Не используйте один пароль дважды."
    },
    {
      title: "Двухфакторная аутентификация",
      icon: <Smartphone className="h-5 w-5 text-emerald-500" />,
      text: "Обязательная настройка второго фактора защиты (2FA) для Telegram, VK и MAX делает взлом практически невозможным без обладания вашим физическим девайсом."
    },
    {
      title: "Контроль над устройствами",
      icon: <Eye className="h-5 w-5 text-blue-500" />,
      text: "Проводите регулярный разбор и принудительное завершение всех неактивных, устаревших или подозрительных сеансов подключений в параметрах аккаунта."
    },
    {
      title: "Защита от фишинга",
      icon: <ShieldAlert className="h-5 w-5 text-rose-500" />,
      text: "Будьте бдительны и учитесь определять замаскированные уловки: фейковые ссылки авторизации, поддельные формы входа и подозрительные e-mail адреса."
    },
    {
      title: "Безопасное поведение в сети",
      icon: <UserCheck className="h-5 w-5 text-purple-500" />,
      text: "Откажитесь от кликов по ярким сомнительным баннерам, не сообщайте коды аутентификации третьим лицам и не скачивайте взломанный софт."
    },
    {
      title: "Актуальная защита",
      icon: <RefreshCw className="h-5 w-5 text-amber-500" />,
      text: "Своевременно устанавливайте выходящие обновления приложений. Разработчики регулярно закрывают опасные уязвимости и баги."
    }
  ];

  return (
    <section id="conclusion-cards" className="py-12 bg-muted/30 rounded-3xl border border-border/60 p-8 sm:p-10 my-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Итоговые выводы по аудиту
        </h2>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          Внедрение этих 6 базовых правил минимизирует риски кражи личности, утечки конфиденциальной переписки и утери ценных файлов на ваших устройствах.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6.5">
        {cards.map((card, idx) => (
          <Card key={idx} className="bg-card border border-border/80 shadow-md hover:scale-[1.01] hover:shadow-xl hover:border-primary/35 transition-all duration-300">
            <CardHeader className="flex flex-row items-center space-x-3.5 pb-3">
              <div className="p-2 rounded-lg bg-secondary text-foreground">
                {card.icon}
              </div>
              <CardTitle className="text-base font-bold text-foreground leading-tight">
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {card.text}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
