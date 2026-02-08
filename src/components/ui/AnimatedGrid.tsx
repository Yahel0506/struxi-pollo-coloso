"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode, CSSProperties } from "react";
import { clientConfig } from "@/config/clientConfig";

interface AnimatedGridProps {
    children: ReactNode[];
    className?: string;
    staggerDelay?: number;
    style?: CSSProperties;
}

export default function AnimatedGrid({
    children,
    className = "",
    staggerDelay = 0.1,
    style,
}: AnimatedGridProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Si las animaciones están desactivadas, renderizar sin animación
    if (!clientConfig.brand.enableAnimations) {
        return <div className={className} style={style}>{children}</div>;
    }

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: staggerDelay,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1] as const,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className={className}
            style={style}
        >
            {children.map((child, index) => (
                <motion.div key={index} variants={itemVariants}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
}
