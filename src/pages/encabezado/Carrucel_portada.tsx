"use client"

import { useState, useEffect, useCallback } from "react"
import { AvatarPerfil } from "./Avatar_perfil"

interface CarouselImage {
	src: string
	alt: string
}

interface ImageCarouselProps {
	images?: CarouselImage[]
	avatarSrc?: string
	avatarAlt?: string
	autoPlay?: boolean
	interval?: number
}

const defaultImages: CarouselImage[] = [
	{ src: "/imagen_desarrollador.png", alt: "Desarrollador de Software" },
	{ src: "/imagen_QA_E.png", alt: "QA Engineer" },
	{ src: "/qa_desarrollado.png", alt: "Playa tropical paradisíaca" },
]

export function ImageCarousel({
	images = defaultImages,
	avatarSrc = "/avatar-circle.svg",
	avatarAlt = "Avatar de usuario",
	autoPlay = true,
	interval = 4000,
}: ImageCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isHovered, setIsHovered] = useState(false)

	const nextSlide = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % images.length)
	}, [images.length])

	const prevSlide = useCallback(() => {
		setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
	}, [images.length])

	const goToSlide = (index: number) => {
		setCurrentIndex(index)
	}

	useEffect(() => {
		if (!autoPlay || isHovered) return

		const timer = setInterval(nextSlide, interval)
		return () => clearInterval(timer)
	}, [autoPlay, interval, isHovered, nextSlide])

	return (
		<div
			className="relative w-full overflow-hidden"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Contenedor principal del carrusel */}
			<div className="relative w-full h-[clamp(160px,38vh,320px)] overflow-hidden shadow-2xl bg-slate-900">
				{/* Imágenes */}
				<div
					className="flex transition-transform duration-500 ease-out h-full"
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				>
					{images.map((image, index) => (
						<div key={index} className="w-full h-full flex-shrink-0 relative">
							<img
								src={image.src}
								alt={image.alt}
								className="w-full h-full object-cover"
								loading={index === 0 ? "eager" : "lazy"}
								onError={(event) => {
									event.currentTarget.src = "/favicon.svg"
								}}
							/>
						</div>
					))}
				</div>

				{/* Overlay gradient */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

				{/* Botones de navegación */}
				<button
					onClick={prevSlide}
					className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
					aria-label="Imagen anterior"
				>
					<svg
						className="w-5 h-5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						<path d="M15 18l-6-6 6-6" />
					</svg>
				</button>

				<button
					onClick={nextSlide}
					className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
					aria-label="Imagen siguiente"
				>
					<svg
						className="w-5 h-5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						<path d="M9 18l6-6-6-6" />
					</svg>
				</button>

				{/* Indicadores de posición */}
				<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
					{images.map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
									? "bg-white w-6"
									: "bg-white/50 hover:bg-white/70"
								}`}
							aria-label={`Ir a imagen ${index + 1}`}
						/>
					))}
				</div>
			</div>

			{/* Círculo con avatar - mitad dentro, mitad fuera */}
			
		</div>
	)
}
