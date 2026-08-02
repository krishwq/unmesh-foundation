import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Handshake, Stethoscope } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Healthcare', path: '/healthcare' },
  { name: 'Services', path: '/services' },
  { name: 'Network', path: '/network' },
  { name: 'Legal Aid', path: '/legal-aid' },
  { name: 'Skill Development', path: '/skill-development' },
  { name: 'Medical Team', path: '/team' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'CSR', path: '/csr' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="hidden md:flex h-8 bg-[#163E96] text-white items-center justify-between px-4 sm:px-6 lg:px-8 text-xs font-medium fixed top-0 w-full z-50">
        <div className="flex gap-6 uppercase tracking-wider">
          <span>Emergency Support: +91 9073380904</span>
          <span className="hidden lg:inline">Global Presence: India | USA | Middle East</span>
        </div>
        <div className="flex gap-4 items-center">
          <Link to="/admin" className="opacity-80 hover:opacity-100 transition-opacity bg-white/20 px-3 py-1 rounded-full text-[10px]">Admin Login</Link>
          <span className="opacity-80">Registered NGO: 12A & 80G Certified</span>
          <span className="opacity-80 hidden sm:inline">Language: English</span>
        </div>
      </div>

      <nav className={`fixed w-full z-40 transition-all duration-300 md:top-8 top-0 ${scrolled ? 'bg-white shadow-sm py-0 h-16' : 'bg-white border-b border-slate-200 h-20'} flex items-center`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/ULogo.png" alt="Unmesh Foundation Logo" className="h-12 w-12 md:h-13 md:w-13 object-contain shrink-0" onError={(e) => {
              e.currentTarget.src = "/logo.svg";
            }} referrerPolicy="no-referrer" />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight leading-none text-[#182181] uppercase" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800 }}>UNMESH FOUNDATION</span>
              <span className="text-[11px] font-bold text-slate-500 tracking-tight leading-snug mt-1">(উন্মেশ ফাউন্ডেশন)</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex gap-5 text-sm font-semibold text-slate-600">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`transition-colors hover:text-[#D71920] ${location.pathname === link.path ? 'text-[#D71920]' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Link to="/volunteer" className="px-4 py-2 rounded-full border-2 border-[#163E96] font-bold text-[11px] uppercase tracking-widest text-[#163E96] hover:bg-[#163E96] hover:text-white transition-colors">
                Volunteer
              </Link>
              <Link to="/donate" className="px-6 py-2 rounded-full bg-[#F5A623] hover:bg-[#d48b14] text-white font-bold text-[11px] uppercase tracking-widest shadow-lg shadow-orange-200 transition-all hover:shadow-orange-300">
                Donate
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#163E96] hover:text-[#D71920] p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-lg"
            >
              <div className="px-4 py-4 space-y-1 h-[calc(100vh-80px)] overflow-y-auto pb-24">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-sm font-bold ${location.pathname === link.path ? 'text-white bg-[#163E96]' : 'text-[#163E96] hover:bg-slate-50'}`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                  <Link to="/volunteer" className="text-center px-4 py-3 rounded-xl border-2 border-[#163E96] font-bold text-[11px] uppercase tracking-widest text-[#163E96] hover:bg-[#163E96] hover:text-white transition-colors">
                    Volunteer
                  </Link>
                  <Link to="/donate" className="text-center px-4 py-3 rounded-xl bg-[#F5A623] text-white font-bold text-[11px] uppercase tracking-widest shadow-md shadow-orange-200">
                    Donate
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
