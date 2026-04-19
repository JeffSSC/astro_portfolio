import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, as: As = "div", delay = 0, className = "", y = 24 }: {
  children: ReactNode; as?: any; delay?: number; className?: string; y?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setOn(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setOn(true); io.unobserve(el); } });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <As ref={ref as any} className={`reveal ${on ? "in " : ""}${className}`} style={{ "--d": `${delay}ms`, "--y": `${y}px` } as any}>
      {children}
    </As>
  );
}
