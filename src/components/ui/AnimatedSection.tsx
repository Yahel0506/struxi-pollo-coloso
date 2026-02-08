"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";
import { clientConfig } from "@/config/clientConfig";

interface AnimatedSectionProps {
    children: ReactNode;
    animation?: "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scale" | "none";
    delay?: number;
    className?: string;
}

export default function AnimatedSection({
    children,
    animation = "fadeUp",
    delay = 0,
    className = "",
}: AnimatedSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Si las animaciones están desactivadas, renderizar sin animación
    if (!clientConfig.brand.enableAnimations) {
        return <div className={className}>{children}</div>;
    }

    // Variantes de animación sofisticadas
    const variants: Record<string, Variants> = {
        fadeUp: {
            hidden: { opacity: 0, y: 60, scale: 0.95 },
            visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    duration: 0.8,
                    delay,
                    ease: [0.25, 0.4, 0.25, 1], // Cubic bezier suave
                },
            },
        },
        fadeDown: {
            hidden: { opacity: 0, y: -60, scale: 0.95 },
            visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    duration: 0.8,
                    delay,
                    ease: [0.25, 0.4, 0.25, 1],
                },
            },
        },
        fadeLeft: {
            hidden: { opacity: 0, x: -60, scale: 0.95 },
            visible: {
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                    duration: 0.8,
                    delay,
                    ease: [0.25, 0.4, 0.25, 1],
                },
            },
        },
        fadeRight: {
            hidden: { opacity: 0, x: 60, scale: 0.95 },
            visible: {
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                    duration: 0.8,
                    delay,
                    ease: [0.25, 0.4, 0.25, 1],
                },
            },
        },
        scale: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.7,
                    delay,
                    ease: [0.34, 1.56, 0.64, 1], // Bounce suave
                },
            },
        },
        none: {
            hidden: {},
            visible: {},
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants[animation]}
            className={className}
        >
            {children}
        </motion.div>
    );
}
