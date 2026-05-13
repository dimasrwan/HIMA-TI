import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Save, LogOut, Plus, Trash2, ChevronRight, UserPlus, Info } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dph'); 
  const [selectedDivId, setSelectedDivId] = useState('humas');
  
  // Default Data for Initialization
  const defaultDivisionsData = {
    humas: {
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
    psdm: {
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
    mbt: {
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
    kesejahteraan: {
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
    akademik: {
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
    kewirausahaan: {
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
    multimedia: {
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
  };

  // State for DPH
  const [dphData, setDphData] = useState({
    ketua: "MUHAMMAD ASYRAF",
    wakil: "A.BARID DINDA KHAIR NASUTION",
    sekretaris: "RAHMAD VICRY ZF",
    bendahara: "DIMAS IRAWAN"
  });

  // State for Divisions Data
  const [divisionsData, setDivisionsData] = useState(defaultDivisionsData);

  const divisionList = [
    { id: 'humas', name: 'Hubungan Masyarakat' },
    { id: 'psdm', name: 'Pengembangan Sumber Daya Mahasiswa' },
    { id: 'mbt', name: 'Minat dan Bakat Teknologi' },
    { id: 'kesejahteraan', name: 'Kesejahteraan Mahasiswa' },
    { id: 'akademik', name: 'Akademik dan Keilmuan' },
    { id: 'kewirausahaan', name: 'Kewirausahaan' },
    { id: 'multimedia', name: 'Multimedia' }
  ];

  useEffect(() => {
    // Load DPH
    const storedDph = JSON.parse(localStorage.getItem('hima_dph_data'));
    if (storedDph) setDphData(storedDph);

    // Load Divisions
    const storedDivs = JSON.parse(localStorage.getItem('hima_divisions_data'));
    if (storedDivs) setDivisionsData(storedDivs);
  }, []);

  const saveDph = (e) => {
    e.preventDefault();
    localStorage.setItem('hima_dph_data', JSON.stringify(dphData));
    alert('Data DPH berhasil disimpan!');
  };

  const saveDivisions = () => {
    localStorage.setItem('hima_divisions_data', JSON.stringify(divisionsData));
    alert('Data Divisi berhasil disimpan!');
  };

  const addMember = (divId) => {
    const newDivs = { ...divisionsData };
    if (!newDivs[divId]) newDivs[divId] = { members: [], kader: [] };
    newDivs[divId].members.push({ name: '', role: 'ANGGOTA' });
    setDivisionsData(newDivs);
  };

  const updateMember = (divId, index, field, value) => {
    const newDivs = { ...divisionsData };
    newDivs[divId].members[index][field] = value;
    setDivisionsData(newDivs);
  };

  const removeMember = (divId, index) => {
    const newDivs = { ...divisionsData };
    newDivs[divId].members.splice(index, 1);
    setDivisionsData(newDivs);
  };

  const addKader = (divId) => {
    const newDivs = { ...divisionsData };
    if (!newDivs[divId]) newDivs[divId] = { members: [], kader: [] };
    newDivs[divId].kader.push({ name: '' });
    setDivisionsData(newDivs);
  };

  const updateKader = (divId, index, value) => {
    const newDivs = { ...divisionsData };
    newDivs[divId].kader[index].name = value;
    setDivisionsData(newDivs);
  };

  const removeKader = (divId, index) => {
    const newDivs = { ...divisionsData };
    newDivs[divId].kader.splice(index, 1);
    setDivisionsData(newDivs);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('isAdminAuthenticated');
    navigate('/');
  };

  return (
    <div className="flex min-h-screen bg-[#050507]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0f0f13] border-r border-white/5 flex flex-col pt-8 fixed h-full">
        <div className="px-8 mb-10 flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <span className="font-bold text-amber-500 tracking-wider">ADMIN PANEL</span>
        </div>

        <nav className="flex-grow px-4 space-y-2">
          <button
            onClick={() => setActiveTab('dph')}
            className={`w-full flex items-center gap-4 px-6 py-3.5 rounded-xl transition-all font-medium ${
              activeTab === 'dph' ? 'bg-amber-500/10 text-amber-500' : 'text-slate-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Users size={20} />
            <span>Struktural DPH</span>
          </button>
          <button
            onClick={() => setActiveTab('divisi')}
            className={`w-full flex items-center gap-4 px-6 py-3.5 rounded-xl transition-all font-medium ${
              activeTab === 'divisi' ? 'bg-amber-500/10 text-amber-500' : 'text-slate-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <UserPlus size={20} />
            <span>Kelola Divisi</span>
          </button>
        </nav>

        <div className="p-4 mt-auto">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-6 py-3.5 rounded-xl text-slate-500 hover:text-red-500 transition-all font-medium"
          >
            <LogOut size={20} />
            <span>Keluar</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow ml-64 flex flex-col">
        <header className="h-20 border-b border-white/5 px-10 flex items-center justify-between sticky top-0 bg-[#050507]/80 backdrop-blur-md z-10">
          <h2 className="text-xl font-bold text-white capitalize">
            {activeTab === 'dph' ? 'Struktural Dewan Pengurus Harian' : 'Manajemen Anggota Divisi'}
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center font-bold text-black text-sm">A</div>
          </div>
        </header>

        <div className="p-10 pb-32">
          {activeTab === 'dph' ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl glass p-10">
              <form onSubmit={saveDph} className="space-y-6">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-amber-500 mb-2">Pimpinan Inti</h3>
                  <p className="text-sm text-slate-500">Ubah nama pimpinan inti HIMA-TI yang tampil di website utama.</p>
                </div>
                {[
                  { label: 'Ketua Umum', key: 'ketua' },
                  { label: 'Nama Wakil Ketua Umum', key: 'wakil' },
                  { label: 'Nama Sekretaris Umum', key: 'sekretaris' },
                  { label: 'Nama Bendahara Umum', key: 'bendahara' }
                ].map((f) => (
                  <div key={f.key} className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{f.label}</label>
                    <input 
                      type="text" 
                      value={dphData[f.key]}
                      onChange={(e) => setDphData({...dphData, [f.key]: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-amber-500/50 outline-none"
                    />
                  </div>
                ))}
                <button type="submit" className="w-full bg-amber-500 text-black font-bold py-4 rounded-xl hover:bg-amber-400 transition-all flex items-center justify-center gap-3 mt-8">
                  <Save size={20} /> Simpan Perubahan
                </button>
              </form>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Division Selector */}
              <div className="lg:col-span-4 space-y-2">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 px-2">Pilih Divisi</h3>
                {divisionList.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDivId(d.id)}
                    className={`w-full flex items-center justify-between px-6 py-4 rounded-xl transition-all border ${
                      selectedDivId === d.id ? 'bg-amber-500/10 border-amber-500/30 text-amber-500' : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    <span className="text-sm font-bold">{d.name}</span>
                    <ChevronRight size={16} />
                  </button>
                ))}
              </div>

              {/* Members Manager */}
              <motion.div 
                key={selectedDivId}
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                className="lg:col-span-8 space-y-8"
              >
                {/* Members Section */}
                <div className="glass p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-white">Daftar Pengurus</h3>
                      <p className="text-sm text-slate-500">Edit nama dan jabatan di bawah ini.</p>
                    </div>
                    <button 
                      onClick={() => addMember(selectedDivId)}
                      className="p-3 bg-amber-500 text-black rounded-xl hover:bg-amber-400 transition-all flex items-center gap-2 text-sm font-bold"
                    >
                      <Plus size={18} /> Tambah Anggota Baru
                    </button>
                  </div>

                  <div className="space-y-4">
                    {divisionsData[selectedDivId]?.members.map((m, idx) => (
                      <div key={idx} className="flex gap-4 items-center bg-white/5 p-4 rounded-2xl border border-white/5 group">
                        <div className="flex-grow grid grid-cols-2 gap-4">
                          <input 
                            type="text" 
                            placeholder="Nama Lengkap" 
                            value={m.name}
                            onChange={(e) => updateMember(selectedDivId, idx, 'name', e.target.value)}
                            className="bg-transparent border-b border-white/10 py-1 text-sm focus:border-amber-500 outline-none text-white"
                          />
                          <input 
                            type="text" 
                            placeholder="Jabatan" 
                            value={m.role}
                            onChange={(e) => updateMember(selectedDivId, idx, 'role', e.target.value)}
                            className="bg-transparent border-b border-white/10 py-1 text-sm focus:border-amber-500 outline-none text-amber-500 font-bold uppercase"
                          />
                        </div>
                        <button onClick={() => removeMember(selectedDivId, idx)} className="p-2 text-slate-600 hover:text-red-500 transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Kader Section */}
                <div className="glass p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-white">Daftar Kader Muda</h3>
                      <p className="text-sm text-slate-500">Edit daftar kader muda di bawah ini.</p>
                    </div>
                    <button 
                      onClick={() => addKader(selectedDivId)}
                      className="p-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all flex items-center gap-2 text-sm font-bold"
                    >
                      <Plus size={18} /> Tambah Kader
                    </button>
                  </div>

                  <div className="space-y-4">
                    {divisionsData[selectedDivId]?.kader.map((k, idx) => (
                      <div key={idx} className="flex gap-4 items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                        <input 
                          type="text" 
                          placeholder="Nama Kader" 
                          value={k.name}
                          onChange={(e) => updateKader(selectedDivId, idx, e.target.value)}
                          className="flex-grow bg-transparent border-b border-white/10 py-1 text-sm focus:border-amber-500 outline-none text-white"
                        />
                        <button onClick={() => removeKader(selectedDivId, idx)} className="p-2 text-slate-600 hover:text-red-500 transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Save Button */}
                <div className="fixed bottom-10 right-10 flex gap-4">
                   <button 
                    onClick={saveDivisions}
                    className="bg-amber-500 text-black font-bold px-10 py-4 rounded-2xl hover:bg-amber-400 transition-all shadow-2xl shadow-amber-500/20 flex items-center gap-3"
                  >
                    <Save size={20} /> Simpan Perubahan Divisi
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;
