import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Factory,
  Boxes,
  Users2,
  CheckCircle2,
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Layers,
  Cpu,
  ReceiptText,
} from "lucide-react";
import SEO from "../../components/shared/SEO";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Can Aerostate Lab provide on-site demos and staff training in SIDCUL Haridwar?",
    answer:
      "Yes. Being locally situated in Haridwar, our engineering and implementation teams provide direct on-site consultations, requirement gathering workshops, and comprehensive staff training across SIDCUL Haridwar, Bhagwanpur, Roorkee, and Dehradun.",
  },
  {
    question: "How does a custom ERP from Aerostate Lab compare to off-the-shelf software like Tally or SAP?",
    answer:
      "Off-the-shelf software forces your business to adapt to rigid workflows and charges expensive recurring per-user licenses. Aerostate Lab builds a tailor-made ERP that reflects your exact shop-floor processes, godown structures, shift schedules, and management reports without unnecessary complexity.",
  },
  {
    question: "Can your system integrate with our existing factory biometric machines and barcode scanners?",
    answer:
      "Yes. Our software solutions support direct API and network integrations with standard biometric attendance machines (e.g., eSSL, Matrix), handheld barcode/QR scanners, weighing scales, and existing accounting software.",
  },
  {
    question: "What industries do you serve in Haridwar and Uttarakhand?",
    answer:
      "We primarily engineer solutions for pharmaceutical manufacturers, packaging units, auto component fabricators, chemical processors, FMCG distributors, hotels/resorts in Haridwar/Rishikesh, and multi-branch retail stores across Uttarakhand.",
  },
  {
    question: "What is the typical deployment timeline for a custom manufacturing or business system?",
    answer:
      "Depending on the complexity, a targeted modular system (such as Inventory + Invoicing or HRMS) typically deploys in 3 to 6 weeks. Comprehensive multi-department ERP solutions with custom workflows deploy in phased stages within 6 to 12 weeks with zero business disruption.",
  },
];

