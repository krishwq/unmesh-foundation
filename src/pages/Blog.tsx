import { SEO } from '../components/SEO';
import { Newspaper, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Blog() {
  const posts = [
    { id: 1, category: 'Healthcare Update', title: 'The Importance of Regular Health Checkups in Rural Areas', desc: 'Discover how early detection through regular screening is saving lives in underprivileged communities...', date: 'Oct 15, 2024', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600' },
    { id: 2, category: 'Community Impact', title: '150th Free Diagnostic Camp Successfully Concluded', desc: 'Our recent camp in West Bengal successfully provided free diagnostics to over 500 senior citizens...', date: 'Oct 10, 2024', img: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=600' },
    { id: 3, category: 'Skill Development', title: 'New Batch of OT Assistants Ready for Placement', desc: 'Congratulations to our latest batch of Operation Theatre Assistants who have completed their training...', date: 'Oct 02, 2024', img: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=600' }
  ];

  return (
    <>
      <SEO title="Blog & News | Unmesh Foundation" description="Latest news, updates, and articles from Unmesh Foundation." />
      
      <div className="bg-slate-50 pt-24 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-red-50 text-[#D71920] rounded-full mb-6">
              <Newspaper className="w-6 h-6" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#163E96] tracking-tight mb-6">News & Insights</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Read the latest stories, updates, and healthcare insights from our ongoing projects and community initiatives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <div key={post.id} className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col group hover:shadow-xl transition-all">
                <div className="h-56 bg-slate-200 overflow-hidden relative">
                   <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#D71920] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm">
                     {post.category}
                   </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-bold text-xl text-slate-800 mb-3 leading-tight group-hover:text-[#163E96] transition-colors">{post.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">{post.desc}</p>
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{post.date}</span>
                    <Link to="#" className="text-xs font-bold text-[#163E96] uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
