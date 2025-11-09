import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  serviceName?: string;
}

export const SEO = ({ title, description, serviceName }: SEOProps) => {
  const defaultTitle = "Траурна Агенция Кипарис - Професионални Траурни Услуги";
  const defaultDescription = "Траурна Агенция Кипарис предлага професионални траурни услуги, погребения, кремация, надгробни паметници и траурни венци с уважение и съпричастност.";
  
  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Траурна агенция Кипарис",
    "telephone": "+35928465524",
    "email": "kiparis2000@abv.bg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Професор Асен Златаров №8",
      "addressLocality": "София",
      "addressCountry": "България"
    },
    "areaServed": "София"
  };

  const serviceSchema = serviceName ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Траурна агенция Кипарис",
      "telephone": "+35928465524",
      "email": "kiparis2000@abv.bg"
    },
    "areaServed": "София"
  } : null;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
    </Helmet>
  );
};
