<<<<<<< HEAD
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
# 🚀 Mi Portafolio

Portafolio profesional moderno desarrollado con Astro, React y Tailwind CSS.

## ✨ Características

- Diseño responsivo y moderno
- Secciones interactivas
- Modal reutilizable para proyectos
- Carrusel de portada
- Footer de contacto

## 🛠️ Tecnologías

- Astro
- React
- Tailwind CSS
- TypeScript
- React Icons

## 📁 Estructura del Proyecto

```text
src/
├── pages/
│   ├── index.astro
│   ├── encabezado/
│   ├── sobre_mi/
│   ├── mis_logros/
│   ├── habilidades/
│   ├── mis_proyectos/
│   ├── experiencia/
│   └── footer.astro
├── styles/
└── public/
```

## 🚀 Instalación

```bash
npm install
npm run dev
```

## 📦 Scripts

- `npm run dev` - iniciar desarrollo
- `npm run build` - generar build
- `npm run preview` - previsualizar build
- `npm run astro` - comandos de Astro

## 📋 Configuración de Alias

- `@` -> `/src/pages`
- `@pages` -> `/src/pages`
- `@styles` -> `/src/styles`
- `@encabezado` -> `/src/pages/encabezado`
- `@habilidades` -> `/src/pages/habilidades`
- `@sobre_mi` -> `/src/pages/sobre_mi`

## 📊 Secciones Principales

- Sobre Mí
- Mis Logros
- Stack Tecnológico
- Mis Proyectos
- Experiencia Laboral
- Footer

## 🎨 Personalización

Edita los archivos dentro de `src/pages/` para ajustar contenido, contacto, proyectos y estilos.

## 📄 Licencia

MIT
vercel
