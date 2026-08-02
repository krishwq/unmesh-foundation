import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Heart, Eye, Target, Users, BookOpen, Activity } from 'lucide-react';

export function About() {
  return (
    <>
      <SEO title="About Us | Unmesh Foundation" description="Learn about Unmesh Foundation, our mission, vision, core values, and governance structure." />
      
      <div className="bg-slate-50 pt-24 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-[10px] font-bold tracking-widest text-[#163E96] uppercase mb-3">Our Identity</h2>
                <h1 className="text-4xl lg:text-5xl font-black text-slate-800 tracking-tight leading-tight">
                  Driving Healthcare <br /> Equity & Innovation
                </h1>
                <h3 className="text-lg font-bold text-[#F5A623] mt-2">Unmesh Foundation (উন্মেশ ফাউন্ডেশন)</h3>
              </div>
              
              <div className="prose prose-lg text-slate-600 leading-relaxed">
                <p>
                  UNMESH FOUNDATION is a premier non-profit organization registered under the Indian Trusts Act. 
                  We operate with the rigorous standards of leading global health institutions, combined with the 
                  deep compassion required for community-level impact.
                </p>
                <p>
                  Our focus spans comprehensive diagnostic services, preventive healthcare, senior citizen care, 
                  legal aid, and skill development, integrating modern medicine with traditional systems like Ayurveda 
                  and Homeopathy to offer holistic healing.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#148B3A]" />
                  Credentials & Accreditations
                </h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {['12A Registered', '80G Certified', 'CSR Form 1 Compliant', 'ISO 9001:2015', 'Niti Aayog Darpan', 'Ethical Guidelines'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-600 text-sm font-semibold">
                      <CheckCircle2 className="w-5 h-5 text-[#148B3A] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e18690c5e45e?auto=format&fit=crop&q=80&w=600" 
                  alt="Medical facility" 
                  className="rounded-3xl w-full h-72 object-cover shadow-sm"
                />
                <img 
                  src="https://images.unsplash.com/photo-1582750433449-648ed127d09e?auto=format&fit=crop&q=80&w=600" 
                  alt="Doctor consultation" 
                  className="rounded-3xl w-full h-72 object-cover mt-12 shadow-sm"
                />
              </div>
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 mb-24">
            <div className="bg-[#163E96] text-white p-10 rounded-3xl relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]"></div>
               <div className="relative z-10">
                 <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                   <Target className="w-6 h-6" />
                 </div>
                 <h2 className="text-3xl font-black mb-4">Our Mission</h2>
                 <p className="text-blue-100 leading-relaxed text-lg">
                   To provide accessible, affordable, and high-quality healthcare, legal aid, and skill development services to underprivileged communities, fostering a healthier and empowered society through sustainable interventions and dedicated care.
                 </p>
               </div>
            </div>
            
            <div className="bg-[#D71920] text-white p-10 rounded-3xl relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]"></div>
               <div className="relative z-10">
                 <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                   <Eye className="w-6 h-6" />
                 </div>
                 <h2 className="text-3xl font-black mb-4">Our Vision</h2>
                 <p className="text-red-100 leading-relaxed text-lg">
                   To be a globally recognized humanitarian institution that ensures holistic well-being, equity in healthcare access, and justice for every individual, creating a world where no one is left behind due to lack of resources.
                 </p>
               </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-black text-slate-800 mb-4">Our Core Values</h2>
              <p className="text-slate-600">The guiding principles that define our work culture and approach to community service.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Compassion', icon: Heart, desc: 'We treat every individual with empathy, dignity, and unwavering care.', color: 'text-[#D71920]', bg: 'bg-red-50' },
                { title: 'Integrity', icon: ShieldCheck, desc: 'We uphold the highest ethical standards in all our medical and legal practices.', color: 'text-[#163E96]', bg: 'bg-blue-50' },
                { title: 'Inclusivity', icon: Users, desc: 'We ensure our services are accessible to all, irrespective of socio-economic background.', color: 'text-[#F5A623]', bg: 'bg-orange-50' },
                { title: 'Excellence', icon: Activity, desc: 'We strive for international standards of quality in healthcare delivery.', color: 'text-[#148B3A]', bg: 'bg-green-50' },
                { title: 'Transparency', icon: BookOpen, desc: 'We maintain complete financial and operational transparency with our stakeholders.', color: 'text-[#163E96]', bg: 'bg-blue-50' },
                { title: 'Empowerment', icon: Target, desc: 'We focus on skill development and education to create self-reliant communities.', color: 'text-[#F5A623]', bg: 'bg-orange-50' }
              ].map((value) => (
                <div key={value.title} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                  <div className={`w-12 h-12 ${value.bg} ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl text-slate-800 mb-3">{value.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Governance & Trust */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
             <div className="grid lg:grid-cols-2">
               <div className="p-10 lg:p-16">
                 <h2 className="text-3xl font-black text-[#163E96] mb-6">Governance & Transparency</h2>
                 <p className="text-slate-600 mb-8 leading-relaxed">
                   Unmesh Foundation operates under a strict corporate governance framework. Our board of trustees comprises eminent medical professionals, legal experts, and social workers who ensure ethical compliance and maximum impact for every rupee donated.
                 </p>
                 
                 <div className="space-y-6">
                   <div>
                     <h3 className="font-bold text-slate-800 mb-2">Patient Rights & Privacy</h3>
                     <p className="text-sm text-slate-500">We stringently follow medical data privacy laws and uphold a comprehensive Patient Bill of Rights, ensuring informed consent and confidentiality.</p>
                   </div>
                   <div>
                     <h3 className="font-bold text-slate-800 mb-2">Financial Transparency</h3>
                     <p className="text-sm text-slate-500">Annual audited financials and impact reports are published openly. We utilize a secure, centralized system for fund tracking and CSR compliance.</p>
                   </div>
                 </div>
               </div>
               <div className="bg-slate-50 p-10 lg:p-16 border-l border-slate-100 flex flex-col justify-center">
                 <h3 className="text-xl font-bold text-slate-800 mb-8">Why Choose Unmesh Foundation?</h3>
                 <ul className="space-y-4">
                   {[
                     'Integrated holistic care approach',
                     'Dedicated Senior Citizen support network',
                     'Network of specialized and highly qualified doctors',
                     'State-of-the-art diagnostic infrastructure',
                     'Free professional legal aid services',
                     '100% placement assistance in skill development'
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-3">
                       <CheckCircle2 className="w-5 h-5 text-[#148B3A] shrink-0 mt-0.5" />
                       <span className="font-semibold text-slate-700">{item}</span>
                     </li>
                   ))}
                 </ul>
               </div>
             </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
