import { SEO } from '../components/SEO';
import { ShieldCheck, Heart, Building2, QrCode, CreditCard, Download } from 'lucide-react';

export function Donate() {
  return (
    <>
      <SEO title="Donate | Unmesh Foundation" description="Support our healthcare and social impact initiatives. All donations are 80G tax-exempt." />
      
      <div className="bg-slate-50 pt-24 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-[#163E96] tracking-tight mb-6">Invest in Health. <br />Empower Lives.</h1>
            <p className="text-lg text-slate-600">
              Your contribution directly funds critical healthcare interventions, diagnostic tests for the underprivileged, and senior citizen care programs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Direct Bank Transfer & UPI */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-6 h-6 text-[#163E96]" />
                  <h2 className="text-xl font-bold text-slate-800">Direct Bank Transfer</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Account Name</div>
                    <div className="font-bold text-slate-800">Unmesh Foundation</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Bank Name</div>
                    <div className="font-bold text-slate-800">State Bank of India</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Account Number</div>
                    <div className="font-bold text-slate-800 font-mono text-lg tracking-wider">31456789012</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">IFSC Code</div>
                    <div className="font-bold text-slate-800 font-mono tracking-wider">SBIN0001234</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <QrCode className="w-6 h-6 text-[#163E96]" />
                    <h2 className="text-xl font-bold text-slate-800">UPI Transfer</h2>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">UPI ID</div>
                    <div className="font-bold text-slate-800 font-mono text-lg">unmesh@upi</div>
                  </div>
                </div>
                <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center border-2 border-slate-100 shadow-sm overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=300" alt="UPI QR Code" className="w-full h-full object-cover opacity-50 grayscale mix-blend-multiply" />
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h2 className="text-xl font-bold text-slate-800 mb-6">Transparency Reports</h2>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors">
                    <span className="font-bold text-sm text-slate-700">Annual Impact Report 2023-24</span>
                    <Download className="w-4 h-4 text-[#163E96]" />
                  </button>
                  <button className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors">
                    <span className="font-bold text-sm text-slate-700">Audited Financials FY24</span>
                    <Download className="w-4 h-4 text-[#163E96]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Online Donation Form */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 h-fit">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-100">
                <CreditCard className="w-6 h-6 text-[#163E96]" />
                <h2 className="text-xl font-bold text-slate-800">Online Payment Gateway</h2>
              </div>

              <div className="flex bg-slate-100 p-1 rounded-xl mb-8">
                <button className="flex-1 py-2.5 rounded-lg bg-white shadow-sm text-xs uppercase tracking-widest font-bold text-[#163E96]">One Time</button>
                <button className="flex-1 py-2.5 rounded-lg text-xs uppercase tracking-widest font-bold text-slate-500 hover:text-slate-700 transition-colors">Monthly</button>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {['₹1,000', '₹2,500', '₹5,000', '₹10,000', '₹25,000'].map((amt, i) => (
                  <button key={amt} className={`py-3 rounded-xl font-bold text-sm border transition-all ${i === 1 ? 'border-[#163E96] text-[#163E96] bg-blue-50' : 'border-slate-200 text-slate-600 hover:border-[#163E96]/50'}`}>
                    {amt}
                  </button>
                ))}
                <button className="py-3 rounded-xl font-bold text-sm border border-slate-200 text-slate-600 hover:border-[#163E96]/50">
                  Custom
                </button>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Donation Purpose</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] bg-white font-medium text-slate-700">
                    <option>General Healthcare Fund</option>
                    <option>Senior Citizen Care</option>
                    <option>Health Camps</option>
                    <option>Legal Aid Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name (As per PAN)</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">PAN Number (For 80G)</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] uppercase transition-colors" />
                </div>
              </div>

              <button type="button" className="w-full bg-[#F5A623] hover:bg-[#d48b14] text-white font-bold text-sm uppercase tracking-widest py-4 rounded-xl transition-all shadow-lg shadow-orange-200 hover:shadow-orange-300 flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" fill="currentColor" />
                Proceed to Payment
              </button>
              
              <div className="mt-6 flex items-start gap-2">
                 <ShieldCheck className="w-5 h-5 text-[#148B3A] shrink-0" />
                 <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">
                   All donations are securely processed. Unmesh Foundation is a registered NGO and donations are eligible for 80G tax exemptions under the Income Tax Act.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
