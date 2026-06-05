import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full px-5 pt-24 pb-12">
      <div
        className="relative rounded-3xl"
        style={{
          background: "linear-gradient(135deg, #dbeeff 0%, #e8f4ff 50%, #cce7ff 100%)",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-20 py-12">

          {/* ── Left: Text Content ── */}
          <div className="flex-1 max-w-[620px] space-y-6">

            <span className="inline-flex items-center gap-1.5 bg-white/80 text-[#1E1B4B] px-4 py-2 rounded-full text-sm font-semibold shadow-sm border border-white/60">
              <span className="w-2 h-2 rounded-full bg-[#6CC1FF] inline-block" />
              #1 Platform Magang Mahasiswa
            </span>

            <h1
              className="text-6xl font-extrabold text-[#0f172a] leading-[1.1] tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Platform Magang
              <br />
              Mahasiswa yang{" "}
              <span className="relative inline-block" style={{ color: "#2563EB" }}>
                Modern
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" preserveAspectRatio="none" fill="none">
                  <path d="M0 5 Q50 1 100 4 Q150 7 200 3" stroke="#6CC1FF" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed">
              Sistem informasi magang mahasiswa untuk mempermudah proses
              pendaftaran, monitoring, validasi, dan pelaporan secara digital
              dan terpusat.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <button className="bg-[#1E1B4B] hover:bg-[#312E81] text-white px-8 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 hover:-translate-y-0.5">
                Daftar Sekarang
              </button>
              <button className="flex items-center gap-2 text-[#1E1B4B] font-semibold text-base hover:text-[#2563EB] transition-colors border-2 border-[#1E1B4B] px-8 py-3 rounded-xl">
                Lihat Demo
              </button>
            </div>
          </div>

          {/* ── Right: Image + Stats ── */}
          <div className="flex-1 flex justify-end">
            <div className="relative" style={{ width: "520px", height: "520px" }}>

              {/* Main image */}
              <div
                className="absolute inset-0 rounded-[28px] overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, #4AABF0 0%, #2280D4 100%)",
                  boxShadow: "0 24px 64px rgba(34,128,212,0.35)",
                }}
              >
                <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 80px rgba(255,255,255,0.12)" }} />
                <Image
                  src="/hero-image.png"
                  alt="Hero Image"
                  width={520}
                  height={520}
                  className="object-cover w-full h-full relative z-10"
                />
              </div>

              {/* Stat: Live Job — top right */}
              <div
                className="absolute top-6 -right-16 z-20 bg-white rounded-2xl px-5 py-4 flex items-center gap-4"
                style={{ boxShadow: "0 8px 32px rgba(14,42,91,0.13)", minWidth: "190px" }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#EBF4FF" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="3" />
                    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                  </svg>
                </div>
                <div>
                  <p className="text-[20px] font-bold text-[#0f172a] leading-none mb-1">1,75,324</p>
                  <p className="text-[13px] text-slate-400 font-medium">Live Job</p>
                </div>
              </div>

              {/* Stat: Companies — middle left */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -left-16 z-20 bg-white rounded-2xl pl-5 pr-10 py-4 flex items-center gap-4"
                style={{ boxShadow: "0 8px 32px rgba(14,42,91,0.13)", minWidth: "195px" }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#2563EB" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <div>
                  <p className="text-[20px] font-bold text-[#0f172a] leading-none mb-1">97,354</p>
                  <p className="text-[13px] text-slate-400 font-medium">Companies</p>
                </div>
              </div>

              {/* Stat: New Jobs — bottom right */}
              <div
                className="absolute bottom-6 -right-16 z-20 bg-white rounded-2xl px-5 py-4 flex items-center gap-4"
                style={{ boxShadow: "0 8px 32px rgba(14,42,91,0.13)", minWidth: "185px" }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#DCFCE7" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                </div>
                <div>
                  <p className="text-[20px] font-bold text-[#0f172a] leading-none mb-1">7,532</p>
                  <p className="text-[13px] text-slate-400 font-medium">New Jobs</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;