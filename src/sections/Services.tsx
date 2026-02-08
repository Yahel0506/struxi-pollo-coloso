"use client";

import { clientConfig } from "@/config/clientConfig";
import { getHeaderColor, getBodyColor } from "@/config/typography";
import * as LucideIcons from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedGrid from "@/components/ui/AnimatedGrid";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import CTAButton from "@/components/ui/CTAButton";

export default function Services() {
    const { services } = clientConfig;
    const cardSizes = clientConfig.brand.components.cards.sizes.services;

    if (!services || !services.items || services.items.length === 0) return null;

    // Función helper para obtener el ícono dinámicamente
    const getIcon = (iconName: string) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const IconComponent = (LucideIcons as any)[iconName];
        return IconComponent || LucideIcons.Sparkles;
    };

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
                        <Badge
                            variant="primary"
                            icon={<LucideIcons.Sparkles className="w-5 h-5" />}
                            className="mb-5"
                        >
                            {services.badge}
                        </Badge>
                        <h2
                            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
                            style={{ color: getHeaderColor() }}
                        >
                            {services.title}
                        </h2>
                        <p
                            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
                            style={{ color: getBodyColor() }}
                        >
                            {services.subtitle}
                        </p>
                    </div>
                </AnimatedSection>

                {/* Grid de Servicios */}
                <AnimatedGrid
                    className="grid gap-8 md:gap-10"
                    staggerDelay={0.12}
                    style={{
                        gridTemplateColumns: services.items.length === 1
                            ? '1fr'
                            : services.items.length === 2
                            ? 'repeat(auto-fit, minmax(350px, 1fr))'
                            : 'repeat(auto-fit, minmax(320px, 1fr))'
                    }}
                >
                    {services.items.map((service) => {
                        const IconComponent = getIcon(service.icon);

                        return (
                            <Card
                                key={service.id}
                                variant="elevated"
                                className="group relative overflow-hidden"
                                width={cardSizes.width}
                                minHeight={cardSizes.minHeight}
                                maxHeight={cardSizes.maxHeight}
                            >
                                {/* Contenido */}
                                <div className="relative z-10">
                                    {/* Icono grande con efecto */}
                                    <div className="mb-6">
                                        <div
                                            className="inline-flex items-center justify-center w-16 h-16 rounded-xl shadow-sm transform group-hover:scale-110 transition-all duration-300"
                                            style={{
                                                backgroundColor: clientConfig.brand.colors.primary,
                                            }}
                                        >
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Título */}
                                    <h3
                                        className="text-2xl md:text-3xl font-bold mb-4"
                                        style={{ color: getHeaderColor() }}
                                    >
                                    </h3>

                                    {/* Descripción */}
                                    <p
                                        className="text-lg leading-relaxed"
                                        style={{ color: getBodyColor() }}
                                    >
                                        {service.description}
                                    </p>
                                </div>
                            </Card>
                        );
                    })}
                </AnimatedGrid>

                {/* CTA final de la sección */}
                <AnimatedSection animation="scale" delay={0.2}>
                    <div className="mt-16 md:mt-20 text-center">
                        <CTAButton
                            onClick={() => {
                                const whatsappUrl = `https://wa.me/${clientConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                                    clientConfig.contact.whatsappMessage
                                )}`;
                                window.open(whatsappUrl, "_blank");
                            }}
                            variant="primary"
                            size="large"
                            icon={<LucideIcons.Rocket className="w-6 h-6" />}
                            iconPosition="right"
                        >
                            ¡Quiero empezar ahora!
                        </CTAButton>
                        <p
                            className="mt-4"
                            style={{ color: getBodyColor() }}
                        >
                            Respuesta inmediata por WhatsApp
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
