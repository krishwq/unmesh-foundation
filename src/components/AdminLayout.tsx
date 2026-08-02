import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Activity, FileText, Settings, LogOut, TestTube, BriefcaseMedical, Stethoscope, Heart } from 'lucide-react';
import { SEO } from './SEO';

const ADMIN_LINKS = [
  { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { name: 'Doctors', path: '/admin/doctors', icon: Stethoscope },
  { name: 'Partners', path: '/admin/partners', icon: BriefcaseMedical },
  { name: 'Services', path: '/admin/services', icon: Activity },
  { name: 'Camps', path: '/admin/camps', icon: TestTube },
  { name: 'Enquiries', path: '/admin/enquiries', icon: FileText },
  { name: 'Donations', path: '/admin/donations', icon: Heart },
];

export function AdminLayout() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-slate-50">
      <SEO title="Admin Dashboard | Unmesh Foundation" description="Management Dashboard" />
      
      {/* Sidebar */}
      <div className="w-64 bg-[#163E96] text-white flex flex-col shrink-0">
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <img src="/ULogo.png" alt="Logo" className="h-9 w-9 bg-white p-0.5 rounded-full object-contain shrink-0" onError={(e) => {
            e.currentTarget.src = "/logo.svg";
          }} referrerPolicy="no-referrer" />
          <div>
            <div className="font-extrabold tracking-tight leading-none text-xl uppercase" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800 }}>UNMESH</div>
            <div className="text-[10px] text-[#F5A623] uppercase tracking-[0.2em] font-bold">Admin Panel</div>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {ADMIN_LINKS.map(link => {
            const isActive = location.pathname === link.path || (link.path !== '/admin' && location.pathname.startsWith(link.path));
            const Icon = link.icon;
            return (
              <Link 
                key={link.name} 
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive ? 'bg-white text-[#163E96]' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
              >
                <Icon className="w-5 h-5" />
                {link.name}
              </Link>
            )
          })}
        </div>
        
        <div className="p-4 border-t border-white/10">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-all">
            <LogOut className="w-5 h-5" />
            Back to Website
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <h2 className="text-lg font-bold text-slate-800">Foundation Management System</h2>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-[#163E96] flex items-center justify-center font-bold">
              AD
            </div>
            <span className="text-sm font-semibold text-slate-700">Administrator</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
