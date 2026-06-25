import { useEffect } from 'react';

const SEO = ({ title, description, keywords }) => {
  const siteTitle = "Alfred | Contract Intelligence";
  const finalTitle = title ? `${title} — Alfred | Contract Intelligence` : siteTitle;
  const finalDescription = description || "Contract intelligence for infrastructure and EPC project delivery. Alfred reads FIDIC, NHAI, PWD and Metro Rail contracts, maps obligations to schedules, and alerts teams.";
  const finalKeywords = keywords || "contract intelligence, infrastructure project delivery, FIDIC contract management, NHAI contract tracking, Metro Rail project controls, EPC, P6 schedule sync";

  useEffect(() => {
    // 1. Update Title (under 60 characters)
    document.title = finalTitle.slice(0, 60);

    // 2. Helper to update/create meta tags
    const updateMeta = (selector, attribute, value) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        
        // Parse selector to simple attributes (heuristic)
        if (selector.includes('[name=')) {
           element.setAttribute('name', selector.match(/name="([^"]+)"/)[1]);
        } else if (selector.includes('[property=')) {
           element.setAttribute('property', selector.match(/property="([^"]+)"/)[1]);
        }
        
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // 3. Update Meta Tags
    updateMeta('meta[name="description"]', 'content', finalDescription);
    updateMeta('meta[name="keywords"]', 'content', finalKeywords);

    // Open Graph (Standard Navy Background card controls visual preview)
    updateMeta('meta[property="og:title"]', 'content', finalTitle);
    updateMeta('meta[property="og:description"]', 'content', finalDescription);
    updateMeta('meta[property="og:type"]', 'content', 'website');
    updateMeta('meta[property="og:image"]', 'content', 'https://alfredworks.ai/og-image.png');
    updateMeta('meta[property="og:url"]', 'content', window.location.href);

    // Twitter
    updateMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateMeta('meta[name="twitter:title"]', 'content', finalTitle);
    updateMeta('meta[name="twitter:description"]', 'content', finalDescription);

  }, [finalTitle, finalDescription, finalKeywords]);

  return null;
};

export default SEO;
