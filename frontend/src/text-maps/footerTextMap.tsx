export const footerTextMap = {
  useCases: {
    title: "Use Cases",
    content: [
      {
        text: "Sales",
        link: "",
      },
      {
        text: "Support",
        link: "https://outlook.office.com/mail/deeplink/compose?",
      },
      {
        text: "Consulting",
        link: "https://outlook.office.com/mail/deeplink/compose?",
      },
      {
        text: "Recruiting",
        link: "https://www.linkedin.com/company/olevius/jobs/",
      },
    ],
  },

  enterprise: {
    title: "Enterprise",
    content: [
      {
        text: "Olevius for Enterprise",
        link: "",
      },
      {
        text: "Enterprise Security",
        link: "",
      },
      {
        text: "Vendor Profile",
        link: "",
      },
    ],
  },

  resources: {
    title: "Resources",
    content: [
      { text: "Pricing", className: "resources-pricing", link: "" },
      { text: "Manifesto", className: "resources-manifesto", link: "" },
      {
        text: "Press",
        link: "https://www.linkedin.com/company/olevius/posts/?feedView=all",
      },
      {
        text: "Careers",
        link: "https://www.linkedin.com/company/olevius/jobs/",
      },
    ],
  },

  support: {
    title: "Support",
    content: [
      {
        text: "Help Center",
        link:
          "https://outlook.office.com/mail/deeplink/compose?" +
          new URLSearchParams({
            to: "j29mak@uwaterloo.ca",
            subject: "Olevius_inquiry",
          }).toString(), // Outlook handles + as spaces fine,
      },
      {
        text: "Contact Us",
        link:
          "https://outlook.office.com/mail/deeplink/compose?" +
          new URLSearchParams({
            to: "j29mak@uwaterloo.ca",
            subject: "Olevius_inquiry",
          }).toString(), // Outlook handles + as spaces fine,
      },
    ],
  },
} as const;
