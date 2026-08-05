import { useState } from 'react';
import { SEO } from '../components/SEO';
import { ShieldCheck, Heart, Building2, QrCode, CheckCircle2, Copy, Check, ArrowRight, RefreshCw, Phone } from 'lucide-react';
import { submitToGoogleSheets } from '../services/googleSheets';

export function Donate() {
  // Form State
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [purpose, setPurpose] = useState('General Healthcare Fund');
  
  // UI Steps: 'form' | 'payment' | 'done'
  const [step, setStep] = useState<'form' | 'payment' | 'done'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [donationRefId, setDonationRefId] = useState('');
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);
  const [copiedAccName, setCopiedAccName] = useState(false);
  const [copiedAccNum, setCopiedAccNum] = useState(false);
  const [copiedIfsc, setCopiedIfsc] = useState(false);

  const selectedAmountValue = amount === 'custom' ? customAmount : amount;

  const handleProceedPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !address.trim() || !phoneNumber.trim()) {
      alert('Please fill in all required fields (Name, Address, Phone Number).');
      return;
    }

    const finalAmount = amount === 'custom' ? customAmount : amount;
    if (!finalAmount || Number(finalAmount) <= 0) {
      alert('Please enter or select a valid donation amount.');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitToGoogleSheets('donation', {
        name: fullName,
        address: address,
        phoneNumber: phoneNumber,
        amount: `₹${finalAmount}`,
        purpose: purpose,
      });

      setDonationRefId(result.refId);
      setIsSubmitting(false);
      setStep('payment');
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      alert('Something went wrong submitting donation details. Proceeding to payment options.');
      setDonationRefId('UNM-DON-' + Math.floor(100000 + Math.random() * 900000));
      setStep('payment');
    }
  };

  const handleFinishDone = () => {
    setStep('done');
  };

  const handleResetForm = () => {
    setFullName('');
    setAddress('');
    setPhoneNumber('');
    setAmount('1000');
    setCustomAmount('');
    setPurpose('General Healthcare Fund');
    setStep('form');
    setDonationRefId('');
  };

  const copyToClipboard = (text: string, type: 'upi' | 'bank' | 'accName' | 'accNum' | 'ifsc') => {
    navigator.clipboard.writeText(text);
    if (type === 'upi') {
      setCopiedUpi(true);
      setTimeout(() => setCopiedUpi(false), 2000);
    } else if (type === 'bank') {
      setCopiedBank(true);
      setTimeout(() => setCopiedBank(false), 2000);
    } else if (type === 'accName') {
      setCopiedAccName(true);
      setTimeout(() => setCopiedAccName(false), 2000);
    } else if (type === 'accNum') {
      setCopiedAccNum(true);
      setTimeout(() => setCopiedAccNum(false), 2000);
    } else if (type === 'ifsc') {
      setCopiedIfsc(true);
      setTimeout(() => setCopiedIfsc(false), 2000);
    }
  };

  return (
    <>
      <SEO title="Donate | Unmesh Foundation" description="Support our healthcare and social impact initiatives. All donations are 80G tax-exempt." />
      
      <div className="bg-slate-50 pt-24 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-[#148B3A] font-bold text-xs uppercase tracking-widest bg-green-50 px-3.5 py-1.5 rounded-full mb-3 border border-green-200">
                <ShieldCheck className="w-4 h-4" /> 100% Tax Exempt under 80G
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-[#163E96] tracking-tight">
                Invest in Health. Empower Lives.
              </h1>
              <p className="text-slate-600 mt-2 text-base md:text-lg max-w-2xl">
                Your contribution directly funds critical healthcare interventions, diagnostic tests for the underprivileged, and senior citizen care.
              </p>
            </div>
          </div>

          {/* Process Progress Bar */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="flex items-center justify-between relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-slate-200 w-full z-0"></div>
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#163E96] transition-all duration-500 z-0"
                style={{ width: step === 'form' ? '0%' : step === 'payment' ? '50%' : '100%' }}
              ></div>

              <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step === 'form' ? 'bg-[#163E96] text-white ring-4 ring-blue-100' : 'bg-[#163E96] text-white'}`}>
                1
              </div>
              <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step === 'payment' ? 'bg-[#163E96] text-white ring-4 ring-blue-100' : step === 'done' ? 'bg-[#163E96] text-white' : 'bg-slate-200 text-slate-500'}`}>
                2
              </div>
              <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step === 'done' ? 'bg-[#148B3A] text-white ring-4 ring-green-100' : 'bg-slate-200 text-slate-500'}`}>
                3
              </div>
            </div>
            <div className="flex justify-between text-xs font-bold text-slate-600 mt-2 px-1">
              <span>1. Donor Details</span>
              <span>2. Payment Options</span>
              <span>3. Confirmation</span>
            </div>
          </div>

          {/* STEP 1: DONATION FORM */}
          {step === 'form' && (
            <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#163E96] via-[#148B3A] to-[#F5A623]"></div>

              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <Heart className="w-6 h-6 text-[#163E96]" fill="currentColor" />
                <div>
                  <h2 className="text-xl font-black text-slate-800">Make a One-Time Donation</h2>
                  <p className="text-xs text-slate-500">Fill in your details to proceed to the secure payment options.</p>
                </div>
              </div>

              <form onSubmit={handleProceedPayment} className="space-y-6">
                {/* Amount Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Select Donation Amount <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5 mb-3">
                    {['500', '1000', '2500', '5000', '10000'].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => { setAmount(amt); setCustomAmount(''); }}
                        className={`py-3 rounded-xl font-bold text-sm border transition-all ${
                          amount === amt
                            ? 'border-[#163E96] text-[#163E96] bg-blue-50/80 shadow-sm ring-2 ring-[#163E96]/20'
                            : 'border-slate-200 text-slate-600 hover:border-[#163E96]/50 bg-slate-50/50'
                        }`}
                      >
                        ₹{Number(amt).toLocaleString('en-IN')}
                      </button>
                    ))}
                  </div>

                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setAmount('custom')}
                      className={`w-full py-2.5 px-4 rounded-xl text-left text-xs font-bold border transition-all mb-2 ${
                        amount === 'custom' ? 'border-[#163E96] text-[#163E96] bg-blue-50/50' : 'border-slate-200 text-slate-500'
                      }`}
                    >
                      Or Enter Custom Amount
                    </button>
                    {amount === 'custom' && (
                      <div className="relative mt-2">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-500">₹</span>
                        <input
                          type="number"
                          min="1"
                          required
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          placeholder="Enter custom amount (e.g. 1500)"
                          className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#163E96] focus:ring-2 focus:ring-[#163E96]/20 font-bold text-slate-800 text-base"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Donation Purpose */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Donation Purpose
                  </label>
                  <select
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] bg-white font-medium text-slate-700 text-sm"
                  >
                    <option value="General Healthcare Fund">General Healthcare Fund</option>
                    <option value="Free Pathology & Blood Diagnostic Camp">Free Pathology & Blood Diagnostic Camp</option>
                    <option value="Senior Citizen Wellness & Care">Senior Citizen Wellness & Care</option>
                    <option value="Pain Management & Relief Center">Pain Management & Relief Center</option>
                    <option value="Legal Aid & Patient Support Services">Legal Aid & Patient Support Services</option>
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-2 focus:ring-[#163E96]/20 text-slate-800 font-medium transition-colors"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Full Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={2}
                    placeholder="House/Street, Landmark, City, State, Pincode"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-2 focus:ring-[#163E96]/20 text-slate-800 font-medium transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-2 focus:ring-[#163E96]/20 text-slate-800 font-medium transition-colors"
                  />
                </div>

                {/* Proceed Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#F5A623] hover:bg-[#d48b14] disabled:bg-slate-300 text-white font-bold text-sm uppercase tracking-widest py-4 rounded-xl transition-all shadow-lg shadow-orange-200 hover:shadow-orange-300 flex items-center justify-center gap-2 mt-4 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>Recording Details...</span>
                    </>
                  ) : (
                    <>
                      <span>Proceed to Payment (₹{Number(selectedAmountValue || 0).toLocaleString('en-IN')})</span>
                      <ArrowRight className="w-5 h-5 ml-1" />
                    </>
                  )}
                </button>

                <div className="mt-4 flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <ShieldCheck className="w-5 h-5 text-[#148B3A] shrink-0 mt-0.5" />
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                    Once you click Proceed, your details are recorded for tax receipt generation, and all Bank Transfer, UPI, and QR payment methods will open immediately.
                  </p>
                </div>
              </form>
            </div>
          )}

          {/* STEP 2: PAYMENT OPTIONS UNLOCKED */}
          {step === 'payment' && (
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Summary Card */}
              <div className="bg-gradient-to-r from-[#163E96] to-[#0f2c6c] rounded-3xl p-6 md:p-8 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="text-xs uppercase font-bold tracking-widest text-blue-200 mb-1">
                    Donation Summary • Ref: <span className="text-amber-300 font-mono">{donationRefId}</span>
                  </div>
                  <h3 className="text-2xl font-black">{fullName}</h3>
                  <p className="text-sm text-blue-100 mt-1">{address} • {phoneNumber}</p>
                  <div className="inline-block mt-3 px-3 py-1 bg-white/10 rounded-lg text-xs font-semibold text-blue-200">
                    Purpose: {purpose}
                  </div>
                </div>
                <div className="bg-white/10 border border-white/20 p-4 rounded-2xl text-right min-w-[160px] shrink-0">
                  <span className="text-xs uppercase tracking-widest text-blue-200 block font-bold">Amount to Pay</span>
                  <span className="text-3xl font-black text-amber-300">₹{Number(selectedAmountValue || 0).toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Notice */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                    <QrCode className="w-4 h-4 text-amber-800" />
                  </div>
                  <p className="text-xs text-amber-900 font-semibold">
                    Payment methods unlocked! Choose Bank Transfer or Scan UPI QR Code below to transfer ₹{selectedAmountValue}.
                  </p>
                </div>
              </div>

              {/* Disclaimer for ₹10,000+ donations */}
              {Number(selectedAmountValue || 0) >= 10000 && (
                <div className="bg-amber-500/10 border-2 border-amber-500 p-5 rounded-2xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-0.5">Tax Benefit Disclaimer</div>
                      <p className="text-sm font-extrabold text-slate-900">
                        Contact to this number to avail tax benefit: <a href="tel:+919073380904" className="text-[#163E96] hover:underline font-black">+91-9073380904</a>
                      </p>
                      <p className="text-xs text-slate-600 mt-1">
                        For donations of ₹10,000 or more, please reach out to our team at +91-9073380904 to assist with 80G tax exemption processing & receipt verification.
                      </p>
                    </div>
                  </div>
                  <a
                    href="tel:+919073380904"
                    className="px-4 py-2.5 bg-[#163E96] hover:bg-[#0f2c6c] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shrink-0 flex items-center gap-2 shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call +91-9073380904</span>
                  </a>
                </div>
              )}

              {/* Payment Details Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Bank Transfer Details */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-[#163E96]">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h2 className="text-lg font-black text-slate-800">Direct Bank Transfer</h2>
                          <p className="text-xs text-slate-500">NEFT / RTGS / IMPS</p>
                        </div>
                      </div>
                      <button
                        onClick={() => copyToClipboard("Account Name: Unmesh Foundation\nBank Name: State Bank of India\nAccount Number: 31456789012\nIFSC: SBIN0001234", 'bank')}
                        className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors text-xs font-bold flex items-center gap-1"
                        title="Copy Bank Details"
                      >
                        {copiedBank ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                        <span>{copiedBank ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>

                    <div className="space-y-4">
                      {/* Account Name */}
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Account Name</div>
                          <button
                            type="button"
                            onClick={() => copyToClipboard('Unmesh Foundation', 'accName')}
                            className="px-2 py-0.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#163E96] text-[11px] font-bold transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
                            title="Copy Account Name"
                          >
                            {copiedAccName ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                            <span>{copiedAccName ? 'Copied' : 'Copy'}</span>
                          </button>
                        </div>
                        <div className="font-bold text-slate-800 text-sm sm:text-base">Unmesh Foundation</div>
                      </div>

                      {/* Bank Name */}
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Bank Name</div>
                        <div className="font-bold text-slate-800 text-sm sm:text-base">State Bank of India (SBI)</div>
                      </div>

                      {/* Account Number & IFSC Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* Account Number */}
                        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                          <div className="flex items-center justify-between gap-2">
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Account Number</div>
                            <button
                              type="button"
                              onClick={() => copyToClipboard('44007401102', 'accNum')}
                              className="px-2 py-0.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#163E96] text-[11px] font-bold transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
                              title="Copy Account Number"
                            >
                              {copiedAccNum ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                              <span>{copiedAccNum ? 'Copied' : 'Copy'}</span>
                            </button>
                          </div>
                          <div className="font-bold text-slate-900 font-mono text-sm sm:text-base tracking-wider break-all">44007401102</div>
                        </div>

                        {/* IFSC Code */}
                        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                          <div className="flex items-center justify-between gap-2">
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">IFSC Code</div>
                            <button
                              type="button"
                              onClick={() => copyToClipboard('SBIN0005371', 'ifsc')}
                              className="px-2 py-0.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#163E96] text-[11px] font-bold transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
                              title="Copy IFSC Code"
                            >
                              {copiedIfsc ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                              <span>{copiedIfsc ? 'Copied' : 'Copy'}</span>
                            </button>
                          </div>
                          <div className="font-bold text-slate-900 font-mono text-sm sm:text-base tracking-wider break-all">SBIN0005371</div>
                        </div>
                      </div>

                      {/* Branch */}
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Branch</div>
                        <div className="font-medium text-slate-700 text-xs">Kolkata Main Branch, West Bengal</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                    * Please mention Ref <strong className="text-slate-800">{donationRefId}</strong> in your bank transaction remarks for instant receipt generation.
                  </div>
                </div>

                {/* UPI & QR Code Transfer */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-[#148B3A]">
                          <QrCode className="w-5 h-5" />
                        </div>
                        <div>
                          <h2 className="text-lg font-black text-slate-800">Scan UPI / QR Code</h2>
                          <p className="text-xs text-slate-500">Google Pay, PhonePe, Paytm, BHIM</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-5 w-full">
                      {/* Dynamic Generated UPI QR code container */}
                      <div className="w-full flex flex-col items-center justify-center bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-sm">
                        <div className="w-48 h-48 sm:w-52 sm:h-52 bg-white p-3 rounded-xl border border-slate-200 shadow-inner flex items-center justify-center mb-3">
                          <img
                            src={`/images/upi_qr.jpeg`}
                            alt="UPI QR Code"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-xs font-black text-[#163E96] tracking-wide uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                          Scan & Pay ₹{Number(selectedAmountValue || 0).toLocaleString('en-IN')}
                        </span>
                      </div>

                      {/* Official UPI ID Box */}
                      <div className="space-y-3 w-full">
                        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Official UPI ID</div>
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-mono font-bold text-slate-900 text-sm sm:text-base break-all">unmeshf23@sbi</span>
                            <button
                              onClick={() => copyToClipboard('unmeshf23@sbi', 'upi')}
                              className="px-3 py-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-xs font-bold transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
                            >
                              {copiedUpi ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                              <span>{copiedUpi ? 'Copied' : 'Copy'}</span>
                            </button>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-xs text-[#163E96] font-semibold leading-relaxed">
                          Open Google Pay, PhonePe, Paytm or any UPI app, scan the QR code above or send directly to <strong className="font-mono bg-blue-100 px-1 py-0.5 rounded text-[#163E96]">unmeshf23@sbi</strong>.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* DONE BUTTON TO EXIT */}
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <button
                      onClick={handleFinishDone}
                      className="w-full bg-[#148B3A] hover:bg-[#0f6c2c] text-white font-bold text-sm uppercase tracking-widest py-4 rounded-xl transition-all shadow-lg shadow-green-200 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Done / Complete Payment</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: DONE CONFIRMATION */}
          {step === 'done' && (
            <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-12 text-center">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-black text-slate-800 mb-3">Thank You For Your Support!</h2>
              <p className="text-slate-600 mb-6 text-base leading-relaxed">
                Your donation request of <strong className="text-slate-900 font-bold">₹{selectedAmountValue}</strong> has been recorded under Reference ID: <span className="font-mono font-bold text-[#163E96]">{donationRefId}</span>.
              </p>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-left space-y-3 mb-8 text-sm">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">Donor Name:</span>
                  <span className="font-bold text-slate-800">{fullName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">Phone:</span>
                  <span className="font-bold text-slate-800">{phoneNumber}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">Purpose:</span>
                  <span className="font-bold text-slate-800">{purpose}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Tax Exemption:</span>
                  <span className="font-bold text-emerald-700">80G Certificate Applicable</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleResetForm}
                  className="flex-1 bg-[#163E96] hover:bg-[#0f2c6c] text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Make Another Donation</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
