import { Link } from "react-router-dom";
import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Microscope,
} from "lucide-react";
import { PrivacyPolicyModal } from './PrivacyPolicyModal';

export function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  return (
    <footer className="bg-slate-900 border-t border-slate-800 px-4 sm:px-8 py-16 shrink-0 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand & About */}
        <div>
          <div className="flex items-center gap-3 mb-4 bg-white p-2.5 rounded-2xl w-fit shadow-md">
            <img
              src="/ULogo.png"
              alt="Unmesh Foundation Logo"
              className="h-12 w-12 object-contain"
              onError={(e) => {
                e.currentTarget.src = "/logo.svg";
              }}
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col pr-2">
              <span
                className="text-sm sm:text-base font-extrabold tracking-tight leading-none text-[#182181] uppercase"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800 }}
              >
                UNMESH FOUNDATION
              </span>
              <span className="text-[11px] font-bold text-slate-500 mt-1">
                (উন্মেশ ফাউন্ডেশন)
              </span>
            </div>
          </div>
          <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">
            Integrated NGO & Welfare Trust
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            An integrated Healthcare, Legal Aid, Senior Citizen Care and Skill
            Development Foundation working for community welfare globally.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/unmeshfoundationindia"
              target="_blank"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#163E96] transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/unmesh2026"
              target="_blank"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#163E96] transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/gouri-biswas-858a1159/"
              target="_blank"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#163E96] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">
            Quick Links
          </div>
          <ul className="space-y-3">
            <li>
              <Link
                to="/book-test"
                className="text-sm text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1.5 transition-colors"
              >
                <Microscope className="w-4 h-4" />
                Book Diagnostic Test
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/healthcare"
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                Healthcare Services
              </Link>
            </li>
            <li>
              <Link
                to="/network"
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                Partner Network
              </Link>
            </li>
            <li>
              <Link
                to="/donate"
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                Make a Donation
              </Link>
            </li>
            <li>
              <Link
                to="/volunteer"
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                Volunteer Opportunities
              </Link>
            </li>
            <li>
              <Link
                to="/legal-aid"
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                Legal Aid
              </Link>
            </li>
            <li>
              <Link
                to="/csr"
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                CSR Partnerships
              </Link>
            </li>
          </ul>
        </div>

        {/* Trust & Transparency */}
        <div>
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">
            Trust & Transparency
          </div>
          <ul className="space-y-3">
            <li>
              <Link
                to="/about"
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                Mission & Vision
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                Governance & Ethics
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                Patient Rights
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                Contact & Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">
            Contact Us
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#F5A623] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white mb-1">
                  Working Office
                </div>
                <div className="text-sm text-slate-400">
                  Ground Floor, Basanti Apartment
                  <br />
                  3, Bipin Ganguly Road, Kundu Bagan
                  <br />
                  Ghughudanga, Kol-700030
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#F5A623] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white mb-1">
                  Emergency / Enquiries
                </div>
                <div className="text-sm text-slate-400">
                  +91 9073380904
                  <br />
                  +91 7980510804
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#F5A623] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white mb-1">Email</div>
                <div className="text-sm text-slate-400">
                  admin@unmeshfoundation.org
                </div>
                <div className="text-sm text-slate-400">
                  unmeshfoundation1978@gmail.com
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-800">
        <div className="flex flex-wrap gap-4 md:gap-6 opacity-60 items-center justify-center md:justify-start">
          <a
            href="/documents/darpan-registration.pdf"
            download
            className="border border-slate-600 px-3 py-1.5 text-[10px] font-bold text-white rounded-sm uppercase tracking-widest inline-block hover:bg-slate-700 transition"
          >
            Darpan Registered
          </a>

          <a
            href="/documents/12a-80g-certificate.pdf"
            download
            className="border border-slate-600 px-3 py-1.5 text-[10px] font-bold text-white rounded-sm uppercase tracking-widest inline-block hover:bg-slate-700 transition"
          >
            12A &amp; 80G Certified
          </a>
        </div>

        <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider text-center md:text-right flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span>© {new Date().getFullYear()} Unmesh Foundation (উন্মেশ ফাউন্ডেশন). Registered NGO. All rights reserved.</span>
          <button 
            onClick={() => setIsPrivacyOpen(true)}
            className="text-amber-400 hover:underline font-bold cursor-pointer"
          >
            Privacy Policy
          </button>
        </div>
      </div>
      {/* Hidden backlink */}
      <a
        href="https://neetfmgeplans.com/"
        className="sr-only hidden opacity-0 pointer-events-none"
        tabIndex={-1}
        aria-hidden="true"
        rel="nofollow"
      >
        NEET FMGE Plans
      </a>

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
      />

      {/* Developer Branding */}
      <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-slate-800/60 text-center text-[11px] text-slate-500 font-medium">
        Made by{" "}
        <a
          href="https://nexora-techsolutions.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 hover:text-amber-300 font-semibold transition-colors"
        >
          Nexoratechsolutions
        </a>
      </div>
    </footer>
  );
}
