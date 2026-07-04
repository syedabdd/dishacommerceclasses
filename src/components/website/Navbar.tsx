"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "../../data/siteData";

const moreLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Toppers", href: "https://dishaonlineclasses.com/toppers.php" },
  {
    label: "Master Tools",
    href: "https://dishacompetitiveclasses.com/tools.php",
  },
  { label: "Community", href: "https://dishaonlineclasses.com/community.php" },
];

const NavLink = ({
  href,
  label,
  active,
  onClick,
  isMobile,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
  isMobile?: boolean;
}) => {
  const desktopCls = `relative px-3 py-2 text-sm font-medium transition-colors duration-200 
    ${active ? "text-[#1a2e6c]" : "text-slate-700 hover:text-[#1a2e6c]"}`;

  const mobileCls = `flex items-center justify-between w-full px-4 py-3 text-[15px] font-semibold rounded-xl transition-all duration-200 ${
    active
      ? "bg-blue-50 text-[#1a2e6c]"
      : "text-slate-600 hover:bg-slate-50 hover:text-[#1a2e6c]"
  }`;

  const cls = isMobile ? mobileCls : desktopCls;

  const content = (
    <>
      {label}
      {!isMobile && active && (
        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-linear-to-r from-[#1a2e6c] to-[#c0202a] rounded-full" />
      )}
      {isMobile && (
        <ChevronRight
          className={`w-4 h-4 ${active ? "text-[#1a2e6c]" : "text-slate-400 opacity-50"}`}
        />
      )}
    </>
  );

  return href.startsWith("http") ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cls}
      onClick={onClick}
    >
      {content}
    </a>
  ) : (
    <Link href={href} className={cls} onClick={onClick}>
      {content}
    </Link>
  );
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const raf = useRef<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        raf.current = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-slate-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/Logo.PNG"
              alt="Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
              unoptimized
            />
            <div>
              <p className="font-bold text-slate-900 text-base leading-tight">
                Disha Commerce Classes
              </p>
              <p className="text-[10px] tracking-widest text-slate-400 uppercase">
                Direction To Success
              </p>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <NavLink
                key={l.href}
                href={l.href}
                label={l.label}
                active={pathname === l.href}
              />
            ))}

            {/* More dropdown */}
            <div className="relative group ml-1">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#1a2e6c] transition-colors">
                More{" "}
                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full right-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 overflow-hidden">
                  {moreLinks.map((l) =>
                    l.href.startsWith("http") ? (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-[#c0202a]/10 hover:text-[#1a2e6c] transition-colors"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-[#c0202a]/10 hover:text-[#1a2e6c] transition-colors"
                      >
                        {l.label}
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop CTA */}
          <a
            href="tel:+917700879453"
            className="hidden lg:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-md shadow-[#1a2e6c]/20"
          >
            <Phone className="w-4 h-4 text-white font-bold" />
            <span className="text-white">+91 77008 79453</span>
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer backdrop */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto backdrop-blur-sm" : "opacity-0 pointer-events-none backdrop-blur-none"}`}
        onClick={() => setMenuOpen(false)}
        style={{
          background: "rgba(15, 23, 42, 0.6)",
        }}
      />

      {/* Mobile drawer panel */}
      <div
        className={`fixed top-0 right-0 z-[70] h-[100dvh] w-[85vw] sm:w-80 bg-white shadow-2xl lg:hidden flex flex-col transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-white">
          <div className="flex items-center gap-3">
            <div className="bg-slate-50 p-1 rounded-full border border-slate-100">
              <Image
                src="/Logo.PNG"
                alt="Logo"
                width={36}
                height={36}
                className="object-contain"
                priority
                unoptimized
              />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-[15px] leading-tight">
                Disha Commerce
              </p>
              <p className="text-[10px] tracking-wider text-slate-500 font-medium uppercase mt-0.5">
                Menu
              </p>
            </div>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto py-4 px-3 sm:px-4 space-y-1 bg-slate-50/50">
          {navLinks.map((l) => (
            <NavLink
              key={l.href}
              href={l.href}
              label={l.label}
              active={pathname === l.href}
              onClick={() => setMenuOpen(false)}
              isMobile={true}
            />
          ))}

          <div className="pt-4 pb-2">
            <p className="px-4 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              More Links
            </p>
            {moreLinks.map((l) =>
              l.href.startsWith("http") ? (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between w-full px-4 py-3 text-[15px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-[#1a2e6c] rounded-xl transition-all duration-200"
                >
                  {l.label}
                  <ChevronRight className="w-4 h-4 text-slate-400 opacity-50" />
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between w-full px-4 py-3 text-[15px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-[#1a2e6c] rounded-xl transition-all duration-200"
                >
                  {l.label}
                  <ChevronRight className="w-4 h-4 text-slate-400 opacity-50" />
                </Link>
              ),
            )}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-white shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)]">
          <a
            href="tel:+917700879453"
            className="flex items-center justify-center  gap-2.5 w-full py-3.5 bg-green-600 hover:bg-green-700 !text-white text-[15px] font-bold rounded-xl transition-colors shadow-lg shadow-green-600/20 active:scale-[0.98]"
          >
            <Phone className="w-5 h-5 fill-white/20" />
            Call +91 77008 79453
          </a>
        </div>
      </div>
    </>
  );
}
