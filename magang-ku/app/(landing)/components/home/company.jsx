"use client";
import { Building2, BriefcaseBusiness, MapPin, Clock3 } from "lucide-react";

import { useState } from "react";

const companies = [
  { id: 1,  name: "Google Indonesia",  location: "Jakarta, Indonesia", industry: "Technology",  jobCount: 5,  lastActive: "20 hours ago", logo: "G"  },
  { id: 2,  name: "Tokopedia",         location: "Jakarta, Indonesia", industry: "E-Commerce",  jobCount: 12, lastActive: "2 hours ago",  logo: "T"  },
  { id: 3,  name: "Gojek",             location: "Jakarta, Indonesia", industry: "Technology",  jobCount: 8,  lastActive: "5 hours ago",  logo: "GJ" },
  { id: 4,  name: "Traveloka",         location: "Jakarta, Indonesia", industry: "Travel Tech", jobCount: 6,  lastActive: "1 day ago",    logo: "TV" },
  { id: 5,  name: "Shopee Indonesia",  location: "Jakarta, Indonesia", industry: "E-Commerce",  jobCount: 15, lastActive: "3 hours ago",  logo: "S"  },
  { id: 6,  name: "Bukalapak",         location: "Jakarta, Indonesia", industry: "Technology",  jobCount: 9,  lastActive: "18 hours ago", logo: "B"  },
  { id: 7,  name: "Grab Indonesia",    location: "Jakarta, Indonesia", industry: "Transport",   jobCount: 7,  lastActive: "10 hours ago", logo: "GR" },
  { id: 8,  name: "OVO",               location: "Jakarta, Indonesia", industry: "Fintech",     jobCount: 4,  lastActive: "6 hours ago",  logo: "O"  },
  { id: 9,  name: "Dana",              location: "Jakarta, Indonesia", industry: "Fintech",     jobCount: 3,  lastActive: "12 hours ago", logo: "D"  },
  { id: 10, name: "Blibli",            location: "Jakarta, Indonesia", industry: "E-Commerce",  jobCount: 11, lastActive: "8 hours ago",  logo: "BL" },
  { id: 11, name: "Tiket.com",         location: "Jakarta, Indonesia", industry: "Travel Tech", jobCount: 5,  lastActive: "1 day ago",    logo: "TK" },
  { id: 12, name: "Ruangguru",         location: "Jakarta, Indonesia", industry: "EdTech",      jobCount: 6,  lastActive: "4 hours ago",  logo: "RG" },
];

const logoColors = {
  G:  { bg: "#E8F0FE", text: "#1A73E8" },
  T:  { bg: "#FFF3E0", text: "#E65100" },
  GJ: { bg: "#E8F5E9", text: "#2E7D32" },
  TV: { bg: "#E3F2FD", text: "#1565C0" },
  S:  { bg: "#FCE4EC", text: "#C62828" },
  B:  { bg: "#F3E5F5", text: "#6A1B9A" },
  GR: { bg: "#E0F7FA", text: "#00838F" },
  O:  { bg: "#F3E5F5", text: "#7B1FA2" },
  D:  { bg: "#E8F5E9", text: "#1B5E20" },
  BL: { bg: "#FFF8E1", text: "#F57F17" },
  TK: { bg: "#FCE4EC", text: "#880E4F" },
  RG: { bg: "#E8EAF6", text: "#283593" },
};

function CompanyCard({ company }) {
  const color = logoColors[company.logo] ?? { bg: "#F5F5F5", text: "#333" };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-7 cursor-pointer flex flex-col gap-4 transition-all duration-200 ease-in-out hover:shadow-[0_6px_28px_rgba(37,99,235,0.13)] hover:border-blue-200 hover:-translate-y-0.5">
      {/* Header */}
      <div className="flex items-center gap-3.5">
        <div
          className="w-14 h-14 rounded-[14px] flex items-center justify-center font-bold text-[15px] flex-shrink-0"
          style={{ backgroundColor: color.bg, color: color.text }}
        >
          {company.logo}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[15px] font-semibold text-gray-900 m-0 mb-1 truncate">
            {company.name}
          </h3>
          <p className="text-[13px] text-gray-500 m-0 flex items-center gap-1">
            <MapPin size={14} strokeWidth={1.8} />
            {company.location}
          </p>
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-2 border-t border-gray-100 pt-4">
        <span className="text-sm text-gray-600 flex items-center gap-2">
          <Building2 size={18} strokeWidth={1.8} />
          {company.industry}
        </span>
        <span className="text-sm text-gray-600 flex items-center gap-2">
          <BriefcaseBusiness size={18} strokeWidth={1.8} />
          {company.jobCount} Jobs
        </span>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-1.5 border-t border-gray-100 pt-4 text-[13px] text-gray-400">
        <Clock3 size={14} strokeWidth={1.8} />
        <span>Last active {company.lastActive}</span>
      </div>
    </div>
  );
}

export default function CompanyGrid() {
  const [visibleCount, setVisibleCount] = useState(8);

  return (
    <section className="py-16 px-8 max-w-[1400px] mx-auto font-[Plus_Jakarta_Sans,Segoe_UI,sans-serif]">
      <h2 className="text-center text-[2.4rem] font-bold text-[#1a1a2e] mb-12 leading-snug">
        Temukan Perusahaan <span className="text-blue-600">Impianmu</span>
      </h2>

      <div className="grid grid-cols-4 gap-5 mb-12 max-[1100px]:grid-cols-2 max-[580px]:grid-cols-1">
        {companies.slice(0, visibleCount).map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>

      {visibleCount < companies.length && (
        <div className="flex justify-center">
          <button
            className="bg-blue-600 text-white border-none py-3 px-12 rounded-xl text-[15px] font-medium cursor-pointer transition-all duration-200 hover:bg-blue-700 hover:-translate-y-px active:translate-y-0"
            onClick={() => setVisibleCount((prev) => prev + 8)}
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
}