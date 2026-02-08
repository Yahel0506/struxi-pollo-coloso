// 🎨 EJEMPLOS DE CONFIGURACIONES DE FUENTES
// Copia y pega cualquiera de estos ejemplos en tu clientConfig.tsx

// ============================================
// 🔥 FUENTES PARA TECNOLOGÍA
// ============================================

export const techExample = {
    typography: {
        headers: {
            fontFamily: "Space Grotesk", // Fuente moderna de Google Fonts
            fontWeight: 700,
            color: "",
        },
        body: {
            fontFamily: "Inter",
            fontWeight: 400,
            color: "",
        },
    },
    colors: {
        primary: "#3b82f6",
        secondary: "#8b5cf6",
        accent: "#06b6d4",
    },
    theme: "modern",
};

// ============================================
// ✨ FUENTES PARA ELEGANCIA/LUJO
// ============================================

export const luxuryExample = {
    typography: {
        headers: {
            fontFamily: "Cormorant Garamond", // Fuente elegante de Google Fonts
            fontWeight: 600,
            color: "",
        },
        body: {
            fontFamily: "Crimson Text",
            fontWeight: 400,
            color: "",
        },
    },
    colors: {
        primary: "#1f2937",
        secondary: "#d4af37", // Dorado
        accent: "#059669",
    },
    theme: "professional",
};

// ============================================
// 🎸 FUENTES PARA CREATIVIDAD/ARTE
// ============================================

export const creativeExample = {
    typography: {
        headers: {
            fontFamily: "Fredoka One", // Fuente divertida de Google Fonts
            fontWeight: 400,
            color: "",
        },
        body: {
            fontFamily: "Nunito",
            fontWeight: 400,
            color: "",
        },
    },
    colors: {
        primary: "#ec4899",
        secondary: "#f59e0b",
        accent: "#8b5cf6",
    },
    theme: "modern",
};

// ============================================
// 🏢 FUENTES CORPORATIVAS/PROFESIONALES
// ============================================

export const corporateExample = {
    typography: {
        headers: {
            fontFamily: "Source Sans Pro", // Fuente profesional de Google Fonts
            fontWeight: 600,
            color: "",
        },
        body: {
            fontFamily: "Open Sans",
            fontWeight: 400,
            color: "",
        },
    },
    colors: {
        primary: "#1e40af",
        secondary: "#6b7280",
        accent: "#059669",
    },
    theme: "professional",
};

// ============================================
// 🍕 FUENTES PARA RESTAURANTES/COMIDA
// ============================================

export const restaurantExample = {
    typography: {
        headers: {
            fontFamily: "Satisfy", // Fuente manuscrita de Google Fonts
            fontWeight: 400,
            color: "",
        },
        body: {
            fontFamily: "Lora",
            fontWeight: 400,
            color: "",
        },
    },
    colors: {
        primary: "#dc2626",
        secondary: "#f59e0b",
        accent: "#059669",
    },
    theme: "modern",
};

// ============================================
// 💪 FUENTES PARA FITNESS/DEPORTES
// ============================================

export const fitnessExample = {
    typography: {
        headers: {
            fontFamily: "Anton", // Fuente fuerte de Google Fonts
            fontWeight: 400,
            color: "",
        },
        body: {
            fontFamily: "Ubuntu",
            fontWeight: 400,
            color: "",
        },
    },
    colors: {
        primary: "#ef4444",
        secondary: "#f59e0b",
        accent: "#10b981",
    },
    theme: "modern",
};

// ============================================
// 💄 FUENTES PARA MODA/BELLEZA
// ============================================

export const beautyExample = {
    typography: {
        headers: {
            fontFamily: "Libre Baskerville", // Fuente elegante de Google Fonts
            fontWeight: 700,
            color: "",
        },
        body: {
            fontFamily: "Raleway",
            fontWeight: 400,
            color: "",
        },
    },
    colors: {
        primary: "#ec4899",
        secondary: "#f472b6",
        accent: "#8b5cf6",
    },
    theme: "modern",
};

// ============================================
// 🏥 FUENTES PARA MEDICINA/SALUD
// ============================================

