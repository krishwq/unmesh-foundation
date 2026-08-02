import { SEO } from '../components/SEO';
import { UserPlus, Building2, Stethoscope, Mail, Phone, CheckCircle2 } from 'lucide-react';
import { useState, FormEvent } from 'react';

export function BecomePartner() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <SEO title="Become a Healthcare Partner | Unmesh Foundation" description="Join our network of healthcare providers to make quality healthcare accessible to all." />
      
      <div className="bg-slate-50 pt-24 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-[#163E96] rounded-full mb-6">
                <UserPlus className="w-6 h-6" />
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-[#163E96] tracking-tight mb-6">Become Our Healthcare Partner</h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Join our growing network of hospitals, clinics, diagnostic centres, and specialists. Together, we can make quality healthcare more accessible, affordable, and seamless for patients across the region.
              </p>
              
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm mb-8">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Who Can Partner With Us?</h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Hospitals', 'Diagnostic Centres', 'Eye Hospitals', 
                    'Clinics', 'Doctors & Specialists', 'Physiotherapists', 
                    'Ambulance Providers', 'Pharmacies', 'Home Healthcare Agencies'
                  ].map((type, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-sm font-semibold text-slate-700">{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-[#163E96] text-white p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">Why Partner With Unmesh?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#F5A623] rounded-full mt-2 shrink-0"></div>
                      <span className="text-blue-50 text-sm">Expand your patient reach through our extensive community network.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#F5A623] rounded-full mt-2 shrink-0"></div>
                      <span className="text-blue-50 text-sm">Streamlined patient coordination and appointment scheduling.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#F5A623] rounded-full mt-2 shrink-0"></div>
                      <span className="text-blue-50 text-sm">Contribute to impactful CSR and community health initiatives.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10 relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#163E96] to-[#148B3A]"></div>
              
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-800 mb-3">Application Received!</h3>
                  <p className="text-slate-600">Thank you for your interest in partnering with Unmesh Foundation. Our partnership team will review your details and contact you shortly.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-black text-slate-800 mb-8">Partnership Registration</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Organization/Provider Name *</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-1 focus:ring-[#163E96] transition-all bg-slate-50" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Partner Type *</label>
                        <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-1 focus:ring-[#163E96] transition-all bg-slate-50 font-medium text-slate-700 appearance-none">
                          <option value="">Select Type</option>
                          <option value="Hospital">Hospital</option>
                          <option value="Diagnostic Centre">Diagnostic Centre</option>
                          <option value="Eye Hospital">Eye Hospital</option>
                          <option value="Clinic">Clinic</option>
                          <option value="Doctor">Doctor / Specialist</option>
                          <option value="Pharmacy">Pharmacy</option>
                          <option value="Ambulance">Ambulance Provider</option>
                          <option value="Home Healthcare">Home Healthcare Agency</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Contact Person Name *</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-1 focus:ring-[#163E96] transition-all bg-slate-50" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Designation</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-1 focus:ring-[#163E96] transition-all bg-slate-50" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address *</label>
                        <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-1 focus:ring-[#163E96] transition-all bg-slate-50" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Phone Number *</label>
                        <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-1 focus:ring-[#163E96] transition-all bg-slate-50" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">City *</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-1 focus:ring-[#163E96] transition-all bg-slate-50" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Website (Optional)</label>
                        <input type="url" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-1 focus:ring-[#163E96] transition-all bg-slate-50" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Brief Description of Services / Specialties</label>
                      <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-1 focus:ring-[#163E96] transition-all bg-slate-50 resize-none"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-[#163E96] hover:bg-[#0f2c6c] text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-colors shadow-lg mt-4">
                      Submit Registration
                    </button>
                    <p className="text-[10px] text-slate-400 text-center uppercase tracking-wider font-semibold">All fields marked with * are mandatory</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
