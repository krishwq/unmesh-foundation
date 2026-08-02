import { useState, FormEvent } from 'react';
import { Plus, Edit2, Trash2, X, Building2, MapPin, Search } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  type: string;
  city: string;
  specialty: string;
  contactNumber: string;
  status: 'Active' | 'Inactive';
}

const INITIAL_PARTNERS: Partner[] = [
  {
    id: '1',
    name: 'Apollo Gleneagles Hospital',
    type: 'Hospital',
    city: 'Kolkata',
    specialty: 'Multispecialty',
    contactNumber: '+91 33 2320 2122',
    status: 'Active'
  },
  {
    id: '2',
    name: 'Suraksha Diagnostics',
    type: 'Diagnostic Centre',
    city: 'Salt Lake',
    specialty: 'Pathology, Radiology',
    contactNumber: '+91 33 6619 1000',
    status: 'Active'
  }
];

export function AdminPartners() {
  const [partners, setPartners] = useState<Partner[]>(INITIAL_PARTNERS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPartner, setEditingPartner] = useState<Partner | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPartners = partners.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (partner: Partner) => {
    setEditingPartner(partner);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to remove this partner?')) {
      setPartners(partners.filter(p => p.id !== id));
    }
  };

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const newPartner = {
      id: editingPartner ? editingPartner.id : Date.now().toString(),
      name: formData.get('name') as string,
      type: formData.get('type') as string,
      city: formData.get('city') as string,
      specialty: formData.get('specialty') as string,
      contactNumber: formData.get('contactNumber') as string,
      status: formData.get('status') as 'Active' | 'Inactive',
    };

    if (editingPartner) {
      setPartners(partners.map(p => p.id === editingPartner.id ? newPartner : p));
    } else {
      setPartners([...partners, newPartner]);
    }
    
    setIsModalOpen(false);
    setEditingPartner(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Healthcare Partners</h1>
          <p className="text-sm text-slate-500">Manage hospitals, diagnostic centres, and specialists.</p>
        </div>
        <button 
          onClick={() => {
            setEditingPartner(null);
            setIsModalOpen(true);
          }}
          className="bg-[#163E96] text-white px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-[#0f2c6c] transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Partner
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center gap-3">
        <Search className="w-5 h-5 text-slate-400 shrink-0" />
        <input 
          type="text" 
          placeholder="Search partners by name, city or type..." 
          className="flex-1 bg-transparent border-none focus:outline-none text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Partners List */}
      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Organization Name</th>
                <th className="p-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Type & Specialty</th>
                <th className="p-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">City</th>
                <th className="p-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Contact</th>
                <th className="p-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Status</th>
                <th className="p-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPartners.map((partner) => (
                <tr key={partner.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-50 text-[#163E96] flex items-center justify-center shrink-0">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div className="font-bold text-slate-800 text-sm">{partner.name}</div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="text-xs font-semibold text-[#163E96]">{partner.type}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{partner.specialty}</div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {partner.city}
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-600">{partner.contactNumber}</td>
                  <td className="p-4">
                    <span className={`inline-flex px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                      partner.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {partner.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => handleEdit(partner)} className="p-2 text-slate-400 hover:text-[#163E96] hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(partner.id)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredPartners.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-slate-500">
                    No partners found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center shrink-0">
              <h3 className="text-xl font-bold text-slate-800">
                {editingPartner ? 'Edit Partner' : 'Add New Partner'}
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSave} className="p-6 overflow-y-auto flex-1 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Organization Name</label>
                  <input type="text" name="name" defaultValue={editingPartner?.name} required className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-[#163E96]" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Partner Type</label>
                  <select name="type" defaultValue={editingPartner?.type || 'Hospital'} required className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-[#163E96] bg-white">
                    <option value="Hospital">Hospital</option>
                    <option value="Diagnostic Centre">Diagnostic Centre</option>
                    <option value="Eye Hospital">Eye Hospital</option>
                    <option value="Specialist Clinic">Specialist Clinic</option>
                    <option value="Pharmacy">Pharmacy</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">City</label>
                  <input type="text" name="city" defaultValue={editingPartner?.city} required className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-[#163E96]" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Specialty</label>
                  <input type="text" name="specialty" defaultValue={editingPartner?.specialty} required className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-[#163E96]" placeholder="e.g. Multispecialty, Cardiology" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Contact Number</label>
                  <input type="text" name="contactNumber" defaultValue={editingPartner?.contactNumber} required className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-[#163E96]" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Status</label>
                  <select name="status" defaultValue={editingPartner?.status || 'Active'} className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-[#163E96] bg-white">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              
              <div className="pt-4 flex justify-end gap-3 border-t border-slate-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-[#163E96] text-white text-sm font-bold rounded-xl hover:bg-[#0f2c6c] transition-colors">
                  Save Partner
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
