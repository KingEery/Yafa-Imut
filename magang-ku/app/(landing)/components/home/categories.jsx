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
  { icon: <FaCode />, title: "Development & IT", jobs: 958 },
  { icon: <FaDatabase />, title: "Data & Science", jobs: 754 },
  { icon: <FaChartLine />, title: "Digital Marketing", jobs: 612 },
  { icon: <FaPlay />, title: "Video & Animation", jobs: 430 },
  { icon: <FaDollarSign />, title: "Finance & Accounting", jobs: 519 },
  { icon: <FaPenNib />, title: "Graphics & Design", jobs: 876 },
  { icon: <FaMusic />, title: "Audio & Music", jobs: 298 },
  { icon: <FaHeartbeat />, title: "Health & Care", jobs: 341 },
];

function CategoryCard({ cat }) {
  return (
    <div className="bg-white border border-[#E7EDF2] rounded-[18px] p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-200 ease-in-out gap-3 hover:shadow-[0_8px_32px_rgba(37,99,235,0.11)] hover:border-blue-200 hover:-translate-y-1">
      <div className="w-17 h-17 rounded-2xl flex items-center justify-center text-2xl bg-[#E7F0FA] text-[#0A65CC] flex-shrink-0">
        {cat.icon}
      </div>
      <h3 className="text-[14.5px] font-bold text-slate-900 m-0 leading-snug">
        {cat.title}
      </h3>
      <span className="inline-block text-xs font-semibold px-3.5 py-1 rounded-full tracking-wide text-[#656B76]">
        {cat.jobs.toLocaleString()} Jobs
      </span>
    </div>
  );
}

export default function Categories() {
  return (
    <section className="bg-white py-20 px-8 font-[Plus_Jakarta_Sans,Segoe_UI,sans-serif]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-[2.2rem] font-extrabold text-slate-900 mb-2.5 leading-tight">
          Pilih Kategori <span className="text-blue-600">Magang</span>
        </h2>
        <p className="text-center text-base text-slate-500 mb-12">
          Temukan peluang magang sesuai bidang keahlian dan minatmu
        </p>

        <div className="grid grid-cols-4 gap-5 max-[1024px]:grid-cols-2 max-[540px]:grid-cols-2 max-[540px]:gap-3.5">
          {categories.map((cat, i) => (
            <CategoryCard key={i} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

