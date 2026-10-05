import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Receipt,
  BadgePercent,
  Coins,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Globe2,
  Store,
  Truck,
  Briefcase,
  Zap,
} from "lucide-react";
import SEO from "../../components/shared/SEO";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Can your ERP system generate UAE FTA-compliant VAT tax invoices?",
    answer:
      "Yes. Our software is designed around UAE Federal Tax Authority (FTA) requirements. It automatically applies standard 5% VAT, zero-rated exports, and exempt supplies, generates Tax Invoices with TRN (Tax Registration Numbers), and produces quarterly FTA audit return files.",
  },
  {
    question: "Does your HRMS support UAE WPS (Wages Protection System) salary processing?",
    answer:
      "Yes. The payroll module generates bank-ready Salary Information Files (.SIF) formatted to UAE Central Bank standards for WPS routing through Exchange Houses and UAE banks. It also calculates end-of-service gratuity (EOSB) compliant with UAE Labour Law.",
  },
  {
    question: "How do you manage communication and project delivery with UAE and Dubai clients?",
    answer:
      "We operate in Gulf Standard Time (GST / GMT+4), which is just 1.5 hours behind our engineering hub. We conduct interactive video sprint demos, offer live Slack/WhatsApp dedicated channels, and provide transparent milestone-based deliverables with full staging access.",
  },
  {
    question: "What currencies and international payment options are supported?",
    answer:
      "The system natively manages multi-currency transactions across AED (Dirhams), USD, SAR (Saudi Riyals), EUR, and INR, with live exchange rate updates, multi-currency ledger accounts, and integration options for UAE payment gateways (Stripe, Network International, Telr).",
  },
  {
    question: "What is the cost advantage of building software with AeroState Lab versus local Dubai agencies?",
    answer:
      "Dubai-based software agencies typically charge AED 80,000 to AED 250,000+ for custom systems due to local overheads. By partnering with AeroState Lab, you receive Silicon-grade software architecture and direct engineering leadership at 50% to 70% lower overall investment, with 100% source code ownership and zero recurring user-seat royalties.",
  },
];

