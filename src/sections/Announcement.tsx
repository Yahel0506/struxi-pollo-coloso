"use client";

import { clientConfig } from "@/config/clientConfig";
import Image from "next/image";
import { useState } from "react";

export default function Announcement() {
    const [imageError, setImageError] = useState(false);
    const imagePath = clientConfig.announcement.imagePath;
    const altText = clientConfig.announcement.altText;
    const maxWidth = clientConfig.announcement.maxWidth;

    // Si no hay imagen configurada o hubo un error al cargarla, no renderizar nada
    if (!imagePath || imagePath.trim() === "" || imageError) {
        return null;
    }

    return (
        <section className="w-full flex justify-center">
            <div
                className="relative w-full"
                style={{ maxWidth: maxWidth }}
            >
                <Image
                    src={imagePath}
                    alt={altText}
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-cover"
                    priority={false}
                    onError={() => setImageError(true)}
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
                />
            </div>
        </section>
    );
}
