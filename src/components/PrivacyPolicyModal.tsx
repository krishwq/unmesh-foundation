import { X, ShieldCheck, Mail, Phone, Globe, Lock } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                Privacy Policy
              </h2>
              <p className="text-xs text-slate-400">Unmesh Foundation • Official Policy Document</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Privacy Policy"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with Custom Scrollbar */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm leading-relaxed text-slate-700">
          
          {/* Metadata Banner */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#163E96]" />
              <span>Effective Date: August 2026</span>
            </div>
            <div>Last Updated: August 2026</div>
          </div>

          {/* Introduction */}
          <div className="space-y-3">
            <p className="text-base text-slate-900 font-medium">
              Trust is the foundation of healthcare, and protecting your privacy is an essential part of that trust.
            </p>
            <p>
              At <strong>Unmesh Foundation</strong>, we believe that every individual has the right to privacy, dignity, and respect. Whether you are a patient, volunteer, donor, healthcare professional, partner, or visitor to our website, we are committed to protecting your personal information responsibly, ethically, and transparently.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, protect, and manage your personal information when you interact with Unmesh Foundation through our healthcare services, community programs, website, volunteer activities, donations, partnerships, and communication channels.
            </p>
          </div>

          {/* Section: Who We Are */}
          <section className="space-y-2">
            <h3 className="text-base font-bold text-[#163E96] uppercase tracking-wider border-b border-slate-200 pb-2">
              Who We Are
            </h3>
            <p>
              Unmesh Foundation is a nonprofit charitable organization working to strengthen communities through preventive healthcare, affordable diagnostics, patient navigation, health education, skill development, and community empowerment.
            </p>
            <p>
              Protecting your personal information is an important part of our commitment to ethical and responsible healthcare.
            </p>
          </section>

          {/* Section: Information We Collect */}
          <section className="space-y-4">
            <h3 className="text-base font-bold text-[#163E96] uppercase tracking-wider border-b border-slate-200 pb-2">
              Information We Collect
            </h3>
            <p>Depending on the services you use, we may collect information such as:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Personal Information</h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-600">
                  <li>Name</li>
                  <li>Mobile Number</li>
                  <li>Email Address</li>
                  <li>Postal Address</li>
                  <li>Date of Birth & Age</li>
                  <li>Gender</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Healthcare Information</h4>
                <p className="text-xs text-slate-500 italic">Where required for healthcare services:</p>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-600">
                  <li>Appointment Requests</li>
                  <li>Diagnostic Test Requests</li>
                  <li>Health Screening Information</li>
                  <li>Medical Reports</li>
                  <li>Referral Information</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Donation Information</h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-600">
                  <li>Donor Name</li>
                  <li>Contact Details</li>
                  <li>Donation Amount</li>
                  <li>Transaction Reference</li>
                </ul>
                <p className="text-[11px] text-amber-700 bg-amber-50 p-2 rounded-xl border border-amber-200 font-medium">
                  We do not store your debit or credit card details. Payment transactions are processed through authorized payment service providers.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Volunteer & Partner Information</h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-600">
                  <li>Educational Background</li>
                  <li>Professional Skills</li>
                  <li>Areas of Interest & Experience</li>
                  <li>Organization Details</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Website Information</h4>
              <p className="text-xs text-slate-600">When you visit our website, we may automatically collect:</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {['Browser Information', 'Device Information', 'Cookies', 'IP Address', 'Website Usage Analytics'].map((item, idx) => (
                  <span key={idx} className="bg-white px-3 py-1 rounded-full border border-slate-200 text-xs font-semibold text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Why We Collect Information */}
          <section className="space-y-3">
            <h3 className="text-base font-bold text-[#163E96] uppercase tracking-wider border-b border-slate-200 pb-2">
              Why We Collect Information
            </h3>
            <p>We collect information only for legitimate and appropriate purposes, including:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                'Delivering healthcare-related services',
                'Scheduling appointments',
                'Home Sample Collection',
                'Community Health Programs',
                'Volunteer Management',
                'Donation Processing',
                'CSR Communication',
                'Partnership Coordination',
                'Health Awareness Activities',
                'Responding to enquiries',
                'Improving our services',
                'Meeting applicable legal and regulatory obligations'
              ].map((reason, idx) => (
                <li key={idx} className="flex items-center gap-2 p-2 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#163E96]"></span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 italic pt-1">
              We only collect information that is reasonably necessary for these purposes.
            </p>
          </section>

          {/* Section: Legal Basis */}
          <section className="space-y-3">
            <h3 className="text-base font-bold text-[#163E96] uppercase tracking-wider border-b border-slate-200 pb-2">
              Legal Basis for Processing Personal Information
            </h3>
            <p>Where applicable, we process personal information based on:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Your consent</li>
              <li>Delivery of requested services</li>
              <li>Compliance with applicable laws</li>
              <li>Legitimate organizational interests that respect your rights and privacy</li>
            </ul>
          </section>

          {/* Section: Protection of Health Information */}
          <section className="space-y-3 p-5 bg-blue-50/60 rounded-2xl border border-blue-100">
            <h3 className="text-base font-bold text-[#163E96] uppercase tracking-wider">
              Protection of Health Information
            </h3>
            <p>
              Health information is sensitive personal information. We take appropriate administrative, technical, and organizational measures to protect the confidentiality of medical and health-related information.
            </p>
            <p>
              We do not disclose medical information without appropriate authorization unless required by law or necessary for coordinating requested healthcare services.
            </p>
          </section>

          {/* Section: How We Protect Your Information */}
          <section className="space-y-3">
            <h3 className="text-base font-bold text-[#163E96] uppercase tracking-wider border-b border-slate-200 pb-2">
              How We Protect Your Information
            </h3>
            <p>We use reasonable security measures designed to protect your information, including:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Controlled access to information</li>
              <li>Password-protected systems</li>
              <li>Appropriate technical safeguards</li>
              <li>Staff confidentiality practices</li>
              <li>Periodic security reviews</li>
            </ul>
            <p className="text-xs text-slate-500">
              While no digital system can guarantee absolute security, we continuously work to protect personal information responsibly.
            </p>
          </section>

          {/* Section: Information Sharing */}
          <section className="space-y-3">
            <h3 className="text-base font-bold text-[#163E96] uppercase tracking-wider border-b border-slate-200 pb-2">
              Information Sharing
            </h3>
            <p className="font-semibold text-slate-800">We do not sell, rent, or trade your personal information.</p>
            <p>Where necessary, information may be shared with:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Authorized Diagnostic Laboratories</li>
              <li>Hospitals</li>
              <li>Healthcare Professionals</li>
              <li>Government Authorities (where legally required)</li>
              <li>Technology Service Providers</li>
              <li>Payment Service Providers</li>
            </ul>
            <p className="text-xs text-slate-500">
              Information is shared only when necessary and appropriate for delivering services or complying with legal obligations.
            </p>
          </section>

          {/* Section: Cookies */}
          <section className="space-y-3">
            <h3 className="text-base font-bold text-[#163E96] uppercase tracking-wider border-b border-slate-200 pb-2">
              Cookies
            </h3>
            <p>Our website may use cookies to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Improve website performance</li>
              <li>Enhance user experience</li>
              <li>Understand website usage</li>
              <li>Improve accessibility</li>
            </ul>
            <p className="text-xs text-slate-500">
              Users may control cookie preferences through their browser settings.
            </p>
          </section>

          {/* Section: Your Privacy Rights */}
          <section className="space-y-3">
            <h3 className="text-base font-bold text-[#163E96] uppercase tracking-wider border-b border-slate-200 pb-2">
              Your Privacy Rights
            </h3>
            <p>Subject to applicable law, you may request to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Update your information</li>
              <li>Request deletion where legally permissible</li>
              <li>Withdraw consent (where applicable)</li>
            </ul>
            <p className="text-xs text-slate-500">
              Requests may be submitted using the contact information below.
            </p>
          </section>

          {/* Section: Children's Privacy & International Visitors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <section className="space-y-2 p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Children's Privacy
              </h3>
              <p className="text-xs text-slate-600">
                Where services involve children, personal information is collected only with appropriate consent from a parent, legal guardian, or as otherwise permitted under applicable law.
              </p>
            </section>

            <section className="space-y-2 p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                International Visitors
              </h3>
              <p className="text-xs text-slate-600">
                If individuals from outside India access our website or services, their information will be handled in accordance with this Privacy Policy and applicable legal requirements.
              </p>
            </section>
          </div>

          {/* Section: Data Retention */}
          <section className="space-y-3">
            <h3 className="text-base font-bold text-[#163E96] uppercase tracking-wider border-b border-slate-200 pb-2">
              Data Retention
            </h3>
            <p>Personal information is retained only for as long as necessary to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Deliver requested services</li>
              <li>Meet legal obligations</li>
              <li>Maintain appropriate organizational records</li>
            </ul>
            <p className="text-xs text-slate-500">
              Information is securely deleted or anonymized when no longer required, where appropriate.
            </p>
          </section>

          {/* Section: Third-Party Services */}
          <section className="space-y-3">
            <h3 className="text-base font-bold text-[#163E96] uppercase tracking-wider border-b border-slate-200 pb-2">
              Third-Party Services
            </h3>
            <p>Our website may integrate services provided by trusted third parties, including:</p>
            <div className="flex flex-wrap gap-2 pt-1">
              {['Google Maps', 'Google Analytics', 'Payment Gateways', 'WhatsApp', 'Email Service Providers', 'Social Media Platforms'].map((service, idx) => (
                <span key={idx} className="bg-slate-100 px-3 py-1 rounded-xl text-xs font-semibold text-slate-700">
                  {service}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-500 pt-1">
              These services operate under their own privacy policies.
            </p>
          </section>

          {/* Section: Policy Updates */}
          <section className="space-y-2">
            <h3 className="text-base font-bold text-[#163E96] uppercase tracking-wider border-b border-slate-200 pb-2">
              Policy Updates
            </h3>
            <p>
              This Privacy Policy may be updated from time to time. Any revisions will be published on this page together with the updated effective date.
            </p>
          </section>

          {/* Section: Contact Us */}
          <section className="p-6 bg-slate-900 text-white rounded-3xl space-y-4 shadow-lg">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span>Contact Us</span>
            </h3>
            <div className="text-sm font-semibold text-slate-200">UNMESH FOUNDATION</div>
            <p className="text-xs text-slate-300">Dum Dum, Kolkata, West Bengal, India</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <a href="mailto:admin@unmeshfoundation.org" className="flex items-center gap-2 p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">admin@unmeshfoundation.org</span>
              </a>
              <a href="tel:+919073380904" className="flex items-center gap-2 p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91-9073380904</span>
              </a>
              <a href="https://unmeshfoundation.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors">
                <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">www.unmeshfoundation.org</span>
              </a>
            </div>
          </section>

          {/* Section: Our Commitment */}
          <section className="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-950 space-y-2">
            <h3 className="text-base font-bold text-emerald-900">Our Commitment</h3>
            <p className="text-xs leading-relaxed text-emerald-900">
              At Unmesh Foundation, protecting personal information is more than a legal responsibility—it reflects our commitment to dignity, trust, transparency, ethical healthcare, and responsible community service.
            </p>
            <p className="text-xs leading-relaxed text-emerald-900 font-medium">
              As we continue building the Bengal Preventive Healthcare & Community Empowerment Model, we remain committed to handling personal information with care, respect, and accountability.
            </p>
          </section>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#163E96] hover:bg-[#0f2c6c] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-sm"
          >
            Close Privacy Policy
          </button>
        </div>
      </div>
    </div>
  );
}
