export const SITE_NAME = "Cogni";

export const NAV_LINKS = [
  { label: 'Products', href: '/products' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Docs', href: 'https://docs.cogniliving.com/' },
];

export const HERO_CONTENT = {
  videoSrc: "/hero-bg/hero-bg.mp4",
  headline: "THE FUTURE OF SMART LIVING, PERFECTED",
  brandName: "COGNI",
  subheadline: "SMART SECURE SEAMLESS.",
  buttons: {
    primary: {
      text: "Shop Collection",
      href: "#shop"
    },
    secondary: {
      text: "Watch Demo",
      href: "#demo"
    }
  }
};

export const ABOUT_CONTENT = {
  badge: "About Cogni Smart Secure Seamless",
  titleMain: "Where Innovation",
  titleSub: " Meets Everyday Life",
  image: "/images/AboutUs.jpg",
  features: [
    {
      id: "privacy",
      title: "Privacy First",
      description: "Local AI processing. Your data stays secure within your home. No cloud dependency, no compromise on security.",
      gradient: "from-[#FF8A4C] to-orange-600",
      icon: "check"
    },
    {
      id: "control",
      title: "Seamless Control",
      description: "Intuitive interfaces that unify your lighting, HVAC, and security. Control your entire environment effortlessly.",
      gradient: "from-amber-400 to-[#FF8A4C]",
      icon: "bolt"
    },
    {
      id: "reliability",
      title: "Unmatched Reliability",
      description: "Engineered for the long haul. Cogni devices deliver consistent performance with industrial-grade standards you can trust.",
      gradient: "bg-[#FF8A4C]",
      icon: "heart"
    }
  ],
  ctaText: "Discover Our Story"
};

export const FOOTER_DATA = {
  brandDescription: "Transforming everyday spaces into intelligent environments. We engineer seamless, secure, and smart automation solutions for residential and commercial properties.",
  solutions: [
    { label: "Residential Automation", href: "#" },
    { label: "Commercial Security", href: "#" },
    { label: "Smart Lighting", href: "#" },
    { label: "Energy Management", href: "#" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Process", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Contact", href: "/#contact" },
  ],
  contact: {
    address: "Sangam Tower\n1st Floor, Opp. MI Road\nJaipur, 302001",
    email: "hello@cogni.com",
    phone: "+91 98765 43210",
  }
};
