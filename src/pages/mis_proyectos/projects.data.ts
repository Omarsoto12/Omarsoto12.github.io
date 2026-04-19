export type PortfolioProject = {
  id: string;
  name: string;
  logo: string;
  imageFit?: "cover" | "contain";
  imagePosition?: "center" | "top" | "bottom";
  featured?: boolean;
  technologies: string[];
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  role: string;
  status: string;
  year: string;
  demoUrl?: string;
  repoUrl?: string;
};

export const PROJECTS: PortfolioProject[] = [
  {
    id: "urban-router-qa",
    name: "Pruebas de calidad para la App de Urban Router",
    logo: "imagen_tripleten.jpg",
    summary:
      "Diseno y ejecucion de casos de prueba funcionales y de UI para validar flujo de usuario, usabilidad y calidad de la app.",
    problem:
      "Necesidad de garantizar que el flujo de reserva de vehiculo privado funcionara correctamente y sin fallas criticas.",
    solution:
      "Estrategia de pruebas end-to-end con validacion de flujo, diseno vs requisitos y reporte estructurado de bugs.",
    impact:
      "Identificacion y reporte de 12 errores criticos, validacion del flujo completo de reserva y verificacion de concordancia entre diseno y desarrollo.",
    role: "QA Engineer",
    status: "Finalizado",
    year: "2026",
    technologies: [
      "Pruebas funcionales",
      "UI Testing",
      "Jira",
      "DevTools",
      "Documentacion de casos de prueba",
    ],
  },
  {
    id: "urban-grocers-api-testing",
    name: "Pruebas de API para la aplicacion Urban Grocers",
    logo: "imagen_tripleten.jpg",
    summary:
      "Diseno y ejecucion de pruebas de API basadas en requisitos funcionales para validar solicitudes HTTP y respuestas del sistema.",
    problem:
      "Riesgo de inconsistencias en datos y manejo incorrecto de errores en endpoints criticos.",
    solution:
      "Bateria de pruebas en Postman con validacion de payloads POST/PUT, codigos HTTP y estructura JSON en endpoints principales.",
    impact:
      "Validacion de integridad de datos, verificacion de respuestas y confirmacion del manejo correcto de casos limite y datos invalidos.",
    role: "QA Engineer",
    status: "Finalizado",
    year: "2026",
    technologies: [
      "API Testing",
      "Postman",
      "Apidoc",
      "Validacion JSON/XML",
      "HTTP",
    ],
  },
  {
    id: "plataforma-senas-colombianas",
    name: "Plataforma educativa de lenguaje de señas colombianas",
    logo: "imagen_expresate.jpeg",
    featured: true,
    summary:
      "Proyecto educativo con IA para reconocimiento de senas, donde participe como desarrollador y lider tecnico del codigo.",
    problem:
      "Baja disponibilidad de herramientas educativas tecnologicas para apoyar aprendizaje de lengua de senas colombianas.",
    solution:
      "Desarrollo de plataforma y entrenamiento de modelo de IA para reconocer letras estaticas y dinamicas.",
    impact:
      "Precision del 84.3% y primer puesto entre 50 proyectos tecnologicos.",
    role: "Lider tecnico y desarrollador IA",
    status: "Finalizado",
    year: "2025",
    technologies: ["Python", "Django", "TensorFlow", "Keras", "PostgreSQL"],
  },
  {
    id: "plataforma-gestion-agricola",
    name: "Plataforma de gestion agricola",
    logo: "imagen_palmapp.png",
    featured: true,
    summary:
      "Plataforma empresarial para agricultores del norte de Colombia desarrollada en web y movil.",
    problem:
      "Operacion manual y desorganizada en tareas de campo, inventario y gestion de personal.",
    solution:
      "Arquitectura fullstack con Astro, React, FastAPI, Flutter y base de datos PostgreSQL, junto con pruebas funcionales y de API.",
    impact:
      "Migracion a un sistema automatizado con modulos de lotes, labores, inventario, notificaciones, facturacion y reportes PDF.",
    role: "Fullstack Developer",
    status: "En produccion",
    year: "2025-2026",
    technologies: [
      "Python (FastAPI)",
      "JavaScript (React, Astro)",
      "Flutter",
      "PostgreSQL",
      "Postman",
      "Git",
    ],
  },
];
