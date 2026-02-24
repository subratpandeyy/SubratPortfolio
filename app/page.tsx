"use client";
import { useState, useEffect, useRef } from "react";

const IDENTITY = {
  name: "Subrat Pandey",
  role: "Software Engineer Student",
  tagline: "Building systems that\nscale quietly.",
  note: "Code should feel invisible.",
  availability: "Open to work",
};

const PROJECTS = [
  { id: "01", name: "Flux",   desc: "Real-time data pipeline for distributed event streams.",    stack: ["Go","Kafka","ClickHouse"],        url: "#", year: "2024" },
{ id: "02", name: "Seam",   desc: "Design-token sync between Figma and production CSS.",       stack: ["TypeScript","Node","PostCSS"],     url: "#", year: "2024" },
{ id: "03", name: "Orbit",  desc: "Zero-config observability layer for Next.js applications.", stack: ["React","OpenTelemetry","Grafana"], url: "#", year: "2023" },
{ id: "04", name: "Marrow", desc: "Headless CMS with version-controlled content primitives.",  stack: ["Rust","SQLite","GraphQL"],         url: "#", year: "2023" },
];

const WRITING = [
  { title: "On invisible architecture", date: "Jan 2025", read: "6 min", url: "#" },
{ title: "The cost of abstraction",   date: "Nov 2024", read: "4 min", url: "#" },
{ title: "Designing for deletion",    date: "Sep 2024", read: "8 min", url: "#" },
];

const PHILOSOPHY = [
  "Systems should be boring by design.",
"Complexity is a symptom, not a feature.",
"The best interface is the one you forget.",
"Optimize for the person who reads your code at 2am.",
"Silence is a valid API response.",
];

const CONTACT = {
  email:   "12subratpandey@gmail.com",
  github:  "github.com/subratpandeyy",
  twitter: "@12subratpandey",

};

const NAV_ITEMS = [
  { id: "work",       label: "Work" },
{ id: "writing",    label: "Writing" },
{ id: "philosophy", label: "Philosophy" },
{ id: "contact",    label: "Contact" },
];

