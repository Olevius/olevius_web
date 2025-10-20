export const footerTextMap = {
  support: {
    content: [
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
