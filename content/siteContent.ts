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
      { href: "/quick-start", label: "How to Use" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" }
    ]
  },
  footer: {
    legalLinks: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms" }
    ],
    // Keep this empty for now. Add items later to enable the Social section in the footer.
    // Example:
    // { href: "https://x.com/yourhandle", label: "X" }
    socialLinks: [] as { href: string; label: string }[],
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
        "PetSage helps pet parents track health history, scan prescriptions, set reminders, and share vet-ready timelines.",
      hero: {
        title: "Your pet’s health history, reminders, and guidance — in one place.",
        subtitle:
          "PetSage helps you track symptoms, scan prescriptions, and share a clean vet-ready timeline.",
        trustLine:
          "Designed to support better decisions. Not a replacement for a veterinarian."
      },
      problemTitle: "The problem",
      problemStatement:
        "Pet parents juggle chats, photos, prescriptions, and memory. Important details get lost.",
      solutionTitle: "The solution",
      solutionStatement:
        "PetSage turns scattered info into a structured health timeline and actionable reminders.",
      featureHighlightsTitle: "Feature highlights",
      featureHighlights: [
        {
          title: "AI Guidance for Everyday Worries",
          description:
            "Get safety-first guidance for day-to-day concerns, with clear prompts for emergency escalation when needed."
        },
        {
          title: "Prescription Scan to Structured Records",
          description:
            "Scan prescriptions with OCR and convert them into usable medication and care records."
        },
        {
          title: "Medication & Routine Reminders",
          description:
            "Schedule medications and care routines with alerts so fewer doses and follow-ups are missed."
        },
        {
          title: "Vet-Ready Share Link / QR",
          description:
            "Share your pet’s organized history through a secure link or QR for faster, more informed consultations."
        },
        {
          title: "Living Health Summary",
          description:
            "Auto-generate a running summary from symptoms, visits, records, and behavior changes."
        }
      ],
      howToUseTitle: "How to use PetSage",
      howToUseSteps: [
        {
          stepLabel: "Step 1",
          title: "Create your pet profile",
          description:
            "Add core context like age, breed, allergies, conditions, and important notes."
        },
        {
          stepLabel: "Step 2",
          title: "Capture care events as they happen",
          description:
            "Log symptoms, behavior changes, vet visits, medications, and scan prescriptions."
        },
        {
          stepLabel: "Step 3",
          title: "Set reminders and get guided support",
          description:
            "Use AI guidance for concerns, schedule reminders, and escalate quickly when red flags appear."
        },
        {
          stepLabel: "Step 4",
          title: "Share with your vet",
          description:
            "Send a clean timeline and health summary before or during appointments via secure link or QR."
        }
      ],
      whyItMattersTitle: "Why it matters",
      whyItMatters: [
        "Catch patterns early",
        "Reduce missed medication",
        "Walk into vet visits fully prepared"
      ],
      trustSafetyTitle: "Trust and safety",
      trustSafetyNote:
        "PetSage supports decisions but does not replace veterinary diagnosis."
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
      seoTitle: "How to Use",
      seoDescription: "Step-by-step guide to using PetSage from login to chat, schedule, and timeline.",
      title: "How to Use PetSage",
      subtitle: "A practical walkthrough from first login to daily use.",
      sections: [
        {
          title: "1) Login or Sign Up",
          steps: [
            "Open the app after install. This is the first screen you will see.",
            "Enter your email and password.",
            "If you are new, tap Sign up to create your account.",
            "After signup, use the same credentials to log in.", 
            "In the beta version, we have not implemented forgot password functionality, please make sure its a simple password which you will remember"
          ],
          images: [
            {
              src: "/how-to-use-image/login-screen",
              alt: "Login and signup screen",
              caption: "Login screen: use Email + Password, then Sign up or Login."
            }
          ],
          note:
            "Invite code is optional and only needed when the beta is invite-only."
        },
        {
          title: "2) Pets Screen and Add Pet",
          steps: [
            "Go to Pets tab to view all pets linked to your account.",
            "If no pets are present, tap Add.",
            "Fill pet profile details like name, species, breed, allergies, existing conditions, and notes."
          ],
          images: [
            {
              src: "/how-to-use-image/pets-screen",
              alt: "Pets screen with Add button",
              caption: "Pets screen: tap Add to create a new pet profile."
            },
            {
              src: "/how-to-use-image/add-pet-screen",
              alt: "Add pet details screen",
              caption: "Add Pet form: enter profile and medical context details."
            }
          ]
        },
        {
          title: "3) Care Setup for the Pet",
          steps: [
            "After adding a pet, you are taken to Care setup.",
            "Configure reminders for grooming, vaccination, deworming, and vet checkups.",
            "You can skip this step for now and set it up later."
          ],
          images: [
            {
              src: "/how-to-use-image/care-setup-screen",
              alt: "Care setup screen for reminders",
              caption: "Care setup: configure recurring care reminders or skip for now."
            }
          ],
          note:
            "The app is currently in beta and may feel slightly slow in some flows."
        },
        {
          title: "4) Schedule Screen",
          steps: [
            "Open Schedule tab to see reminders for the currently selected pet.",
            "If one pet has no reminders, switch pet from the selector to view another pet’s reminders.",
            "These reminders come from your care setup choices during onboarding."
          ],
          images: [
            {
              src: "/how-to-use-image/schedule-screen",
              alt: "Schedule tab showing reminder card",
              caption: "Schedule tab: review upcoming reminders and mark them done."
            }
          ]
        },
        {
          title: "5) Timeline Screen",
          steps: [
            "Timeline stores key health events and history for each pet.",
            "Use the plus button to add a new event anytime.",
            "Choose Manual timeline entry to record category, title, description, medicines, and doctor recommendations.",
            "Choose Scan prescription to upload a prescription image.",
            "Tap Run OCR to extract text, then Parse to structured fields to auto-fill details.",
            "You can create reminders and schedule events from timeline flow too."
          ],
          images: [
            {
              src: "/how-to-use-image/timeline-overview",
              alt: "Timeline overview with pet snapshot and entries",
              caption: "Timeline overview: pet snapshot, vet summary, and timeline entries."
            },
            {
              src: "/how-to-use-image/timeline-list",
              alt: "Timeline list with entries and plus button",
              caption: "Timeline list: use the plus button to add a new event."
            },
            {
              src: "/how-to-use-image/timeline-add-menu",
              alt: "Timeline add menu with manual entry and scan prescription",
              caption: "Add menu: manual timeline entry, scan prescription, and vet QR."
            }
          ]
        },
        {
          title: "6) Chat Screen",
          steps: [
            "Select a pet in Chat to load that pet’s conversation history.",
            "Ask questions normally and review AI guidance responses.",
            "When symptoms are mentioned in chat, a timeline event may be auto-created so history is not lost.",
            "If an auto-created timeline event is not needed, you can delete it."
          ],
          images: [
            {
              src: "/how-to-use-image/chat-screen",
              alt: "Chat screen with AI response",
              caption: "Chat screen: ask a question and get guidance tied to the selected pet."
            }
          ]
        },
        {
          title: "7) Vet-Ready Usage Pattern",
          steps: [
            "Keep profile details updated as conditions and meds change.",
            "Log symptoms and events in Timeline as they happen.",
            "Use Schedule for recurring care and medication reminders.",
            "Use Chat for guidance and continuity, then share structured context with your vet."
          ]
        },
        {
          title: "Safety Note",
          steps: [
            "PetSage supports decisions with organized context and informational guidance.",
            "It does not replace a licensed veterinarian for diagnosis or treatment."
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
