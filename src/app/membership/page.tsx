import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  X,
  HelpCircle,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Phone,
  CreditCard,
  RefreshCcw,
  Clock,
  MapPin,
  Lock,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { PILOT_CONFIG } from "@/data/careNilayaData";

export const metadata: Metadata = {
  title: "Membership | Care Nilaya — Family Assist Pilot at ₹999/month",
  description:
    "Explore the Family Assist pilot membership at ₹999 per month for Malayali families with parents in Thrissur city. Clear inclusions, exclusions, and flexible monthly terms.",
};

export default function MembershipPage() {
  const inclusions = [
    "One scheduled non-clinical wellbeing check-in call per week (with parent consent)",
    "Appointment reminders based on dates supplied by the family (WhatsApp / SMS)",
    "Routine prescription renewal reminders (non-clinical)",
    "One monthly factual family activity update report",
    "Coordination of one non-clinical family-care request per month",
    "WhatsApp coordination desk during published hours (Mon–Sat 10:00 AM – 6:00 PM IST)",
    "Personal founder oversight and quality review on every family account",
    "No long-term commitment — flexible month-to-month membership",
  ];

  const exclusions = [
    "Medical diagnosis, treatment, prescriptions, or clinical medical advice",
    "Nursing care, physiotherapy, caregiver home visits, or physical attendants",
    "Medicine administration or handling physical medical records",
    "Emergency response, 24/7 fall telemetry, or ambulance dispatch",
    "Payment of third-party provider fees (doctor consultation fees, pharmacy bills)",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-[#f8f3fc] to-[#fdfbfe] border-b border-[#ebdff7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f5f0fb] border border-[#e3d5f3] text-xs font-semibold text-[#522368]">
            <Sparkles className="w-3.5 h-3.5 text-[#522368]" />
            Transparent Pilot Pricing
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-[#1f1726] font-serif tracking-tight">
            One Clear Plan. Zero Hidden Surprises.
          </h1>

          <p className="text-base sm:text-lg text-[#534a5c] leading-relaxed max-w-2xl mx-auto">
            We keep our commercial model transparent and straightforward. Experience our focused digital family coordination in Thrissur city.
          </p>
        </div>
      </section>

      {/* Pricing Card Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Plan Card */}
            <div className="lg:col-span-7 bg-[#fdfbfe] rounded-3xl border-2 border-[#522368]/20 p-8 sm:p-10 shadow-xl shadow-[#522368]/5 relative">
              <div className="absolute -top-3.5 left-8 bg-gradient-to-r from-[#522368] to-[#3a164b] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                Active Thrissur Pilot
              </div>

              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1f1726] font-serif">
                    {PILOT_CONFIG.membershipName}
                  </h2>
                  <p className="text-xs text-[#61566b] mt-0.5">
                    For Malayali families with parents in Thrissur city
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#522368]">
                    ₹{PILOT_CONFIG.priceInr}
                  </div>
                  <div className="text-xs font-medium text-[#61566b]">
                    {PILOT_CONFIG.billingPeriod}
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#534a5c] leading-relaxed mb-6">
                A calm, respectful monthly coordination service connecting overseas adult children with weekly wellbeing check-ins and appointment management for their parents.
              </p>

              <hr className="border-[#ebdff7] mb-6" />

              {/* Inclusions */}
              <div className="space-y-3 mb-8">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#522368]">
                  What is included every month:
                </h3>
                {inclusions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#1f1726] leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <a
                href="#apply"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#522368] to-[#3a164b] hover:from-[#6c3286] hover:to-[#522368] text-white font-semibold text-sm shadow-md transition-all transform active:scale-98"
              >
                <span>Apply for Pilot Intake (5–10 Families)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-center text-[11px] text-[#897e93] mt-3">
                No automatic charges. We speak with you and your parents first.
              </p>
            </div>

            {/* Right Column: Exclusions & Commercial Rationale */}
            <div className="lg:col-span-5 space-y-6">
              {/* Exclusions Card */}
              <div className="bg-[#faf8fc] rounded-3xl border border-rose-200/80 p-6 sm:p-7 space-y-4">
                <div className="flex items-center gap-2 text-rose-800">
                  <ShieldCheck className="w-5 h-5" />
                  <h3 className="font-bold text-base text-[#1f1726]">
                    What is NOT Included
                  </h3>
                </div>
                <p className="text-xs text-[#61566b] leading-relaxed">
                  To protect your family and our ethical standards, we maintain clear service exclusions:
                </p>
                <div className="space-y-2.5">
                  {exclusions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="text-xs text-[#61566b] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantees and Principles */}
              <div className="bg-[#f5f0fb] rounded-3xl border border-[#e3d5f3] p-6 space-y-4">
                <h3 className="font-bold text-base text-[#1f1726]">
                  Our Membership Principles
                </h3>
                <div className="space-y-3 text-xs text-[#534a5c]">
                  <div className="flex items-start gap-2">
                    <RefreshCcw className="w-4 h-4 text-[#522368] mt-0.5 flex-shrink-0" />
                    <span><strong>Cancel anytime:</strong> No minimum lock-in period. If your situation changes, simply let us know.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CreditCard className="w-4 h-4 text-[#522368] mt-0.5 flex-shrink-0" />
                    <span><strong>International payment:</strong> Overseas children can pay via international card or direct digital invoice.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Lock className="w-4 h-4 text-[#522368] mt-0.5 flex-shrink-0" />
                    <span><strong>No surprise upsells:</strong> We do not spam you with unneeded services.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application / Discovery Section */}
      <section id="apply" className="py-16 bg-[#f8f4fc] border-t border-[#ebdff7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#522368] bg-white px-3 py-1 rounded-full border border-[#ebdff7]">
              Pilot Intake Form
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f1726] font-serif">
              Apply for the Family Assist Pilot
            </h2>
            <p className="text-sm text-[#61566b] max-w-xl mx-auto">
              Submit your inquiry below. Our founder will review your parent&apos;s Thrissur location and schedule a discovery call within one business day.
            </p>
          </div>

          <ContactForm defaultInterest="thrissur-pilot" />
        </div>
      </section>
    </div>
  );
}
