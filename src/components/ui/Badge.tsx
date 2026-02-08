"use client";

import { clientConfig } from "@/config/clientConfig";
import { ReactNode } from "react";

interface BadgeProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "accent" | "danger" | "success" | "warning" | "info" | "custom";
    icon?: ReactNode;
    className?: string;
    strikethrough?: boolean;  // Para texto tachado
    customColors?: {          // Colores personalizados (solo cuando variant="custom")
        backgroundColor: string;
        textColor: string;
    };
}

export default function Badge({
    children,
    variant = "primary",
    icon,
    className = "",
    strikethrough = false,
    customColors,
}: BadgeProps) {
    const { components, colors } = clientConfig.brand;
    const badgeConfig = components.badges;

    const variantColors = {
        primary: { bg: `${colors.primary}10`, border: colors.primary, text: colors.primary },
        secondary: { bg: `${colors.secondary}10`, border: colors.secondary, text: colors.secondary },
        accent: { bg: `${colors.accent}10`, border: colors.accent, text: colors.accent },
        danger: { bg: `${colors.danger}10`, border: colors.danger, text: colors.danger },
        success: { bg: `${colors.success}10`, border: colors.success, text: colors.success },
        warning: { bg: `${colors.warning}10`, border: colors.warning, text: colors.warning },
        info: { bg: `${colors.info}10`, border: colors.info, text: colors.info },
        custom: customColors
            ? { bg: customColors.backgroundColor, border: customColors.backgroundColor, text: customColors.textColor }
            : { bg: colors.primary, border: colors.primary, text: "#ffffff" },
    };

    const currentColors = variantColors[variant];

    return (
        <div
            className={`inline-flex items-center gap-2 uppercase tracking-wide ${className}`}
            style={{
                padding: badgeConfig.padding,
                borderRadius: badgeConfig.borderRadius,
                fontSize: badgeConfig.fontSize,
                fontWeight: badgeConfig.fontWeight,
                backgroundColor: currentColors.bg,
                borderWidth: variant === "custom" ? "0" : badgeConfig.borderWidth,
                borderColor: currentColors.border,
                color: currentColors.text,
                borderStyle: "solid",
            }}
        >
            {icon && <span className="flex-shrink-0">{icon}</span>}
            <span className={strikethrough ? "line-through" : ""}>{children}</span>
        </div>
    );
}
