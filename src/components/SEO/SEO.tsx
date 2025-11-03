import { Helmet } from 'react-helmet-async';
import { getSensitiveInfo } from '@/lib/privacy';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  schemaData?: object;
}

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical,
  ogImage = "https://www.gslubricants.com/og-image.jpg",
  schemaData 
}: SEOProps) => {
  const fullTitle = `${title} | GS Lubricants`;
  const url = canonical || `https://www.gslubricants.com${window.location.pathname}`;
  const sensitiveInfo = getSensitiveInfo();

  // Generate organization schema with privacy-aware information
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GS Lubricants",
    "legalName": sensitiveInfo.companyFullName,
    "description": "Professional waste oil recycling and base oil manufacturing facility",
    "url": "https://www.gslubricants.com",
    "logo": "https://storage.googleapis.com/gpt-engineer-file-uploads/a8NJQyILBZbabaD3KAzUw05rnhD2/uploads/1757839377423-Screenshot 2025-09-14 141209.png",
    ...(sensitiveInfo.addressLine1 !== "Odisha, India" && {
      "address": {
        "@type": "PostalAddress",
        "streetAddress": sensitiveInfo.addressLine1,
        "addressLocality": "Anugul",
        "addressRegion": "Odisha",
        "addressCountry": "IN",
        "postalCode": "759100"
      }
    }),
    ...(sensitiveInfo.email !== "Use contact form" && {
      "email": sensitiveInfo.email
    }),
    ...(sensitiveInfo.phone !== "Contact form available" && {
      "telephone": sensitiveInfo.phone
    }),
    "sameAs": []
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      
      {/* Structured Data */}
      {schemaData ? (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      ) : (
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
