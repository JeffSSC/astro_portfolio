import { useState } from "react";
import { getData, type DataLang } from "../i18n/data";

interface TestimonialsProps {
  lang: DataLang;
}

export function Testimonials({ lang }: TestimonialsProps) {
  const data = getData(lang);
  const [idx, setIdx] = useState(0);
  const [tick, setTick] = useState(0);
  const t = data.testimonials[idx];
  const change = (n: number) => {
    setIdx(n);
    setTick((x) => x + 1);
  };

  return (
    <section id="words" className="py-24 md:py-14">
      <header className="grid md:grid-cols-[1fr_2fr_1fr] gap-10 items-end mb-14">
        <div className="flex flex-col gap-1">
          <span className="mono text-ink">04</span>
          <span className="mono">{lang === "pt" ? "Índice · Depoimentos" : "Index · Words"}</span>
        </div>
        <h2
          className="serif m-0 tracking-[-0.03em] leading-[1.02]"
          style={{ fontSize: "clamp(38px, 6vw, 72px)" }}
        >
          {lang === "pt" ? "O que outros dizem." : "What others say."}
        </h2>
        <div className="flex items-center gap-3 justify-self-end">
          <button
            onClick={() =>
              change(
                (idx - 1 + data.testimonials.length) % data.testimonials.length,
              )
            }
            aria-label={lang === "pt" ? "Anterior" : "Previous"}
            className="w-8 h-8 grid place-items-center border border-rule hover:bg-ink hover:text-bg hover:border-ink"
          >
            <svg width="14" height="14" viewBox="0 0 14 14">
              <path
                d="M9 2L4 7l5 5"
                stroke="currentColor"
                strokeWidth="1.4"
                fill="none"
              />
            </svg>
          </button>
          <span className="mono">
            {String(idx + 1).padStart(2, "0")} /{" "}
            {String(data.testimonials.length).padStart(2, "0")}
          </span>
          <button
            onClick={() => change((idx + 1) % data.testimonials.length)}
            aria-label={lang === "pt" ? "Próximo" : "Next"}
            className="w-8 h-8 grid place-items-center border border-rule hover:bg-ink hover:text-bg hover:border-ink"
          >
            <svg width="14" height="14" viewBox="0 0 14 14">
              <path
                d="M5 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.4"
                fill="none"
              />
            </svg>
          </button>
        </div>
      </header>
      <figure
        key={tick}
        className="relative m-0 pl-[50px] md:pl-20 py-10 max-w-[900px]"
        style={{ animation: "quoteIn .6s cubic-bezier(.22,.8,.2,1)" }}
      >
        <div className="serif absolute left-0 top-2.5 text-[80px] md:text-[140px] leading-[0.7] text-accent">
          &ldquo;
        </div>
        <blockquote
          className="serif m-0 mb-7 leading-[1.32] tracking-[-0.01em] text-pretty"
          style={{ fontSize: "clamp(24px, 3vw, 34px)" }}
        >
          {t.quote}
        </blockquote>
        <figcaption className="flex items-center gap-4">
          <div
            aria-hidden
            className="w-12 h-12 grid place-items-center bg-card border border-rule font-mono text-[13px] text-ink"
          >
            {t.name
              .split(" ")
              .map((s: string) => s[0])
              .slice(0, 2)
              .join("")}
          </div>
          <div>
            <div className="serif text-lg">{t.name}</div>
            <div className="mono">{t.role}</div>
          </div>
        </figcaption>
      </figure>
      <div className="mt-5 flex gap-2 pl-[50px] md:pl-20">
        {data.testimonials.map((_: unknown, i: number) => (
          <button
            key={i}
            onClick={() => change(i)}
            aria-label={lang === "pt" ? `Depoimento ${i + 1}` : `Quote ${i + 1}`}
            className={`h-1 transition-all ${i === idx ? "w-10 bg-ink" : "w-6 bg-rule"}`}
          />
        ))}
      </div>
      <style>{`@keyframes quoteIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }`}</style>
    </section>
  );
}
