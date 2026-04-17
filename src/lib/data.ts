import { Github, Linkedin, Instagram, YouTube } from "@/components/icons";

// Calculate age dynamically based on birthday (19.08.2006)
const birthDate = new Date(2006, 7, 19);
const today = new Date();
let currentAge = today.getFullYear() - birthDate.getFullYear();
const monthDiff = today.getMonth() - birthDate.getMonth();
if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
  currentAge--;
}

export const siteMetadata = {
  title: "Janick Braun | Portfolio",
  description: "Fullstack Developer & Founder from Munich.",
  author: "Janick Braun",
  siteUrl: "https://portfolio.janickbraun.com", // Updated by user
};

export const personalInfo = {
  name: "Janick Braun",
  age: currentAge,
  location: "Munich",
  role: "Business Informatics Student & Founder",
  email: "janick@grovider.de",
  phone: "+49 (0) 160 98640952",
  bio: `Hi, I'm Janick. ${currentAge}, Business Informatics student & Founder from Munich.`,
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
    {
      name: "YouTube",
      url: "https://www.youtube.com/@janickbraun",
      icon: YouTube,
    },
  ],
};

export type ProjectCategory = "software" | "agency" | "short-film" | "craftsmanship";

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
  youtubeId?: string; // Add youtubeId for video showcase
}

export interface Hobby {
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  category: "Sports" | "Tech" | "Creative";
  externalLink?: string;
  details?: string[];
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
    techStack: ["Flutter", "Supabase", "Node.js"],
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
    techStack: ["React.js", "Spotify API", "WebSockets"],
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
    techStack: ["Unity", "C#"],
  },
  // Agency
  {
    slug: "grovider-agency",
    title: "Grovider Agency",
    description: "Web agency for modern digital solutions.",
    longDescription:
      "Together with my co-founder Luis Baumer, we develop professional websites and digital solutions for small and medium-sized enterprises as Grovider Agency. Focus on conversion rate, design, and SEO.",
    url: "https://grovider.de",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    category: "agency",
  },
  {
    slug: "penzberg-maxkron",
    title: "EC Penzberg & Maxkron",
    description: "Official website of the Eisstockclub Penzberg & Maxkron.",
    longDescription:
      "Design and development of the official website for the Eisstockclub Penzberg & Maxkron, realized through Grovider Agency. The site was built with WordPress to allow the club easy content management.",
    url: "https://ec-penzberg-maxkron.de",
    image: "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&q=80&w=1200",
    category: "agency",
    techStack: ["WordPress", "Grovider Agency"],
  },
  // Non-Software
  {
    slug: "kampf-auf-tauris",
    title: "Kampf auf Tauris",
    description: "YouTube short film inspired by Goethe's Iphigenie auf Tauris.",
    longDescription:
      "A short film project created for German class, adapting Goethe's classic drama 'Iphigenie auf Tauris' into a modern cinematic format.",
    url: "https://www.youtube.com/watch?v=Q6y3fdxzkKk",
    image: "https://img.youtube.com/vi/Q6y3fdxzkKk/maxresdefault.jpg",
    category: "short-film",
    youtubeId: "Q6y3fdxzkKk",
    featured: true,
  },
  {
    slug: "janicks-hairsalon",
    title: "Janick's Hairsalon",
    description: "Conducted over 150 haircuts as a self-taught barber.",
    longDescription:
      "In a space specifically set up in my old school, I cut the hair of over 150 fellow students and friends as a self-taught barber. Manual dexterity and an eye for detail away from the screen.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200",
    category: "craftsmanship",
  },
  {
    slug: "diy-skatepark",
    title: "DIY Skatepark",
    description: "Private wooden skatepark, built together with my grandfather.",
    longDescription:
      "A real hands-on project: Rail, kicker, and ledge planned and built entirely from wood. A valuable lesson in project planning, structural engineering, and craftsmanship.",
    image: "https://images.unsplash.com/photo-1620302830882-628d0f1b2b3b?auto=format&fit=crop&q=80&w=1200",
    category: "craftsmanship",
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
    description: "Practical periods in various tech teams within the corporation. Fullstack development and software engineering.",
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

export const hobbies: Hobby[] = [
  {
    slug: "skating",
    name: "Skating",
    description: "Cruising and technical tricks on the board.",
    longDescription: "Skating is more than just a sport for me; it's a way of life. I love the technical challenge of learning new tricks and the freedom of just cruising through the city. It has taught me perseverance and how to look at the urban environment from a different perspective.",
    image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?auto=format&fit=crop&q=80&w=800",
    category: "Sports",
  },
  {
    slug: "surfing",
    name: "Surfing",
    description: "Catching waves and enjoying the ocean.",
    longDescription: "There's nothing quite like the feeling of being in the ocean and catching a wave. Surfing connects me with nature and provides a perfect balance to my digital work life. It requires patience, strength, and a deep respect for the water.",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=800",
    category: "Sports",
  },
  {
    slug: "wakeboarding",
    name: "Wakeboarding",
    description: "Action on the water with cable or boat.",
    longDescription: "Wakeboarding is my go-to summer activity. Whether it's at a cable park or behind a boat, I love the adrenaline and the opportunity to push my limits on the water.",
    image: "https://images.unsplash.com/photo-1533230408708-8f9f91d1235a?auto=format&fit=crop&q=80&w=800",
    category: "Sports",
  },
  {
    slug: "snowboarding",
    name: "Snowboarding",
    description: "Mountain peaks and fresh powder.",
    longDescription: "Winter belongs to the mountains. Snowboarding allows me to explore the alpine landscape and enjoy the speed and flow of riding down a slope covered in fresh powder.",
    image: "https://images.unsplash.com/photo-1495554698253-681539e9ea84?auto=format&fit=crop&q=80&w=800",
    category: "Sports",
  },
  {
    slug: "golfing",
    name: "Golfing",
    description: "Precision and focus on the green.",
    longDescription: "Golf is a game of extreme precision and mental focus. I enjoy the quiet concentration required for every shot and the beauty of the well-maintained greens.",
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=800",
    category: "Sports",
  },
  {
    slug: "swimming",
    name: "Swimming",
    description: "Full body workout and water love.",
    image: "https://images.unsplash.com/photo-1530549387631-fbb129c1b027?auto=format&fit=crop&q=80&w=800",
    category: "Sports",
  },
  {
    slug: "hiking",
    name: "Hiking",
    description: "Exploring trails and mountain views.",
    image: "https://images.unsplash.com/photo-1551632432-c7d5194f1473?auto=format&fit=crop&q=80&w=800",
    category: "Sports",
  },
  {
    slug: "programming",
    name: "Programming",
    description: "Creating software and solving logic puzzles.",
    longDescription: "Programming is both my profession and my passion. I love the process of taking an idea and turning it into a working product through code. It's a continuous journey of learning and problem-solving.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    category: "Tech",
  },
  {
    slug: "video-editing",
    name: "Video Editing",
    description: "Storytelling through moving pictures.",
    longDescription: "Video editing is where I combine my creative and technical skills. I enjoy the process of assembly, color grading, and sound design to create a compelling story.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
    category: "Creative",
  },
  {
    slug: "cinema",
    name: "Cinema / Movies",
    description: "Passionate about cinematography and storytelling.",
    longDescription: "I've always been fascinated by the power of movies. I'm deep into cinema history and modern storytelling, always looking for inspiration in cinematography and direction.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
    category: "Creative",
    externalLink: "https://letterboxd.com/janickbraun",
  },
];
