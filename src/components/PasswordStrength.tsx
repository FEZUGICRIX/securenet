'use client';

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Eye,
  EyeOff,
  ShieldCheck,
  ShieldX,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  Lock,
  X,
  Zap,
} from "lucide-react";

interface StrengthResult {
  score: number;
  label: string;
  color: string;
  bgColor: string;
  borderColor: string;
  glowColor: string;
  Icon: React.ElementType;
  description: string;
  suggestions: string[];
}

function evaluateStrength(password: string): StrengthResult {
  let score = 0;

  if (!password) {
    return {
      score: 0,
      label: "Пусто",
      color: "#64748b",
      bgColor: "bg-muted",
      borderColor: "border-muted",
      glowColor: "rgba(100,116,139,0.3)",
      Icon: Lock,
      description: "Введите пароль для проверки",
      suggestions: [],
    };
  }

  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  if (password.length >= 16) score += 1;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[^a-zA-Z0-9]/.test(password)) score += 1;
  if (password.length >= 20) score += 1;

  const uniqueChars = new Set(password).size;
  if (uniqueChars >= 10) score += 1;

  if (score <= 1) {
    return {
      score: 10,
      label: "Очень слабый",
      color: "#ef4444",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      glowColor: "rgba(239,68,68,0.3)",
      Icon: ShieldX,
      description: "Такой пароль взламывают за секунды",
      suggestions: [
        "Сделайте пароль длиннее (минимум 12 символов)",
        "Добавьте заглавные и строчные буквы",
        "Добавьте цифры и спецсимволы",
      ],
    };
  } else if (score <= 3) {
    return {
      score: 30,
      label: "Слабый",
      color: "#f97316",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      glowColor: "rgba(249,115,22,0.3)",
      Icon: ShieldAlert,
      description: "Не рекомендуется для важных аккаунтов",
      suggestions: [
        "Увеличьте длину до 12+ символов",
        "Комбинируйте буквы, цифры и символы",
      ],
    };
  } else if (score <= 5) {
    return {
      score: 55,
      label: "Средний",
      color: "#eab308",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      glowColor: "rgba(234,179,8,0.3)",
      Icon: AlertTriangle,
      description: "Неплохо, но можно улучшить",
      suggestions: [
        "Добавьте больше уникальных символов",
        "Увеличьте длину до 16+ символов",
      ],
    };
  } else if (score <= 6) {
    return {
      score: 75,
      label: "Хороший",
      color: "#22c55e",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      glowColor: "rgba(34,197,94,0.3)",
      Icon: CheckCircle2,
      description: "Надёжный пароль для повседневного использования",
      suggestions: [],
    };
  } else {
    return {
      score: 100,
      label: "Очень крепкий",
      color: "#8b5cf6",
      bgColor: "bg-violet-500/10",
      borderColor: "border-violet-500/30",
      glowColor: "rgba(139,92,246,0.5)",
      Icon: ShieldCheck,
      description: "Идеальный пароль! Хакерам потребуются годы на взлом",
      suggestions: [],
    };
  }
}

const criteriaList = [
  { label: "8+ символов", test: (p: string) => p.length >= 8 },
  { label: "12+ символов", test: (p: string) => p.length >= 12 },
  { label: "16+ символов", test: (p: string) => p.length >= 16 },
  { label: "Заглавные и строчные", test: (p: string) => /[a-z]/.test(p) && /[A-Z]/.test(p) },
  { label: "Цифры", test: (p: string) => /\d/.test(p) },
  { label: "Спецсимволы", test: (p: string) => /[^a-zA-Z0-9]/.test(p) },
  { label: "20+ символов", test: (p: string) => p.length >= 20 },
  { label: "10+ уникальных", test: (p: string) => new Set(p).size >= 10 },
];

