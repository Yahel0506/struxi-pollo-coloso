"use client";

import { clientConfig } from "@/config/clientConfig";
import { getHeaderColor, getBodyColor } from "@/config/typography";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import CTAButton from "@/components/ui/CTAButton";

interface Product {
    name: string;
    description: string;
    type: string;
    price: string;
    benefit: string;
}

interface MenuItem {
    type: "category" | "product";
    name: string;
    image?: string;
    products?: Product[];
    // Para productos directos
    description?: string;
    productType?: string;
    price?: string;
    backgroundColor?: string;
    textColor?: string;
    // Badge opcional
    badge?: {
        show: boolean;
        text: string;
        strikethrough: boolean;
        backgroundColor: string;
        textColor: string;
    };
    // Lista de beneficios
    benefits?: string[];
}

export default function Menu() {
    const { menu } = clientConfig;
    const [selectedCategory, setSelectedCategory] = useState<MenuItem | null>(null);
    const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});
    const [maxHeight, setMaxHeight] = useState<number | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Calcular la altura máxima de todas las cards después del renderizado
    useEffect(() => {
        const calculateMaxHeight = () => {
            const heights = cardRefs.current
                .filter(ref => ref !== null)
                .map(ref => ref!.scrollHeight);

            if (heights.length > 0) {
                const max = Math.max(...heights);
                setMaxHeight(max);
            }
        };

        // Calcular después de que todo esté renderizado
        const timer = setTimeout(calculateMaxHeight, 100);

        // Recalcular cuando cambie el tamaño de la ventana
        window.addEventListener('resize', calculateMaxHeight);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', calculateMaxHeight);
        };
    }, [menu.items]);

    // Si la sección no está visible, no renderizar nada
    if (!menu.visible || !menu.items || menu.items.length === 0) {
        return null;
    }

    const handleImageError = (key: string) => {
        setImageErrors((prev) => ({ ...prev, [key]: true }));
    };

    const handleProductClick = (productName: string) => {
        const message = menu.whatsappMessageTemplate.replace("{product}", productName);
        const whatsappUrl = `https://wa.me/${clientConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    const openModal = (item: MenuItem) => {
        if (item.type === "category") {
            setSelectedCategory(item);
        }
    };

    const closeModal = () => {
        setSelectedCategory(null);
    };

    // Separar productos y categorías
    const products = menu.items.filter((item) => item.type === "product");
    const categories = menu.items.filter((item) => item.type === "category");

    // Obtener tamaños de cards desde config (solo para categorías)
    const categoryCardSizes = clientConfig.brand.components.cards.sizes.menuCategories;

    return (
        <>
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
                                icon={<ShoppingCart className="w-5 h-5" />}
                                className="mb-5"
                            >
                                {menu.badge}
                            </Badge>
                            <h2
                                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
                                style={{ color: getHeaderColor() }}
                            >
                                {menu.title}
                            </h2>
                            <p
                                className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
                                style={{ color: getBodyColor() }}
                            >
                                {menu.subtitle}
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Productos directos (Cards 9:16) - Lista vertical en móvil, carrusel horizontal en desktop */}
                    {products.length > 0 && (
                        <div className="mb-12">
                            <div
                                className={`menu-horizontal-scroll flex flex-col items-center md:flex-row gap-6 md:gap-8 md:overflow-x-auto pb-4 px-2 ${
                                    products.length <= 3 ? 'md:justify-center' : 'md:justify-start'
                                }`}
                                style={{
                                    WebkitOverflowScrolling: "touch",
                                }}
                            >
                                {products.map((item, index) => {
                                    const itemKey = `product-${index}`;
                                    const hasImage = item.image && !imageErrors[itemKey];

                                    // Determinar colores - prioridad: custom > imagen > config
                                    const customBg = item.backgroundColor;
                                    const customText = item.textColor;

                                    const bgColor = customBg || clientConfig.brand.colors.background;
                                    const titleColor = customText || (hasImage ? "#ffffff" : getHeaderColor());
                                    const descColor = customText || (hasImage ? "#e5e7eb" : getBodyColor());
                                    const priceColor = customText || (hasImage ? "#ffffff" : clientConfig.brand.colors.primary);

                                    return (
                                        <motion.div
                                            key={itemKey}
                                            ref={(el) => {
                                                cardRefs.current[index] = el;
                                            }}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.2 }}
                                            transition={{
                                                duration: 0.6,
                                                delay: index * 0.1,
                                                ease: [0.25, 0.4, 0.25, 1],
                                            }}
                                            className="menu-product-card relative overflow-hidden rounded-2xl w-full max-w-[320px] md:max-w-none md:shrink-0"
                                            style={{
                                                backgroundColor: bgColor,
                                                boxShadow: clientConfig.brand.components.cards.shadow,
                                                height: maxHeight ? `${maxHeight}px` : 'auto',
                                            }}
                                        >
                                            {/* Imagen de fondo opcional */}
                                            {hasImage && (
                                                <div className="absolute inset-0 pointer-events-none">
                                                    <Image
                                                        src={item.image!}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover opacity-30"
                                                        onError={() => handleImageError(itemKey)}
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                                </div>
                                            )}

                                            {/* Contenido del producto */}
                                            <div className="relative h-full grid grid-rows-[1fr_auto] p-6">
                                                {/* Contenido superior (crece con el contenido) */}
                                                <div className="menu-product-content pb-4">
                                                    {/* Tipo de producto */}
                                                    <span
                                                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                                                        style={{
                                                            backgroundColor: `${clientConfig.brand.colors.secondary}30`,
                                                            color: clientConfig.brand.colors.secondary,
                                                            borderWidth: "2px",
                                                            borderColor: clientConfig.brand.colors.secondary,
                                                        }}
                                                    >
                                                        {item.productType}
                                                    </span>

                                                    {/* Nombre del producto */}
                                                    <h3
                                                        className="text-2xl font-bold mb-2"
                                                        style={{ color: titleColor }}
                                                    >
                                                        {item.name}
                                                    </h3>

                                                    {/* Descripción */}
                                                    <p
                                                        className="text-sm mb-4 leading-relaxed"
                                                        style={{ color: descColor }}
                                                    >
                                                        {item.description}
                                                    </p>

                                                    {/* Lista de beneficios/características */}
                                                    {item.benefits && item.benefits.length > 0 && (
                                                        <ul className="space-y-2">
                                                            {item.benefits.map((benefit, idx) => (
                                                                <li
                                                                    key={idx}
                                                                    className="flex items-start gap-2 text-xs"
                                                                    style={{ color: descColor }}
                                                                >
                                                                    <span
                                                                        className="mt-0.5 shrink-0"
                                                                        style={{ color: clientConfig.brand.colors.success }}
                                                                    >
                                                                        ✓
                                                                    </span>
                                                                    <span>{benefit}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>

                                                {/* Sección inferior pegada al fondo (Badge, Precio y Botón) */}
                                                <div className="pt-4">
                                                    {/* Badge opcional arriba del precio */}
                                                    {item.badge?.show && (
                                                        <div className="mb-3">
                                                            <Badge
                                                                variant="custom"
                                                                strikethrough={item.badge.strikethrough}
                                                                customColors={{
                                                                    backgroundColor: item.badge.backgroundColor,
                                                                    textColor: item.badge.textColor,
                                                                }}
                                                            >
                                                                {item.badge.text}
                                                            </Badge>
                                                        </div>
                                                    )}

                                                    <div className="flex items-center justify-between mb-4">
                                                        <span
                                                            className="text-3xl font-bold"
                                                            style={{ color: priceColor }}
                                                        >
                                                            {item.price}
                                                        </span>
                                                    </div>
                                                    <CTAButton
                                                        onClick={() => handleProductClick(item.name)}
                                                        variant="primary"
                                                        size="medium"
                                                    >
                                                        Adquirir
                                                    </CTAButton>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Categorías (Botones con modal) - Lista vertical en móvil, carrusel horizontal en desktop */}
                    {categories.length > 0 && (
                        <div>
                            <div
                                className={`menu-horizontal-scroll flex flex-col items-center md:flex-row gap-4 md:gap-6 md:overflow-x-auto pb-4 px-2 ${
                                    categories.length <= 5 ? 'md:justify-center' : 'md:justify-start'
                                }`}
                                style={{
                                    WebkitOverflowScrolling: "touch",
                                }}
                            >
                                {categories.map((item, index) => {
                                    const itemKey = `category-${index}`;
                                    const hasImage = item.image && !imageErrors[itemKey];

                                    return (
                                        <motion.button
                                            key={itemKey}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.2 }}
                                            transition={{
                                                duration: 0.6,
                                                delay: index * 0.1,
                                                ease: [0.25, 0.4, 0.25, 1],
                                            }}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => openModal(item)}
                                            className="menu-category-card flex flex-col items-center gap-3 p-4 rounded-2xl transition-all w-full max-w-[320px] md:max-w-none md:shrink-0"
                                            style={{
                                                backgroundColor: clientConfig.brand.colors.background,
                                                boxShadow: clientConfig.brand.components.cards.shadow,
                                                minHeight: categoryCardSizes.minHeight || undefined,
                                                maxHeight: categoryCardSizes.maxHeight || undefined,
                                            }}
                                        >
                                            {hasImage && (
                                                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                                                    <Image
                                                        src={item.image!}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover"
                                                        onError={() => handleImageError(itemKey)}
                                                    />
                                                </div>
                                            )}
                                            <span
                                                className="text-base font-semibold text-center"
                                                style={{ color: getHeaderColor() }}
                                            >
                                                {item.name}
                                            </span>
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Modal de productos */}
            <AnimatePresence>
                {selectedCategory && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        style={{
                            backgroundColor: "rgba(0, 0, 0, 0.75)",
                            backdropFilter: "blur(8px)",
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl"
                            style={{
                                backgroundColor: clientConfig.brand.colors.background,
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                            }}
                        >
                            {/* Header del modal */}
                            <div
                                className="sticky top-0 z-10 flex items-center justify-between p-6 border-b"
                                style={{
                                    backgroundColor: clientConfig.brand.colors.background,
                                    borderColor: `${clientConfig.brand.colors.textMuted}20`,
                                }}
                            >
                                <h3
                                    className="text-2xl md:text-3xl font-bold"
                                    style={{ color: getHeaderColor() }}
                                >
                                    {selectedCategory.name}
                                </h3>
                                <button
                                    onClick={closeModal}
                                    className="p-2 rounded-full transition-colors hover:bg-gray-100"
                                    style={{ color: clientConfig.brand.colors.textSecondary }}
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Lista de productos */}
                            <div className="p-6 space-y-4">
                                {selectedCategory.products?.map((product, idx) => (
                                    <motion.div
                                        key={`product-${idx}`}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="p-6 rounded-xl border-2 hover:shadow-lg transition-all"
                                        style={{
                                            borderColor: `${clientConfig.brand.colors.textMuted}20`,
                                            backgroundColor: clientConfig.brand.colors.backgroundAlt,
                                        }}
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-start gap-3 mb-2">
                                                    <h4
                                                        className="text-xl font-bold"
                                                        style={{ color: getHeaderColor() }}
                                                    >
                                                        {product.name}
                                                    </h4>
                                                    <span
                                                        className="px-2 py-1 rounded-md text-xs font-semibold whitespace-nowrap"
                                                        style={{
                                                            backgroundColor: `${clientConfig.brand.colors.accent}20`,
                                                            color: clientConfig.brand.colors.accent,
                                                        }}
                                                    >
                                                        {product.type}
                                                    </span>
                                                </div>
                                                <p
                                                    className="text-sm mb-3"
                                                    style={{ color: getBodyColor() }}
                                                >
                                                    {product.description}
                                                </p>
                                                {product.benefit && (
                                                    <div
                                                        className="inline-block px-3 py-1 rounded-lg text-xs font-semibold"
                                                        style={{
                                                            backgroundColor: `${clientConfig.brand.colors.success}15`,
                                                            color: clientConfig.brand.colors.success,
                                                        }}
                                                    >
                                                        ✓ {product.benefit}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span
                                                    className="text-2xl font-bold whitespace-nowrap"
                                                    style={{
                                                        color: clientConfig.brand.colors.primary,
                                                    }}
                                                >
                                                    {product.price}
                                                </span>
                                                <CTAButton
                                                    onClick={() => {
                                                        handleProductClick(product.name);
                                                        closeModal();
                                                    }}
                                                    variant="primary"
                                                    size="small"
                                                >
                                                    Pedir
                                                </CTAButton>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
