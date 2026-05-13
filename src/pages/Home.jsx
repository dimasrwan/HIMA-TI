import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="relative min-h-screen pt-32 overflow-hidden flex items-center">
      {/* Page Specific Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[50%] h-[50%] bg-amber-500/10 blur-[120px] rounded-full animate-mesh"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] bg-amber-600/5 blur-[100px] rounded-full animate-mesh" style={{ animationDelay: '-5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Text Section (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="hidden lg:block text-6xl md:text-8xl font-black text-white mb-4 leading-tight">
              HIMA-TI
            </h1>

            <h2 className="text-xl md:text-2xl font-bold text-slate-200 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Himpunan Mahasiswa Teknologi Informasi
              <span className="block text-slate-400 text-lg mt-1">UIN Ar-Raniry Banda Aceh</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Himpunan Mahasiswa Prodi Teknologi Informasi Fakultas Sains dan Teknologi UIN Ar-Raniry
              (HIMA-TI FST UINAR) adalah organisasi kemahasiswaan intra perguruan tinggi yang
              berstatuskan lembaga kooperatif dalam struktural kemahasiswaan yang integral dengan Fakultas
              Sains dan Teknologi dan bersifat otonom.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-40">
              <div className="text-center">
                <p className="text-2xl font-black text-white">FST</p>
                <p className="text-[10px] uppercase tracking-widest font-bold">Fakultas</p>
              </div>
              <div className="w-[1px] h-8 bg-white/20"></div>
              <div className="text-center">
                <p className="text-2xl font-black text-white">UINAR</p>
                <p className="text-[10px] uppercase tracking-widest font-bold">Universitas</p>
              </div>
            </div>
          </motion.div>

          {/* Logo Section (Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateY: 0,
              y: [0, -20, 0]
            }}
            transition={{
              duration: 1,
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="lg:col-span-5 flex justify-center order-1 lg:order-2 perspective-1000"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500/20 blur-[80px] rounded-full"></div>
              <img
                src="/src/assets/logo.png"
                alt="HIMA-TI Logo"
                className="w-72 h-72 md:w-96 md:h-96 object-contain relative z-10 drop-shadow-[0_0_30px_rgba(245,158,11,0.2)]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Home;
