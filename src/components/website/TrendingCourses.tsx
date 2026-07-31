"use client";

import React from "react";
import {
  Flame,
  Zap,
  ArrowRight,
  PlayCircle,
  Clock,
  BookOpen,
  Star,
} from "lucide-react";

const courses = [
  {
    id: 1,
    image:
      "https://dishaonlineclasses.com/admindp/admindp/uploads/courses/1775281448_11th%20%20commerc%20biligunal%20batch.png",
    link: "https://dishaonlineclasses.com/course-details.php?id=34",
    badge: "FEATURED BATCH",
    badgeColor: "amber",
    title: "Bihar Board 11th Commerce परिवर्तन बैच (Bilingual) 2026-27",
    desc: "Complete BSEB Class 11th Commerce preparation with Live & Recorded Classes, Accountancy, Business Studies, Economics, Entrepreneurship, Hindi & English, Chapter-wise Notes, Tests & PDF Panels for Board Exam 2027.",
    features: [
      "Live + Recorded Classes",
      "Chapter-wise Notes & PDF Panels",
      "Regular Chapter-wise Tests",
    ],
    rating: "4.9",
    students: "15k+",
  },
  {
    id: 3,
    image:
      "https://dishaonlineclasses.com/admindp/admindp/uploads/courses/1768806567_comm.png",
    link: "https://dishaonlineclasses.com/course-details.php?id=26",
    badge: "NEW BATCH",
    badgeColor: "blue",
    title: "Bihar Board 12th Commerce मंजिल बैच (Bilingual) 2026-27",
    desc: "Complete BSEB Class 12th Commerce preparation with Hybrid (Live + Recorded) Classes, Accountancy, BST, Economics, EPS, Hindi, English & Urdu, Crash Course, Notes, Test Series, Guess Questions and Exam Booster Sessions for Board Exam 2027.",
    features: [
      "Hybrid Live + Recorded Classes",
      "Crash Course & Exam Booster",
      "Notes, Test Series & Guess Questions",
    ],
    rating: "4.8",
  },
  {
    id: 4,
    image:
      "https://dishaonlineclasses.com/admindp/admindp/uploads/courses/1768808839_sci.png",
    link: "https://dishaonlineclasses.com/course-details.php?id=29",
    badge: "NEW BATCH",
    badgeColor: "blue",
    title: "Bihar Board 12th Science मंजिल बैच (Hindi Medium) 2026-27",
    desc: "Complete BSEB Class 12th Science preparation with Hybrid (Live + Recorded) Classes, Physics, Chemistry, Biology, Math, Hindi, English & Urdu, Crash Course, Notes, Test Series, Guess Questions and Exam Booster Sessions for Board Exam 2027.",
    features: [
      "Hybrid Live + Recorded Classes",
      "Crash Course & Exam Booster",
      "Notes, Test Series & Guess Questions",
    ],
    rating: "4.9",
  },
  {
    id: 2,
    image:
      "https://dishaonlineclasses.com/admindp/admindp/uploads/courses/1768808277_scieng.png",
    link: "https://dishaonlineclasses.com/course-details.php?id=28",
    badge: "NEW BATCH",
    badgeColor: "blue",
    title: "Bihar Board 12th Science मंजिल बैच (English Medium) 2026-27",
    desc: "Complete BSEB Class 12th Science preparation with Hybrid (Live + Recorded) Classes, Physics, Chemistry, Biology, Mathematics, Hindi, English & Urdu, Crash Course, Notes, Test Series, Guess Questions and Exam Booster Sessions for Board Exam 2027.",
    features: [
      "Hybrid Live + Recorded Classes",
      "Crash Course & Exam Booster",
      "Notes, Test Series & Guess Questions",
    ],
    rating: "4.7",
  },
];

