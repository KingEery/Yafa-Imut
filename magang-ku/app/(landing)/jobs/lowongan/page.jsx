"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { MapPin, Search, Bookmark, BookmarkCheck, SlidersHorizontal, X, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";


const jobs = [
  { id: 1,  title: "Front End Developer",    type: "PART-TIME",  workType: "Remote",  salary: "Rp 8.000.000 – Rp 12.000.000",  skills: ["React.Js", "Next.Js", "Vue.Js"],         company: "Google Indonesia",  location: "Jakarta, Indonesia",  logo: "G",  experience: "Intermediate", category: "Software Developer" },
  { id: 2,  title: "UI/UX Designer",         type: "FULL-TIME",  workType: "Hybrid",  salary: "Rp 7.000.000 – Rp 10.000.000",  skills: ["Figma", "Sketch", "Prototyping"],        company: "Tokopedia",         location: "Jakarta, Indonesia",  logo: "T",  experience: "Beginner",      category: "Design"             },
  { id: 3,  title: "Backend Developer",       type: "FULL-TIME",  workType: "On-Site", salary: "Rp 10.000.000 – Rp 15.000.000", skills: ["Node.Js", "Express", "PostgreSQL"],      company: "Gojek",             location: "Jakarta, Indonesia",  logo: "GJ", experience: "Expert",        category: "Software Developer" },
  { id: 4,  title: "Data Analyst",            type: "PART-TIME",  workType: "Remote",  salary: "Rp 6.000.000 – Rp 9.000.000",   skills: ["Python", "SQL", "Tableau"],              company: "Traveloka",         location: "Bali, Indonesia",     logo: "TV", experience: "Intermediate", category: "Data Science"       },
  { id: 5,  title: "Mobile Developer",        type: "FULL-TIME",  workType: "Hybrid",  salary: "Rp 9.000.000 – Rp 14.000.000",  skills: ["Flutter", "React Native", "Swift"],      company: "Shopee Indonesia",  location: "Jakarta, Indonesia",  logo: "S",  experience: "Intermediate", category: "Software Developer" },
  { id: 6,  title: "DevOps Engineer",         type: "FULL-TIME",  workType: "On-Site", salary: "Rp 12.000.000 – Rp 18.000.000", skills: ["Docker", "Kubernetes", "AWS"],           company: "Bukalapak",         location: "Bandung, Indonesia",  logo: "B",  experience: "Expert",        category: "Software Developer" },
  { id: 7,  title: "Digital Marketing",       type: "PART-TIME",  workType: "Remote",  salary: "Rp 5.000.000 – Rp 8.000.000",   skills: ["SEO", "Google Ads", "Analytics"],        company: "Ruangguru",         location: "Jakarta, Indonesia",  logo: "RG", experience: "Beginner",      category: "Marketing"          },
  { id: 8,  title: "Product Manager",         type: "FULL-TIME",  workType: "Hybrid",  salary: "Rp 15.000.000 – Rp 22.000.000", skills: ["Roadmap", "Agile", "Jira"],              company: "OVO",               location: "Jakarta, Indonesia",  logo: "O",  experience: "Expert",        category: "Product Management" },
  { id: 9,  title: "Data Scientist",          type: "FULL-TIME",  workType: "Remote",  salary: "Rp 13.000.000 – Rp 19.000.000", skills: ["TensorFlow", "Python", "ML"],            company: "Grab Indonesia",    location: "Jakarta, Indonesia",  logo: "GR", experience: "Expert",        category: "Data Science"       },
  { id: 10, title: "Graphic Designer",        type: "PART-TIME",  workType: "Remote",  salary: "Rp 4.000.000 – Rp 7.000.000",   skills: ["Illustrator", "Photoshop", "Canva"],     company: "Blibli",            location: "Jakarta, Indonesia",  logo: "BL", experience: "Beginner",      category: "Design"             },
];

const logoColors = {
  G:  { bg: "#E8F0FE", text: "#1A73E8" },
  T:  { bg: "#FFF3E0", text: "#E65100" },
  GJ: { bg: "#E8F5E9", text: "#2E7D32" },
  TV: { bg: "#E3F2FD", text: "#1565C0" },
  S:  { bg: "#FCE4EC", text: "#C62828" },
  B:  { bg: "#F3E5F5", text: "#6A1B9A" },
  RG: { bg: "#E8EAF6", text: "#283593" },
  O:  { bg: "#F3E5F5", text: "#7B1FA2" },
  GR: { bg: "#E0F7FA", text: "#00838F" },
  BL: { bg: "#FFF8E1", text: "#F57F17" },
};

