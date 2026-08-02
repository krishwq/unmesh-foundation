import { SEO } from '../components/SEO';
import { BookOpen, Stethoscope, Microscope, Activity, Monitor, FileSpreadsheet, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SkillDevelopment() {
  const courses = [
    { title: 'Operation Theatre Assistant', category: 'Clinical', icon: Stethoscope },
    { title: 'Dental OT Assistant', category: 'Clinical', icon: Stethoscope },
    { title: 'USG Technician', category: 'Diagnostics', icon: Activity },
    { title: 'Phlebotomy Technician', category: 'Diagnostics', icon: Microscope },
    { title: 'X-Ray Technician', category: 'Diagnostics', icon: Activity },
    { title: 'ECG Technician', category: 'Diagnostics', icon: Activity },
    { title: 'Laboratory Technician', category: 'Diagnostics', icon: Microscope },
    { title: 'Patient Care Assistant', category: 'Care', icon: Stethoscope },
    { title: 'Healthcare Reception Executive', category: 'Administration', icon: FileSpreadsheet },
    { title: 'Hospital Administration', category: 'Administration', icon: FileSpreadsheet },
    { title: 'Digital Marketing', category: 'Digital', icon: Monitor },
    { title: 'Data Analytics', category: 'Digital', icon: Monitor }
  ];

  return (
    <>
      <SEO title="Skill Development | Unmesh Foundation" description="Healthcare technical courses and skill development for youth employment." />
      
      <div className="bg-slate-50 pt-24 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-block text-[#F5A623] font-bold text-[10px] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded mb-6">Education & Employment</div>
            <h1 className="text-4xl md:text-5xl font-black text-[#163E96] tracking-tight mb-6">Skill Development & Training</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Professional training courses designed to equip the youth with specialized skills required for the modern healthcare and digital sectors, ensuring 100% placement assistance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {courses.map(course => (
              <div key={course.title} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all flex flex-col group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#163E96] to-[#F5A623] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-12 bg-blue-50 text-[#163E96] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <course.icon className="w-5 h-5" />
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{course.category}</div>
                <h3 className="font-bold text-slate-800 mb-4">{course.title}</h3>
                
                <Link to="/contact" className="mt-auto inline-flex items-center gap-2 text-xs font-bold text-[#F5A623] uppercase tracking-widest hover:text-[#d48b14] transition-colors">
                  Inquire Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-[#163E96] rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1576091160550-2173ff9e5eb2?auto=format&fit=crop&q=80&w=800" alt="Medical students" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]"></div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl font-black mb-4">Ready to start your career?</h2>
              <p className="text-blue-100">Enroll in our professional certification programs. We provide hands-on training and placement assistance.</p>
            </div>
            <div className="relative z-10 shrink-0">
              <Link to="/contact" className="inline-block px-8 py-3.5 bg-[#F5A623] text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#d48b14] transition-colors shadow-lg shadow-orange-900/20">
                Enroll Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
