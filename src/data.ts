export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  tag: string;
  art: "coffee" | "latte" | "dessert";
};

export const menuItems: MenuItem[] = [
  {
    id: "espresso",
    name: "Signature Espresso",
    description:
      "A bold double shot of our house blend — dark chocolate, toasted hazelnut and a velvety crema.",
    price: "$3.50",
    tag: "Hot",
    art: "coffee",
  },
  {
    id: "cappuccino",
    name: "Classic Cappuccino",
    description:
      "Perfectly balanced espresso with steamed milk and a thick cloud of micro-foam, dusted with cocoa.",
    price: "$4.80",
    tag: "Hot",
    art: "latte",
  },
  {
    id: "caramel-latte",
    name: "Caramel Silk Latte",
    description:
      "Slow-pulled espresso layered with silky milk and our house-made salted caramel syrup.",
    price: "$5.60",
    tag: "Favorite",
    art: "latte",
  },
  {
    id: "moka-cake",
    name: "Moka Layer Cake",
    description:
      "Three layers of espresso-soaked sponge wrapped in whipped coffee buttercream and cocoa crumble.",
    price: "$6.20",
    tag: "Dessert",
    art: "dessert",
  },
  {
    id: "croissant",
    name: "Butter Croissant",
    description:
      "Baked fresh every morning — 72-hour laminated dough with French butter, shatteringly crisp.",
    price: "$3.90",
    tag: "Bakery",
    art: "dessert",
  },
  {
    id: "tiramisu",
    name: "Tiramisu al Moka",
    description:
      "Mascarpone cream over espresso-dipped savoiardi, finished with dark cocoa and a hint of vanilla.",
    price: "$6.90",
    tag: "Dessert",
    art: "dessert",
  },
];

export type GalleryItem = {
  id: string;
  label: string;
  span: "tall" | "wide" | "normal";
  tone: string;
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", label: "Slow mornings", span: "tall", tone: "g-1" },
  { id: "g2", label: "Fresh pastries", span: "normal", tone: "g-2" },
  { id: "g3", label: "The roastery", span: "normal", tone: "g-3" },
  { id: "g4", label: "Cozy corners", span: "wide", tone: "g-4" },
  { id: "g5", label: "Hand-poured art", span: "normal", tone: "g-5" },
  { id: "g6", label: "Evening warm-up", span: "normal", tone: "g-6" },
];

export const openingHours = [
  { day: "Monday — Friday", time: "7:00 AM — 8:00 PM" },
  { day: "Saturday", time: "8:00 AM — 10:00 PM" },
  { day: "Sunday", time: "8:00 AM — 6:00 PM" },
];

export const contactInfo = {
  address: "128 Walnut Street, Downtown District, Portland, OR 97204",
  phone: "+1 (503) 555-0182",
  whatsapp: "https://wa.me/15035550182",
  email: "hello@mokacafe.com",
};
