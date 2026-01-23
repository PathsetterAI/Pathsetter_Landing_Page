import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
  const siteTitle = "Pathsetter AI | Native Intelligence for Infrastructure";

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{title ? `${title} | Pathsetter AI` : siteTitle}</title>
      <meta name="description" content={description || "The AI-Native Operating System for Infrastructure Capital Projects. Pathsetter AI unifies the entire infrastructure lifecycle to deliver speed, clarity, and capital certainty."} />
      <meta name="keywords" content={keywords || "AI in construction, infrastructure intelligence, Pathsetter AI, project management software, capital projects, construction tech, AI operating system"} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title ? `${title} | Pathsetter AI` : siteTitle} />
      <meta property="og:description" content={description || "The AI-Native Operating System for Infrastructure Capital Projects."} />
      <meta property="og:type" content="website" />
      
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | Pathsetter AI` : siteTitle} />
      <meta name="twitter:description" content={description || "The AI-Native Operating System for Infrastructure Capital Projects."} />
    </Helmet>
  );
};

export default SEO;
