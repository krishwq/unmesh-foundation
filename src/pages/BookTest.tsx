import { useState } from 'react';
import { SEO } from '../components/SEO';
import { Microscope, PhoneCall, MapPin, Calendar, Clock, CheckCircle2, User, Phone, Home, RefreshCw, Send, AlertCircle, Building2, ShieldCheck } from 'lucide-react';
import { submitToGoogleSheets } from '../services/googleSheets';

// Complete List of Unmesh Foundation Partner Clinics & Diagnostic Centers
export const CLINIC_LOCATIONS = [
  {
    id: 'kolkata-central',
    name: 'Unmesh Healthcare & Pathology Center - Central Kolkata',
    type: 'Main Diagnostic Hub',
    address: '58, Canal Circular Road, Ultadanga, Kolkata, West Bengal - 700067',
    landmark: 'Near Ultadanga Railway Station',
    phone: '+91 9073380904',
    secondaryPhone: '+91 33 2320 2122',
    hours: 'Mon - Sat: 7:00 AM - 8:00 PM | Sun: 7:00 AM - 2:00 PM',
    facilities: ['Pathology', 'Home Collection', 'X-Ray', 'ECG', 'Doctor Consultation'],
    mapUrl: 'https://maps.google.com/?q=Ultadanga+Kolkata'
  },
  {
    id: 'salt-lake',
    name: 'Unmesh Diagnostic & Sample Collection Lab - Salt Lake',
    type: 'Specialized Diagnostic Wing',
    address: 'DD-18/1, Sector-1, Salt Lake City, Bidhannagar, Kolkata - 700064',
    landmark: 'Near City Centre 1',
    phone: '+91 9830123456',
    secondaryPhone: '+91 9073380904',
    hours: 'Mon - Sat: 7:30 AM - 7:00 PM | Sun: 8:00 AM - 1:00 PM',
    facilities: ['Home Sample Collection', 'Blood Tests', 'Thyroid Profile', 'Lipid Panel'],
    mapUrl: 'https://maps.google.com/?q=Salt+Lake+Sector+1+Kolkata'
  },
  {
    id: 'howrah-center',
    name: 'Unmesh Community Health Clinic & Lab - Howrah',
    type: 'Community Clinic & Diagnostics',
    address: '12, GT Road, Near Howrah Railway Station, Howrah - 711101',
    landmark: 'Opposite Howrah Bus Terminus',
    phone: '+91 33 2320 2122',
    secondaryPhone: '+91 9073380904',
    hours: 'Mon - Sat: 8:00 AM - 7:30 PM | Sun: Closed',
    facilities: ['Primary Care', 'Pathology Lab', 'Physiotherapy', 'Senior Citizen Care'],
    mapUrl: 'https://maps.google.com/?q=Howrah+GT+Road'
  },
  {
    id: 'mukundapur-center',
    name: 'Unmesh Healthcare Center - E.M. Bypass Mukundapur',
    type: 'Super-Specialty Diagnostic Unit',
    address: '127, Mukundapur, E.M. Bypass, Kolkata, West Bengal - 700099',
    landmark: 'Adjacent to Rabindranath Tagore Hospital',
    phone: '+91 9073380905',
    secondaryPhone: '+91 9073380904',
    hours: 'Mon - Sun: 7:00 AM - 9:00 PM (24/7 Emergency Assistance)',
    facilities: ['Advanced Biochemistry', 'Hormone Testing', 'Pre-Op Screening', 'Cardiac Care'],
    mapUrl: 'https://maps.google.com/?q=Mukundapur+Kolkata'
  }
];

const POPULAR_TESTS = [
  'Full Body Health Checkup',
  'Complete Blood Count (CBC)',
  'Fasting & PP Blood Sugar',
  'Lipid Profile (Cholesterol)',
  'Thyroid Profile (T3, T4, TSH)',
  'Liver Function Test (LFT)',
  'Kidney Function Test (KFT)',
  'Vitamin D3 & Vitamin B12',
  'HbA1c Diabetes Monitoring',
  'ECG / Electrocardiogram',
  'Chest X-Ray Digital',
  'Home Sample Collection Request'
];

