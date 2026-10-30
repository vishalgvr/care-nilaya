"use client";

import { useState } from "react";
import Link from "next/link";
import { AlertCircle, MapPin, X, ChevronRight } from "lucide-react";

export default function NoticeBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#3a164b] text-white text-xs sm:text-sm font-medium border-b border-[#522368] relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-1 min-w-[280px]">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold bg-[#d9c7f2] text-[#3a164b]">
            <MapPin className="w-3 h-3 text-[#522368]" />
            Thrissur Pilot
          </span>
          <span className="text-[#e3d5f3] hidden md:inline">|</span>
          <p className="text-white/90 text-xs sm:text-xs md:text-sm">
            <strong className="text-[#d9c7f2] font-semibold">Important Notice:</strong> Care Nilaya is a non-clinical family coordination service. For medical emergencies, dial <strong>112</strong> or <strong>108</strong> immediately.
          </p>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto text-xs">
          <Link
            href="/services#scope"
            className="text-[#d9c7f2] hover:text-white underline underline-offset-2 flex items-center gap-0.5 transition-colors"
          >
            Review Service Scope
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss notice"
            className="text-white/60 hover:text-white p-1 rounded hover:bg-white/10 transition-colors ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
