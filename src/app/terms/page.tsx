import type { Metadata } from "next";
import Link from "next/link";
import { FileText, AlertTriangle, ShieldCheck, CheckCircle2 } from "lucide-react";
import { PILOT_CONFIG } from "@/data/careNilayaData";

export const metadata: Metadata = {
  title: "Terms of Service | Care Nilaya — Non-Clinical Coordination Terms",
  description:
    "Review Care Nilaya's terms of service: non-clinical service scope, parent consent guidelines, emergency disclaimers, and monthly membership terms.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="pt-12 pb-14 bg-gradient-to-b from-[#f8f3fc] to-[#fdfbfe] border-b border-[#ebdff7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f5f0fb] border border-[#e3d5f3] text-xs font-semibold text-[#522368]">
            <FileText className="w-3.5 h-3.5 text-[#522368]" />
            Service Agreement
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-[#1f1726] font-serif tracking-tight">
            Terms of Service
          </h1>

          <p className="text-sm sm:text-base text-[#534a5c] leading-relaxed max-w-2xl mx-auto">
            These terms define the scope, boundaries, and mutual responsibilities governing the Care Nilaya digital coordination platform.
          </p>
          <p className="text-xs text-[#897e93]">
            Last updated: October 2026 • Effective for the Thrissur City Pilot
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-[#534a5c] leading-relaxed text-sm">
          {/* Critical Emergency Disclaimer Box */}
          <div className="p-6 rounded-3xl bg-[#fff9ef] border border-[#f3dfb9] space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
              <AlertTriangle className="w-5 h-5 flex-shrink-0" />
              <span>Mandatory Service Scope Disclaimer</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
              Care Nilaya is strictly a <strong>communication and coordination service</strong>. It is <strong>not</strong> an emergency response service, hospital, medical clinic, nursing provider, or health diagnostic service. If a parent encounters a medical emergency, you or your local family contacts must immediately contact local Indian emergency services (<strong>112 / 108</strong>).
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1f1726] font-serif">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the Care Nilaya website, enrolling in the Family Assist pilot, or communicating through our coordination channels, you agree to these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1f1726] font-serif">
              2. Nature of Service: Strictly Non-Clinical Coordination
            </h2>
            <p>
              Care Nilaya coordinates non-clinical family tasks, appointment reminders, and scheduled wellbeing check-ins for Malayali families with parents in Kerala. You expressly acknowledge that:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Care Nilaya does not provide medical consultations, diagnosis, clinical assessments, or prescriptions.</li>
              <li>Care Nilaya does not provide physical nursing, bedside attendants, home healthcare, or physiotherapy.</li>
              <li>Care Nilaya does not handle, sort, or administer medication.</li>
              <li>Appointment reminders are created purely from information provided by the customer or family; Care Nilaya does not recommend medical specialists or evaluate medical regimens.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1f1726] font-serif">
              3. Parent Consent and Voluntary Participation
            </h2>
            <p>
              Respect for parental dignity is fundamental to our service. The customer agrees that:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>We will speak directly with the parent to obtain informed consent before any recurring check-in schedule begins.</li>
              <li>Parents retain the right to decline, reschedule, or cancel a check-in call at any time without penalty.</li>
              <li>We will not make deceptive or covert calls to parents.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1f1726] font-serif">
              4. Thrissur City Pilot &amp; Operating Model
            </h2>
            <p>
              The current initial offering is a validation pilot operating exclusively in Thrissur city, Kerala. The founder coordinates operations, onboarding, scheduling, and customer support remotely from Mauritius. A trusted local contact in Thrissur provides limited in-person verification of prospective provider business addresses. The local contact is not a care attendant and does not deliver clinical services.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1f1726] font-serif">
              5. Support Hours &amp; Response Targets
            </h2>
            <p>
              Standard service and communication hours are:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Monday to Saturday:</strong> 10:00 AM to 6:00 PM India Standard Time (IST).</li>
              <li><strong>Sunday:</strong> Closed.</li>
              <li><strong>Standard Response Target:</strong> Within one business day for non-urgent family enquiries.</li>
            </ul>
            <p>
              Care Nilaya does not offer 24/7 on-call coverage or overnight surveillance.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1f1726] font-serif">
              6. Membership, Fees &amp; Cancellation
            </h2>
            <p>
              The Family Assist pilot membership is offered at ₹999 per month.
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Membership is billed in advance on a recurring monthly basis.</li>
              <li>Customers may cancel at any time prior to the next billing cycle by notifying us via email or WhatsApp.</li>
              <li>Fees cover digital coordination only and do not include third-party services (such as clinic consultation fees, lab bills, transportation fares, or pharmacy charges).</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1f1726] font-serif">
              7. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, Care Nilaya, its founder, and its representatives shall not be liable for any direct, indirect, incidental, or consequential damages resulting from medical events, third-party provider failures, missed appointments, or delays caused by circumstances outside our reasonable control. Care Nilaya is a coordination facilitator, not a guarantor of third-party clinical services.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#1f1726] font-serif">
              8. Contact &amp; Governance
            </h2>
            <p>
              For legal notices or questions regarding these terms:
            </p>
            <div className="p-4 rounded-2xl bg-[#fdfbfe] border border-[#ebdff7]">
              <p className="font-semibold text-[#1f1726]">Care Nilaya Governance Desk</p>
              <p className="text-xs text-[#61566b] mt-0.5">Email: care@carenilaya.com</p>
              <p className="text-xs text-[#61566b]">Pilot Office: Thrissur City, Kerala, India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
