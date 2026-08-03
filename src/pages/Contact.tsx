import { SEO } from '../components/SEO';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { submitToGoogleSheets } from '../services/googleSheets';

export function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const res = await submitToGoogleSheets('contact', {
        name: fullName,
        email,
        phone,
        message,
      });

      setRefId(res.refId);
      setSubmitted(true);
      // Reset form fields
      setFullName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err) {
      console.error('Error submitting contact form:', err);
    } finally {
      setIsSubmitting(false);
    }
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
                     <p className="text-sm text-slate-600">unmeshfoundation1978@gmail.com</p>
                     <p className="text-sm text-slate-600">admin@unmeshfoundation.org</p>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-[#163E96] mb-6">Send an Enquiry</h2>

              {submitted ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded-2xl text-center space-y-4">
                  <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-green-900">Thank You!</h3>
                  <p className="text-sm text-green-800 leading-relaxed">
                    Your enquiry has been successfully submitted and recorded. Our team will get back to you shortly.
                  </p>
                  {refId && (
                    <div className="bg-white py-2 px-4 rounded-xl border border-green-200 inline-block font-mono text-xs font-bold text-[#163E96]">
                      Reference ID: {refId}
                    </div>
                  )}
                  <div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 px-6 py-2.5 bg-[#163E96] hover:bg-[#0f2c6c] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your Full Name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-1 focus:ring-[#163E96] transition-all text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-1 focus:ring-[#163E96] transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 90000 00000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-1 focus:ring-[#163E96] transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-1 focus:ring-[#163E96] transition-all resize-none text-sm"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#163E96] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#0f2c6c] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
