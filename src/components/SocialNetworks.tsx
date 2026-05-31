import Link from "next/link";
import { Smartphone, Check, Shield, Lock, Eye, Key } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface Network {
  id: string;
  name: string;
  gradient: string;
  badge: string;
  desc: string;
  tips: { label: string; text: string }[];
  icon: React.ReactNode;
  link?: string;
}

export default function SocialNetworks() {
  const networks: Network[] = [
    {
      id: "max",
      name: "MAX",
      gradient: "from-orange-500 to-purple-600",
      badge: "Особый фокус",
      desc: "Обеспечение безопасности в отечественной экосистеме MAX. Ключевые аспекты правильной настройки и контроля доступа.",
      tips: [
        { label: "Официальное приложение", text: "Устанавливайте приложение только из проверенных источников, чтобы избежать подделок." },
        { label: "RuStore и магазины", text: "Рекомендуется загружать обновления через RuStore или официальный сайт платформы." },
        { label: "Проверка устройств", text: "Регулярно проверяйте список привязанных гаджетов в настройках аккаунта." }
      ],
      icon: <Smartphone className="h-6 w-6 text-orange-500" />,
      link: "/guides/max"
    },
    {
      id: "vk",
      name: "ВКонтакте",
      gradient: "from-blue-600 to-indigo-500",
      badge: "Социальные сети",
      desc: "Настройка конфиденциальности профиля и ограничение нежелательных взаимодействий в самой популярной соцсети РФ.",
      tips: [
        { label: "Приватность профиля", text: "Сделайте страницу закрытой для посторонних и скройте списки друзей и групп." },
        { label: "Двухфакторка (2FA)", text: "Активируйте подтверждение входа по SMS или через мобильное приложение-генератор кодов." },
        { label: "Сеансы и приложения", text: "Прекратите неактивные сеансы во вкладке «Активность» и удалите старые игры/сервисы." }
      ],
      icon: <Lock className="h-6 w-6 text-blue-500" />,
      link: "/guides/vk"
    },
    {
      id: "telegram",
      name: "Telegram",
      gradient: "from-sky-400 to-blue-500",
      badge: "Мессенджеры",
      desc: "Защита личной переписки, медиафайлов и защита от несанкционированного перевыпуска SIM-карты.",
      tips: [
        { label: "Скрытие номера", text: "Установите видимость номера телефона в значение «Никто», чтобы защититься от парсинга." },
        { label: "Облачный пароль", text: "Дополнительный пароль при входе с нового устройства предохранит от перехвата SMS-кода." },
        { label: "Секретные чаты", text: "Для приватной беседы используйте чаты с оконечным (end-to-end) шифрованием." }
      ],
      icon: <Eye className="h-6 w-6 text-sky-400" />,
      link: "/guides/telegram"
    }
  ];

  const renderCard = (net: Network) => (
    <Card className="overflow-hidden border border-border bg-card shadow-sm hover:scale-[1.02] hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer">
      <div className={`h-3 bg-gradient-to-r ${net.gradient}`} />

      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between pb-2">
          <div className="p-2 rounded-xl bg-background border border-border/50 shadow-inner">
            {net.icon}
          </div>
          <Badge variant="secondary" className="font-semibold text-xs py-0.5">
            {net.badge}
          </Badge>
        </div>
        <CardTitle className="text-2xl font-bold text-foreground pt-1">{net.name}</CardTitle>
        <p className="text-sm text-muted-foreground pt-1.5 leading-relaxed">{net.desc}</p>
      </CardHeader>

      <CardContent className="space-y-4 mt-auto">
        <div className="space-y-3.5">
          {net.tips.map((tip, idx) => (
            <div key={idx} className="flex gap-3 leading-relaxed">
              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-3 w-3 stroke-[3px]" />
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground block">{tip.label}</span>
                <span className="text-muted-foreground block text-xs mt-0.5">{tip.text}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="social-networks" className="py-16 bg-muted/50 rounded-3xl border border-border/80 my-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Безопасность в соцсетях
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Узнайте ключевые параметры защиты вашего аккаунта на ведущих коммуникационных платформах. Нажмите на пункты для подробной памятки.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {networks.map((net) => (
            net.link ? (
              <Link key={net.id} href={net.link}>
                {renderCard(net)}
              </Link>
            ) : (
              <div key={net.id}>
                {renderCard(net)}
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
