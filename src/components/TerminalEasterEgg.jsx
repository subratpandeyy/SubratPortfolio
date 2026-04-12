import { useState, useEffect, useRef } from "react";

const COMMANDS = {
  whoami: {
    output: [
      "subrat pandey",
      "├── role     : Web Development Lead @ GDG On Campus GIETU",
      "├── type     : Full Stack Developer",
      "├── location : Jharkhand, India",
      "└── status   : open to opportunities ✦",
    ],
  },
  "ls projects": {
    output: [
      "drwxr-xr-x  projects/",
      "├── [live]  project-alpha      → React + Node.js",
      "├── [live]  project-beta       → Next.js + PostgreSQL",
      "├── [wip]   project-gamma      → Fullstack SaaS",
      "└── [oss]   open-contributions → see github",
    ],
  },
  skills: {
    output: [
      "INSTALLED PACKAGES:",
      "  next.js",
      "  react",
      "  node.js",
      "  postgresql",
      "  tailwind",
      "  mongodb",
      "  git",
      "  linux",
    ],
  },
  "cat contact.txt": {
    output: [
      "# contact info",
      "",
      "email    →  12subratpandey@gmail.com",
      "github   →  github.com/subratpandeyy",
      "linkedin →  linkedin.com/in/contact-subrat-pandey",
      "twitter  →  @12subratpandey",
    ],
  },
  blog: {
    output: [
      "RECENT ARTICLES:",
      "  [2026-04-04]  Why Learning from Documentation Beats Watching Tutorials",
      "  [2026-03-25]  Encountering the Problem",
      "  run 'open blog' to visit →",
    ],
  },
  help: {
    output: [
      "AVAILABLE COMMANDS:",
      "  whoami          →  about me",
      "  ls projects     →  my work",
      "  skills          →  tech stack",
      "  cat contact.txt →  get in touch",
      "  blog            →  my articles",
      "  clear           →  clear terminal",
      "  exit            →  close terminal",
    ],
  },
  clear: { output: [], clear: true },
  exit: { output: [], exit: true },
};

const BOOT_LINES = [
  "subrat-os v2.4.1 — personal terminal",
  'type "help" for available commands',
  "─────────────────────────────────────",
];

const PROMPT = "visitor@subrat-os:~$";

