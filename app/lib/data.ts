// app/lib/data.ts

export const personalInfo = {
  name: "Raul Juarez Suarez",
  title: "Back End Developer",
  bio: "Soy un desarrollador apasionado por crear experiencias digitales...",
  email: "raulsuarez0502@gmail.com",
  location: "Puebla, México",
  social: {
    github: "https://github.com/CrafterJe",
    linkedin: "https://linkedin.com/in/tuusuario",
  },
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "Vite"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Django", "PHP", "C#", "C++"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Dart", ".NET MAUI", "Android Studio"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "VS Code", "Visual Studio"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Nombre del Proyecto",
    description: "Descripción breve del proyecto y qué problema resuelve.",
    image: "/projects/proyecto1.png",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/tuusuario/proyecto",
    live: "https://tuproyecto.com",
    featured: true,
  },
];