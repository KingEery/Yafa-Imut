"use client";

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
    <div className="company-card">
      <div className="card-header">
        <div
          className="company-logo"
          style={{ backgroundColor: color.bg, color: color.text }}
        >
          {company.logo}
        </div>
        <div className="company-info">
          <h3 className="company-name">{company.name}</h3>
          <p className="company-location">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {company.location}
          </p>
        </div>
      </div>

      <div className="card-meta">
        <span className="meta-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
          {company.industry}
        </span>
        <span className="meta-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
          {company.jobCount} Job
        </span>
      </div>

      <div className="card-footer">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
        <span>Last active {company.lastActive}</span>
      </div>
    </div>
  );
}

export default function CompanyGrid() {
  const [visibleCount, setVisibleCount] = useState(8);

  return (
    <>
      <style>{`
        .section-wrapper {
          padding: 4rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
          font-family: 'Plus Jakarta Sans', 'Segoe UI', sans-serif;
        }

        .section-title {
          text-align: center;
          font-size: 2.4rem;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 3rem;
          line-height: 1.3;
        }

        .section-title span {
          color: #2563EB;
        }

        .company-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          margin-bottom: 3rem;
        }

        .company-card {
          background: #ffffff;
          border: 1px solid #E5E7EB;
          border-radius: 16px;
          padding: 1.75rem;
          cursor: pointer;
          transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .company-card:hover {
          box-shadow: 0 6px 28px rgba(37, 99, 235, 0.13);
          border-color: #BFDBFE;
          transform: translateY(-3px);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .company-logo {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 15px;
          flex-shrink: 0;
        }

        .company-info {
          flex: 1;
          min-width: 0;
        }

        .company-name {
          font-size: 15px;
          font-weight: 600;
          color: #111827;
          margin: 0 0 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .company-location {
          font-size: 13px;
          color: #6B7280;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .card-meta {
          display: flex;
          flex-direction: column;
          gap: 8px;
          border-top: 1px solid #F3F4F6;
          padding-top: 1rem;
        }

        .meta-item {
          font-size: 14px;
          color: #4B5563;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .card-footer {
          display: flex;
          align-items: center;
          gap: 6px;
          border-top: 1px solid #F3F4F6;
          padding-top: 1rem;
          font-size: 13px;
          color: #9CA3AF;
        }

        .see-more-wrapper {
          display: flex;
          justify-content: center;
        }

        .see-more-btn {
          background: #2563EB;
          color: #ffffff;
          border: none;
          padding: 0.8rem 3rem;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
        }

        .see-more-btn:hover {
          background: #1D4ED8;
          transform: translateY(-1px);
        }

        .see-more-btn:active {
          transform: translateY(0);
        }

        @media (max-width: 1100px) {
          .company-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 580px) {
          .section-title { font-size: 1.6rem; }
          .company-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="section-wrapper">
        <h2 className="section-title">
          Temukan Perusahaan <span>Impianmu</span>
        </h2>

        <div className="company-grid">
          {companies.slice(0, visibleCount).map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>

        {visibleCount < companies.length && (
          <div className="see-more-wrapper">
            <button
              className="see-more-btn"
              onClick={() => setVisibleCount((prev) => prev + 8)}
            >
              See More
            </button>
          </div>
        )}
      </section>
    </>
  );
}