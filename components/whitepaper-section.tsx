import { FileText, ExternalLink } from "lucide-react";

export function WhitepaperSection() {
  return (
    <section id="whitepaper" className="relative py-24 sm:py-32">
      <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-purple/5 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon-purple/20 bg-neon-purple/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neon-purple">
            <FileText className="h-3.5 w-3.5" />
            Whitepaper
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl text-balance">
            {"\u0412\u0441\u044f \u0441\u0443\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u2014 \u0432 \u043e\u0434\u043d\u043e\u043c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0435"}
          </h2>
        </div>

        <div className="glass-card neon-glow rounded-2xl p-8 sm:p-10 text-center">
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {"\u041c\u044b \u0441\u043e\u0431\u0440\u0430\u043b\u0438 \u0432\u0441\u0451 \u0432 \u043e\u0434\u043d\u043e\u043c \u043c\u0435\u0441\u0442\u0435: \u043c\u0438\u0441\u0441\u0438\u044f, \u0442\u043e\u043a\u0435\u043d\u043e\u043c\u0438\u043a\u0430, \u0444\u043e\u0440\u043c\u0443\u043b\u0430 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f, \u0434\u043e\u0440\u043e\u0436\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u0430 \u0438 \u0432\u0438\u0434\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0443\u0449\u0435\u0433\u043e Love Token. \u0412 \u044d\u0442\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0435 \u0440\u0430\u0441\u043a\u0440\u044b\u0442\u0430 \u043f\u043e\u043b\u043d\u0430\u044f \u0441\u0443\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u2014 \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e \u0438 \u043f\u043e\u043d\u044f\u0442\u043d\u043e."}
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://telegra.ph/LOVE-PROJECT-TOKEN-02-12"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-glow-strong group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-neon-pink to-neon-purple px-8 py-3.5 text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              {"\u0427\u0438\u0442\u0430\u0442\u044c Whitepaper"}
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <p className="mt-6 text-xs text-muted-foreground/60">
            {"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e \u043d\u0430 Telegraph \u2022 \u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0432\u0441\u0435\u043c"}
          </p>
        </div>
      </div>
    </section>
  );
}
