"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Sparkles, ArrowRight, Download, Play } from "lucide-react";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: "easeInOut",
    },
  }),
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Hero2() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-20 pb-10 sm:pt-28 sm:pb-16 lg:py-32 lg:pb-40 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-section)" }}
    >
      {/* ── Background Orbs ── */}
      <div
        className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: "rgba(15,23,42,0.18)" }}
      />
      <div
        className="absolute bottom-[-100px] left-[-80px] w-[500px] h-[500px] rounded-full blur-[130px] pointer-events-none"
        style={{ backgroundColor: "rgba(245,158,11,0.12)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none"
        style={{ backgroundColor: "rgba(15,23,42,0.10)" }}
      />

      {/* ── Decorative Grid ── */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px),
                            linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          variants={fadeUp as any}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          custom={0}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 shadow-sm"
          style={{
            background: "var(--disha-badge-bg)",
            border: "1px solid var(--disha-badge-border)",
          }}
        >
          <Sparkles size={15} style={{ color: "#f59e0b" }} />
          <span
            className="text-sm font-semibold"
            style={{ color: "var(--disha-navy-text)" }}
          >
            Bihar's Premium Digital Learning Ecosystem
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp as any}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          custom={1}
          className="text-5xl sm:text-6xl xl:text-[4rem] font-extrabold leading-tight tracking-tight max-w-4xl"
          style={{ color: "var(--text-primary)" }}
        >
          The Next Generation of
          <span
            className="block mt-2"
            style={{
              background: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Commerce Education
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp as any}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          custom={2}
          className="mt-6 text-base md:text-xl leading-relaxed max-w-3xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Elevate your preparation for Class 11th & 12th Commerce (BSEB). Master
          Accountancy, Business Studies, Economics & Mathematics with top
          educators, premium study materials, and exceptional live classes.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp as any}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          custom={3}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
        >
          <Link
            href="https://play.google.com/store/apps/details?id=co.dishaonlineclasses"
            target="_blank"
            className="w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group cursor-pointer relative w-full sm:w-auto overflow-hidden text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
                boxShadow: "0 10px 40px rgba(245,158,11,0.30)",
              }}
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out" />
              <span className="relative flex items-center justify-center gap-3">
                Join Now & Explore Batches
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1.5 transition-transform duration-300"
                />
              </span>
            </motion.button>
          </Link>

          <Link href="/download" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group cursor-pointer relative w-full sm:w-auto overflow-hidden font-bold px-10 py-5 rounded-2xl transition-all duration-300 border"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-color)",
                color: "var(--text-primary)",
              }}
            >
              <span className="relative flex items-center justify-center gap-3">
                <Play size={20} className="text-amber-500" />
                Download App
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Floating Graphic Element at Bottom */}
      <motion.div
        variants={fadeUp as any}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        custom={4}
        className="relative mt-20 max-w-4xl mx-auto px-5"
      >
        <div className="relative w-full flex justify-center">
          <Image
            src="/welcome.webp"
            alt="Disha Commerce Educator"
            className="relative z-10 w-full max-w-lg object-contain drop-shadow-2xl"
            width={600}
            height={600}
            priority={true}
          />
          {/* Glowing backdrop for the image to make it pop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-amber-500/10 blur-3xl -z-10" />
        </div>
      </motion.div>
    </section>
  );
}
