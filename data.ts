import {
  Briefcase,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Database,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Layout,
  Mail,
  MapPin,
  Palette,
  Phone,
  Server,
  Smartphone,
  Terminal,
  Braces,
  FileCode,
  PenTool,
  Monitor,
  Zap,
  Bot,
  Settings,
  ShoppingCart,
  CreditCard,
  BarChart3,
  Search,
  Target,
  TrendingUp,
  BookOpen,
  ClipboardCheck,
  Stethoscope,
  HeartPulse,
  Bandage,
  Users,
  Hospital,
  BedDouble,
  Truck,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

export const stats = [
   { label: "Years Established", value: "7+" },
  { label: "Students Graduated", value: "500+" },
  { label: "Faculty Members", value: "25+" },
  { label: "Hospital Affiliates", value: "5+" },
  // { label: "Years Experience", value: "8+" },
  // { label: "Projects Completed", value: "100+" },
  // { label: "Shopify Stores", value: "25+" },
  // { label: "AI Automations", value: "15+" },
];

export const highlights = [
   { icon: MapPin, text: "Karachi, Pakistan" },
  { icon: Briefcase, text: "DUHS Affiliated Program" },
  { icon: GraduationCap, text: "NPNMC Recognized Institute" },
  { icon: Coffee, text: "Excellence in Nursing Education" },
  // { icon: MapPin, text: "8+ years in full-stack, SEO and digital marketing" },
  // { icon: Briefcase, text: "Prompt engineering for AI content and automation" },
  // { icon: GraduationCap, text: "Next.js 16+ and custom platform experience" },
  // { icon: Coffee, text: "Fast delivery with quality, clarity and focus" },
];

// export const userReviewData = [
//   {
//     id: 1,
//     name: "John Doe",
//     profession: "Real Estate Agent",
//     userImage: "/images/u1.jpg",
//     review:
//       "A wonderful experience! The platform made it easy to find exactly what I needed. lorem ipsum dolor sit ame",
//   },
//   {
//     id: 2,
//     name: "Mike Smith",
//     profession: "Business Owner",
//     userImage: "/images/u2.jpg",
//     review:
//       "Great selection of properties and seamless process. Highly recommended for anyone looking to invest.",
//   },
//   {
//     id: 3,
//     name: "Alex Johnson",
//     profession: "Web developer",
//     userImage: "/images/u3.jpg",
//     review:
//       "The website helped me find my dream home quickly and hassle-free. Exceptional service!",
//   },
//   {
//     id: 4,
//     name: "Emily Clark",
//     profession: "Interior Designer",
//     userImage: "/images/u4.jpg",
//     review:
//       "Fantastic range of properties with clear details. The best platform for home and design inspiration!",
//   },
// ];

export const userReviewData = [
  {
    id: 1,
    name: "Ayesha Khan",
    profession: "BS Nursing Graduate",
    userImage: "/images/u1.jpg",
    review:
      "Excellent education and practical training at NNIOHS prepared me for a successful nursing career.",
  },
  {
    id: 2,
    name: "Fatima Ali",
    profession: "CNA Program Graduate",
    userImage: "/images/u2.jpg",
    review:
      "The faculty is highly qualified and supportive. Best decision to join NNIOHS for my nursing education.",
  },
  {
    id: 3,
    name: "Ahmed Hassan",
    profession: "Healthcare Professional",
    userImage: "/images/u3.jpg",
    review:
      "NNIOHS graduates are well-prepared and skilled. We hire many of their students at our hospital.",
  },
  {
    id: 4,
    name: "Sara Ahmed",
    profession: "Nursing Student",
    userImage: "/images/u4.jpg",
    review:
      "Amazing clinical training opportunities and modern facilities make NNIOHS the best choice.",
  },
];


export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "naznursing456@gmail.com",
    href: "mailto:naznursing456@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0312-2815799",
    href: "tel:03122815799",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Karachi, Pakistan",
    href: "#",
  },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
];

