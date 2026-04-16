import { Github, Linkedin, Instagram } from "@/components/icons";

export const siteMetadata = {
  title: "Janick Braun | Portfolio",
  description: "Senior Frontend-Entwickler & Gründer aus München.",
  author: "Janick Braun",
  siteUrl: "https://janickbraun.com", // Placeholder
};

export const personalInfo = {
  name: "Janick Braun",
  age: 19,
  location: "München",
  role: "Wirtschaftsinformatiker & Gründer",
  bio: "Hi, ich bin Janick. 19, Wirtschaftsinformatiker & Gründer aus München.",
  aboutSnippet:
    "Aktuell im 4. Semester meines Bachelor-Studiums in Wirtschaftsinformatik an der FOM München, absolviere ich parallel ein duales Studium bei der Deutschen Telekom. Zudem bin ich Gründer und Geschäftsführer der Janick Braun UG, wo ich meine Leidenschaft für Software-Entwicklung in reale, nutzerzentrierte Produkte umsetze.",
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
    description: "Multiplayer & Singleplayer Tippgeschwindigkeits-Test.",
    longDescription:
      "RapidTyper ist eine Plattform, auf der Nutzer ihre Tippgeschwindigkeit testen und verbessern können. Das Projekt umfasst sowohl einen Singleplayer- als auch einen spannenden Multiplayer-Modus, um sich mit Freunden in Echtzeit zu messen. Entwickelt mit Fokus auf Performance und Echtzeit-Synchronisation.",
    url: "https://rapidtyper.com",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
    category: "software",
    techStack: ["React", "Node.js", "WebSockets"],
    featured: true,
  },
  {
    slug: "secondskate",
    title: "secondskate",
    description: "App für Skateboarder zum gemeinsamen Kauf eines Schuhpaars.",
    longDescription:
      "secondskate löst ein bekanntes Problem in der Skate-Community: Oft geht nur ein Schuh durch Griptape kaputt, während der andere intakt bleibt. Die App führt Skater mit entgegengesetzten kaputten Schuhen zusammen (Goofy und Regular), um neue Paare effizient und nachhaltig zu teilen.",
    url: "https://secondskate.de",
    image: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?auto=format&fit=crop&q=80&w=1200",
    category: "software",
    techStack: ["Flutter", "Firebase", "Node.js"],
    featured: true,
  },
  {
    slug: "jukevote",
    title: "jukevote",
    description: "Demokratische Party-Musik-App mit Spotify-Integration.",
    longDescription:
      "Mit jukevote wird jeder Gast zum DJ. Der Host erstellt eine Lobby, Gäste treten via QR-Code oder Pin bei und können Songs vorschlagen oder darüber abstimmen. Die Songs mit den meisten Votes landen automatisch direkt in der Spotify-Warteschlange der Party.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200",
    category: "software",
    techStack: ["Next.js", "Spotify API", "WebSockets"],
    featured: true,
  },
  {
    slug: "dangerous-digestion",
    title: "Dangerous Digestion",
    description: "Comic-Stil Jump-and-Run Lernspiel (Biologie 5. Klasse).",
    longDescription:
      "Ein Edu-Game für 5. Klässler im Comic-Stil. Der Spieler steuert einen kleinen Menschen, der gegessen wurde und den Verdauungstrakt durchqueren muss. Auf dem Weg gibt es interaktive Biologie-Quizzes. Das Projekt macht den Lernstoff der Schule spielerisch erfahrbar.",
    url: "https://dangerous-digestion.vercel.app",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
    category: "software",
    techStack: ["Phaser", "JavaScript"],
  },
  // Agency
  {
    title: "Grovider Agency",
    description: "Webagentur für moderne digitale Lösungen.",
    longDescription:
      "Gemeinsam mit meinem Co-Founder Luis Baumer entwickeln wir als Grovider Agency professionelle Websites und digitale Lösungen für kleine und mittelständische Unternehmen. Fokus auf Conversion-Rate, Design und SEO.",
    url: "https://grovider.de",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    category: "agency",
  },
  // Non-Software
  {
    title: "Janick's Hairsalon",
    description: "Über 150 Haarschnitte als Autodidakt durchgeführt.",
    longDescription:
      "In einem eigens eingerichteten Raum in meiner alten Schule habe ich als Autodidakt über 150 Mitschülern und Freunden die Haare geschnitten. Handwerkliches Geschick und Auge für Details abseits des Bildschirms.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200",
    category: "non-software",
  },
  {
    title: "DIY Skatepark",
    description: "Eigener Skatepark aus Holz, gemeinsam mit meinem Opa gebaut.",
    longDescription:
      "Ein echtes Handwerksprojekt: Rail, Kicker und Ledge komplett selbst geplant und aus Holz gebaut. Eine wertvolle Lektion in Projektplanung, Statik und handwerklicher Umsetzung.",
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
  // Berufserfahrung
  {
    id: "jb-ug",
    role: "Gründer & Geschäftsführer",
    organization: "Janick Braun UG",
    date: "Heute",
    description: "Entwicklung eigener Software-Produkte und Plattform-Lösungen.",
    type: "experience",
  },
  {
    id: "telekom",
    role: "Duales Studium",
    organization: "Deutsche Telekom",
    date: "Seit 2022",
    description: "Praktische Phasen in verschiedenen Tech-Teams des Konzerns. Frontend-Entwicklung und Software-Engineering.",
    type: "experience",
  },
  {
    id: "grovider",
    role: "Co-Founder",
    organization: "Grovider Agency",
    date: "Seit 2021",
    description: "Konzeption, Design und Entwicklung von Websites für KMUs.",
    type: "experience",
  },
  // Ausbildung
  {
    id: "fom",
    role: "Bachelor of Science: Wirtschaftsinformatik",
    organization: "FOM Hochschule München",
    date: "Aktuell (4. Semester)",
    description: "Duales Studium parallel zur Tätigkeit bei der Telekom. Fokus auf Software Engineering, IT-Management und BWL.",
    type: "education",
  },
  {
    id: "gym-penzberg",
    role: "Abitur",
    organization: "Gymnasium Penzberg",
    date: "Bis 2022",
    description: "Allgemeine Hochschulreife.",
    type: "education",
  },
  // Ehrenamt
  {
    id: "schuelersprecher",
    role: "Schülersprecher",
    organization: "Gymnasium Penzberg",
    date: "2 Jahre",
    description: "Vertretung der Schülerschaft, Organisation von Projekten und Vermittlung zwischen Direktion und Schülern.",
    type: "volunteer",
  },
  {
    id: "gruene-jugend",
    role: "Mitglied",
    organization: "Grüne Jugend",
    date: "Vergangenheit",
    description: "Politisches und gesellschaftliches Engagement auf lokaler Ebene.",
    type: "volunteer",
  },
];
