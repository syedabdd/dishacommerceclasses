"use client";

import React, { useRef } from "react";
import { ArrowRight, Trophy, Sparkles, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Toppers() {
  const toppers = [
    {
      id: 1,
      name: "Nand Sultana",
      image: "https://dishaonlineclasses.com/uploads/toppers/1776233433_Rank2.jpeg",
      link: "https://dishaonlineclasses.com/toppers.php",
      score: "472/500",
      quote: "Disha Commerce Classes provided me with the best notes and test series. The live classes were interactive and helped me clear all my doubts.",
    },
    {
      id: 2,
      name: "Ansh Raj",
      image: "https://dishaonlineclasses.com/uploads/toppers/1776233427_Rank4.jpeg",
      link: "https://dishaonlineclasses.com/toppers.php",
      score: "468/500",
      quote: "The teachers here are exceptional. Their guidance and support were crucial in helping me achieve a top rank in the Bihar Board exams.",
    },
    {
      id: 3,
      name: "Bikash Kumar",
      image: "https://dishaonlineclasses.com/uploads/toppers/1776233422_Rank5.jpeg",
      link: "https://dishaonlineclasses.com/toppers.php",
      score: "465/500",
      quote: "Studying from Disha was the best decision. The detailed explanations and regular mock tests boosted my confidence tremendously.",
    },
    {
      id: 4,
      name: "Abhay Kumar",
      image: "https://dishaonlineclasses.com/uploads/toppers/1776233416_Rank6Jamui.jpeg",
      link: "https://dishaonlineclasses.com/toppers.php",
      score: "460/500",
      quote: "I am grateful to the entire team at Disha Commerce Classes for their relentless efforts in shaping my career and helping me excel.",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      className="relative overflow-hidden py-28"
      style={{
        backgroundColor: "var(--bg-section)",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
          style={{ background: "linear-gradient(135deg, #1a2e6c, #c0202a)" }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10"
          style={{ background: "#c0202a" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 backdrop-blur-md border shadow-sm"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-color)",
              }}
            >
              <Trophy size={16} style={{ color: "#c0202a" }} />
              <span className="text-sm font-bold uppercase tracking-widest text-slate-700">
                Wall of Fame
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Our State{" "}
              <span className="relative inline-block mt-2 lg:mt-0">
                <span
                  className="relative z-10 text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(135deg, #1a2e6c 0%, #c0202a 100%)" }}
                >
                  Toppers
                </span>
                <Sparkles className="absolute -top-6 -right-8 w-8 h-8 opacity-60 animate-pulse" style={{ color: "#c0202a" }} />
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end gap-4"
          >
             <button
                ref={prevRef}
                className="topper-prev w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:bg-[#c0202a] hover:text-white transition-all duration-300"
                style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)", color: "var(--text-primary)" }}
              >
                <ChevronLeft size={24} />
              </button>

              <button
                ref={nextRef}
                className="topper-next w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:bg-[#c0202a] hover:text-white transition-all duration-300"
                style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)", color: "var(--text-primary)" }}
              >
                <ChevronRight size={24} />
              </button>
          </motion.div>
        </div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto"
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            speed={800}
            spaceBetween={24}
            slidesPerView={3}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{ prevEl: ".topper-prev", nextEl: ".topper-next" }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              800: { slidesPerView: 3 },
            }}
            className="pb-10 pt-2 px-2"
          >
            {toppers.map((topper) => (
              <SwiperSlide key={topper.id} className="!h-auto">
                <div 
                  className="flex flex-col h-full rounded-[32px] overflow-hidden shadow-xl border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative group" 
                  style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-color)" }}
                >
                  
                  {/* Image Side (Top) */}
                  <div className="w-full h-[280px] relative bg-slate-100 flex-shrink-0 overflow-hidden">
                    <img 
                      src={topper.image} 
                      alt={topper.name} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
                    
                    {/* Score Badge */}
                    <div className="absolute bottom-4 left-4 inline-block px-3 py-1.5 rounded-lg font-bold text-sm shadow-md" style={{ backgroundColor: "#1a2e6c", color: "#fff" }}>
                      Score: {topper.score}
                    </div>
                  </div>

                  {/* Content Side (Bottom) */}
                  <div className="p-6 md:p-8 flex flex-col grow relative bg-[var(--bg-card)]">
                     <Quote className="absolute top-6 right-6 w-12 h-12 opacity-10" style={{ color: "#c0202a" }} />

                     <p className="text-base md:text-lg font-medium leading-relaxed italic mb-8 flex-grow" style={{ color: "var(--text-secondary)" }}>
                       "{topper.quote}"
                     </p>
                     
                     <div className="mt-auto flex items-center justify-between border-t border-[var(--border-color)] pt-5">
                        <div>
                           <h3 className="text-xl font-black" style={{ color: "var(--text-primary)" }}>{topper.name}</h3>
                           <p className="text-xs font-bold uppercase tracking-widest mt-1 text-[#c0202a]">Bihar Board Topper</p>
                        </div>
                        <a 
                          href={topper.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full flex items-center justify-center transition-all group-hover:scale-110 shadow-md"
                          style={{ background: "linear-gradient(135deg, #1a2e6c, #c0202a)", color: "white" }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </a>
                     </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
