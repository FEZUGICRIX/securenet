'use client';

import { useState, useEffect } from "react";
import { CheckCircle2, ShieldAlert, Award, AlertCircle, RefreshCw, Smartphone, Key, Share2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";

interface TaskItem {
  id: number;
  text: string;
  checked: boolean;
}

const DEFAULT_TASKS: TaskItem[] = [
  { id: 1, text: "Используй разные и сложные пароли (буквы, цифры, спецсимволы)", checked: false },
  { id: 2, text: "Подключи двухфакторную аутентификацию для всех аккаунтов", checked: false },
  { id: 3, text: "Регулярно обновляй приложения (ВКонтакте, Telegram, MAX)", checked: false },
  { id: 4, text: "Проверь активные устройства и завершите незнакомые сеансы", checked: false },
  { id: 5, text: "Избегай подозрительных сайтов и ссылок", checked: false },
  { id: 6, text: "Используй антивирусные программы на своих устройствах", checked: false },
  { id: 7, text: "Не подключайся к неизвестным Wi-Fi сетям", checked: false }
];

export default function Checklist() {
  const [tasks, setTasks] = useState<TaskItem[]>(DEFAULT_TASKS);

  useEffect(() => {
    const saved = localStorage.getItem("securenet-tasks");
    if (saved) {
      try { setTasks(JSON.parse(saved)); } catch (e) {
        console.error(e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("securenet-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const handleReset = () => {
    setTasks(DEFAULT_TASKS);
  };

  const completedCount = tasks.filter(t => t.checked).length;
  const progressPercent = Math.round((completedCount / tasks.length) * 100);

  return (
    <section id="checklist-section" className="py-8 max-w-4xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Чек-лист личной кибербезопасности
        </h2>
        <p className="mt-3 text-muted-foreground text-sm sm:text-base">
          Пошаговый чеклист для полного аудита защиты. Проверьте каждый пункт в своих аккаунтах для максимальной защиты.
        </p>
      </div>

      <Card className="border border-border shadow-xl bg-card overflow-hidden rounded-2xl">
        {/* Progress Header */}
        <div className="bg-muted px-6 py-6 border-b border-border">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h3 className="font-bold text-lg text-foreground flex items-center space-x-2">
                <span>Прогресс защищенности:</span>
                <span className="text-primary font-mono text-xl">{progressPercent}%</span>
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Выполнено: {completedCount} из {tasks.length} рекомендаций
              </p>
            </div>
            {completedCount > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                className="text-xs h-8 text-rose-500 hover:text-rose-600 border-rose-500/10 hover:bg-rose-500/5"
              >
                <RefreshCw className="mr-1.5 h-3.5 w-3.5" />
                <span>Сбросить прогресс</span>
              </Button>
            )}
          </div>
          <Progress value={progressPercent} className="h-2.5 bg-background border border-border/40" />
        </div>

        {/* Task List Content */}
        <CardContent className="p-6">
          <div className="divide-y divide-border/60">
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className={`group flex items-start space-x-4 py-4.5 px-3 rounded-xl transition-all hover:bg-muted/35 cursor-pointer select-none`}
              >
                <Checkbox
                  checked={task.checked}
                  onCheckedChange={() => toggleTask(task.id)}
                  id={`task-check-${task.id}`}
                  className="mt-0.5"
                />
                
                <span
                  className={`text-sm sm:text-base font-medium leading-relaxed transition-all cursor-pointer ${
                    task.checked
                      ? "text-muted-foreground line-through opacity-60"
                      : "text-foreground group-hover:text-primary"
                  }`}
                >
                  {task.text}
                </span>
              </div>
            ))}
          </div>
        </CardContent>

        {/* Motivating footer card status */}
        {progressPercent === 100 ? (
          <div className="bg-emerald-500/10 border-t border-emerald-500/20 p-6 flex items-center space-x-4">
            <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-emerald-800 dark:text-emerald-400 text-sm sm:text-base">
                Прекрасная работа! Ваши аккаунты под надежной защитой!
              </h4>
              <p className="text-xs text-emerald-700/80 dark:text-emerald-300/80 mt-1">
                Все 7 ключевых параметров безопасности проверены и настроены. Поделитесь этими советами со своими близкими.
              </p>
            </div>
          </div>
        ) : progressPercent >= 50 ? (
          <div className="bg-amber-500/10 border-t border-amber-500/20 p-6 flex items-center space-x-4">
            <div className="h-12 w-12 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Key className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-amber-800 dark:text-amber-400 text-sm sm:text-base">
                Хороший прогресс, но остались слабые места.
              </h4>
              <p className="text-xs text-amber-700/80 dark:text-amber-300/80 mt-1">
                Подключите оставшиеся параметры защиты для обеспечения абсолютной приватности ваших переписок и файлов.
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-primary/5 border-t border-primary/10 p-6 flex items-center space-x-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 animate-bounce">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-foreground text-sm sm:text-base">
                Начните аудит цифровой гигиены!
              </h4>
              <p className="text-xs text-muted-foreground mt-1">
                Отметьте те защитные меры, которые уже реализованы на ваших устройствах и в ваших социальных медиа.
              </p>
            </div>
          </div>
        )}
      </Card>
    </section>
  );
}
