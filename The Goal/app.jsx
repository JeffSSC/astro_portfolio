const { useState, useEffect, useRef, useMemo } = React;

/* ---------- DATA ---------- */
const DATA = {
  name: "Jefferson Silva Caires",
  role: "Full-Stack Developer",
  location: "Joinville, Brazil",
  available: "Currently building at Peekerton",
  tagline: "I build practical, cloud-native software — full-stack apps, serverless APIs, and applied AI systems.",
  about: [
    "Full-Stack professional with experience in Front-end (React, Vue, Astro), Back-end (Node.js, Python), databases (PostgreSQL, MySQL) and Cloud (AWS & GCP).",
    "I ship alongside learning \u2014 iterating in communities and events to stay sharp on the practices that actually matter in production.",
    "The goal is simple: build things that solve real problems and make the systems around them quieter, faster, and easier to operate."
  ],
  experience: [
    {
      year: "2026 → Now", duration: "Ongoing",
      company: "Peekerton", role: "Full-Stack Developer", mode: "Remote",
      bullets: [
        "Built a Python Circuit Breaker using Chain of Responsibility with typed generics (ParamSpec/TypeVar) and Redis-backed state \u2014 upstream failures fail fast and recover via probes.",
        "Re-architected monolithic CI into decoupled ci.yml (run tests) + build.yml on Github Actions.",
        "Shipped ephemeral environments on-demand GCP managed-compute.",
        "Built a Playwright E2E suite from scratch (Page Object Model).",
        "Shipped a PR Reviewer with Claude Code Actions and GitHub MCP with severity-tagged findings and autonomous Approve / Request-Changes decisions.",
        "Bootstrapped a shared React + TypeScript component library \u2014 bare esbuild build, pnpm, publint + arethetypeswrong gating."
      ]
    },
    {
      year: "2025", duration: "6 months",
      company: "Compass UOL", role: "AI Intern", mode: "Remote",
      bullets: [
        "Agile delivery in Scrum/Kanban; Jira for tracking and planning.",
        "Built a Legal Chatbot with Generative AI — LangChain, RAG, AWS Bedrock.",
        "Shipped a Serverless API in Python (AWS Lambda) for automated OCR on invoices.",
        "Standardized dev and prod environments with Docker."
      ]
    },
    {
      year: "2024", duration: "6 months",
      company: "Informatech", role: "IT Intern", mode: "On-site",
      bullets: [
        "Setup and on-site deployment of workstations at client sites.",
        "Preventive & corrective hardware maintenance: diagnosis, replacements, upgrades.",
        "L1 support focused on software and networking.",
        "Inventory and peripheral asset control."
      ]
    }
  ],
  certs: [
    { name: "AWS AI Practitioner", issuer: "Amazon Web Services", code: "AIF-C01", year: "2025", badge: "AWS" },
    { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", code: "CLF-C02", year: "2024", badge: "AWS" },
  ],
  stackMain: ["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "GCP", "AWS", "Docker"],
  stackOther: ["Vue.js", "React", "Django", "Node.js", "Redis", "Playwright", "pytest", "GitHub Actions", "Tailwind", "Astro", "Linux"],
  projects: [
    {
      id: "goldenpark",
      title: "GoldenPark — Pet Tag",
      tag: "Live product",
      kind: "product",
      year: "2025",
      summary: "Pet identification via QR code. Physical tags link to digital profiles with public contact and an admin panel for owners.",
      stack: ["Vue.js", "Tailwind", "DaisyUI", "PostgreSQL", "Python", "Django", "Docker", "Nginx", "AWS EC2", "CloudFront", "Route53", "S3"],
      link: "https://www.loom.com/share/f0f5586ce30947aa9347d7d02ebe141c",
      linkLabel: "Watch demo",
    },
    {
      id: "extractor",
      title: "Extractor — Invoice API",
      tag: "Serverless",
      kind: "api",
      year: "2025",
      summary: "A Python serverless API that extracts and structures data from Brazilian electronic invoices (NF-e) using OCR.",
      stack: ["Python", "AWS Lambda", "Textract", "Bedrock", "API Gateway", "S3", "Docker"],
      link: "https://github.com/JeffSSC/api_notasFiscais",
      linkLabel: "Source",
    },
    {
      id: "themis",
      title: "Themis — Legal Chatbot",
      tag: "Applied AI",
      kind: "ai",
      year: "2025",
      summary: "A legal chatbot using retrieval-augmented generation over a document corpus, deployed on AWS with a Telegram front door.",
      stack: ["Python", "RAG", "LangChain", "Telegram API", "AWS EC2", "Transcribe", "Bedrock"],
      link: "https://github.com/JeffSSC/ThemisChatBot",
      linkLabel: "Source",
    },
    {
      id: "mikael",
      title: "Mikael — LeRobot",
      tag: "Hardware / CV",
      kind: "ai",
      year: "2024",
      summary: "A robotic hand that plays UNO — computer vision pipeline recognizes cards and drives motor control.",
      stack: ["YOLO", "OpenCV", "Python", "LeRobot"],
      link: "https://github.com/LuanPonick/Mikael",
      linkLabel: "Source",
    },
    {
      id: "portfolio",
      title: "Portfolio / Blog",
      tag: "Personal",
      kind: "product",
      year: "2024",
      summary: "Personal site for projects and notes — static, i18n-enabled, deployed via CloudFront. Designed with Claude Design.",
      stack: ["Astro", "Tailwind", "i18n", "TypeScript", "AWS S3", "Route53", "CloudFront", "Claude Design"],
      link: "https://github.com/JeffSSC/astro_portfolio",
      linkLabel: "Source",
    },
  ],
  testimonials: [
    {
      name: "Aloisio Souza Gonçalves", role: "Scrum Master",
      quote: "A highly organized developer — brings predictability and clarity to what he takes on. Beyond technical mastery he adapts: when scope changes or incidents hit, he keeps focus on resolution. Ethical, reliable, collaborative."
    },
    {
      name: "Patrick Monteiro", role: "Vue.js Specialist · Senior Front-end",
      quote: "I met Jefferson at a hackathon — that alone says plenty about his drive to network and push himself. Excellent problem-solving instincts; strong Python, databases, Docker."
    },
    {
      name: "Lucas Franco da Silva", role: "Software Developer",
      quote: "Extremely committed, organized, collaborative — always willing to help the group find the best path. Dedicated, responsible, and genuinely easy to work with."
    },
    {
      name: "Bruno Utiyama", role: "Professor / Engineer",
      quote: "I followed Jefferson through his academic journey. Intellectual curiosity, quick learning, practical application. Proactive and results-oriented — prepared for new challenges and positive impact."
    }
  ],
  contact: {
    email: "jefferson.caires@gmail.com",
    whatsapp: "https://wa.me/5547991158071?text=Hello%20Jefferson!%20How%20are%20you%3F",
    linkedin: "https://www.linkedin.com/in/jefferson-caires/",
    github: "https://github.com/JeffSSC",
    resume: "https://docs.google.com/document/d/1va40naUIQ2HIlfadBKLjUKFGfLekvbnIuvD0No9AEMY/edit?usp=sharing",
  }
};

const ACCENT_HUES = {
  green:  "145",
  amber:  "75",
  coral:  "35",
  violet: "300",
  blue:   "240",
};

/* ---------- TINY PRIMITIVES ---------- */
function Section({ id, num, kicker, title, children, right }) {
  return (
    <section id={id} className="section">
      <Reveal as="header" className="section-head" y={20}>
        <div className="section-meta">
          <span className="mono num">{num}</span>
          <span className="mono">{kicker}</span>
        </div>
        <h2 className="serif section-title">{title}</h2>
        {right && <div className="section-right">{right}</div>}
      </Reveal>
      <Reveal className="section-body" delay={120} y={28}>{children}</Reveal>
    </section>
  );
}

function Rule() { return <div className="rule" aria-hidden="true" />; }

/* ---------- REVEAL (IntersectionObserver) ---------- */
function Reveal({ children, as: As = "div", delay = 0, className = "", y = 24 }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setOn(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { setOn(true); io.unobserve(el); }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <As ref={ref} className={"reveal " + (on ? "in " : "") + className}
        style={{ "--d": delay + "ms", "--y": y + "px" }}>
      {children}
    </As>
  );
}

/* ---------- NAV ---------- */
function Nav({ theme, setTheme, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const max = (h.scrollHeight - h.clientHeight) || 1;
      setScrolled(window.scrollY > 24);
      setProgress(Math.min(1, Math.max(0, window.scrollY / max)));
    };
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <nav className={"nav " + (scrolled ? "nav-scrolled" : "")}>
      <div className="nav-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <a href="#top" className="nav-brand">
        <span className="brand-mark">JSC</span>
        <span className="brand-name">Jefferson Silva Caires</span>
      </a>
      <div className="nav-links">
        <a href="#work" className="nav-link"><span className="mono num-sm">01</span> Work</a>
        <a href="#experience" className="nav-link"><span className="mono num-sm">02</span> Experience</a>
        <a href="#stack" className="nav-link"><span className="mono num-sm">03</span> Stack</a>
        <a href="#words" className="nav-link"><span className="mono num-sm">04</span> Words</a>
        <a href="#contact" className="nav-link"><span className="mono num-sm">05</span> Contact</a>
      </div>
      <div className="nav-right">
        <div className="lang-switch" role="tablist" aria-label="Language">
          <button className={lang==="en"?"on":""} onClick={()=>setLang("en")} aria-pressed={lang==="en"}>EN</button>
          <span aria-hidden="true">/</span>
          <button className={lang==="pt"?"on":""} onClick={()=>setLang("pt")} aria-pressed={lang==="pt"}>PT</button>
        </div>
        <button className="theme-btn" onClick={()=>setTheme(theme==="dark"?"light":"dark")} aria-label="Toggle theme">
          <span className="theme-dot" />
          <span className="mono">{theme==="dark" ? "Light" : "Dark"}</span>
        </button>
      </div>
    </nav>
  );
}

/* ---------- HERO ---------- */
function Hero({ label }) {
  const ref = useRef(null);
  const [p, setP] = useState({ x: 0.5, y: 0.5 });
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const on = (e) => {
      const r = el.getBoundingClientRect();
      setP({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
    };
    el.addEventListener("mousemove", on);
    return () => el.removeEventListener("mousemove", on);
  }, []);
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "America/Sao_Paulo" });
  return (
    <div className="hero" ref={ref} id="top">
      <div className="hero-grid-bg" style={{
        "--mx": (p.x*100).toFixed(1)+"%",
        "--my": (p.y*100).toFixed(1)+"%",
      }} />
      <div className="hero-top">
        <div className="hero-meta">
          <span className="dot" /> <span className="mono">{DATA.available}</span>
        </div>
        <div className="hero-meta right">
          <span className="mono">Joinville · BR · {time}</span>
        </div>
      </div>
      <h1 className="hero-title serif">
        <span className="hero-line anim-line"><span style={{"--i":0}}>Jefferson</span></span>
        <span className="hero-line anim-line"><span style={{"--i":1}}>Silva <em>Caires.</em></span></span>
      </h1>
      <div className="hero-bottom">
        <div className="hero-role">
          <span className="mono">Currently —</span>
          <span className="serif role-text">{label}</span>
        </div>
        <p className="hero-tagline">{DATA.tagline}</p>
        <div className="hero-cta">
          <a className="btn-primary" href={DATA.contact.whatsapp} target="_blank" rel="noopener">
            <span>Get in touch</span>
            <svg width="14" height="14" viewBox="0 0 14 14"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="square"/></svg>
          </a>
          <a className="btn-ghost" href={DATA.contact.resume} target="_blank" rel="noopener">
            <span>Resume</span>
            <span className="mono">PDF · 2025</span>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <Section id="about" num="00" kicker="Index · About"
      title={<>Pragmatic engineering<br/><span className="quiet">measured, typed, and shipped.</span></>}>
      <div className="about-grid">
        <div className="about-copy">
          {DATA.about.map((p, i) => <p key={i} className="about-p">{p}</p>)}
        </div>
        <aside className="about-side">
          <dl className="kv">
            <dt className="mono">Based in</dt><dd>{DATA.location}</dd>
            <dt className="mono">Focus</dt><dd>Full-stack · Applied AI · Cloud</dd>
            <dt className="mono">Writes</dt><dd>Python · TypeScript · SQL</dd>
            <dt className="mono">Speaks</dt><dd>Portuguese · English</dd>
            <dt className="mono">Certs</dt><dd>AWS AI · AWS CP</dd>
          </dl>
        </aside>
      </div>
    </Section>
  );
}

