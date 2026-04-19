# 🚀 Mi Portafolio

Portafolio profesional moderno desarrollado con **Astro**, **React** y **Tailwind CSS**. Showcasing tus proyectos, experiencia y habilidades en desarrollo de software.

## ✨ Características

- **Diseño responsivo y moderno** - Interfaz fluida adaptada para todos los dispositivos
- **Animaciones suaves** - Transiciones y efectos visuales pulidos
- **Secciones interactivas**:
  - Carrusel de portada con navegación
  - Visualización 3D de tecnologías (Dodecahedron)
  - Modal reutilizable para detalles de proyectos
  - Tarjetas estratégicas de experiencia laboral
- **Proyectos destacados** - Segmentación entre proyectos featured y regulares
- **Contacto centralizado** - Links a GitHub, LinkedIn y datos de contacto
- **Tipografía y paleta de colores** - Tema oscuro con acentos cian (#06B6D4)

## 🛠️ Tecnologías

| Categoría | Tecnología |
|-----------|-----------|
| **Framework** | Astro 6.1.8 + React 19.2.5 |
| **Estilos** | Tailwind CSS 4.2.2 |
| **Iconos** | React Icons 5.6.0 |
| **Lenguaje** | TypeScript |
| **Node** | ≥ 22.12.0 |

## 📁 Estructura del Proyecto

```
src/
├── pages/
│   ├── index.astro                    # Página principal (home)
│   ├── encabezado/
│   │   ├── Carrucel_portada.tsx      # Hero carousel
│   │   ├── Avatar_perfil.tsx         # Avatar reutilizable
│   │   └── theme-provider.tsx        # Provider de tema
│   ├── sobre_mi/
│   │   └── sobre_mi.astro            # Sección de perfil
│   ├── mis_logros/
│   │   └── mis_logros.astro          # Tarjetas de logros/métricas
│   ├── habilidades/
│   │   ├── Dodecahedron_habilidades.tsx  # Visualización 3D
│   │   ├── Tecnologias.astro         # Grid de tecnologías
│   │   └── Stack_tecnologico.astro   # Contenedor principal
│   ├── mis_proyectos/
│   │   ├── mis_proyectos.astro       # Sección de proyectos
│   │   ├── ProyectosGrid.tsx         # Grid con tarjetas
│   │   ├── ProjectModal.tsx          # Modal de detalles
│   │   └── projects.data.ts          # Data centralizada
│   ├── experiencia/
│   │   └── experiencia.astro         # Sección laboral
│   └── footer.astro                  # Pie de página
├── styles/
│   └── global.css                    # Estilos globales
└── public/
    └── [assets]                      # Imágenes y favicons
```

## 🚀 Instalación y Uso

### Requisitos previos
- Node.js ≥ 22.12.0
- npm o pnpm

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/mi-portafolio.git
   cd mi-portafolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```
   Accede a `http://localhost:3000`

4. **Construir para producción**
   ```bash
   npm run build
   ```

5. **Vista previa de producción**
   ```bash
   npm run preview
   ```

## 📋 Configuración de Alias

Rutas cortas disponibles (`src/astro.config.mjs`):

```typescript
'@'              → /src/pages
'@pages'         → /src/pages
'@styles'        → /src/styles
'@encabezado'    → /src/pages/encabezado
'@habilidades'   → /src/pages/habilidades
'@sobre_mi'      → /src/pages/sobre_mi
```

**Uso:**
```tsx
import { ImageCarousel } from "@encabezado/Carrucel_portada";
import "@styles/global.css";
```

## 📊 Secciones Principales

### 1. **Sobre Mí**
Perfil narrativo con rol profesional y descripción de enfoque.

### 2. **Mis Logros**
Tarjetas de métricas clave y resultados de impacto.

### 3. **Stack Tecnológico**
Visualización 3D interactiva de tecnologías dominadas con Dodecahedron + listado visual.

### 4. **Mis Proyectos**
- **Destacados**: 2 proyectos featured en grid de 2 columnas
- **Más Proyectos**: Proyectos regulares en grid de 3 columnas
- **Modal interactivo**: Detalles completos con problema, solución, impacto y tecnologías

Proyectos incluidos:
- [Reemplaza con tus proyectos destacados]
- [Proyecto 1 con tecnologías]
- [Proyecto 2 con tecnologías]
- [Proyecto 3 con tecnologías]

### 5. **Experiencia Laboral**
Tarjetas estratégicas con roles, técnicas y responsabilidades clave.

### 6. **Footer**
Contacto directo con links a GitHub, LinkedIn, email, teléfono y ubicación.

## 🎨 Personalización

### Actualizar datos de contacto
Edita `src/pages/footer.astro`:

```astro
const contacto = {
  nombre: "Tu Nombre",
  rol: "Tu Rol",
  email: "tu@email.com",
  telefono: "+57 XXX XXX XXXX",
  github: "https://github.com/tu-usuario",
  linkedin: "https://linkedin.com/in/tu-perfil",
  ubicacion: "Tu Ciudad, País"
};
```

### Agregar proyectos
Edita `src/pages/mis_proyectos/projects.data.ts`:

```typescript
{
  id: "nuevo-proyecto",
  name: "Nombre del Proyecto",
  logo: "/ruta-imagen.jpg",
  featured: true,
  imageFit: "cover" | "contain",
  imagePosition: "center" | "top" | "bottom",
  technologies: ["Tech1", "Tech2"],
  summary: "Resumen corto",
  problem: "Problema abordado",
  solution: "Solución implementada",
  impact: "Resultado de impacto",
  role: "Tu rol",
  status: "Finalizado" | "En progreso",
  year: "2026"
}
```

## 📱 Responsive Design

Breakpoints optimizados:
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (lg)
- **Desktop**: > 1024px

Todos los componentes son completamente responsivos.

## 🔗 Rutas y Navegación

| Sección | Ubicación |
|---------|-----------|
| Home | `/` |
| Sobre Mí | En home |
| Proyectos | En home + modal |
| Experiencia | En home |
| Contacto | Footer |

## 📦 Dependencias Clave

```json
{
  "astro": "^6.1.8",
  "react": "^19.2.5",
  "tailwindcss": "^4.2.2",
  "react-icons": "^5.6.0"
}
```

## 🚢 Despliegue

### Vercel (recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Sube la carpeta 'dist' a Netlify
```

### GitHub Pages
```bash
npm run build
git add dist/
git commit -m "Deploy"
git push
```

## 💡 Mejoras Futuras

- [ ] Blog integrado
- [ ] Sistema de comentarios
- [ ] Formulario de contacto con backend
- [ ] Dark/Light mode switcher
- [ ] Animaciones adicionales con Framer Motion
- [ ] Integración con CMS

## 📄 Licencia

Este proyecto está bajo licencia MIT. Ver archivo `LICENSE` para más detalles.

## 👤 Autor

**Tu Nombre**
- 🌐 GitHub: [tu-usuario](https://github.com/tu-usuario)
- 💼 LinkedIn: [tu-perfil](https://linkedin.com/in/tu-perfil)
- 📧 Email: tu@email.com
- 📍 Tu Ubicación

## 🤝 Contribuciones

Las sugerencias y reportes de bugs son bienvenidos. No dudes en abrir un issue o pull request.

## 📞 Contacto

¿Interesado en colaborar? Contactame a través de:
- GitHub Issues
- LinkedIn
- Email directo

---

**Hecho con ❤️ usando Astro, React y Tailwind CSS**
