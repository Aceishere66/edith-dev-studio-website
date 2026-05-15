import { links } from "./links";

export const product = {
  studioName: "EDITH Dev Studio",
  name: "Upscaler Studio",
  headline: "A local-first AI upscaling studio for Windows.",
  primaryMessage:
    "Enhance images locally on Windows with a focused desktop workflow for creators, photographers, restoration work, and local-first AI users.",
  offer: {
    price: "€30",
    term: "lifetime",
    label: "€30 lifetime",
    publicPurchaseFlow: "Current public access is handled through the €30 lifetime license.",
    refundPolicy: "No refund after purchase"
  },
  trial: {
    plannedDays: 7,
    publicAvailable: false,
    downloadAvailable: false,
    statusLabel: "The public trial build is not available yet.",
    supportCta: "Contact support for availability questions.",
    zipStatus: "The public trial build is not available yet."
  },
  platform: "Windows",
  release: {
    path: "Path B",
    distribution: "Windows direct ZIP release",
    signed: false,
    unsignedNote:
      "The current Windows ZIP release is unsigned, so Windows may show a security warning during setup.",
    install: "Manual install",
    update: "Manual update",
    uninstall: "Manual uninstall"
  },
  workflows: {
    image: "Image workflows work out of the box.",
    video: "Video workflows require external FFmpeg.",
    videoShort: "Requires external FFmpeg"
  },
  audiences: [
    "creators",
    "photographers",
    "Windows users",
    "local-first AI power users",
    "old-photo restoration users",
    "image enhancement users",
    "video editors who can install FFmpeg"
  ],
  requirements: [
    "Windows desktop environment",
    "Manual ZIP download and setup",
    "External FFmpeg for video workflows",
    "Review setup notes before purchase"
  ],
  limitations: [
    "The current ZIP release is unsigned.",
    "Install, update, and uninstall are manual.",
    "Video workflows require FFmpeg before use.",
    "Refunds are not available after purchase.",
    "The public trial build is not available yet."
  ],
  support: {
    email: "contact@edithdevstudio.com",
    page: links.supportPage
  },
  routes: {
    product: links.productPage,
    support: links.supportPage,
    setupNotes: links.setupNotes
  }
} as const;