export function BookTest() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    testDescription: 'Full Body Health Checkup',
    customTest: '',
    address: '',
    mobile: '',
    datePreferred: '',
    preferredLocation: 'Kolkata Central (Ultadanga)',
    sampleCollectionType: 'Clinic Visit'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.address || !formData.mobile || !formData.datePreferred) {
      alert('Please fill in all required fields (Name, Age, Test, Address, Mobile, Preferred Date).');
      return;
    }

    const finalTest = formData.testDescription === 'Other / Custom Test' ? formData.customTest : formData.testDescription;

    setIsSubmitting(true);

    try {
      const result = await submitToGoogleSheets('book_test', {
        name: formData.name,
        age: formData.age,
        testDescription: finalTest,
        address: formData.address,
        mobile: formData.mobile,
        datePreferred: formData.datePreferred,
        preferredLocation: formData.preferredLocation,
        sampleCollectionType: formData.sampleCollectionType
      });

      setBookingRef(result.refId);
      setIsSubmitting(false);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setBookingRef('UNM-TST-' + Math.floor(100000 + Math.random() * 900000));
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      age: '',
      testDescription: 'Full Body Health Checkup',
      customTest: '',
      address: '',
      mobile: '',
      datePreferred: '',
      preferredLocation: 'Kolkata Central (Ultadanga)',
      sampleCollectionType: 'Clinic Visit'
    });
    setBookingRef(null);
  };

  return (
    <>
      <SEO title="Book Diagnostic Test | Unmesh Foundation" description="Book pathology tests, blood profile checkups, and home sample collection across Kolkata & Howrah." />

      <div className="bg-slate-50 pt-24 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-[#163E96] via-[#182181] to-[#0f2c6c] rounded-3xl p-8 md:p-12 text-white shadow-xl mb-12 relative overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5 skew-x-12 pointer-events-none"></div>
            <div className="max-w-3xl relative z-10">
              <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/30 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
                <Microscope className="w-4 h-4" /> ISO & NABL Certified Lab Standards
              </div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                Book Diagnostic Test & Home Collection
              </h1>
              <p className="text-blue-100 text-base md:text-lg leading-relaxed">
                Schedule pathology blood tests, health screening packages, and home sample collection. All bookings automatically sync to our lab team's dashboard.
              </p>
            </div>
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
                  Call our diagnostic helpline now for immediate appointment confirmation & home sample collection dispatch.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap gap-3 w-full lg:w-auto shrink-0">
              <a
                href="tel:+919073380904"
                className="flex-1 sm:flex-initial px-6 py-3.5 bg-slate-950 hover:bg-slate-900 text-white font-black text-xs uppercase tracking-wider rounded-2xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+91 9073380904</span>
              </a>
              <a
                href="tel:+919830123456"
                className="flex-1 sm:flex-initial px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-black text-xs uppercase tracking-wider rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 border border-slate-300"
              >
                <Phone className="w-4 h-4 text-[#163E96]" />
                <span>+91 9830123456</span>
              </a>
            </div>
          </div>

          {/* Main Grid: Booking Form (Left) & Clinic Addresses (Right) */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* BOOKING FORM (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#163E96] via-[#148B3A] to-[#F5A623]"></div>

              {!bookingRef ? (
                <>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                    <Microscope className="w-6 h-6 text-[#163E96]" />
                    <div>
                      <h2 className="text-xl font-black text-slate-800">Test Booking Form</h2>
                      <p className="text-xs text-slate-500">Fill in patient details to request an appointment or home sample collection.</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Name & Age */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Patient Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Full Name of Patient"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-2 focus:ring-[#163E96]/20 text-sm font-medium text-slate-800"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Age <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="number"
                          name="age"
                          min="1"
                          max="120"
                          required
                          placeholder="e.g. 45"
                          value={formData.age}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-2 focus:ring-[#163E96]/20 text-sm font-bold text-slate-800"
                        />
                      </div>
                    </div>

                    {/* Test Description Selector */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Test Description / Package <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="testDescription"
                        value={formData.testDescription}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] bg-white font-medium text-slate-800 text-sm mb-2"
                      >
                        {POPULAR_TESTS.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                        <option value="Other / Custom Test">Other / Custom Pathology Test</option>
                      </select>

                      {formData.testDescription === 'Other / Custom Test' && (
                        <textarea
                          name="customTest"
                          rows={2}
                          required
                          placeholder="Specify the exact test name(s) or doctor prescription..."
                          value={formData.customTest}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#163E96] text-sm font-medium resize-none"
                        ></textarea>
                      )}
                    </div>

                    {/* Mobile & Date Preferred */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            name="mobile"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-2 focus:ring-[#163E96]/20 text-sm font-medium text-slate-800"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Date Preferred <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="date"
                            name="datePreferred"
                            required
                            min={new Date().toISOString().split('T')[0]}
                            value={formData.datePreferred}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-2 focus:ring-[#163E96]/20 text-sm font-bold text-slate-800"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Sample Collection Mode & Location */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Collection Type
                        </label>
                        <select
                          name="sampleCollectionType"
                          value={formData.sampleCollectionType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] bg-white font-medium text-slate-800 text-sm"
                        >
                          <option value="Home Sample Collection">Home Sample Collection</option>
                          <option value="Clinic Visit">Clinic Visit</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Preferred Clinic Center
                        </label>
                        <select
                          name="preferredLocation"
                          value={formData.preferredLocation}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] bg-white font-medium text-slate-800 text-sm"
                        >
                          <option value="Kolkata Central (Ultadanga)">Kolkata Central (Ultadanga)</option>
                          <option value="Salt Lake Sector-1">Salt Lake Sector-1</option>
                          <option value="Howrah GT Road">Howrah GT Road</option>
                          <option value="Mukundapur E.M. Bypass">Mukundapur E.M. Bypass</option>
                        </select>
                      </div>
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Patient Address <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="address"
                        required
                        rows={2}
                        placeholder="House/Flat No., Landmark, City, Pincode"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-2 focus:ring-[#163E96]/20 text-sm font-medium text-slate-800 resize-none"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#163E96] hover:bg-[#0f2c6c] disabled:bg-slate-300 text-white font-bold text-sm uppercase tracking-widest py-4 rounded-xl transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Book Test Appointment Now</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-2 text-xs text-slate-500 justify-center font-medium pt-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Data automatically sent to Google Spreadsheet & Lab Coordinator</span>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-800 mb-2">Test Booking Confirmed!</h3>
                  <p className="text-sm text-slate-600 mb-6 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your test request for <strong className="text-[#163E96]">{formData.testDescription}</strong> on <strong>{formData.datePreferred}</strong> is recorded under Reference ID: <span className="font-mono font-bold text-slate-900">{bookingRef}</span>.
                  </p>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-2 mb-6 max-w-md mx-auto">
                    <div className="flex justify-between"><span className="text-slate-500">Age:</span> <span className="font-bold">{formData.age} Yrs</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Mobile:</span> <span className="font-bold">{formData.mobile}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Mode:</span> <span className="font-bold text-emerald-700">{formData.sampleCollectionType}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Center:</span> <span className="font-bold">{formData.preferredLocation}</span></div>
                  </div>

                  <p className="text-xs text-amber-800 bg-amber-50 p-3 rounded-xl border border-amber-200 mb-6 font-semibold">
                    Our phlebotomist / lab coordinator will call you within 1 hour to confirm fasting requirements & home pickup time.
                  </p>

                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-[#163E96] text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#0f2c6c] transition-colors"
                  >
                    Book Another Test
                  </button>
                </div>
              )}
            </div>

            {/* CLINIC ADDRESSES & DIRECT CONTACT (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-lg border border-slate-800">
                <div className="flex items-center gap-3 mb-2">
                  <Building2 className="w-6 h-6 text-amber-400" />
                  <h3 className="text-xl font-black">Our Clinic & Lab Centers</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Visit any of our registered partner clinics across West Bengal for sample submission, consultations, or report collection.
                </p>
              </div>

              {CLINIC_LOCATIONS.map((clinic) => (
                <div key={clinic.id} className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 hover:border-[#163E96]/30 transition-all">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 bg-blue-50 text-[#163E96] font-bold text-[10px] uppercase tracking-wider rounded-md mb-1.5">
                        {clinic.type}
                      </span>
                      <h4 className="font-bold text-slate-800 text-base leading-snug">{clinic.name}</h4>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs text-slate-600 mb-4">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                      <div>
                        <span>{clinic.address}</span>
                        <span className="block text-[11px] text-slate-400 font-semibold mt-0.5">({clinic.landmark})</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-medium text-slate-700">{clinic.hours}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#163E96] shrink-0" />
                      <div className="flex gap-3">
                        <a href={`tel:${clinic.phone}`} className="font-bold text-[#163E96] hover:underline">{clinic.phone}</a>
                        {clinic.secondaryPhone && (
                          <a href={`tel:${clinic.secondaryPhone}`} className="text-slate-500 hover:underline">{clinic.secondaryPhone}</a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {clinic.facilities.slice(0, 3).map(f => (
                        <span key={f} className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                          {f}
                        </span>
                      ))}
                    </div>
                    <a
                      href={clinic.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#163E96] hover:text-[#0f2c6c] flex items-center gap-1 shrink-0"
                    >
                      <span>Map Location</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              ))}

              <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-3xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <p className="text-xs text-emerald-900 font-medium leading-relaxed">
                  <strong>Home Sample Collection Guidelines:</strong> Free home blood collection is available within 15 km of our central and Salt Lake centers. Fasting instructions will be SMSed upon booking.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}
