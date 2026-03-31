export interface Category {
  id: string;
  name: string;
  description: string;
}

export const CATEGORIES: Category[] = [

{
    id: "smart-lighting",
    name: "Smart Lighting",
    description: "Bulbs, strips & ambient lighting.",
    image: "products/smart lighting.png"
  },
  {
    id: "smart-switches-dimmers",
    name: "Smart Switches & Dimmers",
    description: "Wall switches, dimmers & scenes.",
    image: "products/smart switches.png"
  },
  {
    id: "smart-climate",
    label: "Smart Climate Control",
    description: "AC controllers, thermostats & sensors.",
    image: "products/climate control.png"
  },
  {
    id: "media-entertainment",
    label: "Entertainment & Media",
    description: "TV, speakers & streaming devices.",
    image: "products/entertainment.png"
  },
{
    id: "controllers-panels",
    label: "Controllers & Smart Panels",
    description: "Central control hubs & panels.",
    image: "products/smart-controller.png"
  },
  {
    id: "smart-security",
    label: "Smart Security & Surveillance",
    description: "Cameras, locks & sensors.",
    image: "products/smart-security.png"
  },
  {
    id: "energy-management",
    label: "Smart Energy Management",
    description: "Smart plugs, meters & monitoring.",
    image: "products/energy-management.png"
  },
  {
    id: "home-comfort",
    label: "Smart Home Comfort",
    description: "Shades, diffusers & ambiance.",
    image: "products/home-comfort.png"
  },
  {
    id: "cleaning-maintenance",
    label: "Smart Cleaning & Maintenance",
    description: "Robot vacuums & tools.",
    image: "products/cleaning.png"
  },
  {
    id: "gardening-outdoors",
    label: "Smart Gardening & Outdoors",
    description: "Sprinklers, outdoor lights & more.",
    image: "products/gardening.png"
  },
  {
    id: "kitchen-appliances",
    label: "Smart Kitchen Appliances",
    description: "Cookers, coffee makers & more.",
    image: "products/smart kitchen.png"
  }
];