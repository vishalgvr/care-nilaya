import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MessageSquare,
  Clock,
  MapPin,
  ShieldAlert,
  AlertTriangle,
  Globe2,
  Sparkles,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { PILOT_CONFIG } from "@/data/careNilayaData";

export const metadata: Metadata = {
  title: "Contact & Discovery | Care Nilaya — Thrissur Family Care",
  description:
    "Contact Care Nilaya to schedule a discovery conversation or ask questions about our Thrissur city pilot for Malayali diaspora families.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-[#f8f3fc] to-[#fdfbfe] border-b border-[#ebdff7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f5f0fb] border border-[#e3d5f3] text-xs font-semibold text-[#522368]">
            <Sparkles className="w-3.5 h-3.5 text-[#522368]" />
            We Are Here to Listen
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-[#1f1726] font-serif tracking-tight">
            Contact &amp; Discovery Conversation
          </h1>

          <p className="text-base sm:text-lg text-[#534a5c] leading-relaxed max-w-2xl mx-auto">
            Whether you live in Dubai, London, Bangalore, or Dallas, we are here to discuss how we can support your parents in Thrissur city.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Channels & Operational Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#522368]">
                  Direct Channels
                </span>
                <h2 className="text-2xl font-bold text-[#1f1726] font-serif mt-1">
                  How to Reach Us
                </h2>
                <p className="text-xs sm:text-sm text-[#61566b] mt-1 leading-relaxed">
                  Every message is reviewed by our founder to ensure thoughtful, personalized attention.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-[#fdfbfe] border border-[#ebdff7] flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#522368] text-white flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#522368]">
                      Email Enquiries
                    </h3>
                    <a
                      href="mailto:care@carenilaya.com"
                      className="text-sm font-semibold text-[#1f1726] hover:text-[#522368] transition-colors"
                    >
                      care@carenilaya.com
                    </a>
                    <p className="text-[11px] text-[#897e93] mt-0.5">
                      Response within 1 business day
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#fdfbfe] border border-[#ebdff7] flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      WhatsApp Coordination Desk
                    </h3>
                    <p className="text-sm font-semibold text-[#1f1726]">
                      Mon–Sat 10:00 AM – 6:00 PM IST
                    </p>
                    <p className="text-[11px] text-[#897e93] mt-0.5">
                      Available to enrolled families and discovery inquiries
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#fdfbfe] border border-[#ebdff7] flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#6c3286] text-white flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#6c3286]">
                      Operating Hours
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1f1726] font-medium">
                      {PILOT_CONFIG.hours}
                    </p>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      Sunday closed for parent rest and team rejuvenation
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#fdfbfe] border border-[#ebdff7] flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#3a164b] text-white flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#3a164b]">
                      Pilot Base &amp; Operations
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1f1726]">
                      Central operations: Mauritius
                    </p>
                    <p className="text-[11px] text-[#61566b] mt-0.5">
                      Local verification &amp; pilot ground support: Thrissur City, Kerala, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Warning */}
              <div className="p-5 rounded-2xl bg-[#fff9ef] border border-[#f3dfb9] space-y-2">
                <div className="flex items-center gap-2 text-amber-800">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  <h4 className="font-bold text-xs uppercase tracking-wider">
                    Medical Emergency Warning
                  </h4>
                </div>
                <p className="text-xs text-amber-900 leading-relaxed">
                  Care Nilaya does not handle acute emergency calls or clinical dispatch. If your parent faces a sudden health crisis in Thrissur, please dial <strong>112</strong> or <strong>108</strong> immediately.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <ContactForm defaultInterest="discovery-call" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