// export const experiences = [
//   {
//     type: "work",
//     title: "Custom WordPress Developer / Digital Marketer",
//     company: "Techozean – PromaticsTech",
//     period: "May 2018 – Dec 2019",
//     description:
//       "Built custom WordPress websites, led SEO campaigns, and delivered responsive, conversion-focused digital experiences.",
//     technologies: ["WordPress", "SEO", "Responsive Design", "Team Leadership"],
//   },
//   {
//     type: "work",
//     title: "Web Developer / Digital Marketing Associate",
//     company: "QuickStart (US Company)",
//     period: "Apr 2017 – Jul 2018",
//     description:
//       "Collaborated with international teams to optimize landing pages, fix technical SEO issues, and improve page speed and UX.",
//     technologies: ["Magento", "Unbounce", "Technical SEO", "Analytics"],
//   },
//   {
//     type: "work",
//     title: "Frontend Developer – UI/UX",
//     company: "Minibig Technologies",
//     period: "Oct 2016 – Jan 2017",
//     description:
//       "Converted PSD designs into responsive HTML/CSS and Bootstrap layouts while maintaining SEO-friendly markup and accessibility.",
//     technologies: ["HTML5", "CSS3", "Bootstrap", "Cross-browser Testing"],
//   },
//   {
//     type: "work",
//     title: "Accounts & Payroll Manager",
//     company: "Frontier Constabulary Foundation Security Services",
//     period: "2014 – 2015",
//     description:
//       "Managed payroll, budgeting and staff deployment before transitioning full-time into tech and digital media.",
//     technologies: ["Operations", "Payroll", "Reporting", "Team Coordination"],
//   },
// ];

export const experiences = [
  {
    type: "work",
    title: "Institute Establishment",
    company: "Naz Nursing Institute",
    period: "2017 - Present",
    description:
      "Established premier nursing education institution in Karachi under Waseem Welfare Trust, affiliated with DUHS and PNMC.",
    technologies: ["Education", "Healthcare", "Leadership", "Quality"],
  },
  {
    type: "work",
    title: "DUHS Affiliation",
    company: "Dow University of Health Sciences",
    period: "2018 - Present",
    description:
      "Achieved affiliation with Dow University of Health Sciences for Generic BS Nursing program, ensuring academic excellence.",
    technologies: ["Academic", "Partnership", "Excellence", "Recognition"],
  },
  {
    type: "education",
    title: "PNMC Recognition",
    company: "Pakistan Nursing Council",
    period: "2017 - Present",
    description:
      "Received full recognition from Pakistan Nursing & Midwifery Council, meeting all national education standards.",
    technologies: ["Accreditation", "Standards", "Compliance", "Quality"],
  },
  {
    type: "work",
    title: "Clinical Partnership",
    company: "Civil Hospital Karachi",
    period: "2019 - Present",
    description:
      "Established clinical training partnership with Dr. Ruth K.M. Pfau Civil Hospital for hands-on student training.",
    technologies: ["Clinical", "Training", "Partnership", "Practical"],
  },
  {
    type: "education",
    title: "BS Nursing Program Launch",
    company: "NNIOHS Academic Department",
    period: "2018 - Present",
    description:
      "Successfully launched 4-year Generic BS Nursing program with comprehensive curriculum and expert faculty.",
    technologies: ["Curriculum", "Faculty", "Program", "Success"],
  },
];




