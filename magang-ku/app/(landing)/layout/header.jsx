import Link from 'next/link';
import { Outfit } from 'next/font/google';


const outfit = Outfit({ subsets: ['latin'], weight: ['800'] });

const Header = () => {
  return (
    <header className="fixed w-full z-60 bg-gray-50 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between py-4 px-10">

        <Link href="/" className="flex items-center gap-[12px]">
          <div className="w-[40px] h-[40px] bg-[#0A66C2] rounded-[8px] flex items-center justify-center flex-shrink-0">
            <span className="font-serif text-[22px] font-bold text-white leading-none">M</span>
          </div>
          <span className={`${outfit.className} text-[24px] font-bold text-[#0f172a] tracking-[-1px] leading-none`}>
            Magang<span className="text-[#6CC1FF]">Ku</span>
          </span>
        </Link>

        <nav className="flex gap-20 font-medium">
          <Link className="text-[#6D8493] hover:text-[#6CC1FF] transition-colors" href="/">Home</Link>
          <Link className="text-[#6D8493] hover:text-[#6CC1FF] transition-colors" href="/jobs/lowongan">Lowongan</Link>
          <Link className="text-[#6D8493] hover:text-[#6CC1FF] transition-colors" href="/company/listcompany">Perusahaan</Link>
        </nav>

        <div className="flex gap-4">
          <button className="w-[124px] py-[7px] border-2 border-[#6CC1FF] rounded-lg text-[#6CC1FF] text-[15px] font-medium hover:bg-[#6CC1FF]/10 transition-colors">
            Login
          </button>
          <button className="w-[124px] py-[7px] border-2 border-[#6CC1FF] bg-[#6CC1FF] rounded-lg text-white text-[15px] font-medium hover:bg-[#4AAEE8] hover:border-[#4AAEE8] transition-colors">
            Register
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;

