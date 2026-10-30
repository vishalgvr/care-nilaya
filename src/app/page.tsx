import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  PhoneCall,
  FileText,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Heart,
  Sparkles,
  MapPin,
  AlertTriangle,
  HelpCircle,
  MessageSquare,
  Users,
} from "lucide-react";
import ScopeFilter from "@/components/ScopeFilter";
import PilotEligibilityWidget from "@/components/PilotEligibilityWidget";
import { PILOT_CONFIG, BLUEPRINT_FAQS } from "@/data/careNilayaData";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#f8f3fc] via-[#fdfbfe] to-white">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-[#d9c7f2]/20 via-[#f0e6fc]/40 to-[#d9c7f2]/10 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Core Messaging */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Pilot & Brand Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f0fb] border border-[#e3d5f3] shadow-xs">
                <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="text-xs font-semibold text-[#522368]">
                  Thrissur City Pilot Intake Active
                </span>
                <span className="text-[#897e93] text-xs">•</span>
                <span className="text-xs text-[#61566b] font-medium hidden sm:inline">
                  {PILOT_CONFIG.tagline}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1f1726] tracking-tight font-serif leading-[1.15]">
                Stay Close to Your Parents in Kerala,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#522368] via-[#6c3286] to-[#894da4]">
                  No Matter How Far
                </span>{" "}
                You Live.
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-[#534a5c] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Care Nilaya is a digital family-care coordination service designed for Malayali families living across the globe. We coordinate gentle weekly check-ins, appointment reminders, and family requests—honouring parents&apos; independence and giving adult children true peace of mind.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  href="/membership"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#522368] to-[#3a164b] hover:from-[#6c3286] hover:to-[#522368] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#522368]/20 hover:shadow-xl transition-all transform active:scale-98"
                >
                  <span>Explore Family Assist</span>
                  <span className="bg-[#d9c7f2] text-[#3a164b] text-xs px-2.5 py-0.5 rounded-full font-bold">
                    ₹999/mo
                  </span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-[#ebdff7] text-[#522368] hover:bg-[#f5f0fb] font-semibold text-sm sm:text-base transition-colors shadow-xs"
                >
                  Request a Discovery Call
                </Link>
              </div>

              {/* Reassurance Micro-List */}
              <div className="pt-4 border-t border-[#ebdff7]/80 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-[#61566b]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  100% Parent Consent
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Non-Clinical Coordination
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Direct Founder Oversight
                </span>
              </div>
            </div>

            {/* Right Column: Authentic Editorial Photo with Overlay Cards */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Glow ring */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#d9c7f2] via-[#e3d5f3] to-white rounded-3xl blur-xl opacity-70 -z-10" />

                <div className="relative rounded-3xl overflow-hidden border border-[#ebdff7] shadow-2xl bg-white">
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                    <Image
                      src="/images/hero-parents.jpg"
                      alt="Malayali parents smiling on their home veranda in Kerala"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 540px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <p className="text-xs font-medium text-white/90">
                        {PILOT_CONFIG.malayalamTagline}
                      </p>
                      <p className="text-[11px] text-white/75">
                        Gentle weekly connection preserving parents&apos; dignity &amp; home comfort.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Reassurance Badge 1 */}
                <div className="absolute -top-4 -right-3 sm:-right-4 bg-white/95 backdrop-blur-md border border-[#ebdff7] rounded-2xl p-3 shadow-lg flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1f1726]">
                      Weekly Wellbeing Call
                    </p>
                    <p className="text-[10px] text-[#61566b]">
                      Scheduled with parent consent
                    </p>
                  </div>
                </div>

                {/* Floating Reassurance Badge 2 */}
                <div className="absolute -bottom-5 -left-3 sm:-left-4 bg-white/95 backdrop-blur-md border border-[#ebdff7] rounded-2xl p-3 shadow-lg flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#f5f0fb] text-[#522368] flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1f1726]">
                      Monthly Factual Digest
                    </p>
                    <p className="text-[10px] text-[#61566b]">
                      Sent to authorized family abroad
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPARENT TRUST STRIP */}
      <section className="bg-white border-y border-[#ebdff7] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-2">
              <p className="text-xl sm:text-2xl font-bold text-[#522368] font-serif">
                Thrissur
              </p>
              <p className="text-xs text-[#61566b] mt-0.5 font-medium">
                Focused City Pilot Phase
              </p>
            </div>
            <div className="p-2">
              <p className="text-xl sm:text-2xl font-bold text-[#522368] font-serif">
                ₹999 / mo
              </p>
              <p className="text-xs text-[#61566b] mt-0.5 font-medium">
                Transparent Pilot Price
              </p>
            </div>
            <div className="p-2">
              <p className="text-xl sm:text-2xl font-bold text-[#522368] font-serif">
                Non-Clinical
              </p>
              <p className="text-xs text-[#61566b] mt-0.5 font-medium">
                Strict Ethical Boundaries
              </p>
            </div>
            <div className="p-2">
              <p className="text-xl sm:text-2xl font-bold text-[#522368] font-serif">
                100% Consent
              </p>
              <p className="text-xs text-[#61566b] mt-0.5 font-medium">
                Parents Retain Complete Choice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE CHALLENGE OF DISTANCE (Authentic Malayali Family Scenarios) */}
      <section className="py-16 lg:py-24 bg-[#fdfbfe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#522368] bg-[#f5f0fb] px-3 py-1 rounded-full border border-[#ebdff7]">
              Why Care Nilaya Exists
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1f1726] font-serif">
              The Reality of Caring for Parents from Afar
            </h2>
            <p className="text-sm sm:text-base text-[#61566b] leading-relaxed">
              When you live in Dubai, Abu Dhabi, London, or Bengaluru, keeping track of routine family tasks back home in Thrissur can feel surprisingly stressful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl border border-[#ebdff7] p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#f5f0fb] text-[#522368] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-[#1f1726]">
                &ldquo;Everything is Fine, Makkale&rdquo;
              </h3>
              <p className="text-sm text-[#61566b] leading-relaxed">
                Parents rarely want to worry their children abroad with mundane difficulties—a rescheduled eye doctor appointment, an overdue medicine refill, or a small household errand.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-[#ebdff7] p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#f5f0fb] text-[#522368] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-[#1f1726]">
                Scattered WhatsApp Reminders
              </h3>
              <p className="text-sm text-[#61566b] leading-relaxed">
                Family messages get buried in chaotic group chats. Siblings wonder if a consultation took place, who coordinated the follow-up, or when the next check-in is scheduled.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-[#ebdff7] p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#f5f0fb] text-[#522368] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-[#1f1726]">
                Guilt vs. Dignity Balance
              </h3>
              <p className="text-sm text-[#61566b] leading-relaxed">
                Adult children don&apos;t want to sound like micro-managers or make independent parents feel like they are losing autonomy. Care Nilaya acts as a calm, respectful bridge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE COORDINATION PILLARS */}
      <section className="py-16 lg:py-24 bg-white border-t border-[#ebdff7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#522368] bg-[#f5f0fb] px-3 py-1 rounded-full border border-[#ebdff7]">
              Our Digital Solution
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1f1726] font-serif">
              What Care Nilaya Does For Your Family
            </h2>
            <p className="text-sm sm:text-base text-[#61566b] leading-relaxed">
              We focus on simple, high-consistency digital coordination that respects parents and keeps siblings informed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="bg-[#fdfbfe] rounded-2xl border border-[#ebdff7] p-6 space-y-3 hover:border-[#522368]/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#522368] text-white flex items-center justify-center">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#1f1726]">
                Weekly Wellbeing Check-in
              </h3>
              <p className="text-xs sm:text-sm text-[#61566b] leading-relaxed">
                One agreed weekly non-clinical phone conversation in Malayalam with parent consent. We check on their comfort and record operational status.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#fdfbfe] rounded-2xl border border-[#ebdff7] p-6 space-y-3 hover:border-[#522368]/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#522368] text-white flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#1f1726]">
                Appointment Reminders
              </h3>
              <p className="text-xs sm:text-sm text-[#61566b] leading-relaxed">
                Structured reminders for doctor consultations, routine lab follow-ups, and family-supplied dates. No clinical recommendations.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#fdfbfe] rounded-2xl border border-[#ebdff7] p-6 space-y-3 hover:border-[#522368]/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#522368] text-white flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#1f1726]">
                Monthly Family Digest
              </h3>
              <p className="text-xs sm:text-sm text-[#61566b] leading-relaxed">
                A clean, factual written summary of completed check-ins, reminders, and open items delivered directly to authorized family members.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-[#fdfbfe] rounded-2xl border border-[#ebdff7] p-6 space-y-3 hover:border-[#522368]/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#522368] text-white flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#1f1726]">
                Family Coordination Desk
              </h3>
              <p className="text-xs sm:text-sm text-[#61566b] leading-relaxed">
                One non-clinical coordination request per month (e.g. verifying a local address or transport) plus WhatsApp support during business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SERVICE SCOPE & BOUNDARIES */}
      <section id="scope" className="py-16 lg:py-24 bg-[#f8f4fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#522368] bg-white px-3 py-1 rounded-full border border-[#ebdff7]">
              Uncompromising Transparency
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1f1726] font-serif">
              Clear Boundaries: What is Included vs Excluded
            </h2>
            <p className="text-sm sm:text-base text-[#61566b] leading-relaxed">
              We state our service limits openly so there is never ambiguity. Care Nilaya is a coordination and communication service, not a healthcare provider or 24/7 emergency service.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <ScopeFilter />
          </div>
        </div>
      </section>

      {/* PILOT ELIGIBILITY CHECKER */}
      <section className="py-16 lg:py-24 bg-white border-t border-[#ebdff7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#522368] bg-[#f5f0fb] px-3 py-1 rounded-full border border-[#ebdff7]">
                Current Availability
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#1f1726] font-serif">
                Is Your Family Covered in Our Initial Intake?
              </h2>
              <p className="text-sm text-[#61566b] leading-relaxed">
                To guarantee personal oversight and meticulous quality, our initial validation cohort is limited to <strong>5 to 10 families</strong> with parents residing in Thrissur city.
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-[#1f1726]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#522368]" />
                  <span><strong>Active:</strong> Thrissur urban wards and central localities</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#522368]" />
                  <span><strong>Next phase:</strong> Ernakulam, Kozhikode, and other districts</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#522368]" />
                  <span><strong>Founder model:</strong> Remote management with local Thrissur checks</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <PilotEligibilityWidget />
            </div>
          </div>
        </div>
      </section>

      {/* BLUEPRINT FAQS */}
      <section className="py-16 lg:py-24 bg-[#fdfbfe] border-t border-[#ebdff7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#522368] bg-[#f5f0fb] px-3 py-1 rounded-full border border-[#ebdff7]">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1f1726] font-serif">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#61566b]">
              Transparent answers regarding our scope, operating model, and pilot terms.
            </p>
          </div>

          <div className="space-y-4">
            {BLUEPRINT_FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-2xl border border-[#ebdff7] p-5 transition-all open:border-[#522368]/30 open:shadow-sm"
              >
                <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-[#1f1726] cursor-pointer list-none focus:outline-none">
                  <span>{faq.q}</span>
                  <span className="ml-4 text-[#522368] group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-[#61566b] leading-relaxed border-t border-[#ebdff7]/60 pt-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-[#522368] to-[#3a164b] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#d9c7f2]">
            Care Nilaya • Thrissur City Pilot
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif leading-tight">
            Bring Calm, Respectful Coordination to Your Parents in Kerala
          </h2>
          <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Join our limited pilot cohort. No long-term lock-ins, no aggressive upsells, and no compromises on your parents&apos; dignity.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/membership"
              className="px-6 py-3.5 rounded-2xl bg-white text-[#3a164b] hover:bg-[#f5f0fb] font-bold text-sm shadow-md transition-colors"
            >
              View Family Assist Membership (₹999/mo)
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-2xl bg-[#522368]/40 border border-[#d9c7f2]/30 text-white hover:bg-white/10 font-semibold text-sm transition-colors"
            >
              Request a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
