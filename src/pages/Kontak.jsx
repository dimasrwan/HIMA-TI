import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, ExternalLink } from 'lucide-react';

const Kontak = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "hima.ti@ar-raniry.ac.id",
      link: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=hima.ti@ar-raniry.ac.id",
      label: "Kirim Email"
    },
    {
      icon: <MessageCircle size={24} />,
      title: "WhatsApp",
      value: "Fikri - Sekretaris Umum (+62 812-6057-2349)",
      link: "https://wa.me/6281260572349",
      label: "Chat Sekarang"
    },
    {
      icon: <MapPin size={24} />,
      title: "Alamat",
      value: "Fakultas Sains dan Teknologi, UIN Ar-Raniry, Banda Aceh",
      link: "https://maps.google.com/?q=Fakultas+Sains+dan+Teknologi+UIN+Ar-Raniry",
      label: "Lihat di Maps"
    }
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Mari Terhubung
          </motion.h2>
          <div className="h-0.5 w-12 bg-amber-500 mx-auto mt-4"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactInfo.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-10 bg-[#0a0a0c] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-amber-500 mb-8 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-slate-400 text-sm mb-10 leading-relaxed flex-grow">
                  {item.value}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold text-amber-500 hover:text-white transition-colors group/link"
                >
                  {item.label} <ExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kontak;
