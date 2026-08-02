import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { ArrowRight, Heart, Activity, Users, Shield, Microscope, Scale, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroSlider } from '../components/HeroSlider';

export function Home() {
  return (
    <>
      <SEO />
      
      {/* Hero Section & Stats */}
      <section className="flex flex-col lg:flex-row min-h-[calc(100vh-7rem)] bg-slate-50">
        {/* Left Column: Branding & Value Proposition */}
        <div className="w-full lg:w-3/5 p-8 lg:p-16 flex flex-col justify-center relative z-10 pt-24 lg:pt-16">
          <div className="inline-block self-start text-[#163E96] font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded mb-8">
            Healthcare Social Impact Organization
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#163E96] leading-[1.1] mb-6 tracking-tight">
            Global Standards.<br/>
            <span className="text-slate-800">Local Compassion.</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-lg leading-relaxed mb-10">
            Bridging the gap between international healthcare standards and community welfare through innovation, transparency, and clinical excellence.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="/healthcare" className="inline-flex items-center justify-center bg-[#163E96] hover:bg-[#0f2c6c] text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30">
              Get Support
            </Link>
            <Link to="/donate" className="inline-flex items-center justify-center bg-[#F5A623] hover:bg-[#d48b14] text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-orange-200 hover:shadow-xl hover:shadow-orange-300">
              Support Us
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex-1 border-l-4 border-l-[#163E96]">
              <div className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1">CSR Excellence</div>
              <div className="text-sm font-semibold text-slate-700">Dedicated Partnership for Global Enterprises</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex-1 border-l-4 border-l-[#D71920]">
              <div className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1">Medical Support</div>
              <div className="text-sm font-semibold text-slate-700">International Health Guidance Network</div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Impact 5-Image Slider */}
        <HeroSlider />
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[10px] font-bold text-[#D71920] uppercase tracking-widest mb-4">Our Impact</div>
            <h2 className="text-3xl md:text-4xl font-black text-[#163E96] tracking-tight">Making a Difference</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">These statistics are placeholder values and can be updated from the Admin Dashboard.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {[
              { label: 'Healthcare Services', value: '[00,000]+', icon: Activity, color: 'text-blue-600', bg: 'bg-blue-50' },
              { label: 'Senior Citizens Supported', value: '[0,000]+', icon: Users, color: 'text-red-600', bg: 'bg-red-50' },
              { label: 'Health Camps', value: '[00]+', icon: Microscope, color: 'text-green-600', bg: 'bg-green-50' },
              { label: 'Legal Aid Cases', value: '[000]+', icon: Scale, color: 'text-orange-600', bg: 'bg-orange-50' },
              { label: 'Skill Development Students', value: '[0,000]+', icon: BookOpen, color: 'text-purple-600', bg: 'bg-purple-50' },
              { label: 'Volunteers', value: '[0,000]+', icon: Heart, color: 'text-pink-600', bg: 'bg-pink-50' },
              { label: 'Partner Hospitals', value: '[00]+', icon: Shield, color: 'text-indigo-600', bg: 'bg-indigo-50' },
              { label: 'Qualified Doctors', value: '[000]+', icon: Activity, color: 'text-teal-600', bg: 'bg-teal-50' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-6 text-center border border-slate-100 hover:shadow-lg transition-all duration-300 group">
                <div className={`w-12 h-12 mx-auto rounded-full ${stat.bg} ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-black text-slate-800 mb-1">{stat.value}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="text-[10px] font-bold text-[#D71920] uppercase tracking-widest mb-4">Our Focus Areas</div>
              <h2 className="text-3xl md:text-5xl font-black text-[#163E96] tracking-tight mb-4">Comprehensive Care</h2>
              <p className="text-lg text-slate-500">Delivering international standard healthcare and social services to communities that need it most.</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-2 text-[#F5A623] font-bold text-xs uppercase tracking-widest hover:text-[#d48b14] transition-colors">
              View all services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Healthcare',
                desc: 'Pathology, doctor consultations, and pain management centers.',
                icon: Activity,
                color: 'text-[#163E96]',
                bg: 'bg-blue-50',
                link: '/healthcare'
              },
              {
                title: 'Senior Citizen Care',
                desc: 'Dedicated comprehensive healthcare and wellness programs for the elderly.',
                icon: Users,
                color: 'text-[#D71920]',
                bg: 'bg-red-50',
                link: '/healthcare'
              },
              {
                title: 'Legal Aid',
                desc: 'Free professional guidance for civil, criminal, and property matters.',
                icon: Scale,
                color: 'text-[#163E96]',
                bg: 'bg-blue-50',
                link: '/legal-aid'
              },
              {
                title: 'Skill Development',
                desc: 'Healthcare technical courses equipping youth with employment skills.',
                icon: BookOpen,
                color: 'text-[#F5A623]',
                bg: 'bg-orange-50',
                link: '/skill-development'
              }
            ].map((service, idx) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group rounded-3xl p-8 bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-500 mb-6 text-sm leading-relaxed flex-1">{service.desc}</p>
                <Link to={service.link} className={`text-xs font-bold uppercase tracking-widest ${service.color} flex items-center gap-2 group-hover:gap-3 transition-all mt-auto`}>
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR & Partnership CTA */}
      <section className="py-24 bg-[#163E96] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block text-[#F5A623] font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded mb-6">Corporate Social Responsibility</div>
              <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">Partner with us for lasting global impact.</h2>
              <p className="text-lg text-blue-100 mb-8 max-w-xl">
                Unmesh Foundation is eligible for CSR funding with 12A & 80G certifications. We ensure complete transparency, regular impact reporting, and measurable outcomes for our corporate partners.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/csr" className="px-8 py-3.5 bg-white text-[#163E96] rounded-full font-bold text-xs uppercase tracking-widest hover:bg-slate-100 transition-colors shadow-lg">
                  Explore CSR Opportunities
                </Link>
                <Link to="/contact" className="px-8 py-3.5 border-2 border-white/30 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-colors">
                  Contact our Team
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
               <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20 flex flex-col justify-between h-full">
                 <div className="text-3xl font-black mb-2 text-[#F5A623]">100%</div>
                 <div className="text-xs font-bold uppercase tracking-wider text-blue-100">Fund Utilization Transparency</div>
               </div>
               <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20 flex flex-col justify-between h-full">
                 <div className="text-3xl font-black mb-2 text-[#F5A623]">ISO</div>
                 <div className="text-xs font-bold uppercase tracking-wider text-blue-100">9001:2015 Certified Quality</div>
               </div>
               <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20 flex flex-col justify-between h-full">
                 <div className="text-3xl font-black mb-2 text-[#F5A623]">80G</div>
                 <div className="text-xs font-bold uppercase tracking-wider text-blue-100">Tax Exemptions Applicable</div>
               </div>
               <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20 flex flex-col justify-between h-full">
                 <div className="text-3xl font-black mb-2 text-[#F5A623]">Pan-India</div>
                 <div className="text-xs font-bold uppercase tracking-wider text-blue-100">Operational Reach</div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
