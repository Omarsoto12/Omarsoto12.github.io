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
    id: "plataforma-senas-colombianas",
    name: "Plataforma educativa de lenguaje de señas colombianas",
    logo: "imagen_expresate.jpeg",
    featured: true,
    summary:
      "Como líder técnico y desarrollador, construí una plataforma educativa con IA para reconocer lenguaje de señas colombianas en tiempo real.",
    problem:
      "Baja disponibilidad de herramientas educativas tecnológicas para apoyar aprendizaje de lengua de señas colombianas.",
    solution:
      "Desarrollo de plataforma y entrenamiento de modelo de IA para reconocer letras estáticas y dinámicas.",
    impact:
      "Precisión del 84.3% y primer puesto entre 50 proyectos tecnológicos.",
    role: "Líder técnico y desarrollador IA",
    status: "Finalizado",
    year: "2025",
    technologies: ["Python", "Django", "TensorFlow", "Keras", "PostgreSQL"],
  },
  {
    id: "urban-router-qa",
    name: "Pruebas de calidad para la App de Urban Router",
    logo: "imagen_tripleten.jpg",
    featured: true,
    summary:
      "Como QA Engineer, diseñé y ejecuté pruebas funcionales y de UI para validar el flujo completo de reserva de la aplicación.",
    problem:
      "Necesidad de garantizar que el flujo de reserva de vehículo privado funcionara correctamente y sin fallas críticas.",
    solution:
      "Estrategia de pruebas end-to-end con validación de flujo, diseño vs requisitos y reporte estructurado de bugs.",
    impact:
      "Identificación y reporte de 12 errores críticos, validación del flujo completo de reserva y verificación de concordancia entre diseño y desarrollo.",
    role: "QA Engineer",
    status: "Finalizado",
    year: "2026",
    technologies: [
      "Pruebas funcionales",
      "UI Testing",
      "Jira",
      "DevTools",
      "Documentación de casos de prueba",
    ],
  },
  {
    id: "plataforma-gestion-agricola",
    name: "Plataforma de gestión agrícola",
    logo: "imagen_palmapp.png",
    featured: false,
    summary:
      "Como Fullstack Developer, construí una plataforma empresarial para agricultores del norte de Colombia con web y app móvil.",
    problem:
      "Operación manual y desorganizada en tareas de campo, inventario y gestión de personal.",
    solution:
      "Arquitectura fullstack con Astro, React, FastAPI, Flutter y PostgreSQL, junto con pruebas funcionales y de API.",
    impact:
      "Migración a un sistema automatizado con módulos de lotes, labores, inventario, notificaciones, facturación y reportes PDF.",
    role: "Fullstack Developer",
    status: "En producción",
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
  {
    id: "urban-grocers-api-testing",
    name: "Pruebas de API para la aplicación Urban Grocers",
    logo: "imagen_tripleten.jpg",
    featured: false,
    summary:
      "Como QA Engineer, diseñé y ejecuté pruebas de API basadas en requisitos funcionales para validar solicitudes HTTP y respuestas del sistema.",
    problem:
      "Riesgo de inconsistencias en datos y manejo incorrecto de errores en endpoints críticos.",
    solution:
      "Batería de pruebas en Postman con validación de payloads POST/PUT, códigos HTTP y estructura JSON en endpoints principales.",
    impact:
      "Validación de integridad de datos, verificación de respuestas y confirmación del manejo correcto de casos límite y datos inválidos.",
    role: "QA Engineer",
    status: "Finalizado",
    year: "2026",
    technologies: [
      "API Testing",
      "Postman",
      "Apidoc",
      "Validación JSON/XML",
      "HTTP",
    ],
  },
  {
    id: "urban-grocers-api-testing",
    name: "Pruebas de API para la aplicación Urban Grocers",
    logo: "imagen_tripleten.jpg",
    featured: false,
    summary:
      "Como QA Engineer, diseñé y ejecuté pruebas de API basadas en requisitos funcionales para validar solicitudes HTTP y respuestas del sistema.",
    problem:
      "Riesgo de inconsistencias en datos y manejo incorrecto de errores en endpoints críticos.",
    solution:
      "Batería de pruebas en Postman con validación de payloads POST/PUT, códigos HTTP y estructura JSON en endpoints principales.",
    impact:
      "Validación de integridad de datos, verificación de respuestas y confirmación del manejo correcto de casos límite y datos inválidos.",
    role: "QA Engineer",
    status: "Finalizado",
    year: "2026",
    technologies: [
      "API Testing",
      "Postman",
      "Apidoc",
      "Validación JSON/XML",
      "HTTP",
    ],
  },
];
