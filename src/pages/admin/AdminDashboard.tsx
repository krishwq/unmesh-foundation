import { useState, useEffect } from 'react';
import { getLocalSubmissions, getStoredScriptUrl, setStoredScriptUrl, GOOGLE_APPS_SCRIPT_CODE, FormSubmissionPayload } from '../../services/googleSheets';
import { FileSpreadsheet, RefreshCw, Copy, Check, Download, Heart, Users, Microscope, Calendar } from 'lucide-react';

export function AdminDashboard() {
  const [submissions, setSubmissions] = useState<FormSubmissionPayload[]>([]);
  const [filter, setFilter] = useState<'all' | 'donation' | 'volunteer' | 'book_test'>('all');
  const [scriptUrl, setScriptUrl] = useState(getStoredScriptUrl());
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    setSubmissions(getLocalSubmissions());
  }, []);

  const handleRefresh = () => {
    setSubmissions(getLocalSubmissions());
  };

  const filteredSubmissions = submissions.filter(s => filter === 'all' || s.action === filter);

  const donationsCount = submissions.filter(s => s.action === 'donation').length;
  const volunteersCount = submissions.filter(s => s.action === 'volunteer').length;
  const testsCount = submissions.filter(s => s.action === 'book_test').length;

  const handleSaveScriptUrl = () => {
    setStoredScriptUrl(scriptUrl);
    alert('Google Apps Script Web App URL updated!');
  };

  const copyCode = () => {
    navigator.clipboard.writeText(GOOGLE_APPS_SCRIPT_CODE);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-800">Admin Dashboard & Form Submissions</h1>
          <p className="text-sm text-slate-500">Live view of Donations, Volunteer Registrations, and Diagnostic Test Bookings</p>
        </div>
        
        <button
          onClick={handleRefresh}
          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Refresh Records</span>
        </button>
      </div>

      {/* STATS CARDS */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Submissions</span>
            <FileSpreadsheet className="w-5 h-5 text-[#163E96]" />
          </div>
          <p className="text-3xl font-black text-slate-800">{submissions.length}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Donations</span>
            <Heart className="w-5 h-5 text-[#F5A623]" />
          </div>
          <p className="text-3xl font-black text-[#F5A623]">{donationsCount}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Volunteers</span>
            <Users className="w-5 h-5 text-[#148B3A]" />
          </div>
          <p className="text-3xl font-black text-[#148B3A]">{volunteersCount}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Test Bookings</span>
            <Microscope className="w-5 h-5 text-[#D71920]" />
          </div>
          <p className="text-3xl font-black text-[#D71920]">{testsCount}</p>
        </div>
      </div>

      {/* SUBMISSIONS TABLE */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-lg font-bold text-slate-800">Recent Form Submissions</h2>

          <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-bold">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${filter === 'all' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500'}`}
            >
              All ({submissions.length})
            </button>
            <button
              onClick={() => setFilter('donation')}
              className={`px-3 py-1.5 rounded-lg transition-all ${filter === 'donation' ? 'bg-white text-[#F5A623] shadow-sm' : 'text-slate-500'}`}
            >
              Donations ({donationsCount})
            </button>
            <button
              onClick={() => setFilter('volunteer')}
              className={`px-3 py-1.5 rounded-lg transition-all ${filter === 'volunteer' ? 'bg-white text-[#148B3A] shadow-sm' : 'text-slate-500'}`}
            >
              Volunteers ({volunteersCount})
            </button>
            <button
              onClick={() => setFilter('book_test')}
              className={`px-3 py-1.5 rounded-lg transition-all ${filter === 'book_test' ? 'bg-white text-[#163E96] shadow-sm' : 'text-slate-500'}`}
            >
              Test Bookings ({testsCount})
            </button>
          </div>
        </div>

        {filteredSubmissions.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 uppercase font-bold text-[10px] tracking-wider">
                  <th className="pb-3 px-2">Ref ID</th>
                  <th className="pb-3 px-2">Type</th>
                  <th className="pb-3 px-2">Name / Contact</th>
                  <th className="pb-3 px-2">Details</th>
                  <th className="pb-3 px-2">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredSubmissions.map((s, idx) => (
                  <tr key={s.id || idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-2 font-mono font-bold text-[#163E96]">{s.id || 'N/A'}</td>
                    <td className="py-3.5 px-2">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                        s.action === 'donation' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
                        s.action === 'volunteer' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' :
                        'bg-blue-50 text-blue-800 border border-blue-200'
                      }`}>
                        {s.action === 'book_test' ? 'Test Booking' : s.action}
                      </span>
                    </td>
                    <td className="py-3.5 px-2">
                      <div className="font-bold text-slate-800">{s.name || 'N/A'}</div>
                      <div className="text-slate-500 text-[11px]">{s.phoneNumber || s.phone || s.mobile || s.email}</div>
                    </td>
                    <td className="py-3.5 px-2 max-w-xs truncate text-slate-600">
                      {s.action === 'donation' && <span>Amount: <strong className="text-emerald-700">{s.amount}</strong> ({s.purpose})</span>}
                      {s.action === 'volunteer' && <span>Interest: {s.areaOfInterest}</span>}
                      {s.action === 'book_test' && <span>Test: <strong>{s.testDescription}</strong> (Pref: {s.datePreferred})</span>}
                    </td>
                    <td className="py-3.5 px-2 text-slate-400 font-medium">
                      {s.formattedDate || (s.timestamp ? new Date(s.timestamp).toLocaleDateString() : 'N/A')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12 text-slate-400">
            <FileSpreadsheet className="w-10 h-10 mx-auto mb-2 opacity-30" />
            <p className="font-semibold text-sm">No records found for this category.</p>
            <p className="text-xs mt-1">Submit forms on Donate, Volunteer, or Book Test pages to see live records here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
