"use client";

import React from "react";
import { Flame, Zap, ArrowRight, PlayCircle, Clock, BookOpen, Star } from "lucide-react";
import Image from "next/image";

const courses = [
  {
    id: 1,
    image: "https://img.youtube.com/vi/gIdf2tIAMm0/maxresdefault.jpg", // Using Youtube Thumbnail as requested
    link: "https://dishaonlineclasses.com/course-details.php?id=36",
    badge: "FEATURED BATCH",
    badgeColor: "amber",
    title: "Class 12th Commerce Full Syllabus (Hindi Medium)",
    desc: "Complete preparation for Bihar Board 2025. Includes Accountancy, BST, Economics, Hindi & English.",
    features: ["Live + Recorded Classes", "PDF Notes & Assignments", "Weekly Test Series"],
    rating: "4.9",
    students: "15k+"
  },
  {
    id: 3,
    image: "https://img.youtube.com/vi/he7e1b78OFo/maxresdefault.jpg",
    link: "https://dishaonlineclasses.com/course-details.php?id=35",
    badge: "NEW BATCH",
    badgeColor: "blue",
    title: "Class 11th Commerce Foundation",
    desc: "Build a strong base for your commerce career with expert faculties.",
    rating: "4.8",
  },
  {
    id: 4,
    image: "https://img.youtube.com/vi/A2rXZp1bQuw/maxresdefault.jpg",
    link: "https://dishaonlineclasses.com/course-details.php?id=29",
    badge: "NEW BATCH",
    badgeColor: "blue",
    title: "Accountancy Special Batch 2025",
    desc: "Target 100/100 in BSEB Accountancy with PYQs and mock tests.",
    rating: "4.9",
  },
  {
    id: 2,
    image: "https://img.youtube.com/vi/gIdf2tIAMm0/maxresdefault.jpg",
    link: "https://dishaonlineclasses.com/course-details.php?id=28",
    badge: "NEW BATCH",
    badgeColor: "blue",
    title: "Economics & BST Masterclass",
    desc: "Complete theory and case studies for board exams.",
    rating: "4.7",
  },
];

export default function TrendingCourses() {
  const featured = courses[0];
  const others = courses.slice(1);

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:items-center lg:justify-center text-center gap-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c0202a]/20 bg-[#c0202a]/10 text-[#c0202a] text-xs font-bold uppercase tracking-wider mx-auto shadow-sm">
            <Flame className="w-4 h-4 fill-current" />
            Most Enrolled
          </div>

          <h2
            className="text-4xl md:text-5xl font-black leading-tight"
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
            className="text-lg max-w-xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Unlock your potential with Bihar's top-rated expert commerce faculties.
          </p>
        </div>

        {/* Featured Course (Horizontal Layout) */}
        <div
          onClick={() => window.open(featured.link, "_blank")}
          className="group cursor-pointer relative overflow-hidden rounded-[40px] bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 mb-10 flex flex-col lg:flex-row items-center gap-8 p-6 lg:p-10"
        >
          {/* Shine Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute -left-40 top-0 h-full w-40 rotate-12 bg-white/20 blur-2xl group-hover:left-[120%] transition-all duration-1000 ease-in-out" />
          </div>

          <div className="lg:w-1/2 relative bg-linear-to-br from-slate-100 to-[#c0202a]/5 rounded-3xl p-6 flex items-center justify-center w-full h-[300px] lg:h-[400px]">
             {/* Badge */}
            <div className="absolute top-4 left-4 z-20">
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-bold shadow-xl backdrop-blur-md"
                style={{ backgroundColor: "#c0202a" }}
              >
                <Zap className="w-3 h-3 fill-current" />
                {featured.badge}
              </div>
            </div>
            <img
              src={featured.image}
              alt="Course"
              loading="lazy"
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
            />
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center text-left space-y-6">
             <div className="flex items-center gap-4 text-sm font-semibold" style={{ color: "var(--text-muted)" }}>
               <span className="flex items-center gap-1 text-[#c0202a] bg-[#c0202a]/10 px-3 py-1 rounded-full"><Star className="w-4 h-4 fill-current"/> {featured.rating} Rating</span>
               <span className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full"><BookOpen className="w-4 h-4 text-slate-500"/> {featured.students} Students</span>
             </div>
             
             <h3 className="text-3xl lg:text-4xl font-extrabold leading-tight" style={{ color: "var(--text-primary)" }}>{featured.title}</h3>
             <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>{featured.desc}</p>
             
             <ul className="space-y-3">
               {featured.features?.map((f, i) => (
                 <li key={i} className="flex items-center gap-3 font-medium" style={{ color: "var(--text-secondary)" }}>
                   <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">✓</div>
                   {f}
                 </li>
               ))}
             </ul>

             <button className="self-start mt-4 px-8 py-4 rounded-xl text-white font-bold transition-all duration-300 hover:shadow-lg flex items-center gap-2" style={{ background: "linear-gradient(135deg, #1a2e6c 0%, #c0202a 100%)" }}>
               Explore Full Course <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>

        {/* Other Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {others.map((course) => (
              <div
                key={course.id}
                onClick={() => window.open(course.link, "_blank")}
                className="group cursor-pointer relative overflow-hidden rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                <div className="absolute top-4 left-4 z-20">
                  <div
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-xs font-bold shadow-md"
                    style={{ backgroundColor: "#1a2e6c" }}
                  >
                    <PlayCircle className="w-3 h-3" />
                    {course.badge}
                  </div>
                </div>

                <div className="h-[240px] bg-linear-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4">
                  <img
                    src={course.image}
                    alt="Course"
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 flex flex-col grow">
                  <div className="flex items-center gap-2 text-xs font-semibold mb-3 text-[#c0202a]">
                    <Star className="w-4 h-4 fill-current"/> {course.rating} Rating
                  </div>
                  <h4 className="text-xl font-bold mb-2 line-clamp-2" style={{ color: "var(--text-primary)" }}>{course.title}</h4>
                  <p className="text-sm line-clamp-2 mt-auto" style={{ color: "var(--text-secondary)" }}>{course.desc}</p>
                </div>
                
                {/* Bottom Border Accent */}
                <div className="h-1 w-0 group-hover:w-full transition-all duration-500" style={{ background: "linear-gradient(90deg, #1a2e6c, #c0202a)" }} />
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}