/* ---------- EXPERIENCE ---------- */
function Experience() {
  return (
    <Section id="experience" num="02" kicker="Index · Experience" title="Where I've shipped.">
      <ol className="exp-list">
        {DATA.experience.map((e, i) => (
          <li className="exp-item" key={i}>
            <div className="exp-year">
              <span className="serif big-year">{e.year}</span>
              <span className="mono">{e.duration}</span>
            </div>
            <div className="exp-main">
              <div className="exp-head">
                <h3 className="serif exp-company">{e.company}</h3>
                <div className="exp-role mono"><span>{e.role}</span> <span className="sep">·</span> <span>{e.mode}</span></div>
              </div>
              <ul className="exp-bullets">
                {e.bullets.map((b, j) => (
                  <li key={j}><span className="mono bullet-num">{String(j+1).padStart(2,"0")}</span><span>{b}</span></li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ---------- STACK ---------- */
function StackChip({ name }) {
  return <span className="chip"><span className="chip-dot" />{name}</span>;
}
function Stack({ showMarquee }) {
  const full = [...DATA.stackMain, ...DATA.stackOther, ...DATA.stackMain, ...DATA.stackOther];
  return (
    <Section id="stack" num="03" kicker="Index · Stack" title="Tools of the trade.">
      <div className="stack-grid">
        <div>
          <div className="stack-label mono">Main stack</div>
          <div className="chips">{DATA.stackMain.map(s => <StackChip key={s} name={s} />)}</div>
        </div>
        <div>
          <div className="stack-label mono">Experience with</div>
          <div className="chips soft">{DATA.stackOther.map(s => <StackChip key={s} name={s} />)}</div>
        </div>
        <div>
          <div className="stack-label mono">Certifications</div>
          <div className="certs">
            {DATA.certs.map(c => (
              <div className="cert" key={c.code}>
                <div className="cert-badge">
                  <div className="cert-ring" />
                  <span className="serif">{c.badge}</span>
                </div>
                <div className="cert-info">
                  <div className="serif cert-name">{c.name}</div>
                  <div className="mono cert-meta">{c.issuer} · {c.code} · {c.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showMarquee && (
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {full.map((s, i) => <span className="marquee-item" key={i}><span className="serif">{s}</span><span className="marquee-dot">◆</span></span>)}
          </div>
        </div>
      )}
    </Section>
  );
}

/* ---------- PROJECTS ---------- */
function ProjectRow({ p, i, layout }) {
  const [open, setOpen] = useState(false);
  if (layout === "grid") {
    return (
      <article className="proj-card">
        <div className="proj-card-top">
          <span className="mono">{String(i+1).padStart(2,"0")} · {p.year}</span>
          <span className="mono tag">{p.tag}</span>
        </div>
        <h3 className="serif proj-card-title">{p.title}</h3>
        <p className="proj-card-sum">{p.summary}</p>
        <div className="chips tight">{p.stack.slice(0,6).map(s => <span className="chip-xs" key={s}>{s}</span>)}</div>
        <a className="proj-link" href={p.link} target="_blank" rel="noopener">{p.linkLabel}
          <svg width="12" height="12" viewBox="0 0 12 12"><path d="M3 9L9 3M4 3h5v5" stroke="currentColor" strokeWidth="1.4" fill="none"/></svg>
        </a>
      </article>
    );
  }
  return (
    <article className={"proj-row " + (open ? "open" : "")} onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
      <div className="proj-row-main">
        <div className="proj-num mono">{String(i+1).padStart(2,"0")}</div>
        <div className="proj-title-col">
          <h3 className="serif proj-row-title">{p.title}</h3>
          <div className="proj-row-tag mono">{p.tag} · {p.year}</div>
        </div>
        <div className="proj-stack-col">
          {p.stack.slice(0,5).map(s => <span className="chip-xs" key={s}>{s}</span>)}
          {p.stack.length > 5 && <span className="chip-xs soft">+{p.stack.length-5}</span>}
        </div>
        <a className="proj-arrow" href={p.link} target="_blank" rel="noopener" aria-label={p.linkLabel}>
          <svg width="18" height="18" viewBox="0 0 18 18"><path d="M4 14L14 4M6 4h8v8" stroke="currentColor" strokeWidth="1.4" fill="none"/></svg>
        </a>
      </div>
      <div className="proj-row-expand">
        <p className="proj-row-sum">{p.summary}</p>
        <div className="proj-row-foot">
          <div className="chips tight">{p.stack.map(s => <span className="chip-xs" key={s}>{s}</span>)}</div>
          <a className="proj-link" href={p.link} target="_blank" rel="noopener">{p.linkLabel} →</a>
        </div>
      </div>
    </article>
  );
}

function Projects({ layout }) {
  const [filter, setFilter] = useState("all");
  const filters = [
    { id: "all", label: "All" },
    { id: "product", label: "Products" },
    { id: "api", label: "APIs" },
    { id: "ai", label: "Applied AI" },
  ];
  const list = useMemo(() => filter==="all" ? DATA.projects : DATA.projects.filter(p => p.kind===filter), [filter]);
  return (
    <Section id="work" num="01" kicker="Index · Selected work" title="Projects."
      right={
        <div className="filter-row">
          {filters.map(f => (
            <button key={f.id} className={"filter " + (filter===f.id?"on":"")} onClick={()=>setFilter(f.id)}>
              <span className="mono">{f.label}</span>
              <span className="mono count">{f.id==="all"?DATA.projects.length:DATA.projects.filter(p=>p.kind===f.id).length}</span>
            </button>
          ))}
        </div>
      }>
      <div className={"projects " + (layout==="grid"?"proj-grid":"proj-list")}>
        {list.map((p, i) => <ProjectRow key={p.id} p={p} i={i} layout={layout} />)}
      </div>
      <div className="more-projects">
        <span className="mono">More —</span>
        <a className="more-link" href={DATA.contact.github} target="_blank" rel="noopener">
          <span className="serif">github.com/JeffSSC</span>
          <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 11L11 3M5 3h6v6" stroke="currentColor" strokeWidth="1.4" fill="none"/></svg>
        </a>
      </div>
    </Section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [tick, setTick] = useState(0);
  const t = DATA.testimonials[idx];
  const change = (n) => { setIdx(n); setTick(x => x+1); };
  return (
    <Section id="words" num="04" kicker="Index · Words" title="What others say."
      right={
        <div className="quote-nav">
          <button onClick={()=>change((idx-1+DATA.testimonials.length)%DATA.testimonials.length)} aria-label="Previous">
            <svg width="14" height="14" viewBox="0 0 14 14"><path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.4" fill="none"/></svg>
          </button>
          <span className="mono">{String(idx+1).padStart(2,"0")} / {String(DATA.testimonials.length).padStart(2,"0")}</span>
          <button onClick={()=>change((idx+1)%DATA.testimonials.length)} aria-label="Next">
            <svg width="14" height="14" viewBox="0 0 14 14"><path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" fill="none"/></svg>
          </button>
        </div>
      }>
      <figure className="quote" key={tick}>
        <div className="quote-mark serif">“</div>
        <blockquote className="serif quote-text">{t.quote}</blockquote>
        <figcaption className="quote-foot">
          <div className="quote-avatar" aria-hidden="true">{t.name.split(" ").map(s=>s[0]).slice(0,2).join("")}</div>
          <div>
            <div className="serif quote-name">{t.name}</div>
            <div className="mono">{t.role}</div>
          </div>
        </figcaption>
      </figure>
      <div className="quote-dots">
        {DATA.testimonials.map((_, i) => (
          <button key={i} className={"dot-btn " + (i===idx?"on":"")} onClick={()=>change(i)} aria-label={`Quote ${i+1}`} />
        ))}
      </div>
    </Section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  return (
    <Section id="contact" num="05" kicker="Index · Contact" title={<>Let's build<br/><em className="quiet">something together.</em></>}>
      <div className="contact-grid">
        <a className="contact-card" href={DATA.contact.whatsapp} target="_blank" rel="noopener">
          <span className="mono">01 · Fastest</span>
          <span className="serif contact-label">WhatsApp</span>
          <span className="mono contact-sub">+55 47 99115 8071 →</span>
        </a>
        <a className="contact-card" href={`mailto:${DATA.contact.email}`}>
          <span className="mono">02 · Anytime</span>
          <span className="serif contact-label">Email</span>
          <span className="mono contact-sub">{DATA.contact.email} →</span>
        </a>
        <a className="contact-card" href={DATA.contact.linkedin} target="_blank" rel="noopener">
          <span className="mono">03 · Professional</span>
          <span className="serif contact-label">LinkedIn</span>
          <span className="mono contact-sub">/in/jefferson-caires →</span>
        </a>
        <a className="contact-card" href={DATA.contact.github} target="_blank" rel="noopener">
          <span className="mono">04 · Code</span>
          <span className="serif contact-label">GitHub</span>
          <span className="mono contact-sub">/JeffSSC →</span>
        </a>
      </div>
    </Section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-big serif">Jefferson Silva Caires.</div>
      <div className="footer-row">
        <span className="mono">© 2026 · Built with Astro, React & care</span>
        <span className="mono">Designed with Claude Design</span>
        <span className="mono">Last refactor · Apr 2026</span>
        <a className="mono" href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

/* ---------- TWEAKS PANEL ---------- */
function Tweaks({ visible, state, update }) {
  if (!visible) return null;
  return (
    <div className="tweaks">
      <div className="tweaks-head">
        <span className="serif">Tweaks</span>
        <span className="mono">Live</span>
      </div>
      <div className="tweaks-body">
        <label className="tweak-row">
          <span className="mono">Theme</span>
          <div className="seg">
            {["light","dark"].map(v => (
              <button key={v} className={state.theme===v?"on":""} onClick={()=>update({theme:v})}>{v}</button>
            ))}
          </div>
        </label>
        <label className="tweak-row">
          <span className="mono">Accent</span>
          <div className="seg">
            {Object.keys(ACCENT_HUES).map(v => (
              <button key={v} className={state.accent===v?"on":""} onClick={()=>update({accent:v})}>
                <span className="swatch" style={{background:`oklch(0.58 0.14 ${ACCENT_HUES[v]})`}} />
              </button>
            ))}
          </div>
        </label>
        <label className="tweak-row">
          <span className="mono">Projects</span>
          <div className="seg">
            {["list","grid"].map(v => (
              <button key={v} className={state.projectLayout===v?"on":""} onClick={()=>update({projectLayout:v})}>{v}</button>
            ))}
          </div>
        </label>
        <label className="tweak-row">
          <span className="mono">Marquee</span>
          <div className="seg">
            <button className={state.showMarquee?"on":""} onClick={()=>update({showMarquee:true})}>on</button>
            <button className={!state.showMarquee?"on":""} onClick={()=>update({showMarquee:false})}>off</button>
          </div>
        </label>
        <label className="tweak-row col">
          <span className="mono">Hero label</span>
          <input className="tweak-input mono" value={state.heroLabel} onChange={e=>update({heroLabel:e.target.value})} />
        </label>
      </div>
    </div>
  );
}

/* ---------- APP ---------- */
function App() {
  const [state, setState] = useState(() => ({ ...(window.__TWEAKS || {}) }));
  const [tweaksOn, setTweaksOn] = useState(false);
  const [lang, setLang] = useState("en");

  const update = (patch) => {
    setState(s => {
      const next = { ...s, ...patch };
      try { window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*"); } catch(e){}
      return next;
    });
  };

  useEffect(() => {
    const on = (ev) => {
      if (!ev.data || typeof ev.data !== "object") return;
      if (ev.data.type === "__activate_edit_mode") setTweaksOn(true);
      if (ev.data.type === "__deactivate_edit_mode") setTweaksOn(false);
    };
    window.addEventListener("message", on);
    try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch(e){}
    return () => window.removeEventListener("message", on);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = state.theme;
    const h = ACCENT_HUES[state.accent] || ACCENT_HUES.green;
    document.documentElement.style.setProperty("--accent", `oklch(${state.theme==="dark"?"0.75":"0.58"} 0.14 ${h})`);
    document.documentElement.style.setProperty("--accent-soft", `oklch(${state.theme==="dark"?"0.75":"0.58"} 0.14 ${h} / 0.10)`);
  }, [state.theme, state.accent]);

  return (
    <>
      <Nav theme={state.theme} setTheme={(t)=>update({theme:t})} lang={lang} setLang={setLang} />
      <main className="container">
        <Hero label={state.heroLabel} />
        <Rule />
        <About />
        <Rule />
        <Projects layout={state.projectLayout} />
        <Rule />
        <Experience />
        <Rule />
        <Stack showMarquee={state.showMarquee} />
        <Rule />
        <Testimonials />
        <Rule />
        <Contact />
        <Footer />
      </main>
      <Tweaks visible={tweaksOn} state={state} update={update} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
