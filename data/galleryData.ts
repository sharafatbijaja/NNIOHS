/**
 * Gallery Categories
 * Different categories for filtering gallery items
 */
export const galleryCategories = [
  { id: "campus", name: "Campus Photos" },
  { id: "labs", name: "Skills Lab & Labs" },
  { id: "clinical", name: "Clinical Training" },
  { id: "events", name: "Events & Celebrations" },
  { id: "student-life", name: "Student Life" },
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
    id: "campus-main",
    title: "Main Campus Building",
    description: "Beautiful view of our modern campus building with state-of-the-art facilities.",
    image: "/images/p1.jpg",
    category: "campus",
    featured: true,
  },
  {
    id: "skills-lab-1",
    title: "Nursing Skills Lab",
    description: "Advanced nursing skills lab equipped with modern medical simulators and equipment.",
    image: "/images/p2.jpg",
    category: "labs",
    featured: true,
  },
  {
    id: "clinical-training-1",
    title: "Clinical Rotation",
    description: "Students gaining hands-on experience during clinical rotation at Civil Hospital.",
    image: "/images/p3.jpg",
    category: "clinical",
    featured: true,
  },
  {
    id: "nurses-day-2025",
    title: "International Nurses Day 2025",
    description: "Celebrating International Nurses Day with our dedicated nursing students and faculty.",
    image: "/images/p4.jpg",
    category: "events",
    featured: true,
  },
  {
    id: "student-life-1",
    title: "Student Activities",
    description: "Students participating in various extracurricular activities and workshops.",
    image: "/images/p5.jpg",
    category: "student-life",
    featured: true,
  },
  {
    id: "campus-library",
    title: "Library & Computer Lab",
    description: "Modern library with extensive collection and computer lab for research and learning.",
    image: "/images/p6.jpg",
    category: "campus",
  },
  {
    id: "anatomy-lab",
    title: "Anatomy & Physiology Lab",
    description: "Well-equipped anatomy lab with models and specimens for practical learning.",
    image: "/images/p1.jpg",
    category: "labs",
  },
  {
    id: "clinical-hands-on",
    title: "Hands-on Training",
    description: "Students practicing patient care under expert supervision during clinical training.",
    image: "/images/p2.jpg",
    category: "clinical",
  },
  {
    id: "graduation-ceremony",
    title: "Graduation Ceremony 2025",
    description: "Proud moment as our nursing graduates receive their degrees and certificates.",
    image: "/images/p3.jpg",
    category: "events",
  },
  {
    id: "group-study",
    title: "Group Study Session",
    description: "Students collaborating and learning together in our modern study areas.",
    image: "/images/p4.jpg",
    category: "student-life",
  },
  {
    id: "smart-classroom",
    title: "Smart Classroom",
    description: "Technology-enabled smart classroom with multimedia learning resources.",
    image: "/images/p5.jpg",
    category: "campus",
  },
  {
    id: "simulation-training",
    title: "Simulation Training",
    description: "Advanced simulation training for real-world medical scenarios.",
    image: "/images/p6.jpg",
    category: "labs",
  },
  {
    id: "hospital-affiliation",
    title: "Hospital Affiliation",
    description: "Our students training at Dr. Ruth K.M. Pfau Civil Hospital.",
    image: "/images/p1.jpg",
    category: "clinical",
  },
  {
    id: "workshop-seminar",
    title: "Workshop & Seminar",
    description: "Educational workshop on advanced nursing techniques and patient care.",
    image: "/images/p2.jpg",
    category: "events",
  },
  {
    id: "sports-day",
    title: "Annual Sports Day",
    description: "Students showcasing their athletic talents during annual sports day.",
    image: "/images/p3.jpg",
    category: "student-life",
  },
];