export default function HaridwarLocation() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Aerostate Lab - Custom ERP & Software Development Company",
    image: "https://aerostatelab.com/favicon.png",
    telephone: "+91 82733 29609",
    email: "info@aerostatelab.com",
    url: "https://aerostatelab.com/locations/haridwar",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Industrial Corridor, Haridwar",
      addressLocality: "Haridwar",
      addressRegion: "Uttarakhand",
      postalCode: "249401",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "29.9457",
      longitude: "78.1642",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "19:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Haridwar" },
      { "@type": "Place", name: "SIDCUL Haridwar" },
      { "@type": "City", name: "Roorkee" },
      { "@type": "City", name: "Dehradun" },
      { "@type": "Place", name: "Bhagwanpur" },
      { "@type": "State", name: "Uttarakhand" },
      { "@type": "Country", name: "India" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      <SEO
        title="Custom ERP & Software Development Company in Haridwar, Uttarakhand | AeroState Lab"
        description="AeroState Lab is a leading custom software and ERP development company in Haridwar, Uttarakhand. We build tailored manufacturing ERP, inventory, HRMS, and business management software for SIDCUL and Uttarakhand businesses."
        keywords="ERP software company Haridwar, software development company Haridwar, custom software Uttarakhand, SIDCUL manufacturing ERP, software company Dehradun, industrial ERP Roorkee"
        canonical="https://aerostatelab.com/locations/haridwar"
        schema={[localBusinessSchema, faqSchema]}
      />

      {/* Breadcrumb Bar */}
      <div className="border-b border-slate-100 bg-slate-50/70 py-3">
        <div className="mx-auto flex max-w-[1440px] items-center gap-2 px-4 text-xs font-medium text-slate-500 sm:px-6 lg:px-10">
          <Link to="/" className="transition-colors hover:text-blue-600">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          <span>Regional Hubs</span>
          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">Haridwar & Uttarakhand</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/50 py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
        
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-800 backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-blue-600" />
              <span>Haridwar • SIDCUL • Dehradun • Roorkee</span>
            </div>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl sm:leading-[1.12] lg:text-6xl">
              Custom ERP & Software Development Company in{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Haridwar, Uttarakhand
              </span>
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg sm:leading-8">
              Empower your plant, warehouse, or enterprise with bespoke software built right here in Uttarakhand. 
              We engineer custom production ERPs, inventory management systems, biometric workforce solutions, 
              and business dashboards tailored for <strong>SIDCUL industrial manufacturers</strong> and regional enterprises.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
              >
                Request On-Site Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="https://wa.me/918273329609"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                Chat on WhatsApp (+91 82733 29609)
              </a>
            </div>

            {/* Quick Badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-slate-200/80 pt-8 text-xs font-semibold text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                On-Site Requirement Workshops
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                Zero Per-User Recurring Royalties
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                Dedicated Local Engineering Support
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                Custom GST & E-Way Bill Integration
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Belts Section */}
      <section className="border-b border-slate-200 bg-slate-50/60 py-16 sm:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
              Local Presence & Coverage
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
              Serving Manufacturing & Commercial Belts Across Uttarakhand
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              We provide direct technical engagement and on-premise implementation across the key industrial zones of the state.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                region: "SIDCUL Haridwar",
                focus: "Pharma, Packaging, FMCG, Auto Components & Heavy Engineering plants.",
                tag: "Industrial Zone",
              },
              {
                region: "Bhagwanpur & Roorkee",
                focus: "Fabrication units, chemical processing, hardware manufacturers, and tech institutes.",
                tag: "Manufacturing Belt",
              },
              {
                region: "Dehradun Region",
                focus: "Commercial headquarters, retail chains, healthcare providers, and educational institutions.",
                tag: "Commercial Capital",
              },
              {
                region: "Pantnagar & Kichha",
                focus: "Automotive assembly units, food processing, logistics, and multi-tier supply chains.",
                tag: "Integrated Industrial Hub",
              },
            ].map((hub, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <div className="inline-block rounded-md bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-700">
                  {hub.tag}
                </div>
                <h3 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {hub.region}
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  {hub.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="border-b border-slate-200 py-16 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
              Targeted Industrial Capabilities
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Software Engineered for Haridwar Enterprises
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Replace fragmented spreadsheets and disconnected tools with a single custom-designed platform.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Manufacturing & Batch ERP",
                desc: "Track raw material batch numbers, Bill of Materials (BOM), production stages, machine allocation, and quality pass/fail certificates.",
                icon: <Factory className="h-6 w-6 text-blue-600" />,
                link: "/solutions/manufacturing",
              },
              {
                title: "Multi-Godown Inventory & Dispatch",
                desc: "Real-time stock counts across raw material godowns and finished goods storage. Full barcode generation and automated reorder triggers.",
                icon: <Boxes className="h-6 w-6 text-indigo-600" />,
                link: "/solutions/inventory",
              },
              {
                title: "Shift HRMS & Contract Labor Attendance",
                desc: "Biometric machine sync, contract worker records, OT calculations, shift rotations, and accurate payroll generation compliant with state norms.",
                icon: <Users2 className="h-6 w-6 text-violet-600" />,
                link: "/solutions/hrms",
              },
              {
                title: "Dealer & Retail Loyalty Point Systems",
                desc: "Boost repeat wholesale orders from hardware shops, paint dealers, and distributors across Uttarakhand with automated point rewards and cash redemption.",
                icon: <ReceiptText className="h-6 w-6 text-emerald-600" />,
                link: "/products/loyalty-reward-system",
              },
              {
                title: "Sales CRM & B2B Order Management",
                desc: "Track client inquiries, quote generation, follow-ups, converted purchase orders, and payment collection schedules from one dashboard.",
                icon: <Layers className="h-6 w-6 text-cyan-600" />,
                link: "/solutions/crm",
              },
              {
                title: "Bespoke Web & Cloud Architecture",
                desc: "Have a proprietary operational process? We design completely custom web platforms and internal business tools tailored to your exact rules.",
                icon: <Cpu className="h-6 w-6 text-amber-600" />,
                link: "/services/custom-software-development",
              },
            ].map((sol, i) => (
              <div
                key={i}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-105 transition-transform">
                    {sol.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {sol.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {sol.desc}
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <Link
                    to={sol.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700"
                  >
                    Explore Module
                    <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Advantages */}
      <section className="border-b border-slate-200 bg-slate-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-400">
                The Local Advantage
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl sm:leading-tight">
                Why Uttarakhand Enterprises Choose AeroState Lab Over Distant Agencies
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Remote agencies in Bangalore or Delhi often don't understand the realities of plant operations, 
                contract workforce shifts, and on-ground logistics in Haridwar and Uttarakhand. 
                Aerostate Lab bridges that gap with direct proximity.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "In-person factory visits and requirement analysis right at your facility.",
                  "Zero recurring per-user software licensing overheads — you own the workflow.",
                  "Staff and operator training delivered directly in Hindi and English.",
                  "High security: data hosted in private cloud with automated daily backups.",
                  "Rapid ongoing support with quick turnaround times.",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-blue-400" />
                    <span className="text-sm leading-6 text-slate-200">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-blue-500"
                >
                  Book a Discussion with Our Tech Team
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white">Local Contact Details</h3>
              <p className="mt-2 text-sm text-slate-400">
                Connect directly with our engineering leadership to discuss your software roadmap.
              </p>

              <div className="mt-6 space-y-5 border-t border-slate-800 pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Location Base</p>
                    <p className="text-sm font-semibold text-white">Haridwar, Uttarakhand, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Direct Phone</p>
                    <a href="tel:+918273329609" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                      +91 82733 29609
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">WhatsApp Instant Connect</p>
                    <a
                      href="https://wa.me/918273329609"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-emerald-400 hover:underline"
                    >
                      Chat on WhatsApp (+91 82733 29609)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
              Frequently Asked Questions
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Software Development in Haridwar & Uttarakhand
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
              Common questions answered about custom ERP implementation, timelines, and on-site support.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold text-slate-900 sm:text-lg">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 flex-none text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-6 pb-6 pt-4">
                      <p className="text-sm leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
