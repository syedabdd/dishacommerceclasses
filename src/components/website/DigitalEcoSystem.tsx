"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Rocket, ArrowRight } from "lucide-react";

const platforms = [
  {
    title: "Disha Hindi & English",
    subtitle: "Hindi & English Prep",
    link: "https://www.youtube.com/@dishahindienglish",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    rowSpan: "row-span-1 lg:row-span-2",
    featured: true,
  },
  {
    title: "Disha Commerce",
    subtitle: "Commerce Prep",
    link: "https://www.youtube.com/@dishacommerceclasses",
    colSpan: "col-span-1 md:col-span-1",
    rowSpan: "row-span-1",
  },
  {
    title: "Disha Arts",
    subtitle: "Arts Prep",
    link: "https://www.youtube.com/@DishaArtsClasses",
    colSpan: "col-span-1 md:col-span-1",
    rowSpan: "row-span-1",
  },
  {
    title: "Disha Competitive",
    subtitle: "Competitive Exam Prep",
    link: "https://www.youtube.com/@DishaCompetitiveClasses",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    rowSpan: "row-span-1",
  },
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function DigitalEcoSystem() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "var(--bg-section)" }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center mb-16"
        >
          <div className="inline-flex justify-center items-center gap-2 px-5 py-2 rounded-full border border-amber-200 bg-amber-50 text-amber-600 text-sm font-bold shadow-sm mb-6">
            <Globe className="w-4 h-4" />
            The Disha Universe
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Explore Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #1e293b 0%, #f59e0b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Digital Ecosystem
            </span>
          </h2>

          <p
            className="mx-auto max-w-2xl text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Access our complete network of specialized educational portals
            designed to accelerate your success.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {platforms.map((item, index) => (
            <motion.a
              key={index}
              variants={itemVariants as any}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative overflow-hidden rounded-[32px] p-8 flex flex-col justify-end ${item.colSpan} ${item.rowSpan} min-h-[220px] shadow-sm hover:shadow-xl transition-all`}
              style={{
                backgroundColor: item.featured ? undefined : "var(--bg-card)",
                border: item.featured
                  ? undefined
                  : "1px solid var(--border-color)",
                background: item.featured
                  ? "linear-gradient(135deg, #1e293b 0%, #f59e0b 100%)"
                  : undefined,
                color: item.featured ? "white" : "var(--text-primary)",
              }}
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute -left-40 top-0 h-full w-20 rotate-12 bg-white/20 blur-xl group-hover:left-[120%] transition-all duration-1000" />
              </div>

              <div className="relative z-10 flex justify-between items-start mb-auto">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center p-2 overflow-hidden ${item.featured ? "bg-white/20" : "bg-slate-100"}`}
                >
                  <img
                    src="/Logo.PNG"
                    alt="Disha Logo"
                    className={`w-full h-full object-contain ${item.featured ? "opacity-90" : "opacity-100"}`}
                  />
                </div>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border ${item.featured ? "border-white/30 text-white group-hover:bg-white group-hover:text-amber-600" : "border-amber-200 text-amber-500 group-hover:bg-amber-500 group-hover:text-white"} transition-colors`}
                >
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
              </div>

              <div className="relative z-10 mt-8">
                <h3
                  className={`text-2xl md:text-3xl font-black mb-2 leading-tight ${item.featured ? "text-white" : ""}`}
                >
                  {item.title}
                </h3>
                <p
                  className={`font-medium ${item.featured ? "text-white/80" : "text-slate-500"}`}
                >
                  {item.subtitle}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <a
            href="https://www.youtube.com/@DishaOnlineClasses"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl !text-white font-bold shadow-xl hover:-translate-y-1 transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #1e293b 0%, #f59e0b 100%)",
              boxShadow: "0 8px 25px rgba(15,23,42,0.35)",
            }}
          >
            Explore All Platforms
            <Rocket className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
