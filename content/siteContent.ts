export const siteContent = {
  brand: {
    name: "PetSage",
    tagline: "Official information portal"
  },
  ui: {
    menuLabel: "Menu",
    openMenuAriaLabel: "Open menu",
    linksHeading: "Links",
    socialHeading: "Social",
    backToHomeLabel: "Back to home",
    notFoundTitle: "Page not found",
    notFoundDescription: "The page you’re looking for doesn’t exist.",
    footerCopyrightSuffix: "All rights reserved."
  },
  seo: {
    siteUrl: "https://petsage.in",
    defaultTitle: "PetSage",
    defaultDescription:
      "Official PetSage portal for company information, privacy policy, and contact details.",
    ogImagePath: "/og.svg"
  },
  nav: {
    links: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact Us" }
    ]
  },
  footer: {
    legalLinks: [{ href: "/privacy", label: "Privacy Policy" }],
    socialLinks: [] as { href: string; label: string }[],
    finePrint: "For company and support inquiries, contact us by email."
  },
  pages: {
    notFound: {
      backCta: "Back to home"
    },
    home: {
      seoTitle: "Home",
      seoDescription:
        "Official PetSage portal with company information, privacy policy, and contact details.",
      title: "PetSage",
      subtitle:
        "This portal only contains official company information and contact details.",
      primaryCta: {
        href: "/contact",
        label: "Contact us"
      },
      secondaryCta: {
        href: "/about",
        label: "About us"
      }
    },
    about: {
      seoTitle: "About Us",
      seoDescription: "Background information about PetSage.",
      title: "About Us",
      subtitle: "The story behind PetSage.",
      paragraphs: [
        "PetSage was shaped by a difficult personal experience navigating long, expensive, and uncertain veterinary care journeys.",
        "That experience led us to build this company with a strong focus on clarity, responsibility, and support for pet parents.",
        "This portal is intentionally limited to official company information, contact details, and policy information."
      ]
    },
    contact: {
      seoTitle: "Contact Us",
      seoDescription: "How to reach PetSage.",
      title: "Contact us",
      subtitle: "We usually respond within 1–2 business days.",
      supportEmail: "admin@petsage.in",
      primaryLine: "For support, privacy requests, or general inquiries:",
      secondaryLine: "Email is the fastest way to reach us."
    },
    privacy: {
      seoTitle: "Privacy Policy",
      seoDescription: "PetSage privacy policy.",
      title: "Privacy Policy",
      subtitle: "Effective Date: 2026",
      sections: [
        {
          heading: "Overview",
          paragraphs: [
            "PetSage (“we”, “our”, “us”) respects your privacy. This Privacy Policy explains how we collect, use, and protect your information."
          ]
        },
        {
          heading: "Information We Collect",
          paragraphs: [
            "We may collect contact details and any information you choose to share when reaching out to us."
          ]
        },
        {
          heading: "How We Use Information",
          paragraphs: [
            "We use submitted information to respond to inquiries, handle support or privacy requests, and maintain required business records."
          ]
        },
        {
          heading: "Data Sharing",
          paragraphs: [
            "We do not sell or rent personal data. Information is shared only with service providers or authorities when necessary to operate lawfully."
          ]
        },
        {
          heading: "Data Retention",
          paragraphs: [
            "We retain information only for as long as needed to respond to inquiries, satisfy legal obligations, or protect legitimate business interests."
          ]
        },
        {
          heading: "Contact",
          paragraphs: [
            "If you have any privacy questions or requests, contact us at: admin@petsage.in"
          ]
        }
      ]
    }
  }
};
