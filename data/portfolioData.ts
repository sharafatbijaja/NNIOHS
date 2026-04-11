import { projects } from "../data";

/**
 * Portfolio Categories
 * Different categories for filtering portfolio items
 */
export const portfolioCategories = [
  { id: "web-development", name: "Web Development" },
  { id: "mobile-apps", name: "Mobile Apps" },
  { id: "ui-ux", name: "UI/UX Design" },
  { id: "ecommerce", name: "E-Commerce" },
  { id: "ai-ml", name: "AI & Machine Learning" },
];

/**
 * Portfolio Item Interface
 * Type definition for portfolio items
 */
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

/**
 * Portfolio Items
 * Extended portfolio data with categories and additional metadata
 */
export const portfolioItems: PortfolioItem[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    image: "/images/p1.jpg",
    category: "ecommerce",
    technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "task-management",
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, Kanban boards, and team analytics.",
    image: "/images/p2.jpg",
    category: "web-development",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator",
    description: "GPT-powered content creation platform for marketers with templates and workflow automation.",
    image: "/images/p3.jpg",
    category: "ai-ml",
    technologies: ["React", "Python", "OpenAI", "FastAPI", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "real-estate-platform",
    title: "Real Estate Platform",
    description: "Property listing platform with virtual tours, mortgage calculator, and agent booking system.",
    image: "/images/p4.jpg",
    category: "web-development",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Maps API", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    description: "Cross-platform mobile app for workout tracking, nutrition logging, and progress analytics.",
    image: "/images/p5.jpg",
    category: "mobile-apps",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "design-system",
    title: "Design System",
    description: "Comprehensive UI component library with documentation, theming, and accessibility features.",
    image: "/images/p6.jpg",
    category: "ui-ux",
    technologies: ["Figma", "Storybook", "React", "TypeScript", "CSS Modules"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "chatbot-platform",
    title: "AI Chatbot Platform",
    description: "Intelligent chatbot builder with NLP capabilities, multi-channel deployment, and analytics.",
    image: "/images/p1.jpg",
    category: "ai-ml",
    technologies: ["Python", "TensorFlow", "Node.js", "React", "WebSocket"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "food-delivery",
    title: "Food Delivery App",
    description: "On-demand food delivery platform with real-time tracking, payment integration, and restaurant management.",
    image: "/images/p2.jpg",
    category: "mobile-apps",
    technologies: ["Flutter", "Firebase", "Google Maps", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "dashboard-analytics",
    title: "Analytics Dashboard",
    description: "Business intelligence dashboard with data visualization, reporting, and predictive analytics.",
    image: "/images/p3.jpg",
    category: "web-development",
    technologies: ["Next.js", "D3.js", "Python", "PostgreSQL", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "brand-identity",
    title: "Brand Identity System",
    description: "Complete brand identity design including logo, color palette, typography, and brand guidelines.",
    image: "/images/p4.jpg",
    category: "ui-ux",
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    liveUrl: "https://example.com",
  },
  {
    id: "learning-platform",
    title: "E-Learning Platform",
    description: "Online learning management system with video courses, quizzes, certificates, and progress tracking.",
    image: "/images/p5.jpg",
    category: "web-development",
    technologies: ["Next.js", "MongoDB", "AWS S3", "Stripe", "WebRTC"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "social-media-app",
    title: "Social Media App",
    description: "Feature-rich social networking platform with posts, stories, messaging, and real-time notifications.",
    image: "/images/p6.jpg",
    category: "mobile-apps",
    technologies: ["React Native", "Firebase", "GraphQL", "Apollo"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];
