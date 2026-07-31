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
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#0f172a" }} // Force dark cinematic background
    >
      {/* Cinematic Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider mb-4"
            >
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Live Now
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white"
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
            className="hidden lg:flex items-center gap-2 text-red-600 hover:text-white transition-colors font-bold"
          >
            View All Classes <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex flex-col lg:flex-row gap-6 animate-pulse">
            <div className="w-full lg:w-2/3 aspect-video bg-slate-800 rounded-3xl" />
            <div className="w-full lg:w-1/3 flex flex-col gap-6">
              {[1, 2].map((i) => (
                <div key={i} className="aspect-video bg-slate-800 rounded-3xl" />
              ))}
            </div>
          </div>
        ) : videos.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Featured Main Video */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-2/3 flex"
            >
              <a
                href={videos[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900/80 hover:bg-slate-900 transition-colors h-full"
              >
                {/* Thumbnail Area (16:9 perfectly) */}
                <div className="relative w-full aspect-video overflow-hidden bg-black">
                  <img
                    src={videos[0].thumbnail}
                    alt={videos[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Big Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-red-600/90 backdrop-blur-md border border-red-500/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-600 transition-all duration-500 shadow-[0_0_40px_rgba(192,32,42,0.6)]">
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-2" />
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8 flex flex-col grow justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 text-xs md:text-sm font-medium flex items-center gap-2">
                      <Video className="w-4 h-4 text-red-500" /> Commerce Board
                    </span>
                    <span className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 text-xs md:text-sm font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4 text-red-500" /> 1h 45m
                    </span>
                  </div>
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-4 leading-snug group-hover:text-red-500 transition-colors line-clamp-2">
                    {videos[0].title}
                  </h3>
                  <div className="flex items-center gap-2.5 text-slate-400">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-slate-300" />
                    </div>
                    <span className="font-medium text-sm md:text-base">
                      {videos[0].teacher}
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Up Next / Playlist Sidebar */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6">
              {videos.slice(1).map((video, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-3xl overflow-hidden shadow-lg border border-slate-800 bg-slate-900/60 hover:bg-slate-900 transition-colors h-full"
                >
                  {/* Thumbnail Area (16:9 perfectly) */}
                  <div className="relative w-full aspect-video overflow-hidden bg-black shrink-0">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-red-600/90 backdrop-blur border border-red-500/50 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(192,32,42,0.4)]">
                        <Play
                          className="w-5 h-5 text-white fill-white ml-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Info Area */}
                  <div className="p-5 flex flex-col grow justify-between gap-3">
                    <h4 className="text-white font-bold text-base md:text-lg leading-snug line-clamp-2 group-hover:text-red-500 transition-colors">
                      {video.title}
                    </h4>
                    <div className="flex items-center gap-2.5 text-slate-400 text-sm mt-auto">
                      <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center">
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
          className="mt-10 flex justify-center lg:hidden"
        >
          <a
            href="https://www.youtube.com/@DishaOnlineClasses"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto text-white font-bold px-8 py-4 rounded-xl border border-red-600/30 bg-red-600 hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
          >
            View All Classes <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