// Google-style colored logo for "G"
function CompanyLogo({ logo }) {
  const colors = logoColors[logo] ?? { bg: "#F3F4F6", text: "#374151" };
  if (logo === "G") {
    return (
      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.bg }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>
    );
  }
  return (
    <div
      className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-[12px] flex-shrink-0"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {logo}
    </div>
  );
}

// ─── Filter Sidebar ───────────────────────────────────────────────────────────

function FilterSection({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-slate-100 pb-5 mb-5 last:border-0 last:mb-0 last:pb-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full mb-3 group"
      >
        <span className="text-[13px] font-bold text-slate-700 uppercase tracking-widest">{title}</span>
        <ChevronDown
          size={15}
          className={`text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="flex flex-col gap-2">{children}</div>}
    </div>
  );
}

function CheckItem({ label, checked, onChange }) {
  return (
    <label className="flex items-center justify-between gap-2 cursor-pointer group">
      <div className="flex items-center gap-2.5">
        <div
          onClick={onChange}
          className={`w-4 h-4 rounded flex items-center justify-center border transition-all duration-150 flex-shrink-0 cursor-pointer
            ${checked ? "bg-[#0A66C2] border-[#0A66C2]" : "border-slate-300 bg-white group-hover:border-[#6CC1FF]"}`}
        >
          {checked && (
            <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
              <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
        <span className={`text-[13.5px] transition-colors ${checked ? "text-slate-800 font-medium" : "text-slate-500 group-hover:text-slate-700"}`}>
          {label}
        </span>
      </div>
    </label>
  );
}

function Sidebar({ filters, setFilters, onReset }) {
  const toggle = (key, val) => {
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(val)
        ? prev[key].filter(v => v !== val)
        : [...prev[key], val],
    }));
  };

  const workTypes   = ["Remote", "Hybrid", "On-Site"];
  const experiences = ["Expert", "Intermediate", "Beginner"];
  const categories  = ["Software Developer", "Design", "Marketing", "Data Science", "Product Management"];

  const activeCount = filters.workType.length + filters.experience.length + filters.category.length;

  return (
    <aside className="w-[270px] flex-shrink-0">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sticky top-24">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={16} className="text-[#0A66C2]" />
            <span className="font-bold text-slate-800 text-[15px]">Filter</span>
            {activeCount > 0 && (
              <span className="bg-[#0A66C2] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {activeCount}
              </span>
            )}
          </div>
          {activeCount > 0 && (
            <button
              onClick={onReset}
              className="text-[12px] text-slate-400 hover:text-red-500 transition-colors flex items-center gap-1"
            >
              <X size={11} /> Reset
            </button>
          )}
        </div>

        <FilterSection title="Tipe Kerja">
          {workTypes.map(v => (
            <CheckItem key={v} label={v} checked={filters.workType.includes(v)} onChange={() => toggle("workType", v)} />
          ))}
        </FilterSection>

        <FilterSection title="Level Pengalaman">
          {experiences.map(v => (
            <CheckItem key={v} label={v} checked={filters.experience.includes(v)} onChange={() => toggle("experience", v)} />
          ))}
        </FilterSection>

        <FilterSection title="Kategori">
          {categories.map(v => (
            <CheckItem key={v} label={v} checked={filters.category.includes(v)} onChange={() => toggle("category", v)} />
          ))}
        </FilterSection>
      </div>
    </aside>
  );
}


function JobCard({ job, saved, onSave }) {

    const router = useRouter();

  
  return (
    <div className="bg-white border border-slate-200 rounded-sm p-5 cursor-pointer transition-all duration-200 hover:shadow-[0_6px_24px_rgba(10,102,194,0.10)] hover:border-[#6CC1FF] hover:-translate-y-0.5 group">

      {/* Top row: title + work type badge */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="text-[18px] font-bold text-slate-900 leading-snug mb-2 group-hover:text-[#0A66C2] transition-colors">
            {job.title}
          </h3>
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="text-[11px] font-bold px-2.5 py-0.5 rounded-sm border tracking-wide bg-[#EFF6FF] text-[#1D4ED8] border-[#93C5FD]"
            >
              {job.type}
            </span>
            <span className="text-[12.5px] text-slate-500 font-medium">
              Salary: {job.salary}
            </span>
          </div>
        </div>

        {/* Work type badge top-right */}
        <span
          className="text-[12px] font-semibold px-3.5 py-1.5 rounded-sm border flex-shrink-0  bg-[#F0FDF4]  text-[#15803D] border-[#86EFAC]"
        >
          {job.workType}
        </span>
      </div>

      {/* Skill badges — larger, outlined style like screenshot */}
      <div className="flex flex-wrap gap-2 mb-4">
        {job.skills.map(s => {
          return (
            <span
              key={s}
              className="text-[12.5px] font-semibold px-4 py-1.5 rounded-sm border bg-[#F8FAFC] text-[#334155] border-[#CBD5E1]"
              
            >
              {s}
            </span>
          );
        })}
      </div>

      {/* Divider */}
      <div className="border-t border-slate-100 pt-3.5">
        {/* Bottom row: logo + company + location | bookmark */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CompanyLogo logo={job.logo} />
            <div>
              <p className="text-[13.5px] font-bold text-slate-800 leading-tight">{job.company}</p>
              <span className="flex items-center gap-1 text-[12px] text-slate-400 mt-0.5">
                <MapPin size={11} strokeWidth={2} />
                {job.location}
              </span>
            </div>
          </div>

          {/* Right side: Lamar button + Bookmark */}
          <div className="flex items-center gap-2">
            <button className="text-[12.5px] font-semibold text-[#0A66C2] bg-blue-50 border border-blue-200 px-4 py-2 rounded-sm transition-all duration-150 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]"
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/jobs/${job.id}`);
            }}