export const footerSocialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    image: "/images/p1.jpg",
    techStack: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, Kanban boards, and team analytics.",
    image: "/images/p2.jpg",
    techStack: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "AI Content Generator",
    description:
      "GPT-powered content creation platform for marketers with templates and workflow automation.",
    image: "/images/p3.jpg",
    techStack: ["React", "Python", "OpenAI", "FastAPI"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Real Estate Platform",
    description:
      "Property listing platform with virtual tours, mortgage calculator, and agent booking system.",
    image: "/images/p4.jpg",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Maps API"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Fitness Tracker",
    description:
      "Cross-platform mobile app for workout tracking, nutrition logging, and progress analytics.",
    image: "/images/p5.jpg",
    techStack: ["React Native", "Firebase", "Node.js", "Charts"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Learning Management System",
    description:
      "Educational platform with video streaming, quizzes, progress tracking, and certificates.",
    image: "/images/p6.jpg",
    techStack: ["Next.js", "Prisma", "AWS S3", "Stripe"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

// export const skillCategories = [
//   {
//     title: "Core Web",
//     skills: [
//       { name: "Next.js 16.2", icon: FileCode },
//       { name: "React", icon: Braces },
//       { name: "TypeScript", icon: FileCode },
//       { name: "HTML5", icon: Code2 },
//       { name: "CSS3 / Tailwind", icon: Palette },
//       { name: "Responsive UI", icon: Monitor },
//     ],
//   },
//   {
//     title: "AI & Automation",
//     skills: [
//       { name: "Prompt Engineering", icon: PenTool },
//       { name: "AI Content", icon: Bot },
//       { name: "Agent Automation", icon: Zap },
//       { name: "Local LLM Training", icon: Cpu },
//       { name: "Workflow APIs", icon: Settings },
//       { name: "SaaS App Models", icon: Cloud },
//     ],
//   },
//   {
//     title: "Platforms",
//     skills: [
//       { name: "WordPress", icon: Layout },
//       { name: "Shopify", icon: ShoppingCart },
//       { name: "WooCommerce", icon: ShoppingCart },
//       { name: "Stripe / PayPal", icon: CreditCard },
//       { name: "cPanel / WHM", icon: Server },
//       { name: "Cloud Hosting", icon: Cloud },
//     ],
//   },
//   {
//     title: "Marketing",
//     skills: [
//       { name: "SEO Strategy", icon: Search },
//       { name: "Conversion Funnels", icon: Target },
//       { name: "Landing Page Growth", icon: TrendingUp },
//       { name: "Google Ads / FB Ads", icon: BarChart3 },
//       { name: "Technical Audits", icon: Monitor },
//       { name: "Analytics", icon: BarChart3 },
//     ],
//   },
// ];
export const skillCategories = [
  {
    title: "Academic Programs",
    skills: [
      { name: "BS Nursing", icon: GraduationCap },
      { name: "CNA Program", icon: BookOpen },
      { name: "Post RN BSN", icon: ClipboardCheck },
      { name: "Diploma Courses", icon: Layers },
      { name: "Workshops", icon: Layout },
      { name: "Seminars", icon: Globe },
    ],
  },
  {
    title: "Clinical Skills",
    skills: [
      { name: "Patient Care", icon: Stethoscope },
      { name: "Emergency Care", icon: HeartPulse },
      { name: "Surgical Assistance", icon: Bandage },
      { name: "Pediatric Care", icon: Users },
      { name: "Maternal Health", icon: Hospital },
      { name: "Mental Health", icon: HeartPulse },
    ],
  },
  {
    title: "Facilities & Resources",
    skills: [
      { name: "Skills Lab", icon: Cpu },
      { name: "Computer Lab", icon: Server },
      { name: "Library", icon: BookOpen },
      { name: "Hostel", icon: BedDouble },
      { name: "Transport", icon: Truck },
      { name: "Hospital Training", icon: Hospital },
    ],
  },
];
export const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Perfect for small businesses",
    description: "Get your business online with a professional website and basic SEO setup.",
    features: [
      "Custom WordPress or Next.js website",
      "Responsive design (mobile-friendly)",
      "Basic SEO optimization",
      "Contact form integration",
      "Social media links",
      "1 month support",
      "Google Analytics setup",
      "Fast loading optimization",
    ],
    highlighted: false,
  },
  {
    id: "business",
    name: "Business",
    tagline: "Most popular choice",
    description: "Complete digital solution with advanced SEO and marketing features.",
    features: [
      "Everything in Starter",
      "E-commerce integration (Shopify/WooCommerce)",
      "Advanced SEO & content strategy",
      "Google Ads & Facebook Ads setup",
      "Email marketing integration",
      "3 months support",
      "Performance monitoring",
      "Monthly analytics report",
      "Backup & security setup",
    ],
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For large-scale projects",
    description: "Full-stack custom development with AI automation and priority support.",
    features: [
      "Everything in Business",
      "Custom Next.js 16+ full-stack app",
      "AI-powered content automation",
      "API integrations & automation",
      "Advanced analytics dashboard",
      "6 months priority support",
      "Dedicated project manager",
      "Custom CRM integration",
      "Multi-language support",
      "Scalable cloud infrastructure",
    ],
    highlighted: false,
  },
];

/**
 * Blog Posts Data
 * Blog posts for the blog section
 */
export const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.",
    image: "/images/p1.jpg",
    author: "Sharafat Bijaja",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Web Development",
  },
  {
    id: 2,
    title: "10 Essential Tips for Optimizing Your Website's Performance",
    excerpt: "Learn proven strategies to improve your website's speed, user experience, and search engine rankings.",
    image: "/images/p2.jpg",
    author: "Sarah Johnson",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Performance",
  },
  {
    id: 3,
    title: "Building Scalable Applications with Next.js and TypeScript",
    excerpt: "A comprehensive guide to creating maintainable and scalable web applications using modern technologies.",
    image: "/images/p3.jpg",
    author: "Mike Chen",
    date: "March 5, 2024",
    readTime: "10 min read",
    category: "Tutorial",
  },
  {
    id: 4,
    title: "The Power of AI in Modern Web Development",
    excerpt: "Discover how artificial intelligence is revolutionizing the way we build and interact with web applications.",
    image: "/images/p4.jpg",
    author: "Emily Davis",
    date: "February 28, 2024",
    readTime: "8 min read",
    category: "AI & ML",
  },
  {
    id: 5,
    title: "Mastering Responsive Design: Best Practices for 2024",
    excerpt: "Learn the latest techniques for creating beautiful, responsive designs that work on all devices.",
    image: "/images/p5.jpg",
    author: "Sharafat Bijaja",
    date: "February 20, 2024",
    readTime: "6 min read",
    category: "Design",
  },
  {
    id: 6,
    title: "SEO Strategies That Actually Work in 2024",
    excerpt: "Cut through the noise with proven SEO strategies that drive real results and organic traffic.",
    image: "/images/p6.jpg",
    author: "John Smith",
    date: "February 15, 2024",
    readTime: "9 min read",
    category: "SEO",
  },
];