const STYLE = `
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Fraunces:ital,opsz,wght@0,9..144,200;0,9..144,300;0,9..144,400;1,9..144,200;1,9..144,300&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:             #090909;
  --border:         #1d1d1d;
  --border-soft:    #141414;
  --text-primary:   #e5e5df;
  --text-secondary: #5a5a54;
  --text-tertiary:  #2e2e2c;
  --accent:         #c8a96e;
  --accent-dim:     rgba(200,169,110,0.08);
  --font-serif:     'Fraunces', Georgia, serif;
  --font-mono:      'DM Mono', 'Courier New', monospace;
  --ease:           cubic-bezier(0.4,0,0.2,1);
  --t1:             150ms;
  --t2:             360ms;
}

html, body, #root { height: 100%; }

body {
  background: var(--bg);
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-size: 12px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *     SHELL  —  asymmetric 240 / 1fr split
 *  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
.shell {
  display: grid;
  grid-template-columns: 240px 1fr;
  height: 100vh;
  overflow: hidden;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *     LEFT COLUMN
 *  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
.left {
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  padding: 44px 28px 28px;
  position: relative;
  overflow: hidden;
}

/* Faint horizontal ruled lines — structural texture, kills the dead void */
.left::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    180deg,
    transparent 0px,
    transparent 23px,
    rgba(255,255,255,0.011) 23px,
                                              rgba(255,255,255,0.011) 24px
  );
  pointer-events: none;
  z-index: 0;
}

/* Accent halo, top-left */
.left::before {
  content: '';
  position: absolute;
  top: -80px; left: -80px;
  width: 280px; height: 280px;
  background: radial-gradient(ellipse at center, rgba(200,169,110,0.05) 0%, transparent 68%);
  pointer-events: none;
  z-index: 0;
}

.identity {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

/* Large display name — typographic anchor, not a header */
.name {
  font-family: var(--font-serif);
  font-size: 38px;
  font-weight: 200;
  letter-spacing: -1.4px;
  color: var(--text-primary);
  line-height: 0.92;
  margin-bottom: 11px;
}

.role {
  font-size: 8.5px;
  color: var(--text-secondary);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 26px;
}

/* Hairline rule — replaces raw gap between identity and tagline */
.left-rule {
  height: 1px;
  background: linear-gradient(90deg, var(--border) 60%, transparent 100%);
  margin-bottom: 22px;
  flex-shrink: 0;
}

.tagline {
  font-family: var(--font-serif);
  font-size: 15px;
  font-weight: 200;
  font-style: italic;
  color: var(--text-primary);
  line-height: 1.52;
  white-space: pre-line;
  margin-bottom: 7px;
}

.tagline-note {
  font-size: 9.5px;
  color: var(--accent);
  opacity: 0.8;
  letter-spacing: 0.01em;
  margin-bottom: 34px;
}

/* NAV — left-border active indicator, index number at right */
.nav {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border-soft);
  margin-bottom: auto;
}

.nav-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 8px 8px 12px;
  cursor: pointer;
  background: transparent;
  border: none;
  border-left: 2px solid transparent;
  border-bottom: 1px solid var(--border-soft);
  width: 100%;
  text-align: left;
  color: var(--text-secondary);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.03em;
  transition:
  color         var(--t1) var(--ease),
  border-left-color var(--t1) var(--ease),
  background    var(--t1) var(--ease);
}

.nav-item:hover {
  color: var(--text-primary);
  background: rgba(255,255,255,0.016);
}

.nav-item.active {
  color: var(--text-primary);
  border-left-color: var(--accent);
  background: var(--accent-dim);
}

.nav-index {
  font-size: 8.5px;
  color: var(--text-tertiary);
  letter-spacing: 0.08em;
  transition: color var(--t1) var(--ease);
  flex-shrink: 0;
}

.nav-item.active .nav-index { color: var(--accent); opacity: 0.5; }

/* Footer cluster */
.left-footer {
  position: relative;
  z-index: 1;
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.avail {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 9.5px;
  color: var(--text-secondary);
  letter-spacing: 0.02em;
}

.avail-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: #4ade80;
  flex-shrink: 0;
  animation: glow 2.6s ease-in-out infinite;
}

@keyframes glow {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}

.kbd-hint {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 9px;
  color: var(--text-tertiary);
  letter-spacing: 0.04em;
}

.kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 13px; height: 13px;
  border: 1px solid var(--border);
  border-radius: 2px;
  font-size: 7.5px;
  color: var(--text-tertiary);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *     RIGHT COLUMN
 *  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
.right {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Compact header bar */
.right-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  padding: 0 56px;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}

.section-label {
  font-size: 8.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-tertiary);
}

.section-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 8.5px;
  color: var(--text-tertiary);
  letter-spacing: 0.06em;
}

.meta-pipe {
  width: 1px; height: 10px;
  background: var(--border);
}

/* Content: asymmetric left offset for editorial tension */
.content-area {
  flex: 1;
  overflow-y: auto;
  padding: 48px 56px 48px 64px;
  scrollbar-width: none;
  position: relative;
}
.content-area::-webkit-scrollbar { display: none; }

/* Fade-out bottom shadow hinting scroll */
.content-area::after {
  content: '';
  position: sticky;
  bottom: 0;
  display: block;
  height: 48px;
  margin-top: -48px;
  background: linear-gradient(transparent, var(--bg));
  pointer-events: none;
}

/* Panel entrance */
.panel { animation: rise var(--t2) var(--ease) both; }

@keyframes rise {
  from { opacity: 0; transform: translateY(9px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *     WORK PANEL
 *  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
.project-list { display: flex; flex-direction: column; }

.project-row {
  display: grid;
  grid-template-columns: 26px 1fr;
  gap: 0 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--border-soft);
  cursor: pointer;
  text-decoration: none;
  position: relative;
}

.project-row:first-child { border-top: 1px solid var(--border-soft); }

/* Accent edge on hover — replaces bulky highlight */
.project-row::before {
  content: '';
  position: absolute;
  left: -64px; top: 0; bottom: 0;
  width: 2px;
  background: var(--accent);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform var(--t1) var(--ease);
}

.project-row:hover::before { transform: scaleY(1); }
.project-row:hover .project-name { color: var(--text-primary); }
.project-row:hover .project-arrow { opacity: 1; transform: translate(0, 0); }
.project-row:hover .tag { border-color: #222; color: var(--text-secondary); }

.project-num {
  font-size: 8.5px;
  color: var(--text-tertiary);
  letter-spacing: 0.06em;
  padding-top: 6px;
  text-align: right;
}

.project-body { min-width: 0; }

/* Name + year + arrow on single baseline row */
.project-head {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 4px;
}

.project-name {
  font-family: var(--font-serif);
  font-size: 23px;
  font-weight: 300;
  color: #cacac4;
  letter-spacing: -0.5px;
  line-height: 1.1;
  transition: color var(--t1) var(--ease);
}

.project-year {
  font-size: 8.5px;
  color: var(--text-tertiary);
  letter-spacing: 0.06em;
  flex-shrink: 0;
}

.project-arrow {
  font-size: 12px;
  color: var(--accent);
  opacity: 0;
  transform: translate(-5px, 2px);
  transition: opacity var(--t1) var(--ease), transform var(--t1) var(--ease);
  margin-left: auto;
  flex-shrink: 0;
}

.project-desc {
  font-size: 11px;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 8px;
}

.project-stack { display: flex; gap: 5px; flex-wrap: wrap; }

.tag {
  font-size: 8.5px;
  color: var(--text-tertiary);
  border: 1px solid var(--border);
  border-radius: 2px;
  padding: 1px 5px;
  letter-spacing: 0.05em;
  transition: color var(--t1) var(--ease), border-color var(--t1) var(--ease);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *     WRITING PANEL
 *     date | title | read  — three-column grid
 *  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
.writing-list { display: flex; flex-direction: column; }

.writing-row {
  display: grid;
  grid-template-columns: 68px 1fr 44px;
  align-items: center;
  gap: 20px;
  padding: 15px 0;
  border-bottom: 1px solid var(--border-soft);
  cursor: pointer;
  text-decoration: none;
}

.writing-row:first-child { border-top: 1px solid var(--border-soft); }
.writing-row:hover .writing-title { color: var(--accent); }
.writing-row:hover .writing-date  { color: var(--text-secondary); }

.writing-date {
  font-size: 8.5px;
  color: var(--text-tertiary);
  letter-spacing: 0.06em;
  white-space: nowrap;
  transition: color var(--t1) var(--ease);
}

.writing-title {
  font-family: var(--font-serif);
  font-size: 19px;
  font-weight: 300;
  font-style: italic;
  color: #c2c2bc;
  letter-spacing: -0.3px;
  line-height: 1.25;
  transition: color var(--t1) var(--ease);
}

.writing-read {
  font-size: 8.5px;
  color: var(--text-tertiary);
  letter-spacing: 0.04em;
  text-align: right;
  white-space: nowrap;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *     PHILOSOPHY PANEL
 *     Large display type fills vertical space
 *  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
.philosophy-list { display: flex; flex-direction: column; }

.philosophy-item {
  display: grid;
  grid-template-columns: 26px 1fr;
  gap: 0 16px;
  align-items: baseline;
  padding: 18px 0;
  border-bottom: 1px solid var(--border-soft);
}

.philosophy-item:first-child { border-top: 1px solid var(--border-soft); }

.philosophy-num {
  font-size: 8.5px;
  color: var(--text-tertiary);
  letter-spacing: 0.06em;
  text-align: right;
  padding-top: 5px;
}

/* Display-size type — words own the space */
.philosophy-text {
  font-family: var(--font-serif);
  font-size: clamp(17px, 2vw, 24px);
  font-weight: 200;
  color: var(--text-primary);
  line-height: 1.32;
  letter-spacing: -0.4px;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *     CONTACT PANEL
 *  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
.contact-intro {
  font-family: var(--font-serif);
  font-size: clamp(24px, 2.8vw, 34px);
  font-weight: 200;
  font-style: italic;
  color: var(--text-primary);
  letter-spacing: -0.6px;
  line-height: 1.25;
  margin-bottom: 36px;
  max-width: 440px;
}

/* Pure border grid — no fill, no radius, no card feel */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid var(--border);
  border-left: 1px solid var(--border);
  max-width: 520px;
}

.contact-cell {
  padding: 18px 20px;
  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

/* Accent wash on hover — contained within cell */
.contact-cell::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--accent-dim);
  opacity: 0;
  transition: opacity var(--t1) var(--ease);
  pointer-events: none;
}

.contact-cell:hover::after { opacity: 1; }
.contact-cell:hover .contact-arrow { opacity: 1; transform: translate(0,0); }

.contact-label {
  font-size: 8px;
  color: var(--text-tertiary);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.contact-value {
  font-size: 11.5px;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

.contact-arrow {
  position: absolute;
  top: 14px; right: 14px;
  font-size: 10px;
  color: var(--accent);
  opacity: 0;
  transform: translate(-4px, 4px);
  transition: opacity var(--t1) var(--ease), transform var(--t1) var(--ease);
  z-index: 1;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *     MOBILE — reinterpreted layout
 *  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
@media (max-width: 680px) {
  body    { overflow: auto; }
  .shell  { grid-template-columns: 1fr; height: auto; min-height: 100vh; }

  .left {
    border-right: none;
    border-bottom: 1px solid var(--border);
    padding: 28px 20px 0;
  }

  /* Horizontal scrolling tab bar */
  .nav {
    flex-direction: row;
    border-top: none;
    overflow-x: auto;
    scrollbar-width: none;
    margin: 20px -20px 0;
    padding: 0 20px;
    border-top: 1px solid var(--border);
    border-bottom: none;
  }
  .nav::-webkit-scrollbar { display: none; }

  .nav-item {
    border-left: none;
    border-bottom: none;
    border-top: 2px solid transparent;
    white-space: nowrap;
    flex: none;
    padding: 10px 12px;
  }

  .nav-item.active {
    border-top-color: var(--accent);
    border-left-color: transparent;
    background: transparent;
  }

  .left-footer { display: none; }

  .right { overflow: visible; }
  .right-header { padding: 0 20px; height: 40px; }
  .content-area { padding: 28px 20px; overflow: visible; }
  .content-area::after { display: none; }
  .project-row::before { display: none; }

  .writing-row { grid-template-columns: 56px 1fr; }
  .writing-read { display: none; }

  .contact-grid { grid-template-columns: 1fr; max-width: 100%; }
}
`;

