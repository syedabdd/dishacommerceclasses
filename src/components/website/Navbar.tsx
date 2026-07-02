"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
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
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) => {
  const cls = `relative px-3 py-2 text-sm font-medium transition-colors duration-200 
    ${active ? "text-[#1a2e6c]" : "text-slate-700 hover:text-[#1a2e6c]"}`;

  return href.startsWith("http") ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cls}
      onClick={onClick}
    >
      {label}
      {active && (
        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-linear-to-r from-[#1a2e6c] to-[#c0202a] rounded-full" />
      )}
    </a>
  ) : (
    <Link href={href} className={cls} onClick={onClick}>
      {label}
      {active && (
        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-linear-to-r from-[#1a2e6c] to-[#c0202a] rounded-full" />
      )}
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

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
        style={{ background: "rgba(0,0,0,0.45)" }}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 sm:w-80 bg-white shadow-2xl lg:hidden flex flex-col transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <Image
              src="/Logo.PNG"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
              unoptimized
            />
            <p className="font-bold text-slate-900 text-sm leading-tight">
              Disha Commerce Classes
            </p>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto py-3 px-3 space-y-0.5">
          {navLinks.map((l) => (
            <NavLink
              key={l.href}
              href={l.href}
              label={l.label}
              active={pathname === l.href}
              onClick={() => setMenuOpen(false)}
            />
          ))}
          <hr className="my-2 border-slate-100" />
          {moreLinks.map((l) =>
            l.href.startsWith("http") ? (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-[#1a2e6c] hover:bg-[#c0202a]/10 rounded-lg transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-[#1a2e6c] hover:bg-[#c0202a]/10 rounded-lg transition-colors"
              >
                {l.label}
              </Link>
            ),
          )}
        </div>

        {/* Footer CTA */}
        <div className="p-4 border-t border-slate-100">
          <a
            href="tel:+917700879453"
            className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            <Phone className="w-4 h-4" />
            +91 77008 79453
          </a>
        </div>
      </div>
    </>
  );
}
