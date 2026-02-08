"use client";

import { clientConfig } from "@/config/clientConfig";
import { getHeaderColor, getBodyColor } from "@/config/typography";
import * as LucideIcons from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedGrid from "@/components/ui/AnimatedGrid";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

export default function Features() {
    const { features } = clientConfig;
    const isProfessional = clientConfig.brand.theme === "professional";
    const cardSizes = clientConfig.brand.components.cards.sizes.features;

    if (!features || !features.items || features.items.length === 0) return null;

    // Función helper para obtener el ícono dinámicamente
    const getIcon = (iconName: string) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const IconComponent = (LucideIcons as any)[iconName];
        return IconComponent || LucideIcons.Star;
    };

    return (
        <section
            className="relative py-20 md:py-28 overflow-hidden"
            style={{ backgroundColor: clientConfig.brand.colors.backgroundAlt }}
        >
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Encabezado de la sección */}
                <AnimatedSection animation="fadeDown">
                    <div className="text-center mb-16 md:mb-20">
                        <Badge
                            variant="secondary"
                            icon={<LucideIcons.Sparkles className="w-5 h-5" />}
                            className="mb-5"
                        >
                            {features.badge}
                        </Badge>
                        <h2
                            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
                            style={{ color: getHeaderColor() }}
                        >
                            {features.title}
                        </h2>
                        <p
                            className="text-xl md:text-2xl max-w-3xl mx-auto"
                            style={{ color: getBodyColor() }}
                        >
                            {features.subtitle}
                        </p>
                    </div>
                </AnimatedSection>

                {/* Grid de Features - Diseño tipo bento box */}
                <AnimatedGrid
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    staggerDelay={0.1}
                >
                    {features.items.map((feature, index) => {
                        const IconComponent = getIcon(feature.icon);

                        // Colores alternados simples
                        const colors = [
                            clientConfig.brand.colors.primary,
                            clientConfig.brand.colors.secondary,
                            clientConfig.brand.colors.accent,
                            clientConfig.brand.colors.info,
                            clientConfig.brand.colors.success,
                            clientConfig.brand.colors.warning,
                        ];

                        const currentColor = colors[index % colors.length];

                        return (
                            <Card
                                key={index}
                                variant="bordered"
                                className="group relative text-center"
                                width={cardSizes.width}
                                minHeight={cardSizes.minHeight}
                                maxHeight={cardSizes.maxHeight}
                            >
                                {/* Barra superior solo en modern */}
                                {!isProfessional && (
                                    <div
                                        className="absolute top-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-xl"
                                        style={{ backgroundColor: currentColor }}
                                    />
                                )}

                                {/* Contenido */}
                                <div className="relative z-10">
                                    {/* Icono con círculo de fondo */}
                                    <div className="mb-5">
                                        <div
                                            className="inline-flex items-center justify-center w-12 h-12 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300"
                                            style={{
                                                backgroundColor: isProfessional ? `${currentColor}20` : `${currentColor}15`,
                                            }}
                                        >
                                            <IconComponent
                                                className="w-6 h-6"
                                                style={{ color: currentColor }}
                                            />
                                        </div>
                                    </div>

                                    {/* Título */}
                                    <h3
                                        className="text-xl md:text-2xl font-bold mb-3"
                                        style={{ color: getHeaderColor() }}
                                    >
                                        {feature.title}
                                    </h3>

                                    {/* Descripción */}
                                    <p
                                        className="text-base leading-relaxed"
                                        style={{ color: getBodyColor() }}
                                    >
                                        {feature.description}
                                    </p>
                                </div>
                            </Card>
                        );
                    })}
                </AnimatedGrid>

                {/* Estadística o mensaje de confianza al final */}
                {features.socialProof?.show && (
                    <AnimatedSection animation="scale" delay={0.2}>
                        <div className="mt-16 md:mt-20 text-center">
                        <div
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 shadow-sm"
                            style={{
                                backgroundColor: clientConfig.brand.colors.background,
                                borderColor: `${clientConfig.brand.colors.textMuted}40`,
                            }}
                        >
                            {features.socialProof.icon && (() => {
                                const SocialIcon = getIcon(features.socialProof.icon);
                                return <SocialIcon
                                    className="w-6 h-6"
                                    style={{ color: clientConfig.brand.colors.textPrimary }}
                                />;
                            })()}
                            <p
                                className="text-lg font-semibold"
                                style={{ color: clientConfig.brand.colors.textPrimary }}
                            >
                                {features.socialProof.text}
                            </p>
                            {features.socialProof.avatarCount && features.socialProof.avatarCount > 0 && (
                                <div className="flex -space-x-2">
                                    {Array.from({ length: Math.min(features.socialProof.avatarCount, 6) }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-8 h-8 rounded-full border-2"
                                            style={{
                                                borderColor: clientConfig.brand.colors.background,
                                                backgroundColor: isProfessional
                                                    ? clientConfig.brand.colors.secondary
                                                    : `${clientConfig.brand.colors.secondary}cc`,
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    </AnimatedSection>
                )}
            </div>
        </section>
    );
}
