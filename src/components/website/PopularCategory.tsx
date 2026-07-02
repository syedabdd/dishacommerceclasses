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
    color: "#0ea5e9", // sky
  },
  {
    id: 2,
    title: "STATE EXAMS",
    icon: MapPin,
    link: "https://dishaonlineclasses.com/",
    color: "#d946ef", // fuchsia
  },
  {
    id: 3,
    title: "CLASS 9TH",
    icon: GraduationCap,
    link: "https://dishaonlineclasses.com/",
    color: "#10b981", // emerald
  },
  {
    id: 4,
    title: "CLASS 10TH",
    icon: School,
    link: "https://dishaonlineclasses.com/",
    color: "#f97316", // orange
  },
  {
    id: 5,
    title: "CLASS 11TH",
    icon: BookOpen,
    link: "https://dishaonlineclasses.com/",
    color: "#6366f1", // indigo
  },
  {
    id: 6,
    title: "CLASS 12TH",
    icon: GraduationCap,
    link: "https://dishaonlineclasses.com/",
    color: "#f59e0b", // amber
  },
  {
    id: 7,
    title: "BIHAR BOARD",
    icon: Landmark,
    link: "https://dishaonlineclasses.com/",
    color: "#14b8a6", // teal
  },
  {
    id: 8,
    title: "JHARKHAND BOARD",
    icon: Landmark,
    link: "https://dishaonlineclasses.com/",
    color: "#f43f5e", // rose
  },
  {
    id: 9,
    title: "UP BOARD",
    icon: Landmark,
    link: "https://dishaonlineclasses.com/",
    color: "#3b82f6", // blue
  },
  {
    id: 10,
    title: "FOUNDATION COURSES",
    icon: Building2,
    link: "https://dishacompetitiveclasses.com/",
    color: "#a855f7", // purple
  },
  {
    id: 11,
    title: "CBSE BOARD",
    icon: Badge,
    link: "https://dishaonlineclasses.com/",
    color: "#22c55e", // green
  },
  {
    id: 12,
    title: "STREAM: ARTS / SCIENCE / COMMERCE",
    icon: Layers,
    link: "https://dishaonlineclasses.com/",
    color: "#8b5cf6", // violet
  },
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function PopularCategory() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      {/* Background blobs similar to screenshot */}
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-purple-200/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-200/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2
              className="text-4xl md:text-5xl font-black leading-tight mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Popular{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #1a2e6c 0%, #c0202a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Categories
              </span>
            </h2>

            <p
              className="max-w-xl mx-auto text-sm md:text-base mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              Choose your preferred course category and start learning with India's most
              trusted educational platform.
            </p>
            
            <div className="w-16 h-1 rounded-full bg-linear-to-r from-[#1a2e6c] via-[#c0202a] to-[#1a2e6c]" />
          </motion.div>
        </div>

        {/* 6-Column Grid for Desktop */}
        <motion.div
          variants={containerVariants as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6"
        >
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.id}
                variants={itemVariants as any}
                whileHover={{ 
                  y: -8,
                  boxShadow: `0 25px 50px -12px ${category.color}40`,
                  borderColor: `${category.color}40`
                }}
                className="h-full rounded-[24px] border border-[var(--border-color)] bg-[var(--bg-card)] transition-colors duration-300"
              >
                <Link
                  href={category.link}
                  className="group relative flex flex-col items-center justify-start pt-8 pb-10 px-4 h-full rounded-[24px] overflow-hidden"
                >
                  {/* Icon Block */}
                  <div
                    className="w-[72px] h-[72px] flex items-center justify-center rounded-[24px] text-white mb-6 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                    style={{
                      background: `linear-gradient(135deg, ${category.color}dd 0%, ${category.color} 100%)`,
                      boxShadow: `0 15px 35px -5px ${category.color}b3`, // Massive glow matching the icon's color
                    }}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <span
                    className="font-bold text-[10px] sm:text-xs tracking-wider text-center uppercase px-2 leading-tight transition-colors duration-300 group-hover:text-slate-900"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {category.title}
                  </span>

                  {/* Colored Bottom Line indicator */}
                  <div
                    className="absolute bottom-5 w-6 h-1 rounded-full opacity-60 group-hover:w-12 group-hover:opacity-100 transition-all duration-300"
                    style={{ 
                      background: `linear-gradient(90deg, ${category.color}88 0%, ${category.color} 100%)`
                    }}
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
