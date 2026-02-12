"use client";

import { useState } from "react";
import { BookOpen, Trophy, MessageCircle, ChevronRight, Star, Zap, Shield } from "lucide-react";

const quests = [
  {
    icon: BookOpen,
    title: "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 Love Token?",
    xp: "+50 XP",
    done: true,
  },
  {
    icon: Shield,
    title: "\u041A\u0430\u043A \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F?",
    xp: "+75 XP",
    done: true,
  },
  {
    icon: Zap,
    title: "\u0422\u043E\u043A\u0435\u043D\u043E\u043C\u0438\u043A\u0430 \u0438 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435",
    xp: "+100 XP",
    done: false,
  },
  {
    icon: Star,
    title: "\u041A\u0430\u043A \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C Airdrop?",
    xp: "+150 XP",
    done: false,
  },
];

export function QuestsSection() {
  const [showTooltip, setShowTooltip] = useState(false);
  const completed = quests.filter((q) => q.done).length;
  const progress = Math.round((completed / quests.length) * 100);

  return (
    <section id="quests" className="relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium tracking-wider text-neon-purple uppercase">
            {"\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435"}
          </p>
          <h2 className="gradient-text mb-6 text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
            {"\u0423\u0447\u0438\u0441\u044C \u0438 \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439"}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
            {"\u041F\u0440\u043E\u0445\u043E\u0434\u0438 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043A\u0432\u0435\u0441\u0442\u044B \u0432 Telegram Mini App, \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439 \u043E\u043F\u044B\u0442 \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0439 \u043D\u0430\u0433\u0440\u0430\u0434\u044B."}
          </p>
        </div>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Phone Mockup */}
          <div className="flex flex-1 justify-center">
            <div className="relative w-[280px] sm:w-[320px]">
              <div className="overflow-hidden rounded-[2.5rem] border-2 border-foreground/10 bg-[rgba(20,17,42,0.9)] shadow-2xl">
                {/* Status bar */}
                <div className="flex items-center justify-between bg-[rgba(28,24,54,0.8)] px-6 py-3">
                  <span className="text-xs text-muted-foreground">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-neon-pink" />
                    <span className="text-xs font-medium text-foreground">Love Token</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="h-1.5 w-3 rounded-sm bg-muted-foreground/40" />
                    <div className="h-1.5 w-3 rounded-sm bg-muted-foreground/40" />
                  </div>
                </div>

                <div className="space-y-4 px-5 py-6">
                  {/* Progress */}
                  <div className="glass-card rounded-xl p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-medium text-foreground">
                        {"\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F"}
                      </span>
                      <span className="text-xs font-bold text-neon-pink">{progress}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-neon-pink to-neon-purple transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Quest list */}
                  <div className="space-y-2.5">
                    {quests.map((q) => (
                      <div
                        key={q.title}
                        className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${
                          q.done
                            ? "border-neon-pink/20 bg-neon-pink/5"
                            : "border-border bg-muted/20"
                        }`}
                      >
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                            q.done ? "bg-neon-pink/15" : "bg-muted/40"
                          }`}
                        >
                          <q.icon
                            className={`h-4 w-4 ${
                              q.done ? "text-neon-pink" : "text-muted-foreground"
                            }`}
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p
                            className={`truncate text-xs font-medium ${
                              q.done ? "text-foreground" : "text-muted-foreground"
                            }`}
                          >
                            {q.title}
                          </p>
                        </div>
                        <span
                          className={`shrink-0 text-[10px] font-bold ${
                            q.done ? "text-neon-pink" : "text-muted-foreground/50"
                          }`}
                        >
                          {q.xp}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Reward button */}
                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-neon-pink to-neon-purple py-3 text-xs font-semibold text-white"
                  >
                    <Trophy className="h-4 w-4" />
                    {"\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u0430\u0433\u0440\u0430\u0434\u0443"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA side */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              {"Telegram Mini App"}
            </h3>
            <p className="mb-6 max-w-md text-base leading-relaxed text-muted-foreground">
              {"\u041F\u0440\u043E\u0445\u043E\u0434\u0438 \u043A\u0432\u0435\u0441\u0442\u044B, \u0438\u0437\u0443\u0447\u0430\u0439 \u043C\u0438\u0440 Web3 \u0438 \u0434\u0435\u0439\u0442\u0438\u043D\u0433\u0430, \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439 \u043E\u043F\u044B\u0442 \u0438 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0439 \u043D\u043E\u0432\u044B\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0442\u043E\u043A\u0435\u043D\u043E\u0432."}
            </p>

            <div className="relative">
              <button
                type="button"
                className="neon-glow inline-flex items-center gap-2 rounded-full border border-neon-pink/25 bg-neon-pink/10 px-6 py-3 text-sm font-semibold text-neon-pink transition-all hover:bg-neon-pink/20"
                onClick={() => setShowTooltip(!showTooltip)}
              >
                <MessageCircle className="h-4 w-4" />
                {"\u0417\u0430\u0434\u0430\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441 \u0432 \u0447\u0430\u0442\u0435"}
                <ChevronRight className="h-4 w-4" />
              </button>

              {showTooltip && (
                <div className="absolute top-full left-1/2 z-10 mt-3 -translate-x-1/2 whitespace-nowrap rounded-xl border border-neon-pink/20 bg-card px-4 py-2.5 text-sm text-neon-pink shadow-lg">
                  {"\u041D\u0430\u0448\u0438 \u0441\u0430\u043F\u043F\u043E\u0440\u0442\u044B \u043E\u0442\u0432\u0435\u0442\u044F\u0442 \u0437\u0430 2 \u043C\u0438\u043D\u0443\u0442\u044B!"}
                  <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-t border-l border-neon-pink/20 bg-card" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
