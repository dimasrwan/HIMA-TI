import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import VisiMisi from './pages/VisiMisi';
import Divisi from './pages/Divisi';
import Kontak from './pages/Kontak';
import Admin from './pages/Admin';
import Login from './pages/Login';

// Component to protect admin routes
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem('isAdminAuthenticated') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const AppContent = () => {
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';
  const isLoginPage = location.pathname === '/login';
  const hideLayout = isAdminPage || isLoginPage;

  return (
    <div className="bg-[#050507] min-h-screen text-slate-200 selection:bg-amber-500/30 selection:text-amber-500 flex flex-col relative overflow-x-hidden font-outfit">
      {/* Premium Aurora Grain Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050507]">
        {/* Very Dim Aurora Blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-amber-500/5 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-[-15%] left-[-5%] w-[40vw] h-[40vw] bg-orange-600/[0.03] rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '25s' }} />

        {/* Grainy Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        
        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050507] opacity-80" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {!hideLayout && <Navbar />}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/visi-misi" element={<VisiMisi />} />
            <Route path="/divisi" element={<Divisi />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>
        {!hideLayout && <Footer />}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
