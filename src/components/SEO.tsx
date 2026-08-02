import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export function SEO({ 
  title = "Unmesh Foundation | Healthcare & Social Impact", 
  description = "UNMESH FOUNDATION is a registered Indian non-profit organization providing community healthcare, diagnostics, skill development, and senior citizen care.",
  keywords = "NGO, Healthcare, India, Blood Collection, Senior Citizen Care, CSR, Donate, Volunteer"
}: SEOProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Unmesh Foundation",
    "alternateName": "Unmesh Foundation (উন্মেশ ফাউন্ডেশন)",
    "url": "https://unmeshfoundation.org",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Yakatan 220, Jodhpur Garden",
      "addressLocality": "Kolkata",
      "postalCode": "700045",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9073380904",
      "contactType": "Emergency / Enquiries",
      "email": "foundationunmesh@gmail.com"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
