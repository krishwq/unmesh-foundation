import { SEO } from '../components/SEO';
import { Scale, Building, Home, Shield, Users, FileText, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LegalAid() {
  const services = [
    { title: 'Loan & Banking Guidance', icon: Landmark, desc: 'Assistance with banking disputes, loan settlements, and financial legal guidance.', bg: 'bg-blue-50', color: 'text-[#163E96]' },
    { title: 'Property & Land Matters', icon: Home, desc: 'Legal counsel for property disputes, land rights, and real estate documentation.', bg: 'bg-green-50', color: 'text-[#148B3A]' },
    { title: 'Civil Matters', icon: Scale, desc: 'Professional advice and representation for various civil disputes and litigations.', bg: 'bg-red-50', color: 'text-[#D71920]' },
    { title: 'Criminal Guidance', icon: Shield, desc: 'Initial guidance and legal support for criminal proceedings and rights protection.', bg: 'bg-orange-50', color: 'text-[#F5A623]' },
    { title: 'Senior Citizen Legal Assistance', icon: Users, desc: 'Specialized legal aid focusing on the rights, safety, and assets of the elderly.', bg: 'bg-blue-50', color: 'text-[#163E96]' },
    { title: 'Documentation Support', icon: FileText, desc: 'Help with drafting legal documents, affidavits, agreements, and official paperwork.', bg: 'bg-red-50', color: 'text-[#D71920]' },
    { title: 'Government Scheme Guidance', icon: Building, desc: 'Helping citizens navigate and access various beneficial government programs.', bg: 'bg-green-50', color: 'text-[#148B3A]' }
  ];

  return (
    <>
      <SEO title="Legal Aid Services | Unmesh Foundation" description="Free and professional legal aid services for the underprivileged." />
      
      <div className="bg-slate-50 pt-24 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-block text-[#163E96] font-bold text-[10px] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded mb-6">Justice for All</div>
            <h1 className="text-4xl md:text-5xl font-black text-[#163E96] tracking-tight mb-6">Legal Aid Services</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Empowering the community with proper legal guidance. We believe that access to justice is a fundamental right, and our legal experts are here to provide free and professional support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map(service => (
              <div key={service.title} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all flex flex-col group">
                <div className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#163E96] rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden shadow-sm flex flex-col md:flex-row items-center justify-between text-left">
            <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800" alt="Legal scales" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]"></div>
            <div className="relative z-10 max-w-2xl text-left">
              <h2 className="text-3xl font-black text-white mb-4">Request Legal Consultation</h2>
              <p className="text-blue-100 mb-0">Our panel of experienced lawyers is available for confidential consultations. Get the legal guidance you need today.</p>
            </div>
            <div className="relative z-10 shrink-0 mt-8 md:mt-0">
              <Link to="/contact" className="inline-block px-8 py-3.5 bg-white text-[#163E96] rounded-full font-bold text-xs uppercase tracking-widest hover:bg-slate-100 transition-colors shadow-lg">
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
