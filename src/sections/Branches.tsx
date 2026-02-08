"use client";

import { clientConfig } from "@/config/clientConfig";
import { getHeaderColor, getBodyColor } from "@/config/typography";
import { MapPin, Navigation } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import CTAButton from "@/components/ui/CTAButton";
import { motion } from "framer-motion";

export default function Branches() {
    const { branches } = clientConfig;
    const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

    // Si no hay sucursales, no renderizar nada
    if (!branches.items || branches.items.length === 0) {
        return null;
    }

    const handleImageError = (key: string) => {
        setImageErrors((prev) => ({ ...prev, [key]: true }));
    };

    const handleDirections = (googleMapsLink: string) => {
        window.open(googleMapsLink, "_blank");
    };

    return (
        <section
            className="relative py-20 md:py-28 overflow-hidden"
            style={{
                backgroundColor: clientConfig.brand.colors.backgroundAlt,
            }}
        >
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Encabezado de la sección */}
                <AnimatedSection animation="fadeDown">
                    <div className="text-center mb-16 md:mb-20">
                        <Badge
                            variant="primary"
                            icon={<MapPin className="w-5 h-5" />}
                            className="mb-5"
                        >
                            {branches.badge}
                        </Badge>
                        <h2
                            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
                            style={{ color: getHeaderColor() }}
                        >
                            {branches.title}
                        </h2>
                        <p
                            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
                            style={{ color: getBodyColor() }}
                        >
                            {branches.subtitle}
                        </p>
                    </div>
                </AnimatedSection>

                {/* Grid de sucursales */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {branches.items.map((branch, index) => {
                        const branchKey = `branch-${index}`;
                        const hasImage = branch.image && !imageErrors[branchKey];

                        return (
                            <motion.div
                                key={branchKey}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: [0.25, 0.4, 0.25, 1],
                                }}
                                className="relative overflow-hidden rounded-2xl bg-white"
                                style={{
                                    boxShadow: clientConfig.brand.components.cards.shadow,
                                }}
                            >
                                {/* Imagen de la sucursal */}
                                {hasImage && (
                                    <div className="relative w-full h-48 overflow-hidden">
                                        <Image
                                            src={branch.image!}
                                            alt={branch.name}
                                            fill
                                            className="object-cover transition-transform duration-300 hover:scale-110"
                                            onError={() => handleImageError(branchKey)}
                                        />
                                    </div>
                                )}

                                {/* Contenido de la sucursal */}
                                <div className="p-6">
                                    {/* Nombre de la sucursal */}
                                    <h3
                                        className="text-2xl font-bold mb-3"
                                        style={{ color: getHeaderColor() }}
                                    >
                                        {branch.name}
                                    </h3>

                                    {/* Dirección */}
                                    <div className="flex items-start gap-3 mb-6">
                                        <MapPin
                                            className="w-5 h-5 mt-1 shrink-0"
                                            style={{ color: clientConfig.brand.colors.primary }}
                                        />
                                        <p
                                            className="text-base leading-relaxed"
                                            style={{ color: getBodyColor() }}
                                        >
                                            {branch.address}
                                        </p>
                                    </div>

                                    {/* Botón de cómo llegar */}
                                    <CTAButton
                                        onClick={() => handleDirections(branch.googleMapsLink)}
                                        variant="secondary"
                                        size="medium"
                                        icon={<Navigation className="w-5 h-5" />}
                                    >
                                        Cómo llegar
                                    </CTAButton>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
