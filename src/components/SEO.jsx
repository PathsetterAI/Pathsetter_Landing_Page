import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Every canonical URL is emitted on the apex host regardless of the hostname
// the visitor arrived on. www.alfredworks.ai currently serves the site
// directly instead of redirecting, so without this the whole site exists
// twice with no declared preference.
const CANONICAL_ORIGIN = 'https://alfredworks.ai';

// Alias -> primary. Both members of each pair render the same component, so
// each page is reachable at two URLs. The primary is the form declared in
// public/sitemap.xml; if that file changes, this map changes with it.
const ROUTE_ALIASES = {
  '/platform': '/product',
  '/solutions': '/who-its-for',
  '/blogs': '/resources',
  '/book-demo': '/demo',
};

// Resolves a pathname to its canonical absolute URL. Trailing slashes are
// normalised away so /product and /product/ do not become two entries.
const resolveCanonical = (pathname) => {
  const clean = pathname.replace(/\/+$/, '') || '/';
  const primary = ROUTE_ALIASES[clean] || clean;
  return `${CANONICAL_ORIGIN}${primary}`;
};

const SEO = ({ title, description, keywords, canonical, faqs }) => {
  // Drives the canonical off the router rather than the remount, so that
  // navigating between two /compare/:slug articles still updates it.
  const { pathname } = useLocation();

  // Must stay byte-identical to the <title> in index.html. When the static and
  // client-rendered titles differ, the two get indexed independently.
  const defaultTitle = "AlfredWorks · Contract intelligence for infrastructure";

  // Construct rawTitle without duplicating the brand name.
  //
  // This deliberately does NOT strip the brand out of the middle of a title.
  // The previous implementation did, which broke any title using the brand as
  // a grammatical subject: "How AlfredWorks Compares" became "How Compares".
  // Instead, a title that already carries the brand is trusted as authored,
  // and only a title without it gets the prefix.
  let rawTitle = "";
  if (!title || title === "Home") {
    rawTitle = defaultTitle;
  } else if (/AlfredWorks/i.test(title)) {
    rawTitle = title.trim();
  } else {
    rawTitle = `AlfredWorks · ${title.trim()}`;
  }

  // Collapse runs of whitespace only. Separators inside the title are
  // meaningful: they are how both readers and models parse brand from page
  // topic, so they are preserved rather than flattened to spaces.
  const finalTitle = rawTitle.replace(/\s+/g, ' ').trim();

  const finalDescription = description || "AlfredWorks reviews tenders for the risk you would price wrong, then tracks every obligation so a late notice never times out a claim.";
  const finalKeywords = keywords || "contract intelligence, infrastructure project delivery, FIDIC contract management, NHAI contract tracking, Metro Rail project controls, EPC, P6 schedule sync";

  useEffect(() => {
    // 1. Update Title. Not truncated: Google truncates the SERP *display* on
    // pixel width, not the document, so cutting the string here only discards
    // information the crawler would otherwise have. Titles are authored to
    // length at the call site instead.
    document.title = finalTitle;

    // 2. Helper to update/create meta tags
    const updateMeta = (selector, attribute, value) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');

        // Parse selector to simple attributes
        if (selector.includes('[name=')) {
          element.setAttribute('name', selector.match(/name="([^"]+)"/)[1]);
        } else if (selector.includes('[property=')) {
          element.setAttribute('property', selector.match(/property="([^"]+)"/)[1]);
        }

        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // 2b. Canonical link. index.html ships a static canonical, so this must
    // update the existing element rather than append a second one.
    const canonicalUrl = canonical || resolveCanonical(pathname);
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonicalUrl);

    // 3. Update Meta Tags
    updateMeta('meta[name="description"]', 'content', finalDescription);
    updateMeta('meta[name="keywords"]', 'content', finalKeywords);

    // Open Graph
    updateMeta('meta[property="og:title"]', 'content', finalTitle);
    updateMeta('meta[property="og:description"]', 'content', finalDescription);
    updateMeta('meta[property="og:type"]', 'content', 'website');
    updateMeta('meta[property="og:site_name"]', 'content', 'AlfredWorks');
    updateMeta('meta[property="og:image"]', 'content', `${CANONICAL_ORIGIN}/og-image.png`);
    // Canonical, not location.href: href carries query strings, tracking
    // params and the www host, which fragments the share target.
    updateMeta('meta[property="og:url"]', 'content', canonicalUrl);

    // Twitter
    updateMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateMeta('meta[name="twitter:title"]', 'content', finalTitle);
    updateMeta('meta[name="twitter:description"]', 'content', finalDescription);
    updateMeta('meta[name="twitter:image"]', 'content', `${CANONICAL_ORIGIN}/og-image.png`);

    // 4. Inject JSON-LD Schema for AEO (Answer Engine Optimization)
    // Clear any existing AlfredWorks schemas to prevent duplication
    document.querySelectorAll('.alfredworks-schema').forEach(el => el.remove());

    const addSchema = (data) => {
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.className = 'alfredworks-schema';
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    };

    // Part 3.1: Organization Schema
    addSchema({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AlfredWorks",
      "url": "https://alfredworks.ai",
      "logo": "https://alfredworks.ai/logo.png",
      "description": "Contract intelligence for infrastructure project delivery. AlfredWorks reviews tenders for bid risk, tracks contractual obligations through execution, and drafts notices, RFIs and claims for a human to send.",
      "foundingLocation": "India",
      "email": "hello@alfredworks.ai",
      "areaServed": ["India", "Middle East"],
      "sameAs": [
        "https://www.linkedin.com/company/alfredworks",
        "https://www.crunchbase.com/organization/alfredworks"
      ],
      // description states what the action is. It must never instruct the
      // reader of the schema: see the note on llms.txt in the same commit.
      "potentialAction": {
        "@type": "CommunicateAction",
        "name": "Book a Demo",
        "recipient": {
          "@type": "Organization",
          "name": "AlfredWorks",
          "email": "hello@alfredworks.ai"
        },
        "description": "Book a product demo, or reach the team at hello@alfredworks.ai."
      }
    });

    // Part 3.2: SoftwareApplication Schema
    addSchema({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "AlfredWorks",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description": "AI contract intelligence for EPCs, owners and PMCs: bid risk review, obligation tracking, and claims drafting for FIDIC, CPWD, NHAI and Metro Rail contracts.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "description": "Book a demo for enterprise pricing"
      }
    });

    // Part 3.3: FAQPage schema, only when the page actually renders an FAQ.
    // Google requires FAQ structured data to describe content visible on the
    // same page. This block used to be emitted unconditionally on all 13
    // routes, including /contact and /demo, which render no FAQ at all.
    if (faqs && faqs.length > 0) {
      addSchema({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(({ q, a }) => ({
          "@type": "Question",
          "name": q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": a
          }
        }))
      });
    }

  }, [finalTitle, finalDescription, finalKeywords, canonical, pathname, faqs]);

  return null;
};

export default SEO;
