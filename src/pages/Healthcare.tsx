import { SEO } from '../components/SEO';
import { Microscope, UserCheck, Stethoscope, Activity, Heart, ShieldPlus, Home, Leaf, Syringe, Cross, HandHeart, Users, FileText, Building2, PhoneCall, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Healthcare() {
  const services = [
    { title: 'Pathology Laboratory', icon: Microscope, desc: 'Advanced diagnostic testing with accurate, timely reporting for effective medical intervention.', bg: 'bg-blue-50', color: 'text-[#163E96]' },
    { title: 'Home Blood Collection', icon: Home, desc: 'Convenient, safe, and hygienic sample collection from the comfort of your home.', bg: 'bg-green-50', color: 'text-[#148B3A]' },
    { title: 'Doctor Consultation', icon: Stethoscope, desc: 'Expert medical consultations with specialists across various disciplines.', bg: 'bg-red-50', color: 'text-[#D71920]' },
    { title: 'General Medicine & Physician', icon: ShieldPlus, desc: 'Primary healthcare services focusing on prevention, diagnosis, and treatment of adult diseases.', bg: 'bg-orange-50', color: 'text-[#F5A623]' },
    { title: 'Senior Citizen Care', icon: UserCheck, desc: 'Dedicated comprehensive healthcare and wellness programs tailored for the elderly.', bg: 'bg-blue-50', color: 'text-[#163E96]' },
    { title: 'Pain Management Centre', icon: Heart, desc: 'An integrated approach combining Allopathy, Homeopathy, and Ayurveda for effective pain relief.', bg: 'bg-red-50', color: 'text-[#D71920]' },
    { title: 'Physiotherapy', icon: Activity, desc: 'Rehabilitation services to restore movement and function after injury, illness, or disability.', bg: 'bg-green-50', color: 'text-[#148B3A]' },
    { title: 'Neurologist Consultation', icon: Activity, desc: 'Specialized care for disorders of the nervous system, brain, and spinal cord.', bg: 'bg-blue-50', color: 'text-[#163E96]' },
    { title: 'Orthopedic Consultation', icon: Activity, desc: 'Expert diagnosis and treatment for musculoskeletal system conditions.', bg: 'bg-orange-50', color: 'text-[#F5A623]' },
    { title: 'Health Check-up Packages', icon: FileText, desc: 'Comprehensive health screening packages tailored to different age groups and lifestyles.', bg: 'bg-green-50', color: 'text-[#148B3A]' },
    { title: 'Preventive Healthcare', icon: ShieldPlus, desc: 'Proactive healthcare strategies focusing on early detection and prevention of chronic diseases.', bg: 'bg-red-50', color: 'text-[#D71920]' },
    { title: 'Health Awareness Programmes', icon: Users, desc: 'Community outreach initiatives to educate citizens on hygiene, nutrition, and disease prevention.', bg: 'bg-blue-50', color: 'text-[#163E96]' }
  ];

  const supportServices = [
    { title: 'Hospital Admission Assistance', icon: Building2 },
    { title: 'Hospital Coordination', icon: HandHeart },
    { title: 'Referral Services', icon: FileText },
    { title: 'Specialist Appointment Assistance', icon: Stethoscope },
    { title: 'Second Opinion Support', icon: Users },
    { title: 'Emergency Guidance', icon: PhoneCall },
    { title: 'Ambulance Coordination', icon: Activity },
    { title: 'Medical Documentation Support', icon: FileText },
    { title: 'Health Insurance Guidance', icon: ShieldPlus },
    { title: 'Government Health Scheme Guidance', icon: CheckCircle2 }
  ];

  return (
    <>
      <SEO title="Healthcare Services | Unmesh Foundation" description="Comprehensive healthcare services including Doctor Consultation, Pathology, Senior Citizen Care, and Pain Management." />
      
      <div className="bg-slate-50 pt-24 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-block text-[#D71920] font-bold text-[10px] uppercase tracking-widest bg-red-50 px-3 py-1 rounded mb-6">Clinical Excellence</div>
            <h1 className="text-4xl md:text-5xl font-black text-[#163E96] tracking-tight mb-6">Integrated Healthcare Services</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              We offer world-class healthcare facilities spanning pathology, expert doctor consultations, dedicated senior citizen care, and a specialized comprehensive pain management center combining Allopathy, Homeopathy, and Ayurveda.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24">
            {services.map(service => (
              <div key={service.title} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all flex flex-col group">
                <div className={`w-12 h-12 ${service.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-5 h-5 ${service.color}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 leading-tight">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Patient Support Section */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden mb-24 relative grid lg:grid-cols-5">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#163E96] to-[#148B3A] z-20"></div>
             
             <div className="lg:col-span-3 p-10 lg:p-16 relative z-10">
               <div className="max-w-3xl mb-12">
                 <h2 className="text-3xl font-black text-[#163E96] mb-6">Patient Support Services</h2>
                 <p className="text-lg text-slate-600 leading-relaxed">
                   Navigating healthcare systems can be overwhelming. Our dedicated patient support team is here to assist you and your family at every step, ensuring you receive the care you need seamlessly.
                 </p>
               </div>
               
               <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8 mb-12">
                 {supportServices.map((support, i) => (
                   <div key={i} className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                       <support.icon className="w-5 h-5 text-[#148B3A]" />
                     </div>
                     <span className="font-semibold text-slate-700">{support.title}</span>
                   </div>
                 ))}
               </div>
               
               <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 flex items-start gap-4">
                 <AlertCircle className="w-6 h-6 text-[#F5A623] shrink-0 mt-0.5" />
                 <p className="text-sm text-slate-700 font-medium leading-relaxed">
                   <strong>Please Note:</strong> Hospital admission assistance is provided as a guidance service. Actual admission strictly depends upon the respective hospital's policy, doctor's approval, and real-time bed availability. Unmesh Foundation does not guarantee admission to any facility.
                 </p>
               </div>
             </div>

             <div className="lg:col-span-2 relative hidden lg:block">
               <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" alt="Patient support and care" className="absolute inset-0 w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white"></div>
             </div>
          </div>

          <div className="bg-[#163E96] rounded-3xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-black mb-4">Need Medical Assistance?</h2>
              <p className="text-blue-100 mb-8">Contact our support team to book an appointment or request home blood collection services.</p>
              <Link to="/contact" className="inline-block px-8 py-3.5 bg-white text-[#163E96] rounded-full font-bold text-xs uppercase tracking-widest hover:bg-slate-100 transition-colors shadow-lg">
                Get Support Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
