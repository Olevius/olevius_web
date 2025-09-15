export const aboutTextMap = {
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
      { text: "Pricing", link: "" },
      { text: "Manifesto", link: "" },
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

  legal: {
    title: "Legal",
    content: [
      {
        text: "Privacy Policy",
        link: "https://opensource.org/license/bsd-3-clause",
      },
      {
        text: "Terms of Service",
        link: "https://opensource.org/license/bsd-3-clause",
      },
      {
        text: "Data Processing Agreement",
        link: "https://uwaterloo.ca/nanotechnology-engineering/undergraduate-students/capstone-design",
      },
    ],
  },
} as const;
