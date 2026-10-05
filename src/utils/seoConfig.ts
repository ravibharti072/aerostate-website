export interface RouteSEO {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogType?: "website" | "article";
}

export const routeSeoMap: Record<string, RouteSEO> = {
  "/": {
    title: "Aerostate Lab | Custom ERP, RMS & Business Management Software",
    description:
      "Aerostate Lab builds custom ERP, RMS, POS, inventory, CRM, HRMS, finance, and business operations software for enterprises across India, UAE, and globally.",
    keywords:
      "Aerostate Lab, custom ERP software, ERP software company Haridwar, business management software India, custom software development UAE, POS system, cloud ERP, inventory management, HRMS",
  },
  "/products/business-operations-management-system": {
    title: "Business Operations Management System | AeroState Lab",
    description:
      "Connect and automate sales CRM, employee onboarding, attendance, task tracking, payments, and team coordination from a single business operations platform.",
    keywords:
      "business operations management system, enterprise operations software, sales CRM, attendance management, task management software India UAE, Aerostate Lab",
  },
  "/products/loyalty-reward-system": {
    title: "Loyalty & Customer Reward Management System | AeroState Lab",
    description:
      "Transform customer purchases into strong repeat business with custom loyalty points, multi-product rewards, and transparent cash redemption software.",
    keywords:
      "customer loyalty program software, retail rewards system, cash redemption software, paint dealer loyalty program, customer retention software India UAE",
  },
  "/services/custom-software-development": {
    title: "Custom Software Development Services | AeroState Lab",
    description:
      "Bespoke cloud software, custom ERP, CRM, and automated workflow systems engineered to solve unique business processes for enterprises in India, UAE, and worldwide.",
    keywords:
      "custom software development, bespoke ERP development, software development company India Haridwar, cloud software engineering UAE, workflow automation software",
  },
  "/solutions": {
    title: "Enterprise Business Software Solutions | AeroState Lab",
    description:
      "Explore AeroState Lab's suite of modular business software including HRMS, CRM, inventory management, finance, POS billing, and manufacturing ERP.",
    keywords:
      "enterprise software solutions, cloud business modules, business management software, custom ERP solutions India UAE",
  },
  "/solutions/hrms": {
    title: "HR & Workforce Management Software | AeroState Lab",
    description:
      "Streamline employee onboarding, attendance, role-based portal permissions, and workforce coordination with AeroState's cloud HRMS software.",
    keywords:
      "HRMS software India, workforce management software, employee onboarding system, attendance tracking, HR management software UAE, AeroState Lab",
  },
  "/solutions/inventory": {
    title: "Inventory & Warehouse Management Software | AeroState Lab",
    description:
      "Real-time stock tracking, multi-warehouse management, low-stock alerts, and automated reordering for retail, manufacturing, and wholesale businesses.",
    keywords:
      "inventory management software, warehouse management system, stock control software India, inventory tracking UAE, multi-store inventory",
  },
  "/solutions/crm": {
    title: "Customer Relationship Management (CRM) Software | AeroState Lab",
    description:
      "Manage sales pipelines, customer leads, automated follow-ups, and client communication from a unified, intuitive CRM platform.",
    keywords:
      "sales CRM software, customer relationship management, lead tracking software India, B2B CRM UAE, sales pipeline management",
  },
  "/solutions/finance": {
    title: "Financial Management & Accounting Software | AeroState Lab",
    description:
      "Simplify bookkeeping, multi-currency accounting, automated billing, and financial reporting with AeroState's enterprise finance software.",
    keywords:
      "financial management software, cloud accounting software, multi-currency invoicing, VAT compliant accounting UAE India, business finance tool",
  },
  "/solutions/manufacturing": {
    title: "Manufacturing ERP & Production Software | AeroState Lab",
    description:
      "Optimize production planning, bill of materials (BOM), raw material tracking, and shop floor management for factories and manufacturing plants.",
    keywords:
      "manufacturing ERP software, production management software, BOM management, shop floor tracking, industrial software Haridwar SIDCUL India",
  },
  "/solutions/pos": {
    title: "Retail POS Billing & Store Management System | AeroState Lab",
    description:
      "Fast, reliable Point of Sale (POS) software with barcode scanning, instant billing, receipt printing, and real-time inventory sync.",
    keywords:
      "retail POS software, point of sale system, store billing software India, retail checkout software UAE, barcode inventory billing",
  },
  "/solutions/procurement": {
    title: "Procurement & Supply Chain Management Software | AeroState Lab",
    description:
      "Streamline purchase orders, vendor management, requisition workflows, and supply chain logistics with intelligent tracking.",
    keywords:
      "procurement software, supply chain management system, vendor portal, purchase order software India UAE",
  },
  "/solutions/payroll": {
    title: "Automated Payroll & Salary Management Software | AeroState Lab",
    description:
      "Automate salary calculations, deductions, bonuses, payslip generation, and statutory compliance reports with 100% accuracy.",
    keywords:
      "payroll software India, salary management system, automated payslip generator, WPS payroll compliance UAE, workforce payroll",
  },
  "/solutions/analytics": {
    title: "Business Analytics & Intelligence Dashboard | AeroState Lab",
    description:
      "Transform operational data into actionable executive insights with real-time business analytics, KPIs, and interactive reporting dashboards.",
    keywords:
      "business analytics software, executive dashboard, business intelligence platform, operational reporting tool India UAE",
  },
  "/industries": {
    title: "Industry-Specific Software Solutions | AeroState Lab",
    description:
      "Specialized ERP and software solutions tailored for manufacturing, healthcare, retail, logistics, construction, education, and hospitality.",
    keywords:
      "industry software solutions, vertical ERP systems, custom enterprise software by industry India UAE",
  },
  "/industries/manufacturing": {
    title: "Manufacturing & Industrial ERP Solutions | AeroState Lab",
    description:
      "End-to-end ERP for factories and manufacturing plants in Haridwar (SIDCUL), Uttarakhand, Pan-India, and UAE. Streamline production, inventory, and QA.",
    keywords:
      "manufacturing software Haridwar, SIDCUL industrial ERP, factory management software Uttarakhand, manufacturing software India UAE",
  },
  "/industries/healthcare": {
    title: "Healthcare & Clinic Management Software | AeroState Lab",
    description:
      "Secure, intuitive software for clinics, diagnostic centers, and healthcare providers to manage patient records, appointments, and billing.",
    keywords:
      "healthcare management software, clinic billing software, patient record system, hospital management system India UAE",
  },
  "/industries/retail": {
    title: "Retail & Multi-Store Management Software | AeroState Lab",
    description:
      "Integrated retail management solutions with omnichannel inventory, POS billing, customer loyalty, and multi-store performance tracking.",
    keywords:
      "retail store software, multi-chain retail management, store inventory system, retail billing solution India UAE",
  },
  "/industries/logistics": {
    title: "Logistics & Fleet Management Software | AeroState Lab",
    description:
      "Optimize dispatch operations, consignment tracking, route management, and warehouse freight with smart logistics software.",
    keywords:
      "logistics management software, consignment tracking system, fleet operations software India UAE, freight management ERP",
  },
  "/industries/construction": {
    title: "Construction & Contracting Project ERP | AeroState Lab",
    description:
      "Track project milestones, material consumption, contractor billings, and site labor with purpose-built construction management software.",
    keywords:
      "construction ERP software, contracting management system, project material tracking, contractor billing software India UAE",
  },
  "/industries/education": {
    title: "School & Education Management Software | AeroState Lab",
    description:
      "Manage admissions, student records, fee collection, attendance, and faculty scheduling with AeroState's education portal.",
    keywords:
      "school management software, college ERP portal, student attendance system, education fee billing software India UAE",
  },
  "/industries/trading": {
    title: "Wholesale & Trading Business ERP Software | AeroState Lab",
    description:
      "Empower distributors and trading firms with purchase order management, multi-currency invoicing, credit limits, and inventory visibility.",
    keywords:
      "wholesale ERP software, trading business software, distributor management system, wholesale invoicing software India UAE",
  },
  "/industries/hospitality": {
    title: "Hospitality & Hotel Management Software | AeroState Lab",
    description:
      "Streamline reservations, room bookings, kitchen order tickets (KOT), billing, and guest relations for hospitality businesses.",
    keywords:
      "hotel management software, restaurant POS system, hospitality booking software, KOT billing system India UAE",
  },
  "/about": {
    title: "About AeroState Lab | Software Built Around Real Business Workflows",
    description:
      "Learn about AeroState Lab's mission to engineer tailored, high-performance ERP and business operations software for growing enterprises.",
    keywords:
      "about Aerostate Lab, software development company Haridwar, software agency Uttarakhand India, enterprise software engineering team",
  },
  "/contact": {
    title: "Contact AeroState Lab | Request a Software Consultation",
    description:
      "Get in touch with AeroState Lab for custom ERP, RMS, or business software development in India, Haridwar, UAE, and worldwide.",
    keywords:
      "contact Aerostate Lab, hire software developers India, ERP consultation Haridwar, custom software quote UAE",
  },
  "/our-approach": {
    title: "Our Software Engineering Approach | AeroState Lab",
    description:
      "Discover how AeroState Lab designs, builds, tests, and deploys custom enterprise applications designed around how your business actually operates.",
    keywords:
      "software development methodology, enterprise agile delivery, custom software design process, AeroState Lab approach",
  },
  "/why-choose-us": {
    title: "Why Choose AeroState Lab | Enterprise Software Partner",
    description:
      "Explore why forward-thinking companies choose AeroState Lab for custom software engineering, reliable uptime, and dedicated long-term support.",
    keywords:
      "why choose Aerostate Lab, trusted software partner India, reliable ERP development, custom software benefits",
  },
  "/locations/haridwar": {
    title:
      "Custom ERP & Software Development Company in Haridwar, Uttarakhand | AeroState Lab",
    description:
      "AeroState Lab is a leading custom software and ERP development company in Haridwar, Uttarakhand. We build tailored manufacturing ERP, inventory, HRMS, and business management software for SIDCUL and Uttarakhand businesses.",
    keywords:
      "ERP software company Haridwar, software development company Haridwar, custom software Uttarakhand, SIDCUL manufacturing ERP, software company Dehradun, industrial ERP Roorkee",
  },
  "/locations/dubai": {
    title:
      "Custom ERP & Software Development Company in Dubai, UAE | AeroState Lab",
    description:
      "AeroState Lab builds custom ERP, retail POS, WPS-compliant HRMS, and bespoke cloud business management software for enterprises across Dubai, Abu Dhabi, and the UAE with 5% FTA VAT compliance.",
    keywords:
      "custom software development Dubai, ERP software company UAE, VAT compliant ERP Dubai, WPS payroll software UAE, retail POS software Dubai, custom software company Abu Dhabi, hire software developers India for Dubai",
  },
};
