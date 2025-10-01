import { Program, Service, Stats, Testimonial } from "@/types/types";
import { Heart, Shield, Users, Clock } from "lucide-react";

export const services: Service[] = [
  {
    icon: <Heart className="h-8 w-8 text-pink-500" />,
    title: "Loving Care",
    description:
      "Nurturing environment where every child feels loved, safe, and valued every single day.",
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-500" />,
    title: "Safe Environment",
    description:
      "State-of-the-art security systems & child-proofed facilities ensure maximum safety.",
  },
  {
    icon: <Users className="h-8 w-8 text-green-500" />,
    title: "Expert Staff",
    description:
      "Certified educators with years of experience in early childhood development.",
  },
  {
    icon: <Clock className="h-8 w-8 text-purple-500" />,
    title: "Flexible Hours",
    description:
      "Extended hours from 6 AM to 7 PM to accommodate working parents' schedules.",
  },
];

export const programs: Program[] = [
  {
    title: "Infant Care",
    age: "6 weeks - 12 months",
    description: "Gentle, individualized care for your precious little one",
    features: [
      "Flexible feeding schedules",
      "Diaper changing",
      "Tummy time",
      "Sensory play",
    ],
    color: "bg-pink-50 border-pink-200",
  },
  {
    title: "Toddler Program",
    age: "1 - 2 years",
    description: "Supporting first steps into independence and exploration",
    features: [
      "Potty training support",
      "Language development",
      "Social skills",
      "Creative play",
    ],
    color: "bg-blue-50 border-blue-200",
  },
  {
    title: "Preschool",
    age: "3 - 4 years",
    description: "School readiness through play-based learning",
    features: [
      "Pre-literacy skills",
      "Math concepts",
      "Art & music",
      "School preparation",
    ],
    color: "bg-green-50 border-green-200",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    content:
      "Little Stars has been incredible for our daughter Emily. She's learned so much and made wonderful friends. The teachers are amazing!",
    rating: 5,
    image: "👩‍💼",
  },
  {
    name: "Michael Chen",
    content:
      "As a single dad, finding quality childcare was crucial. The staff here treats my son like family. Couldn't be happier!",
    rating: 5,
    image: "👨‍💻",
  },
  {
    name: "Lisa Rodriguez",
    content:
      "The communication is outstanding. I get daily updates and photos of my twins. It gives me peace of mind at work.",
    rating: 5,
    image: "👩‍⚕️",
  },
];

export const stats: Stats[] = [
  {
    number: "15+",
    category: "Years Experience",
    color: "purple",
  },
  {
    number: "200+",
    category: "Happy Families",
    color: "pink",
  },
  {
    number: "1:4",
    category: "Teacher Ratio",
    color: "blue",
  },
  {
    number: "5★",
    category: "Parent Rating",
    color: "green",
  },
];

export const navItems : String[] =[
  'Home',
  'About',
  'Programs',
  'Reviews',
  'Contact'
]
