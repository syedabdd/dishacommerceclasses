"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const platforms = [
  {
    title: "Disha Science Classes",
    subtitle: "Disha Science Preparation",
    link: "https://dishascienceclasses.com",
  },
  {
    title: "Disha Arts Classes",
    subtitle: "Disha Arts Preparation",
    link: "https://www.youtube.com/@DishaArtsClasses",
  },
  {
    title: "Disha Commerce",
    subtitle: "Disha Commerce Prep",
    link: "https://www.youtube.com/@dishacommerceclasses",
  },
  {
    title: "Disha Hindi & English",
    subtitle: "Disha Hindi & English Preparation",
    link: "https://www.youtube.com/@dishahindienglish",
  },
  {
    title: "Disha Competitive",
    subtitle: "Competitive Exam Preparation",
    link: "https://www.youtube.com/@DishaCompetitiveClasses",
  },
];

export default function DigitalEcoSystem() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#06091a]">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none z-0" style={{ background: "rgba(26,46,108,0.3)" }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none z-0" style={{ background: "rgba(192,32,42,0.2)" }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex justify-center items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-widest shadow-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            The Disha Universe
          </div>

          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6 text-white">
            Explore Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #db2777 100%)", // Matching the purple/pink gradient from screenshot
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Digital Ecosystem
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-slate-400 text-sm md:text-base">
            Access our complete network of specialized educational portals designed to
            accelerate your success.
          </p>
        </motion.div>

        {/* CSS Marquee Loop */}
        <div className="relative max-w-[100rem] mx-auto mt-12 overflow-hidden py-4 marquee">
          <div className="marquee-content flex gap-6 px-4">
            {/* We duplicate the list 3 times for a seamless infinite loop */}
            {[...platforms, ...platforms, ...platforms].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-[280px] md:w-[300px] shrink-0 flex flex-col items-center justify-center p-8 rounded-2xl border transition-all duration-300 hover:shadow-2xl hover:shadow-[#1a2e6c]/20 hover:-translate-y-1 relative overflow-hidden"
                style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  borderColor: "rgba(255,255,255,0.05)",
                }}
              >
                {/* Subtle top gradient line on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#1a2e6c] to-[#c0202a] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-16 h-16 rounded-[20px] bg-[#1a2e6c]/30 border border-[#1a2e6c]/50 flex items-center justify-center mb-6 shadow-inner group-hover:bg-[#1a2e6c]/50 transition-colors">
                  <Globe className="w-8 h-8 text-blue-400 opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-lg font-bold text-white text-center mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 text-center font-medium">{item.subtitle}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