/**
 * Team Members Data
 * Team members for the team section
 */
export const teamMembers = [
  {
    id: 1,
    name: "Sharafat Bijaja",
    role: "Full Stack Developer",
    image: "/images/user.jpg",
    bio: "Expert in Next.js, React, and modern web technologies with 8+ years of experience.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
      email: "mailto:sharafatbijaja@gmail.com",
    },
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    image: "/images/u1.jpg",
    bio: "Creating beautiful and intuitive user experiences with a focus on accessibility.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
      email: "mailto:sarah@example.com",
    },
  },
  {
    id: 3,
    name: "Mike Chen",
    role: "Backend Developer",
    image: "/images/u2.jpg",
    bio: "Building scalable and secure backend systems with modern technologies.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
      email: "mailto:mike@example.com",
    },
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Project Manager",
    image: "/images/u3.jpg",
    bio: "Ensuring smooth project delivery and client satisfaction with agile methodologies.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:emily@example.com",
    },
  },
];

/**
 * Partners Data
 * Partner companies and their logos
 */
export const partners = [
  { name: "TechCorp", logo: "TC", color: "from-blue-500 to-blue-600" },
  { name: "InnovateLabs", logo: "IL", color: "from-purple-500 to-purple-600" },
  { name: "DataFlow", logo: "DF", color: "from-green-500 to-green-600" },
  { name: "CloudNine", logo: "CN", color: "from-orange-500 to-orange-600" },
  { name: "NextGen", logo: "NG", color: "from-pink-500 to-pink-600" },
  { name: "SmartSolutions", logo: "SS", color: "from-cyan-500 to-cyan-600" },
];

/**
 * FAQ Data
 * Frequently asked questions
 */
export const faqData = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of services including web development, mobile app development, UI/UX design, SEO, digital marketing, AI solutions, cloud services, and IT consulting. Our team specializes in creating custom solutions tailored to your specific business needs.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while more complex applications can take 2-6 months. During our initial consultation, we'll provide you with a detailed timeline based on your specific requirements.",
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. After understanding your needs, we'll provide a transparent quote with no hidden costs. We believe in delivering value at competitive prices.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive post-launch support and maintenance packages. This includes regular updates, security patches, performance monitoring, and technical support. We ensure your digital assets remain secure and up-to-date.",
  },
  {
    question: "What technologies do you work with?",
    answer: "We work with modern technologies including Next.js, React, Vue.js, Node.js, Python, TypeScript, MongoDB, PostgreSQL, AWS, Azure, and more. We stay updated with the latest technologies to provide cutting-edge solutions.",
  },
  {
    question: "How do you ensure project quality?",
    answer: "We follow industry best practices and rigorous quality assurance processes. This includes code reviews, automated testing, performance optimization, and user acceptance testing. Our goal is to deliver flawless, high-quality solutions.",
  },
];
