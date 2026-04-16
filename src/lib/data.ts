import { Github, Linkedin, Instagram } from "@/components/icons";

export const siteMetadata = {
  title: "Janick Braun | Portfolio",
  description: "Senior Frontend Developer & Founder from Munich.",
  author: "Janick Braun",
  siteUrl: "https://janickbraun.com", // Placeholder
};

export const personalInfo = {
  name: "Janick Braun",
  age: 19,
  location: "Munich",
  role: "Business Informatics Student & Founder",
  bio: "Hi, I'm Janick. 19, Business Informatics student & Founder from Munich.",
  aboutSnippet:
    "Currently in the 4th semester of my Bachelor's degree in Business Informatics at FOM Munich, I am concurrently completing a dual study program at Deutsche Telekom. Additionally, I am the founder and CEO of Janick Braun UG, where I translate my passion for software development into real, user-centric products.",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/janickbraun",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/janickbraun/",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/janick.brn",
      icon: Instagram,
    },
  ],
};

export type ProjectCategory = "software" | "agency" | "non-software";

export interface Project {
  slug?: string;
  title: string;
  description: string;
  longDescription?: string;
  url?: string;
  image: string; // Placeholder or true image path
  category: ProjectCategory;
  techStack?: string[];
  featured?: boolean; // Display on homepage
}

export const projects: Project[] = [
  // Software Projects
  {
    slug: "rapidtyper",
    title: "RapidTyper",
    description: "Multiplayer & Singleplayer typing speed test.",
    longDescription:
      "RapidTyper is a platform where users can test and improve their typing speed. The project includes both a single-player mode and an exciting multiplayer mode to compete with friends in real-time. Developed with a focus on performance and real-time synchronization.",
    url: "https://rapidtyper.com",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
    category: "software",
    techStack: ["React", "Node.js", "WebSockets"],
    featured: true,
  },
  {
    slug: "secondskate",
    title: "secondskate",
    description: "An app for skateboarders to facilitate the joint purchase of a pair of shoes.",
    longDescription:
      "secondskate solves a well-known problem in the skate community: often only one shoe gets ruined by griptape while the other remains intact. The app brings together skaters with opposite worn-out shoes (Goofy and Regular) to share new pairs efficiently and sustainably.",
    url: "https://secondskate.de",
    image: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?auto=format&fit=crop&q=80&w=1200",
    category: "software",
    techStack: ["Flutter", "Firebase", "Node.js"],
    featured: true,
  },
  {
    slug: "jukevote",
    title: "jukevote",
    description: "Democratic party music app with Spotify integration.",
    longDescription:
      "With jukevote, every guest becomes a DJ. The host creates a lobby, guests join via QR code or PIN and can suggest songs or vote on them. The songs with the most votes automatically go directly into the party's Spotify queue.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200",
    category: "software",
    techStack: ["Next.js", "Spotify API", "WebSockets"],
    featured: true,
  },
  {
    slug: "dangerous-digestion",
    title: "Dangerous Digestion",
    description: "Comic-style jump-and-run educational game (5th grade Biology).",
    longDescription:
      "An educational game for 5th graders in a comic style. The player controls a small human who has been eaten and must traverse the digestive tract. Along the way, there are interactive biology quizzes. The project makes school learning material experienceable in a playful way.",
    url: "https://dangerous-digestion.vercel.app",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
    category: "software",
    techStack: ["Phaser", "JavaScript"],
  },
  // Agency
  {
    title: "Grovider Agency",
    description: "Web agency for modern digital solutions.",
    longDescription:
      "Together with my co-founder Luis Baumer, we develop professional websites and digital solutions for small and medium-sized enterprises as Grovider Agency. Focus on conversion rate, design, and SEO.",
    url: "https://grovider.de",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    category: "agency",
  },
  // Non-Software
  {
    title: "Janick's Hairsalon",
    description: "Conducted over 150 haircuts as a self-taught barber.",
    longDescription:
      "In a space specifically set up in my old school, I cut the hair of over 150 fellow students and friends as a self-taught barber. Manual dexterity and an eye for detail away from the screen.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200",
    category: "non-software",
  },
  {
    title: "DIY Skatepark",
    description: "Private wooden skatepark, built together with my grandfather.",
    longDescription:
      "A real hands-on project: Rail, kicker, and ledge planned and built entirely from wood. A valuable lesson in project planning, structural engineering, and craftsmanship.",
    image: "https://images.unsplash.com/photo-1620302830882-628d0f1b2b3b?auto=format&fit=crop&q=80&w=1200",
    category: "non-software",
  },
];

export interface CVItem {
  id: string;
  role: string;
  organization: string;
  date: string;
  description: string;
  type: "experience" | "education" | "volunteer";
}

export const cvItems: CVItem[] = [
  // Professional Experience
  {
    id: "jb-ug",
    role: "Founder & CEO",
    organization: "Janick Braun UG",
    date: "Present",
    description: "Development of proprietary software products and platform solutions.",
    type: "experience",
  },
  {
    id: "telekom",
    role: "Dual Study Program",
    organization: "Deutsche Telekom",
    date: "Since 2022",
    description: "Practical periods in various tech teams within the corporation. Frontend development and software engineering.",
    type: "experience",
  },
  {
    id: "grovider",
    role: "Co-Founder",
    organization: "Grovider Agency",
    date: "Since 2021",
    description: "Concept, design, and development of websites for SMEs.",
    type: "experience",
  },
  // Education
  {
    id: "fom",
    role: "Bachelor of Science: Business Informatics",
    organization: "FOM University Munich",
    date: "Current (4th Semester)",
    description: "Dual study parallel to working at Telekom. Focus on Software Engineering, IT Management, and Business Administration.",
    type: "education",
  },
  {
    id: "gym-penzberg",
    role: "Abitur (High School Diploma)",
    organization: "Gymnasium Penzberg",
    date: "Until 2022",
    description: "General higher education entrance qualification.",
    type: "education",
  },
  // Volunteer
  {
    id: "schuelersprecher",
    role: "Student Representative",
    organization: "Gymnasium Penzberg",
    date: "2 Years",
    description: "Representation of the student body, organization of projects, and mediation between the administration and students.",
    type: "volunteer",
  },
  {
    id: "gruene-jugend",
    role: "Member",
    organization: "Grüne Jugend",
    date: "Past",
    description: "Political and social engagement at the local level.",
    type: "volunteer",
  },
];
