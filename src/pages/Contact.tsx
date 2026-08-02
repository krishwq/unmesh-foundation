import { SEO } from '../components/SEO';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <SEO title="Contact Us | Unmesh Foundation" description="Get in touch with Unmesh Foundation for support, queries, or partnerships." />
      <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-[#163E96] mb-8">Contact Us</h1>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-slate-600 mb-8 max-w-xl">We are here to help. Reach out to us for medical support, partnerships, or any other inquiries.</p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                   <div className="w-12 h-12 bg-blue-50 text-[#163E96] rounded-full flex items-center justify-center shrink-0">
                     <MapPin className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="font-bold text-slate-800 mb-1">Registration Office</h3>
                     <p className="text-sm text-slate-600">Yakatan 220, Jodhpur Garden<br/>Kolkata 700045</p>
                     
                     <h3 className="font-bold text-slate-800 mb-1 mt-4">Working Office</h3>
                     <p className="text-sm text-slate-600">
                       Ground Floor, Basanti Apartment<br/>
                       3, Bipin Ganguly Road, Kundu Bagan<br/>
                       Ghughudanga, Kol-700030
                     </p>
                   </div>
                </div>
                
                <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                   <div className="w-12 h-12 bg-red-50 text-[#D71920] rounded-full flex items-center justify-center shrink-0">
                     <Phone className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="font-bold text-slate-800 mb-1">Phone</h3>
                     <p className="text-sm text-slate-600">+91 9073380904<br/>+91 7980510804</p>
                   </div>
                </div>
                
                <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                   <div className="w-12 h-12 bg-orange-50 text-[#F5A623] rounded-full flex items-center justify-center shrink-0">
                     <Mail className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="font-bold text-slate-800 mb-1">Email</h3>
                     <p className="text-sm text-slate-600">foundationunmesh@gmail.com</p>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-[#163E96] mb-6">Send an Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-1 focus:ring-[#163E96] transition-all" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-1 focus:ring-[#163E96] transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                    <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-1 focus:ring-[#163E96] transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-1 focus:ring-[#163E96] transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-4 rounded-xl bg-[#163E96] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#0f2c6c] transition-colors flex items-center justify-center gap-2">
                  {submitted ? 'Message Sent!' : <><Send className="w-4 h-4" /> Send Message</>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
