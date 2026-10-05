import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { routeSeoMap } from "../../utils/seoConfig";

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

export default function DynamicRouteSEO() {
  const location = useLocation();

  useEffect(() => {
    const seoData = routeSeoMap[location.pathname] || {
      title: "Aerostate Lab | Custom ERP, RMS & Business Management Software",
      description:
        "Aerostate Lab builds custom ERP, RMS, POS, inventory, CRM, HRMS, finance, and business operations software for enterprises across India, UAE, and globally.",
      keywords:
        "Aerostate Lab, custom ERP software, ERP software company Haridwar, business management software India, custom software development UAE",
    };

    const canonicalUrl = `${BASE_URL}${
      location.pathname === "/" ? "" : location.pathname
    }`;

    // Update document title
    document.title = seoData.title;

    // Update canonical link
    updateOrCreateCanonical(canonicalUrl);

    // Update standard meta tags
    updateOrCreateMetaTag(
      'meta[name="description"]',
      "name",
      "description",
      seoData.description
    );

    if (seoData.keywords) {
      updateOrCreateMetaTag(
        'meta[name="keywords"]',
        "name",
        "keywords",
        seoData.keywords
      );
    }

    // Update OpenGraph tags
    updateOrCreateMetaTag(
      'meta[property="og:title"]',
      "property",
      "og:title",
      seoData.title
    );
    updateOrCreateMetaTag(
      'meta[property="og:description"]',
      "property",
      "og:description",
      seoData.description
    );
    updateOrCreateMetaTag(
      'meta[property="og:url"]',
      "property",
      "og:url",
      canonicalUrl
    );
    updateOrCreateMetaTag(
      'meta[property="og:image"]',
      "property",
      "og:image",
      DEFAULT_IMAGE
    );

    // Update Twitter Card tags
    updateOrCreateMetaTag(
      'meta[name="twitter:title"]',
      "name",
      "twitter:title",
      seoData.title
    );
    updateOrCreateMetaTag(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      seoData.description
    );
    updateOrCreateMetaTag(
      'meta[name="twitter:image"]',
      "name",
      "twitter:image",
      DEFAULT_IMAGE
    );
  }, [location.pathname]);

  return null;
}
