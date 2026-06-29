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
  Sparkles,
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
    title: "CLASS 12TH COMMERCE",
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
    title: "CA/CS FOUNDATION",
    icon: Layers,
    link: "https://dishaonlineclasses.com/",
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
  hidden: { opacity: 0, y: 20, scale: 0.9 },
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
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.05)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(30,41,59,0.05)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#c0202a] !text-white text-sm font-bold shadow-md mb-6"
              style={{
                background: "linear-gradient(135deg, #1a2e6c 0%, #c0202a 100%)",
              }}
            >
              <Sparkles className="w-4 h-4 fill-current" />
              Explore Categories
            </div>

            <h2
              className="text-4xl md:text-5xl font-black leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Popular{" "}
              <span
                style={{
                  backgroundImage:
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
              className="max-w-2xl mx-auto mt-4 text-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              Find the perfect course for your commerce journey. From board
              exams to professional foundations.
            </p>
          </motion.div>
        </div>

        {/* Uniform 3-Column Grid */}
        <motion.div
          variants={containerVariants as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.id}
                variants={itemVariants as any}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="h-full"
              >
                <Link
                  href={category.link}
                  className="group relative flex flex-col items-center justify-center gap-4 p-8 rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 h-full border border-[var(--border-color)]"
                  style={{
                    backgroundColor: "var(--bg-card)",
                  }}
                >
                  {/* Hover Background Gradient */}
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#c0202a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-2xl bg-[#c0202a]/10 group-hover:bg-[#c0202a] transition-colors duration-500 shadow-inner">
                    <Icon className="w-8 h-8 text-[#c0202a] group-hover:text-white transition-colors duration-500" />
                  </div>

                  <span
                    className="relative z-10 font-bold text-lg tracking-wide text-center group-hover:text-[#c0202a] transition-colors duration-300"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {category.title}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
