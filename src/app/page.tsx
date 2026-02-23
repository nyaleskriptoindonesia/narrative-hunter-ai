"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import BackgroundParticles from "@/components/BackgroundParticles";
import AnimatedGraph from "@/components/AnimatedGraph";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans">
      <BackgroundParticles />
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20">
        <AnimatedGraph />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl sm:text-6xl font-semibold tracking-tight"
        >
          Detect the Narrative Before It Explodes.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-6 max-w-3xl text-center text-lg sm:text-xl text-zinc-300"
        >
          An autonomous AI agent monitoring X, Telegram, and GitHub to identify emerging crypto narratives 24–72 hours before market breakout.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a href="#launch" className="button-primary text-white rounded-full px-6 py-3 glass neon-border">
            Launch App
          </a>
          <a href="#signals" className="rounded-full px-6 py-3 glass border text-white">
            View Live Signals
          </a>
        </motion.div>
      </section>

      <section id="problem" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto glass rounded-2xl p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">The Market Moves on Narrative.</h2>
          <p className="mt-4 text-zinc-300">
            Narratives start on social platforms. Developer activity follows. Liquidity flows next. Price reacts last.
          </p>
          <div className="mt-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {["Social", "Dev Activity", "Liquidity", "Price Explosion"].map((label, idx) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="glass rounded-xl p-4 text-center border"
                >
                  <div className="text-lg font-medium">{label}</div>
                  <div className="mt-3 h-2 w-full bg-zinc-700 rounded">
                    <motion.div
                      className="h-2 rounded"
                      style={{ background: "linear-gradient(90deg, var(--accent-purple), var(--accent-neon))" }}
                      initial={{ width: "10%" }}
                      whileInView={{ width: `${30 + idx * 20}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold">How It Works</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Social Intelligence Layer", icon: "/globe.svg" },
              { title: "Developer Momentum Engine", icon: "/window.svg" },
              { title: "AI Narrative Scoring System", icon: "/file.svg" },
            ].map((c) => (
              <motion.div
                key={c.title}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="glass rounded-2xl p-6 border"
              >
                <div className="flex items-center gap-3">
                  <Image src={c.icon} alt={c.title} width={28} height={28} />
                  <div className="text-lg font-medium">{c.title}</div>
                </div>
                <div className="mt-6 h-24 accent-gradient rounded-xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="signals" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto glass rounded-2xl p-8 border">
          <h2 className="text-2xl sm:text-3xl font-semibold">Live Dashboard Preview</h2>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 glass rounded-xl p-6 border">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { k: "Narrative Score", v: "86/100" },
                  { k: "Growth Accel.", v: "+24%" },
                  { k: "Developer Index", v: "172" },
                  { k: "Mentions (24h)", v: "3.2k" },
                ].map((m) => (
                  <div key={m.k} className="rounded-lg p-4 border neon-border">
                    <div className="text-sm text-zinc-400">{m.k}</div>
                    <div className="mt-1 text-xl">{m.v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 h-56 rounded-xl border neon-border">
                <AnimatedGraph />
              </div>
            </div>
            <div className="glass rounded-xl p-6 border">
              <div className="grid grid-cols-6 gap-1">
                {Array.from({ length: 72 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-5 rounded"
                    style={{
                      backgroundColor: `hsl(${200 + (i % 6) * 15} 100% ${40 + ((i % 5) * 8)}%)`,
                      opacity: 0.7,
                    }}
                  />
                ))}
              </div>
              <div className="mt-4 text-sm text-zinc-400">Heatmap</div>
            </div>
          </div>
        </div>
      </section>

      <section id="token" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold">Token Utility</h2>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="glass rounded-2xl p-6 border">
              <div className="grid grid-cols-2 gap-4">
                {["Unlock premium signals", "API access", "Governance", "Staking"].map((u) => (
                  <div key={u} className="rounded-xl p-4 border neon-border">
                    <div className="text-lg font-medium">$HUNT</div>
                    <div className="text-zinc-300">{u}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-6 border flex items-center justify-center">
              <svg width="280" height="280" viewBox="0 0 280 280">
                <defs>
                  <linearGradient id="pie" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00e5ff" />
                    <stop offset="100%" stopColor="#3a0c63" />
                  </linearGradient>
                </defs>
                <circle cx="140" cy="140" r="100" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="20" />
                <circle cx="140" cy="140" r="100" fill="none" stroke="url(#pie)" strokeWidth="20" strokeDasharray="240 100 180 120" strokeDashoffset="0" />
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="18" fill="#e6e6f0">
                  Tokenomics
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto glass rounded-2xl p-8 border">
          <h2 className="text-2xl sm:text-3xl font-semibold">Roadmap</h2>
          <div className="mt-8 space-y-6">
            {[
              { phase: "Phase 1 – MVP", desc: "Foundational signal pipelines, prototype scoring." },
              { phase: "Phase 2 – AI Expansion", desc: "Advanced contextual AI, multi-source fusion." },
              { phase: "Phase 3 – Autonomous Alpha Network", desc: "Agent collaboration and autonomous signal routing." },
            ].map((r, idx) => (
              <motion.div
                key={r.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex items-center gap-4"
              >
                <div className="h-2 w-2 rounded-full" style={{ background: "linear-gradient(90deg, var(--accent-purple), var(--accent-neon))" }} />
                <div>
                  <div className="text-lg font-medium">{r.phase}</div>
                  <div className="text-zinc-300">{r.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between glass rounded-2xl p-6 border">
          <div className="text-xl font-semibold">Narrative Hunter AI</div>
          <div className="flex gap-4 mt-4 sm:mt-0">
            {[
              { label: "Whitepaper", href: "#" },
              { label: "Twitter", href: "#" },
              { label: "Telegram", href: "#" },
              { label: "GitHub", href: "#" },
              { label: "Launch App", href: "#launch" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="px-3 py-2 rounded-lg border hover:opacity-90">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
