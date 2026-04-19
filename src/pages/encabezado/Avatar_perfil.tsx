/**
 * Propiedades del avatar de perfil superpuesto sobre el carrusel.
 */
interface AvatarPerfilProps {
	/** Ruta de la imagen de perfil. */
	src: string
	/** Texto alternativo para accesibilidad. */
	alt: string
}

/**
 * Renderiza un avatar circular con indicador de estado online.
 *
 * Incluye un fallback automático a `/favicon.svg` si falla la carga
 * de la imagen principal.
 */
export function AvatarPerfil({ src, alt }: AvatarPerfilProps) {
	return (
		<div className="absolute bottom-2 right-2 z-10 sm:bottom-4 sm:right-4">
			<div
				className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-white sm:h-20 sm:w-20 sm:border-4 md:h-24 md:w-24
									shadow-xl ring-4 ring-emerald-500/30 transition-transform duration-300
									hover:scale-110 cursor-pointer"
			>
				<img
					src={src}
					alt={alt}
					className="w-full h-full object-cover"
					loading="lazy"
					onError={(event) => {
						event.currentTarget.src = "/favicon.svg"
					}}
				/>
				{/* Indicador de estado online */}
				<div className="absolute bottom-0.5 right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 sm:bottom-1 sm:right-1 sm:h-4 sm:w-4" />
			</div>
		</div>
	)
}
