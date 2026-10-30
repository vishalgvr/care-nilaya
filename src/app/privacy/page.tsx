import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Care Nilaya — Data Protection & Parent Consent",
  description:
    "Read Care Nilaya's transparent privacy policy. Learn about our data minimization, parent consent safeguards, and commitment to never monetize your family data.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="pt-12 pb-14 bg-gradient-to-b from-[#f8f3fc] to-[#fdfbfe] border-b border-[#ebdff7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f5f0fb] border border-[#e3d5f3] text-xs font-semibold text-[#522368]">
            <Lock className="w-3.5 h-3.5 text-[#522368]" />
            Trust &amp; Transparency
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-[#1f1726] font-serif tracking-tight">
            Privacy Notice &amp; Consent Safeguards
          </h1>

          <p className="text-sm sm:text-base text-[#534a5c] leading-relaxed max-w-2xl mx-auto">
            How Care Nilaya collects, protects, and respects personal data for families and parents in Kerala.
          </p>
          <p className="text-xs text-[#897e93]">
            Last updated: October 2026 • Effective for the Thrissur City Pilot
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-[#534a5c] leading-relaxed text-sm">
          {/* Summary Box */}
          <div className="p-6 rounded-3xl bg-[#f5f0fb] border border-[#e3d5f3] space-y-3">
            <h2 className="text-base font-bold text-[#1f1726] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#522368]" />
              Our Core Privacy Commitments at a Glance
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#522368]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>We never contact parents without explicit knowledge and consent.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>We only collect data strictly necessary for family coordination.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>We never sell or rent your family details to advertisers or brokers.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>You can request complete deletion of your records at any time.</span>
              </li>
            </ul>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1f1726] font-serif">
              1. Introduction &amp; Scope
            </h2>
            <p>
              Care Nilaya (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the platform&rdquo;) provides digital family-care coordination services for Malayali families living away from Kerala. This Privacy Notice governs how we handle information obtained through our website, WhatsApp coordination desk, and pilot operations based in Thrissur city, Kerala, under central founder management from Mauritius.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1f1726] font-serif">
              2. Strict Data Minimization: What We Collect
            </h2>
            <p>
              We practice strict data minimization. We only collect the minimal information necessary to deliver non-clinical family coordination:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Customer / Family Member Details:</strong> Full name, country/city of residence, email address, WhatsApp telephone number, and relationship to the parent.
              </li>
              <li>
                <strong>Parent Profile:</strong> Name, locality in Thrissur city, preferred language for communication (Malayalam or English), and preferred call times.
              </li>
              <li>
                <strong>Family-Provided Schedules:</strong> Dates and times of family-supplied hospital, specialist, or dental appointments, and general non-clinical reminders.
              </li>
              <li>
                <strong>Operational Status Logs:</strong> Factual call outcomes (e.g. completed, rescheduled, not answered, declined, or cancelled).
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1f1726] font-serif">
              3. Information We Explicitly DO NOT Collect
            </h2>
            <p>
              To maintain our clear non-clinical boundaries and protect sensitive family rights:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>We do not collect or store full medical charts, diagnostic scan files, or blood test reports.</li>
              <li>We do not record private audio conversations during check-in calls.</li>
              <li>We do not track continuous GPS location or live home telemetry.</li>
              <li>We do not store complete financial card numbers on our servers (all transactions are processed by certified PCI-DSS payment gateways).</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1f1726] font-serif">
              4. The Parent Consent Workflow
            </h2>
            <p>
              Informed consent is the foundational cornerstone of Care Nilaya. Before any recurring check-in schedule is activated:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5">
              <li>We explain the purpose and nature of Care Nilaya directly to the parent in Malayalam or their preferred language.</li>
              <li>The parent must willingly accept receiving weekly check-in calls.</li>
              <li>If a parent declines participation or wishes to pause at any time, their decision is respected immediately, and the family coordinator is notified factually.</li>
            </ol>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1f1726] font-serif">
              5. How We Use and Share Information
            </h2>
            <p>
              Your data is used solely to provide:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Weekly check-in coordination and appointment reminders.</li>
              <li>Monthly factual activity reports shared only with authorized family members.</li>
              <li>Customer service and operational status updates via WhatsApp.</li>
            </ul>
            <p className="font-semibold text-[#1f1726] pt-1">
              We never sell, rent, trade, or monetize personal information to third parties, pharmaceutical marketers, or advertising brokers.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1f1726] font-serif">
              6. Cross-Border Operations &amp; Data Security
            </h2>
            <p>
              Care Nilaya operates with centralized management from Mauritius and trusted administrative verification in Thrissur city. All data transmission occurs over encrypted HTTPS/TLS protocols. Access to customer records is restricted to authorized founder personnel on a need-to-know basis.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1f1726] font-serif">
              7. Retention &amp; Your Right to Erasure
            </h2>
            <p>
              We retain family coordination records only as long as an active membership continues. If you cancel your membership, you may request permanent deletion of your profile and historical records by emailing{" "}
              <a href="mailto:care@carenilaya.com" className="text-[#522368] font-semibold underline">
                care@carenilaya.com
              </a>.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1f1726] font-serif">
              8. Contact for Privacy Inquiries
            </h2>
            <p>
              If you have any questions about this Privacy Notice or our consent standards, please contact our founder directly at:
            </p>
            <div className="p-4 rounded-2xl bg-[#fdfbfe] border border-[#ebdff7]">
              <p className="font-semibold text-[#1f1726]">Care Nilaya Privacy Desk</p>
              <p className="text-xs text-[#61566b] mt-0.5">Email: care@carenilaya.com</p>
              <p className="text-xs text-[#61566b]">Operating Hours: Monday – Saturday, 10:00 AM – 6:00 PM IST</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
