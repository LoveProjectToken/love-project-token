import { Heart } from "lucide-react";

const milestones = [
  {
    quarter: "Q3 2025",
    title: "Community Launch",
    desc: "\u0417\u0430\u043F\u0443\u0441\u043A \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u0432 Telegram, \u043F\u0435\u0440\u0432\u044B\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0438 \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u044F\u0434\u0440\u0430 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438.",
    active: true,
  },
  {
    quarter: "Q4 2025",
    title: "Mini App & Education",
    desc: "\u0417\u0430\u043F\u0443\u0441\u043A Telegram Mini App \u0441 \u043A\u0432\u0435\u0441\u0442\u0430\u043C\u0438, \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u0438 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435\u043C \u0431\u0430\u043B\u043B\u043E\u0432.",
    active: false,
  },
  {
    quarter: "14.02.2026",
    title: "The Grand Listing",
    desc: "\u041B\u0438\u0441\u0442\u0438\u043D\u0433 Love Token \u043D\u0430 \u0431\u0438\u0440\u0436\u0430\u0445, Airdrop \u0434\u043B\u044F \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \u0438 \u0437\u0430\u043F\u0443\u0441\u043A \u044D\u043A\u043E\u0441\u0438\u0441\u0442\u0435\u043C\u044B.",
    active: false,
  },
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium tracking-wider text-neon-purple uppercase">
            {"\u0414\u043E\u0440\u043E\u0436\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430"}
          </p>
          <h2 className="gradient-text mb-6 text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
            {"\u041F\u0443\u0442\u044C \u043A 14 \u0424\u0435\u0432\u0440\u0430\u043B\u044F"}
          </h2>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute top-6 right-0 left-0 h-px bg-gradient-to-r from-neon-pink/40 via-neon-purple/40 to-neon-blue/40" />
            <div className="grid grid-cols-3 gap-8">
              {milestones.map((m) => (
                <div key={m.quarter} className="relative pt-12">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full border-2 ${
                        m.active
                          ? "border-neon-pink bg-neon-pink/15 shadow-[0_0_15px_rgba(232,67,127,0.25)]"
                          : "border-foreground/10 bg-muted/30"
                      }`}
                    >
                      <Heart
                        className={`h-5 w-5 ${
                          m.active
                            ? "fill-neon-pink/30 text-neon-pink"
                            : "text-muted-foreground"
                        }`}
                      />
                    </div>
                  </div>
                  <div
                    className={`glass-card rounded-2xl p-6 text-center ${
                      m.active
                        ? "border-neon-pink bg-neon-pink/5 shadow-[0_0_15px_rgba(232,67,127,0.12)]"
                        : ""
                    }`}
                  >
                    <span
                      className={`mb-2 inline-block text-xs font-bold uppercase tracking-wider ${
                        m.active ? "text-neon-pink" : "text-muted-foreground"
                      }`}
                    >
                      {m.quarter}
                    </span>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{m.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden">
          <div className="relative ml-6 border-l border-foreground/10 pl-8">
            {milestones.map((m) => (
              <div key={m.quarter} className="relative mb-10 last:mb-0">
                <div className="absolute -left-[calc(2rem+1.5rem+1px)] top-0">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full border-2 ${
                      m.active
                        ? "border-neon-pink bg-neon-pink/15 shadow-[0_0_15px_rgba(232,67,127,0.25)]"
                        : "border-foreground/10 bg-muted/30"
                    }`}
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        m.active
                          ? "fill-neon-pink/30 text-neon-pink"
                          : "text-muted-foreground"
                      }`}
                    />
                  </div>
                </div>
                <div className={`glass-card rounded-2xl p-6 ${m.active ? "border-neon-pink bg-neon-pink/5" : ""}`}>
                  <span className={`mb-2 inline-block text-xs font-bold uppercase tracking-wider ${m.active ? "text-neon-pink" : "text-muted-foreground"}`}>
                    {m.quarter}
                  </span>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{m.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
