import { SEO } from '../components/SEO';
import { Building2, TrendingUp, Users, Download, ArrowRight, Heart, FileText, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CSR() {
  const csrAreas = [
    { title: 'Corporate Healthcare CSR', icon: Activity, desc: 'Partner with us to fund critical diagnostic infrastructure, medical camps, and essential treatment facilities for underprivileged communities.', bg: 'bg-blue-50', color: 'text-[#163E96]' },
    { title: 'Senior Citizen Welfare', icon: Users, desc: 'Support comprehensive care programs, regular health checkups, and holistic well-being initiatives for the elderly.', bg: 'bg-green-50', color: 'text-[#148B3A]' },
    { title: 'Healthcare Camps', icon: Heart, desc: 'Sponsor large-scale rural and urban health camps focusing on general medicine, eye care, and chronic disease screening.', bg: 'bg-red-50', color: 'text-[#D71920]' },
    { title: 'Skill Development Projects', icon: TrendingUp, desc: 'Fund vocational training programs in the healthcare sector, creating sustainable employment for unemployed youth.', bg: 'bg-orange-50', color: 'text-[#F5A623]' },
    { title: 'Community Development', icon: Building2, desc: 'Invest in long-term community health infrastructure, sanitation awareness, and nutritional support programs.', bg: 'bg-blue-50', color: 'text-[#163E96]' }
  ];

  return (
    <>
      <SEO title="CSR Partnerships | Unmesh Foundation" description="Partner with Unmesh Foundation for impactful Corporate Social Responsibility initiatives." />
      
      <div className="bg-slate-50 pt-24 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-[#163E96] rounded-full mb-6">
              <Building2 className="w-6 h-6" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#163E96] tracking-tight mb-6">Strategic CSR Partnerships</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Align your corporate values with measurable, on-ground healthcare and community development initiatives. Unmesh Foundation is fully compliant with Indian CSR regulations (Form 1, 12A, 80G).
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {csrAreas.map((area) => (
              <div key={area.title} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                <div className={`w-12 h-12 ${area.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <area.icon className={`w-6 h-6 ${area.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{area.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#163E96] rounded-3xl overflow-hidden shadow-xl border border-[#0f2c6c]">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-10 lg:p-16 text-white relative">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-black mb-6">Ready to make a sustainable impact?</h2>
                  <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                    Collaborate with us to design customized CSR projects that meet your organizational goals and compliance requirements while creating real social value.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-[#163E96] px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-lg text-xs uppercase tracking-widest">
                      <Download className="w-5 h-5" />
                      CSR Proposal PDF
                    </button>
                    <Link to="/contact" className="bg-[#0f2c6c] border border-blue-400/30 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-900 transition-colors text-xs uppercase tracking-widest">
                      Contact CSR Desk
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="h-full hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                  alt="Corporate CSR Collaboration" 
                  className="h-full w-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
