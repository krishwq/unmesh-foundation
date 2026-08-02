import { SEO } from '../components/SEO';
import { Calendar, Languages, Shield, Clock } from 'lucide-react';

interface DoctorProfile {
  id: string;
  name: string;
  qualification: string;
  registrationNumber: string;
  specialization: string;
  experience: string;
  languages: string[];
  availability: string;
  photoUrl: string;
}

const DOCTORS: DoctorProfile[] = [
  {
    id: '1',
    name: 'Dr. Amitabha Ghosh',
    qualification: 'MBBS, MD (Medicine)',
    registrationNumber: 'WBMC-12345',
    specialization: 'General Physician',
    experience: '15+ Years',
    languages: ['English', 'Bengali', 'Hindi'],
    availability: 'Mon, Wed, Fri (10 AM - 1 PM)',
    photoUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    name: 'Dr. Ramesh Kumar',
    qualification: 'MS (Orthopedics)',
    registrationNumber: 'WBMC-22345',
    specialization: 'Orthopedic Surgeon',
    experience: '12+ Years',
    languages: ['English', 'Bengali'],
    availability: 'Tue, Thu (4 PM - 7 PM)',
    photoUrl: 'https://images.unsplash.com/photo-1594824436998-d88d9def22bc?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    name: 'Dr. Sneha Roy',
    qualification: 'MD (Neurology), DM',
    registrationNumber: 'WBMC-33456',
    specialization: 'Neurologist',
    experience: '8+ Years',
    languages: ['English', 'Hindi'],
    availability: 'Saturday (10 AM - 2 PM)',
    photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '4',
    name: 'Dr. Vikram Sengupta',
    qualification: 'MD, FIPM',
    registrationNumber: 'WBMC-44567',
    specialization: 'Pain Management Specialist',
    experience: '10+ Years',
    languages: ['English', 'Bengali'],
    availability: 'Mon to Fri (11 AM - 3 PM)',
    photoUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400'
  }
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
                    <div className="flex items-start gap-2 text-sm text-slate-600 col-span-2">
                      <Calendar className="w-4 h-4 text-[#163E96] mt-0.5 shrink-0" />
                      <span>{doctor.availability}</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-[#163E96] hover:bg-[#0f2c6c] text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-colors">
                    Book Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
