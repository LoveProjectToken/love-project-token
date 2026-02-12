import { Heart, ArrowRight, Lock } from "lucide-react";

function GlowingHeart() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="animate-pulse-glow absolute h-72 w-72 rounded-full bg-neon-pink/10 blur-3xl" />
      <div
        className="animate-pulse-glow absolute h-56 w-56 rounded-full bg-neon-purple/12 blur-2xl"
        style={{ animationDelay: "1s" }}
      />

      <div className="animate-float relative flex h-60 w-60 items-center justify-center md:h-72 md:w-72">
        <div className="neon-glow-strong absolute inset-0 rounded-full border border-neon-pink/15 bg-neon-pink/5 backdrop-blur-sm" />

        <Heart
          className="relative h-20 w-20 fill-neon-pink/25 text-neon-pink md:h-28 md:w-28"
          strokeWidth={1}
        />

        <div
          className="absolute h-full w-full animate-spin"
          style={{ animationDuration: "20s" }}
        >
          <div className="absolute top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-neon-purple shadow-[0_0_12px_rgba(155,93,229,0.5)]" />
        </div>
        <div
          className="absolute h-full w-full animate-spin"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        >
          <div className="absolute bottom-4 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-neon-pink shadow-[0_0_12px_rgba(232,67,127,0.5)]" />
        </div>
        <div
          className="absolute h-full w-full animate-spin"
          style={{ animationDuration: "25s" }}
        >
          <div className="absolute top-1/2 right-2 h-2 w-2 -translate-y-1/2 rounded-full bg-neon-blue shadow-[0_0_12px_rgba(91,108,240,0.5)]" />
        </div>

        <svg
          className="absolute inset-0 h-full w-full opacity-15"
          viewBox="0 0 320 320"
          aria-hidden="true"
        >
          <title>Decoration</title>
          <line x1="60" y1="60" x2="160" y2="120" stroke="url(#lg)" strokeWidth="1" />
          <line x1="260" y1="80" x2="160" y2="160" stroke="url(#lg)" strokeWidth="1" />
          <line x1="80" y1="260" x2="160" y2="180" stroke="url(#lg)" strokeWidth="1" />
          <line x1="240" y1="240" x2="160" y2="160" stroke="url(#lg)" strokeWidth="1" />
          <defs>
            <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e8437f" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#9b5de5" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

const HERO_TITLE = "Love Token: \u041d\u0430\u0439\u0434\u0438 \u0441\u0432\u043e\u044e \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u043a\u0443 \u0432 \u043c\u0438\u0440\u0435 Web3";
const HERO_DESC = "\u004d\u044b \u0432\u0435\u0440\u0438\u043c, \u0447\u0442\u043e \u043a\u0430\u0436\u0434\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0438 \u043a\u0430\u0436\u0434\u043e\u0435 \u0437\u043d\u0430\u043a\u043e\u043c\u0441\u0442\u0432\u043e \u0438\u043c\u0435\u044e\u0442 \u0446\u0435\u043d\u043d\u043e\u0441\u0442\u044c. \u0422\u0432\u043e\u0439 \u043e\u043f\u044b\u0442 \u0432 \u0434\u0435\u0439\u0442\u0438\u043d\u0433\u0435 \u043f\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u0442\u043e\u043a\u0435\u043d\u044b.";
const CTA_JOIN = "\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f \u043a \u0447\u0430\u0442\u0443";
const CTA_DROP = "\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043f\u0440\u0430\u0432\u043e \u043d\u0430 Drop";
const SCROLL_TEXT = "\u041b\u0438\u0441\u0442\u0430\u0439 \u0432\u043d\u0438\u0437";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute top-0 left-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-pink/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] translate-x-1/4 translate-y-1/4 rounded-full bg-neon-purple/10 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-blue/5 blur-[100px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:gap-16 lg:py-32">
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-pink/20 bg-neon-pink/10 px-4 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-neon-pink" />
            <span className="text-xs font-medium text-neon-pink">
              Web3 Dating Ecosystem
            </span>
          </div>

          <h1 className="gradient-text mb-6 text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
            {HERO_TITLE}
          </h1>

          <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
            {HERO_DESC}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://t.me/loveprojectlive_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-glow-strong group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neon-pink to-neon-purple px-7 py-3.5 text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              {CTA_JOIN}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <button
              type="button"
              disabled
              className="relative inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full border border-foreground/10 bg-transparent px-7 py-3.5 text-sm font-semibold text-muted-foreground opacity-60"
            >
              <Lock className="h-4 w-4" />
              {CTA_DROP}
              <span className="rounded-full bg-neon-purple/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neon-purple">
                Soon
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <GlowingHeart />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground">{SCROLL_TEXT}</span>
        <div className="h-8 w-5 rounded-full border border-muted-foreground/30 p-1">
          <div className="h-2 w-full animate-bounce rounded-full bg-neon-pink/50" />
        </div>
      </div>
    </section>
  );
}
