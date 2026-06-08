"use client";

import { useState, useEffect, useRef } from "react";
import {
  Globe, Building2, MapPin, Users, Briefcase, Calendar, Award,
  ArrowUpRight, Bookmark, BookmarkCheck, Star, TrendingUp,
  ExternalLink, ChevronRight, CheckCircle, DollarSign, Eye, ThumbsUp, Image,
} from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

// ── Data ───────────────────────────────────────────────────────────────────────
const company = {
  name: "PT Mitra Teknologi Pradana",
  description_short:
    "Perusahaan IT yang berfokus pada pengadaan barang & jasa teknologi untuk sektor pemerintahan, perkantoran, dan pendidikan di Indonesia.",
  logo: "MT",
  location: "Surabaya, Jawa Timur",
  industry: "Information Technology & Services",
  size: "1–10 karyawan",
  founded: "2019",
  verified: "Desember 2024",
  website: "www.mitrapradana.co.id",
  linkedin: "linkedin.com/company/mtp",
  instagram: "@mitrapradana",
  rating: 4.2,
  totalReviews: 18,
  description: `PT Mitra Teknologi Pradana adalah perusahaan di bidang Teknologi Informasi, berfokus kepada Pengadaan Barang Jasa IT, perkantoran dan pendidikan. Kami telah menjalankan berbagai bentuk aspek bisnis mulai dari B2B, B2G dan Program Pendidikan.\n\nKami berkomitmen untuk memberikan solusi teknologi terbaik yang mendukung transformasi digital di berbagai sektor, terutama pemerintahan dan pendidikan di Indonesia.`,
  culture: `Kami percaya bahwa lingkungan kerja yang positif adalah kunci kesuksesan bersama. Di MTP, setiap anggota tim didorong untuk terus berinovasi, berkolaborasi, dan berkembang. Kami menghargai keberagaman ide dan selalu terbuka terhadap perubahan demi memberikan dampak nyata bagi klien dan masyarakat.`,
  stats: [
    { label: "Karyawan",       value: "1–10", icon: Users     },
    { label: "Lowongan Aktif", value: "3",    icon: Briefcase },
    { label: "Tahun Berdiri",  value: "2019", icon: Calendar  },
    { label: "Klien",          value: "50+",  icon: Award     },
  ],
  gallery: [
    { color: "bg-blue-200",  label: "Kantor Pusat", wide: true  },
    { color: "bg-blue-300",  label: "Tim Lapangan", wide: false },
    { color: "bg-blue-400",  label: "Workshop",     wide: false },
    { color: "bg-slate-300", label: "Demo Day",     wide: false },
    { color: "bg-slate-400", label: "Rapat Tim",    wide: false },
    { color: "bg-blue-300",  label: "Server Room",  wide: false },
  ],
  reviews: [
    {
      rating: 5, role: "Software Engineer", date: "Mar 2025",
      text: "Lingkungan kerja yang sangat supportif. Tim manajemen terbuka terhadap ide-ide baru dan selalu mendukung pertumbuhan profesional karyawan.",
      pros: "Work-life balance bagus, tim solid", cons: "Benefit masih perlu ditingkatkan",
    },
    {
      rating: 4, role: "IT Support", date: "Jan 2025",
      text: "Perusahaan yang sedang berkembang pesat. Ada banyak kesempatan untuk belajar hal baru dan berkontribusi langsung ke proyek nyata.",
      pros: "Belajar banyak hal baru", cons: "Kadang workload cukup padat",
    },
    {
      rating: 4, role: "Marketing Staff", date: "Des 2024",
      text: "Budaya perusahaan yang baik, rekan kerja yang menyenangkan. Cocok untuk fresh graduate yang ingin berkembang.",
      pros: "Tim yang kolaboratif", cons: "Office masih perlu fasilitas tambahan",
    },
  ],
};

const jobs = [
  { id: 1, title: "Marketing Support (MS)", type: "Part-time", salary: "Rp 3.500.000 – Rp 4.500.000", skills: ["Content Marketing", "Copywriting", "Canva"], hot: true  },
  { id: 2, title: "Sales Frontliner",        type: "Part-time", salary: "Rp 3.500.000 – Rp 4.500.000", skills: ["Public Speaking", "Negosiasi"],                hot: false },
  { id: 3, title: "Admin Keuangan",          type: "Full-time", salary: "Rp 3.500.000 – Rp 4.500.000", skills: ["Microsoft Excel", "Pembukuan"],                 hot: false },
];