>
              Lamar
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onSave(job.id); }}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-150 hover:bg-blue-50 border border-slate-200"
            >
              {saved
                ? <BookmarkCheck size={17} className="text-[#0A66C2]" />
                : <Bookmark size={17} className="text-slate-300 group-hover:text-slate-400" />
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


const ITEMS_PER_PAGE = 5;

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-1.5 mt-8">
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-150 text-sm font-medium
          ${currentPage === 1
            ? "border-slate-200 text-slate-300 cursor-not-allowed"
            : "border-slate-200 text-slate-600 hover:border-[#0A66C2] hover:text-[#0A66C2] hover:bg-blue-50"
          }`}
      >
        <ChevronLeft size={16} />
      </button>

      {/* Page numbers */}
      {getPages().map((page, idx) =>
        page === "..." ? (
          <span key={`dot-${idx}`} className="w-9 h-9 flex items-center justify-center text-slate-400 text-sm">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-9 h-9 rounded-xl flex items-center justify-center text-[13px] font-semibold border transition-all duration-150
              ${currentPage === page
                ? "bg-[#0A66C2] text-white border-[#0A66C2] shadow-sm"
                : "border-slate-200 text-slate-600 hover:border-[#0A66C2] hover:text-[#0A66C2] hover:bg-blue-50"
              }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-150 text-sm font-medium
          ${currentPage === totalPages
            ? "border-slate-200 text-slate-300 cursor-not-allowed"
            : "border-slate-200 text-slate-600 hover:border-[#0A66C2] hover:text-[#0A66C2] hover:bg-blue-50"
          }`}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}


