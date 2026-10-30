import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  HeartHandshake,
  Settings,
  PhoneCall,
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  UserCheck,
  Volume2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works | Care Nilaya — Transparent 5-Step Process",
  description:
    "Discover how Care Nilaya works from initial family discovery to respectful parent consent, weekly check-in coordination, and monthly activity digests.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Family Discovery Conversation",
      subtitle: "Understanding your family's needs",
      description:
        "You reach out through our website or WhatsApp. We discuss your parents' locality in Thrissur, your family setup across time zones, and clarify what is included and excluded. We never promise services outside our pilot scope.",
      highlight: "No obligation • Scope & boundary transparency",
    },
    {
      step: "02",
      icon: UserCheck,
      title: "Parent Explanation & Informed Consent",
      subtitle: "Dignity and voluntary participation first",
      description:
        "We speak directly with your parents in Malayalam (or their preferred language) in a warm, unhurried tone. We explain how the service helps organize reminders. An active schedule is only initiated once your parents give their informed consent.",
      highlight: "Malayalam speaking • 100% voluntary • No surprise calls",
    },
    {
      step: "03",
      icon: Settings,
      title: "Account Setup & Schedule Confirmation",
      subtitle: "Tailoring preferences and authorized contacts",
      description:
        "We configure authorized family members (so siblings abroad stay aligned), record parent communication preferences, preferred check-in days and times, and enter family-supplied appointment dates.",
      highlight: "Secure contact records • Single coordinated thread",
    },
    {
      step: "04",
      icon: PhoneCall,
      title: "Weekly Coordination & Appointment Reminders",
      subtitle: "Calm, consistent weekly rhythm",
      description:
        "Every week, we conduct the agreed non-clinical wellbeing call and dispatch appointment reminders. We log operational status factually: completed, rescheduled, not answered, declined, or cancelled.",
      highlight: "Mon–Sat daytime coordination • Factual status logging",
    },
    {
      step: "05",
      icon: FileCheck2,
      title: "Monthly Family Activity Digest",
      subtitle: "Complete clarity for the family abroad",
      description:
        "At the close of each month, we issue a clear written summary of all completed check-ins, reminders sent, pending family items, and agreed follow-ups. You know exactly what happened back home.",
      highlight: "Shared securely via WhatsApp PDF & Customer Portal",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-[#f8f3fc] to-[#fdfbfe] border-b border-[#ebdff7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f5f0fb] border border-[#e3d5f3] text-xs font-semibold text-[#522368]">
            <HeartHandshake className="w-3.5 h-3.5 text-[#522368]" />
            Respectful Coordination Workflow
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-[#1f1726] font-serif tracking-tight">
            How Care Nilaya Works For Your Family
          </h1>

          <p className="text-base sm:text-lg text-[#534a5c] leading-relaxed max-w-2xl mx-auto">
            A simple, structured 5-step journey built to remove anxiety for adult children while preserving parents&apos; pride, autonomy, and privacy.
          </p>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="relative p-6 sm:p-8 rounded-3xl border border-[#ebdff7] bg-[#fdfbfe] hover:border-[#522368]/30 transition-all shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    {/* Number Badge & Icon */}
                    <div className="flex sm:flex-col items-center gap-3 flex-shrink-0">
                      <span className="text-2xl font-bold font-serif text-[#522368] w-12 h-12 rounded-2xl bg-[#f5f0fb] border border-[#ebdff7] flex items-center justify-center">
                        {item.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#ebdff7] text-[#522368] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h2 className="text-xl font-bold text-[#1f1726] font-serif">
                          {item.title}
                        </h2>
                        <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                          {item.highlight}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-[#522368]">
                        {item.subtitle}
                      </p>
                      <p className="text-sm text-[#534a5c] leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Parent Dignity & Consent Architecture */}
      <section id="consent" className="py-16 bg-[#f8f4fc] border-t border-[#ebdff7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#e3d5f3] p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#f5f0fb] text-[#522368]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#522368]">
                  Core Operating Safeguard
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1f1726] font-serif">
                  Our Parent Consent &amp; Dignity Architecture
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#534a5c] leading-relaxed">
              We never treat elderly parents as passive recipients. In Malayali culture, parents hold high pride and independence. Here is how we protect their agency at every step:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#534a5c]">
              <div className="p-4 rounded-xl bg-[#fdfbfe] border border-[#ebdff7] space-y-1">
                <div className="font-bold text-[#1f1726] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Direct Conversation in Malayalam
                </div>
                <p className="text-[#61566b]">
                  We speak in their mother tongue with cultural warmth and respect.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#fdfbfe] border border-[#ebdff7] space-y-1">
                <div className="font-bold text-[#1f1726] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Right to Decline Anytime
                </div>
                <p className="text-[#61566b]">
                  If a parent is busy or prefers not to speak on a given day, their choice is honored immediately.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#fdfbfe] border border-[#ebdff7] space-y-1">
                <div className="font-bold text-[#1f1726] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Factual Operational Logging
                </div>
                <p className="text-[#61566b]">
                  We record only operational statuses without intrusive personal interrogations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#fdfbfe] border border-[#ebdff7] space-y-1">
                <div className="font-bold text-[#1f1726] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Strict Non-Clinical Boundary
                </div>
                <p className="text-[#61566b]">
                  We never pretend to be healthcare clinicians, avoiding confusion or false medical reliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Simulation: A Typical Month */}
      <section className="py-16 bg-white border-t border-[#ebdff7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#522368] bg-[#f5f0fb] px-3 py-1 rounded-full border border-[#ebdff7]">
              Real-World Preview
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f1726] font-serif">
              A Typical Month with Care Nilaya
            </h2>
            <p className="text-sm text-[#61566b]">
              What family care coordination looks like in practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#fdfbfe] border border-[#ebdff7] space-y-2">
              <span className="text-xs font-bold text-[#522368] uppercase">
                Week 1
              </span>
              <h4 className="font-bold text-sm text-[#1f1726]">
                Consent &amp; First Check-in
              </h4>
              <p className="text-xs text-[#61566b] leading-relaxed">
                Parents welcome the introductory call. We confirm the best recurring morning slot and note their routine.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#fdfbfe] border border-[#ebdff7] space-y-2">
              <span className="text-xs font-bold text-[#522368] uppercase">
                Week 2
              </span>
              <h4 className="font-bold text-sm text-[#1f1726]">
                Appointment Reminder
              </h4>
              <p className="text-xs text-[#61566b] leading-relaxed">
                Reminder dispatched 24h prior to their scheduled cardiologist check-up at Thrissur. Sibling in Dubai notified.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#fdfbfe] border border-[#ebdff7] space-y-2">
              <span className="text-xs font-bold text-[#522368] uppercase">
                Week 3
              </span>
              <h4 className="font-bold text-sm text-[#1f1726]">
                Family Request Handled
              </h4>
              <p className="text-xs text-[#61566b] leading-relaxed">
                Assisted the family in verifying the operational hours and consultation token system for a local ophthalmology clinic.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#fdfbfe] border border-[#ebdff7] space-y-2">
              <span className="text-xs font-bold text-[#522368] uppercase">
                Week 4
              </span>
              <h4 className="font-bold text-sm text-[#1f1726]">
                Monthly Digest Delivered
              </h4>
              <p className="text-xs text-[#61566b] leading-relaxed">
                Clear 1-page digest detailing 4 completed check-ins and the upcoming routine appointments for next month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#3a164b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif">
            Take the First Step Today
          </h2>
          <p className="text-sm text-[#d9c7f2] max-w-xl mx-auto">
            Book a 15-minute discovery conversation with our founder to explore how we can support your family in Thrissur.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-2xl bg-[#d9c7f2] text-[#3a164b] hover:bg-white font-bold text-sm transition-colors shadow-sm"
            >
              Request a Discovery Call
            </Link>
            <Link
              href="/membership"
              className="px-6 py-3 rounded-2xl border border-white/20 text-white hover:bg-white/10 font-semibold text-sm transition-colors"
            >
              View Pilot Membership (₹999/mo)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
