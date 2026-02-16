export const siteContent = {
  brand: {
    name: "PetSage",
    tagline: "AI-powered pet wellness companion"
  },
  ui: {
    menuLabel: "Menu",
    openMenuAriaLabel: "Open menu",
    linksHeading: "Links",
    socialHeading: "Social",
    submittingLabel: "Submitting…",
    waitlistEmailAriaLabel: "Email address",
    waitlistInvalidEmailMessage: "Please enter a valid email address.",
    backToHomeLabel: "Back to home",
    notFoundTitle: "Page not found",
    notFoundDescription: "The page you’re looking for doesn’t exist.",
    footerCopyrightSuffix: "All rights reserved.",
    waitlistPrivacyNotePrefix: "We only collect your email for launch updates. See",
    waitlistPrivacyNoteLinkLabel: "Privacy Policy",
    waitlistPrivacyNoteSuffix: "."
  },
  seo: {
    siteUrl: "https://petsage.in",
    defaultTitle: "PetSage",
    defaultDescription:
      "PetSage is an AI-powered pet wellness companion that helps you understand symptoms, organize context, and decide when to seek veterinary care.",
    ogImagePath: "/og.svg"
  },
  nav: {
    ctaLabel: "Join the Waitlist",
    links: [
      { href: "/mission", label: "Mission" },
      { href: "/about", label: "About Us" },
      { href: "/how-it-works", label: "How it Works" },
      { href: "/quick-start", label: "Quick Start" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" }
    ]
  },
  footer: {
    legalLinks: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms" }
    ],
    socialLinks: [
      // { href: "#", label: "X (placeholder)" },
      // { href: "#", label: "LinkedIn (placeholder)" },
      // { href: "#", label: "Instagram (placeholder)" }
    ],
    finePrint:
      "PetSage provides informational guidance and is not a substitute for professional veterinary advice."
  },
  waitlist: {
    title: "Enroll in Waiting List",
    subtitle: "Be first to know when PetSage launches.",
    placeholder: "you@example.com",
    buttonLabel: "Join the Waitlist",
    externalFormUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSedDoXas4G7i7DNunLDn5H2rkPBqrbqHJX538oZZrMnzc2Bcg/viewform?usp=publish-editor",
    successMessage:
      "You’re on the list. We’ll reach out when PetSage is ready.",
    genericErrorMessage:
      "Something went wrong. Please try again in a moment."
  },
  pages: {
    notFound: {
      backCta: "Back to home"
    },
    home: {
      seoTitle: "Home",
      seoDescription:
        "PetSage is an AI-powered pet wellness companion designed to help pet parents better understand symptoms, organize context, and decide when to seek veterinary care.",
      hero: {
        title: "Calm, clear guidance for pet health questions",
        subtitle:
          "PetSage helps you describe symptoms, track context, and understand when it’s time to seek veterinary care — with a premium, safety-first experience.",
        trustLine:
          "Designed to support better decisions. Not a replacement for a veterinarian."
      },
      valuePropsTitle: "Why PetSage",
      valuePropsSubtitle: "A medical-tech feel with pet-first practicality.",
      valueProps: [
        {
          kicker: "Clarity",
          title: "Organize symptoms and context",
          description:
            "Capture the details that matter — timeline, behavior, appetite, and photos — so nothing gets missed."
        },
        {
          kicker: "Safety",
          title: "Red-flag awareness",
          description:
            "Spot signals that may warrant urgent care, and understand what information to share with a vet."
        },
        {
          kicker: "Continuity",
          title: "Simple wellness tracking",
          description:
            "Keep pet profiles and health notes in one place for better follow-ups over time."
        }
      ],
      howItWorksPreviewTitle: "How it works",
      howItWorksPreviewSubtitle: "Three steps to better context and confidence."
    },
    mission: {
      seoTitle: "Mission",
      seoDescription: "Why we’re building PetSage.",
      title: "Our mission",
      subtitle: "Reduce uncertainty. Improve awareness. Support timely care.",
      paragraphs: [
        "Pet parents often face health questions at the worst moments: late nights, sudden symptoms, unclear next steps.",
        "PetSage exists to bring calm structure to that uncertainty — helping you describe what’s happening, identify potential red flags, and decide when professional veterinary care may be needed.",
        "We build with a safety-first mindset: PetSage does not diagnose or replace a veterinarian. It helps you ask better questions, earlier."
      ]
    },
    about: {
      seoTitle: "About Us",
      seoDescription: "The story behind PetSage.",
      title: "About Us",
      subtitle: "This platform is dedicated to Leo.",
      paragraphs: [
        "Two years ago, our dog Leo started bumping into walls and furniture. She was slowly losing vision in her right eye.",
        "We consulted a local vet and were referred to a specialist eye hospital in Pune. The consultation was expensive. They directed us to a partnered diagnostic center in Hyderabad for scans and tests. We paid significant amounts for imaging, blood tests, and medications.",
        "Results came back normal. But Leo’s condition worsened.",
        "Within two months, she began losing vision in her left eye as well.",
        "Over the next eight months, we travelled from Hyderabad to Pune multiple times. We spent over ₹1 lakh on consultations, scans, medicines, and follow-ups.",
        "In the end, we were told Leo had inherited glaucoma — and that nothing more could be done.",
        "She eventually lost vision in both eyes.",
        "Leo is six years old now. She is blind, but she is still full of courage and life.",
        "Why we are building PetSage",
        "During that entire journey, we felt: Confused. Overwhelmed. Unsure what questions to ask. Dependent on fragmented advice.",
        "For a vet, it may be one case among many. For a pet parent, it is everything.",
        "Pets cannot explain what they feel. They cannot describe symptoms. And most pet parents don’t know what information is important — until it’s too late.",
        "PetSage is being built so pet parents have structured guidance, remember their pet’s medical history, know what questions to ask, and feel less helpless during difficult moments.",
        "This platform is dedicated to Leo — who lost her sight, but never her spirit."
      ]
    },
    howItWorks: {
      seoTitle: "How it Works",
      seoDescription: "A simple 3-step flow for pet wellness guidance.",
      title: "How PetSage works",
      subtitle: "A straightforward workflow that respects real life.",
      steps: [
        {
          stepLabel: "Step 1",
          title: "Describe what you’re seeing",
          description:
            "Share symptoms, behavior changes, timeline, and optional photos in a structured way."
        },
        {
          stepLabel: "Step 2",
          title: "Get organized guidance",
          description:
            "Receive informational suggestions and questions to consider — with clear caution around emergencies."
        },
        {
          stepLabel: "Step 3",
          title: "Track and follow up",
          description:
            "Save notes and pet profiles so follow-ups are easier and more consistent."
        }
      ]
    },
    quickStart: {
      seoTitle: "Quick Start",
      seoDescription: "Quick start guide for PetSage testers and early users.",
      title: "PetSage – Quick Start Guide",
      subtitle: "For testers and early customers",
      sections: [
        {
          heading: "1) Install & Open",
          items: [
            "Install PetSage from the Play Store (or TestFlight on iOS when available).",
            "Open the app and allow the basic prompts if shown."
          ]
        },
        {
          heading: "2) Create Account / Log In",
          items: [
            "If you’re new: Enter email + password  → Tap Sign up.",
            "If asked, enter an invite code (only if your build is invite-only).",
            "If you already have an account: Tap Log in → Enter email + password."
          ]
        },
        {
          heading: "3) Create a Pet Profile (Required first step)",
          items: [
            "Go to Pets tab → Tap Add → Fill in your pet details (name/species/etc.) → Tap Save."
          ]
        },
        {
          heading: "4) Chat (Ask Questions)",
          items: [
            "Go to Chat tab → Select the pet from the dropdown at the top.",
            "Type your question and send.",
            "Wait for the response (you’ll see a “preparing response” loader).",
            "Quick check (optional): In Chat, tap Quick check → Fill the form (category, severity, notes, etc.) → Tap Save → Then ask your question in chat (it uses the saved info)."
          ]
        },
        {
          heading: "5) Schedule (Reminders & Routines)",
          items: [
            "Go to Schedule tab → Tap Add.",
            "Set: Title, Type, Due date/time, Remind me (offset), optional notes → Tap Save.",
            "Use Sync from backend if you want to refresh from server."
          ]
        },
        {
          heading: "6) Enable Notifications (for reminders)",
          items: [
            "Go to Profile → Notifications.",
            "Turn on Enable reminders → Tap Request permission.",
            "On Android 13+, allow notification permission when prompted."
          ]
        },
        {
          heading: "7) Log Out / Switch Account",
          items: [
            "Tap the logout icon in the top bar.",
            "Log in with a different account if needed."
          ]
        },
        {
          heading: "8) What to Verify (Checklist)",
          items: [
            "Account: Sign up works; Login works; Logout clears data correctly (no old pets/messages).",
            "Pets: Add/edit pets works; Pets list matches across devices after sync.",
            "Chat: Messages send/receive reliably; Quick check saves and doesn’t crash.",
            "Schedule + Reminders: Creating reminders works; Notifications show (after enabling permissions)."
          ]
        },
        {
          heading: "9) If Something Breaks (What to Send Us)",
          items: [
            "Screenshot of the issue.",
            "What screen you were on.",
            "Your phone model + Android/iOS version.",
            "Approx time it happened."
          ]
        }
      ]
    },
    faq: {
      seoTitle: "FAQ",
      seoDescription: "Frequently asked questions about PetSage.",
      title: "Frequently asked questions",
      subtitle: "Clear answers, no hype.",
      items: [
        {
          q: "Is PetSage a veterinarian?",
          a: "No. PetSage provides informational guidance and does not diagnose, treat, or prescribe. Always consult a veterinarian for medical concerns."
        },
        {
          q: "When should I seek urgent veterinary care?",
          a: "If you suspect an emergency (e.g., breathing difficulty, seizures, uncontrolled bleeding, sudden collapse), seek immediate professional help."
        },
        {
          q: "Will PetSage store my pet’s data?",
          a: "PetSage may store account email, chat history, and pet profiles to provide continuity. See our Privacy Policy for details."
        }
      ]
    },
    contact: {
      seoTitle: "Contact",
      seoDescription: "How to reach PetSage support.",
      title: "Contact us",
      subtitle: "We usually respond within 1–2 business days.",
      supportEmail: "admin@petsage.in",
      primaryLine: "For any issues, queries, support:",
      secondaryLine: "Email is the fastest way to reach us."
    },
    privacy: {
      seoTitle: "Privacy Policy",
      seoDescription: "PetSage privacy policy template.",
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
            "We may collect:",
            "• Email address (for authentication)",
            "• Pet information (such as species, age, and health history)",
            "• Chat messages and symptom descriptions",
            "• Photos uploaded by users"
          ]
        },
        {
          heading: "How We Use Information",
          paragraphs: [
            "We may use information:",
            "• To provide AI-powered informational guidance",
            "• To maintain conversation history and pet profiles",
            "• To improve product quality and safety",
            "• To communicate important updates"
          ]
        },
        {
          heading: "AI Usage Disclosure",
          paragraphs: [
            "PetSage uses artificial intelligence models to generate informational responses based on user-provided inputs. AI responses are not medical advice and should not be considered a substitute for professional veterinary care."
          ]
        },
        {
          heading: "Data Storage & Security",
          paragraphs: [
            "Data is stored securely using industry-standard practices. Communication between the app and servers is encrypted."
          ]
        },
        {
          heading: "Data Sharing",
          paragraphs: [
            "We do not sell or rent your personal data. Data is shared only with essential service providers required to operate the application."
          ]
        },
        {
          heading: "Data Retention",
          paragraphs: [
            "Data is retained as long as your account remains active or as required to provide services. Users may request account deletion by contacting us."
          ]
        },
        {
          heading: "User Responsibilities",
          paragraphs: [
            "PetSage provides informational guidance only. Users are responsible for seeking professional veterinary advice for medical concerns."
          ]
        },
        {
          heading: "Contact",
          paragraphs: [
            "If you have any questions or requests regarding privacy, contact us at: admin@petsage.in"
          ]
        }
      ]
    },
    terms: {
      seoTitle: "Terms",
      seoDescription: "PetSage terms template.",
      title: "Terms of Service",
      subtitle: "Last updated: 2026-02-15",
      sections: [
        {
          heading: "Use of the service",
          paragraphs: [
            "PetSage provides informational guidance only and is not medical advice. You are responsible for decisions regarding your pet’s care."
          ]
        },
        {
          heading: "No warranties",
          paragraphs: [
            "The service is provided “as is” without warranties of any kind, to the maximum extent permitted by law."
          ]
        },
        {
          heading: "Contact",
          paragraphs: ["Questions about these terms? Email admin@petsage.in."]
        }
      ]
    }
  }
} as const;

export type SiteContent = typeof siteContent;
