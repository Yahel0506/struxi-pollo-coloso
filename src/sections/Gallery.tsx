"use client";

import { clientConfig } from "@/config/clientConfig";
import { getHeaderColor, getBodyColor } from "@/config/typography";
import * as LucideIcons from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedGrid from "@/components/ui/AnimatedGrid";

// Interfaces locales para tipado
interface GalleryItem {
    image: string;
    name: string;
}

export default function Gallery() {
    const { gallery } = clientConfig;
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    // Si no hay galería configurada o no hay items, no renderizar nada
    if (!gallery || !gallery.items || gallery.items.length === 0) {
        return null;
    }

    // TypeScript safety - aseguramos que tenemos items
    const galleryItems = gallery.items as GalleryItem[];

    return (
        <section
            className="relative py-20 md:py-28 overflow-hidden"
            style={{
                backgroundColor: clientConfig.brand.colors.background,
            }}
        >
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Encabezado de la sección */}
                <AnimatedSection animation="fadeDown">
                    <div className="text-center mb-16 md:mb-20">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 border-2 shadow-sm"
                        style={{
                            backgroundColor: `${clientConfig.brand.colors.accent}10`,
                            borderColor: clientConfig.brand.colors.accent,
                        }}
                    >
                        <LucideIcons.Image
                            className="w-5 h-5"
                            style={{ color: clientConfig.brand.colors.accent }}
                        />
                        <span
                            className="text-sm font-bold uppercase tracking-wide"
                            style={{ color: clientConfig.brand.colors.accent }}
                        >
                            {gallery.badge}
                        </span>
                    </div>
                    <h2
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
                        style={{ color: getHeaderColor() }}
                    >
                        {gallery.title}
                    </h2>
                    <p
                        className="text-xl md:text-2xl max-w-3xl mx-auto"
                        style={{ color: getBodyColor() }}
                    >
                        {gallery.subtitle}
                    </p>
                </div>
                </AnimatedSection>

                {/* Grid de Galería */}
                <AnimatedGrid
                    className="grid gap-6 md:gap-8"
                    staggerDelay={0.12}
                    style={{
                        gridTemplateColumns: galleryItems.length === 1
                            ? '1fr'
                            : galleryItems.length === 2
                            ? 'repeat(2, 1fr)'
                            : 'repeat(auto-fit, minmax(300px, 1fr))'
                    }}
                >
                    {galleryItems.map((item: GalleryItem, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
                            style={{ backgroundColor: clientConfig.brand.colors.background }}
                            onClick={() => setSelectedImage(index)}
                        >
                            {/* Contenedor de imagen con aspect ratio */}
                            <div
                                className="relative w-full aspect-4/3 overflow-hidden"
                                style={{ backgroundColor: clientConfig.brand.colors.backgroundAlt }}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.name || `Galería ${index + 1}`}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                {/* Overlay con gradiente */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `linear-gradient(to top, ${clientConfig.brand.colors.textPrimary}99, ${clientConfig.brand.colors.textPrimary}33, transparent)`,
                                    }}
                                />

                                {/* Icono de expandir */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div
                                        className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md transform scale-75 group-hover:scale-100 transition-transform duration-300"
                                        style={{
                                            backgroundColor: `${clientConfig.brand.colors.accent}e6`,
                                        }}
                                    >
                                        <LucideIcons.Expand className="w-7 h-7 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Nombre de la imagen (opcional) */}
                            {gallery.showImageNames && item.name && (
                                <div
                                    className="p-5"
                                    style={{ backgroundColor: clientConfig.brand.colors.background }}
                                >
                                    <h3
                                        className="text-lg font-semibold"
                                        style={{ color: getHeaderColor() }}
                                    >
                                        {item.name}
                                    </h3>
                                </div>
                            )}

                            {/* Barra decorativa */}
                            <div
                                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                                style={{
                                    backgroundColor: clientConfig.brand.colors.accent,
                                }}
                            />
                        </div>
                    ))}
                </AnimatedGrid>
            </div>

            {/* Modal de imagen ampliada */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
                    style={{ backgroundColor: `${clientConfig.brand.colors.textPrimary}e6` }}
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-colors duration-300"
                        style={{
                            backgroundColor: `${clientConfig.brand.colors.background}1a`,
                        }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <LucideIcons.X className="w-6 h-6 text-white" />
                    </button>

                    <div className="relative max-w-5xl w-full max-h-[80vh]">
                        <div className="relative w-full h-full">
                            <Image
                                src={galleryItems[selectedImage].image}
                                alt={galleryItems[selectedImage].name || `Galería ${selectedImage + 1}`}
                                width={1200}
                                height={800}
                                className="object-contain w-full h-full rounded-lg"
                                priority
                            />
                        </div>
                        {gallery.showImageNames && galleryItems[selectedImage].name && (
                            <div
                                className="absolute bottom-0 left-0 right-0 backdrop-blur-md p-6 rounded-b-lg"
                                style={{
                                    backgroundColor: `${clientConfig.brand.colors.textPrimary}b3`,
                                }}
                            >
                                <h3
                                    className="text-2xl font-bold text-center"
                                    style={{ color: getHeaderColor() }}
                                >
                                    {galleryItems[selectedImage].name}
                                </h3>
                            </div>
                        )}
                    </div>

                    {/* Navegación */}
                    {galleryItems.length > 1 && (
                        <>
                            <button
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-colors duration-300"
                                style={{ backgroundColor: `${clientConfig.brand.colors.background}1a` }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage((prev) =>
                                        prev === 0 ? galleryItems.length - 1 : prev! - 1
                                    );
                                }}
                            >
                                <LucideIcons.ChevronLeft className="w-6 h-6 text-white" />
                            </button>
                            <button
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-colors duration-300"
                                style={{ backgroundColor: `${clientConfig.brand.colors.background}1a` }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage((prev) =>
                                        prev === galleryItems.length - 1 ? 0 : prev! + 1
                                    );
                                }}
                            >
                                <LucideIcons.ChevronRight className="w-6 h-6 text-white" />
                            </button>
                        </>
                    )}
                </div>
            )}
        </section>
    );
}
