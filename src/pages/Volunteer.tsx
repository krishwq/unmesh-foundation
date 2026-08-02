import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Heart, Globe, GraduationCap, Briefcase } from 'lucide-react';

export function Volunteer() {
  return (
    <>
      <SEO title="Volunteer | Unmesh Foundation" description="Join Unmesh Foundation as a volunteer to make healthcare accessible and equitable." />
      
      <div className="bg-slate-50 pt-24 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-[#163E96] tracking-tight mb-6">Join the Movement</h1>
            <p className="text-lg text-slate-600">
              Contribute your skills, time, and compassion. Be part of a global community dedicated to making healthcare accessible and equitable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { title: 'Medical Volunteer', icon: Heart, desc: 'For doctors, nurses, and allied healthcare professionals.', color: 'text-[#D71920]', bg: 'bg-red-50' },
              { title: 'Student Volunteer', icon: GraduationCap, desc: 'Gain experience while making a real community impact.', color: 'text-[#163E96]', bg: 'bg-blue-50' },
              { title: 'Corporate Volunteer', icon: Briefcase, desc: 'Engage your employees in meaningful CSR activities.', color: 'text-[#F5A623]', bg: 'bg-orange-50' },
              { title: 'International Volunteer', icon: Globe, desc: 'Support our global health guidance initiatives remotely.', color: 'text-[#148B3A]', bg: 'bg-green-50' },
            ].map((role) => (
              <div key={role.title} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm text-center hover:shadow-xl transition-all">
                <div className={`w-14 h-14 ${role.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <role.icon className={`w-6 h-6 ${role.color}`} />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{role.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="bg-[#163E96] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden h-full flex flex-col justify-center min-h-[400px]">
              <img src="https://images.unsplash.com/photo-1593113563332-e14b25ce7858?auto=format&fit=crop&q=80&w=800" alt="Volunteers" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-black mb-6">Why Volunteer With Us?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">1</div>
                    <span className="text-blue-50 font-medium">Gain hands-on experience in community healthcare and social work.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">2</div>
                    <span className="text-blue-50 font-medium">Work alongside experienced medical professionals and experts.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">3</div>
                    <span className="text-blue-50 font-medium">Make a tangible difference in the lives of the underprivileged.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#163E96] via-[#D71920] to-[#F5A623]"></div>
              <h2 className="text-2xl font-black text-slate-800 mb-8 text-center">Volunteer Registration</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">First Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Last Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] transition-all" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Phone Number</label>
                    <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Area of Interest</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] transition-all bg-white font-medium text-slate-700">
                    <option>Medical Support</option>
                    <option>Community Outreach</option>
                    <option>Legal Aid Services</option>
                    <option>Event Management</option>
                    <option>Fundraising</option>
                  </select>
                </div>

                <button type="button" className="w-full bg-[#163E96] hover:bg-[#0f2c6c] text-white font-bold text-sm uppercase tracking-widest py-4 rounded-xl transition-colors shadow-md">
                  Submit Application
                </button>
                
                <p className="text-xs text-center text-slate-500 mt-4 font-semibold">
                  All volunteers receive a verified certificate of service upon completion of their program.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
