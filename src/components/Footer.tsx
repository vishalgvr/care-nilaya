"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Clock,
  Mail,
  Shield,
  Heart,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#1f1726] text-white border-t border-[#3a164b]">
      {/* Top Banner: Emergency & Operational Scope Disclaimer */}
      <div className="bg-[#2d123d] border-b border-[#441a5b] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs sm:text-sm text-[#d9c7f2]">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-[#d9c7f2] flex-shrink-0" />
            <p>
              <strong className="text-white">Emergency Disclaimer:</strong> Care
              Nilaya is a non-clinical family coordination service and does not
              provide 24/7 monitoring, medical diagnosis, nursing, or emergency
              response. For emergencies, please call{" "}
              <span className="text-white font-bold underline">112</span> or{" "}
              <span className="text-white font-bold underline">108</span> immediately.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/70 flex-shrink-0">
            <MapPin className="w-3.5 h-3.5 text-[#d9c7f2]" />
            <span>Thrissur City, Kerala Initial Pilot</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/95 rounded-xl p-2.5 inline-block shadow-md">
                <Image
                  src="/brand/logo.png"
                  alt="Care Nilaya"
                  width={180}
                  height={50}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-xs font-semibold tracking-wider text-[#d9c7f2] uppercase">
              Care That Connects Families
            </p>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Care Nilaya helps Malayali families living outside Kerala stay
              thoughtfully involved in their parents&apos; everyday support
              through dependable, non-clinical weekly check-ins and appointment
              reminders.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Parent Dignity &amp; Informed Consent</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>No Artificial Testimonials or Unverified Claims</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider text-[#d9c7f2] uppercase">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  About Care Nilaya
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  Services &amp; Scope
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/membership"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  Family Assist Pilot (₹999)
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  Contact &amp; Discovery
                </Link>
              </li>
            </ul>
          </div>

          {/* Operating Transparency */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider text-[#d9c7f2] uppercase">
              Operating Model
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d9c7f2] mt-0.5 flex-shrink-0" />
                <span className="text-xs leading-relaxed">
                  <strong>Thrissur City Pilot:</strong> Local administrative
                  verification &amp; research.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-[#d9c7f2] mt-0.5 flex-shrink-0" />
                <span className="text-xs leading-relaxed">
                  <strong>Central Management:</strong> Founder oversight from
                  Mauritius for digital workflows &amp; quality.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#d9c7f2] mt-0.5 flex-shrink-0" />
                <span className="text-xs leading-relaxed">
                  <strong>Support Hours:</strong> Mon – Sat, 10:00 AM – 6:00 PM
                  IST (Sunday closed).
                </span>
              </li>
            </ul>
          </div>

          {/* Trust & Legal */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider text-[#d9c7f2] uppercase">
              Trust &amp; Legal
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/services#scope"
                  className="hover:text-white transition-colors"
                >
                  Service Boundaries &amp; Scope
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works#consent"
                  className="hover:text-white transition-colors"
                >
                  Parent Consent Protocol
                </Link>
              </li>
              <li className="pt-2">
                <div className="bg-[#2d123d] p-3 rounded-lg border border-[#441a5b]">
                  <p className="text-xs text-gray-300">
                    Questions about our pilot?
                  </p>
                  <a
                    href="mailto:care@carenilaya.com"
                    className="text-xs text-[#d9c7f2] hover:text-white font-medium flex items-center gap-1.5 mt-1"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    care@carenilaya.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {currentYear} Care Nilaya. All rights reserved. A digital family-care coordination platform.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <span className="text-[#d9c7f2]/80 flex items-center gap-1">
              Built with care <Heart className="w-3 h-3 text-[#d9c7f2] fill-current" /> for Kerala families
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
