import { useEffect } from 'react';

const SEO = ({ title, description, keywords }) => {
  const siteTitle = "Pathsetter AI | Native Intelligence for Infrastructure";
  const finalTitle = title ? `${title} | Pathsetter AI` : siteTitle;
  const finalDescription = description || "The AI-Native Operating System for Infrastructure Capital Projects. Pathsetter AI unifies the entire infrastructure lifecycle to deliver speed, clarity, and capital certainty.";
  const finalKeywords = keywords || "AI in construction, infrastructure intelligence, Pathsetter AI, project management software, capital projects, construction tech, AI operating system";

  useEffect(() => {
    // 1. Update Title
    document.title = finalTitle;

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

    // Open Graph
    updateMeta('meta[property="og:title"]', 'content', finalTitle);
    updateMeta('meta[property="og:description"]', 'content', finalDescription);
    updateMeta('meta[property="og:type"]', 'content', 'website');

    // Twitter
    updateMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateMeta('meta[name="twitter:title"]', 'content', finalTitle);
    updateMeta('meta[name="twitter:description"]', 'content', finalDescription);

  }, [finalTitle, finalDescription, finalKeywords]);

  return null;
};

export default SEO;
