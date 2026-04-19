import { useEffect, useState } from "react";
import { ACCENT_HUES, type Theme } from "../data/portfolio";
import type { DataLang } from "../i18n/data";

interface NavProps {
  lang: DataLang;
}

export function Nav({ lang: initialLang }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState<Theme>("dark");
  const [lang, setLang] = useState<DataLang>(initialLang);

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme) || "dark";
    setTheme(saved);
    document.documentElement.dataset.theme = saved;

    const on = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight || 1;
      setScrolled(window.scrollY > 24);
      setProgress(Math.min(1, Math.max(0, window.scrollY / max)));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    const h = ACCENT_HUES.green;
    document.documentElement.style.setProperty("--accent", `oklch(${next === "dark" ? "0.75" : "0.58"} 0.14 ${h})`);
    document.documentElement.style.setProperty("--accent-soft", `oklch(${next === "dark" ? "0.75" : "0.58"} 0.14 ${h} / 0.10)`);
  };

  const switchLang = (newLang: DataLang) => {
    if (newLang === lang) return;
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(en|pt)/, `/${newLang}`);
    window.location.href = newPath;
  };

  return (
    <nav className={`sticky top-0 z-30 grid grid-cols-[1fr_auto_1fr] items-center gap-6 backdrop-blur-xl transition-all ${scrolled ? "border-b border-rule py-3.5 px-10" : "py-5 px-10"} md:px-5`}
      style={{ background: "color-mix(in srgb, var(--bg) 85%, transparent)" }}>
      <div className="absolute left-0 right-0 -bottom-px h-px bg-accent origin-left transition-transform duration-150" style={{ transform: `scaleX(${progress})` }} aria-hidden />
      <a href={`/${lang}/#top`} className="flex items-center gap-3">
        <span className="serif grid place-items-center w-[34px] h-[34px] border border-ink text-xl leading-none">JSC</span>
        <span className="serif text-lg hidden sm:inline">Jefferson Silva Caires</span>
      </a>
      <div className="hidden md:flex gap-7">
        {(lang === "pt" ? [
          ["01", "Trabalhos", "#work"], ["02", "Experiência", "#experience"], ["03", "Stack", "#stack"],
          ["04", "Depoimentos", "#words"], ["05", "Contato", "#contact"],
        ] : [
          ["01", "Work", "#work"], ["02", "Experience", "#experience"], ["03", "Stack", "#stack"],
          ["04", "Words", "#words"], ["05", "Contact", "#contact"],
        ]).map(([n, label, href]) => (
          <a key={href} href={`/${lang}${href}`} className="relative text-sm flex items-baseline gap-1.5">
            <span className="font-mono text-[10px] text-muted">{n}</span> {label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4 justify-self-end">
        <div className="flex gap-1.5 font-mono text-xs text-muted" role="tablist" aria-label="Language">
          <button className={lang === "en" ? "text-ink" : ""} onClick={() => switchLang("en")} aria-pressed={lang === "en"}>EN</button>
          <span aria-hidden>/</span>
          <button className={lang === "pt" ? "text-ink" : ""} onClick={() => switchLang("pt")} aria-pressed={lang === "pt"}>PT</button>
        </div>
        <button onClick={toggleTheme} aria-label="Toggle theme"
          className="flex items-center gap-2 px-3 py-1.5 border border-rule rounded-full hover:border-ink hover:bg-card transition">
          <span className="w-2.5 h-2.5 rounded-full bg-ink" style={{ boxShadow: "inset 0 0 0 2px var(--bg)" }} />
          <span className="mono">{theme === "dark" ? (lang === "pt" ? "Claro" : "Light") : (lang === "pt" ? "Escuro" : "Dark")}</span>
        </button>
      </div>
    </nav>
  );
}
