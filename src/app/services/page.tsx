import type { Metadata } from "next";
import Link from "next/link";
import {
  PhoneCall,
  Calendar,
  FileText,
  Clock,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  HelpCircle,
  AlertTriangle,
  ArrowRight,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import ScopeFilter from "@/components/ScopeFilter";
import { PILOT_CONFIG } from "@/data/careNilayaData";

export const metadata: Metadata = {
  title: "Services & Scope | Care Nilaya — Non-Clinical Family Coordination",
  description:
    "Explore Care Nilaya's digital family-care services: weekly non-clinical wellbeing check-ins, appointment reminders, monthly summaries, and strict non-clinical boundaries.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-[#f8f3fc] to-[#fdfbfe] border-b border-[#ebdff7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f5f0fb] border border-[#e3d5f3] text-xs font-semibold text-[#522368]">
            <Sparkles className="w-3.5 h-3.5 text-[#522368]" />
            Digital Family-Care Coordination
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-[#1f1726] font-serif tracking-tight">
            Thoughtful Coordination, Honest Boundaries
          </h1>

          <p className="text-base sm:text-lg text-[#534a5c] leading-relaxed max-w-2xl mx-auto">
            Care Nilaya provides structured digital coordination to help Malayali families living abroad support their parents in Kerala. We do not provide medical diagnosis, clinical care, or emergency response.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#522368]">
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-[#ebdff7]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Initial Pilot: Thrissur City
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-[#ebdff7]">
              <Clock className="w-4 h-4 text-[#522368]" />
              Mon–Sat 10:00 AM – 6:00 PM IST
            </span>
          </div>
        </div>
      </section>

      {/* Five Core Coordination Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#522368] bg-[#f5f0fb] px-3 py-1 rounded-full border border-[#ebdff7]">
              Included in Family Assist
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1f1726] font-serif">
              Our Five Coordination Modules
            </h2>
            <p className="text-sm text-[#61566b]">
              Every module is designed to provide consistency for children and dignity for parents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-[#fdfbfe] rounded-3xl border border-[#ebdff7] p-7 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#522368] text-white flex items-center justify-center">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1f1726]">
                1. Weekly Wellbeing Check-in
              </h3>
              <p className="text-sm text-[#534a5c] leading-relaxed">
                One agreed weekly conversational call with your parents in Malayalam or English. We check in respectfully on how their week is going and note operational status.
              </p>
              <div className="bg-white p-3 rounded-xl border border-[#ebdff7] text-xs text-[#61566b] space-y-1">
                <div className="font-semibold text-[#522368]">
                  Operational Records:
                </div>
                <div>Completed • Rescheduled • Declined • Not Answered</div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-[#fdfbfe] rounded-3xl border border-[#ebdff7] p-7 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#522368] text-white flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1f1726]">
                2. Family Appointment Reminders
              </h3>
              <p className="text-sm text-[#534a5c] leading-relaxed">
                Timely, gentle reminders for hospital appointments, specialist visits, routine lab tests, and prescription refills based strictly on dates provided by the family.
              </p>
              <div className="bg-white p-3 rounded-xl border border-[#ebdff7] text-xs text-[#61566b] space-y-1">
                <div className="font-semibold text-[#522368]">Channels:</div>
                <div>WhatsApp &amp; SMS alerts to parents &amp; diaspora contacts</div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-[#fdfbfe] rounded-3xl border border-[#ebdff7] p-7 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#522368] text-white flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1f1726]">
                3. Monthly Factual Digest
              </h3>
              <p className="text-sm text-[#534a5c] leading-relaxed">
                A concise, written monthly summary summarizing check-in logs, reminders sent, completed family tasks, and upcoming milestones so all siblings stay updated.
              </p>
              <div className="bg-white p-3 rounded-xl border border-[#ebdff7] text-xs text-[#61566b] space-y-1">
                <div className="font-semibold text-[#522368]">Delivery:</div>
                <div>Shared securely via Customer Portal &amp; WhatsApp PDF</div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-[#fdfbfe] rounded-3xl border border-[#ebdff7] p-7 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#522368] text-white flex items-center justify-center">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1f1726]">
                4. Monthly Coordination Request
              </h3>
              <p className="text-sm text-[#534a5c] leading-relaxed">
                Coordination of one specific non-clinical family request per month (e.g. verifying a Thrissur medical clinic&apos;s working hours, finding local transport assistance, etc.).
              </p>
              <div className="bg-white p-3 rounded-xl border border-[#ebdff7] text-xs text-[#61566b] space-y-1">
                <div className="font-semibold text-[#522368]">Scope:</div>
                <div>Non-clinical, logistical, and administrative support</div>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-[#fdfbfe] rounded-3xl border border-[#ebdff7] p-7 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#522368] text-white flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1f1726]">
                5. WhatsApp Family Support Desk
              </h3>
              <p className="text-sm text-[#534a5c] leading-relaxed">
                Direct WhatsApp channel with our founder and coordination desk during published hours to log schedule changes, ask questions, or update preferences.
              </p>
              <div className="bg-white p-3 rounded-xl border border-[#ebdff7] text-xs text-[#61566b] space-y-1">
                <div className="font-semibold text-[#522368]">Hours:</div>
                <div>Mon–Sat 10:00 AM – 6:00 PM IST (Target: 1 business day)</div>
              </div>
            </div>

            {/* Service Summary Card */}
            <div className="bg-gradient-to-br from-[#522368] to-[#3a164b] text-white rounded-3xl p-7 flex flex-col justify-between shadow-md">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#d9c7f2]">
                  Pilot Offering
                </span>
                <h3 className="text-2xl font-bold font-serif">
                  All 5 Modules in Family Assist
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  Everything you need to keep family care structured, transparent, and calm across distances.
                </p>
              </div>

              <div className="pt-6">
                <div className="text-2xl font-bold text-white mb-2">
                  ₹{PILOT_CONFIG.priceInr}{" "}
                  <span className="text-xs font-normal text-[#d9c7f2]">
                    / month
                  </span>
                </div>
                <Link
                  href="/membership"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#d9c7f2] hover:bg-white text-[#3a164b] font-bold text-xs transition-colors"
                >
                  View Membership Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Scope Explorer */}
      <section id="scope" className="py-16 bg-[#f8f4fc] border-t border-[#ebdff7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#522368] bg-white px-3 py-1 rounded-full border border-[#ebdff7]">
              Interactive Scope Guide
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1f1726] font-serif">
              What Is Covered vs. Strictly Excluded
            </h2>
            <p className="text-sm text-[#61566b]">
              Use our interactive search below to check any specific family activity before enrolling.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <ScopeFilter />
          </div>
        </div>
      </section>

      {/* Operating Hours & Timetable */}
      <section className="py-16 bg-white border-t border-[#ebdff7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#522368]">
                Availability &amp; Boundaries
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1f1726] font-serif">
                Support Hours &amp; Response Times
              </h2>
              <p className="text-sm text-[#534a5c] leading-relaxed">
                Clear working hours protect service consistency, quality, and realistic expectations for overseas families living in different time zones.
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-[#1f1726]">
                <div className="p-3 rounded-xl bg-[#f5f0fb] border border-[#ebdff7] flex justify-between items-center">
                  <span className="font-semibold">Monday – Saturday</span>
                  <span className="text-[#522368] font-bold">10:00 AM – 6:00 PM IST</span>
                </div>
                <div className="p-3 rounded-xl bg-[#fdfbfe] border border-[#ebdff7] flex justify-between items-center">
                  <span className="font-semibold text-gray-500">Sunday</span>
                  <span className="text-gray-500 font-medium">Closed for Family Rest</span>
                </div>
                <div className="p-3 rounded-xl bg-[#fdfbfe] border border-[#ebdff7] flex justify-between items-center">
                  <span className="font-semibold">Standard Enquiry Response</span>
                  <span className="text-[#522368] font-bold">Within 1 Business Day</span>
                </div>
              </div>
            </div>

            <div className="bg-[#fff9ef] rounded-3xl p-6 sm:p-8 border border-[#f3dfb9] space-y-4">
              <div className="flex items-center gap-2 text-amber-800">
                <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                <h3 className="font-bold text-base">Emergency Protocol</h3>
              </div>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                Care Nilaya is strictly <strong>not an emergency service</strong>. If a parent encounters an acute medical emergency, chest pain, stroke symptoms, or falls, family members or neighbors must dial local Indian emergency numbers immediately:
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-white p-3 rounded-xl border border-amber-200 text-center">
                  <span className="text-xs text-gray-500 uppercase font-semibold">National Emergency</span>
                  <p className="text-xl font-bold text-[#1f1726] mt-0.5">112</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-amber-200 text-center">
                  <span className="text-xs text-gray-500 uppercase font-semibold">Ambulance Service</span>
                  <p className="text-xl font-bold text-[#1f1726] mt-0.5">108</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#3a164b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif">
            Have Questions About What Is Included?
          </h2>
          <p className="text-sm text-[#d9c7f2] max-w-xl mx-auto">
            Our founder personally reviews each family&apos;s requests during discovery to verify suitability before any payment is requested.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-2xl bg-[#d9c7f2] text-[#3a164b] hover:bg-white font-bold text-sm transition-colors shadow-sm"
            >
              Schedule a Discovery Call
            </Link>
            <Link
              href="/how-it-works"
              className="px-6 py-3 rounded-2xl border border-white/20 text-white hover:bg-white/10 font-semibold text-sm transition-colors"
            >
              See How It Works Step-by-Step
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