export default function PasswordStrength() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const strength = useMemo(() => evaluateStrength(password), [password]);

  const crackTime = useMemo(() => {
    const s = strength.score;
    if (s === 0) return "";
    if (s <= 10) return "менее секунды";
    if (s <= 30) return "секунды — минуты";
    if (s <= 55) return "часы — дни";
    if (s <= 75) return "годы";
    return "столетия";
  }, [strength]);

  const entropyBits = useMemo(() => {
    if (!password) return 0;
    let pool = 0;
    if (/[a-z]/.test(password)) pool += 26;
    if (/[A-Z]/.test(password)) pool += 26;
    if (/\d/.test(password)) pool += 10;
    if (/[^a-zA-Z0-9]/.test(password)) pool += 33;
    return Math.round(password.length * Math.log2(pool || 1));
  }, [password]);

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="absolute top-1/3 right-0 -z-10 h-96 w-96 translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/3 left-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl"
        >
          <div className="text-center space-y-4 mb-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 text-primary mx-auto"
            >
              <ShieldCheck className="h-7 w-7" />
            </motion.div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Проверка пароля
            </h1>
            <p className="text-lg text-muted-foreground">
              Оцените надёжность вашего пароля в реальном времени
            </p>
          </div>

          <div
            className={`rounded-2xl border bg-card shadow-xl transition-all duration-500 ${
              isFocused ? strength.borderColor : "border-border"
            }`}
            style={{
              boxShadow: isFocused
                ? `0 0 0 1px ${strength.color}22, 0 8px 32px ${strength.glowColor}`
                : "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <div className="p-1">
              <div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-t-xl opacity-50"
                  animate={{
                    background: isFocused
                      ? `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 0%), ${strength.color}15, transparent 50%)`
                      : "none",
                  }}
                  transition={{ duration: 0.3 }}
                  onPointerMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty(
                      "--mouse-x",
                      `${((e.clientX - rect.left) / rect.width) * 100}%`
                    );
                    e.currentTarget.style.setProperty(
                      "--mouse-y",
                      `${((e.clientY - rect.top) / rect.height) * 100}%`
                    );
                  }}
                />
                <div className="relative space-y-5 p-6 sm:p-8">
                  <div className="space-y-2">
                    <label
                      htmlFor="password-input"
                      className="text-sm font-medium text-foreground flex items-center gap-2"
                    >
                      <Lock className="h-4 w-4 text-muted-foreground" />
                      Введите пароль
                    </label>
                    <div className="relative">
                      <input
                        id="password-input"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder="Ваш суперсекретный пароль..."
                        className="w-full h-12 rounded-xl border border-input bg-background px-4 pr-20 text-base sm:text-lg tracking-wider placeholder:tracking-normal placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 transition-all duration-300"
                        style={{ color: password ? strength.color : undefined }}
                        autoComplete="off"
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                        <AnimatePresence mode="popLayout">
                          {password && (
                            <motion.button
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              type="button"
                              onClick={() => setPassword("")}
                              className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                              aria-label="Очистить"
                            >
                              <X className="h-4 w-4" />
                            </motion.button>
                          )}
                        </AnimatePresence>
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                          aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {password && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden space-y-5"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground font-medium">
                              Надёжность
                            </span>
                            <motion.span
                              key={strength.label}
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              className="font-bold"
                              style={{ color: strength.color }}
                            >
                              {strength.label}
                            </motion.span>
                          </div>

                          <div className="relative h-3 rounded-full bg-muted overflow-hidden">
                            <motion.div
                              className="absolute inset-y-0 left-0 rounded-full"
                              style={{ backgroundColor: strength.color }}
                              initial={{ width: 0 }}
                              animate={{ width: `${strength.score}%` }}
                              transition={{
                                duration: 0.6,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                            />
                            {strength.score > 0 && strength.score < 100 && (
                              <motion.div
                                className="absolute inset-y-0 left-0 w-8 rounded-full blur-md"
                                style={{ backgroundColor: strength.color }}
                                animate={{
                                  x: [0, `${strength.score}%`],
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              />
                            )}
                          </div>

                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Очень слабый</span>
                            <span>Очень крепкий</span>
                          </div>
                        </div>

                        <div className="rounded-xl border border-border bg-muted/30 p-4 space-y-3">
                          <div className="flex items-start gap-3">
                            <div
                              className="shrink-0 mt-0.5"
                              style={{ color: strength.color }}
                            >
                              <strength.Icon className="h-5 w-5" />
                            </div>
                            <div className="space-y-1">
                              <p className="text-sm font-medium" style={{ color: strength.color }}>
                                {strength.description}
                              </p>
                              {crackTime && (
                                <p className="text-xs text-muted-foreground">
                                  Время подбора: <span className="font-semibold text-foreground">{crackTime}</span>
                                </p>
                              )}
                              {entropyBits > 0 && (
                                <p className="text-xs text-muted-foreground">
                                  Энтропия: <span className="font-semibold text-foreground">{entropyBits} бит</span>
                                </p>
                              )}
                            </div>
                          </div>

                          {strength.suggestions.length > 0 && (
                            <div className="space-y-1.5 pt-1 border-t border-border">
                              <p className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                                <Zap className="h-3 w-3" />
                                Рекомендации для улучшения
                              </p>
                              {strength.suggestions.map((s, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start gap-2 text-xs text-muted-foreground"
                                >
                                  <span
                                    className="shrink-0 mt-0.5"
                                    style={{ color: strength.color }}
                                  >
                                    •
                                  </span>
                                  {s}
                                </motion.div>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {criteriaList.map((criterion) => {
                            const passed = criterion.test(password);
                            return (
                              <motion.div
                                key={criterion.label}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs transition-all duration-300 ${
                                  passed
                                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                    : "border-border bg-muted/30 text-muted-foreground"
                                }`}
                              >
                                {passed ? (
                                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                                ) : (
                                  <X className="h-3.5 w-3.5 shrink-0" />
                                )}
                                <span className="truncate">{criterion.label}</span>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!password && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col items-center justify-center py-10 text-center space-y-3"
                    >
                      <Lock className="h-10 w-10 text-muted-foreground/30" />
                      <p className="text-sm text-muted-foreground/50 max-w-xs">
                        Начните вводить пароль, и мы в реальном времени покажем его надёжность
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
