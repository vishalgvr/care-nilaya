"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, Search, HelpCircle, ShieldAlert } from "lucide-react";
import { SCOPE_ITEMS, ServiceScopeItem } from "@/data/careNilayaData";

export default function ScopeFilter() {
  const [filter, setFilter] = useState<"all" | "included" | "excluded">("all");
  const [search, setSearch] = useState("");

  const filteredItems = SCOPE_ITEMS.filter((item: ServiceScopeItem) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "included" && item.included) ||
      (filter === "excluded" && !item.included);

    const matchesSearch =
      item.activity.toLowerCase().includes(search.toLowerCase()) ||
      item.explanation.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="w-full">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
        {/* Filter Pills */}
        <div className="inline-flex p-1 bg-[#f5f0fb] rounded-xl border border-[#ebdff7]">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              filter === "all"
                ? "bg-[#522368] text-white shadow-sm"
                : "text-[#61566b] hover:text-[#522368]"
            }`}
          >
            All Items ({SCOPE_ITEMS.length})
          </button>
          <button
            onClick={() => setFilter("included")}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
              filter === "included"
                ? "bg-emerald-700 text-white shadow-sm"
                : "text-emerald-800 hover:text-emerald-900"
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Included in Pilot ({SCOPE_ITEMS.filter((i) => i.included).length})
          </button>
          <button
            onClick={() => setFilter("excluded")}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
              filter === "excluded"
                ? "bg-[#61566b] text-white shadow-sm"
                : "text-[#61566b] hover:text-[#1f1726]"
            }`}
          >
            <XCircle className="w-3.5 h-3.5" />
            Strictly Excluded ({SCOPE_ITEMS.filter((i) => !i.included).length})
          </button>
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-[#897e93] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search activities (e.g. nursing, reminders)..."
            className="w-full pl-9 pr-3 py-2 bg-white rounded-xl border border-[#ebdff7] text-sm text-[#1f1726] placeholder-[#897e93] focus:outline-none focus:ring-2 focus:ring-[#522368] focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Grid of Scope Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`p-5 rounded-2xl border transition-all ${
              item.included
                ? "bg-white border-emerald-200/80 hover:border-emerald-400 shadow-sm"
                : "bg-[#faf8fc] border-rose-200/70 hover:border-rose-300"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`p-2 rounded-xl flex-shrink-0 ${
                  item.included
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-rose-50 text-rose-700"
                }`}
              >
                {item.included ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <XCircle className="w-5 h-5" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h4 className="font-semibold text-sm sm:text-base text-[#1f1726]">
                    {item.activity}
                  </h4>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      item.included
                        ? "bg-emerald-100/70 text-emerald-800"
                        : "bg-rose-100/70 text-rose-800"
                    }`}
                  >
                    {item.included ? "Included" : "Excluded"}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#61566b] leading-relaxed">
                  {item.explanation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-[#ebdff7] p-8">
          <HelpCircle className="w-8 h-8 text-[#897e93] mx-auto mb-2" />
          <p className="text-sm font-medium text-[#1f1726]">
            No service activities matched your search: &ldquo;{search}&rdquo;
          </p>
          <p className="text-xs text-[#61566b] mt-1">
            Need clarity on a specific family request? Reach out through our contact page.
          </p>
        </div>
      )}

      {/* Clear Scope Guarantee */}
      <div className="mt-6 p-4 rounded-xl bg-[#f5f0fb] border border-[#e3d5f3] flex items-center gap-3 text-xs sm:text-sm text-[#522368]">
        <ShieldAlert className="w-5 h-5 flex-shrink-0 text-[#522368]" />
        <p>
          <strong>Our Commitment to Honesty:</strong> Care Nilaya never overpromises or charges for services outside our verified pilot boundaries. We are a family coordination desk, not healthcare providers.
        </p>
      </div>
    </div>
  );
}
