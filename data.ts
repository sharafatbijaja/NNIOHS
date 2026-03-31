import {
  Briefcase,
  BookOpen,
  Building,
  ClipboardCheck,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Database,
  GitBranch,
  Globe,
  GraduationCap,
  HeartPulse,
  Hospital,
  Layers,
  Layout,
  Mail,
  MapPin,
  Palette,
  Phone,
  Server,
  Smartphone,
  Stethoscope,
  Terminal,
  Truck,
  Users,
  BedDouble,
  Bandage,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

export const stats = [
  { label: "Years Established", value: "7+" },
  { label: "Students Graduated", value: "500+" },
  { label: "Faculty Members", value: "20+" },
  { label: "Hospital Affiliates", value: "5+" },
];

export const highlights = [
  { icon: MapPin, text: "Karachi, Pakistan" },
  { icon: Briefcase, text: "DUHS Affiliated Program" },
  { icon: GraduationCap, text: "PNMC Recognized Institute" },
  { icon: Coffee, text: "Excellence in Nursing Education" },
];

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
  { icon: FaLinkedinIn, href: "https://facebook.com", label: "Facebook" },
  { icon: FaTwitter, href: "https://instagram.com", label: "Instagram" },
];

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
  { icon: FaLinkedin, href: "https://facebook.com", label: "Facebook" },
  { icon: FaTwitter, href: "https://instagram.com", label: "Instagram" },
  { icon: Mail, href: "mailto:naznursing456@gmail.com", label: "Email" },
];

export const projects = [
  {
    title: "BS Nursing Program",
    description:
      "4-year degree program affiliated with Dow University of Health Sciences, preparing professional nurses for healthcare leadership.",
    image: "/images/p1.jpg",
    techStack: ["DUHS", "PNMC", "4 Years", "Degree"],
    demoUrl: "/admissions",
    githubUrl: "/admissions",
  },
  {
    title: "CNA Diploma Program",
    description:
      "2-year Certified Nursing Assistant program focusing on basic patient care, vital signs, and clinical assistance skills.",
    image: "/images/p2.jpg",
    techStack: ["2 Years", "Diploma", "Clinical", "Certification"],
    demoUrl: "/admissions",
    githubUrl: "/admissions",
  },
  {
    title: "Clinical Training",
    description:
      "Hands-on training at Dr. Ruth K.M. Pfau Civil Hospital Karachi with exposure to all major medical departments.",
    image: "/images/p3.jpg",
    techStack: ["Civil Hospital", "Practical", "Rotations", "Experience"],
    demoUrl: "/facilities",
    githubUrl: "/facilities",
  },
  {
    title: "Modern Skills Lab",
    description:
      "State-of-the-art nursing skills lab equipped with modern mannequins and medical equipment for practical training.",
    image: "/images/p4.jpg",
    techStack: ["Equipment", "Mannequins", "Practice", "Safety"],
    demoUrl: "/facilities",
    githubUrl: "/facilities",
  },
  {
    title: "Student Hostel",
    description:
      "Separate hostel facilities for boys and girls with limited seats, providing safe and comfortable accommodation.",
    image: "/images/p5.jpg",
    techStack: ["Accommodation", "Security", "Limited Seats", "Comfort"],
    demoUrl: "/facilities",
    githubUrl: "/facilities",
  },
  {
    title: "Library & Resources",
    description:
      "Well-equipped library with nursing textbooks, medical journals, and digital resources for comprehensive learning.",
    image: "/images/p6.jpg",
    techStack: ["Books", "Journals", "Digital", "Research"],
    demoUrl: "/facilities",
    githubUrl: "/facilities",
  },
];

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
