# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir a mi portafolio! Este documento proporciona directrices y pasos para contribuir.

## 📋 Antes de Empezar

- Asegúrate de tener Node.js ≥ 22.12.0 instalado
- Realiza un fork del repositorio
- Clona tu fork localmente
- Crea una rama para tu característica o bug fix

```bash
git clone https://github.com/tu-usuario/mi-portafolio.git
cd mi-portafolio
git checkout -b feature/mi-caracteristica
```

## 🔧 Instalación Local

```bash
npm install
npm run dev
```

## 📝 Commits y Mensajes

Usa mensajes de commit claros y descriptivos:

```bash
git commit -m "feat: agregar nueva sección de blog"
git commit -m "fix: corregir estilos responsivos en mobile"
git commit -m "docs: actualizar README con ejemplos"
```

### Tipos de Commit
- **feat**: Nueva característica
- **fix**: Corrección de bug
- **docs**: Cambios en documentación
- **style**: Cambios de formato/estilos
- **refactor**: Refactorización de código
- **perf**: Mejoras de rendimiento
- **test**: Agregar o modificar tests

## 🎨 Estándares de Código

### TypeScript/React
- Usa nomenclatura camelCase para variables y funciones
- Usa PascalCase para componentes React
- Agrega tipos explícitos siempre que sea posible
- Usa JSDoc para documentar funciones

```typescript
/**
 * Obtiene los proyectos destacados
 * @param projects - Lista de todos los proyectos
 * @returns Proyectos marcados como featured
 */
function getFeaturedProjects(projects: PortfolioProject[]): PortfolioProject[] {
  return projects.filter(p => p.featured);
}
```

### Tailwind CSS
- Prioriza clases de utilidad sobre CSS personalizado
- Sigue el orden: `display/layout` → `sizing` → `spacing` → `colors/text` → `effects`
- Usa responsive prefixes consistentemente

```astro
<!-- ✅ Bien -->
<div class="flex items-center gap-4 px-6 py-4 rounded-lg border border-cyan-400/20 bg-slate-900/40">

<!-- ❌ Evitar -->
<div style="display: flex; gap: 1rem; padding: 1rem; background: rgba(15,23,42,0.4);">
```

### Nombres de Archivos
- Componentes React: PascalCase (`ImageCarousel.tsx`)
- Archivos Astro: snake_case (`sobre_mi.astro`)
- Datos/utilidades: camelCase (`projects.data.ts`)

## 🧪 Testing

Antes de hacer commit, verifica que no hay errores:

```bash
npm run astro check
npm run build
```

## 📤 Pull Request

1. **Actualiza tu rama** con la última versión de `main`
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Push tu rama**
   ```bash
   git push origin feature/mi-caracteristica
   ```

3. **Abre un Pull Request** en GitHub con:
   - Título claro describiendo el cambio
   - Descripción detallada del problema y solución
   - Screenshots si es cambio visual
   - Referencias a issues relacionados (#123)

### Template de PR

```markdown
## 📝 Descripción
Breve descripción de qué cambia y por qué.

## 🎯 Problema
Describe el problema que resuelve (si es un bug fix).

## ✅ Cambios
- [ ] Cambio 1
- [ ] Cambio 2

## 🧪 Testing
Pasos para verificar los cambios:
1. ...
2. ...

## 📸 Screenshots
Si aplica, agrega capturas antes/después.
```

## 🐛 Reportar Bugs

Usa GitHub Issues y proporciona:

1. **Descripción clara** del problema
2. **Pasos para reproducir**
3. **Comportamiento esperado vs. real**
4. **Screenshots o video** si aplica
5. **Entorno**: browser, OS, versión de Node

**Template:**
```markdown
## 🐛 Descripción del Bug
...

## 🔁 Pasos para reproducir
1. ...
2. ...
3. ...

## ✅ Comportamiento esperado
...

## ❌ Comportamiento actual
...

## 💻 Entorno
- OS: Windows/Mac/Linux
- Browser: Chrome/Firefox/Safari
- Node: 22.12.0
```

## 🎓 Reglas Importantes

1. **Respeta el tema y paleta de colores** - Usa los colores definidos (cian #06B6D4, slate, etc.)
2. **Mantén la compatibilidad Astro** - No agregues dependencias Next.js
3. **Preserva la documentación** - Actualiza README si es necesario
4. **Sé responsivo** - Todo debe funcionar en mobile, tablet y desktop
5. **Optimiza imágenes** - Usa formatos modernos (WebP, SVG)

## 📚 Recursos Útiles

- [Documentación de Astro](https://docs.astro.build)
- [Guía de React Hooks](https://react.dev/reference/react)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## ❓ ¿Preguntas?

- Abre una Issue con la etiqueta `question`
- Revisa Issues y Discussions anteriores
- Contacta directamente si es necesario

## 🙏 Agradecimientos

¡Aprecio mucho tu contribución! Cada PR, bug report e idea ayuda a mejorar el portafolio.

---

**¡Feliz contribuyendo! 🚀**
