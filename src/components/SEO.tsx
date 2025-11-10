import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

interface Offer {
  name: string;
  price: string;
  priceCurrency: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  serviceName?: string;
  h1?: string;
  offers?: Offer[];
  faqs?: FAQItem[];
  breadcrumbs?: BreadcrumbItem[];
}

export const SEO = ({ title, description, serviceName, h1, offers, faqs, breadcrumbs }: SEOProps) => {
  const location = useLocation();
  const defaultTitle = "Траурна Агенция Кипарис - Професионални Траурни Услуги";
  const defaultDescription = "Траурни услуги в София. Денонощно: 02 846 55 24.";
  
  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;
  const canonicalUrl = `https://kiparis-sofia.bg${location.pathname}`;

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
    "serviceType": serviceName,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Траурна агенция Кипарис",
      "telephone": "+35928465524",
      "email": "kiparis2000@abv.bg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Професор Асен Златаров №8",
        "addressLocality": "София",
        "addressCountry": "България"
      }
    },
    "areaServed": "София",
    ...(offers && offers.length > 0 && {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Пакети за " + serviceName,
        "itemListElement": offers.map(offer => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": offer.name
          },
          "price": offer.price,
          "priceCurrency": offer.priceCurrency
        }))
      }
    })
  } : null;

  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://kiparis-sofia.bg${crumb.url}`
    }))
  } : null;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:locale" content="bg_BG" />
      <meta property="og:url" content={canonicalUrl} />
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};
