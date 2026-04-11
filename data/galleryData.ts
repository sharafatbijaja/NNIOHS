/**
 * Gallery Categories
 * Different categories for filtering gallery items
 */
export const galleryCategories = [
  { id: "photography", name: "Photography" },
  { id: "design", name: "Design" },
  { id: "branding", name: "Branding" },
  { id: "illustration", name: "Illustration" },
  { id: "3d-art", name: "3D Art" },
];

/**
 * Gallery Item Interface
 * Type definition for gallery items
 */
export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
}

/**
 * Gallery Items
 * Collection of visual works and creative pieces
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "sunset-photography",
    title: "Golden Hour",
    description: "Stunning sunset photography capturing nature's beauty at its peak.",
    image: "/images/p1.jpg",
    category: "photography",
    featured: true,
  },
  {
    id: "brand-identity",
    title: "Modern Brand Identity",
    description: "Complete brand identity design for a tech startup.",
    image: "/images/p2.jpg",
    category: "branding",
    featured: true,
  },
  {
    id: "ui-design",
    title: "Mobile App UI",
    description: "Clean and intuitive mobile app interface design.",
    image: "/images/p3.jpg",
    category: "design",
  },
  {
    id: "digital-art",
    title: "Abstract Digital Art",
    description: "Creative digital artwork exploring color and form.",
    image: "/images/p4.jpg",
    category: "illustration",
  },
  {
    id: "product-render",
    title: "Product 3D Render",
    description: "Photorealistic 3D product visualization.",
    image: "/images/p5.jpg",
    category: "3d-art",
  },
  {
    id: "portrait",
    title: "Portrait Photography",
    description: "Professional portrait photography with dramatic lighting.",
    image: "/images/p6.jpg",
    category: "photography",
  },
  {
    id: "logo-design",
    title: "Minimalist Logo",
    description: "Clean and modern logo design for a fashion brand.",
    image: "/images/p1.jpg",
    category: "branding",
  },
  {
    id: "web-design",
    title: "E-commerce Website",
    description: "Modern e-commerce website design with focus on UX.",
    image: "/images/p2.jpg",
    category: "design",
  },
  {
    id: "character-design",
    title: "Character Illustration",
    description: "Detailed character illustration for a game project.",
    image: "/images/p3.jpg",
    category: "illustration",
  },
  {
    id: "architecture-render",
    title: "Architecture Visualization",
    description: "3D architectural render of a modern building.",
    image: "/images/p4.jpg",
    category: "3d-art",
  },
  {
    id: "landscape",
    title: "Mountain Landscape",
    description: "Breathtaking mountain landscape photography.",
    image: "/images/p5.jpg",
    category: "photography",
  },
  {
    id: "packaging-design",
    title: "Product Packaging",
    description: "Elegant packaging design for luxury products.",
    image: "/images/p6.jpg",
    category: "branding",
  },
  {
    id: "dashboard-design",
    title: "Analytics Dashboard",
    description: "Data visualization dashboard with clean UI.",
    image: "/images/p1.jpg",
    category: "design",
  },
  {
    id: "fantasy-art",
    title: "Fantasy World",
    description: "Imaginative fantasy illustration with rich details.",
    image: "/images/p2.jpg",
    category: "illustration",
  },
  {
    id: "interior-design",
    title: "Interior 3D Render",
    description: "Photorealistic interior design visualization.",
    image: "/images/p3.jpg",
    category: "3d-art",
  },
  {
    id: "street-photography",
    title: "Urban Life",
    description: "Candid street photography capturing city life.",
    image: "/images/p4.jpg",
    category: "photography",
  },
];
