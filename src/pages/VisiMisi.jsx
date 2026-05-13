import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';

const VisiMisi = () => {
  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Visi & Misi
          </motion.h2>
          <div className="h-0.5 w-12 bg-amber-500 mx-auto mt-4"></div>
        </header>

        <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
          {/* Visi Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-12 bg-[#0a0a0c] border border-white/5 rounded-3xl h-full flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-amber-500">
                  <Eye size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">Visi</h3>
              </div>
              <p className="text-xl text-slate-400 leading-relaxed font-light italic">
                "Menjadi Himpunan yang mampu berdaya saing tinggi dan unggul dalam pengembangan Softskill dan Hardskill Mahasiswa Program Studi Teknologi Informasi Fakultas Sains dan Teknologi UIN Ar-Raniry"
              </p>
            </div>
          </motion.div>

          {/* Misi Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-12 bg-[#0a0a0c] border border-white/5 rounded-3xl h-full flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-amber-500">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">Misi</h3>
              </div>
              <div className="space-y-6">
                {[
                  "Mengadakan kajian-kajian yang berbasis teknologi.",
                  "Mengadakan riset yang berorientasi terhadap perkembangan teknologi.",
                  "Menjalin kerjasama antar organisasi kemahasiswaan.",
                  "Menumbuhkan rasa kekeluargaan dan kebersamaan."
                ].map((misi, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <span className="text-amber-500/50 font-bold text-xs mt-1.5">0{index + 1}</span>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {misi}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;