export default function LowonganPage() {
  const [search, setSearch]     = useState("");
  const [location, setLocation] = useState("");
  const [saved, setSaved]       = useState([]);
  const [filters, setFilters]   = useState({ workType: [], experience: [], category: [] });
  const [currentPage, setCurrentPage] = useState(1);



  const resetFilters = () => {
    setFilters({ workType: [], experience: [], category: [] });
    setCurrentPage(1);
  };

  const toggleSave = (id) =>
    setSaved(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);

  const filtered = jobs.filter(job => {
    const q = search.toLowerCase();
    const matchSearch   = !q || job.title.toLowerCase().includes(q) || job.company.toLowerCase().includes(q) || job.skills.some(s => s.toLowerCase().includes(q));
    const matchLocation = !location || job.location.toLowerCase().includes(location.toLowerCase());
    const matchWork     = !filters.workType.length   || filters.workType.includes(job.workType);
    const matchExp      = !filters.experience.length || filters.experience.includes(job.experience);
    const matchCat      = !filters.category.length   || filters.category.includes(job.category);
    return matchSearch && matchLocation && matchWork && matchExp && matchCat;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const safePage   = Math.min(currentPage, totalPages || 1);
  const paginated  = filtered.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilterChange = (val) => {
    setFilters(val);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-white font-[Plus_Jakarta_Sans,Segoe_UI,sans-serif] pt-5">

      {/* Hero / Search bar */}
      <div className="relative overflow-hidden border-b border-[#d6e8f7] pt-20 pb-12 px-8"
        style={{ background: "linear-gradient(160deg, #dbeeff 0%, #e8f3ff 50%, #d4e9fb 100%)" }}
      >
        {/* Soft radial glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-40 pointer-events-none"
          style={{ background: "radial-gradient(circle at 80% 20%, #bfdbfe 0%, transparent 65%)" }} />

        <div className="relative max-w-[1200px] mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-[#bfdbfe] text-[#1D4ED8] text-[12px] font-semibold px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#0A66C2]" />
            #1 Platform Magang Mahasiswa
          </div>

          <h1 className="text-[3rem] font-black text-slate-900 mb-4 leading-[1.15] max-[700px]:text-[2.2rem]">
            Temukan Peluang <br />
            Karir {" "}
            <span className="text-[#0A66C2] relative inline-block">
              Impianmu 
              <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M0 5 Q50 1 100 4 Q150 7 200 3" stroke="#0A66C2" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          <p className="text-slate-500 mb-8 text-[15px] max-w-[540px] leading-relaxed">
            Ratusan perusahaan terbaik Indonesia mencari talenta sepertimu. Mulai perjalanan karirmu hari ini.          
          </p>

          {/* Search bar */}
          <div className="flex gap-2 items-center bg-white rounded-2xl p-2 shadow-[0_4px_24px_rgba(10,102,194,0.12)] border border-white max-[700px]:flex-col max-[700px]:rounded-xl">
            <div className="flex items-center gap-2.5 flex-1 px-3">
              <Search size={17} className="text-slate-400 flex-shrink-0" />
              <input
                value={search}
                onChange={e => { setSearch(e.target.value); setCurrentPage(1); }}
                placeholder="Cari posisi, skill, atau perusahaan..."
                className="flex-1 text-[14px] text-slate-700 bg-transparent outline-none placeholder:text-slate-400"
              />
            </div>
            <div className="w-px h-7 bg-slate-200 max-[700px]:hidden" />
            <div className="flex items-center gap-2.5 flex-1 px-3 max-[700px]:w-full">
              <MapPin size={16} className="text-slate-400 flex-shrink-0" />
              <input
                value={location}
                onChange={e => { setLocation(e.target.value); setCurrentPage(1); }}
                placeholder="Kota atau lokasi..."
                className="flex-1 text-[14px] text-slate-700 bg-transparent outline-none placeholder:text-slate-400"
              />
            </div>
            <button className="bg-[#0A66C2] text-white px-7 py-2.5 rounded-xl text-[14px] font-semibold hover:bg-[#0958A8] transition-colors flex-shrink-0 max-[700px]:w-full">
              Cari Lowongan
            </button>
          </div>
        </div>
      </div>

      {/* Body: sidebar + list */}
      <div className="max-w-[1200px] mx-auto px-8 py-10 flex gap-7 items-start max-[900px]:flex-col">

        {/* Sidebar */}
        <Sidebar filters={filters} setFilters={handleFilterChange} onReset={resetFilters} />

        {/* Job list */}
        <div className="flex-1 min-w-0">
          {/* Results header */}
          <div className="flex items-center justify-between mb-5">
            <p className="text-[13.5px] text-slate-500">
              Menampilkan{" "}
              <span className="font-semibold text-slate-800">
                {(safePage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(safePage * ITEMS_PER_PAGE, filtered.length)}
              </span>{" "}
              dari <span className="font-semibold text-slate-800">{filtered.length}</span> lowongan
            </p>
            <div className="flex items-center gap-2 text-[13px] text-slate-500">
              <span>Urutkan:</span>
              <select className="text-[13px] font-medium text-slate-700 bg-white border border-slate-200 rounded-lg px-2 py-1 outline-none cursor-pointer">
                <option>Terbaru</option>
                <option>Gaji Tertinggi</option>
                <option>Relevansi</option>
              </select>
            </div>
          </div>

          {/* Cards */}
          {paginated.length > 0 ? (
            <div className="flex flex-col gap-3.5">
              {paginated.map(job => (
                <JobCard key={job.id} job={job} saved={saved.includes(job.id)} onSave={toggleSave} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-16 text-center">
              <p className="text-slate-400 text-[15px]">Tidak ada lowongan yang sesuai filter.</p>
              <button onClick={resetFilters} className="mt-4 text-[13px] text-[#0A66C2] font-semibold hover:underline">
                Reset filter
              </button>
            </div>
          )}

          {/* Pagination */}
          <Pagination
            currentPage={safePage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}