"use client";

import { clientConfig } from "@/config/clientConfig";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CTAButtonProps {
    children: ReactNode;
    onClick: () => void;
    variant?: "primary" | "secondary" | "accent";
    size?: "small" | "medium" | "large";
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    className?: string;
    disabled?: boolean;
    ariaLabel?: string;
}

export default function CTAButton({
    children,
    onClick,
    variant = "primary",
    size = "medium",
    icon,
    iconPosition = "left",
    className = "",
    disabled = false,
    ariaLabel,
}: CTAButtonProps) {
    const { components, colors, enableAnimations } = clientConfig.brand;

    // Obtener configuración de botones
    const buttonConfig = components.buttons;

    // Colores según variante
    const variantColors = {
        primary: {
            bg: colors.primary,
            text: "#ffffff",
            hover: `${colors.primary}dd`,
        },
        secondary: {
            bg: colors.secondary,
            text: colors.textPrimary,
            hover: `${colors.secondary}dd`,
        },
        accent: {
            bg: colors.accent,
            text: "#ffffff",
            hover: `${colors.accent}dd`,
        },
    };

    const currentColors = variantColors[variant];
    const padding = buttonConfig.padding[size];
    const fontSize = buttonConfig.fontSize[size];

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1] as const,
            },
        },
        hover: {
            scale: buttonConfig.hoverScale,
            transition: { duration: 0.3 },
        },
        tap: {
            scale: 0.95,
        },
    };

    // Contenido del botón como JSX directo
    const buttonContent = (
        <>
            {icon && iconPosition === "left" && (
                <span className="flex-shrink-0">
                    {icon}
                </span>
            )}
            <span>{children}</span>
            {icon && iconPosition === "right" && (
                <span className="flex-shrink-0">
                    {icon}
                </span>
            )}
        </>
    );

    if (!enableAnimations) {
        return (
            <button
                onClick={onClick}
                disabled={disabled}
                aria-label={ariaLabel}
                className={`inline-flex items-center gap-3 font-semibold text-center transition-all duration-300 hover:shadow-lg disabled:opacity-50 cursor-pointer ${className}`}
                style={{
                    padding: padding,
                    borderRadius: buttonConfig.borderRadius,
                    fontSize: fontSize,
                    fontWeight: buttonConfig.fontWeight,
                    backgroundColor: currentColors.bg,
                    color: currentColors.text,
                    boxShadow: buttonConfig.shadow,
                }}
                onMouseEnter={(e) => {
                    if (!disabled) {
                        e.currentTarget.style.backgroundColor = currentColors.hover;
                        e.currentTarget.style.transform = `scale(${buttonConfig.hoverScale})`;
                    }
                }}
                onMouseLeave={(e) => {
                    if (!disabled) {
                        e.currentTarget.style.backgroundColor = currentColors.bg;
                        e.currentTarget.style.transform = "scale(1)";
                    }
                }}
            >
                {buttonContent}
            </button>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
            variants={buttonVariants}
            whileHover={!disabled ? "hover" : undefined}
            whileTap={!disabled ? "tap" : undefined}
            className={`inline-flex items-center gap-3 font-semibold text-center transition-all duration-300 disabled:opacity-50 cursor-pointer ${className}`}
            style={{
                padding: padding,
                borderRadius: buttonConfig.borderRadius,
                fontSize: fontSize,
                fontWeight: buttonConfig.fontWeight,
                backgroundColor: currentColors.bg,
                color: currentColors.text,
                boxShadow: buttonConfig.shadow,
            }}
        >
            {buttonContent}
        </motion.button>
    );
}
