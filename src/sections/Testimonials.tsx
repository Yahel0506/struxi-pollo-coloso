"use client";

import { clientConfig } from "@/config/clientConfig";
import { getHeaderColor, getBodyColor } from "@/config/typography";
import * as LucideIcons from "lucide-react";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedGrid from "@/components/ui/AnimatedGrid";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

// Interfaces locales para tipado
interface TestimonialItem {
    name: string;
    role: string;
    review: string;
    stars: number;
    avatar?: string;
}

export default function Testimonials() {
    const { testimonials } = clientConfig;
    const isProfessional = clientConfig.brand.theme === "professional";
    const cardSizes = clientConfig.brand.components.cards.sizes.testimonials;

    if (!testimonials || !testimonials.items || testimonials.items.length === 0) return null;

    // TypeScript safety - aseguramos que tenemos items
    const testimonialItems = testimonials.items as TestimonialItem[];

    // Renderizar estrellas
    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }).map((_, index) => (
            <LucideIcons.Star
                key={index}
                className="w-5 h-5"
                style={{
                    fill: index < rating ? clientConfig.brand.colors.warning : 'none',
                    color: index < rating ? clientConfig.brand.colors.warning : clientConfig.brand.colors.textMuted,
                }}
            />
        ));
    };

    // Función para obtener iniciales del nombre
    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
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
                            icon={<LucideIcons.MessageSquareQuote className="w-5 h-5" />}
                            className="mb-5"
                        >
                            {testimonials.badge}
                        </Badge>
                        <h2
                            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
                            style={{ color: getHeaderColor() }}
                        >
                            {testimonials.title}
                        </h2>
                        <p
                            className="text-xl md:text-2xl max-w-3xl mx-auto"
                            style={{ color: getBodyColor() }}
                        >
                            {testimonials.subtitle}
                        </p>
                    </div>
                </AnimatedSection>

                {/* Grid de Testimonios */}
                <AnimatedGrid
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                    staggerDelay={0.15}
                >
                    {testimonialItems.map((testimonial: TestimonialItem, index) => (
                        <Card
                            key={index}
                            variant="default"
                            className="group relative"
                            width={cardSizes.width}
                            minHeight={cardSizes.minHeight}
                            maxHeight={cardSizes.maxHeight}
                        >
                            {/* Estrellas */}
                            <div className="flex gap-1 mb-4">
                                {renderStars(testimonial.stars)}
                            </div>

                            {/* Reseña */}
                            <p
                                className="text-base md:text-lg leading-relaxed mb-6 italic"
                                style={{ color: getBodyColor() }}
                            >
                                &ldquo;{testimonial.review}&rdquo;
                            </p>

                            {/* Separador decorativo - solo en modern */}
                            {!isProfessional && (
                                <div
                                    className="h-1 w-16 rounded-full mb-6"
                                    style={{
                                        backgroundColor: clientConfig.brand.colors.secondary,
                                    }}
                                />
                            )}

                            {/* Información del cliente */}
                            <div className="flex items-center gap-4">
                                {/* Avatar */}
                                {testimonial.avatar ? (
                                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2"
                                        style={{ borderColor: clientConfig.brand.colors.primary }}
                                    >
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-sm"
                                        style={{
                                            backgroundColor: isProfessional
                                                ? clientConfig.brand.colors.primary
                                                : clientConfig.brand.colors.secondary,
                                        }}
                                    >
                                        {getInitials(testimonial.name)}
                                    </div>
                                )}

                                {/* Nombre y rol */}
                                <div>
                                    <h4
                                        className="font-bold text-lg"
                                        style={{ color: getHeaderColor() }}
                                    >
                                        {testimonial.name}
                                    </h4>
                                    <p
                                        className="text-sm"
                                        style={{ color: clientConfig.brand.colors.textMuted }}
                                    >
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </AnimatedGrid>

                {/* Estadística de satisfacción */}
                <AnimatedSection animation="scale" delay={0.2}>
                    <div className="text-center mt-16">
                    <div
                        className="inline-flex flex-col md:flex-row items-center gap-6 px-8 py-6 rounded-xl shadow-md border"
                        style={{
                            backgroundColor: clientConfig.brand.colors.background,
                            borderColor: `${clientConfig.brand.colors.textMuted}30`,
                        }}
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center"
                                style={{
                                    backgroundColor: `${clientConfig.brand.colors.success}20`,
                                }}
                            >
                                <LucideIcons.TrendingUp
                                    className="w-8 h-8"
                                    style={{ color: clientConfig.brand.colors.success }}
                                />
                            </div>
                            <div className="text-left">
                                <p
                                    className="text-3xl font-bold"
                                    style={{ color: getHeaderColor() }}
                                >
                                    100%
                                </p>
                                <p
                                    className="text-sm"
                                    style={{ color: getBodyColor() }}
                                >
                                    Satisfacción
                                </p>
                            </div>
                        </div>

                        <div
                            className="h-12 w-px hidden md:block"
                            style={{ backgroundColor: `${clientConfig.brand.colors.textMuted}40` }}
                        />

                        <div className="flex items-center gap-3">
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center"
                                style={{
                                    backgroundColor: `${clientConfig.brand.colors.warning}20`,
                                }}
                            >
                                <LucideIcons.Star
                                    className="w-8 h-8 fill-current"
                                    style={{ color: clientConfig.brand.colors.warning }}
                                />
                            </div>
                            <div className="text-left">
                                <p
                                    className="text-3xl font-bold"
                                    style={{ color: getHeaderColor() }}
                                >
                                    5.0
                                </p>
                                <p
                                    className="text-sm"
                                    style={{ color: getBodyColor() }}
                                >
                                    Calificación
                                </p>
                            </div>
                        </div>

                        <div
                            className="h-12 w-px hidden md:block"
                            style={{ backgroundColor: `${clientConfig.brand.colors.textMuted}40` }}
                        />

                        <div className="flex items-center gap-3">
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center"
                                style={{
                                    backgroundColor: `${clientConfig.brand.colors.secondary}20`,
                                }}
                            >
                                <LucideIcons.Users
                                    className="w-8 h-8"
                                    style={{ color: clientConfig.brand.colors.secondary }}
                                />
                            </div>
                            <div className="text-left">
                                <p
                                    className="text-3xl font-bold"
                                    style={{ color: getHeaderColor() }}
                                >
                                    +{testimonialItems.length * 30}
                                </p>
                                <p
                                    className="text-sm"
                                    style={{ color: getBodyColor() }}
                                >
                                    Clientes Felices
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
