// Added By Bhushan on 19_12_2024
// SEO component for dynamic page metadata management

import React, { useEffect } from 'react';
import { SEOData, generateMetaTags } from '../utils/seo';

interface SEOProps {
  seoData: SEOData;
  baseUrl?: string;
}

const SEO: React.FC<SEOProps> = ({ seoData, baseUrl = "https://elmessiri.com" }) => {
  const metaTags = generateMetaTags(seoData, baseUrl);

  useEffect(() => {
    // Update document title
    document.title = metaTags.title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', metaTags.description);
    if (metaTags.keywords) {
      updateMetaTag('keywords', metaTags.keywords);
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', metaTags.canonical);

    // Open Graph tags
    updateMetaTag('og:title', metaTags.ogTitle, true);
    updateMetaTag('og:description', metaTags.ogDescription, true);
    updateMetaTag('og:image', metaTags.ogImage, true);
    updateMetaTag('og:url', metaTags.ogUrl, true);
    updateMetaTag('og:type', metaTags.ogType, true);
    updateMetaTag('og:site_name', 'El Messiri', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', metaTags.twitterCard);
    updateMetaTag('twitter:title', metaTags.twitterTitle);
    updateMetaTag('twitter:description', metaTags.twitterDescription);
    updateMetaTag('twitter:image', metaTags.twitterImage);

    // Add structured data if available
    if (seoData.structuredData) {
      let structuredDataScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(seoData.structuredData);
    }

    // Add viewport meta tag if not present
    let viewport = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
      document.head.appendChild(viewport);
    }

    // Add robots meta tag
    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      robots.setAttribute('content', 'index, follow');
      document.head.appendChild(robots);
    }

    // Add language meta tag
    let language = document.querySelector('meta[http-equiv="content-language"]') as HTMLMetaElement;
    if (!language) {
      language = document.createElement('meta');
      language.setAttribute('http-equiv', 'content-language');
      language.setAttribute('content', 'en-US');
      document.head.appendChild(language);
    }

  }, [metaTags, seoData.structuredData]);

  return null; // This component doesn't render anything
};

export default SEO;
