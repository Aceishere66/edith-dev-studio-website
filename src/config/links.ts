export const externalLinks = {
  storefront: "https://edith-devstudio.lemonsqueezy.com/",
  instagram: "https://www.instagram.com/edith_dev_studio",
  xTwitter: "https://x.com/EDITH_DevStudio"
} as const;

export const links = {
  home: "/",
  products: "/products",
  productPage: "/products/upscaler-studio",
  productOverview: "/products/upscaler-studio#overview",
  productPricing: "/products/upscaler-studio#pricing",
  setupNotes: "/products/upscaler-studio#setup-notes",
  supportPage: "/support",
  supportContact: "/support#contact",
  supportSetup: "/support#setup",
  supportDownload: "/support#download",
  supportFfmpeg: "/support#ffmpeg",
  supportLicense: "/support#license",
  privacy: "/privacy",
  terms: "/terms",
  cookies: "/cookies",
  checkout: {
    href: externalLinks.storefront,
    provider: "Lemon Squeezy"
  },
  download: {
    href: "/support#download",
    publicZipAvailable: false
  },
  instagram: {
    href: externalLinks.instagram
  },
  xTwitter: {
    href: externalLinks.xTwitter
  }
} as const;
