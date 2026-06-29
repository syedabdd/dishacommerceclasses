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
      <div className="absolute top-0 right-0 w-1/3 h-[400px] bg-amber-50 rounded-bl-[100px] opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-200 bg-amber-50 text-amber-600 text-sm font-bold shadow-sm mb-4">
              <TrendingUp className="w-4 h-4" />
              Editorial
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Latest <span className="text-amber-500">Insights</span>
            </h2>
          </div>

          <div className="relative w-full md:w-[320px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-14 pl-12 pr-4 rounded-2xl border-2 border-slate-200 bg-white focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-500/10 transition-all font-medium"
            />
          </div>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex justify-center py-24">
            <div className="w-12 h-12 rounded-full border-4 border-amber-500 border-t-transparent animate-spin" />
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-16 text-center shadow-sm">
            <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-2">No Articles Found</h3>
            <p className="text-slate-500">Try searching with different keywords.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Featured Blog (Left - 7 cols) */}
            {featuredBlog && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7"
              >
                <Link href={`/blog/${featuredBlog.id}`} className="group block h-full">
                  <div className="bg-white rounded-[32px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-200 h-full flex flex-col">
                    <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
                      <img
                        src={featuredBlog.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643"}
                        alt={featuredBlog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-6 left-6 right-6">
                         <span className="inline-block bg-amber-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 shadow-sm">
                            {featuredBlog.category || "Featured"}
                         </span>
                         <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug line-clamp-3">
                           {featuredBlog.title}
                         </h3>
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col grow justify-between">
                      <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3 md:line-clamp-4">
                        {featuredBlog.content?.replace(/<[^>]*>?/gm, "").slice(0, 300)}...
                      </p>
                      
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
                        <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
                           <div className="flex items-center gap-1.5">
                             <Calendar className="w-4 h-4 text-amber-500" />
                             {new Date(featuredBlog.created_at).toLocaleDateString("en-GB")}
                           </div>
                           <div className="flex items-center gap-1.5">
                             <Clock className="w-4 h-4 text-amber-500" />
                             {Math.max(1, Math.ceil((featuredBlog.content?.replace(/<[^>]*>?/gm, "").length || 0) / 1000))} min read
                           </div>
                        </div>
                        <div className="flex items-center gap-2 text-slate-900 font-bold group-hover:text-amber-500 transition-colors">
                           Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Regular Blogs Stack (Right - 5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {regularBlogs.slice(0, 3).map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/blog/${blog.id}`} className="group block">
                    <div className="bg-white rounded-3xl p-4 md:p-5 flex gap-5 shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300">
                      
                      {/* Image Thumbnail */}
                      <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden shrink-0 relative">
                        <img
                          src={blog.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643"}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition" />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col justify-center grow">
                        <span className="text-amber-500 text-xs font-bold uppercase tracking-wider mb-2 block">
                          {blog.category || "Education"}
                        </span>
                        
                        <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-amber-500 transition-colors leading-snug">
                          {blog.title}
                        </h4>
                        
                        <div className="flex items-center gap-3 text-xs font-medium text-slate-500 mt-auto">
                           <div className="flex items-center gap-1">
                             <Calendar className="w-3.5 h-3.5" />
                             {new Date(blog.created_at).toLocaleDateString("en-GB", { day: 'numeric', month: 'short' })}
                           </div>
                           <span className="w-1 h-1 rounded-full bg-slate-300" />
                           <div className="flex items-center gap-1">
                             <Clock className="w-3.5 h-3.5" />
                             {Math.max(1, Math.ceil((blog.content?.replace(/<[^>]*>?/gm, "").length || 0) / 1000))} min
                           </div>
                        </div>
                      </div>

                    </div>
                  </Link>
                </motion.div>
              ))}
              
              {regularBlogs.length > 3 && (
                 <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-4 text-center"
                 >
                    <Link href="/blog" className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-amber-500 transition-colors">
                      View All Articles <ArrowRight className="w-5 h-5" />
                    </Link>
                 </motion.div>
              )}

            </div>

          </div>
        )}
      </div>
    </section>
  );
}
