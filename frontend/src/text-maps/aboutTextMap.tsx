export const aboutTextMap = {
  useCases: {
    title: "Use Cases",
    content: [
      {
        text: "Sales",
        className: "sales-content",
        link: "https://airflow.apache.org/",
      },
      { text: "Support", className: "support-content", link: "" },
      { text: "Consulting", className: "consulting-content", link: "" },
      { text: "Recruiting", className: "recruiting-content", link: "" },
    ],
    classNameTitle: "use-cases-title",
  },

  enterprise: {
    title: "Enterprise",
    content: [
      {
        text: "Olevius for Enterprise",
        className: "enterprise-olevius",
        link: "",
      },
      {
        text: "Enterprise Security",
        className: "enterprise-security",
        link: "",
      },
      {
        text: "Vendor Profile",
        className: "enterprise-vendor-profile",
        link: "",
      },
    ],
    classNameTitle: "enterprise-title",
  },

  resources: {
    title: "Resources",
    content: [
      { text: "Pricing", className: "resources-pricing", link: "" },
      { text: "Manifesto", className: "resources-manifesto", link: "" },
      { text: "Press", className: "resources-press", link: "" },
      { text: "Careers", className: "resources-careers", link: "" },
    ],
    classNameTitle: "resources-title",
  },

  support: {
    title: "Support",
    content: [
      { text: "Help Center", className: "support-help-center", link: "" },
      { text: "Contact Us", className: "support-contact-us", link: "" },
    ],
    classNameTitle: "support-title",
  },

  legal: {
    title: "Legal",
    content: [
      { text: "Privacy Policy", className: "legal-privacy-policy", link: "" },
      { text: "Terms of Service", className: "legal-terms", link: "" },
      { text: "Data Processing Agreement", className: "legal-dpa", link: "" },
    ],
    classNameTitle: "legal-title",
  },
} as const;
