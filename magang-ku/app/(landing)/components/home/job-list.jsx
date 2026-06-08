"use client";

const jobs = [
  { title: "Front End Developer",  type: "PART-TIME", salary: "Rp 8.000.000 – Rp 12.000.000",  skills: ["React.Js", "Next.Js", "Vue.Js"],      company: "Google Indonesia", location: "Jakarta, Indonesia", logo: "G"  },
  { title: "UI/UX Designer",       type: "FULL-TIME", salary: "Rp 7.000.000 – Rp 10.000.000",  skills: ["Figma", "Sketch", "Prototyping"],     company: "Tokopedia",        location: "Jakarta, Indonesia", logo: "T"  },
  { title: "Backend Developer",    type: "FULL-TIME", salary: "Rp 10.000.000 – Rp 15.000.000", skills: ["Node.Js", "Express", "PostgreSQL"],   company: "Gojek",            location: "Jakarta, Indonesia", logo: "GJ" },
  { title: "Data Analyst",         type: "PART-TIME", salary: "Rp 6.000.000 – Rp 9.000.000",   skills: ["Python", "SQL", "Tableau"],           company: "Traveloka",        location: "Bali, Indonesia",    logo: "TV" },
  { title: "Mobile Developer",     type: "FULL-TIME", salary: "Rp 9.000.000 – Rp 14.000.000",  skills: ["Flutter", "React Native", "Swift"],   company: "Shopee Indonesia", location: "Jakarta, Indonesia", logo: "S"  },
  { title: "DevOps Engineer",      type: "FULL-TIME", salary: "Rp 12.000.000 – Rp 18.000.000", skills: ["Docker", "Kubernetes", "AWS"],         company: "Bukalapak",        location: "Bandung, Indonesia", logo: "B"  },
];

const typeStyle = {
  "PART-TIME":  { bg: "#F0FDF4", text: "#15803D" },
  "FULL-TIME":  { bg: "#EFF6FF", text: "#1D4ED8" },
  "INTERNSHIP": { bg: "#FFF7ED", text: "#C2410C" },
};

const logoColors = {
  G:  { bg: "#F1F3F4", text: "#1A73E8" },
  T:  { bg: "#FFF3E0", text: "#E65100" },
  GJ: { bg: "#E8F5E9", text: "#2E7D32" },
  TV: { bg: "#E3F2FD", text: "#1565C0" },
  S:  { bg: "#FCE4EC", text: "#C62828" },
  B:  { bg: "#F3E5F5", text: "#6A1B9A" },
};

// SVG logo per perusahaan — Google pakai warna asli, sisanya inisial
function CompanyLogo({ logo }) {
  const colors = logoColors[logo] ?? { bg: "#F3F4F6", text: "#374151" };

  if (logo === "G") {
    return (
      <div
        className="w-11 h-11 rounded-[10px] flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: colors.bg }}
      >
        <svg viewBox="0 0 48 48" width="26" height="26" xmlns="http://www.w3.org/2000/svg">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.59-13.46-8.83l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
      </div>
    );
  }

  return (
    <div
      className="w-11 h-11 rounded-[10px] flex items-center justify-center font-bold text-[13px] flex-shrink-0"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {logo}
    </div>
  );
}

function JobCard({ job }) {

  return (
    <div className="bg-white border border-slate-200 rounded-[18px] p-5 flex flex-col gap-4 cursor-pointer transition-all duration-200 ease-in-out hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)] hover:border-blue-200 hover:-translate-y-0.5">

      {/* Judul */}
      <h3 className="text-[16px] font-bold text-slate-900 leading-snug mb-0.5">
        {job.title}
      </h3>

      {/* Badge + Salary */}
      <div className="flex items-center gap-3 flex-wrap">
        <span
          className="text-[11px] font-bold px-3 py-1 rounded-lg whitespace-nowrap tracking-wide border  bg-[#EFF6FF] text-[#1D4ED8] border-[#93C5FD]"
        >
          {job.type}
        </span>
        <p className="text-[13px] font-medium text-slate-500 m-0 flex items-center gap-1.5">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          {job.salary}
        </p>
      </div>

      {/* Skill Chips — border hijau */}
      <div className="flex flex-wrap gap-2">
        {job.skills.map((s) => (
          <span
            key={s}
            className="text-[10px] font-semibold px-3 py-1 rounded-sm"
            style={{
              color: "#16A34A",
              border: "1.5px solid #22C55E",
              background: "transparent",
            }}
          >
            {s}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-slate-100" />

      {/* Footer — logo, company, tombol Lamar */}
      <div className="flex items-center gap-3">
        <CompanyLogo logo={job.logo} />
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-bold text-slate-800 m-0 mb-0.5 truncate">{job.company}</p>
          <p className="text-[11.5px] text-slate-400 m-0 flex items-center gap-1">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {job.location}
          </p>
        </div>
        <button className="text-[12.5px] font-semibold text-[#0A66C2] bg-blue-50 border border-blue-200 px-4 py-2 rounded-sm transition-all duration-150 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]">
          Lamar
        </button>
      </div>
    </div>
  );
}

export default function JobList() {
  return (
    <section className="relative py-20 px-8 font-[Plus_Jakarta_Sans,Segoe_UI,sans-serif] overflow-hidden border-y-2 border-blue-400">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 -z-10" />
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full opacity-40 blur-3xl translate-x-1/2 translate-y-1/2 -z-10" />

      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-[2.4rem] font-extrabold text-slate-900 mb-2 leading-tight">
          Temukan Peluang <span className="text-blue-600">Karirmu</span>
        </h2>
        <p className="text-center text-base text-slate-500 mb-12">
          958 lowongan tersedia untuk kamu
        </p>

        <div className="grid grid-cols-3 gap-5 mb-12 max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1">
          {jobs.map((job, i) => (
            <JobCard key={i} job={job} />
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-blue-600 text-white border-none py-3 px-12 rounded-xl text-[15px] font-semibold cursor-pointer transition-all duration-200 hover:bg-blue-700 hover:-translate-y-px active:translate-y-0">
            Lihat Lebih Banyak
          </button>
        </div>
      </div>
    </section>
  );
}