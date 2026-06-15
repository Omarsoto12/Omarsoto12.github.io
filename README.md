# Omar Sotomayor De Avila — Portafolio Profesional

[![Astro](https://img.shields.io/badge/Astro-6.1.8-BC52EE?logo=astro)](https://astro.build)
[![React](https://img.shields.io/badge/React-19.2.5-61DAFB?logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.2-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)](https://www.typescriptlang.org)

Portafolio profesional moderno desarrollado con **Astro**, **React** y **Tailwind CSS**. Muestra mi perfil dual como **Desarrollador Fullstack** y **QA Engineer**, incluyendo proyectos, experiencia y habilidades técnicas.

## ✨ Características

- **Diseño responsivo y moderno** con tema oscuro y acentos cian
- **Carrusel interactivo** de portada con navegación
- **Visualización 3D** de tecnologías (dodecaedro interactivo)
- **Sección de proyectos** con tarjetas, modal de detalle y badges por rol (💻 Desarrollo / 🔍 QA)
- **Experiencia laboral** con logros clave y stack tecnológico
- **Enlaces de contacto** a GitHub, LinkedIn y correo electrónico

## 🛠️ Tecnologías

| Categoría       | Tecnología                        |
|-----------------|-----------------------------------|
| Framework       | Astro 6.1.8 + React 19.2.5       |
| Estilos         | Tailwind CSS 4.2.2                |
| Iconos          | React Icons 5.6.0                 |
| Lenguaje        | TypeScript 5.8                    |
| Node            | ≥ 22.12.0                         |

## 📁 Estructura del Proyecto

```
src/
├── pages/
│   ├── index.astro                    # Página principal
│   ├── encabezado/                    # Carrusel de portada y avatar
│   ├── sobre_mi/                      # Perfil profesional
│   ├── mis_logros/                    # Métricas y resultados
│   ├── habilidades/                   # Stack tecnológico (3D + grid)
│   ├── mis_proyectos/                 # Proyectos con data centralizada
│   ├── experiencia/                   # Experiencia laboral
│   └── footer.astro                   # Pie de página con contacto
├── styles/
│   └── global.css                     # Estilos globales
└── public/                            # Imágenes y favicon
```

## 🚀 Desarrollo Local

```bash
# Requisito: Node.js ≥ 22.12.0

npm install
npm run dev        # http://localhost:3000
npm run build      # Build producción → dist/
npm run preview    # Vista previa del build
```

## 📋 Alias de Importación

| Alias           | Ruta                            |
|-----------------|---------------------------------|
| `@`             | `/src/pages`                    |
| `@pages`        | `/src/pages`                    |
| `@styles`       | `/src/styles`                   |
| `@encabezado`   | `/src/pages/encabezado`         |
| `@habilidades`  | `/src/pages/habilidades`        |
| `@sobre_mi`     | `/src/pages/sobre_mi`           |

## 🌐 Despliegue

Este portafolio está configurado para desplegarse automáticamente en **GitHub Pages** mediante el workflow incluido en `.github/workflows/deploy.yml`.

## 📄 Licencia

MIT
