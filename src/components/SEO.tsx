import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export function SEO({ 
  title = "Unmesh Foundation | Top NGO in Kolkata for Healthcare, Education & Support", 
  description = "Unmesh Foundation is a leading registered NGO in Kolkata providing affordable diagnostic test booking, doctor consultation, student education support, legal aid, business guidance, and community welfare. Donate with 80G tax benefits.",
  keywords = "NGO in Kolkata, non profit organization Kolkata, Unmesh Foundation, student support NGO Kolkata, free legal aid Kolkata, business support NGO, doctor consultation Kolkata, book diagnostic test Kolkata, home sample collection, affordable blood test, NGO donation 80G tax benefit, CSR partner Kolkata, senior citizen care Kolkata, youth skill development, charitable trust West Bengal",
  image = "https://unmeshfoundation.org/ULogo.png"
}: SEOProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Unmesh Foundation",
    "alternateName": "Unmesh Foundation (উন্মেশ ফাউন্ডেশন)",
    "url": "https://unmeshfoundation.org",
    "logo": "https://unmeshfoundation.org/ULogo.png",
    "image": "https://unmeshfoundation.org/ULogo.png",
    "description": description,
    "knowsAbout": [
      "Preventive Healthcare",
      "Affordable Diagnostic Test Booking",
      "Doctor Consultation",
      "Student & Educational Support",
      "Free Legal Aid & Guidance",
      "Business & Entrepreneurship Support",
      "Skill Development & Training",
      "Charitable Donations with 80G Tax Exemption"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dum Dum",
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "postalCode": "700028",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9073380904",
      "contactType": "Enquiries & Appointments",
      "email": "privacy@unmeshfoundation.org"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Favicon & Logo for Search Engines */}
      <link rel="icon" type="image/png" href="/ULogo.png" />
      <link rel="shortcut icon" type="image/png" href="/ULogo.png" />
      <link rel="apple-touch-icon" href="/ULogo.png" />

      {/* OpenGraph / Facebook / WhatsApp */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://unmeshfoundation.org" />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Unmesh Foundation" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data / Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
