export const site = {
  brand: "Aptaflux",
  // TODO(copy): Replace this default metadata description with approved copy.
  description: "Aptaflux digital studio.",
  metadata: {
    // TODO(copy): Replace the not-found page title with approved copy.
    notFoundTitle: "Page not found",
    // TODO(copy): Replace the not-found page description with approved copy.
    notFoundDescription: "The page you are looking for could not be found.",
    // TODO(copy): Replace the error page title with approved copy.
    errorTitle: "Something went wrong",
    // TODO(copy): Replace the error page description with approved copy.
    errorDescription: "An unexpected error occurred. Please try again.",
    // TODO(copy): Replace this error support message with approved copy.
    errorContact: "If the issue continues, email us at",
    // TODO(copy): Replace the retry button label with approved copy.
    retry: "Try again",
  },
  navigation: [
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  callToAction: "Book a Call",
  openMenu: "Menu",
  closeMenu: "Close",
  mobileNavigation: "Mobile navigation",
  socialNavigation: "Social links",
  localTimeLabel: "Local time",
  // TODO: Switch to hello@aptaflux.com once the address is configured.
  email: "aptaflux@gmail.com",
  contact: {
    // TODO(copy): Replace the contact page title with approved copy.
    metadataTitle: "Contact",
    // TODO(copy): Replace the contact page metadata description with approved copy.
    metadataDescription:
      "Contact Aptaflux to discuss a digital product, website or brand project.",
    // TODO(copy): Replace the contact page introduction with approved copy.
    introduction: "Tell us what you have in mind. We would love to hear about it.",
    // TODO(copy): Replace this response-time statement with approved copy.
    responseTime: "",
    // TODO(copy): Replace this time-zone note with approved copy.
    timeZoneNote: "Working with teams across time zones.",
    remoteFirst: "Remote-first",
    whatHappensNext: {
      heading: "What happens next",
      // TODO(copy): Replace the placeholder steps with approved copy.
      steps: [
        { title: "TODO(copy)", text: "TODO(copy)" },
        { title: "TODO(copy)", text: "TODO(copy)" },
        { title: "TODO(copy)", text: "TODO(copy)" },
      ],
    },
    // TODO(copy): Replace this contact information heading with approved copy.
    informationHeading: "Get in touch",
    // TODO(copy): Replace this social navigation label with approved copy.
    socialHeading: "Find us elsewhere",
    // TODO(copy): Replace this contact information label with approved copy.
    informationLabel: "Contact information",
    // TODO(copy): Replace this contact form label with approved copy.
    formLabel: "Project inquiry form",
    // TODO(copy): Replace the contact form title with approved copy.
    formTitle: "Start a conversation",
    fields: {
      // TODO(copy): Replace this form label with approved copy.
      name: "Name",
      // TODO(copy): Replace this form label with approved copy.
      email: "Email",
      // TODO(copy): Replace this form label with approved copy.
      services: "What do you need?",
      projectSize: "Project size (optional)",
      // TODO(copy): Replace this form label with approved copy.
      details: "Project details",
      // TODO(copy): Replace this form label with approved copy.
      honeypot: "Leave this field empty",
    },
    servicesOptions: [
      "Website",
      "Mobile app",
      "UI/UX design",
      "AI and automation",
      "Not sure yet",
    ],
    projectSizeOptions: ["Not sure yet", "Small", "Medium", "Large"],
    projectSizePlaceholder: "Select a size",
    // TODO(copy): Replace the submit button label with approved copy.
    submit: "Send inquiry",
    // TODO(copy): Replace the submitting button label with approved copy.
    submitting: "Sending…",
    // TODO(copy): Replace the retry button label with approved copy.
    retry: "Try again",
    validation: {
      // TODO(copy): Replace this validation message with approved copy.
      name: "Please enter your name.",
      // TODO(copy): Replace this validation message with approved copy.
      email: "Enter a valid email address.",
      // TODO(copy): Replace this validation message with approved copy.
      projectSize: "Choose a project size.",
      // TODO(copy): Replace this validation message with approved copy.
      details: "Tell us a little more about your project.",
    },
    // TODO(copy): Replace the generic request error with approved copy.
    error: "We could not send your inquiry. Please try again.",
    // TODO(copy): Replace this email fallback message with approved copy.
    errorContact: "If the issue continues, email us at",
    // TODO(copy): Replace the success confirmation with approved copy.
    success: "Thanks for reaching out. We will be in touch soon.",
    // TODO(copy): Replace this email subject with approved copy.
    emailSubject: "New Aptaflux project inquiry",
    emailFields: {
      // TODO(copy): Replace this email label with approved copy.
      name: "Name",
      // TODO(copy): Replace this email label with approved copy.
      email: "Email",
      // TODO(copy): Replace this email label with approved copy.
      services: "Services",
      projectSize: "Project size",
      // TODO(copy): Replace this email label with approved copy.
      details: "Project details",
    },
  },
  socials: [
    { href: "https://www.linkedin.com", label: "LinkedIn" },
    { href: "https://www.instagram.com", label: "Instagram" },
    { href: "", label: "GitHub" },
  ],
  whatsapp: { href: "", label: "WhatsApp" },
} as const;