function WorkPanel() {
  return (
    <div className="panel">
    <div className="project-list">
    {PROJECTS.map(p => (
      <a key={p.id} href={p.url} className="project-row">
      <span className="project-num">{p.id}</span>
      <div className="project-body">
      <div className="project-head">
      <span className="project-name">{p.name}</span>
      <span className="project-year">{p.year}</span>
      <span className="project-arrow">↗</span>
      </div>
      <div className="project-desc">{p.desc}</div>
      <div className="project-stack">
      {p.stack.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
      </div>
      </a>
    ))}
    </div>
    </div>
  );
}

function WritingPanel() {
  return (
    <div className="panel">
    <div className="writing-list">
    {WRITING.map(w => (
      <a key={w.title} href={w.url} className="writing-row">
      <span className="writing-date">{w.date}</span>
      <span className="writing-title">{w.title}</span>
      <span className="writing-read">{w.read}</span>
      </a>
    ))}
    </div>
    </div>
  );
}

function PhilosophyPanel() {
  return (
    <div className="panel">
    <div className="philosophy-list">
    {PHILOSOPHY.map((p, i) => (
      <div key={i} className="philosophy-item">
      <span className="philosophy-num">0{i + 1}</span>
      <span className="philosophy-text">{p}</span>
      </div>
    ))}
    </div>
    </div>
  );
}

function ContactPanel() {
  const entries = [
    { label: "Email",    value: CONTACT.email,   href: `mailto:${CONTACT.email}` },
    { label: "GitHub",   value: CONTACT.github,  href: `https://${CONTACT.github}` },
    { label: "Twitter",  value: CONTACT.twitter, href: `https://twitter.com/alexriven` },
    { label: "Schedule", value: CONTACT.cal,     href: `https://${CONTACT.cal}` },
  ];
  return (
    <div className="panel">
    <p className="contact-intro">Let's build something<br />worth forgetting.</p>
    <div className="contact-grid">
    {entries.map(e => (
      <a key={e.label} href={e.href} className="contact-cell">
      <span className="contact-label">{e.label}</span>
      <span className="contact-value">{e.value}</span>
      <span className="contact-arrow">↗</span>
      </a>
    ))}
    </div>
    </div>
  );
}

const PANELS = {
  work:       { label: "Selected Work", meta: `${PROJECTS.length} projects`,     Component: WorkPanel },
  writing:    { label: "Writing",       meta: `${WRITING.length} essays`,        Component: WritingPanel },
  philosophy: { label: "Philosophy",    meta: `${PHILOSOPHY.length} principles`, Component: PhilosophyPanel },
  contact:    { label: "Contact",       meta: "Open",                             Component: ContactPanel },
};

export default function Portfolio() {
  const [active, setActive]     = useState("work");
  const [panelKey, setPanelKey] = useState(0);
  const activeRef               = useRef("work");

  function navigate(id) {
    if (id === activeRef.current) return;
    activeRef.current = id;
    setActive(id);
    setPanelKey(k => k + 1);
  }

  useEffect(() => {
    const dirs = { ArrowDown: 1, j: 1, ArrowUp: -1, k: -1 };
    function onKey(e) {
      if (!(e.key in dirs)) return;
      e.preventDefault();
      const idx  = NAV_ITEMS.findIndex(n => n.id === activeRef.current);
      const next = (idx + dirs[e.key] + NAV_ITEMS.length) % NAV_ITEMS.length;
      navigate(NAV_ITEMS[next].id);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const { label, meta, Component } = PANELS[active];

  return (
    <>
    <style>{STYLE}</style>
    <div className="shell">

    <aside className="left">
    <div className="identity">
    <h1 className="name">{IDENTITY.name}</h1>
    <p className="role">{IDENTITY.role}</p>
    <div className="left-rule" />
    <p className="tagline">{IDENTITY.tagline}</p>
    <p className="tagline-note">{IDENTITY.note}</p>
    <nav className="nav">
    {NAV_ITEMS.map((item, i) => (
      <button
      key={item.id}
      className={`nav-item${active === item.id ? " active" : ""}`}
      onClick={() => navigate(item.id)}
      >
      {item.label}
      <span className="nav-index">0{i + 1}</span>
      </button>
    ))}
    </nav>
    </div>
    <div className="left-footer">
    <div className="avail">
    <span className="avail-dot" />
    {IDENTITY.availability}
    </div>
    <div className="kbd-hint">
    <span className="kbd">↑</span>
    <span className="kbd">↓</span>
    to navigate
    </div>
    </div>
    </aside>

    <main className="right">
    <header className="right-header">
    <span className="section-label">{label}</span>
    <div className="section-meta">
    <span className="meta-pipe" />
    <span>{meta}</span>
    </div>
    </header>
    <div className="content-area">
    <Component key={panelKey} />
    </div>
    </main>

    </div>
    </>
  );
}
