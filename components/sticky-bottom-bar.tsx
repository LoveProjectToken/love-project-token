import { MessageCircle } from "lucide-react";

export function StickyBottomBar() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 border-t border-border bg-[rgba(12,10,29,0.85)] py-3 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6">
        <a
          href="https://t.me/loveprojectlive_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="neon-glow-strong inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-pink to-neon-purple px-8 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
        >
          <MessageCircle className="h-4 w-4" />
          {"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0447\u0430\u0442"}
        </a>
      </div>
    </div>
  );
}
