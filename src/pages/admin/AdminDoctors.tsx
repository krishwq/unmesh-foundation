import { useState, useEffect, FormEvent } from 'react';
import { Plus, Edit2, Trash2, X } from 'lucide-react';

interface Doctor {
  id: string;
  name: string;
  qualification: string;
  speciality: string;
  experience: string;
  languages: string;
  registrationNumber: string;
  availability: string;
}

const INITIAL_DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Amitabha Ghosh',
    qualification: 'MBBS, MD (Medicine)',
    speciality: 'General Physician',
    experience: '15 Years',
    languages: 'English, Bengali, Hindi',
    registrationNumber: 'WBMC-12345',
    availability: 'Mon, Wed, Fri (10 AM - 1 PM)'
  }
];

export function AdminDoctors() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState<Doctor | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('unmesh_doctors');
    if (saved) {
      setDoctors(JSON.parse(saved));
    } else {
      setDoctors(INITIAL_DOCTORS);
      localStorage.setItem('unmesh_doctors', JSON.stringify(INITIAL_DOCTORS));
    }
  }, []);

  const saveDoctors = (newDoctors: Doctor[]) => {
    setDoctors(newDoctors);
    localStorage.setItem('unmesh_doctors', JSON.stringify(newDoctors));
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this doctor?')) {
      saveDoctors(doctors.filter(d => d.id !== id));
    }
  };

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const newDoc: Doctor = {
      id: editingDoctor ? editingDoctor.id : Date.now().toString(),
      name: formData.get('name') as string,
      qualification: formData.get('qualification') as string,
      speciality: formData.get('speciality') as string,
      experience: formData.get('experience') as string,
      languages: formData.get('languages') as string,
      registrationNumber: formData.get('registrationNumber') as string,
      availability: formData.get('availability') as string,
    };

    if (editingDoctor) {
      saveDoctors(doctors.map(d => d.id === editingDoctor.id ? newDoc : d));
    } else {
      saveDoctors([...doctors, newDoc]);
    }
    
    setIsModalOpen(false);
    setEditingDoctor(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-black text-slate-800">Manage Doctors</h1>
        <button 
          onClick={() => { setEditingDoctor(null); setIsModalOpen(true); }}
          className="flex items-center gap-2 bg-[#163E96] text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#0f2c6c] transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Doctor
        </button>
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Name & Qual.</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Speciality</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Availability</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map(doc => (
              <tr key={doc.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                <td className="p-4">
                  <div className="font-bold text-[#163E96]">{doc.name}</div>
                  <div className="text-sm text-slate-500">{doc.qualification}</div>
                </td>
                <td className="p-4">
                  <div className="font-semibold text-slate-700">{doc.speciality}</div>
                  <div className="text-xs text-slate-500">{doc.experience} exp.</div>
                </td>
                <td className="p-4 text-sm text-slate-600">
                  {doc.availability}
                </td>
                <td className="p-4 text-right">
                  <button onClick={() => { setEditingDoctor(doc); setIsModalOpen(true); }} className="p-2 text-slate-400 hover:text-[#163E96] transition-colors"><Edit2 className="w-4 h-4" /></button>
                  <button onClick={() => handleDelete(doc.id)} className="p-2 text-slate-400 hover:text-[#D71920] transition-colors"><Trash2 className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
            {doctors.length === 0 && (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-500">No doctors added yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h2 className="text-xl font-bold text-slate-800">{editingDoctor ? 'Edit Doctor' : 'Add New Doctor'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600"><X className="w-6 h-6" /></button>
            </div>
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Name</label>
                  <input type="text" name="name" defaultValue={editingDoctor?.name} required className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-[#163E96]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Qualification</label>
                  <input type="text" name="qualification" defaultValue={editingDoctor?.qualification} required className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-[#163E96]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Speciality</label>
                  <input type="text" name="speciality" defaultValue={editingDoctor?.speciality} required className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-[#163E96]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Experience</label>
                  <input type="text" name="experience" defaultValue={editingDoctor?.experience} required className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-[#163E96]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Languages</label>
                  <input type="text" name="languages" defaultValue={editingDoctor?.languages} required className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-[#163E96]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Registration No.</label>
                  <input type="text" name="registrationNumber" defaultValue={editingDoctor?.registrationNumber} required className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-[#163E96]" />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Availability</label>
                  <input type="text" name="availability" defaultValue={editingDoctor?.availability} required className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-[#163E96]" placeholder="e.g. Mon, Wed, Fri (10 AM - 1 PM)" />
                </div>
              </div>
              <div className="pt-4 flex justify-end gap-3 border-t border-slate-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-slate-600 font-bold hover:bg-slate-100 rounded-lg transition-colors">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-[#163E96] text-white font-bold rounded-lg hover:bg-[#0f2c6c] transition-colors">Save Doctor</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
