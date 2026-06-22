'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Brain,
  Trophy,
  Target,
  Sparkles,
} from 'lucide-react';
import { questions, quizMeta, type Question, type Option } from '@/src/data/quiz';

type Step = 'intro' | 'question' | 'result';

export default function Quiz() {
  const [step, setStep] = useState<Step>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion: Question = questions[currentIndex];
  const totalQuestions = questions.length;
  const correctCount = Object.entries(answers).filter(
    ([id, label]) =>
      questions.find((q) => q.id === Number(id))?.options.find((o) => o.label === label)?.isCorrect
  ).length;

  const handleSelect = useCallback(
    (option: Option) => {
      if (selectedOption) return;
      setSelectedOption(option.label);
      setShowExplanation(true);
      setAnswers((prev) => ({ ...prev, [currentQuestion.id]: option.label }));
    },
    [selectedOption, currentQuestion.id]
  );

  const handleNext = useCallback(() => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setStep('result');
    }
  }, [currentIndex, totalQuestions]);

  const handleRestart = useCallback(() => {
    setStep('intro');
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswers({});
    setShowExplanation(false);
  }, []);

  return (
    <section className="relative py-16 lg:py-24">
      <div className="absolute top-1/4 right-0 -z-10 h-96 w-96 translate-x-1/3 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 -z-10 h-80 w-80 -translate-x-1/3 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6">
        <AnimatePresence mode="wait">
          {step === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mx-auto max-w-2xl text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 text-primary mx-auto mb-6"
              >
                <Brain className="h-8 w-8" />
              </motion.div>

              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
                {quizMeta.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {quizMeta.description}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-10 max-w-md mx-auto">
                {[
                  { icon: HelpCircle, label: '10 вопросов', color: 'text-primary' },
                  { icon: Target, label: 'Варианты ответов', color: 'text-emerald-500' },
                  { icon: Sparkles, label: 'С пояснениями', color: 'text-violet-500' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="p-2.5 rounded-xl bg-card border border-border">
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <span className="text-xs text-muted-foreground">{item.label}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setStep('question')}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-colors cursor-pointer shadow-lg shadow-primary/20"
              >
                Начать тест
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </motion.div>
          )}

          {step === 'question' && (
            <motion.div
              key={`question-${currentIndex}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-2xl"
            >
              <div className="mb-6 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground font-medium">
                    Вопрос <span className="text-foreground font-bold">{currentIndex + 1}</span> из{' '}
                    {totalQuestions}
                  </span>
                  <span className="text-muted-foreground">
                    Правильных: <span className="text-emerald-500 font-bold">{correctCount}</span>
                  </span>
                </div>
                <div className="relative h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-violet-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card shadow-xl p-6 sm:p-8 mb-4">
                <h2 className="text-lg sm:text-xl font-semibold leading-relaxed mb-6">
                  {currentQuestion.scenario}
                </h2>

                <div className="space-y-3">
                  {currentQuestion.options.map((option, i) => {
                    const isSelected = selectedOption === option.label;
                    const isCorrectOption = option.isCorrect;
                    const showResult = selectedOption !== null;

                    let cardStyle = 'border-border bg-card hover:bg-accent/50';
                    let icon = null;

                    if (showResult) {
                      if (isCorrectOption) {
                        cardStyle = 'border-emerald-500/50 bg-emerald-500/10';
                        icon = <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />;
                      } else if (isSelected && !isCorrectOption) {
                        cardStyle = 'border-red-500/50 bg-red-500/10';
                        icon = <XCircle className="h-5 w-5 text-red-500 shrink-0" />;
                      } else {
                        cardStyle = 'border-border/50 bg-muted/20 opacity-60';
                      }
                    }

                    return (
                      <motion.button
                        key={option.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        whileHover={!showResult ? { scale: 1.01 } : undefined}
                        whileTap={!showResult ? { scale: 0.99 } : undefined}
                        onClick={() => handleSelect(option)}
                        disabled={showResult}
                        className={`w-full text-left flex items-start gap-3 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                          showResult ? 'cursor-default' : ''
                        } ${cardStyle}`}
                      >
                        <span
                          className={`shrink-0 flex items-center justify-center w-7 h-7 rounded-lg text-sm font-bold transition-colors duration-300 ${
                            showResult
                              ? isCorrectOption
                                ? 'bg-emerald-500/20 text-emerald-500'
                                : isSelected
                                  ? 'bg-red-500/20 text-red-500'
                                  : 'bg-muted text-muted-foreground'
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          {option.label}
                        </span>
                        <span className="text-sm sm:text-base leading-relaxed pt-0.5">
                          {option.text}
                        </span>
                        {icon}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <AnimatePresence>
                {showExplanation && selectedOption && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div
                      className={`rounded-xl border p-5 mb-4 ${
                        currentQuestion.options.find((o) => o.label === selectedOption)?.isCorrect
                          ? 'border-emerald-500/30 bg-emerald-500/5'
                          : 'border-red-500/30 bg-red-500/5'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {currentQuestion.options.find((o) => o.label === selectedOption)
                          ?.isCorrect ? (
                          <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                        )}
                        <div>
                          <p className="text-sm font-semibold mb-1">
                            {currentQuestion.options.find((o) => o.label === selectedOption)
                              ?.isCorrect
                              ? 'Верно!'
                              : 'Неверно'}
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {
                              currentQuestion.options.find((o) => o.label === selectedOption)
                                ?.explanation
                            }
                          </p>
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={handleNext}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors cursor-pointer shadow-lg shadow-primary/20"
                    >
                      {currentIndex < totalQuestions - 1 ? (
                        <>
                          Следующий вопрос
                          <ArrowRight className="h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Узнать результат
                          <Trophy className="h-4 w-4" />
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {step === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-2xl text-center"
            >
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.1 }}
                className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-primary/10 text-primary mx-auto mb-6"
              >
                <Trophy className="h-10 w-10" />
              </motion.div>

              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-3">
                Тест пройден!
              </h1>

              <div className="mb-8">
                <div className="inline-flex items-center gap-3 rounded-2xl bg-card border border-border px-8 py-4 shadow-sm">
                  <span className="text-muted-foreground text-lg">Результат:</span>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 10, delay: 0.3 }}
                    className={`text-4xl font-extrabold ${
                      correctCount >= 8 ? 'text-emerald-500' : correctCount >= 5 ? 'text-yellow-500' : 'text-red-500'
                    }`}
                  >
                    {correctCount}
                  </motion.span>
                  <span className="text-muted-foreground text-lg">/ {totalQuestions}</span>
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground mb-10"
              >
                {correctCount === totalQuestions
                  ? 'Идеально! Вы отлично знаете, как защитить свои аккаунты.'
                  : correctCount >= 8
                    ? 'Отличный результат! Вы хорошо разбираетесь в безопасности.'
                    : correctCount >= 5
                      ? 'Неплохо! Но есть над чем поработать.'
                      : 'Стоит повторить материал — ваша безопасность под угрозой.'}
              </motion.p>

              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="rounded-xl bg-card border border-border p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mx-auto mb-1" />
                  <p className="text-2xl font-bold text-emerald-500">{correctCount}</p>
                  <p className="text-xs text-muted-foreground">Верных ответов</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="rounded-xl bg-card border border-border p-4"
                >
                  <XCircle className="h-5 w-5 text-red-500 mx-auto mb-1" />
                  <p className="text-2xl font-bold text-red-500">{totalQuestions - correctCount}</p>
                  <p className="text-xs text-muted-foreground">Ошибок</p>
                </motion.div>
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleRestart}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-colors cursor-pointer shadow-lg shadow-primary/20"
              >
                <RotateCcw className="h-5 w-5" />
                Пройти заново
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
