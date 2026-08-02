import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Stethoscope, Activity, Heart, Shield, FlaskConical, Pill, Brain, Scale, Globe2, BookOpen } from 'lucide-react';

const SERVICES = [
  { icon: FlaskConical, title: 'Diagnostic Services', desc: 'Advanced pathology and imaging with rigorous quality control.' },
  { icon: Activity, title: 'Home Blood Collection', desc: 'Hygienic and convenient sample collection by trained phlebotomists.' },
  { icon: Pill, title: 'Medicine & Pharmacy', desc: 'Access to essential pharmaceutical products and prescribed medicines.' },
  { icon: Heart, title: 'Senior Citizen Care', desc: 'Comprehensive wellness, monitoring, and support for the elderly.' },
  { icon: Shield, title: 'Ayurveda & Homeopathy', desc: 'Integrative healing approaches bridging traditional and modern medicine.' },
  { icon: Brain, title: 'Pain Management', desc: 'Specialized care protocols for chronic and acute pain relief.' },
  { icon: Scale, title: 'Legal Aid', desc: 'Guidance and support for patient rights and healthcare disputes.' },
  { icon: Globe2, title: 'International Health Support', desc: 'Global healthcare guidance, diagnostic coordination, and education.' },
  { icon: BookOpen, title: 'Healthcare Skill Development', desc: 'Training programs for allied healthcare professionals and youth.' },
  { icon: Stethoscope, title: 'Health Camps', desc: 'Community outreach providing free consultations and basic diagnostics.' },
];

export function Services() {
  return (
    <>
      <SEO title="Healthcare Services | Unmesh Foundation" />
      
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">Our Services</h1>
            <p className="text-lg text-gray-600">
              Delivering a wide spectrum of clinical, preventive, and supportive healthcare services, 
              designed with a patient-first approach and international standards of safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-50 p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl max-w-3xl mx-auto text-center">
             <p className="text-sm text-orange-800 font-medium leading-relaxed">
               <strong>Important Notice for International Services:</strong> Unmesh Foundation provides health-related guidance, diagnostic coordination, and preventive health education only. We do not process visas, grant immigration approvals, or provide government authorizations.
             </p>
          </div>
        </div>
      </div>
    </>
  );
}
