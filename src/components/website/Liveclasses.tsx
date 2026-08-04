"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, GraduationCap, Video, Clock } from "lucide-react";

const youtubeLinks = [
  "https://www.youtube.com/watch?v=gIdf2tIAMm0",
  "http://youtube.com/watch?v=he7e1b78OFo",
  "https://www.youtube.com/watch?v=A2rXZp1bQuw",
];

export default function LiveClasses() {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const results = await Promise.all(
          youtubeLinks.map(async (url) => {
            try {
              const response = await fetch(
                `https://www.youtube.com/oembed?url=${encodeURIComponent(
                  url,
                )}&format=json`,
              );

              const data = await response.json();

              return {
                title: data.title,
                teacher: data.author_name,
                thumbnail: data.thumbnail_url.replace(
                  "hqdefault",
                  "maxresdefault",
                ),
                link: url,
              };
            } catch (error) {
              return null;
            }
          }),
        );

        setVideos(results.filter(Boolean));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <section
      className="py-12 lg:py-16 relative overflow-hidden"
      style={{ backgroundColor: "#0f172a" }} // Force dark cinematic background
    >
      {/* Cinematic Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-[10px] font-bold uppercase tracking-wider mb-3"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Live Now
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-black text-white tracking-tight"
            >
              Masterclass <span className="text-red-600">Sessions</span>
            </motion.h2>
          </div>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            href="https://www.youtube.com/@DishaOnlineClasses"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 text-red-500 hover:text-red-400 transition-colors font-semibold text-sm"
          >
            View All Classes <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {loading ? (
          <div className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto animate-pulse">
            <div className="w-full lg:w-[60%] aspect-video bg-slate-800 rounded-2xl" />
            <div className="w-full lg:w-[40%] flex flex-col gap-4">
              {[1, 2].map((i) => (
                <div key={i} className="aspect-video lg:aspect-auto lg:h-[calc(50%-0.5rem)] bg-slate-800 rounded-2xl" />
              ))}
            </div>
          </div>
        ) : videos.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-5 max-w-5xl mx-auto">
            {/* Featured Main Video */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-[60%] flex"
            >
              <a
                href={videos[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col w-full rounded-2xl overflow-hidden shadow-lg border border-slate-800/60 bg-slate-900/50 hover:bg-slate-800/80 hover:border-slate-700 transition-all duration-300 h-full"
              >
                {/* Thumbnail Area (16:9 perfectly) */}
                <div className="relative w-full aspect-video overflow-hidden bg-black">
                  <img
                    src={videos[0].thumbnail}
                    alt={videos[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Big Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-600/90 backdrop-blur-sm border border-red-500/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-600 transition-all duration-500 shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                      <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1.5 md:ml-2" />
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 md:p-6 flex flex-col grow justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/50 text-slate-300 text-[11px] md:text-xs font-medium flex items-center gap-1.5">
                        <Video className="w-3.5 h-3.5 text-red-500" /> Commerce Board
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/50 text-slate-300 text-[11px] md:text-xs font-medium flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-red-500" /> 1h 45m
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-snug group-hover:text-red-400 transition-colors line-clamp-2">
                      {videos[0].title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 mt-2">
                    <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-300" />
                    </div>
                    <span className="font-medium text-xs md:text-sm">
                      {videos[0].teacher}
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Up Next / Playlist Sidebar */}
            <div className="w-full lg:w-[40%] flex flex-col gap-4">
              {videos.slice(1, 3).map((video, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-3 rounded-2xl overflow-hidden shadow-sm border border-slate-800/60 bg-slate-900/50 hover:bg-slate-800/80 hover:border-slate-700 transition-all p-3 h-full"
                >
                  {/* Thumbnail Area */}
                  <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-black shrink-0">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-red-600/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-red-600/30">
                        <Play className="w-5 h-5 text-white fill-white ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Info Area */}
                  <div className="flex flex-col justify-center flex-1 min-w-0 pt-1 px-1">
                    <h4 className="text-white font-semibold text-sm md:text-base leading-snug line-clamp-2 group-hover:text-red-400 transition-colors mb-3">
                      {video.title}
                    </h4>
                    <div className="flex items-center gap-2 text-slate-400 text-xs mt-auto">
                      <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                        <GraduationCap className="w-3 h-3 text-slate-300" />
                      </div>
                      <span className="truncate">{video.teacher}</span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        ) : null}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center md:hidden"
        >
          <a
            href="https://www.youtube.com/@DishaOnlineClasses"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full text-white font-semibold text-sm px-6 py-3 rounded-xl border border-red-600/30 bg-red-600 hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
          >
            View All Classes <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
