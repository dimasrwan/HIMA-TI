import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, UserRound, ShieldCheck, FilePenLine, Wallet, UsersRound, ArrowRight, ArrowLeft, GraduationCap, Brain, Heart, Book, Briefcase, Camera } from 'lucide-react';

const DivisionCard = ({ division, index }) => {
  const [slide, setSlide] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`group relative h-[450px] ${division.isCenter ? 'lg:col-start-2' : ''}`}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative bg-[#0a0a0c] border border-white/5 rounded-3xl h-full overflow-hidden">
        <motion.div
          animate={{ x: slide === 0 ? '0%' : '-50.5%' }} // Fixed overlap by adding a small offset
          transition={{ type: "spring", damping: 25, stiffness: 120 }}
          className="flex h-full w-[200%]"
        >
          {/* Slide 1: Info */}
          <div className="w-1/2 h-full p-8 flex flex-col">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform duration-500">
              {division.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">{division.name}</h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed line-clamp-4">{division.desc}</p>
            <div className="mt-auto pt-4">
              <button
                onClick={() => setSlide(1)}
                className="flex items-center gap-2 text-[10px] font-bold text-amber-500 bg-amber-500/10 px-5 py-3 rounded-xl w-fit hover:bg-amber-500 hover:text-black transition-all uppercase tracking-widest group/btn"
              >
                Lihat Anggota <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Slide 2: Members */}
          <div className="w-1/2 h-full p-8 flex flex-col border-l border-white/5">
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => setSlide(0)}
                className="p-2.5 bg-white/5 text-amber-500 rounded-xl hover:bg-amber-500 hover:text-black transition-all"
              >
                <ArrowLeft size={16} />
              </button>
              <span className="text-xs font-bold text-white uppercase tracking-widest">Anggota</span>
            </div>
            <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
              {division.members && division.members.length > 0 ? (
                <div className="space-y-2">
                  {division.members.map((m, i) => (
                    <div key={i} className="p-3 bg-white/[0.02] rounded-xl border border-white/5">
                      <p className="text-[11px] font-bold text-white leading-tight">{m.name}</p>
                      <p className="text-[9px] text-amber-500 uppercase tracking-widest mt-1">{m.role}</p>
                    </div>
                  ))}
                  {division.kader && division.kader.length > 0 && (
                    <>
                      <div className="mt-6 mb-2 text-[9px] font-black text-slate-500 uppercase tracking-[3px] px-1">Kader Muda</div>
                      {division.kader.map((m, i) => (
                        <div key={i} className="p-3 bg-white/[0.02] rounded-xl border border-white/5">
                          <p className="text-[11px] font-bold text-white">{m.name}</p>
                          <p className="text-[9px] text-amber-500 uppercase tracking-widest mt-1">KADER</p>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center opacity-20 text-center p-4">
                  <Users size={32} className="mb-2" />
                  <p className="text-[10px] uppercase font-bold tracking-widest">Data Menyusul</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Divisi = () => {
  const [dphMembers, setDphMembers] = useState([
    { id: 'ketua', name: "MUHAMMAD ASYRAF", role: "Ketua Umum", icon: <UserRound size={24} /> },
    { id: 'wakil', name: "A.BARID DINDA KHAIR NASUTION", role: "Wakil Ketua Umum", icon: <ShieldCheck size={24} /> },
    { id: 'sekretaris', name: "RAHMAD VICRY ZF", role: "Sekretaris Umum", icon: <FilePenLine size={24} /> },
    { id: 'bendahara', name: "DIMAS IRAWAN", role: "Bendahara Umum", icon: <Wallet size={24} /> },
  ]);

  const [divisions, setDivisions] = useState([
    {
      id: 'humas',
      name: "HUBUNGAN MASYARAKAT DAN KERJASAMA",
      desc: "Mengelola komunikasi dan membangun jembatan kolaborasi dengan pihak eksternal serta masyarakat luas.",
      icon: <Users />,
      members: [
        { name: 'FITRIYA RAMADHANI', role: 'KADIV' },
        { name: 'MUHAMMAD ABRAR', role: 'WAKADIV' },
        { name: 'LUTHFI ALKINDI', role: 'ANGGOTA' },
        { name: 'CUT NURUL MUSLIAH', role: 'ANGGOTA' },
        { name: 'CUT SITI MAYASHA', role: 'ANGGOTA' },
        { name: 'RESTU ANJU HIDAYAT', role: 'ANGGOTA' },
        { name: 'MAULANA AKBAR', role: 'ANGGOTA' },
        { name: 'NAZMI AL HUSAINI', role: 'ANGGOTA' },
        { name: 'MAULANA RAJU', role: 'ANGGOTA' },
        { name: 'T. SULTANSYAH RUMI', role: 'ANGGOTA' },
      ],
      kader: [
        { name: 'ALFAIZATUR RIFQA' },
        { name: 'BAKTI SAHPUTRA' },
        { name: 'MUHAMMAD AWIS KARNI' },
        { name: 'RAHMANIA' },
        { name: 'RIYA DHULJINAN' },
      ]
    },
    {
      id: 'psdm',
      name: "PENGEMBANGAN SUMBER DAYA MAHASISWA",
      desc: "Berfokus pada peningkatan kualitas, integritas, dan kapasitas kepemimpinan mahasiswa Teknologi Informasi.",
      icon: <GraduationCap />,
      members: [
        { name: 'ALDORI MIFTA', role: 'KADIV' },
        { name: 'TARISYA FATUR JANNAH', role: 'ANGGOTA' },
        { name: 'FARASALSABILA MAUNIA', role: 'ANGGOTA' },
        { name: 'HAFIDHA', role: 'ANGGOTA' },
        { name: 'ANNISA AULIA', role: 'ANGGOTA' },
        { name: 'RAIHAN FIRNANDA', role: 'ANGGOTA' },
        { name: 'ISRA AKMAL SAPUTRA', role: 'ANGGOTA' },
        { name: 'MUHAMMAD ABIYYI THUFAIL', role: 'ANGGOTA' },
        { name: 'MUHAMMAD DHIYA\'ULHAQ AL FAIZ', role: 'ANGGOTA' },
        { name: 'SYAHRI RAMADHAN', role: 'ANGGOTA' },
        { name: 'MUHAMMAD ZUFAR SYAKIR', role: 'ANGGOTA' },
        { name: 'ARIFA NABILA', role: 'ANGGOTA' },
        { name: 'FATHIATUL IZZATI', role: 'ANGGOTA' },
      ],
      kader: [
        { name: 'AFZAL RIZKI' },
        { name: 'ALFITRAH' },
        { name: 'FAIRUZA FATIAH FARRA' },
        { name: 'M. FASYA AULIA' },
        { name: 'MUHAMMAD SYARIF' },
        { name: 'TEUKU AYYASH ABDUL AZIZ' },
      ]
    },
    {
      id: 'mbt',
      name: "MINAT DAN BAKAT TEKNOLOGI",
      desc: "Wadah untuk menyalurkan dan mengembangkan potensi kreativitas serta hobi mahasiswa di bidang teknologi.",
      icon: <Brain />,
      members: [
        { name: 'DANDI SULTANA PUTRA ALI', role: 'KADIV' },
        { name: 'FERTA JUNINDI', role: 'WAKADIV' },
        { name: 'SALSABILA ASY SYIFA', role: 'ANGGOTA' },
        { name: 'RIJALUL FAHMI', role: 'ANGGOTA' },
        { name: 'ACHMAD FARIS FAQIH', role: 'ANGGOTA' },
        { name: 'IKHLASSUL AMAL', role: 'ANGGOTA' },
        { name: 'M.HAFIZH RIZKI', role: 'ANGGOTA' },
        { name: 'MUHAMMAD KAFKA ALFAYED', role: 'ANGGOTA' },
        { name: 'MUHAMMAD RAZI', role: 'ANGGOTA' },
        { name: 'REVAL MAULIDAN', role: 'ANGGOTA' },
        { name: 'MAQFIRAH MZ', role: 'ANGGOTA' },
        { name: 'M. NAFIS SAUQY', role: 'ANGGOTA' },
        { name: 'AHMAD FARHAN', role: 'ANGGOTA' },
        { name: 'MUHAMMAD FAUZI', role: 'ANGGOTA' },
        { name: 'MUHAMMAD FARIS FATAHILLAH', role: 'ANGGOTA' },
      ],
      kader: [
        { name: 'ANHARULLAH TAYAN' },
        { name: 'AZRIL AZIZA' },
        { name: 'CUT HAFIDHATUDDINY' },
        { name: 'FALISHA SYAHARANI NOVIAN' },
        { name: 'NAILATUL ATHIAH' },
      ]
    },
    {
      id: 'kesejahteraan',
      name: "KESEJAHTERAAN MAHASISWA",
      desc: "Memperhatikan dan mengupayakan pemenuhan kebutuhan serta kesejahteraan seluruh anggota himpunan.",
      icon: <Heart />,
      members: [
        { name: 'MUHAMMAD ALMUWARISIN', role: 'KADIV' },
        { name: 'NAZIL RAMADHAN', role: 'WAKADIV' },
        { name: 'AMIRA FATINI BR PASARIBU', role: 'ANGGOTA' },
        { name: 'SYARIFAH NAZIRA BALQIS ALHABSYI', role: 'ANGGOTA' },
        { name: 'SALSABILA', role: 'ANGGOTA' },
        { name: 'ALSYA ARISCA PUTRI', role: 'ANGGOTA' },
        { name: 'DAYAN FHURI', role: 'ANGGOTA' },
        { name: 'NAZWA SALSA BILLA', role: 'ANGGOTA' },
        { name: 'M. ZAKI ASYAFIQ', role: 'ANGGOTA' },
        { name: 'DAFFA DWI AGUSTA', role: 'ANGGOTA' },
        { name: 'NURUL ANNISA', role: 'ANGGOTA' },
        { name: 'ZAHARA', role: 'ANGGOTA' },
      ],
      kader: [
        { name: 'AMIRAH NAJLA' },
        { name: 'FARAZILA NASYIFA' },
        { name: 'FATHURRIZZIQ AIDITA' },
        { name: 'RAISA HANUM' },
        { name: 'RIZQI AMALIA' },
        { name: 'ZAHRA AQILA' },
      ]
    },
    {
      id: 'akademik',
      name: "AKADEMIK DAN KEILMUAN",
      desc: "Mendorong budaya literasi, riset, dan prestasi akademik mahasiswa di bidang teknologi informasi.",
      icon: <Book />,
      members: [
        { name: 'MUHAMMADON', role: 'KADIV' },
        { name: 'NABILA SYARIFA SUNARDI', role: 'WAKADIV' },
        { name: 'AZHABUL FIRDAUS', role: 'ANGGOTA' },
        { name: 'QOMARIYATUN NISA KHOIRIYAH', role: 'ANGGOTA' },
        { name: 'MOZA WARAH', role: 'ANGGOTA' },
        { name: 'MUHAMMAD FATIH', role: 'ANGGOTA' },
        { name: 'MAISARAH', role: 'ANGGOTA' },
        { name: 'NURUL MAQFIRAH', role: 'ANGGOTA' },
        { name: 'M. FATIH AL AFKAR', role: 'ANGGOTA' },
      ],
      kader: [
        { name: 'AHMAD SURYA PAMUNGKAS' },
        { name: 'MUAMMAR KUSYACI' },
        { name: 'MUHAMMAD ADIL HIDAYAT' },
        { name: 'MUHAMMAD RIFKI' },
        { name: 'MUHAMMAD ROBBY AULIA' },
        { name: 'NUZUL RAHMAH SINAGA' },
        { name: 'ZAKIYAH DANIYAH' },
      ]
    },
    {
      id: 'kewirausahaan',
      name: "KEWIRAUSAHAAN",
      desc: "Mengembangkan jiwa entrepreneurship dan kemandirian ekonomi organisasi melalui program kreatif.",
      icon: <Briefcase />,
      members: [
        { name: 'MUHAMMAD ZIKKRI', role: 'KADIV' },
        { name: 'SYADID MULTAZAM', role: 'WAKADIV' },
        { name: 'ZULKHAIRA AMALIA', role: 'ANGGOTA' },
        { name: 'VICTORIA OLIVIE SAS', role: 'ANGGOTA' },
        { name: 'AHMAD AZHAR', role: 'ANGGOTA' },
        { name: 'JASMAN SYAH', role: 'ANGGOTA' },
        { name: 'MARWAH ISRAK PADANG', role: 'ANGGOTA' },
        { name: 'REZA SAPUTRA', role: 'ANGGOTA' },
        { name: 'FADYA ZAHIRA', role: 'ANGGOTA' },
        { name: 'ANNISA SRI MENTARI', role: 'ANGGOTA' },
        { name: 'MUHAMMAD LAZUARDI RAFI', role: 'ANGGOTA' },
        { name: 'M.ALJIR RISKI', role: 'ANGGOTA' },
      ],
      kader: [
        { name: 'AFDHAL ABDUL AZIZ' },
        { name: 'NAKIA AZZUHRA' },
        { name: 'RAEDIMUZHAFFAR' },
        { name: 'RAJU ALGHOFFARU' },
        { name: 'SHERINA CAHYA ATISYAH' },
        { name: 'SHUFAIRA BALQIS ISRA' },
      ]
    },
    {
      id: 'multimedia',
      name: "MULTIMEDIA",
      desc: "Mengelola konten visual, dokumentasi, dan media informasi digital Himpunan secara kreatif dan inovatif.",
      icon: <Camera />,
      isCenter: true,
      members: [
        { name: 'REVANDY SETIAWAN', role: 'KADIV' },
        { name: 'MUHAMMAD ALIF AL FURKANI', role: 'WAKADIV' },
        { name: 'MUHAMMAD NAUFAL TIFTAZANI', role: 'ANGGOTA' },
        { name: 'RAHMAT NUR AFANDI', role: 'ANGGOTA' },
        { name: 'USMAN SHIDDIQ', role: 'ANGGOTA' },
        { name: 'MUHAMMAD ULWAIS AL KARNI', role: 'ANGGOTA' },
        { name: 'RADIANSYAH PUTRA', role: 'ANGGOTA' },
        { name: 'MUHAMMAD ABDAN FATIH SAIKA', role: 'ANGGOTA' },
        { name: 'ANNUR MAHARDHIKA PUTRA', role: 'ANGGOTA' },
      ],
      kader: [
        { name: 'ARRIYANA RIZKIA' },
        { name: 'ASMAUL HUSNA' },
        { name: 'ATHA AZKIA' },
        { name: 'HILWATUS SYIFI' },
        { name: 'TIJANI SYARAFINA' },
      ]
    },
  ]);

  useEffect(() => {
    // Sync DPH
    const storedDph = JSON.parse(localStorage.getItem('hima_dph_data'));
    if (storedDph) {
      setDphMembers(prev => prev.map(member => ({
        ...member,
        name: storedDph[member.id] || member.name
      })));
    }

    // Sync Divisions
    const storedDivs = JSON.parse(localStorage.getItem('hima_divisions_data'));
    if (storedDivs) {
      setDivisions(prev => prev.map(div => {
        if (storedDivs[div.id]) {
          return {
            ...div,
            members: storedDivs[div.id].members || div.members,
            kader: storedDivs[div.id].kader || div.kader
          };
        }
        return div;
      }));
    }
  }, []);

  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* DPH Section */}
        <section className="mb-32">
          <header className="text-center mb-16">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">DEWAN PENGURUS HARIAN</h2>
            <div className="h-0.5 w-10 bg-amber-500 mx-auto mt-4"></div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {dphMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 bg-[#0a0a0c] border border-white/5 rounded-3xl text-center h-full flex flex-col items-center">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform duration-500">
                    {member.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 leading-tight">{member.name}</h4>
                  <p className="text-[10px] font-black text-amber-500 uppercase tracking-[2px]">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Divisions Section */}
        <section>
          <header className="text-center mb-16">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Divisi & Struktural</h2>
            <div className="h-0.5 w-10 bg-amber-500 mx-auto mt-4"></div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {divisions.map((div, idx) => (
              <DivisionCard key={idx} division={div} index={idx} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Divisi;
