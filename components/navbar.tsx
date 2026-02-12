"use client";

import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "\u041A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u044F", href: "#concept" },
  { label: "\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435", href: "#quests" },
  { label: "\u0422\u043E\u043A\u0435\u043D\u043E\u043C\u0438\u043A\u0430", href: "#tokenomics" },
  { label: "\u0414\u043E\u0440\u043E\u0436\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430", href: "#roadmap" },
  { label: "Whitepaper", href: "#whitepaper" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-[rgba(12,10,29,0.75)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neon-pink/15">
            <Heart className="h-5 w-5 text-neon-pink" />
          </div>
          <span className="gradient-text text-xl font-bold">Love Token</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="https://t.me/loveprojectlive_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neon-pink/25 bg-neon-pink/10 px-5 py-2 text-sm font-medium text-neon-pink transition-all hover:bg-neon-pink/20"
          >
            {"\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F"}
          </a>
        </div>

        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E" : "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-[rgba(12,10,29,0.95)] backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://t.me/loveprojectlive_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-neon-pink/25 bg-neon-pink/10 px-5 py-2.5 text-sm font-medium text-neon-pink transition-all hover:bg-neon-pink/20"
              onClick={() => setIsOpen(false)}
            >
              {"\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F"}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
