"use client";

import React from "react";
import { Users, ArrowRight } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const channels = [
  {
    name: "Disha Commerce Classes",
    subscribers: "173K+ Subs",
    url: "https://youtube.com",
    featured: true,
  },
  {
    name: "Disha Science Classes",
    subscribers: "932K+ Subs",
    url: "https://youtube.com",
  },
  {
    name: "Disha Arts Classes",
    subscribers: "406K+ Subs",
    url: "https://youtube.com",
  },
  {
    name: "Disha Competitive Classes",
    subscribers: "119K+ Subs",
    url: "https://youtube.com",
  },
  {
    name: "Disha Junior Classes",
    subscribers: "146K+ Subs",
    url: "https://youtube.com",
  },
  {
    name: "Disha English Classes",
    subscribers: "78K+ Subs",
    url: "https://youtube.com",
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
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function JoinOurYoutubeFam() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-section)" }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c0202a]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="inline-flex justify-center items-center gap-2 px-5 py-2 rounded-full border border-red-100 bg-red-50 text-red-600 text-sm font-bold shadow-sm mb-6">
            <FaYoutube className="text-xl" />
            Our YouTube Ecosystem
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Join The{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #1a2e6c 0%, #c0202a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Disha Family
            </span>
          </h2>

          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            Subscribe to our channels and get access to top-tier free education.
            Millions of students already trust us!
          </p>
        </motion.div>

        {/* Stacked Pills */}
        <motion.div
          variants={containerVariants as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-3xl mx-auto"
        >
          {channels.map((channel, index) => (
            <motion.a
              key={index}
              variants={itemVariants as any}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-4 px-6 md:px-8 py-4 rounded-full shadow-md transition-shadow hover:shadow-xl ${channel.featured ? "border-2 border-[#c0202a] bg-[#c0202a]/5" : ""}`}
              style={{
                backgroundColor: channel.featured
                  ? undefined
                  : "var(--bg-card)",
                border: channel.featured
                  ? undefined
                  : "1px solid var(--border-color)",
              }}
            >
              <FaYoutube className="text-red-600 text-3xl" />
              <div className="text-left">
                <h3
                  className="font-extrabold text-sm md:text-base leading-none mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {channel.name}
                </h3>
                <div
                  className="flex items-center gap-1 text-xs md:text-sm font-semibold"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <Users size={12} /> {channel.subscribers}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <a
            href="https://www.youtube.com/@DishaOnlineClasses"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl !text-white font-bold shadow-xl hover:-translate-y-1 transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #1a2e6c 0%, #c0202a 100%)",
              boxShadow: "0 8px 25px rgba(15,23,42,0.35)",
            }}
          >
            Explore All Channels
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
