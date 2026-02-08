"use client";

import { clientConfig } from "@/config/clientConfig";
import { getHeaderColor, getBodyColor } from "@/config/typography";
import * as LucideIcons from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedGrid from "@/components/ui/AnimatedGrid";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import CTAButton from "@/components/ui/CTAButton";

export default function PainPoints() {
    const { painPoints } = clientConfig;
    const cardSizes = clientConfig.brand.components.cards.sizes.painPoints;

    if (!painPoints || !painPoints.points || painPoints.points.length === 0) return null;

    const getIcon = (iconName: string) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const IconComponent = (LucideIcons as any)[iconName];
        return IconComponent || LucideIcons.AlertCircle;
    };

    return (
        <section
            className="relative py-16 md:py-24 overflow-hidden"
            style={{
                backgroundColor: clientConfig.brand.colors.backgroundAlt,
            }}
        >
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Encabezado de la sección */}
                <AnimatedSection animation="fadeDown">
                    <div className="text-center mb-12 md:mb-16">
                        <Badge
                            variant="danger"
                            icon={<LucideIcons.AlertCircle className="w-5 h-5" />}
                            className="mb-4"
                        >
                            {painPoints.badge}
                        </Badge>
                        <h2
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                            style={{ color: getHeaderColor() }}
                        >
                            {painPoints.title}
                        </h2>
                        <p
                            className="text-lg md:text-xl max-w-2xl mx-auto"
                            style={{ color: getBodyColor() }}
                        >
                            {painPoints.subtitle}
                        </p>
                    </div>
                </AnimatedSection>

                {/* Grid de Pain Points */}
                <AnimatedGrid
                    className="grid gap-6 md:gap-8"
                    staggerDelay={0.15}
                    style={{
                        gridTemplateColumns: painPoints.points.length === 1
                            ? '1fr'
                            : painPoints.points.length === 2
                            ? 'repeat(auto-fit, minmax(300px, 1fr))'
                            : 'repeat(auto-fit, minmax(280px, 1fr))'
                    }}
                >
                    {painPoints.points.map((point, index) => {
                        const IconComponent = getIcon(point.icon);

                        return (
                            <Card
                                key={index}
                                variant="bordered"
                                width={cardSizes.width}
                                minHeight={cardSizes.minHeight}
                                maxHeight={cardSizes.maxHeight}
                            >
                                {/* Icono personalizado */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div
                                        className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300"
                                        style={{
                                            backgroundColor: `${clientConfig.brand.colors.danger}15`,
                                        }}
                                    >
                                        <IconComponent
                                            className="w-6 h-6"
                                            style={{ color: clientConfig.brand.colors.danger }}
                                        />
                                    </div>
                                </div>

                                {/* Título/Pregunta */}
                                <h3
                                    className="text-xl md:text-2xl font-bold mb-3 leading-tight"
                                    style={{ color: getHeaderColor() }}
                                >
                                    {point.question}
                                </h3>

                                {/* Descripción */}
                                <p
                                    className="text-base md:text-lg leading-relaxed"
                                    style={{ color: getBodyColor() }}
                                >
                                    {point.description}
                                </p>
                            </Card>
                        );
                    })}
                </AnimatedGrid>

                {/* Texto motivacional al final */}
                <AnimatedSection animation="scale" delay={0.3}>
                    <div className="mt-12 md:mt-16 text-center">
                        <CTAButton
                            onClick={() => {}}
                            variant="primary"
                            size="large"
                            className="shadow-lg"
                        >
                            ✨ {painPoints.closingText}
                        </CTAButton>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
