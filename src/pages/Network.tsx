import { SEO } from '../components/SEO';
import { Building2, Microscope, Eye, HeartPulse, Activity, Search, ArrowRight, UserPlus, FileText, Pill, Car, MapPin, BriefcaseMedical, TestTube } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Network() {
  const partners = [
    { title: 'Partner Hospitals', icon: Building2 },
    { title: 'Partner Diagnostic Centres', icon: Microscope },
    { title: 'Partner Eye Hospitals', icon: Eye },
    { title: 'Pathology Laboratory Network', icon: TestTube },
    { title: 'Radiology & Imaging Centres', icon: Activity },
    { title: 'Pain Management Centres', icon: HeartPulse },
    { title: 'Physiotherapy Centres', icon: Activity },
    { title: 'Home Healthcare Partners', icon: HeartPulse },
    { title: 'Ambulance Network', icon: Car },
    { title: 'Pharmacy Partners', icon: Pill },
    { title: 'Specialist Doctor Network', icon: BriefcaseMedical },
  ];

  const coordinationServices = [
    'Doctor Appointment Booking',
    'Diagnostic Test Coordination',
    'Blood Test Booking',
    'Home Sample Collection',
    'MRI / CT Scan / X-Ray Booking',
    'Eye Surgery Coordination',
    'Cataract Surgery Support',
    'Pain Management Treatment Coordination',
    'Hospital Admission Support',
    'Surgery Planning Assistance',
    'Second Medical Opinion',
    'Medical Records Assistance',
    'Follow-up Care Coordination'
  ];

  return (
    <>
      <SEO title="Healthcare Network | Unmesh Foundation" description="Unmesh Foundation works with a trusted network of hospitals and healthcare partners to provide quality healthcare at affordable prices." />
      
      {/* Hero Section */}
      <section className="bg-slate-50 pt-24 pb-16 min-h-[60vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" alt="Hospital Network" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-[#163E96] rounded-full mb-6">
              <Building2 className="w-6 h-6" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#163E96] tracking-tight mb-6">Healthcare Network & Partner Hospitals</h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Unmesh Foundation works with a trusted network of hospitals, diagnostic centres, specialist doctors, and healthcare partners to help patients access quality healthcare services at affordable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/find-hospital" className="bg-[#163E96] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#0f2c6c] transition-colors shadow-lg text-xs uppercase tracking-widest">
                <Search className="w-5 h-5" />
                Find a Partner
              </Link>
              <Link to="/become-partner" className="bg-white text-[#163E96] border border-slate-200 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-sm text-xs uppercase tracking-widest">
                <UserPlus className="w-5 h-5" />
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Network Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-[#163E96] mb-4">Our Partner Network</h2>
            <p className="text-slate-600">We collaborate with top-tier medical facilities to ensure comprehensive care coverage across all specialties.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#163E96] mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <partner.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-800 text-sm leading-snug">{partner.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Coordination Services */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black text-[#163E96] mb-6">Medical Coordination Services</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Navigating the healthcare system can be overwhelming. Our dedicated medical coordination team assists patients at every step, ensuring seamless access to care, priority bookings, and negotiated affordable rates at our partner facilities.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                {coordinationServices.map((service, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200" alt="Medical Coordination" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#163E96]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-slate-800">Seamless Journey</div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">We handle the administrative burden so patients can focus purely on their recovery and well-being.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs text-slate-500 leading-relaxed font-medium bg-slate-50 p-6 rounded-xl border border-slate-100">
            <strong className="text-slate-700 block mb-1">Important Disclaimer:</strong>
            Unmesh Foundation acts as a healthcare facilitator and coordination platform. Medical treatment, diagnostic testing and surgical procedures are performed by qualified healthcare professionals and partner hospitals. Clinical decisions remain the responsibility of the treating healthcare provider.
          </p>
        </div>
      </section>
    </>
  );
}
