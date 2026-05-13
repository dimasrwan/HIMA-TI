import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0c] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/src/assets/logo.png" alt="Logo" className="w-10 h-10" />
              <span className="font-bold text-amber-500 tracking-wider text-lg">HIMA-TI</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Himpunan Mahasiswa Teknologi Informasi UIN Ar-Raniry. Banda Aceh, Indonesia. 
              Wadah aspirasi, kreativitas, dan inovasi bagi seluruh mahasiswa IT.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Tautan Cepat</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-amber-500 transition-colors text-sm">Beranda</Link></li>
              <li><Link to="/visi-misi" className="text-slate-400 hover:text-amber-500 transition-colors text-sm">Visi & Misi</Link></li>
              <li><Link to="/divisi" className="text-slate-400 hover:text-amber-500 transition-colors text-sm">Divisi & Struktural</Link></li>
              <li><Link to="/kontak" className="text-slate-400 hover:text-amber-500 transition-colors text-sm">Kontak</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end text-center md:text-right">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Ikuti Kami</h4>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/it_uinarraniry?igsh=MTExZ3Q1dGZjdm0yMg==" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 border border-white/5 hover:border-amber-500/50 hover:bg-amber-500 hover:text-black transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.tiktok.com/@hima_ti_fst_uinarraniry?_r=1&_t=ZS-96GjKsPM9Q4" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 border border-white/5 hover:border-amber-500/50 hover:bg-amber-500 hover:text-black transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
            <p className="mt-6 text-xs text-slate-500 italic">
              Mari berkolaborasi membangun masa depan IT.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-slate-600 text-[10px] font-medium tracking-[2px] uppercase">
            &copy; {new Date().getFullYear()} HIMPUNAN MAHASISWA TEKNOLOGI INFORMASI. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
