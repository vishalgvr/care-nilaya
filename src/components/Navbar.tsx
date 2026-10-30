"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Membership", href: "/membership" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fdfbfe]/90 backdrop-blur-md border-b border-[#ebdff7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#522368] rounded-lg p-1"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative w-44 h-12 sm:w-52 sm:h-14 transition-transform group-hover:scale-[1.01]">
              <Image
                src="/brand/logo.png"
                alt="Care Nilaya — Care That Connects Families"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 176px, 208px"
              />
            </div>
            <div className="hidden lg:flex flex-col border-l border-[#e3d5f3] pl-3 py-0.5">
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#522368]">
                Kerala Diaspora Care
              </span>
              <span className="text-[11px] text-[#61566b] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block"></span>
                Thrissur Pilot Active
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all ${
                    active
                      ? "bg-[#522368] text-white shadow-sm shadow-[#522368]/20"
                      : "text-[#1f1726] hover:text-[#522368] hover:bg-[#f5f0fb]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#522368] to-[#3a164b] text-white shadow-md shadow-[#522368]/15 hover:shadow-lg hover:shadow-[#522368]/25 hover:from-[#6c3286] hover:to-[#522368] transition-all transform active:scale-95"
            >
              <span>Family Assist</span>
              <span className="bg-[#d9c7f2] text-[#3a164b] text-xs px-2 py-0.5 rounded-full font-bold">
                ₹999/mo
              </span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/membership"
              className="text-xs font-semibold px-2.5 py-1.5 rounded-full bg-[#522368] text-white"
            >
              ₹999/mo
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#522368] hover:bg-[#f5f0fb] focus:outline-none focus:ring-2 focus:ring-[#522368]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#ebdff7] bg-[#fdfbfe] px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-3 py-2 bg-[#f5f0fb] rounded-xl mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#522368]" />
              <span className="text-xs font-medium text-[#522368]">
                Pilot Service • Thrissur City, Kerala
              </span>
            </div>
            <span className="text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-semibold">
              Live
            </span>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    active
                      ? "bg-[#522368] text-white"
                      : "text-[#1f1726] hover:bg-[#f5f0fb] hover:text-[#522368]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#ebdff7] mt-3 space-y-2">
            <Link
              href="/membership"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-[#522368] to-[#3a164b] text-white font-semibold text-sm shadow-md"
            >
              <span>Explore Family Assist Pilot</span>
              <span className="bg-[#d9c7f2] text-[#3a164b] text-xs px-2.5 py-1 rounded-full font-bold">
                ₹999/month
              </span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#ebdff7] text-[#522368] font-medium text-sm hover:bg-[#f5f0fb]"
            >
              Request a Discovery Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
