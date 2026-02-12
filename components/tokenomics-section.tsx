"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Community & Airdrops", value: 50, color: "#e8437f" },
  { name: "Education & Support", value: 15, color: "#9b5de5" },
  { name: "Liquidity", value: 15, color: "#5b6cf0" },
  { name: "Marketing", value: 10, color: "#c8bdd9" },
  { name: "Team (locked 12m)", value: 10, color: "#6c6188" },
];

const descriptions: Record<string, string> = {
  "Community & Airdrops":
    "\u0421\u0430\u043C\u044B\u0439 \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0444\u043E\u043D\u0434 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442 \u0441\u0442\u0430\u0436 \u0438 \u0430\u043A\u0442\u0438\u0432\u0435\u043D \u0432 \u0447\u0430\u0442\u0435.",
  "Education & Support":
    "\u0413\u0440\u0430\u043D\u0442\u044B \u0434\u043B\u044F \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430 \u0441\u0430\u043F\u043F\u043E\u0440\u0442\u043E\u0432.",
  Liquidity: "\u0414\u043B\u044F \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0431\u043C\u0435\u043D\u0430 \u0442\u043E\u043A\u0435\u043D\u0430.",
  Marketing:
    "\u041F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0435 \u043D\u043E\u0432\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0438\u0437 \u043C\u0438\u0440\u0430 \u0434\u0435\u0439\u0442\u0438\u043D\u0433\u0430.",
  "Team (locked 12m)":
    "\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0434\u043B\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u043D\u0430 12 \u043C\u0435\u0441\u044F\u0446\u0435\u0432.",
};

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ payload: { name: string; value: number } }>;
}) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="rounded-xl border border-border bg-card px-4 py-3 shadow-xl">
      <p className="mb-1 text-sm font-semibold text-foreground">{d.name}</p>
      <p className="text-xs text-muted-foreground">{descriptions[d.name]}</p>
      <p className="mt-1 text-lg font-bold text-neon-pink">{d.value}%</p>
    </div>
  );
}

export function TokenomicsSection() {
  return (
    <section id="tokenomics" className="relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium tracking-wider text-neon-purple uppercase">
            {"\u0422\u043E\u043A\u0435\u043D\u043E\u043C\u0438\u043A\u0430"}
          </p>
          <h2 className="gradient-text mb-6 text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
            {"\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0430 \u0434\u043B\u044F \u043B\u044E\u0434\u0435\u0439"}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
            {"\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0442\u043E\u043A\u0435\u043D\u043E\u0432 Love Token \u043D\u0430 \u0431\u0430\u0437\u0435 MWXT. 50% \u0432\u0441\u0435\u0445 \u0442\u043E\u043A\u0435\u043D\u043E\u0432 \u2014 \u0434\u043B\u044F \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430."}
          </p>
        </div>

        <div className="glass-card mx-auto max-w-4xl rounded-3xl p-8 md:p-12">
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-12">
            {/* Chart */}
            <div className="w-full md:w-1/2" style={{ minHeight: 300 }}>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={120}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                  >
                    {data.map((entry) => (
                      <Cell
                        key={entry.name}
                        fill={entry.color}
                        style={{
                          filter: `drop-shadow(0 0 8px ${entry.color}40)`,
                        }}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="flex w-full flex-col gap-4 md:w-1/2">
              {data.map((entry) => (
                <div key={entry.name} className="flex items-center gap-3">
                  <div
                    className="h-3 w-3 shrink-0 rounded-full"
                    style={{
                      backgroundColor: entry.color,
                      boxShadow: `0 0 8px ${entry.color}40`,
                    }}
                  />
                  <div className="flex flex-1 items-center justify-between">
                    <span className="text-sm text-muted-foreground">{entry.name}</span>
                    <span className="text-sm font-bold text-foreground">{entry.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
