"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import {
  THRISSUR_PILOT_LOCALITIES,
  FREQUENT_DIASPORA_LOCATIONS,
  PILOT_CONFIG,
} from "@/data/careNilayaData";

export default function PilotEligibilityWidget() {
  const [diasporaLoc, setDiasporaLoc] = useState(FREQUENT_DIASPORA_LOCATIONS[0]);
  const [parentDistrict, setParentDistrict] = useState("Thrissur City");
  const [parentArea, setParentArea] = useState(THRISSUR_PILOT_LOCALITIES[0]);
  const [consentAcknowledged, setConsentAcknowledged] = useState(true);
  const [hasChecked, setHasChecked] = useState(true);

  const isThrissurPilot = parentDistrict === "Thrissur City";

  return (
    <div className="bg-white rounded-3xl border border-[#ebdff7] p-6 sm:p-8 shadow-xl shadow-[#522368]/5">
      <div className="flex items-center gap-2 mb-2">
        <span className="p-1.5 rounded-lg bg-[#f5f0fb] text-[#522368]">
          <Sparkles className="w-4 h-4" />
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-[#1f1726]">
          Pilot Eligibility &amp; Locality Checker
        </h3>
      </div>
      <p className="text-sm text-[#61566b] mb-6">
        Check if your parents&apos; residence is covered under the current Thrissur City validation pilot.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        {/* Where do you live */}
        <div>
          <label className="block text-xs font-semibold text-[#522368] uppercase tracking-wider mb-2">
            Where do you live?
          </label>
          <select
            value={diasporaLoc}
            onChange={(e) => setDiasporaLoc(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-[#ebdff7] bg-white text-sm text-[#1f1726] focus:ring-2 focus:ring-[#522368] focus:border-transparent outline-none"
          >
            {FREQUENT_DIASPORA_LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Where do your parents live */}
        <div>
          <label className="block text-xs font-semibold text-[#522368] uppercase tracking-wider mb-2">
            Parents&apos; Region in Kerala
          </label>
          <select
            value={parentDistrict}
            onChange={(e) => setParentDistrict(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-[#ebdff7] bg-white text-sm text-[#1f1726] focus:ring-2 focus:ring-[#522368] focus:border-transparent outline-none"
          >
            <option value="Thrissur City">Thrissur City (Active Pilot Area)</option>
            <option value="Ernakulam / Kochi">Ernakulam / Kochi (Stage 4 Expansion)</option>
            <option value="Kozhikode / Calicut">Kozhikode / Calicut (Stage 4 Expansion)</option>
            <option value="Palakkad">Palakkad (Stage 4 Expansion)</option>
            <option value="Malappuram">Malappuram (Stage 4 Expansion)</option>
            <option value="Thiruvananthapuram">Thiruvananthapuram (Stage 4 Expansion)</option>
            <option value="Kottayam">Kottayam (Stage 4 Expansion)</option>
            <option value="Other Kerala District">Other Kerala District</option>
          </select>
        </div>
      </div>

      {isThrissurPilot && (
        <div className="mb-5">
          <label className="block text-xs font-semibold text-[#522368] uppercase tracking-wider mb-2">
            Select Thrissur Locality
          </label>
          <select
            value={parentArea}
            onChange={(e) => setParentArea(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-[#ebdff7] bg-white text-sm text-[#1f1726] focus:ring-2 focus:ring-[#522368] focus:border-transparent outline-none"
          >
            {THRISSUR_PILOT_LOCALITIES.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Parent Dignity & Consent checkbox */}
      <div className="p-3.5 rounded-xl bg-[#f5f0fb] border border-[#e3d5f3] mb-6 flex items-start gap-3">
        <input
          type="checkbox"
          id="consentCheck"
          checked={consentAcknowledged}
          onChange={(e) => setConsentAcknowledged(e.target.checked)}
          className="mt-0.5 rounded text-[#522368] focus:ring-[#522368] w-4 h-4 cursor-pointer"
        />
        <label htmlFor="consentCheck" className="text-xs text-[#522368] cursor-pointer leading-relaxed">
          <strong>Parent-first rule:</strong> I understand that Care Nilaya speaks with parents first to obtain informed consent before any coordination or check-in begins.
        </label>
      </div>

      {/* Result Card */}
      {isThrissurPilot ? (
        <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 mt-0.5 flex-shrink-0" />
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-bold text-sm sm:text-base text-emerald-950">
                  Eligible for Thrissur City Pilot
                </h4>
                <span className="text-xs font-semibold bg-emerald-200/80 text-emerald-900 px-2.5 py-0.5 rounded-full">
                  ₹{PILOT_CONFIG.priceInr}/month
                </span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                Parents residing in <strong>{parentArea}</strong> are within our current verification radius. We are currently accepting our initial 5–10 pilot families.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact?interest=thrissur-pilot"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm transition-colors"
                >
                  Apply for Pilot Intake
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/membership"
                  className="text-xs font-medium text-emerald-800 hover:text-emerald-950 underline underline-offset-2"
                >
                  View Family Assist Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
            <div className="space-y-2 flex-1">
              <h4 className="font-bold text-sm sm:text-base text-amber-950">
                Coming in Stage 4: {parentDistrict}
              </h4>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                We are validating our workflows strictly in Thrissur city first to maintain our standard of care. Expansion to {parentDistrict} is scheduled for Stage 4 after pilot verification.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact?interest=expansion-waitlist"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-amber-700 hover:bg-amber-800 text-white shadow-sm transition-colors"
                >
                  Join {parentDistrict} Waitlist
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
