"use client";

import { clientConfig } from "@/config/clientConfig";
import { getHeaderColor, getBodyColor } from "@/config/typography";
import * as LucideIcons from "lucide-react";
import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import CTAButton from "@/components/ui/CTAButton";
import { motion } from "framer-motion";

export default function FAQ() {
    const { faqs } = clientConfig;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    if (!faqs || !faqs.items || faqs.items.length === 0) return null;

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            className="relative py-20 md:py-28 overflow-hidden"
            style={{ backgroundColor: clientConfig.brand.colors.background }}
        >
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Encabezado de la sección */}
                <AnimatedSection animation="fadeDown">
                    <div className="text-center mb-16 md:mb-20">
                        <Badge
                            variant="info"
                            icon={<LucideIcons.HelpCircle className="w-5 h-5" />}
                            className="mb-5"
                        >
                            {faqs.badge}
                        </Badge>
                        <h2
                            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
                            style={{ color: getHeaderColor() }}
                        >
                            {faqs.title}
                        </h2>
                        <p
                            className="text-xl md:text-2xl max-w-3xl mx-auto"
                            style={{ color: getBodyColor() }}
                        >
                            {faqs.subtitle}
                        </p>
                    </div>
                </AnimatedSection>

                {/* Lista de acordeones */}
                <div className="space-y-6">
                    {faqs.items.map((faq, index) => {
                        const isOpen = openIndex === index;
                        const enableAnimations = clientConfig.brand.enableAnimations;

                        return (
                            <motion.div
                                key={index}
                                initial={enableAnimations ? { opacity: 0, y: 20 } : false}
                                whileInView={enableAnimations ? { opacity: 1, y: 0 } : undefined}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative rounded-xl border-2 overflow-hidden transition-all duration-300"
                                style={{
                                    backgroundColor: clientConfig.brand.colors.background,
                                    borderColor: isOpen
                                        ? clientConfig.brand.colors.primary
                                        : `${clientConfig.brand.colors.textMuted}30`,
                                }}
                            >
                                {/* Pregunta (Header del acordeón) */}
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between gap-4 p-6 md:p-8 text-left transition-all duration-300 cursor-pointer"
                                    style={{
                                        backgroundColor: isOpen
                                            ? `${clientConfig.brand.colors.primary}05`
                                            : "transparent",
                                    }}
                                >
                                    {/* Número e icono */}
                                    <div className="flex items-center gap-4 flex-1">
                                        <div
                                            className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-300"
                                            style={{
                                                backgroundColor: isOpen
                                                    ? clientConfig.brand.colors.primary
                                                    : `${clientConfig.brand.colors.primary}15`,
                                                color: isOpen ? "#ffffff" : clientConfig.brand.colors.primary,
                                            }}
                                        >
                                            {index + 1}
                                        </div>

                                        {/* Pregunta */}
                                        <h3
                                            className="text-lg md:text-xl font-bold transition-colors duration-300"
                                            style={{
                                                color: isOpen
                                                    ? clientConfig.brand.colors.primary
                                                    : getHeaderColor(),
                                            }}
                                        >
                                            {faq.question}
                                        </h3>
                                    </div>

                                    {/* Icono de expandir/contraer */}
                                    <div
                                        className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300"
                                        style={{
                                            backgroundColor: isOpen
                                                ? `${clientConfig.brand.colors.primary}15`
                                                : `${clientConfig.brand.colors.textMuted}10`,
                                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                                        }}
                                    >
                                        <LucideIcons.ChevronDown
                                            className="w-5 h-5 transition-colors duration-300"
                                            style={{
                                                color: isOpen
                                                    ? clientConfig.brand.colors.primary
                                                    : clientConfig.brand.colors.textMuted,
                                            }}
                                        />
                                    </div>
                                </button>

                                {/* Respuesta (Content del acordeón) */}
                                <div
                                    className="overflow-hidden transition-all duration-500 ease-in-out"
                                    style={{
                                        maxHeight: isOpen ? "500px" : "0",
                                        opacity: isOpen ? 1 : 0,
                                    }}
                                >
                                    <div
                                        className="px-6 md:px-8 pb-6 md:pb-8 pt-2"
                                        style={{
                                            borderTop: isOpen ? `1px solid ${clientConfig.brand.colors.primary}20` : "none",
                                        }}
                                    >
                                        {/* Separador decorativo */}
                                        <div className="ml-14 mb-4">
                                            <div
                                                className="h-px w-16 rounded-full transition-all duration-500"
                                                style={{
                                                    backgroundColor: clientConfig.brand.colors.primary,
                                                    width: isOpen ? "64px" : "0px",
                                                }}
                                            />
                                        </div>

                                        {/* Respuesta */}
                                        <p
                                            className="ml-14 pr-6 md:pr-8 text-base md:text-lg leading-relaxed"
                                            style={{ color: getBodyColor() }}
                                        >
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>

                                {/* Barra lateral indicadora (solo cuando está abierto) */}
                                {isOpen && (
                                    <div
                                        className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300"
                                        style={{ backgroundColor: clientConfig.brand.colors.primary }}
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA al final */}
                <AnimatedSection animation="scale" delay={0.3}>
                    <div className="mt-16 text-center">
                        <p
                            className="text-lg mb-6"
                            style={{ color: getBodyColor() }}
                        >
                            ¿Tienes otra pregunta? Estamos aquí para ayudarte
                        </p>
                        <CTAButton
                            onClick={() => {
                                const whatsappUrl = `https://wa.me/${clientConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                                    "Hola! Tengo una pregunta sobre sus servicios."
                                )}`;
                                window.open(whatsappUrl, "_blank");
                            }}
                            variant="primary"
                            size="large"
                            icon={<LucideIcons.MessageCircle className="w-5 h-5" />}
                        >
                            Contactar por WhatsApp
                        </CTAButton>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
