// Added By Bhushan on 19_12_2024
// SEO utility functions for El Messiri home builder website

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
}

export interface PageSEOData {
  [key: string]: SEOData;
}

// Base SEO configuration
export const baseSEO: SEOData = {
  title: "El Messiri - Premium Home Builder & Interior Design",
  description: "Crafting bespoke homes and interiors with passion and precision. Custom home builds, interior design, renovations, and project management services.",
  keywords: [
    "home builder",
    "interior design",
    "custom homes",
    "renovations",
    "construction",
    "architectural design",
    "home remodeling",
    "luxury homes",
    "project management",
    "El Messiri"
  ],
  ogType: "website",
  twitterCard: "summary_large_image",
  ogImage: "/homehero.png"
};

// Page-specific SEO data
export const pageSEO: PageSEOData = {
  home: {
    title: "El Messiri - Premium Home Builder & Interior Design | Custom Homes & Renovations",
    description: "Transform your vision into reality with El Messiri's premium home building and interior design services. Custom homes, renovations, and complete project management.",
    keywords: [
      "premium home builder",
      "custom home construction",
      "interior design services",
      "home renovation",
      "luxury home builder",
      "architectural design",
      "El Messiri homes"
    ],
    canonicalUrl: "/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "El Messiri",
      "description": "Premium home builder and interior design company",
      "url": "https://elmessiri.com",
      "logo": "https://elmessiri.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-XXX-XXX-XXXX",
        "contactType": "customer service"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://facebook.com/elmessiri",
        "https://instagram.com/elmessiri",
        "https://linkedin.com/company/elmessiri"
      ]
    }
  },
  services: {
    title: "Our Services - Custom Home Building & Interior Design | El Messiri",
    description: "Comprehensive building and design services including custom home builds, interior design, renovations, and project management. Quality craftsmanship guaranteed.",
    keywords: [
      "custom home building services",
      "interior design consultation",
      "home renovation services",
      "project management",
      "construction services",
      "design build",
      "home extensions"
    ],
    canonicalUrl: "/services",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Home Building and Interior Design",
      "provider": {
        "@type": "Organization",
        "name": "El Messiri"
      },
      "areaServed": "United States",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Home Building Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Home Builds"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Interior Design & Styling"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Renovations & Extensions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Project Management"
            }
          }
        ]
      }
    }
  },
  about: {
    title: "About El Messiri - Our Story & Team | Premium Home Builder",
    description: "Learn about El Messiri's story, philosophy, and team. Over a decade of experience in crafting bespoke homes with uncompromising quality and client-centric approach.",
    keywords: [
      "about El Messiri",
      "home builder company",
      "construction team",
      "building philosophy",
      "custom home experience",
      "interior design team"
    ],
    canonicalUrl: "/about",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "El Messiri",
        "foundingDate": "2010",
        "description": "Premium home builder and interior design company with over a decade of experience",
        "numberOfEmployees": "10-50",
        "slogan": "Building With Passion & Precision"
      }
    }
  },
  contact: {
    title: "Contact El Messiri - Get Your Custom Home Quote | Home Builder",
    description: "Ready to build your dream home? Contact El Messiri for a consultation. Get expert advice on custom home building, interior design, and renovation projects.",
    keywords: [
      "contact home builder",
      "custom home consultation",
      "home building quote",
      "interior design consultation",
      "renovation consultation",
      "El Messiri contact"
    ],
    canonicalUrl: "/contact",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "El Messiri",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-XXX-XXX-XXXX",
          "contactType": "customer service",
          "availableLanguage": "English"
        }
      }
    }
  }
};

// Function to generate meta tags
export const generateMetaTags = (seoData: SEOData, baseUrl: string = "https://elmessiri.com") => {
  const fullTitle = seoData.title.includes("El Messiri") ? seoData.title : `${seoData.title} | El Messiri`;
  const fullDescription = seoData.description;
  const canonicalUrl = seoData.canonicalUrl ? `${baseUrl}${seoData.canonicalUrl}` : baseUrl;
  const ogImage = seoData.ogImage ? `${baseUrl}${seoData.ogImage}` : `${baseUrl}/homehero.png`;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: seoData.keywords?.join(", "),
    canonical: canonicalUrl,
    ogTitle: fullTitle,
    ogDescription: fullDescription,
    ogImage: ogImage,
    ogUrl: canonicalUrl,
    ogType: seoData.ogType || "website",
    twitterCard: seoData.twitterCard || "summary_large_image",
    twitterTitle: fullTitle,
    twitterDescription: fullDescription,
    twitterImage: ogImage
  };
};

// Function to get SEO data for a specific page
export const getPageSEO = (page: string): SEOData => {
  return pageSEO[page] || baseSEO;
};
