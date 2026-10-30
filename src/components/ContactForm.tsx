"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck,
  MessageSquare,
  Clock,
  MapPin,
} from "lucide-react";
import {
  THRISSUR_PILOT_LOCALITIES,
  FREQUENT_DIASPORA_LOCATIONS,
  PILOT_CONFIG,
} from "@/data/careNilayaData";

interface ContactFormProps {
  defaultInterest?: string;
}

export default function ContactForm({
  defaultInterest = "thrissur-pilot",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    diasporaLocation: FREQUENT_DIASPORA_LOCATIONS[0],
    parentLocation: THRISSUR_PILOT_LOCALITIES[0],
    parentLanguage: "Malayalam",
    interest: defaultInterest,
    primaryNeed: "Weekly non-clinical check-ins & appointment reminders",
    additionalNotes: "",
    consentAgreed: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consentAgreed) {
      alert("Please confirm your understanding of our non-clinical service scope and parent consent requirement.");
      return;
    }

    setIsSubmitting(true);
    // Simulate swift local validation and submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl border border-[#ebdff7] p-8 sm:p-10 text-center shadow-xl shadow-[#522368]/5 max-w-xl mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-bold text-[#1f1726] mb-2 font-serif">
          Enquiry Received with Care
        </h3>
        <p className="text-sm text-[#61566b] leading-relaxed mb-6">
          Thank you, <strong>{formData.name}</strong>. We have logged your enquiry for{" "}
          <strong>{formData.parentLocation}</strong>. Our founder reviews every family enquiry personally.
        </p>

        <div className="bg-[#f5f0fb] rounded-2xl p-5 text-left border border-[#ebdff7] mb-6 space-y-2 text-xs sm:text-sm text-[#522368]">
          <div className="flex items-center gap-2 font-semibold">
            <Clock className="w-4 h-4 text-[#522368]" />
            <span>Expected Response: Within 1 Business Day</span>
          </div>
          <p className="text-[#61566b]">
            We will contact you via WhatsApp ({formData.whatsapp}) or email to explain the service boundaries, confirm your parents&apos; consent preferences, and outline the next step.
          </p>
        </div>

        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              email: "",
              whatsapp: "",
              diasporaLocation: FREQUENT_DIASPORA_LOCATIONS[0],
              parentLocation: THRISSUR_PILOT_LOCALITIES[0],
              parentLanguage: "Malayalam",
              interest: defaultInterest,
              primaryNeed: "Weekly non-clinical check-ins & appointment reminders",
              additionalNotes: "",
              consentAgreed: false,
            });
          }}
          className="text-xs font-semibold text-[#522368] hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl border border-[#ebdff7] p-6 sm:p-8 shadow-xl shadow-[#522368]/5"
    >
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-[#1f1726] font-serif">
          Request a Discovery Conversation
        </h3>
        <p className="text-xs sm:text-sm text-[#61566b] mt-1">
          Tell us about your family&apos;s situation. We will never share your details or contact your parents without explicit discussion.
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-bold text-[#522368] uppercase tracking-wider mb-1.5"
            >
              Your Full Name *
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              placeholder="e.g. Anjali Menon"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#ebdff7] text-sm text-[#1f1726] placeholder-[#897e93] focus:ring-2 focus:ring-[#522368] focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-bold text-[#522368] uppercase tracking-wider mb-1.5"
            >
              Email Address *
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="e.g. anjali@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#ebdff7] text-sm text-[#1f1726] placeholder-[#897e93] focus:ring-2 focus:ring-[#522368] focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* WhatsApp & Current Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="contact-whatsapp"
              className="block text-xs font-bold text-[#522368] uppercase tracking-wider mb-1.5"
            >
              WhatsApp Phone (with Country Code) *
            </label>
            <input
              id="contact-whatsapp"
              name="whatsapp"
              type="tel"
              required
              placeholder="+971 50 123 4567 or +91 98460 00000"
              value={formData.whatsapp}
              onChange={(e) =>
                setFormData({ ...formData, whatsapp: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#ebdff7] text-sm text-[#1f1726] placeholder-[#897e93] focus:ring-2 focus:ring-[#522368] focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="contact-diaspora"
              className="block text-xs font-bold text-[#522368] uppercase tracking-wider mb-1.5"
            >
              Where do you live?
            </label>
            <select
              id="contact-diaspora"
              name="diasporaLocation"
              value={formData.diasporaLocation}
              onChange={(e) =>
                setFormData({ ...formData, diasporaLocation: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#ebdff7] bg-white text-sm text-[#1f1726] focus:ring-2 focus:ring-[#522368] outline-none"
            >
              {FREQUENT_DIASPORA_LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Parents' Locality in Thrissur & Language */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="contact-parent-location"
              className="block text-xs font-bold text-[#522368] uppercase tracking-wider mb-1.5"
            >
              Parents&apos; Locality in Thrissur *
            </label>
            <select
              id="contact-parent-location"
              name="parentLocation"
              value={formData.parentLocation}
              onChange={(e) =>
                setFormData({ ...formData, parentLocation: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#ebdff7] bg-white text-sm text-[#1f1726] focus:ring-2 focus:ring-[#522368] outline-none"
            >
              {THRISSUR_PILOT_LOCALITIES.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="contact-parent-language"
              className="block text-xs font-bold text-[#522368] uppercase tracking-wider mb-1.5"
            >
              Parents&apos; Preferred Language
            </label>
            <select
              id="contact-parent-language"
              name="parentLanguage"
              value={formData.parentLanguage}
              onChange={(e) =>
                setFormData({ ...formData, parentLanguage: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#ebdff7] bg-white text-sm text-[#1f1726] focus:ring-2 focus:ring-[#522368] outline-none"
            >
              <option value="Malayalam">Malayalam (മലയാളം)</option>
              <option value="English">English</option>
              <option value="Both">Both Malayalam &amp; English</option>
            </select>
          </div>
        </div>

        {/* Primary Need */}
        <div>
          <label
            htmlFor="contact-primary-need"
            className="block text-xs font-bold text-[#522368] uppercase tracking-wider mb-1.5"
          >
            What is your family&apos;s main coordination priority?
          </label>
          <select
            id="contact-primary-need"
            name="primaryNeed"
            value={formData.primaryNeed}
            onChange={(e) =>
              setFormData({ ...formData, primaryNeed: e.target.value })
            }
            className="w-full px-3.5 py-2.5 rounded-xl border border-[#ebdff7] bg-white text-sm text-[#1f1726] focus:ring-2 focus:ring-[#522368] outline-none"
          >
            <option value="Weekly non-clinical check-ins & appointment reminders">
              Weekly non-clinical check-ins &amp; appointment reminders
            </option>
            <option value="Keeping track of appointments without annoying my parents">
              Keeping track of appointments without annoying my parents
            </option>
            <option value="A steady monthly update so siblings abroad stay aligned">
              A steady monthly update so siblings abroad stay aligned
            </option>
            <option value="General assistance with non-clinical family tasks">
              General assistance with non-clinical family tasks
            </option>
          </select>
        </div>

        {/* Additional notes */}
        <div>
          <label
            htmlFor="contact-notes"
            className="block text-xs font-bold text-[#522368] uppercase tracking-wider mb-1.5"
          >
            Additional Context (Optional)
          </label>
          <textarea
            id="contact-notes"
            name="additionalNotes"
            rows={3}
            placeholder="Any specific questions or details about your family's routine..."
            value={formData.additionalNotes}
            onChange={(e) =>
              setFormData({ ...formData, additionalNotes: e.target.value })
            }
            className="w-full px-3.5 py-2.5 rounded-xl border border-[#ebdff7] text-sm text-[#1f1726] placeholder-[#897e93] focus:ring-2 focus:ring-[#522368] outline-none resize-none"
          />
        </div>

        {/* Mandatory Non-clinical & Consent acknowledgement */}
        <div className="p-4 rounded-2xl bg-[#f5f0fb] border border-[#e3d5f3] space-y-2">
          <label
            htmlFor="contact-consent"
            className="flex items-start gap-3 cursor-pointer"
          >
            <input
              id="contact-consent"
              name="consentAgreed"
              type="checkbox"
              required
              checked={formData.consentAgreed}
              onChange={(e) =>
                setFormData({ ...formData, consentAgreed: e.target.checked })
              }
              className="mt-1 rounded text-[#522368] focus:ring-[#522368] w-4 h-4 cursor-pointer"
            />
            <span className="text-xs text-[#522368] leading-relaxed">
              <strong>I understand:</strong> Care Nilaya is a digital family coordination service, <strong>not</strong> a hospital, clinic, nursing agency, or emergency responder. Parents must willingly consent to check-in calls in Malayalam or English before coordination starts.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#522368] to-[#3a164b] hover:from-[#6c3286] hover:to-[#522368] text-white font-semibold text-sm shadow-lg shadow-[#522368]/20 hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>Sending Enquiry...</span>
          ) : (
            <>
              <span>Submit Discovery Request</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-center text-[11px] text-[#897e93]">
          Standard enquiry response target: within 1 business day (Mon–Sat 10:00 AM – 6:00 PM IST).
        </p>
      </div>
    </form>
  );
}
