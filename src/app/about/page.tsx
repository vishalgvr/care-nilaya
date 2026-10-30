import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Shield,
  MapPin,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Compass,
  Users2,
  Lock,
  Eye,
  FileCheck,
} from "lucide-react";
import { PILOT_CONFIG } from "@/data/careNilayaData";

export const metadata: Metadata = {
  title: "About Us | Care Nilaya — Digital Family-Care Coordination",
  description:
    "Learn about Care Nilaya's mission, operating model between Mauritius and Thrissur, parent-first dignity principles, and phased validation roadmap.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-[#f8f3fc] to-[#fdfbfe] border-b border-[#ebdff7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f5f0fb] border border-[#e3d5f3] text-xs font-semibold text-[#522368]">
            <Heart className="w-3.5 h-3.5 text-[#522368] fill-current" />
            Our Mission &amp; Purpose
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-[#1f1726] font-serif tracking-tight">
            Built on Respect, Dignity, and Honest Connection
          </h1>

          <p className="text-base sm:text-lg text-[#534a5c] leading-relaxed max-w-2xl mx-auto">
            Care Nilaya is a digital family-care coordination platform designed for Malayali families living outside Kerala whose parents reside in Kerala.
          </p>

          <p className="text-xs sm:text-sm font-medium text-[#522368] italic">
            &ldquo;{PILOT_CONFIG.malayalamTagline}&rdquo; — {PILOT_CONFIG.tagline}
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#522368]">
                The Story Behind Care Nilaya
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1f1726] font-serif">
                Bridging Distance Without Diminishing Independence
              </h2>
              <p className="text-sm text-[#534a5c] leading-relaxed">
                Millions of Malayali sons and daughters live across the GCC, Europe, North America, and Indian metropolitan hubs like Bengaluru and Mumbai. While careers and lives are built far away, hearts remain rooted in Kerala.
              </p>
              <p className="text-sm text-[#534a5c] leading-relaxed">
                As parents grow older in Kerala, everyday coordination becomes tricky. You don&apos;t want to call every single day interrogating them about doctor visits or medicine refills. And parents, with their characteristic self-reliance, will often say <em>&ldquo;Everything is taken care of, don&apos;t worry about us.&rdquo;</em>
              </p>
              <p className="text-sm text-[#534a5c] leading-relaxed">
                Care Nilaya was founded to solve this exact tension: an organised, calm, non-intrusive coordination service that acts as a respectful family bridge.
              </p>
            </div>

            <div className="md:col-span-6 bg-[#f5f0fb] rounded-3xl p-8 border border-[#e3d5f3] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#522368] text-white flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1f1726] font-serif">
                The Guiding Belief
              </h3>
              <blockquote className="text-sm text-[#3a164b] italic font-serif leading-relaxed border-l-2 border-[#522368] pl-4">
                &ldquo;The first goal is not to build a large company immediately. It is to build a small, trustworthy service that delivers exactly what it promises—and earns the right to grow.&rdquo;
              </blockquote>
              <p className="text-xs text-[#61566b]">
                — Care Nilaya Project Blueprint
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-[#fdfbfe] border-t border-[#ebdff7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-3xl border border-[#ebdff7] p-8 space-y-4 shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f0fb] text-xs font-bold text-[#522368]">
                <Globe2 className="w-3.5 h-3.5" />
                Our Vision
              </div>
              <h3 className="text-2xl font-bold text-[#1f1726] font-serif">
                A Globally Connected Kerala Family Platform
              </h3>
              <p className="text-sm text-[#534a5c] leading-relaxed">
                To become a trusted family-care coordination platform connecting Malayali families across the world with organised, respectful support for their loved ones in Kerala.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl border border-[#ebdff7] p-8 space-y-4 shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f0fb] text-xs font-bold text-[#522368]">
                <Shield className="w-3.5 h-3.5" />
                Our Core Mission
              </div>
              <h3 className="text-2xl font-bold text-[#1f1726] font-serif">
                Thoughtful, Consent-First Care
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#534a5c]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Make everyday family-care coordination easier for people living away from home.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Help families organise reminders, check-ins, and requests through clear digital workflows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Respect parents&apos; dignity, independence, privacy, and informed choices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Expand carefully from Thrissur to other parts of Kerala only after validated service quality.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Model & Transparency */}
      <section className="py-16 bg-white border-t border-[#ebdff7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#522368] bg-[#f5f0fb] px-3 py-1 rounded-full border border-[#ebdff7]">
              Structure &amp; Accountability
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1f1726] font-serif">
              Our Lean Operating Model
            </h2>
            <p className="text-sm text-[#61566b]">
              Care Nilaya operates with absolute role clarity, combining digital management with ground verification in Thrissur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#fdfbfe] border border-[#ebdff7] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#522368] text-white flex items-center justify-center font-bold text-sm">
                MU
              </div>
              <h4 className="font-bold text-base text-[#1f1726]">
                Founder — Mauritius
              </h4>
              <p className="text-xs sm:text-sm text-[#61566b] leading-relaxed">
                Centralized business management, customer enquiries, onboarding, consent protocol, scheduling, reports, complaints resolution, and quality standards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fdfbfe] border border-[#ebdff7] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-sm">
                TCR
              </div>
              <h4 className="font-bold text-base text-[#1f1726]">
                Trusted Local Contact — Thrissur
              </h4>
              <p className="text-xs sm:text-sm text-[#61566b] leading-relaxed">
                Limited in-person verification of prospective service providers and business addresses in Thrissur. No clinical tasks, and no unauthorized customer data access.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fdfbfe] border border-[#ebdff7] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#6c3286] text-white flex items-center justify-center font-bold text-sm">
                FM
              </div>
              <h4 className="font-bold text-base text-[#1f1726]">
                Customer &amp; Family
              </h4>
              <p className="text-xs sm:text-sm text-[#61566b] leading-relaxed">
                Provides accurate appointment details, secures parent willingness, selects communication preferences, and reviews monthly activity digests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical Statement: Zero Fake Claims */}
      <section className="py-16 bg-[#f5f0fb] border-y border-[#ebdff7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex p-2 rounded-2xl bg-white border border-[#e3d5f3] text-[#522368]">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1f1726] font-serif">
            Our Authenticity Promise: No Fabricated Claims
          </h2>
          <p className="text-sm sm:text-base text-[#534a5c] leading-relaxed">
            In an industry where many websites display stock photos with fictitious 5-star quotes or exaggerated hospital badges, Care Nilaya takes an unapologetically honest stance.
          </p>
          <div className="bg-white rounded-2xl p-6 border border-[#e3d5f3] text-left grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#534a5c]">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>We do not publish fake client testimonials.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>We do not claim medical partnerships that do not exist.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>We openly declare our initial 5–10 family pilot target.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>We strictly enforce non-clinical operational boundaries.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#522368] bg-[#f5f0fb] px-3 py-1 rounded-full border border-[#ebdff7]">
              Long-Term Vision
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f1726] font-serif">
              Our Phased Growth Roadmap
            </h2>
            <p className="text-sm text-[#61566b]">
              Growing in disciplined stages rather than trying to become everything to everyone overnight.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl border border-emerald-300 bg-emerald-50/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  Stage 1 — Active Now
                </span>
                <h4 className="font-bold text-base text-emerald-950 mt-0.5">
                  Digital Coordination Pilot in Thrissur City
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800">
                  Initial cohort of 5 to 10 paying pilot families validating ₹999 Family Assist membership.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-200 text-emerald-900 text-xs font-bold flex-shrink-0">
                In Progress
              </span>
            </div>

            <div className="p-5 rounded-2xl border border-[#ebdff7] bg-[#fdfbfe] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-[#61566b] uppercase tracking-wider">
                  Stage 2
                </span>
                <h4 className="font-bold text-base text-[#1f1726] mt-0.5">
                  Refine Workflows, Retention &amp; Consent Protocols
                </h4>
                <p className="text-xs sm:text-sm text-[#61566b]">
                  Deepen customer feedback, enhance portal convenience, and optimize founder-family communication.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#f5f0fb] text-[#522368] text-xs font-bold flex-shrink-0">
                Upcoming
              </span>
            </div>

            <div className="p-5 rounded-2xl border border-[#ebdff7] bg-[#fdfbfe] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-[#61566b] uppercase tracking-wider">
                  Stage 3 &amp; 4
                </span>
                <h4 className="font-bold text-base text-[#1f1726] mt-0.5">
                  Verified Local Partner Introduction &amp; Kerala District Expansion
                </h4>
                <p className="text-xs sm:text-sm text-[#61566b]">
                  Expand to Ernakulam, Kozhikode, and other districts only with vetted written arrangements.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#f5f0fb] text-[#522368] text-xs font-bold flex-shrink-0">
                Planned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#3a164b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif">
            Ready to Connect Your Family?
          </h2>
          <p className="text-sm text-[#d9c7f2] max-w-xl mx-auto">
            Experience the peace of mind that comes from structured, respectful family coordination.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/membership"
              className="px-6 py-3 rounded-2xl bg-[#d9c7f2] text-[#3a164b] hover:bg-white font-bold text-sm transition-colors shadow-sm"
            >
              View Membership Plan
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-2xl border border-white/20 text-white hover:bg-white/10 font-semibold text-sm transition-colors"
            >
              Speak with Our Founder
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
