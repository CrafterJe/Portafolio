// app/lib/data.ts

export const personalInfo = {
  name: "Raul Juarez Suarez",
  title: "Back End Developer",
  bio: "Desarrollador apasionado por construir soluciones digitales reales. Me especializo en backend con Python y MongoDB, pero disfruto trabajar en todo el stack — desde apps móviles hasta herramientas web.",
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
    items: ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "Django", "Spring Boot", "PHP", "C#", "C++"],
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
    items: ["Git", "VS Code", "Visual Studio", "Electron.js", "JWT"],
  },
];

export const projects = [
  {
    id: 1,
    title: "SkillSwap",
    description: "App móvil de intercambio de habilidades de forma gratuita. Conecta personas que quieren aprender y enseñar sin costo. Disponible en Google Play.",
    image: "/projects/skillswap.png",
    tags: ["React", "Python", "Uvicorn", "MongoDB"],
    github: "https://github.com/CrafterJe/Frontend-SkillSwap",
    live: "https://play.google.com/store/apps/details?id=com.crafterje.skillswap&pcampaignid=web_share",
    featured: true,
  },
  {
    id: 2,
    title: "Clash of Clans War Tracker",
    description: "Sistema completo de gestión y análisis de guerras de Clash of Clans. Incluye métricas de desempeño, sistema de roles, historial de cambios y exportación a Excel.",
    image: "/projects/wartracker.png",
    tags: ["Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
    github: "https://github.com/CrafterJe/Clash-War-Tracker",
    live: "https://clash-war-tracker.up.railway.app/",
    featured: false,
  },
  {
    id: 3,
    title: "Telecomunicaciones",
    description: "Aplicación web para gestión de servicios telecom. Administra clientes, planes, contratos y seguimiento de servicios con arquitectura REST.",
    image: "/projects/telecom.png",
    tags: ["Angular 19", "Spring Boot", "MongoDB", "REST API", "Python"],
    github: "",
    live: "https://telecomunicaciones-angular.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    title: "ASCII Converter",
    description: "Web app que convierte imágenes y GIFs a arte ASCII con vista previa en tiempo real y exportación.",
    image: "/projects/ascii.png",
    tags: ["React", "Vite", "Tailwind CSS", "Canvas API"],
    github: "https://github.com/CrafterJe/Convert-Into-ASCII",
    live: "",
    featured: false,
  },
  {
    id: 5,
    title: "Popular Opinion",
    description: "Juego de preguntas tipo concurso inspirado en programas de TV. Permite crear, editar, guardar y cargar partidas localmente.",
    image: "/projects/popularopinion.png",
    tags: ["Electron", "Node.js", "JavaScript", "Bootstrap 5"],
    github: "https://github.com/CrafterJe/Popular-Opinion",
    live: "",
    featured: false,
  },
  {
    id: 6,
    title: "Compresser",
    description: "Herramienta para comprimir, estructurar y optimizar contenido de forma eficiente dentro de flujos de trabajo específicos.",
    image: "/projects/compresser.png",
    tags: ["Electron.js", "Node.js", "Python", "Pillow", "PyMuPDF"],
    github: "https://github.com/CrafterJe/Compresser",
    live: "",
    featured: false,
  },
];