import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Visi & Misi', path: '/visi-misi' },
    { name: 'Divisi & Struktural', path: '/divisi' },
    { name: 'Kontak', path: '/kontak' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-400 ${
      isScrolled ? 'py-4 bg-[#0a0a0c]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <div className="flex flex-col">
            <span className="hidden md:block font-bold text-sm tracking-wider text-white">
              HIMPUNAN MAHASISWA TEKNOLOGI INFORMASI
            </span>
            <span className="md:hidden font-bold text-lg text-white">HIMA-TI</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                  location.pathname === link.path ? 'text-amber-500' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0f0f13] border-b border-white/5 p-6 animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium ${
                    location.pathname === link.path ? 'text-amber-500' : 'text-slate-300'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
