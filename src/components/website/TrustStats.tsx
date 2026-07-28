'use client';

import { type ReactNode } from "react";
import { Users, Trophy, Video, GraduationCap, Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { stats } from "../../data/siteData";

// ─── Card Config ──────────────────────────────────────────────────────────────
const cardConfigs = [
  {
    gradient: "linear-gradient(135deg, #1a2e6c 0%, #2d4a9e 100%)",
    iconBg: "linear-gradient(135deg, #2d4a9e 0%, #4a6fd4 100%)",
    glow: "rgba(26,46,108,0.35)",
    shimmer: "rgba(77,109,212,0.3)",
    accent: "#4a6fd4",
    lightBg: "rgba(26,46,108,0.06)",
    border: "rgba(26,46,108,0.15)",
  },
  {
    gradient: "linear-gradient(135deg, #c0202a 0%, #e8404c 100%)",
    iconBg: "linear-gradient(135deg, #e8404c 0%, #f06070 100%)",
    glow: "rgba(192,32,42,0.35)",
    shimmer: "rgba(232,64,76,0.3)",
    accent: "#e8404c",
    lightBg: "rgba(192,32,42,0.06)",
    border: "rgba(192,32,42,0.15)",
  },
  {
    gradient: "linear-gradient(135deg, #0f172a 0%, #1a2e6c 100%)",
    iconBg: "linear-gradient(135deg, #1a2e6c 0%, #c0202a 100%)",
    glow: "rgba(15,23,42,0.35)",
    shimmer: "rgba(26,46,108,0.3)",
    accent: "#1a2e6c",
    lightBg: "rgba(15,23,42,0.06)",
    border: "rgba(15,23,42,0.15)",
  },
  {
    gradient: "linear-gradient(135deg, #b45309 0%, #d97706 100%)",
    iconBg: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
    glow: "rgba(180,83,9,0.35)",
    shimmer: "rgba(245,158,11,0.3)",
    accent: "#f59e0b",
    lightBg: "rgba(180,83,9,0.06)",
    border: "rgba(180,83,9,0.15)",
  },
];

const iconMap: Record<string, ReactNode> = {
  Users: <Users className="w-6 h-6 text-white drop-shadow-md" />,
  Trophy: <Trophy className="w-6 h-6 text-white drop-shadow-md" />,
  Youtube: <Video className="w-6 h-6 text-white drop-shadow-md" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-white drop-shadow-md" />,
};

// ─── Animated Counter ─────────────────────────────────────────────────────────
function AnimatedCounter({ end, suffix }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const dur = 2000;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(ease * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-IN")}
      {inView ? suffix : ""}
    </span>
  );
}

// ─── Floating Particle ────────────────────────────────────────────────────────
function Particle({ color, delay, x, y }: { color: string; delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full pointer-events-none"
      style={{ background: color, left: x, top: y }}
      initial={{ opacity: 0 }}
      animate={{ y: [0, -18, 0], opacity: [0, 0.6, 0] }}
      transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({ stat, config, index }: { stat: typeof stats[0]; config: typeof cardConfigs[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.55, delay: 0.1 + index * 0.12, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative flex flex-col items-center justify-center gap-4 px-6 py-8 md:py-10 rounded-2xl overflow-hidden cursor-default transition-all duration-400"
      style={{
        background: "white",
        border: `1.5px solid ${config.border}`,
        boxShadow: `0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)`,
      }}
    >
      {/* Hover bg fill */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: config.lightBg }}
      />

      {/* Floating particles */}
      <Particle color={config.accent} delay={0.2} x="15%" y="70%" />
      <Particle color={config.accent} delay={1.1} x="80%" y="55%" />
      <Particle color={config.accent} delay={0.7} x="50%" y="80%" />

      {/* Top shimmer line */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
        style={{ background: config.gradient }}
      />

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.15, rotate: 8 }}
        transition={{ type: "spring", stiffness: 350, damping: 14 }}
        className="relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl shadow-xl"
        style={{ background: config.iconBg }}
      >
        {/* Glow behind icon */}
        <div
          className="absolute -inset-1 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-400"
          style={{ background: config.glow }}
        />
        <span className="relative z-10">{iconMap[stat.icon]}</span>
      </motion.div>

      {/* Number + Label */}
      <div className="relative z-10 text-center">
        <div
          className="text-3xl sm:text-4xl font-black tracking-tight leading-none tabular-nums"
          style={{
            background: config.gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          <AnimatedCounter end={stat.value} suffix={stat.suffix} />
        </div>
        <div className="mt-2 text-xs sm:text-sm font-semibold tracking-wide text-slate-500 uppercase leading-snug">
          {stat.label}
        </div>
      </div>

      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-3/4 rounded-full transition-all duration-500"
        style={{ background: config.gradient }}
      />
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function TrustStats() {
  return (
    <section className="relative z-30 -mt-8 sm:-mt-12 px-4 sm:px-6 lg:px-8 pb-6 sm:pb-10">
      <div className="max-w-6xl mx-auto">

        {/* ── Outer wrapper glow ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="relative"
        >
          {/* Ambient background glow */}
          <div
            className="absolute -inset-4 rounded-3xl blur-2xl opacity-30 pointer-events-none"
            style={{ background: "linear-gradient(90deg, rgba(26,46,108,0.3), rgba(192,32,42,0.2), rgba(26,46,108,0.3))" }}
          />

          {/* ── Glass outer shell ── */}
          <div
            className="relative rounded-3xl p-3 sm:p-4"
            style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(226,232,240,0.8)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 1px 0 rgba(255,255,255,0.8) inset",
            }}
          >
            {/* Top shimmer */}
            <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

            {/* Stats Grid — responsive */}
            <div className="stats-grid">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} config={cardConfigs[i]} index={i} />
              ))}
            </div>

            {/* Bottom shimmer */}
            <div className="absolute bottom-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          </div>
        </motion.div>

        {/* ── Trust Badge Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex items-center justify-center gap-2 mt-5"
        >
          <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{
              background: "rgba(26,46,108,0.06)",
              border: "1px solid rgba(26,46,108,0.12)",
              color: "#1a2e6c",
            }}
          >
            <Star className="w-3 h-3 fill-current text-amber-500" />
            Trusted by students across Bihar &amp; Jharkhand
            <Star className="w-3 h-3 fill-current text-amber-500" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
