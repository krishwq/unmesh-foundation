/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Volunteer } from './pages/Volunteer';
import { Donate } from './pages/Donate';
import { CSR } from './pages/CSR';
import { Healthcare } from './pages/Healthcare';
import { LegalAid } from './pages/LegalAid';
import { SkillDevelopment } from './pages/SkillDevelopment';
import { Gallery } from './pages/Gallery';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Team } from './pages/Team';
import { Network } from './pages/Network';
import { FindHospital } from './pages/FindHospital';
import { BecomePartner } from './pages/BecomePartner';

// Admin
import { AdminLayout } from './components/AdminLayout';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminDoctors } from './pages/admin/AdminDoctors';
import { AdminPartners } from './pages/admin/AdminPartners';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="doctors" element={<AdminDoctors />} />
            <Route path="partners" element={<AdminPartners />} />
            {/* Placeholders for other admin routes */}
            <Route path="*" element={<div className="p-8 text-center text-slate-500">Module coming soon...</div>} />
          </Route>

          {/* Public Routes */}
          <Route path="/*" element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/healthcare" element={<Healthcare />} />
                <Route path="/services" element={<Services />} />
                <Route path="/legal-aid" element={<LegalAid />} />
                <Route path="/skill-development" element={<SkillDevelopment />} />
                <Route path="/team" element={<Team />} />
                <Route path="/csr" element={<CSR />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/volunteer" element={<Volunteer />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/network" element={<Network />} />
                <Route path="/find-hospital" element={<FindHospital />} />
                <Route path="/become-partner" element={<BecomePartner />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

