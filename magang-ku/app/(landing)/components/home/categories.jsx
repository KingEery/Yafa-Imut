"use client";

import {
  FaCode,
  FaDatabase,
  FaChartLine,
  FaPlay,
  FaDollarSign,
  FaPenNib,
  FaMusic,
  FaHeartbeat,
} from "react-icons/fa";

const categories = [
  {
    icon: <FaCode />,
    title: "Development & IT",
    jobs: 958,
    color: { bg: "#E7F0FA", icon: "#0A65CC", badge: "#E7F0FA", badgeText: "#656B76" },
  },
  {
    icon: <FaDatabase />,
    title: "Data & Science",
    jobs: 754,
    color: { bg: "#E7F0FA", icon: "#0A65CC", badge: "#E7F0FA", badgeText: "#656B76" },
  },
  {
    icon: <FaChartLine />,
    title: "Digital Marketing",
    jobs: 612,
    color: { bg: "#E7F0FA", icon: "#0A65CC", badge: "#E7F0FA", badgeText: "#656B76" },
  },
  {
    icon: <FaPlay />,
    title: "Video & Animation",
    jobs: 430,
    color: { bg: "#E7F0FA", icon: "#0A65CC", badge: "#E7F0FA", badgeText: "#656B76" },
  },
  {
    icon: <FaDollarSign />,
    title: "Finance & Accounting",
    jobs: 519,
    color: { bg: "#E7F0FA", icon: "#0A65CC", badge: "#E7F0FA", badgeText: "#656B76" },
  },
  {
    icon: <FaPenNib />,
    title: "Graphics & Design",
    jobs: 876,
    color: { bg: "#E7F0FA", icon: "#0A65CC", badge: "#E7F0FA", badgeText: "#656B76" },
  },
  {
    icon: <FaMusic />,
    title: "Audio & Music",
    jobs: 298,
    color: { bg: "#E7F0FA", icon: "#0A65CC", badge: "#E7F0FA", badgeText: "#656B76" },
  },
  {
    icon: <FaHeartbeat />,
    title: "Health & Care",
    jobs: 341,
    color: { bg: "#E7F0FA", icon: "#0A65CC", badge: "#E7F0FA", badgeText: "#656B76" },
  },
];

function CategoryCard({ cat }) {
  return (
    <div className="category-card">
      <div
        className="category-icon-wrap"
        style={{ backgroundColor: cat.color.bg, color: cat.color.icon }}
      >
        {cat.icon}
      </div>
      <h3 className="category-title">{cat.title}</h3>
      <span
        className="category-badge"
        style={{ backgroundColor: cat.color.badge, color: cat.color.badgeText }}
      >
        {cat.jobs.toLocaleString()} Jobs
      </span>
    </div>
  );
}

export default function Categories() {
  return (
    <>
      <style>{`
        .categories-section {
          background: #white;
          padding: 5rem 2rem;
          font-family: 'Plus Jakarta Sans', 'Segoe UI', sans-serif;
        }

        .categories-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .categories-heading {
          text-align: center;
          font-size: 2.2rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.6rem;
          line-height: 1.25;
        }

        .categories-heading span {
          color: #2563EB;
        }

        .categories-sub {
          text-align: center;
          font-size: 1rem;
          color: #64748B;
          margin-bottom: 3rem;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        .category-card {
          background: #ffffff;
          border: 1px solid #E7EDF2;
          border-radius: 18px;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          transition: box-shadow 0.22s ease, transform 0.22s ease, border-color 0.22s ease;
          gap: 0.85rem;
        }

        .category-card:hover {
          box-shadow: 0 8px 32px rgba(37, 99, 235, 0.11);
          border-color: #BFDBFE;
          transform: translateY(-4px);
        }

        .category-icon-wrap {
          width: 68px;
          height: 68px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          flex-shrink: 0;
        }

        .category-title {
          font-size: 14.5px;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
          line-height: 1.4;
        }

        .category-badge {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 14px;
          border-radius: 999px;
          letter-spacing: 0.01em;
        }

        @media (max-width: 1024px) {
          .categories-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 540px) {
          .categories-heading { font-size: 1.7rem; }
          .categories-grid { grid-template-columns: 1fr 1fr; gap: 0.85rem; }
          .category-card { padding: 1.4rem 1rem; }
          .category-icon-wrap { width: 54px; height: 54px; font-size: 20px; }
        }
      `}</style>

      <section className="categories-section">
        <div className="categories-inner">
          <h2 className="categories-heading">
            Pilih Kategori <span>Magang</span>
          </h2>
          <p className="categories-sub">
            Temukan peluang magang sesuai bidang keahlian dan minatmu
          </p>

          <div className="categories-grid">
            {categories.map((cat, i) => (
              <CategoryCard key={i} cat={cat} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}