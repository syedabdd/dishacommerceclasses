"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Presentation,
  MapPin,
  GraduationCap,
  School,
  BookOpen,
  Landmark,
  Building2,
  Badge,
  Layers,
} from "lucide-react";

const categories = [
  {
    id: 1,
    title: "DISHA COURSES",
    icon: Presentation,
    link: "https://dishaonlineclasses.com/course.php",
  },
  {
    id: 2,
    title: "STATE EXAMS",
    icon: MapPin,
    link: "https://dishaonlineclasses.com/",
  },
  {
    id: 3,
    title: "CLASS 9TH",
    icon: GraduationCap,
    link: "https://dishaonlineclasses.com/",
  },
  {
    id: 4,
    title: "CLASS 10TH",
    icon: School,
    link: "https://dishaonlineclasses.com/",
  },
  {
    id: 5,
    title: "CLASS 11TH",
    icon: BookOpen,
    link: "https://dishaonlineclasses.com/",
  },
  {
    id: 6,
    title: "CLASS 12TH",
    icon: GraduationCap,
    link: "https://dishaonlineclasses.com/",
  },
  {
    id: 7,
    title: "BIHAR BOARD",
    icon: Landmark,
    link: "https://dishaonlineclasses.com/",
  },
  {
    id: 8,
    title: "JHARKHAND BOARD",
    icon: Landmark,
    link: "https://dishaonlineclasses.com/",
  },
  {
    id: 9,
    title: "UP BOARD",
    icon: Landmark,
    link: "https://dishaonlineclasses.com/",
  },
  {
    id: 10,
    title: "FOUNDATION COURSES",
    icon: Building2,
    link: "https://dishacompetitiveclasses.com/",
  },
  {
    id: 11,
    title: "CBSE BOARD",
    icon: Badge,
    link: "https://dishaonlineclasses.com/",
  },
  {
    id: 12,
    title: "STREAM: COMMERCE",
    icon: Layers,
    link: "https://dishaonlineclasses.com/",
  },
];

const gradients = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-green-500 to-emerald-500",
  "from-orange-500 to-red-500",
  "from-indigo-500 to-violet-500",
  "from-yellow-500 to-amber-500",
  "from-teal-500 to-cyan-500",
  "from-rose-500 to-pink-500",
  "from-sky-500 to-blue-600",
  "from-fuchsia-500 to-purple-600",
  "from-lime-500 to-green-600",
  "from-violet-500 to-indigo-600",
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: any = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function PopularCategory() {
  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{ backgroundColor: "var(--bg-section)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
        />

        <div
          className="absolute bottom-10 right-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"
        />

        <div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-5"
              style={{
                backgroundColor: "var(--disha-badge-bg)",
                border: "1px solid var(--disha-badge-border)",
                color: "var(--disha-navy-text)",
              }}
            >
              ✨ Explore Categories
            </span>

            <h2
              className="text-4xl md:text-6xl font-black leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Popular{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #1a2e6c 0%, #c0202a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Categories
              </span>
            </h2>

            <p
              className="max-w-2xl mx-auto mt-5 text-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              Choose your preferred course category and start learning with
              India's most trusted educational platform.
            </p>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-1.5 bg-linear-to-r from-amber-400 via-orange-500 to-pink-500 mx-auto mt-8 rounded-full"
            />
          </motion.div>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const gradient = gradients[(category.id - 1) % gradients.length];

            return (
              <Link
                key={category.id}
                href={category.link}
                className="block h-full"
              >
                <motion.div
                  variants={itemVariants as any}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative h-full"
                >
                  {/* Glow */}
                  <div
                    className={`absolute -inset-1 rounded-3xl bg-linear-to-r ${gradient} opacity-0 blur-lg group-hover:opacity-40 transition-all duration-700`}
                  />

                  {/* Card */}
                  <div
                    className="relative h-[180px] sm:h-[230px] rounded-3xl p-4 sm:p-5 flex flex-col items-center justify-between text-center shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    {/* Shine */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute -left-24 top-0 h-full w-20 bg-white/40 skew-x-12 animate-[shine_1.5s_linear]" />
                    </div>

                    {/* Top */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-linear-to-br ${gradient} flex items-center justify-center shadow-xl`}
                      >
                        <div
                          className={`absolute inset-0 rounded-3xl bg-linear-to-br ${gradient} blur-xl opacity-50 group-hover:opacity-80 transition-all duration-500`}
                        />

                        <Icon
                          className="relative w-7 h-7 sm:w-9 sm:h-9 text-white group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
                          strokeWidth={2}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="flex-1 flex items-center justify-center px-1">
                      <h3
                        className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.12em] leading-relaxed transition-colors duration-300 line-clamp-3"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {category.title}
                      </h3>
                    </div>

                    {/* Bottom Line */}
                    <div
                      className={`h-1 rounded-full bg-linear-to-r ${gradient} w-10 group-hover:w-16 transition-all duration-500`}
                    />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        @keyframes shine {
          0% {
            transform: translateX(-200px) skewX(12deg);
          }
          100% {
            transform: translateX(500px) skewX(12deg);
          }
        }
      `}</style>
    </section>
  );
}
