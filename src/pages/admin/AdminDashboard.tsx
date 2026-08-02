export function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-black text-slate-800 mb-8">Dashboard Overview</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Doctors', value: '12' },
          { label: 'Upcoming Camps', value: '3' },
          { label: 'New Enquiries', value: '28' },
          { label: 'Total Donations', value: '₹4.2L' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">{stat.label}</h3>
            <p className="text-3xl font-black text-[#163E96]">{stat.value}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
            <div>
              <p className="font-bold text-slate-800">New volunteer registration</p>
              <p className="text-sm text-slate-500">Rahul Sharma registered for Kolkata Camp.</p>
            </div>
            <span className="text-xs font-bold text-slate-400">2 mins ago</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
            <div>
              <p className="font-bold text-slate-800">Donation received</p>
              <p className="text-sm text-slate-500">₹5,000 received for Healthcare Fund.</p>
            </div>
            <span className="text-xs font-bold text-slate-400">1 hour ago</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
            <div>
              <p className="font-bold text-slate-800">Doctor profile updated</p>
              <p className="text-sm text-slate-500">Dr. A. Roy updated availability.</p>
            </div>
            <span className="text-xs font-bold text-slate-400">3 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