export default function DubaiLocation() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const uaeServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AeroState Lab - Custom ERP & Software Development for UAE & Dubai",
    image: "https://aerostatelab.com/favicon.png",
    telephone: "+91 82733 29609",
    email: "info@aerostatelab.com",
    url: "https://aerostatelab.com/locations/dubai",
    priceRange: "$$",
    currenciesAccepted: ["AED", "USD", "INR"],
    availableLanguage: ["English", "Hindi"],
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ajman" },
      { "@type": "City", name: "Ras Al Khaimah" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
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

  const whatsappDubaiUrl =
    "https://wa.me/918273329609?text=Hello%20AeroState%2C%20I%20am%20inquiring%20from%20UAE%20regarding%20custom%20software%20and%20ERP%20development.";

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      <SEO
        title="Custom ERP & Software Development Company in Dubai, UAE | AeroState Lab"
        description="AeroState Lab builds custom ERP, retail POS, WPS-compliant HRMS, and bespoke cloud business management software for enterprises across Dubai, Abu Dhabi, and the UAE with 5% FTA VAT compliance."
        keywords="custom software development Dubai, ERP software company UAE, VAT compliant ERP Dubai, WPS payroll software UAE, retail POS software Dubai, custom software company Abu Dhabi, hire software developers India for Dubai"
        canonical="https://aerostatelab.com/locations/dubai"
        schema={[uaeServiceSchema, faqSchema]}
      />

      {/* Breadcrumb Bar */}
      <div className="border-b border-slate-100 bg-slate-50/70 py-3">
        <div className="mx-auto flex max-w-[1440px] items-center gap-2 px-4 text-xs font-medium text-slate-500 sm:px-6 lg:px-10">
          <Link to="/" className="transition-colors hover:text-blue-600">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          <span>International Hubs</span>
          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">Dubai & United Arab Emirates</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-br from-indigo-50/70 via-white to-cyan-50/50 py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-75" />

        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-800 backdrop-blur">
              <Globe2 className="h-3.5 w-3.5 text-indigo-600" />
              <span>United Arab Emirates • Dubai • Abu Dhabi • Sharjah • GCC</span>
            </div>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl sm:leading-[1.12] lg:text-6xl">
              Custom ERP & Software Development Company for{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Dubai & UAE Enterprises
              </span>
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg sm:leading-8">
              Engineer secure, scalable cloud ERP, multi-store retail POS, WPS-compliant HRMS, 
              and tailored business management systems. Engineered specifically for <strong>UAE FTA 5% VAT</strong>, 
              multi-currency operations, and free zone logistics (JAFZA, DAFZA, DMCC) without expensive recurring per-user fees.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
              >
                Schedule UAE Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href={whatsappDubaiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                WhatsApp UAE Team (+91 82733 29609)
              </a>
            </div>

            {/* UAE Compliance Trust Row */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-slate-200/80 pt-8 text-xs font-semibold text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                FTA 5% VAT Invoicing
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                WPS .SIF Payroll File Generation
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                AED, USD & Multi-Currency Ready
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                Active GST (GMT+4) Time Zone Support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* UAE Regulatory & Core Compliance Pillars */}
      <section className="border-b border-slate-200 bg-slate-50/60 py-16 sm:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
              UAE Operational Standards
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
              Software Engineered for the Regulatory Framework of the UAE
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Ensure 100% alignment with UAE Federal Tax Authority rules, Ministry of Human Resources & Emiratisation (MOHRE) standards, and Central Bank protocols.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "FTA 5% VAT Invoicing",
                desc: "Automatic UAE VAT calculation, TRN validation, English/Arabic bilingual invoice generation, and export tax summaries.",
                icon: <BadgePercent className="h-6 w-6 text-blue-600" />,
                badge: "FTA Ready",
              },
              {
                title: "WPS SIF Payroll Generation",
                desc: "Ministry compliant .SIF file formatting for UAE banks and exchange houses with automated end-of-service gratuity (EOSB) tracking.",
                icon: <Receipt className="h-6 w-6 text-indigo-600" />,
                badge: "MOHRE & Central Bank",
              },
              {
                title: "Multi-Currency & Free Zones",
                desc: "Multi-ledger accounting supporting AED, USD, SAR, and EUR with multi-branch inventory tracking across mainland and free zone licenses.",
                icon: <Coins className="h-6 w-6 text-violet-600" />,
                badge: "Multi-Currency",
              },
              {
                title: "Gulf Time Zone (GST / GMT+4)",
                desc: "Our engineering operations align with Dubai working hours, ensuring instant Slack/WhatsApp collaboration and rapid turnaround.",
                icon: <Clock className="h-6 w-6 text-cyan-600" />,
                badge: "1.5h Time Difference",
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold text-blue-700">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions for UAE Verticals */}
      <section className="border-b border-slate-200 py-16 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
              Enterprise Offerings
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Systems Tailored for Growing GCC Businesses
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Custom-designed platforms that consolidate departments into a unified cloud interface.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Retail & Omnichannel POS Systems",
                desc: "High-speed point of sale designed for Dubai shopping malls, standalone retail, and multi-branch chains. Includes thermal receipt printing, barcode lookup, and customer loyalty rewards.",
                icon: <Store className="h-6 w-6 text-blue-600" />,
                link: "/solutions/pos",
              },
              {
                title: "Wholesale & Trading Business ERP",
                desc: "End-to-end import/export workflow tracking: customs documentation, container dispatches, landed cost calculations, and distributor credit limits across the GCC.",
                icon: <Truck className="h-6 w-6 text-indigo-600" />,
                link: "/industries/trading",
              },
              {
                title: "WPS HRMS & Employee Portal",
                desc: "Streamline employee onboarding, Emirates ID and passport expiry reminders, leave management, WPS salary SIF creation, and internal task distribution.",
                icon: <Briefcase className="h-6 w-6 text-violet-600" />,
                link: "/solutions/hrms",
              },
              {
                title: "Real Estate & Contracting ERP",
                desc: "Purpose-built project management tracking sub-contractor billings, milestone approvals, material requisitions, and profit margins per project.",
                icon: <Building2 className="h-6 w-6 text-cyan-600" />,
                link: "/industries/construction",
              },
              {
                title: "Customer Loyalty & Reward Engine",
                desc: "Reward repeat shoppers across Dubai retail outlets with points, multi-product loyalty entries, cash redemptions, and WhatsApp update alerts.",
                icon: <Zap className="h-6 w-6 text-amber-600" />,
                link: "/products/loyalty-reward-system",
              },
              {
                title: "Bespoke SaaS & Cloud Engineering",
                desc: "Have a unique business model or multi-tenant concept? We build custom web apps, client portals, and secure API backends tailored to your exact rules.",
                icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
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
                    View System Details
                    <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Dubai Partner Advantage */}
      <section className="border-b border-slate-200 bg-slate-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-400">
                The Offshore Advantage
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl sm:leading-tight">
                Why UAE Firms Choose AeroState Lab Over Expensive Dubai Agencies
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Local agencies in Business Bay and Downtown Dubai charge significant markups for software development. 
                AeroState Lab provides direct engineering partnership with transparent pricing, zero license lock-in, 
                and rapid delivery.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Save 50% to 70% compared to local Dubai software agency proposals.",
                  "100% intellectual property (IP) and source code ownership.",
                  "Zero recurring user-seat fees — scale your team without software penalties.",
                  "Fast deployment: production sprints deliver usable modules every 2 weeks.",
                  "Direct WhatsApp and video support aligned with Gulf Standard Time (GST).",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-emerald-400" />
                    <span className="text-sm leading-6 text-slate-200">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-blue-500"
                >
                  Request a Free Project Scope & Estimate
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white">Direct UAE Client Support</h3>
              <p className="mt-2 text-sm text-slate-400">
                Start a direct conversation with our technical directors.
              </p>

              <div className="mt-6 space-y-5 border-t border-slate-800 pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Globe2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Target Region</p>
                    <p className="text-sm font-semibold text-white">Dubai & United Arab Emirates (GCC)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Direct Phone / Consultation</p>
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
                    <p className="text-xs text-slate-400">WhatsApp Dubai Direct Link</p>
                    <a
                      href={whatsappDubaiUrl}
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
              Software Development for UAE & Dubai Businesses
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
              Common questions answered about VAT invoicing, WPS payroll integration, and remote delivery.
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
