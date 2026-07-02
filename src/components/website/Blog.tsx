"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Search, BookOpen, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import { getBlogs } from "../../../app/(admin)/admindp/blog/actions";

export default function Blog() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) =>
      blog.title?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [blogs, search]);

  const featuredBlog = filteredBlogs[0];
  const regularBlogs = filteredBlogs.slice(1);

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="absolute top-0 right-0 w-1/3 h-[400px] bg-red-50 rounded-bl-[100px] opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-200 bg-red-50 text-red-600 text-sm font-bold shadow-sm mb-4">
              <TrendingUp className="w-4 h-4" />
              Editorial
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Latest <span className="text-red-600">Insights</span>
            </h2>
          </div>

          <div className="relative w-full md:w-[320px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-14 pl-12 pr-4 rounded-2xl border-2 border-slate-200 bg-white focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-600/10 transition-all font-medium"
            />
          </div>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex justify-center py-24">
            <div className="w-12 h-12 rounded-full border-4 border-red-600 border-t-transparent animate-spin" />
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-16 text-center shadow-sm">
            <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-2">No Articles Found</h3>
            <p className="text-slate-500">Try searching with different keywords.</p>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto flex flex-col gap-6">
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.1, 0.5) }}
              >
                <Link href={`/blog/${blog.id}`} className="group block">
                  <div className="bg-white rounded-[24px] p-4 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300">
                    
                    {/* Image Thumbnail */}
                    <div className="w-full md:w-[320px] h-[200px] rounded-[16px] overflow-hidden shrink-0 relative">
                      <img
                        src={blog.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643"}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center grow py-2 pr-2">
                      <span className="inline-flex items-center bg-[#1a2e6c]/10 text-[#1a2e6c] text-[11px] font-bold px-3 py-1 rounded-full w-fit mb-3">
                        {blog.category || "Exam Tips"}
                      </span>
                      
                      <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-2 line-clamp-2 group-hover:text-[#c0202a] transition-colors leading-snug">
                        {blog.title}
                      </h3>
                      
                      <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-2">
                        {blog.content?.replace(/<[^>]*>?/gm, "")}
                      </p>
                      
                      <div className="mt-auto flex items-center justify-between text-sm font-medium text-slate-500 pt-2">
                         <div className="flex items-center gap-1.5">
                           <Calendar className="w-4 h-4" />
                           {new Date(blog.created_at).toLocaleDateString("en-GB")}
                         </div>
                         <div className="flex items-center gap-1 text-slate-800 font-bold group-hover:text-[#c0202a] transition-colors">
                           Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                         </div>
                      </div>
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
