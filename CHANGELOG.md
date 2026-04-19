# 📋 Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Versionado Semántico](https://semver.org/lang/es/).

## [Unreleased]

### Pendiente
- [ ] Blog integrado
- [ ] Formulario de contacto con backend
- [ ] Dark/Light mode switcher
- [ ] Integración con CMS
- [ ] Sistema de comentarios

---

## [1.0.0] - [fecha-de-lanzamiento]

### ✨ Agregado

#### Estructura Base
- Proyecto Astro 6.1.8 + React 19.2.5 configurado
- Tailwind CSS 4.2.2 integrado
- Alias de rutas configurados (`@`, `@styles`, `@encabezado`, etc.)
- TypeScript con configuración strict

#### Componentes Principales
- **Carrusel de Portada** (`Carrucel_portada.tsx`)
  - Autoplay con navegación manual
  - Indicadores de posición
  - Animaciones suaves
  
- **Avatar Perfil** (`Avatar_perfil.tsx`)
  - Componente reutilizable
  - Posicionamiento overlay responsive
  - JSDoc documentado

- **Dodecahedron 3D** (`Dodecahedron_habilidades.tsx`)
  - Visualización 3D de tecnologías
  - Iconos tech de librerías
  - Interacciones focus/idle

#### Secciones
- **Sobre Mí**: Perfil narrativo con rol profesional
- **Mis Logros**: Tarjetas de métricas e impacto
- **Stack Tecnológico**: 
  - Dodecahedron interactivo
  - Listado visual de tecnologías con hover
- **Mis Proyectos**:
  - Grid responsivo con destacados y regulares
  - Modal interactivo reutilizable
  - Datos centralizados (`projects.data.ts`)
  - Soporte para `imageFit` y `imagePosition`
- **Experiencia Laboral**: Tarjetas estratégicas de roles
- **Footer**: Contacto con links a GitHub, LinkedIn, email, teléfono

#### Características Visuales
- Diseño oscuro profesional (slate-950, slate-900)
- Acentos cian (#06B6D4) consistentes
- Animaciones suaves (hover, transitions, scale)
- Sombras y efectos glow (cyan)
- Gradientes sutiles

#### Responsive Design
- Breakpoints: mobile (<640px), tablet (640-1024px), desktop (>1024px)
- Grids adaptativos (1 → 2 → 3 columnas)
- Padding y spacing responsivos
- Tipografía escalada por breakpoint

#### Componentes React
- **ProjectCard**: Tarjeta individual con imagen, nombre, resumen, tecnologías
- **ProyectosGrid**: Grid de tarjetas con secciones destacadas/regulares
- **ProjectModal**: Modal completo con detalles, problema, solución, impacto
- **ImageCarousel**: Carrusel con autoplay y navegación

#### Componentes Astro
- **index.astro**: Página principal que orquesta todas las secciones
- **sobre_mi.astro**: Sección de perfil
- **mis_logros.astro**: Sección de logros
- **Stack_tecnologico.astro**: Contenedor de tecnologías
- **mis_proyectos.astro**: Sección de proyectos
- **experiencia.astro**: Sección laboral
- **footer.astro**: Footer con contacto

#### Assets
- Imágenes SVG para carrusel y avatar
- Logos/imágenes de proyectos
- Favicons (SVG + ICO)

#### Documentación
- **README.md**: Documentación completa del proyecto
- **CONTRIBUTING.md**: Guía para contribuidores
- **LICENSE**: Licencia MIT
- **CHANGELOG.md**: Este archivo

### 🔧 Configuración

#### astro.config.mjs
```javascript
- Integración React
- Tailwind CSS como plugin Vite
- Alias de rutas configurados
```

#### tsconfig.json
```json
- Strict mode
- Paths para alias
- Target ES2020
```

#### tailwind.config.cjs
```javascript
- Tema oscuro (slate)
- Colores personalizados (cyan)
- Fuentes predeterminadas
```

### 🎨 Estilos

#### Paleta de Colores
- **Primary**: #06B6D4 (Cyan-400)
- **Background**: #0f172a (Slate-950)
- **Secondary**: #1e293b (Slate-900)
- **Text**: #f1f5f9 (Slate-100)
- **Muted**: #94a3b8 (Slate-400)

#### Tipografía
- Font family: Sistema predeterminado (Tailwind)
- Weights: 400 (regular), 600 (semibold), 700 (bold)
- Escalas responsivas: sm, base, lg, xl, 2xl, 3xl

### 🚀 Funcionalidades Iniciales

- [x] Diseño responsivo full-page
- [x] Componentes reutilizables
- [x] Modal interactivo con Escape key
- [x] Carrusel con autoplay
- [x] Visualización 3D (Dodecahedron)
- [x] Animaciones suaves
- [x] Alias de rutas limpios
- [x] Data centralizada para proyectos
- [x] Footer con contacto
- [x] Iconos de librerías (react-icons)

---

## [Versiones Anteriores]

### Iniciado
- Proyecto iniciado como template minimal de Astro
- Configuración inicial de dependencias

---

## Notas de Compatibilidad

- **Node.js**: ≥ 22.12.0
- **Browsers**: Chrome ≥ 90, Firefox ≥ 88, Safari ≥ 14, Edge ≥ 90
- **Dependencias Core**:
  - astro: 6.1.8+
  - react: 19.2.5+
  - tailwindcss: 4.2.2+
  - typescript: 5.x+

---

## 🔮 Próximas Mejoras Planeadas

- Blog section con markdown
- Formulario de contacto con envío de email
- Sistema de themes (dark/light)
- Integración con headless CMS
- Optimización de imágenes con astro:assets
- Analytics y SEO mejorado
- Testing suite con Vitest
- Performance metrics (Lighthouse)

---

**Última actualización**: 2026-04-19
