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
            <div className="w-full lg:w-2/3 h-[300px] md:h-[500px] bg-slate-800 rounded-3xl" />
            <div className="w-full lg:w-1/3 flex flex-col gap-6">
              {[1, 2].map((i) => (
                <div key={i} className="h-[240px] bg-slate-800 rounded-3xl" />
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
              className="w-full lg:w-2/3"
            >
              <a
                href={videos[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-3xl overflow-hidden shadow-2xl border border-slate-800 h-full min-h-[300px] md:min-h-[500px]"
              >
                <div className="absolute inset-0 bg-slate-900">
                  <img
                    src={videos[0].thumbnail}
                    alt={videos[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                </div>

                {/* Cinematic Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/40 to-transparent" />

                {/* Big Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-red-600/20 backdrop-blur-md border border-red-600/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-600 transition-all duration-500 shadow-[0_0_40px_rgba(192,32,42,0.3)]">
                    <Play size={40} className="text-white fill-white ml-2" />
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-slate-800/80 backdrop-blur text-slate-300 text-sm font-medium flex items-center gap-2">
                      <Video className="w-4 h-4 text-red-600" /> Commerce Board
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-800/80 backdrop-blur text-slate-300 text-sm font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4 text-red-600" /> 1h 45m
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight line-clamp-2">
                    {videos[0].title}
                  </h3>
                  <div className="flex items-center gap-2 text-red-600">
                    <GraduationCap size={20} />
                    <span className="font-semibold text-lg">
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
                  className="group relative flex flex-col rounded-3xl overflow-hidden shadow-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-800 transition-colors h-full min-h-[220px]"
                >
                  {/* Thumbnail Half */}
                  <div className="h-[140px] relative overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play
                          size={20}
                          className="text-white fill-white ml-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Info Half */}
                  <div className="p-5 flex flex-col grow justify-center">
                    <h4 className="text-white font-bold line-clamp-2 mb-2 group-hover:text-red-600 transition-colors">
                      {video.title}
                    </h4>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <GraduationCap size={16} />
                      <span>{video.teacher}</span>
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
          className="mt-8 flex justify-center lg:hidden"
        >
          <a
            href="https://www.youtube.com/@DishaOnlineClasses"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2  !text-white hover:text-white transition-colors font-bold px-6 py-3 rounded-full border border-red-600/30 bg-red-600/10"
          >
            View All Classes <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
