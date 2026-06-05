"use client";

const jobs = [
  { title: "Front End Developer",    type: "PART-TIME", salary: "$20,000 – $25,000", skills: ["React.Js", "Next.Js", "Vue.Js"],        company: "Google Indonesia",  location: "Jakarta, Indonesia",  logo: "G",  featured: false },
  { title: "UI/UX Designer",         type: "FULL-TIME", salary: "$18,000 – $22,000", skills: ["Figma", "Sketch", "Prototyping"],       company: "Tokopedia",         location: "Jakarta, Indonesia",  logo: "T",  featured: true  },
  { title: "Backend Developer",       type: "FULL-TIME", salary: "$25,000 – $30,000", skills: ["Node.Js", "Express", "PostgreSQL"],     company: "Gojek",             location: "Jakarta, Indonesia",  logo: "GJ", featured: false },
  { title: "Data Analyst",            type: "PART-TIME", salary: "$15,000 – $20,000", skills: ["Python", "SQL", "Tableau"],             company: "Traveloka",         location: "Bali, Indonesia",     logo: "TV", featured: false },
  { title: "Mobile Developer",        type: "FULL-TIME", salary: "$22,000 – $28,000", skills: ["Flutter", "React Native", "Swift"],     company: "Shopee Indonesia",  location: "Jakarta, Indonesia",  logo: "S",  featured: true  },
  { title: "DevOps Engineer",         type: "FULL-TIME", salary: "$28,000 – $35,000", skills: ["Docker", "Kubernetes", "AWS"],          company: "Bukalapak",         location: "Bandung, Indonesia",  logo: "B",  featured: false },
];

const typeStyle = {
  "PART-TIME": { bg: "#F0FDF4", text: "#15803D" },
  "FULL-TIME": { bg: "#EFF6FF", text: "#1D4ED8" },
  "INTERNSHIP": { bg: "#FFF7ED", text: "#C2410C" },
};

const logoColors = {
  G:  { bg: "#E8F0FE", text: "#1A73E8" },
  T:  { bg: "#FFF3E0", text: "#E65100" },
  GJ: { bg: "#E8F5E9", text: "#2E7D32" },
  TV: { bg: "#E3F2FD", text: "#1565C0" },
  S:  { bg: "#FCE4EC", text: "#C62828" },
  B:  { bg: "#F3E5F5", text: "#6A1B9A" },
};

function JobCard({ job }) {
  const badge = typeStyle[job.type] ?? { bg: "#F3F4F6", text: "#374151" };
  const logo  = logoColors[job.logo] ?? { bg: "#F3F4F6", text: "#374151" };

  return (
    <div className={`job-card ${job.featured ? "job-card--featured" : ""}`}>
      {job.featured && (
        <span className="featured-badge">⭐ Featured</span>
      )}

      <div className="job-top">
        <div className="job-title-row">
          <h3 className="job-title">{job.title}</h3>
          <span
            className="job-type-badge"
            style={{ backgroundColor: badge.bg, color: badge.text }}
          >
            {job.type}
          </span>
        </div>

        <p className="job-salary">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v2m0 8v2M9.5 9.5A2.5 2.5 0 0 1 12 8h1a2 2 0 1 1 0 4h-2a2 2 0 1 0 0 4h1.5A2.5 2.5 0 0 0 15 14.5" />
          </svg>
          {job.salary}
        </p>

        <div className="job-skills">
          {job.skills.map((s) => (
            <span key={s} className="skill-pill">{s}</span>
          ))}
        </div>
      </div>

      <div className="job-footer">
        <div
          className="company-avatar"
          style={{ backgroundColor: logo.bg, color: logo.text }}
        >
          {job.logo}
        </div>
        <div className="company-detail">
          <p className="company-name">{job.company}</p>
          <p className="company-location">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {job.location}
          </p>
        </div>
        <button className="apply-btn">Apply</button>
      </div>
    </div>
  );
}

export default function JobList() {
  return (
    <>
      <style>{`
        .joblist-section {
          background: #f8fafc;
          padding: 5rem 2rem;
          font-family: 'Plus Jakarta Sans', 'Segoe UI', sans-serif;
        }

        .joblist-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .joblist-heading {
          text-align: center;
          font-size: 2.4rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.5rem;
          line-height: 1.25;
        }

        .joblist-heading span { color: #2563EB; }

        .joblist-sub {
          text-align: center;
          font-size: 1rem;
          color: #64748B;
          margin-bottom: 3rem;
        }

        .job-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-bottom: 3rem;
        }

        .job-card {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          cursor: pointer;
          position: relative;
          transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
        }

        .job-card:hover {
          box-shadow: 0 8px 30px rgba(37, 99, 235, 0.1);
          border-color: #BFDBFE;
          transform: translateY(-3px);
        }

        .job-card--featured {
          border: 2px solid #2563EB;
        }

        .featured-badge {
          position: absolute;
          top: -1px;
          right: 18px;
          background: #2563EB;
          color: #ffffff;
          font-size: 11px;
          font-weight: 600;
          padding: 3px 12px;
          border-radius: 0 0 10px 10px;
          letter-spacing: 0.02em;
        }

        .job-top {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          flex: 1;
        }

        .job-title-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 8px;
        }

        .job-title {
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
          line-height: 1.35;
        }

        .job-type-badge {
          font-size: 10.5px;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 999px;
          white-space: nowrap;
          flex-shrink: 0;
          letter-spacing: 0.04em;
        }

        .job-salary {
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .job-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .skill-pill {
          font-size: 11.5px;
          font-weight: 500;
          color: #475569;
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          padding: 3px 10px;
          border-radius: 6px;
        }

        .job-footer {
          display: flex;
          align-items: center;
          gap: 10px;
          border-top: 1px solid #F1F5F9;
          padding-top: 1rem;
        }

        .company-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 13px;
          flex-shrink: 0;
        }

        .company-detail { flex: 1; min-width: 0; }

        .company-name {
          font-size: 12.5px;
          font-weight: 600;
          color: #1e293b;
          margin: 0 0 2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .company-location {
          font-size: 11.5px;
          color: #94A3B8;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 3px;
        }

        .apply-btn {
          background: #EFF6FF;
          color: #2563EB;
          border: 1px solid #BFDBFE;
          padding: 6px 16px;
          border-radius: 8px;
          font-size: 12.5px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.15s ease, color 0.15s ease;
        }

        .apply-btn:hover {
          background: #2563EB;
          color: #ffffff;
          border-color: #2563EB;
        }

        .joblist-cta {
          display: flex;
          justify-content: center;
        }

        .more-btn {
          background: #2563EB;
          color: #ffffff;
          border: none;
          padding: 0.8rem 3rem;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
        }

        .more-btn:hover {
          background: #1D4ED8;
          transform: translateY(-1px);
        }

        @media (max-width: 1024px) {
          .job-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .joblist-heading { font-size: 1.7rem; }
          .job-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="joblist-section border-t-2 border-b-2 border-[#6CC1FF]">
        <div className="joblist-inner">
          <h2 className="joblist-heading">
            Temukan Peluang <span>Karirmu</span>
          </h2>
          <p className="joblist-sub">958 lowongan tersedia untuk kamu</p>

          <div className="job-grid">
            {jobs.map((job, i) => (
              <JobCard key={i} job={job} />
            ))}
          </div>

          <div className="joblist-cta">
            <button className="more-btn">Lihat Lebih Banyak</button>
          </div>
        </div>
      </section>
    </>
  );
}