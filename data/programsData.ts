import { GraduationCap, Clock, DollarSign, BookOpen, LucideIcon } from "lucide-react";

export const programs = [
  {
    id: 1,
    name: "BSN (Bachelor of Science in Nursing)",
    icon: GraduationCap,
    description: "Comprehensive 4-year nursing degree program providing advanced clinical skills, theoretical knowledge, and professional development for aspiring registered nurses.",
    duration: "4 Years",
    eligibility: "F.Sc Pre-Medical with 50% marks",
    features: [
      "DUHS Affiliated",
      "Clinical Rotations",
      "Modern Labs",
      "Experienced Faculty"
    ],
    href: "/programs/bsn"
  },
  {
    id: 2,
    name: "CNA (Certified Nursing Assistant)",
    icon: BookOpen,
    description: "Intensive 2-year certification program focused on fundamental nursing skills, patient care techniques, and practical healthcare training for entry-level nursing positions.",
    duration: "2 Years",
    eligibility: "Matriculation with Science",
    features: [
      "Hands-on Training",
      "Quick Career Start",
      "Industry Recognized",
      "Job Placement Support"
    ],
    href: "/programs/cna"
  }
];
