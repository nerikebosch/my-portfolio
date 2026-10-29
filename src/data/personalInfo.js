/**
 * PERSONAL INFORMATION & PROFILE DATA
 * 
 * Edit this file to customize your personal details, contact information,
 * social links, bio, and skills across the portfolio.
 */

export const personalInfo = {
  // Basic Info
  name: "Nerike Bosch",
  nickname: "Nerike",
  role: "Full-Stack Developer & Biomedical Engineer",
  tagline: "Building thoughtful, human-centered software and data-driven systems with craft and care.",
  
  // Status Badge
  status: "Available for new projects & opportunities",
  isAvailable: true,

  // Contact Information
  email: "nerike.bosch@example.com", // <-- Replace with your email
  location: "South Africa",          // <-- Replace with your city / country
  phone: "+27 00 000 0000",          // <-- Optional: Replace or leave empty

  // Social Links (Add your profile URLs here)
  socials: {
    github: "https://github.com/nerikebosch",
    linkedin: "https://www.linkedin.com/in/nerikebosch", // <-- Replace with your LinkedIn URL
    twitter: "https://x.com/yourhandle",                // <-- Optional: Replace or remove
    resume: "/resume.pdf",                              // <-- Add your resume file to public/ or external link
  },

  // About Section Details
  about: {
    heading: "Crafting software where logic meets imagination",
    intro: "I am a full-stack developer with a background in biomedical engineering and computer science. I love turning complex mathematical, scientific, and human problems into elegant, dependable digital experiences.",
    paragraphs: [
      "My work spans everything from clinical eye-tracking algorithms and retinal image processing to full-stack web platforms and embedded IoT weather monitors. I enjoy diving deep into technical challenges while maintaining a keen eye for clean architecture and human-friendly design.",
      "Inspired by the meticulous craftsmanship and warmth of Studio Ghibli, I believe every line of code, database query, and interface animation should feel intentional, grounded, and alive."
    ],
    highlights: [
      {
        icon: "🌱",
        title: "HealthTech & MedTech",
        description: "Designing solutions for diabetes telemetry, blood management, and ophthalmic imaging."
      },
      {
        icon: "🌲",
        title: "Full-Stack Systems",
        description: "Crafting resilient microservices, responsive web apps, and modern cloud pipelines."
      },
      {
        icon: "🍂",
        title: "Algorithms & Embedded",
        description: "From dynamic programming in bioinformatics to low-power C++ firmware on ESP32."
      }
    ]
  },

  // Core Skills / Tech Stack
  skillCategories: [
    {
      name: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "C++", "Kotlin", "Java", "SQL", "MATLAB"]
    },
    {
      name: "Frameworks & Libraries",
      skills: ["React.js", "Next.js", "Spring Boot", "Node.js", "Android SDK", "Flutter", "Tailwind CSS"]
    },
    {
      name: "Data & Systems",
      skills: ["PostgreSQL", "MySQL", "Firebase", "NumPy", "OpenCV", "Scikit-Image", "Git", "REST APIs"]
    }
  ],

  // Studio Ghibli style warm closing quote
  favoriteQuote: {
    text: "“We each need to find our own inspiration... sometimes it's not easy.”",
    author: "Kiki's Delivery Service"
  }
};

export default personalInfo;