export default function TrendingCourses() {
  const featured = courses[0];
  const others = courses.slice(1);

  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center gap-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#c0202a]/20 bg-[#c0202a]/10 text-[#c0202a] text-xs font-bold uppercase tracking-widest shadow-sm">
            <Flame className="w-3.5 h-3.5 fill-[#c0202a]" />
            Most Enrolled
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Explore Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #1a2e6c 0%, #c0202a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Trending Courses
            </span>
          </h2>
          <p
            className="text-base md:text-lg max-w-xl mx-auto mt-1"
            style={{ color: "var(--text-secondary)" }}
          >
            Unlock your potential with Bihar's top-rated expert faculties and
            premium study materials.
          </p>
        </div>

        {/* Featured Course (Horizontal Layout) */}
        <div
          onClick={() => window.open(featured?.link, "_blank")}
          className="group cursor-pointer relative overflow-hidden rounded-[1.5rem] bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 mb-10 flex flex-col lg:flex-row items-center p-3 gap-5 lg:gap-8 max-w-5xl mx-auto"
        >
          {/* Shine Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-30">
            <div className="absolute -left-40 top-0 h-full w-40 rotate-12 bg-white/20 blur-xl group-hover:left-[150%] transition-all duration-[1.5s] ease-in-out" />
          </div>

          {/* Image Side - Perfectly Fitting */}
          <div className="lg:w-[45%] w-full relative rounded-xl overflow-hidden bg-slate-900/5 dark:bg-slate-900 flex items-center justify-center shrink-0">
            {/* Badge */}
            <div className="absolute top-3 left-3 z-20">
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white text-[10px] font-black tracking-wider uppercase shadow-md backdrop-blur-md border border-white/20"
                style={{ backgroundColor: "rgba(192, 32, 42, 0.9)" }}
              >
                <Zap className="w-3 h-3 fill-current text-yellow-300" />
                {featured.badge}
              </div>
            </div>

            <img
              src={featured.image}
              alt="Featured Course"
              loading="lazy"
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02] opacity-95 group-hover:opacity-100"
            />
          </div>

          {/* Content Side */}
          <div className="lg:w-[55%] w-full flex flex-col justify-center text-left px-2 pb-3 lg:p-5 lg:pl-0">
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold mb-3">
              <span className="flex items-center gap-1 text-[#c0202a] bg-[#c0202a]/10 px-3 py-1.5 rounded-lg border border-[#c0202a]/20">
                <Star className="w-3.5 h-3.5 fill-[#c0202a]" />{" "}
                {featured.rating} Rating
              </span>
              {/* <span className="flex items-center gap-1 bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                <BookOpen className="w-3.5 h-3.5 opacity-70" /> {featured.students} Enrolled
              </span> */}
            </div>

            <h3
              className="text-2xl lg:text-3xl font-black leading-snug mb-3 group-hover:text-[#1a2e6c] transition-colors"
              style={{ color: "var(--text-primary)" }}
            >
              {featured.title}
            </h3>

            <p
              className="text-sm lg:text-[15px] leading-relaxed mb-5 line-clamp-2 lg:line-clamp-3"
              style={{ color: "var(--text-secondary)" }}
            >
              {featured.desc}
            </p>

            <ul className="space-y-2.5 mb-6">
              {featured.features?.map((f, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2.5 font-semibold text-[13px] lg:text-[14px]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  {f}
                </li>
              ))}
            </ul>

            <button
              className="self-start px-6 py-3 rounded-xl text-white font-black text-[14px] transition-all duration-300 shadow-md shadow-[#1a2e6c]/20 flex items-center gap-2 group-hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #1a2e6c 0%, #2a469c 100%)",
              }}
            >
              Explore Course
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Other Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {others.map((course) => (
            <div
              key={course.id}
              onClick={() => window.open(course.link, "_blank")}
              className="group cursor-pointer relative overflow-hidden rounded-[1.25rem] bg-[var(--bg-card)] border border-[var(--border-color)] shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              <div className="absolute top-3 left-3 z-20">
                <div
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white text-[10px] font-black uppercase tracking-wider shadow-md backdrop-blur-md border border-white/20"
                  style={{ backgroundColor: "rgba(26, 46, 108, 0.9)" }}
                >
                  <PlayCircle className="w-3.5 h-3.5" />
                  {course.badge}
                </div>
              </div>

              {/* Perfectly Fitting Image */}
              <div className="w-full relative overflow-hidden bg-slate-900/5 dark:bg-slate-900 flex items-center justify-center border-b border-[var(--border-color)]">
                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03] opacity-95 group-hover:opacity-100"
                />
              </div>

              <div className="p-5 flex flex-col grow">
                <div className="flex items-center gap-1.5 text-[11px] font-bold mb-3 text-[#c0202a] bg-[#c0202a]/10 self-start px-2.5 py-1 rounded-md border border-[#c0202a]/20">
                  <Star className="w-3 h-3 fill-[#c0202a]" /> {course.rating}{" "}
                  Rating
                </div>

                <h4
                  className="text-[17px] font-black mb-2 line-clamp-2 leading-snug group-hover:text-[#1a2e6c] transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  {course.title}
                </h4>

                <p
                  className="text-[13px] leading-relaxed line-clamp-2 mt-auto font-medium opacity-80"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {course.desc}
                </p>
              </div>

              {/* Bottom Border Accent */}
              <div
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 ease-out"
                style={{
                  background: "linear-gradient(90deg, #1a2e6c, #c0202a)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