export default function TerminalEasterEgg() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const [booted, setBooted] = useState(false);
  const [bootLines, setBootLines] = useState([]);
  const [glitch, setGlitch] = useState(false);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "`") {
        e.preventDefault();
        setIsOpen((o) => !o);
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (isOpen && !booted) {
      let i = 0;
      const tick = setInterval(() => {
        setBootLines((prev) => [...prev, BOOT_LINES[i]]);
        i++;
        if (i >= BOOT_LINES.length) {
          clearInterval(tick);
          setBooted(true);
        }
      }, 180);
      return () => clearInterval(tick);
    }
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 50);
  }, [isOpen, booted]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, bootLines, isOpen]);

  const triggerGlitch = () => {
    setGlitch(true);
    setTimeout(() => setGlitch(false), 400);
  };

  const runCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    setCmdHistory((h) => [cmd, ...h]);
    setCmdIndex(-1);

    if (COMMANDS[cmd]) {
      const def = COMMANDS[cmd];
      if (def.exit) { setIsOpen(false); return; }
      if (def.clear) { setHistory([]); return; }
      setHistory((h) => [
        ...h,
        { type: "input", text: cmd },
        ...def.output.map((line) => ({ type: "output", text: line })),
      ]);
    } else {
      triggerGlitch();
      setHistory((h) => [
        ...h,
        { type: "input", text: cmd },
        { type: "error", text: `command not found: ${cmd}` },
        { type: "error", text: 'try "help" for a list of commands' },
      ]);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(cmdIndex + 1, cmdHistory.length - 1);
      setCmdIndex(next);
      setInput(cmdHistory[next] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(cmdIndex - 1, -1);
      setCmdIndex(next);
      setInput(cmdHistory[next] || "");
    }
  };

  const lineColor = (type) => {
    if (type === "error") return "#ff6b6b";
    if (type === "input") return "#a8ff78";
    return "#c9d1d9";
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');

        .term-wrap {
          font-family: 'JetBrains Mono', monospace;
          background: #0d1117;
          border: 1px solid #30363d;
          border-radius: 12px;
          overflow: hidden;
          width: 100%;
          max-width: 620px;
          box-shadow: 0 0 0 1px #21262d, 0 8px 32px rgba(0,0,0,0.6);
          position: relative;
        }

       

        .term-wrap.glitch {
          animation: glitch 0.4s steps(2);
        }

        @keyframes glitch {
          0%   { transform: translate(0); filter: none; }
          20%  { transform: translate(-2px, 1px); filter: hue-rotate(90deg); }
          40%  { transform: translate(2px, -1px); filter: hue-rotate(-90deg); }
          60%  { transform: translate(-1px, 2px); filter: brightness(1.3); }
          80%  { transform: translate(1px, -2px); filter: none; }
          100% { transform: translate(0); filter: none; }
        }

        .term-titlebar {
          background: #161b22;
          border-bottom: 1px solid #21262d;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .dot { width: 12px; height: 12px; border-radius: 50%; cursor: pointer; }
        .dot-red    { background: #ff5f57; }
        .dot-yellow { background: #ffbd2e; }
        .dot-green  { background: #28c840; }

        .term-title {
          font-size: 11px;
          color: #6e7681;
          margin-left: auto;
          margin-right: auto;
          letter-spacing: 0.05em;
        }

        .term-body {
          padding: 14px 16px;
          min-height: 280px;
          max-height: 420px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #30363d transparent;
        }
       

        .term-body::-webkit-scrollbar { width: 4px; }
        .term-body::-webkit-scrollbar-thumb { background: #30363d; border-radius: 4px; }

        .boot-line {
          font-size: 12px;
          color: #6e7681;
          line-height: 1.8;
          animation: fadein 0.2s ease;
        }

        @keyframes fadein { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }

        .history-line {
          font-size: 12.5px;
          line-height: 1.85;
          white-space: pre;
          animation: fadein 0.15s ease;
        }

        .input-row {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 4px 0 2px;
        }

        .prompt-text {
          font-size: 12px;
          color: #a8ff78;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .term-input {
          background: transparent;
          border: none;
          outline: none;
          color: #e6edf3;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          caret-color: #a8ff78;
          width: 100%;
        }

        .hint-bar {
          background: #161b22;
          border-top: 1px solid #21262d;
          padding: 7px 16px;
          font-size: 11px;
          color: #6e7681;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .hint-key {
          background: #21262d;
          border: 1px solid #30363d;
          border-radius: 4px;
          padding: 1px 6px;
          font-size: 10px;
          color: #8b949e;
        }

        .closed-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: #6e7681;
          background: #0d1117;
          border: 1px solid #30363d;
          border-radius: 8px;
          padding: 8px 14px;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
          user-select: none;
        }

        .closed-badge:hover { border-color: #a8ff78; color: #a8ff78; }

        .cursor-blink {
          display: inline-block;
          width: 7px;
          height: 13px;
          background: #a8ff78;
          vertical-align: middle;
          margin-left: 1px;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink { 50% { opacity: 0; } }

        .scan-line {
          pointer-events: none;
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 3px,
            rgba(0,0,0,0.04) 3px,
            rgba(0,0,0,0.04) 4px
          );
          border-radius: 12px;
        }
      `}</style>

      {!isOpen ? (
        <div
          className="closed-badge"
          onClick={() => setIsOpen(true)}
          title="Open terminal"
        >
          <span style={{ color: "#a8ff78" }}>{">"}_</span>
          <span>open terminal</span>
          <span className="hint-key">ctrl + `</span>
        </div>
      ) : (
        <div className={`term-wrap${glitch ? " glitch" : ""}`}>
          <div className="scan-line" />

          <div className="term-titlebar">
            <div className="dot dot-red" onClick={() => setIsOpen(false)} title="Close" /> 
            <span className="term-title">subrat-os — terminal</span>
          </div>

          <div className="term-body" onClick={() => inputRef.current?.focus()}>
            {bootLines.map((line, i) => (
              <div key={`boot-${i}`} className="boot-line">{line}</div>
            ))}

            {booted && history.map((item, i) => (
              <div
                key={i}
                className="history-line"
                style={{ color: lineColor(item.type) }}
              >
                {item.type === "input"
                  ? <><span style={{ color: "#a8ff78" }}>{PROMPT} </span>{item.text}</>
                  : item.text
                }
              </div>
            ))}

            {booted && (
              <div className="input-row">
                <span className="prompt-text">{PROMPT}</span>
                <input
                  ref={inputRef}
                  className="term-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  autoComplete="off"
                  spellCheck={false}
                  aria-label="Terminal input"
                />
                <span className="cursor-blink" />
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <div className="hint-bar">
            <span>↑↓ command history</span>
            <span>
              <span className="hint-key">esc</span> or type <span className="hint-key">exit</span> to close
            </span>
          </div>
        </div>
      )}
    </>
  );
}
