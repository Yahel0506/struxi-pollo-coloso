"use client";
import { clientConfig } from "@/config/clientConfig";
import { motion } from "framer-motion";
import { ReactNode } from "react";
interface CardProps {
    children: ReactNode;
    variant?: "default" | "bordered" | "elevated";
    className?: string;
    onClick?: () => void;
    hoverable?: boolean;
    width?: string | null;
    minHeight?: string | null;
    maxHeight?: string | null;
}
export default function Card({
    children,
    variant = "default",
    className = "",
    onClick,
    hoverable = true,
    width = null,
    minHeight = null,
    maxHeight = null,
}: CardProps) {
    const { components, colors, enableAnimations } = clientConfig.brand;
    const cardConfig = components.cards;
    const variantStyles = {
        default: {
            backgroundColor: colors.background,
            borderWidth: "0",
            borderColor: "transparent",
        },
        bordered: {
            backgroundColor: colors.background,
            borderWidth: cardConfig.borderWidth,
            borderColor: `${colors.textMuted}30`,
        },
        elevated: {
            backgroundColor: colors.background,
            borderWidth: "0",
            borderColor: "transparent",
        },
    };
    const currentStyles = variantStyles[variant];
    const isClickable = !!onClick;
    const cardVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1] as const,
            },
        },
        hover: hoverable ? {
            scale: cardConfig.hoverScale,
            y: -4,
            transition: { duration: 0.3 },
        } : {},
    };
    const baseClasses = `transition-all duration-300 ${isClickable ? 'cursor-pointer' : ''} ${className}`;
    const cardStyle = {
        padding: cardConfig.padding,
        borderRadius: cardConfig.borderRadius,
        backgroundColor: currentStyles.backgroundColor,
        borderWidth: currentStyles.borderWidth,
        borderColor: currentStyles.borderColor,
        borderStyle: "solid",
        boxShadow: variant === "elevated" ? cardConfig.shadow : undefined,
        width: width || undefined,
        minHeight: minHeight || undefined,
        maxHeight: maxHeight || undefined,
    };
    if (!enableAnimations) {
        return (
            <div
                className={baseClasses}
                style={cardStyle}
                onClick={onClick}
                onMouseEnter={hoverable ? (e) => {
                    e.currentTarget.style.transform = `scale(${cardConfig.hoverScale}) translateY(-4px)`;
                } : undefined}
                onMouseLeave={hoverable ? (e) => {
                    e.currentTarget.style.transform = "scale(1) translateY(0)";
                } : undefined}
            >
                {children}
            </div>
        );
    }
    return (
        <motion.div
            className={baseClasses}
            style={cardStyle}
            variants={cardVariants}
            whileHover={hoverable ? "hover" : undefined}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
}