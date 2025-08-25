export const aboutTextMap = {
  useCases: {
    title: "Use Cases",
    content: [
      {
        text: "Sales",
        className: "sales-content",
        link: "",
      },
      {
        text: "Support",
        className: "support-content",
        link: "https://outlook.office.com/mail/deeplink/compose?",
      },
      {
        text: "Consulting",
        className: "consulting-content",
        link: "https://outlook.office.com/mail/deeplink/compose?",
      },
      {
        text: "Recruiting",
        className: "recruiting-content",
        link: "https://www.linkedin.com/company/olevius/jobs/",
      },
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
      {
        text: "Press",
        className: "resources-press",
        link: "https://www.linkedin.com/company/olevius/posts/?feedView=all",
      },
      {
        text: "Careers",
        className: "resources-careers",
        link: "https://www.linkedin.com/company/olevius/jobs/",
      },
    ],
    classNameTitle: "resources-title",
  },

  support: {
    title: "Support",
    content: [
      {
        text: "Help Center",
        className: "support-help-center",
        link:
          "https://outlook.office.com/mail/deeplink/compose?" +
          new URLSearchParams({
            to: "j29mak@uwaterloo.ca",
            subject: "Olevius_inquiry",
          }).toString(), // Outlook handles + as spaces fine,
      },
      {
        text: "Contact Us",
        className: "support-contact-us",
        link:
          "https://outlook.office.com/mail/deeplink/compose?" +
          new URLSearchParams({
            to: "j29mak@uwaterloo.ca",
            subject: "Olevius_inquiry",
          }).toString(), // Outlook handles + as spaces fine,
      },
    ],
    classNameTitle: "support-title",
  },

  legal: {
    title: "Legal",
    content: [
      {
        text: "Privacy Policy",
        className: "legal-privacy-policy",
        link: "https://opensource.org/license/bsd-3-clause",
      },
      {
        text: "Terms of Service",
        className: "legal-terms",
        link: "https://opensource.org/license/bsd-3-clause",
      },
      {
        text: "Data Processing Agreement",
        className: "legal-dpa",
        link: "https://uwaterloo.ca/nanotechnology-engineering/undergraduate-students/capstone-design",
      },
    ],
    classNameTitle: "legal-title",
  },
} as const;
