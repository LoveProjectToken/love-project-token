import { Heart } from "lucide-react";

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA Banner */}
      <div className="relative py-20">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-pink/5 blur-[120px]" />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <h2 className="gradient-text mb-6 text-3xl font-bold tracking-tight text-balance md:text-4xl">
            {"\u0411\u0443\u0434\u044C \u043F\u0435\u0440\u0432\u044B\u043C, \u043A\u0442\u043E \u0443\u0437\u043D\u0430\u0435\u0442 \u043E Drop"}
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            {"\u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0441\u044C \u043D\u0430 \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0432\u0441\u0435\u043C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044F\u043C Love Token."}
          </p>

          <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="email@example.com"
              className="flex-1 rounded-full border border-border bg-muted/30 px-5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-neon-pink/40 focus:ring-1 focus:ring-neon-pink/20"
            />
            <button
              type="button"
              className="neon-glow-strong rounded-full bg-gradient-to-r from-neon-pink to-neon-purple px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              {"\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"}
            </button>
          </div>
        </div>
      </div>

      {/* Social + bottom */}
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-8 flex flex-col items-center gap-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neon-pink/15">
              <Heart className="h-5 w-5 text-neon-pink" />
            </div>
            <span className="gradient-text text-xl font-bold">Love Token</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://t.me/loveprojectlive_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted/30 text-muted-foreground transition-all hover:border-neon-pink/30 hover:text-neon-pink"
              aria-label="Telegram"
            >
              <TelegramIcon className="h-5 w-5" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted/30 text-muted-foreground transition-all hover:border-neon-pink/30 hover:text-neon-pink"
              aria-label="X (Twitter)"
            >
              <XIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            {"Love Token \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u043C \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C. \u0423\u0447\u0430\u0441\u0442\u0438\u0435 \u0434\u043E\u0431\u0440\u043E\u0432\u043E\u043B\u044C\u043D\u043E\u0435. \u00A9 2025 Love Token. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B."}
          </p>
        </div>
      </div>
    </footer>
  );
}
