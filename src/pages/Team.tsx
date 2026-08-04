import { SEO } from '../components/SEO';
import { Calendar, Languages, Shield, Clock,Phone,PhoneCall } from 'lucide-react';

interface DoctorProfile {
  id: string;
  name: string;
  qualification: string;
  registrationNumber: string;
  specialization: string;
  experience: string;
  languages: string[];
  photoUrl: string;
}

const DOCTORS: DoctorProfile[] = [
  {
    id: '1',
    name: 'Dr. Subhadip Rakshit',
    qualification: 'MBBS, MD ,DM',
    registrationNumber: 'WBMC-76725',
    specialization: 'Gastroenterology',
    experience: '15+ Years',
    languages: ['English', 'Bengali', 'Hindi'],
    photoUrl: '/images/subhadip.jpeg'
  },
  {
    id: '2',
    name: 'Dr. Soma Biswas',
    qualification: 'MBBS, DGO, MD(G&D), FIAOG',
    registrationNumber: 'WBMC-22345',
    specialization: 'GYNECOLOGIST',
    experience: '12+ Years',
    languages: ['English', 'Bengali'],
    photoUrl: '/images/soma.jpeg'
  },
  {
    id: '3',
    name: 'Dr. Swapan Mallick',
    qualification: 'MBBS, MD, CCEBDM',
    registrationNumber: 'WBMC-33456',
    specialization: 'ONCOLOGIST',
    experience: '8+ Years',
    languages: ['English', 'Hindi'],
    photoUrl: '/images/swapan.png'
  },
  
];

export function Team() {
  return (
    <>
      <SEO title="Our Medical Team | Unmesh Foundation" description="Meet our highly qualified and experienced medical professionals." />
      
      <div className="bg-slate-50 pt-24 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-[#163E96] tracking-tight mb-6">Our Medical Team</h1>
            <p className="text-lg text-slate-600">
              A dedicated team of experienced doctors and healthcare professionals committed to providing the highest standard of medical care.
            </p>
          </div>
          {/* Quick Phone Call Booking Bar */}
          <div className="bg-amber-500 text-slate-950 p-6 md:p-8 rounded-3xl shadow-lg border-2 border-amber-400 mb-12 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 shadow-md">
                <PhoneCall className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-slate-900 block">Instant Phone Booking</span>
                <h2 className="text-2xl font-black text-slate-950 mt-0.5">Prefer Booking Directly Over Phone?</h2>
                <p className="text-xs md:text-sm font-semibold text-slate-900/80 mt-1">
                  Call our Doctor appoinment helpline now for immediate appointment of Specialized Doctor.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap gap-3 w-full lg:w-auto shrink-0">
              <a
                href="tel:+919073380904"
                className="flex-1 sm:flex-initial px-6 py-3.5 bg-slate-950 hover:bg-slate-900 text-white font-black text-xs uppercase tracking-wider rounded-2xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+91 90733 80904</span>
              </a>
              <a
                href="tel:+917980510804"
                className="flex-1 sm:flex-initial px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-black text-xs uppercase tracking-wider rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 border border-slate-300"
              >
                <Phone className="w-4 h-4 text-[#163E96]" />
                <span>+91 79805 10804</span>
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {DOCTORS.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 flex flex-col sm:flex-row gap-8 hover:shadow-xl transition-all">
                <div className="shrink-0">
                  <img 
                    src={doctor.photoUrl} 
                    alt={doctor.name} 
                    className="w-32 h-32 rounded-2xl object-cover shadow-sm border border-slate-200"
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold text-slate-800 mb-1">{doctor.name}</h2>
                    <p className="text-[#163E96] font-bold text-sm uppercase tracking-widest mb-1">{doctor.specialization}</p>
                    <p className="text-slate-500 text-sm font-semibold">{doctor.qualification}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Shield className="w-4 h-4 text-[#D71920]" />
                      <span className="truncate">{doctor.registrationNumber}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Clock className="w-4 h-4 text-[#F5A623]" />
                      <span>{doctor.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 col-span-2">
                      <Languages className="w-4 h-4 text-[#148B3A]" />
                      <span>{doctor.languages.join(', ')}</span>
                    </div>
                    
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
