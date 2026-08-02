import { SEO } from '../components/SEO';
import { Search, MapPin, Stethoscope, Building2, Phone, Calendar, ChevronRight } from 'lucide-react';
import { useState } from 'react';

// Demo data - in a real app this would come from an API
const DEMO_PARTNERS = [
  { id: 1, name: 'Apollo Gleneagles Hospital', type: 'Hospital', city: 'Kolkata', specialty: 'Multispecialty', address: '58, Canal Circular Road, Kolkata', phone: '+91 33 2320 2122', rating: 4.8 },
  { id: 2, name: 'Fortis Hospital', type: 'Hospital', city: 'Kolkata', specialty: 'Cardiology, Orthopedics', address: '730, Anandapur, E.M. Bypass, Kolkata', phone: '+91 33 6628 4444', rating: 4.7 },
  { id: 3, name: 'Suraksha Diagnostics', type: 'Diagnostic Centre', city: 'Salt Lake', specialty: 'Pathology, Radiology', address: 'DD-18/1, Sector-1, Salt Lake City', phone: '+91 33 6619 1000', rating: 4.6 },
  { id: 4, name: 'Sankar Netralaya', type: 'Eye Hospital', city: 'Kolkata', specialty: 'Ophthalmology', address: 'Mukundapur, E.M. Bypass, Kolkata', phone: '+91 33 4401 3000', rating: 4.9 },
  { id: 5, name: 'Dr. Ramesh Kumar Clinic', type: 'Specialist Clinic', city: 'Howrah', specialty: 'Orthopedics', address: '12, GT Road, Howrah', phone: '+91 98765 43210', rating: 4.5 },
  { id: 6, name: 'Medica Superspecialty', type: 'Hospital', city: 'Kolkata', specialty: 'Multispecialty', address: '127, Mukundapur, E.M. Bypass', phone: '+91 33 6652 0000', rating: 4.7 },
];

export function FindHospital() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cityFilter, setCityFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  const filteredPartners = DEMO_PARTNERS.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          partner.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = cityFilter === 'All' || partner.city === cityFilter;
    const matchesType = typeFilter === 'All' || partner.type === typeFilter;
    
    return matchesSearch && matchesCity && matchesType;
  });

  return (
    <>
      <SEO title="Find a Partner Hospital | Unmesh Foundation" description="Search our network of trusted partner hospitals, diagnostic centres, and specialist doctors." />
      
      <div className="bg-slate-50 pt-24 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-[#163E96] tracking-tight mb-4">Find a Partner Facility</h1>
            <p className="text-lg text-slate-600">Search our network of verified hospitals, clinics, and diagnostic centres across India.</p>
          </div>

          {/* Search Filters */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 mb-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search by name or specialty..." 
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-1 focus:ring-[#163E96] transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-slate-400" />
                </div>
                <select 
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-1 focus:ring-[#163E96] transition-all appearance-none bg-white text-slate-700 font-medium"
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                >
                  <option value="All">All Cities</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Salt Lake">Salt Lake</option>
                  <option value="Howrah">Howrah</option>
                </select>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Building2 className="h-5 w-5 text-slate-400" />
                </div>
                <select 
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#163E96] focus:ring-1 focus:ring-[#163E96] transition-all appearance-none bg-white text-slate-700 font-medium"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                >
                  <option value="All">All Facility Types</option>
                  <option value="Hospital">Hospitals</option>
                  <option value="Diagnostic Centre">Diagnostic Centres</option>
                  <option value="Eye Hospital">Eye Hospitals</option>
                  <option value="Specialist Clinic">Specialist Clinics</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPartners.length > 0 ? (
              filteredPartners.map(partner => (
                <div key={partner.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
                  <div className="mb-4">
                    <div className="inline-block px-3 py-1 bg-blue-50 text-[#163E96] text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">
                      {partner.type}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 leading-tight mb-2">{partner.name}</h3>
                    <p className="text-sm font-semibold text-[#D71920]">{partner.specialty}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6 flex-grow">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600">{partner.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="text-sm text-slate-600">{partner.phone}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-slate-50 hover:bg-[#163E96] hover:text-white text-[#163E96] border border-slate-200 font-bold text-xs uppercase tracking-widest py-3 rounded-xl transition-colors flex items-center justify-center gap-2 group">
                    Request Appointment
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center bg-white rounded-2xl border border-slate-200">
                <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-800 mb-2">No facilities found</h3>
                <p className="text-slate-500">Try adjusting your search filters to find what you're looking for.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