const relatedCompanies = [
  { name: "iPayroll",    location: "Surabaya, Jawa Timur", logo: "iP", jobs: 1 },
  { name: "Riiv",        location: "Surabaya, Jawa Timur", logo: "Ri", jobs: 1 },
  { name: "Fingerspott", location: "Surabaya, Jawa Timur", logo: "Fp", jobs: 2 },
];

const TABS = [
  { id: "loker-pilihan",   label: "Loker Pilihan",     icon: Star        },
  { id: "deskripsi",       label: "Deskripsi",          icon: Building2   },
  { id: "kultur",          label: "Kultur",             icon: Users       },
  { id: "kontak",          label: "Kontak",             icon: Globe       },
  { id: "galeri",          label: "Galeri",             icon: Image       },
  { id: "loker-semua",     label: "Loker",              icon: Briefcase, badge: jobs.length },
  { id: "perusahaan-lain", label: "Perusahaan Lainnya", icon: TrendingUp  },
];

// ── Helpers ────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.08) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ── Primitives ─────────────────────────────────────────────────────────────────
function Card({ children, className = "" }) {
  return (
    <div className={`bg-white border border-slate-200 rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  );
}

function SectionHead({ title, sub }) {
  return (
    <div className="mb-3.5">
      <h2 className="text-sm font-bold text-slate-900 m-0 flex items-center gap-2">
        <span className="w-1 h-4 bg-[#0A66C2] rounded-full inline-block" />
        {title}
      </h2>
      {sub && <p className="text-xs text-slate-400 mt-0.5 ml-3">{sub}</p>}
    </div>
  );
}

function Tag({ children, blue, partTime }) {
  if (blue) {
    return (
      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-[#EFF6FF] text-[#1D4ED8] border border-[#93C5FD] whitespace-nowrap">
        {children}
      </span>
    );
  }
  if (partTime) {
    return (
      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-[#F0FDF4] text-[#15803D] border border-[#86EFAC] whitespace-nowrap">
        {children}
      </span>
    );
  }
  return (
    <span className="text-[10.5px] font-semibold px-2.5 py-0.5 rounded-md bg-[#F8FAFC] text-[#334155] border border-[#CBD5E1] whitespace-nowrap">
      {children}
    </span>
  );
}

function Stars({ rating, size = 11 }) {
  return (
    <span className="inline-flex gap-px">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={i <= Math.round(rating) ? "text-[#0A66C2] fill-[#0A66C2]" : "text-slate-200 fill-slate-200"}
        />
      ))}
    </span>
  );
}

function FadeIn({ id, children }) {
  const [ref, visible] = useInView();
  return (
    <section
      id={id}
      ref={ref}
      className="scroll-mt-[195px] transition-all duration-500 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(14px)",
      }}
    >
      {children}
    </section>
  );
}

// ── Job Card ───────────────────────────────────────────────────────────────────
function JobCard({ job }) {
  const [saved, setSaved] = useState(false);
  const [hov, setHov]     = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`bg-white rounded-2xl p-5 cursor-pointer transition-all duration-200 flex flex-col gap-3
        ${hov ? "border border-[#6CC1FF] shadow-[0_6px_24px_rgba(10,102,194,0.10)] -translate-y-0.5" : "border border-slate-200 shadow-none"}`}
    >
      {/* Title row */}
      <div className="flex items-start justify-between gap-2">
        <span className="text-sm font-bold text-slate-900 leading-snug">{job.title}</span>
        <div className="flex items-center gap-1.5 shrink-0">
          {job.hot && (
            <span className="text-[9.5px] font-bold text-[#1D4ED8] bg-[#EFF6FF] border border-[#93C5FD] px-1.5 py-0.5 rounded-md">
              HOT
            </span>
          )}
          <button
            onClick={(e) => { e.stopPropagation(); setSaved(!saved); }}
            className="w-6 h-6 rounded-md border border-slate-200 bg-slate-50 flex items-center justify-center cursor-pointer hover:border-[#0A66C2] hover:bg-blue-50 transition-colors"
          >
            {saved ? <BookmarkCheck size={12} className="text-[#0A66C2]" /> : <Bookmark size={12} className="text-slate-400" />}
          </button>
        </div>
      </div>

      {/* Type + salary */}
      <div className="flex items-center gap-2 flex-wrap">
        {job.type === "Full-time"
          ? <Tag blue>{job.type}</Tag>
          : <Tag partTime>{job.type}</Tag>
        }
        <span className="flex items-center gap-1 text-[12.5px] font-semibold text-slate-700">
          <DollarSign size={10} className="text-slate-400" /> {job.salary}
        </span>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5">
        {job.skills.map((s) => <Tag key={s}>{s}</Tag>)}
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#E8F0FE] flex items-center justify-center text-[9px] font-extrabold text-[#1A73E8] shrink-0">
            MT
          </div>
          <div>
            <p className="text-[11.5px] font-semibold text-slate-800 m-0">{company.name}</p>
            <p className="text-[10.5px] text-slate-400 m-0 flex items-center gap-0.5">
              <MapPin size={8} /> {company.location}
            </p>
          </div>
        </div>
        <button
          onClick={(e) => e.stopPropagation()}
          className={`px-4 py-1.5 rounded-lg text-[12.5px] font-semibold shrink-0 transition-all duration-200 border-[1.5px] border-[#0A66C2] cursor-pointer
            ${hov ? "bg-[#0A66C2] text-white" : "bg-white text-[#0A66C2]"}`}
        >
          Lamar
        </button>
      </div>
    </div>
  );
}

// ── Review Card ────────────────────────────────────────────────────────────────
function ReviewCard({ review }) {
  const [ref, visible] = useInView(0.12);
  return (
    <div
      ref={ref}
      className="bg-white border border-slate-200 rounded-2xl p-5 transition-all duration-500 ease-out"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(12px)" }}
    >
      <div className="flex items-start justify-between mb-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
            <ThumbsUp size={13} className="text-[#0A66C2]" />
          </div>
          <div>
            <p className="text-[13px] font-semibold text-slate-900 m-0">{review.role}</p>
            <p className="text-[11px] text-slate-400 m-0">{review.date}</p>
          </div>
        </div>
        <span className="flex items-center gap-1 text-xs font-bold text-[#1D4ED8] bg-[#EFF6FF] px-2 py-1 rounded-lg border border-[#93C5FD]">
          <Star size={9} className="text-[#0A66C2] fill-[#0A66C2]" />
          {review.rating}.0
        </span>
      </div>

      <p className="text-[13px] text-slate-500 leading-relaxed mb-3">{review.text}</p>

      <div className="flex gap-2.5 flex-wrap">
        <div className="flex-1 min-w-[140px] p-2 bg-green-50 rounded-lg border border-green-100">
          <p className="text-[9.5px] font-bold text-green-700 uppercase tracking-wider m-0 mb-0.5">Kelebihan</p>
          <p className="text-xs text-green-900 m-0">{review.pros}</p>
        </div>
        <div className="flex-1 min-w-[140px] p-2 bg-red-50 rounded-lg border border-red-100">
          <p className="text-[9.5px] font-bold text-red-600 uppercase tracking-wider m-0 mb-0.5">Kekurangan</p>
          <p className="text-xs text-red-900 m-0">{review.cons}</p>
        </div>
      </div>
    </div>
  );
}

// ── Main ───────────────────────────────────────────────────────────────────────
export default function CompanyProfilePage() {
  const [activeTab, setActiveTab] = useState("loker-pilihan");
  const [followed, setFollowed]   = useState(false);
  const [scrollRatio, setScrollRatio] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const RANGE = 100;
    const handle = () => {
      if (!heroRef.current) return;
      const past = -heroRef.current.getBoundingClientRect().bottom;
      setScrollRatio(Math.min(Math.max(past / RANGE, 0), 1));
    };
    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);

  useEffect(() => {
    const observers = TABS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveTab(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  const r = scrollRatio;
  const logoSize = Math.round(80 - r * 42);
  const logoNegMt = -(40 - r * 40);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-white font-[Plus_Jakarta_Sans,Segoe_UI,sans-serif] text-slate-900">

      {/* Hero */}
      <div
        ref={heroRef}
        className="h-40 relative overflow-hidden border-b border-[#d6e8f7]"
        style={{ background: "linear-gradient(160deg, #dbeeff 0%, #e8f3ff 50%, #d4e9fb 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(10,102,194,0.07) 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-40 pointer-events-none"
          style={{ background: "radial-gradient(circle at 80% 20%, #bfdbfe 0%, transparent 65%)" }} />
      </div>

      {/* ── Sticky Header ── */}
      <div
        className="sticky top-0 z-50 bg-white/98 backdrop-blur-xl border-b border-slate-200 transition-shadow duration-300"
        style={{ boxShadow: r > 0.1 ? "0 1px 12px rgba(10,102,194,0.08)" : "none" }}
      >
        <div className="max-w-[1060px] mx-auto px-6">

          {/* Logo + Info */}
          <div className="flex items-end gap-4 pb-3.5">
            <div
              style={{
                width: logoSize, height: logoSize,
                borderRadius: Math.round(logoSize * 0.22),
                fontSize: Math.round(logoSize * 0.26),
                marginTop: logoNegMt,
                transition: "width 0.22s, height 0.22s, margin-top 0.22s, font-size 0.22s, border-radius 0.22s",
              }}
              className="shrink-0 bg-[#E8F0FE] flex items-center justify-center font-extrabold text-[#1A73E8] border-[3px] border-white shadow-lg z-10 relative tracking-tight"
            >
              {company.logo}
            </div>

            {/* Info */}
            <div className="flex-1 pt-3.5 pb-0.5 min-w-0">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <h1
                      className="font-extrabold text-slate-900 m-0 tracking-tight whitespace-nowrap transition-all duration-200"
                      style={{ fontSize: Math.round(19 - r * 5) }}
                    >
                      {company.name}
                    </h1>
                    <span className="flex items-center gap-1 bg-green-50 border border-green-100 text-green-700 text-[10px] font-semibold px-1.5 py-0.5 rounded shrink-0">
                      <CheckCircle size={8} className="fill-green-700" /> Terverifikasi
                    </span>
                  </div>

                  <p
                    className="text-xs text-slate-500 my-0 mb-1.5 leading-relaxed max-w-[500px] overflow-hidden transition-all duration-200"
                    style={{
                      opacity: Math.max(0, 1 - r * 2.5),
                      maxHeight: r > 0.5 ? "0px" : "36px",
                    }}
                  >
                    {company.description_short}
                  </p>

                  <div
                    className="flex items-center gap-3.5 flex-wrap transition-opacity duration-200"
                    style={{ opacity: 1 - r * 0.3 }}
                  >
                    <span className="flex items-center gap-1 text-[11.5px] text-slate-500">
                      <MapPin size={10} className="text-slate-400" /> {company.location}
                    </span>
                    <span className="flex items-center gap-1 text-[11.5px] text-slate-500">
                      <Building2 size={10} className="text-slate-400" /> {company.industry}
                    </span>
                    <span className="flex items-center gap-1">
                      <Stars rating={company.rating} />
                      <strong className="text-xs font-bold text-slate-900">{company.rating}</strong>
                      <span className="text-[11px] text-slate-400">({company.totalReviews})</span>
                    </span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-1.5 shrink-0 mt-1">
                  <button className="px-3.5 py-1.5 rounded-lg text-xs font-medium cursor-pointer border border-slate-200 bg-white text-slate-500 flex items-center gap-1.5 hover:border-slate-300 transition-colors">
                    <Eye size={11} /> Simpan
                  </button>
                  <button
                    onClick={() => setFollowed(!followed)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all duration-200 flex items-center gap-1.5
                      ${followed
                        ? "bg-blue-50 border border-blue-200 text-[#0A66C2]"
                        : "bg-[#0A66C2] border border-[#0A66C2] text-white hover:bg-[#0958A8]"
                      }`}
                  >
                    {followed ? "Mengikuti" : "Ikuti Perusahaan"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            className="overflow-hidden transition-all duration-200"
            style={{ opacity: 1 - r, maxHeight: r > 0.9 ? "0px" : "70px" }}
          >
            <div className="grid grid-cols-4 gap-2 pt-3 pb-3 border-t border-slate-100">
              {company.stats.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-blue-50/50 border border-blue-100">
                  <div className="w-7 h-7 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
                    <Icon size={12} className="text-[#0A66C2]" />
                  </div>
                  <div>
                    <p className="text-base font-extrabold text-slate-900 m-0 tracking-tight">{value}</p>
                    <p className="text-[10px] text-slate-400 m-0">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden -mb-px border-t border-slate-100 mt-1">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollTo(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3.5 text-[13px] whitespace-nowrap border-none bg-transparent cursor-pointer transition-all duration-150 border-b-[2.5px] -mb-px
                    ${isActive
                      ? "font-semibold text-[#0A66C2] border-[#0A66C2]"
                      : "font-medium text-slate-500 border-transparent hover:text-slate-800 hover:border-slate-300"
                    }`}
                >
                  {Icon && (
                    <Icon
                      size={15}
                      className={isActive ? "text-[#0A66C2]" : "text-slate-400"}
                    />
                  )}
                  {tab.label}
                  {tab.badge != null && (
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border transition-all duration-150
                        ${isActive
                          ? "bg-[#0A66C2] text-white border-[#0A66C2]"
                          : "bg-[#EFF6FF] text-[#1D4ED8] border-[#93C5FD]"
                        }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-[1060px] mx-auto px-6 py-5 flex gap-5 items-start">

        {/* Left */}
        <div className="flex-1 min-w-0 flex flex-col gap-5">

          {/* Loker Pilihan */}
          <FadeIn id="loker-pilihan">
            <SectionHead title="Loker Pilihan" />
            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-3">
              {jobs.map((j) => <JobCard key={j.id} job={j} />)}
            </div>
          </FadeIn>

          {/* Deskripsi */}
          <FadeIn id="deskripsi">
            <Card>
              <SectionHead title="Tentang Perusahaan" sub="Profil singkat perusahaan" />
              {company.description.split("\n\n").map((p, i) => (
                <p key={i} className={`text-[13.5px] text-slate-500 leading-[1.85] ${i === 0 ? "m-0" : "mt-3 mb-0"}`}>{p}</p>
              ))}
            </Card>
          </FadeIn>

          {/* Kultur */}
          <FadeIn id="kultur">
            <div
              className="rounded-2xl p-6 border border-[#d6e8f7]"
              style={{ background: "linear-gradient(160deg, #dbeeff 0%, #e8f3ff 60%, #d4e9fb 100%)" }}
            >
              <SectionHead title={<span className="text-slate-900">Kultur Perusahaan</span>} />
              <p className="text-[13.5px] text-slate-600 leading-[1.85] mb-4">{company.culture}</p>
              <div className="flex gap-1.5 flex-wrap">
                {["Inovatif", "Kolaboratif", "Berkembang", "Berdampak"].map((v) => (
                  <span key={v} className="px-3 py-0.5 rounded-full text-[11px] font-semibold bg-white/70 border border-[#bfdbfe] text-[#1D4ED8]">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Kontak */}
          <FadeIn id="kontak">
            <Card>
              <SectionHead title="Hubungi Kami" />
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">Alamat</p>
                  <div className="flex items-center gap-2.5 p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                    <MapPin size={13} className="text-[#0A66C2]" />
                    <div>
                      <p className="text-[13px] font-semibold text-slate-900 m-0">Surabaya</p>
                      <p className="text-[11.5px] text-slate-400 m-0">Jawa Timur, Indonesia</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">Media Sosial</p>
                  <div className="flex flex-col gap-1.5">
                    {[
                      { Icon: Globe,       label: company.website,   colorClass: "text-[#0A66C2]" },
                      { Icon: FaLinkedin,  label: company.linkedin,  colorClass: "text-[#0A66C2]" },
                      { Icon: FaInstagram, label: company.instagram, colorClass: "text-[#E1306C]"  },
                    ].map(({ Icon, label, colorClass }) => (
                      <a
                        key={label}
                        href="#"
                        className={`flex items-center gap-2 text-[12.5px] font-medium no-underline px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors ${colorClass}`}
                      >
                        <Icon size={12} className={`${colorClass} shrink-0`} />
                        {label}
                        <ExternalLink size={9} className="text-slate-400 ml-auto" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* Galeri */}
          <FadeIn id="galeri">
            <SectionHead title="Galeri" sub="Dokumentasi kegiatan perusahaan" />
            <div className="grid grid-cols-3 gap-2">
              {company.gallery.map((item, i) => (
                <div
                  key={i}
                  className={`${item.color} rounded-2xl overflow-hidden cursor-pointer relative transition-opacity duration-200 hover:opacity-85
                    ${i === 0 ? "col-span-2 aspect-video" : "aspect-[4/3]"}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A66C2]/40 to-transparent flex items-end p-2.5">
                    <span className="text-[11px] font-semibold text-white/90">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Semua Loker */}
          <FadeIn id="loker-semua">
            <SectionHead title="Semua Loker" sub={`${jobs.length} posisi tersedia`} />
            <div className="flex flex-col gap-2.5">
              {jobs.map((j) => <JobCard key={j.id} job={j} />)}
            </div>
          </FadeIn>

          {/* Ulasan */}
          <FadeIn id="perusahaan-lain">
            <SectionHead title="Ulasan Karyawan" sub={`${company.totalReviews} ulasan dari karyawan`} />

            {/* Rating Summary */}
            <Card className="flex gap-5 items-center mb-3.5">
              <div className="text-center shrink-0">
                <p className="text-[44px] font-extrabold text-slate-900 leading-none m-0 mb-1 tracking-tighter">{company.rating}</p>
                <Stars rating={company.rating} size={13} />
                <p className="text-[10.5px] text-slate-400 mt-1">{company.totalReviews} ulasan</p>
              </div>
              <div className="flex-1 flex flex-col gap-1.5">
                {[5, 4, 3, 2, 1].map((star) => {
                  const count = company.reviews.filter((rv) => rv.rating === star).length;
                  const pct   = Math.round((count / company.reviews.length) * 100);
                  return (
                    <div key={star} className="flex items-center gap-1.5">
                      <span className="text-[11px] text-slate-400 w-2">{star}</span>
                      <Star size={8} className="text-[#0A66C2] fill-[#0A66C2] shrink-0" />
                      <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#0A66C2] rounded-full" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-[10.5px] text-slate-400 w-3 text-right">{count}</span>
                    </div>
                  );
                })}
              </div>
            </Card>

            <div className="flex flex-col gap-2.5">
              {company.reviews.map((rv, i) => <ReviewCard key={i} review={rv} />)}
            </div>
          </FadeIn>
        </div>

        {/* ── Sidebar ── */}
        <div className="w-[248px] shrink-0 flex flex-col gap-3">

          {/* Info Card */}
          <Card>
            <div className="flex items-center gap-1.5 mb-3">
              <Building2 size={13} className="text-[#0A66C2]" />
              <h3 className="text-[13px] font-bold text-slate-900 m-0">Info Perusahaan</h3>
            </div>
            {[
              { label: "Industri",      value: company.industry  },
              { label: "Ukuran",        value: company.size      },
              { label: "Berdiri",       value: company.founded   },
              { label: "Lokasi",        value: company.location  },
              { label: "Terverifikasi", value: company.verified  },
              { label: "Website",       value: company.website, link: true },
            ].map(({ label, value, link }, i, arr) => (
              <div key={label} className={`py-2.5 ${i < arr.length - 1 ? "border-b border-slate-100" : ""}`}>
                <p className="text-[9.5px] font-semibold text-slate-400 uppercase tracking-widest m-0 mb-0.5">{label}</p>
                {link
                  ? <a href="#" className="text-xs text-[#0A66C2] font-semibold flex items-center gap-1 no-underline hover:underline">
                      {value} <ArrowUpRight size={9} />
                    </a>
                  : <p className="text-xs text-slate-800 font-medium m-0 leading-snug">{value}</p>
                }
              </div>
            ))}
          </Card>

          {/* CTA */}
          <div
            className="rounded-2xl p-5 border border-[#d6e8f7]"
            style={{ background: "linear-gradient(160deg, #dbeeff 0%, #e8f3ff 60%, #d4e9fb 100%)" }}
          >
            <p className="text-[10px] font-semibold text-[#1D4ED8]/70 uppercase tracking-widest m-0 mb-1.5">
              {jobs.length} Lowongan Tersedia
            </p>
            <p className="text-sm font-bold text-slate-900 m-0 mb-3.5 leading-snug">
              Bergabung bersama tim MTP sekarang
            </p>
            <button className="w-full py-2 rounded-xl bg-[#0A66C2] border border-[#0A66C2] text-white text-[12.5px] font-semibold cursor-pointer flex items-center justify-center gap-1.5 hover:bg-[#0958A8] transition-colors">
              Lihat Semua Loker <ChevronRight size={12} />
            </button>
          </div>

          {/* Related Companies */}
          <Card>
            <div className="flex items-center gap-1.5 mb-3">
              <TrendingUp size={13} className="text-[#0A66C2]" />
              <h3 className="text-[13px] font-bold text-slate-900 m-0">Perusahaan Serupa</h3>
            </div>
            <div className="flex flex-col gap-1.5">
              {relatedCompanies.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-200 cursor-pointer transition-all duration-150 hover:border-[#6CC1FF] hover:bg-blue-50/30"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#EFF6FF] border border-blue-100 flex items-center justify-center text-[10px] font-bold text-[#1D4ED8] shrink-0">
                    {c.logo}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-900 m-0 mb-px">{c.name}</p>
                    <p className="text-[10.5px] text-slate-400 m-0 mb-px">{c.location}</p>
                    <p className="text-[10.5px] text-[#0A66C2] m-0 font-semibold">{c.jobs} Lowongan aktif</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}