export const medicalExample = {
    typography: {
        headers: {
            fontFamily: "Roboto Slab", // Fuente confiable de Google Fonts
            fontWeight: 500,
            color: "",
        },
        body: {
            fontFamily: "Source Sans 3",
            fontWeight: 400,
            color: "",
        },
    },
    colors: {
        primary: "#0284c7",
        secondary: "#06b6d4",
        accent: "#059669",
    },
    theme: "professional",
};

// ============================================
// 🎓 FUENTES PARA EDUCACIÓN
// ============================================

export const educationExample = {
    typography: {
        headers: {
            fontFamily: "Merriweather", // Fuente académica de Google Fonts
            fontWeight: 700,
            color: "",
        },
        body: {
            fontFamily: "Source Sans 3",
            fontWeight: 400,
            color: "",
        },
    },
    colors: {
        primary: "#1d4ed8",
        secondary: "#3b82f6",
        accent: "#059669",
    },
    theme: "professional",
};

// ============================================
// 🎯 FUENTES PARA IMPACTO/MARKETING
// ============================================

export const marketingExample = {
    typography: {
        headers: {
            fontFamily: "Bebas Neue", // Fuente impactante de Google Fonts
            fontWeight: 400,
            color: "",
        },
        body: {
            fontFamily: "Work Sans",
            fontWeight: 400,
            color: "",
        },
    },
    colors: {
        primary: "#dc2626",
        secondary: "#f59e0b",
        accent: "#059669",
    },
    theme: "modern",
};

// ============================================
// 📚 CÓMO USAR ESTOS EJEMPLOS
// ============================================

/*
1. Elige el ejemplo que más te guste
2. Copia la sección 'typography' y 'colors'
3. Pégala en tu clientConfig.tsx
4. ¡La fuente se carga automáticamente desde Google Fonts!

Ejemplo de cómo aplicar:

import { techExample } from './fontExamples';

export const clientConfig = {
    brand: {
        ...techExample, // Aplica el ejemplo completo
        // o aplica solo las fuentes:
        typography: techExample.typography,
        colors: techExample.colors,
        theme: techExample.theme,

        // resto de tu configuración...
        name: "Mi Negocio",
        // etc...
    }
}
*/

// ============================================
// 🔍 FUENTES POPULARES DE GOOGLE FONTS
// ============================================

export const popularGoogleFonts = {
    // Para títulos impactantes
    impact: [
        "Bebas Neue",
        "Anton",
        "Russo One",
        "Fjalla One",
        "Barlow Condensed",
        "Righteous",
        "Archivo Black",
    ],

    // Para elegancia y sofisticación
    elegant: [
        "Playfair Display",
        "Cormorant Garamond",
        "Libre Baskerville",
        "Crimson Text",
        "Lora",
        "Merriweather",
        "EB Garamond",
    ],

    // Para modernidad y tech
    modern: [
        "Inter",
        "Poppins",
        "Source Sans Pro",
        "Space Grotesk",
        "DM Sans",
        "Manrope",
        "Plus Jakarta Sans",
    ],

    // Para diversión y creatividad
    fun: [
        "Fredoka One",
        "Comfortaa",
        "Quicksand",
        "Pacifico",
        "Dancing Script",
        "Lobster",
        "Satisfy",
    ],

    // Para profesionalismo
    professional: [
        "Open Sans",
        "Roboto",
        "Lato",
        "Source Sans 3",
        "PT Sans",
        "Ubuntu",
        "Work Sans",
    ],
};

// ============================================
// 🎨 COMBINACIONES GANADORAS
// ============================================

export const winningCombinations = [
    {
        name: "Tecnología Moderna",
        headers: "Space Grotesk",
        body: "Inter",
        description: "Perfecta para startups tech y SaaS"
    },
    {
        name: "Elegancia Clásica",
        headers: "Playfair Display",
        body: "Crimson Text",
        description: "Ideal para lujo, joyería, moda alta"
    },
    {
        name: "Impacto Máximo",
        headers: "Bebas Neue",
        body: "Work Sans",
        description: "Para marketing agresivo y ventas"
    },
    {
        name: "Confianza Profesional",
        headers: "Source Sans Pro",
        body: "Open Sans",
        description: "Perfecta para consultorías y corporativos"
    },
    {
        name: "Creatividad Moderna",
        headers: "Fredoka One",
        body: "Nunito",
        description: "Para agencias creativas y arte"
    },
];
