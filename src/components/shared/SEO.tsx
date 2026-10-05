import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const DEFAULT_IMAGE = "https://aerostatelab.com/favicon.png";
const BASE_URL = "https://aerostatelab.com";

function updateOrCreateMetaTag(
  selector: string,
  attributeName: string,
  attributeValue: string,
  content: string
) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function updateOrCreateCanonical(url: string) {
  let link = document.head.querySelector(
    'link[rel="canonical"]'
  ) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

function updateOrCreateJsonLd(
  schemaData?: Record<string, unknown> | Array<Record<string, unknown>>
) {
  const existingScript = document.head.querySelector("#page-structured-data");

  if (!schemaData) {
    if (existingScript) {
      existingScript.remove();
    }
    return;
  }

  let script = existingScript as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    script.setAttribute("id", "page-structured-data");
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schemaData);
}

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = "website",
  schema,
}: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    // 1. Page Title
    document.title = title;

    // 2. Canonical URL
    const canonicalUrl = canonical
      ? canonical
      : `${BASE_URL}${location.pathname === "/" ? "" : location.pathname}`;
    updateOrCreateCanonical(canonicalUrl);

    // 3. Meta Description
    updateOrCreateMetaTag(
      'meta[name="description"]',
      "name",
      "description",
      description
    );

    // 4. Meta Keywords
    if (keywords) {
      updateOrCreateMetaTag(
        'meta[name="keywords"]',
        "name",
        "keywords",
        keywords
      );
    }

    // 5. OpenGraph
    updateOrCreateMetaTag(
      'meta[property="og:title"]',
      "property",
      "og:title",
      title
    );
    updateOrCreateMetaTag(
      'meta[property="og:description"]',
      "property",
      "og:description",
      description
    );
    updateOrCreateMetaTag(
      'meta[property="og:url"]',
      "property",
      "og:url",
      canonicalUrl
    );
    updateOrCreateMetaTag(
      'meta[property="og:type"]',
      "property",
      "og:type",
      ogType
    );
    updateOrCreateMetaTag(
      'meta[property="og:image"]',
      "property",
      "og:image",
      ogImage
    );

    // 6. Twitter Card
    updateOrCreateMetaTag(
      'meta[name="twitter:card"]',
      "name",
      "twitter:card",
      "summary_large_image"
    );
    updateOrCreateMetaTag(
      'meta[name="twitter:title"]',
      "name",
      "twitter:title",
      title
    );
    updateOrCreateMetaTag(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      description
    );
    updateOrCreateMetaTag(
      'meta[name="twitter:image"]',
      "name",
      "twitter:image",
      ogImage
    );

    // 7. Structured Data (JSON-LD)
    updateOrCreateJsonLd(schema);
  }, [title, description, keywords, canonical, ogImage, ogType, schema, location.pathname]);

  return null;
}
