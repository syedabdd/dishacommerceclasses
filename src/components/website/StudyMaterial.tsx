"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  BookText,
  Files,
  FileText,
  HelpCircle,
  Video,
  MessageCircle,
  ListChecks,
  Languages,
  Medal,
  ArrowRight,
  Flame,
  ChevronRight,
} from "lucide-react";

const materials = [
  {
    category: "Notes & Books",
    items: [
      {
        title: "Class Syllabus",
        desc: "Detailed subject-wise breakdown for all board exams.",
        icon: BookOpen,
        color: "text-sky-500",
        bg: "bg-sky-50",
        link: "https://dishaonlineclasses.com/study-materials.php",
      },
      {
        title: "NCERT Digital Books",
        desc: "Chapter-wise PDF downloads for grades 9 to 12.",
        icon: BookText,
        color: "text-red-500",
        bg: "bg-red-50",
        link: "https://dishacompetitiveclasses.com/study-materials.php",
      },
      {
        title: "Premium Free Notes",
        desc: "Handwritten topper notes & quick revision summaries.",
        icon: FileText,
        color: "text-orange-500",
        bg: "bg-orange-50",
        link: "https://dishaonlineclasses.com/study-materials.php?search=&class=all&stream=all&subject=all&exam=ncert-book&type=all",
      },
    ],
  },
  {
    category: "Practice & Test",
    items: [
      {
        title: "PYQ & Model Papers",
        desc: "Last 10 years past papers & expert model sets.",
        icon: Files,
        color: "text-amber-500",
        bg: "bg-amber-50",
        link: "https://dishaonlineclasses.com/study-materials.php?search=&class=all&stream=all&subject=all&exam=ncert-book&type=all",
      },
      {
        title: "Daily Live Quiz",
        desc: "Test your knowledge daily and top the leaderboard.",
        icon: HelpCircle,
        color: "text-indigo-500",
        bg: "bg-indigo-50",
        link: "https://dishaonlineclasses.com/quiz_home.php",
      },
      {
        title: "OMR Practice Sheets",
        desc: "Generate and download custom OMR sheets for objective prep.",
        icon: ListChecks,
        color: "text-yellow-600",
        bg: "bg-yellow-50",
        link: "https://dishaonlineclasses.com/omr.php",
      },
      {
        title: "Topper's Answer Copies",
        desc: "Analyze real board exam copies to understand scoring patterns.",
        icon: Medal,
        color: "text-blue-500",
        bg: "bg-blue-50",
        link: "https://dishaonlineclasses.com/study-materials.php",
      },
    ],
  },
  {
    category: "Classes & Support",
    items: [
      {
        title: "Live & VOD Classes",
        desc: "Interactive live sessions and high-quality recorded lectures.",
        icon: Video,
        color: "text-cyan-500",
        bg: "bg-cyan-50",
        link: "https://play.google.com/store/apps/details?id=co.dishaonlineclasses&hl=en_IN",
      },
      {
        title: "24/7 Doubt Resolution",
        desc: "Upload a photo and get instant solutions from top educators.",
        icon: MessageCircle,
        color: "text-pink-500",
        bg: "bg-pink-50",
        link: "/ask-doubt",
      },
      {
        title: "Spoken English Module",
        desc: "Interactive multi-level platform to master spoken English.",
        icon: Languages,
        color: "text-emerald-500",
        bg: "bg-emerald-50",
        link: "https://dishaonlineclasses.com/spoken-english.php",
      },
    ],
  },
];

export default function StudyMaterial() {
  const [activeCategory, setActiveCategory] = useState(materials[0].category);

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ backgroundColor: "var(--bg-section)" }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2
            className="text-4xl md:text-5xl font-extrabold leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Study Materials &
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #1a2e6c 0%, #c0202a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Learning Resources
            </span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
              {materials.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`flex items-center justify-between px-5 py-4 rounded-xl font-bold transition-all whitespace-nowrap text-left border
                      ${
                        activeCategory === cat.category
                          ? "shadow-md scale-105"
                          : "opacity-70 hover:opacity-100 hover:bg-slate-50"
                      }
                    `}
                  style={{
                    backgroundColor:
                      activeCategory === cat.category
                        ? "var(--bg-card)"
                        : "transparent",
                    borderColor:
                      activeCategory === cat.category
                        ? "#c0202a"
                        : "transparent",
                    color:
                      activeCategory === cat.category
                        ? "#c0202a"
                        : "var(--text-secondary)",
                  }}
                >
                  {cat.category}
                  {activeCategory === cat.category && (
                    <ChevronRight className="w-5 h-5 hidden lg:block" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-3/4">
            {materials.map((cat) => (
              <div
                key={cat.category}
                className={`${activeCategory === cat.category ? "block animate-in fade-in slide-in-from-right-4 duration-500" : "hidden"}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cat.items.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <a
                        href={item.link}
                        key={index}
                        target={
                          item.link.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          item.link.startsWith("http")
                            ? "noopener noreferrer"
                            : ""
                        }
                        className="group relative block p-6 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        style={{
                          backgroundColor: "var(--bg-card)",
                          border: "1px solid var(--border-color)",
                        }}
                      >
                        <div className="flex items-start gap-5">
                          <div
                            className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 group-hover:-rotate-3`}
                          >
                            <Icon className="w-7 h-7" />
                          </div>

                          <div>
                            <h3
                              className="text-xl font-bold mb-2 group-hover:text-[#c0202a] transition-colors"
                              style={{ color: "var(--text-primary)" }}
                            >
                              {item.title}
                            </h3>
                            <p
                              className="text-sm leading-relaxed"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {item.desc}
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 flex justify-end relative">
                          <div className={`w-1 h-12 bg-linear-to-b from-[#1a2e6c] to-[#c0202a] absolute left-0 top-1/2 -translate-y-1/2 rounded-full transition-all duration-300`} />
                          <div className="w-10 h-10 rounded-full border border-[#c0202a]/20 text-[#c0202a] flex items-center justify-center group-hover:bg-[#c0202a] group-hover:text-white transition-all">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
