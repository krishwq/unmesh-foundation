import { SEO } from '../components/SEO';
import { Camera } from 'lucide-react';

export function Gallery() {
  const images = [
    { id: 1, title: 'Rural Health Camp', category: 'Healthcare', url: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5eb2?auto=format&fit=crop&q=80&w=600' },
    { id: 2, title: 'Senior Citizen Wellness', category: 'Elder Care', url: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=600' },
    { id: 3, title: 'Skill Training Batch 2024', category: 'Education', url: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=600' },
    { id: 4, title: 'Blood Donation Drive', category: 'Healthcare', url: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=600' },
    { id: 5, title: 'Legal Aid Awareness', category: 'Legal Aid', url: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600' },
    { id: 6, title: 'Diagnostic Center Inauguration', category: 'Infrastructure', url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=600' }
  ];

  return (
    <>
      <SEO title="Gallery | Unmesh Foundation" description="Visual journey of our healthcare and social impact initiatives." />
      
      <div className="bg-slate-50 pt-24 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-[#163E96] rounded-full mb-6">
              <Camera className="w-6 h-6" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#163E96] tracking-tight mb-6">Our Impact in Action</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Visual glimpses of our recent health camps, wellness programs, and community outreach activities across various regions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img) => (
              <div key={img.id} className="aspect-[4/3] bg-slate-200 rounded-3xl overflow-hidden relative group shadow-sm hover:shadow-xl transition-all">
                <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#163E96]/90 via-[#163E96]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="text-[10px] font-bold text-[#F5A623] uppercase tracking-widest mb-2">{img.category}</div>
                  <h3 className="text-white font-bold text-lg">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
