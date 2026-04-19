"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface FaceConfig { rx: number; ry: number }
interface DodecahedronProps {
  images?: string[];
  size?: number;
  duration?: number;
  tiltX?: number;
  /** Segundos quieto antes de volver a girar (default: 2.5) */
  idleDelay?: number;
}

type Mode = "spinning" | "animating" | "idle";

// ─── Geometría ────────────────────────────────────────────────────────────────

const A = 26.565;

const FACES: FaceConfig[] = [
  { rx: 90, ry: 0 },
  { rx: A, ry: 0 },
  { rx: A, ry: 72 },
  { rx: A, ry: 144 },
  { rx: A, ry: 216 },
  { rx: A, ry: 288 },
  { rx: -A, ry: 36 },
  { rx: -A, ry: 108 },
  { rx: -A, ry: 180 },
  { rx: -A, ry: 252 },
  { rx: -A, ry: 324 },
  { rx: -90, ry: 0 },
];

const PENTAGON = "polygon(50% 8%, 90% 37%, 75% 84%, 25% 84%, 10% 37%)";

// ─── Skills por defecto ───────────────────────────────────────────────────────

const DEFAULT_SKILLS = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

const DEFAULT_IMAGES = DEFAULT_SKILLS.map((s) => s.icon);

const FACE_SIZE = 200;
const FACE_SCALE = 0.82;
const INRADIUS = 110;

// ─── Helpers matemáticos ──────────────────────────────────────────────────────

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * Devuelve el equivalente de `to` más cercano a `from`
 * para no dar una vuelta entera innecesaria.
 */
function nearestAngle(from: number, to: number): number {
  let diff = ((to - from) % 360 + 360) % 360;
  if (diff > 180) diff -= 360;
  return from + diff;
}

// ─── Componente ───────────────────────────────────────────────────────────────

export default function Dodecahedron({
  images = DEFAULT_IMAGES,
  size = 380,
  duration = 16,
  tiltX = 24,
  idleDelay = 2.5,
}: DodecahedronProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const rYRef = useRef(0);
  const rXRef = useRef(tiltX);
  const modeRef = useRef<Mode>("spinning");
  const targetRYRef = useRef(0);
  const targetRXRef = useRef(tiltX);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [activeFace, setActiveFace] = useState<number | null>(null);

  const imgs = Array.isArray(images) && images.length >= 12
    ? images.slice(0, 12)
    : DEFAULT_IMAGES;

  // ── Loop de animación (RAF) — controla el transform directamente en el DOM ──
  useEffect(() => {
    let raf: number;
    let last = performance.now();
    const degsPerMs = 360 / (duration * 1000);

    const tick = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;

      if (modeRef.current === "spinning") {
        rYRef.current += degsPerMs * dt;
        // regresa el tilt X al valor original suavemente
        rXRef.current = lerp(rXRef.current, tiltX, 0.04);
      } else if (modeRef.current === "animating") {
        rYRef.current = lerp(rYRef.current, targetRYRef.current, 0.08);
        rXRef.current = lerp(rXRef.current, targetRXRef.current, 0.08);

        const arrived =
          Math.abs(rYRef.current - targetRYRef.current) < 0.25 &&
          Math.abs(rXRef.current - targetRXRef.current) < 0.25;

        if (arrived) {
          rYRef.current = targetRYRef.current;
          rXRef.current = targetRXRef.current;
          modeRef.current = "idle";
        }
      }
      // mode === "idle" → nada, espera el timer

      if (sceneRef.current) {
        sceneRef.current.style.transform =
          `rotateX(${rXRef.current}deg) rotateY(${rYRef.current}deg)`;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [duration, tiltX]);

  // ── Enfocar una cara al frente ────────────────────────────────────────────

  const focusFace = useCallback((i: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    const face = FACES[i];
    // Para traer la cara al frente: cancelamos su rotación propia
    targetRYRef.current = nearestAngle(rYRef.current, -face.ry);
    targetRXRef.current = -face.rx;
    modeRef.current = "animating";
    setActiveFace(i);
  }, []);

  // ── Reanudar giro tras idle ───────────────────────────────────────────────

  const scheduleResume = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      modeRef.current = "spinning";
      setActiveFace(null);
    }, idleDelay * 1000);
  }, [idleDelay]);

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <>
      <style>{`
        .dodeca-scene {
          position: relative;
          width: ${FACE_SIZE}px;
          height: ${FACE_SIZE}px;
          transform-style: preserve-3d;
        }

        .dodeca-face {
          position: absolute;
          inset: 0;
          clip-path: ${PENTAGON};
          overflow: hidden;
          background: radial-gradient(circle at 35% 30%, #1e3a8a 0%, #0f172a 70%);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          cursor: pointer;
          transition: filter 0.25s ease;
        }

        .dodeca-face:hover        { filter: brightness(1.3); }
        .dodeca-face.is-active    { filter: brightness(1.4); }

        .dodeca-face img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 28px;
          display: block;
          pointer-events: none;
          user-select: none;
          -webkit-user-drag: none;
        }

        /* Vignette de profundidad */
        .dodeca-face::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at 40% 35%,
            rgba(255,255,255,0.07) 0%,
            transparent 50%,
            rgba(0,0,0,0.30) 100%
          );
          pointer-events: none;
        }

        /* Borde de arista */
        .dodeca-edge {
          position: absolute;
          inset: 0;
          clip-path: ${PENTAGON};
          box-shadow: inset 0 0 0 1.5px rgba(255,255,255,0.22);
          pointer-events: none;
          z-index: 1;
        }

        /* Nombre de la skill — aparece al hover / is-active */
        .dodeca-label {
          position: absolute;
          bottom: 26%;
          left: 50%;
          transform: translateX(-50%);
          font-family: system-ui, sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.9);
          text-shadow: 0 1px 6px rgba(0,0,0,0.9);
          opacity: 0;
          transition: opacity 0.2s ease;
          pointer-events: none;
          white-space: nowrap;
          z-index: 2;
        }

        .dodeca-face:hover .dodeca-label,
        .dodeca-face.is-active .dodeca-label {
          opacity: 1;
        }
      `}</style>

      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          perspective: `${size * 2.2}px`,
          perspectiveOrigin: "50% 48%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          userSelect: "none",
        }}
        onMouseLeave={scheduleResume}
      >
        <div ref={sceneRef} className="dodeca-scene">
          {FACES.map((face, i) => (
            <div
              key={i}
              className={`dodeca-face${activeFace === i ? " is-active" : ""}`}
              style={{
                transform: `rotateY(${face.ry}deg) rotateX(${face.rx}deg) translateZ(${INRADIUS}px) scale(${FACE_SCALE})`,
              }}
              onMouseEnter={() => focusFace(i)}
              onClick={() => focusFace(i)}
            >
              {imgs[i] ? (
                <img
                  src={imgs[i]}
                  alt={DEFAULT_SKILLS[i]?.name ?? `Cara ${i + 1}`}
                  draggable={false}
                  loading="lazy"
                />
              ) : (
                <span style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: "100%", height: "100%",
                  color: "rgba(255,255,255,0.3)",
                  fontFamily: "Georgia, serif", fontSize: 22, letterSpacing: 3,
                }}>
                  {i + 1}
                </span>
              )}
              <span className="dodeca-label">
                {DEFAULT_SKILLS[i]?.name ?? `Cara ${i + 1}`}
              </span>
              <div className="dodeca-edge" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}