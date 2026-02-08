import "../styles/globals.css";
import { clientConfig } from "@/config/clientConfig";
import { getFont, getGoogleFontsLink } from "@/config/fonts";
import { Metadata } from "next";

// Metadatos estáticos - Next.js los procesa en build time
export const metadata: Metadata = {
    title: "Struxi Labs",
    description: "Desarrollo web profesional, páginas web para pymes México, landing pages de alta conversión, diseño web rápido, Struxi Labs, creación de sitios web con Next.js, digitalización de negocios locales.",
    icons: {
        icon: "/images/logo.png",
        shortcut: "/images/logo.png",
        apple: "/images/logo.png",
    },
    openGraph: {
        title: "Struxi Labs",
        description: "Desarrollo web profesional para pymes en México",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Struxi Labs",
        description: "Desarrollo web profesional para pymes en México",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Obtener las fuentes configuradas
    const headerFont = getFont(clientConfig.brand.typography.headers.fontFamily);
    const bodyFont = getFont(clientConfig.brand.typography.body.fontFamily);

    // Generar enlaces para fuentes personalizadas
    const headerFontLink = getGoogleFontsLink(clientConfig.brand.typography.headers.fontFamily);
    const bodyFontLink = getGoogleFontsLink(clientConfig.brand.typography.body.fontFamily);

    return (
        <html lang="es">
        <head>
            {/* Preconnect a Google Fonts para mejor rendimiento */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            {/* Fuentes con display=swap para evitar bloqueo */}
            {headerFontLink && (
                <link
                    href={`${headerFontLink}&display=swap`}
                    rel="stylesheet"
                />
            )}
            {bodyFontLink && bodyFontLink !== headerFontLink && (
                <link
                    href={`${bodyFontLink}&display=swap`}
                    rel="stylesheet"
                />
            )}

            {/* DNS prefetch para recursos externos */}
            <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
            <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        </head>
        <body
            className={bodyFont.className}
            style={{
                "--color-primary": clientConfig.brand.colors.primary,
                "--color-secondary": clientConfig.brand.colors.secondary,
                "--color-accent": clientConfig.brand.colors.accent,
                "--color-background": clientConfig.brand.colors.background,
                "--color-background-alt": clientConfig.brand.colors.backgroundAlt,
                "--color-text-primary": clientConfig.brand.colors.textPrimary,
                "--color-text-secondary": clientConfig.brand.colors.textSecondary,
                "--color-text-muted": clientConfig.brand.colors.textMuted,
                "--color-danger": clientConfig.brand.colors.danger,
                "--color-success": clientConfig.brand.colors.success,
                "--color-warning": clientConfig.brand.colors.warning,
                "--color-info": clientConfig.brand.colors.info,
                "--font-header": headerFont.style?.fontFamily || `"${clientConfig.brand.typography.headers.fontFamily}", sans-serif`,
                "--font-body": bodyFont.style?.fontFamily || `"${clientConfig.brand.typography.body.fontFamily}", sans-serif`,
                "--font-weight-header": clientConfig.brand.typography.headers.fontWeight,
                "--font-weight-body": clientConfig.brand.typography.body.fontWeight,
                "--color-header": clientConfig.brand.typography.headers.color || clientConfig.brand.colors.textPrimary,
                "--color-body": clientConfig.brand.typography.body.color || clientConfig.brand.colors.textSecondary,
            } as React.CSSProperties}
        >
        {children}
        </body>
        </html>
    );
}


