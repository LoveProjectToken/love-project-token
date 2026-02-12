import { CalendarCheck, ShieldCheck, Gift, Coins, Users, Sparkles } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "\u041F\u0440\u043E\u0448\u043B\u044B\u0439 \u043E\u043F\u044B\u0442",
    desc: "\u0422\u0432\u043E\u0439 \u0441\u0442\u0430\u0436 \u0432 \u0434\u0435\u0439\u0442\u0438\u043D\u0433-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u0445 (Mamba, Teamo \u0438 \u0434\u0440.) \u2014 \u044D\u0442\u043E \u0442\u0432\u043E\u0439 \u0430\u043A\u0442\u0438\u0432.",
  },
  {
    icon: ShieldCheck,
    title: "\u0412\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F",
    desc: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438 \u0441\u0442\u0430\u0436 \u0431\u044B\u0441\u0442\u0440\u043E \u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E \u0447\u0435\u0440\u0435\u0437 Telegram.",
  },
  {
    icon: Gift,
    title: "\u041D\u0430\u0433\u0440\u0430\u0434\u0430 \u0432 \u0442\u043E\u043A\u0435\u043D\u0430\u0445",
    desc: "\u041F\u043E\u043B\u0443\u0447\u0438 Love Token \u0437\u0430 \u0441\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434 \u0432 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0443 \u043E\u0431\u0449\u0435\u043D\u0438\u044F.",
  },
];

const benefits = [
  {
    icon: Coins,
    title: "Tokenized Connection",
    desc: "\u041A\u0430\u0436\u0434\u043E\u0435 \u0432\u0430\u0448\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435 \u2014 \u044D\u0442\u043E \u0432\u043A\u043B\u0430\u0434 \u0432 \u0432\u0430\u0448\u0443 \u0440\u0435\u043F\u0443\u0442\u0430\u0446\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u043E\u0449\u0440\u044F\u0435\u0442\u0441\u044F \u0442\u043E\u043A\u0435\u043D\u0430\u043C\u0438.",
  },
  {
    icon: Users,
    title: "Transparent Community",
    desc: "\u0411\u043B\u043E\u043A\u0447\u0435\u0439\u043D \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0447\u0435\u0441\u0442\u043D\u044B\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0438\u0433\u0440\u044B \u0434\u043B\u044F \u0432\u0441\u0435\u0445: \u0437\u0434\u0435\u0441\u044C \u0446\u0435\u043D\u044F\u0442 \u0436\u0438\u0432\u043E\u0435 \u0441\u043B\u043E\u0432\u043E \u0438 \u0438\u0441\u043A\u0440\u0435\u043D\u043D\u0438\u0439 \u0438\u043D\u0442\u0435\u0440\u0435\u0441.",
  },
  {
    icon: Sparkles,
    title: "Shared Value",
    desc: "\u041C\u044B \u043D\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u0441\u0430\u0439\u0442 \u0437\u043D\u0430\u043A\u043E\u043C\u0441\u0442\u0432, \u043C\u044B \u2014 \u044D\u043A\u043E\u0441\u0438\u0441\u0442\u0435\u043C\u0430, \u0433\u0434\u0435 \u0443\u0441\u043F\u0435\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432.",
  },
];

export function ConceptSection() {
  return (
    <section id="concept" className="relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium tracking-wider text-neon-purple uppercase">
            {"\u041A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u044F"}
          </p>
          <h2 className="gradient-text mb-6 text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
            {"\u0422\u0432\u043E\u0439 \u043E\u043F\u044B\u0442 \u2014 \u0442\u0432\u043E\u0438 \u0434\u0435\u043D\u044C\u0433\u0438"}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
            {"\u041E\u0442\u043A\u0440\u044B\u0442\u043E\u0441\u0442\u044C, \u0438\u0441\u043A\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0438 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0435 \u043F\u0440\u0438\u0437\u043D\u0430\u043D\u0438\u0435. \u041C\u044B \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0438\u043B\u0438 \u0441\u0432\u043E\u0431\u043E\u0434\u0443 \u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0431\u0443\u0434\u0443\u0449\u0435\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u0432\u0430\u0448\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u043B\u0430\u0441\u044C \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438."}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="mb-20 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="glass-card group relative flex flex-col items-center rounded-2xl p-8 text-center"
            >
              <span className="absolute top-4 right-4 text-6xl font-bold text-foreground/[0.03]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-neon-pink/10 transition-colors group-hover:bg-neon-pink/15">
                <step.icon className="h-7 w-7 text-neon-pink" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>

              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-neon-pink/30 md:block">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <title>Arrow</title>
                    <path d="M5 12h14m-7-7 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="glass-card group rounded-2xl p-8"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neon-purple/10 transition-colors group-hover:bg-neon-purple/15">
                <b.icon className="h-6 w-6 text-neon-purple" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{b.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
