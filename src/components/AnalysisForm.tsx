'use client';

import React, { useState } from "react";
import { ShieldAlert, Send, CheckCircle2, AlertTriangle, AlertCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export default function AnalysisForm() {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [extraActions, setExtraActions] = useState<string>("");
  const [feedback, setFeedback] = useState<{
    status: "success" | "warning" | "danger";
    text: string;
    details: string;
  } | null>(null);

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Log response to console as requested
    console.log("SecureNet Audit Submission:", {
      answer: selectedOption,
      otherActions: extraActions,
      timestamp: new Date().toISOString()
    });

    if (!selectedOption) {
      setFeedback({
        status: "warning",
        text: "Пожалуйста, выберите один из вариантов ответа.",
        details: "Оценка невозможна без выбора базового сценария действий."
      });
      return;
    }

    if (selectedOption === "option-1") {
      setFeedback({
        status: "danger",
        text: "Крайне опасное действие! Вы можете потерять аккаунт.",
        details: "Официальная поддержка никогда не запрашивает пароли или коды подтверждения. Переход по ссылкам из таких сообщений гарантирует компрометацию данных."
      });
    } else if (selectedOption === "option-2") {
      setFeedback({
        status: "warning",
        text: "Разумный шаг, но будьте предельно бдительны.",
        details: "Проверить канал связи — хорошая практика. Однако помните, что даже если письмо оформлено идеально, официальные представители соцсетей или банков никогда не попросят ваш пароль."
      });
    } else if (selectedOption === "option-3") {
      setFeedback({
        status: "success",
        text: "Идеально! Это самый надежный способ защиты.",
        details: "Игнорирование и немедленное удаление фишинговых писем спасает миллионы пользователей. Также рекомендуется заблокировать отправителя и направить жалобу в техподдержку."
      });
    }
  };

  return (
    <section id="basics" className="py-16 my-8 container mx-auto">
      <Card className="max-w-4.5xl mx-auto overflow-hidden border border-border shadow-xl rounded-2xl bg-card">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Text / Info Panel */}
          <div className="lg:col-span-5 bg-gradient-to-br from-primary via-indigo-900 to-indigo-950 p-8 text-primary-foreground flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-md">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-200">Экспресс-тест знаний</span>
                <h3 className="text-2xl font-bold font-sans">Служба Поддержки?</h3>
              </div>
              <p className="text-indigo-100 text-sm leading-relaxed">
                Вам пришло сообщение от «службы поддержки» с просьбой подтвердить пароль. Ваши действия?
              </p>
            </div>
            
            <div className="pt-8 border-t border-white/10 text-xs text-indigo-200 leading-relaxed">
              * Фишинг остается самой частой угрозой взлома личных профилей в Telegram и ВКонтакте. Будьте осторожны с любыми входящими письмами о безопасности.
            </div>
          </div>

          {/* Right Interactive Form Area */}
          <div className="lg:col-span-7 p-8 flex flex-col justify-center">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-xl font-bold text-foreground">Проверь свои знания</CardTitle>
            </CardHeader>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Radio options container */}
              <div className="space-y-3">
                <Label className="text-sm text-muted-foreground block mb-2">Выберите наиболее подходящее решение:</Label>
                <RadioGroup
                  value={selectedOption}
                  onValueChange={handleOptionChange}
                  className="space-y-3"
                >
                  <div className="flex items-start space-x-3 p-3.5 rounded-lg border border-border bg-background hover:bg-muted/30 transition-all cursor-pointer">
                    <RadioGroupItem value="option-1" id="q-opt-1" />
                    <Label htmlFor="q-opt-1" className="text-xs sm:text-sm font-normal text-foreground leading-normal cursor-pointer w-full">
                      Сообщить код по ссылке из сообщения
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3 p-3.5 rounded-lg border border-border bg-background hover:bg-muted/30 transition-all cursor-pointer">
                    <RadioGroupItem value="option-2" id="q-opt-2" />
                    <Label htmlFor="q-opt-2" className="text-xs sm:text-sm font-normal text-foreground leading-normal cursor-pointer w-full">
                      Проверить, отправлено ли письмо через официальный канал
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3 p-3.5 rounded-lg border border-border bg-background hover:bg-muted/30 transition-all cursor-pointer">
                    <RadioGroupItem value="option-3" id="q-opt-3" />
                    <Label htmlFor="q-opt-3" className="text-xs sm:text-sm font-normal text-foreground leading-normal cursor-pointer w-full">
                      Проигнорировать, это явный фишинг
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Text Input extra field */}
              <div className="space-y-2">
                <Label htmlFor="extra-actions" className="text-sm text-foreground">Прочие действия</Label>
                <Input
                  id="extra-actions"
                  placeholder="Например: заблокирую отправителя, сообщу друзьям..."
                  value={extraActions}
                  onChange={(e) => setExtraActions(e.target.value)}
                  className="bg-background border-border"
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full font-semibold cursor-pointer">
                <span>Отправить ответ</span>
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>

            {/* Display Feedback Message */}
            {feedback && (
              <div
                className={`mt-6 p-4 rounded-xl border flex items-start space-x-3 animate-fade-in ${
                  feedback.status === "success"
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                    : feedback.status === "danger"
                    ? "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400"
                    : "bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400"
                }`}
                id="form-feedback-panel"
              >
                {feedback.status === "success" ? (
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                ) : feedback.status === "danger" ? (
                  <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
                )}
                <div>
                  <h4 className="font-semibold text-sm leading-tight">{feedback.text}</h4>
                  <p className="text-xs mt-1.5 opacity-90 leading-relaxed">{feedback.details}</p>
                </div>
              </div>
            )}

          </div>

        </div>
      </Card>
    </section>
  );
}
