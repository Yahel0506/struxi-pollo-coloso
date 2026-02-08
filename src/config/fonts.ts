import {
    Inter,
    Poppins,
    Montserrat,
    Roboto,
    Open_Sans,
    Raleway,
    Lato,
    Nunito,
    Source_Sans_3,
    Playfair_Display,
    Merriweather,
    Oswald,
    Ubuntu,
    Lora,
    Crimson_Text,
    Work_Sans,
    Fira_Sans,
    PT_Sans,
    Libre_Franklin,
    IBM_Plex_Sans,
    Dancing_Script,
    Pacifico,
    Lobster,
    Righteous
} from "next/font/google";

// Fuentes predefinidas más populares con configuración completa
export const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    display: "swap"
});

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    display: "swap"
});

export const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    display: "swap"
});

export const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "900"],
    display: "swap"
});

export const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    display: "swap"
});

export const raleway = Raleway({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    display: "swap"
});

export const lato = Lato({
    subsets: ["latin"],
    weight: ["300", "400", "700", "900"],
    display: "swap"
});

export const nunito = Nunito({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    display: "swap"
});

export const sourceSans = Source_Sans_3({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    display: "swap"
});

export const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    display: "swap"
});

export const merriweather = Merriweather({
    subsets: ["latin"],
    weight: ["300", "400", "700", "900"],
    display: "swap"
});

export const oswald = Oswald({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap"
});

export const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    display: "swap"
});

export const lora = Lora({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap"
});

export const crimsonText = Crimson_Text({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    display: "swap"
});

export const workSans = Work_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    display: "swap"
});

export const firaSans = Fira_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    display: "swap"
});

export const ptSans = PT_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap"
});

export const libreFranklin = Libre_Franklin({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    display: "swap"
});

export const ibmPlexSans = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap"
});

export const dancingScript = Dancing_Script({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap"
});

export const pacifico = Pacifico({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap"
});

export const lobster = Lobster({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap"
});

export const righteous = Righteous({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap"
});

// Tipo que incluye todas las fuentes predefinidas + opción personalizada
export type FontFamily =
    | "Inter"
    | "Poppins"
    | "Montserrat"
    | "Roboto"
    | "Open Sans"
    | "Raleway"
    | "Lato"
    | "Nunito"
    | "Source Sans 3"
    | "Playfair Display"
    | "Merriweather"
    | "Oswald"
    | "Ubuntu"
    | "Lora"
    | "Crimson Text"
    | "Work Sans"
    | "Fira Sans"
    | "PT Sans"
    | "Libre Franklin"
    | "IBM Plex Sans"
    | "Dancing Script"
    | "Pacifico"
    | "Lobster"
    | "Righteous"
    | string; // Permite cualquier string para fuentes personalizadas

// Mapeo de nombres a fuentes de Next.js
const fontMap = {
    "Inter": inter,
    "Poppins": poppins,
    "Montserrat": montserrat,
    "Roboto": roboto,
    "Open Sans": openSans,
    "Raleway": raleway,
    "Lato": lato,
    "Nunito": nunito,
    "Source Sans 3": sourceSans,
    "Playfair Display": playfair,
    "Merriweather": merriweather,
    "Oswald": oswald,
    "Ubuntu": ubuntu,
    "Lora": lora,
    "Crimson Text": crimsonText,
    "Work Sans": workSans,
    "Fira Sans": firaSans,
    "PT Sans": ptSans,
    "Libre Franklin": libreFranklin,
    "IBM Plex Sans": ibmPlexSans,
    "Dancing Script": dancingScript,
    "Pacifico": pacifico,
    "Lobster": lobster,
    "Righteous": righteous,
};

/**
 * Obtiene el objeto de fuente de Next.js para una familia de fuentes dada
 * Si la fuente no está predefinida, devuelve un objeto con la fuente personalizada
 */
export function getFont(fontFamily: FontFamily) {
    if (fontFamily in fontMap) {
        return fontMap[fontFamily as keyof typeof fontMap];
    }

    // Para fuentes personalizadas, devolver un objeto compatible
    return {
        className: `font-custom-${fontFamily.replace(/\s+/g, '-').toLowerCase()}`,
        style: { fontFamily: `"${fontFamily}", sans-serif` },
    };
}

/**
 * Lista de fuentes populares organizadas por categoría
 */
export const fontCategories = {
    "Sans Serif Modernas": [
        "Inter",
        "Poppins",
        "Nunito",
        "Source Sans 3",
        "Work Sans",
        "Fira Sans",
        "IBM Plex Sans"
    ],
    "Sans Serif Clásicas": [
        "Roboto",
        "Open Sans",
        "Lato",
        "PT Sans",
        "Ubuntu",
        "Libre Franklin"
    ],
    "Para Títulos": [
        "Montserrat",
        "Raleway",
        "Oswald",
        "Playfair Display"
    ],
    "Serif Elegantes": [
        "Merriweather",
        "Lora",
        "Crimson Text",
        "Playfair Display"
    ],
    "Decorativas": [
        "Dancing Script",
        "Pacifico",
        "Lobster",
        "Righteous"
    ]
};

/**
 * Obtiene el enlace de Google Fonts para una fuente personalizada
 */
export function getGoogleFontsLink(fontFamily: string): string {
    if (fontFamily in fontMap) {
        return ""; // Las fuentes predefinidas ya se cargan automáticamente
    }

    const formattedName = fontFamily.replace(/\s+/g, '+');
    return `https://fonts.googleapis.com/css2?family=${formattedName}:wght@300;400;500;600;700;800;900&display=swap`;
}

/**
 * Genera el CSS personalizado para fuentes personalizadas
 */
export function generateCustomFontCSS(fontFamily: string): string {
    if (fontFamily in fontMap) {
        return ""; // No necesita CSS personalizado
    }

    const googleFontsLink = getGoogleFontsLink(fontFamily);
    const className = `font-custom-${fontFamily.replace(/\s+/g, '-').toLowerCase()}`;

    return `
@import url('${googleFontsLink}');

.${className} {
    font-family: "${fontFamily}", sans-serif;
}
    `.trim();
}

/**
 * Lista de fuentes recomendadas según el tipo de negocio
 */
export const businessTypeFonts = {
    "Tecnología": ["Inter", "Roboto", "Source Sans 3", "IBM Plex Sans"],
    "Diseño/Creatividad": ["Montserrat", "Nunito", "Work Sans", "Playfair Display"],
    "Corporativo": ["Open Sans", "Lato", "PT Sans", "Merriweather"],
    "Restaurante/Café": ["Playfair Display", "Lora", "Dancing Script", "Pacifico"],
    "Moda/Belleza": ["Montserrat", "Raleway", "Playfair Display", "Crimson Text"],
    "Medicina/Salud": ["Open Sans", "Source Sans 3", "Lato", "Merriweather"],
    "Legal/Consultoría": ["Merriweather", "Lora", "PT Sans", "Crimson Text"],
    "Fitness/Deportes": ["Oswald", "Ubuntu", "Righteous", "Work Sans"],
    "Educación": ["Open Sans", "Lato", "Source Sans 3", "Ubuntu"],
    "Arte/Cultura": ["Playfair Display", "Dancing Script", "Lora", "Crimson Text"]
};
