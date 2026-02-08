import type {FontFamily} from "./fonts";
import {getUIConfig} from "./presets";

// Interfaces para tipado de elementos (se mantienen igual)
interface GalleryItem {
    image: string;
    name: string;
}

interface TestimonialItem {
    name: string;
    role: string;
    review: string;
    stars: number;
    avatar?: string;
}

interface FeatureItem {
    icon: string;
    title: string;
    description: string;
}

interface ServiceItem {
    id: string;
    icon: string;
    title: string;
    description: string;
    benefits?: string[];
}

interface PainPointItem {
    icon: string;
    question: string;
    description: string;
}

interface SocialProof {
    show: boolean;
    stat: string;
    label: string;
    icon?: string;
    text?: string;
    avatarCount?: number;
}

interface MenuProduct {
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
    products?: MenuProduct[];
    // Para productos directos
    description?: string;
    productType?: string;
    price?: string;
    backgroundColor?: string;
    textColor?: string;
    badge?: {
        show: boolean;
        text: string;
        strikethrough: boolean;
        backgroundColor: string;
        textColor: string;
    };
    benefits?: string[];
}

interface BranchLocation {
    name: string;
    address: string;
    image?: string;
    googleMapsLink: string;
}

export const clientConfig = {
    // 1. MARCA - Identidad visual rápida
    brand: {
        name: "El Pollo Coloso",
        tagline: "Desde 1982 el mejor sabor de Ciudad Guzmán.",
        logoPath: "/images/logo.png",
        faviconPath: "/images/logo.png",
        seoDescription: "El Pollo Coloso le ofrece pollos al estilo Sinaloa con una de los mejores tratos así como de un gran sazón.",
        colors: {
            primary: "#e61919",
            secondary: "#ffb400",
            accent: "#22c55e",
            background: "#ffffff",
            backgroundAlt: "#f9fafb",
            textPrimary: "#111827",
            textSecondary: "#4b5563",
            textMuted: "#9ca3af",
            danger: "#dc2626",
            success: "#16a34a",
            warning: "#ea580c",
            info: "#0284c7",
        },
        showNameInHeader: true,
        typography: {
            headers: {fontFamily: "Montserrat" as FontFamily, fontWeight: 800, color: "#e61919"},
            body: {fontFamily: "Inter" as FontFamily, fontWeight: 400, color: ""},
        },
        theme: "modern" as "modern" | "professional" | "minimal",
        enableAnimations: true,
        uiPreset: "modern" as "modern" | "professional" | "minimal",
        get components() {
            return getUIConfig(this.uiPreset);
        },
    },

    // 2. CONTACTO - Lo más importante
    contact: {
        whatsappNumber: "523411002311",
        whatsappMessage: "¡Hola! Quiero hacer un pedido.",
        phoneDisplay: "341 100 2311",
        email: "",
        address: "Calle Gral. Ramón Corona Madrigal 550, centro, 49000 Cdad. Guzmán, Jal.",
        googleMapsLink: "https://maps.app.goo.gl/YQwA5Kkh3PSw5QZM6",
    },

    // 3. HERO - Directo al grano
    hero: {
        title: "¡Pide tu Pollo Coloso hoy!",
        subtitle: "Sabor tradicional asado al carbón con sus guarniciones de siempre.",
        buttonText: "Comprar Ahora",
        backgroundImage: "/images/menu/pollo.jpg",
        featuredImage: {show: true, path: "/images/logo.png", alt: "Pollo Coloso", maxWidth: "350px"},
    },

    announcement: {
        // Ruta de la imagen del anuncio. Dejar vacío ("") para ocultar la sección.
        // La imagen se mostrará al ancho de la pantalla manteniendo su relación de aspecto.
        imagePath: "", // Ejemplo: "/images/announcement-banner.jpg"
        // Alt text para accesibilidad
        altText: "Anuncio especial",
        // Ancho máximo del banner (opcional)
        maxWidth: "1920px", // Ejemplo: "1200px", "1600px", "100%" para ancho completo
    },

    // 4. MENÚ - Utilidad pura para el usuario
    menu: {
        visible: true,
        badge: "Menú y Precios",
        title: "Nuestras Promociones y Productos",
        subtitle: "Precios actualizados para servicio en sucursal y domicilio",
        whatsappMessageTemplate: "Hola, me interesa el {product}",
        items: [
            {
                type: "product",
                name: "1 POLLO Y MEDIO",
                description: "El paquete familiar por excelencia, comen hasta 5 personas.",
                price: "$265 MXN",
                image: "/images/menu/pollo.jpg",
                benefits: ["1 Pollo y Medio", "2 complementos", "Deliciosas salsas", "Tortillas calientes", "Totopos crujientes"],
            },
            {
                type: "product",
                name: "1 POLLO Y MEDIO",
                description: "El paquete familiar por excelencia, comen hasta 5 personas.",
                price: "$175 MXN",
                image: "/images/menu/pollo.jpg",
                benefits: ["1 Pollo Completo", "2 complementos", "Deliciosas salsas", "Tortillas calientes", "Totopos crujientes"],
            },
            {
                type: "category",
                name: "Pollo",
                image: "/images/menu/pollo.jpg",
                products: [
                    {
                        name: "1 Pollo Completo",
                        description: "Pollo Asado al carbón con el sazón de pollo coloso.",
                        type: "Pollo",
                        price: "$170",
                        benefit: ""
                    },
                ],
            },
            {
                type: "category",
                name: "Hamburguesas",
                image: "/images/menu/hamburguesas.jpg",
                products: [
                    {
                        name: "Hamburguesa de Res",
                        description: "Hamburguesa de Res acompañado con papas fritas.",
                        type: "Res",
                        price: "$70",
                        benefit: ""
                    },
                    {
                        name: "Hamburguesa de Pollo",
                        description: "Hamburguesa de Pollo acompañado con papas fritas.",
                        type: "Pollo",
                        price: "$70",
                        benefit: ""
                    },
                ],
            },
            {
                type: "category",
                name: "Alitas de Pollo",
                image: "/images/menu/alitas.jpg",
                products: [
                    {
                        name: "Alitas BBQ",
                        description: "Alitas de pollo al estilo BBQ con el sazón de pollo coloso acompañado de papas fritas.",
                        type: "BBQ",
                        price: "$85",
                        benefit: ""
                    },
                    {
                        name: "Alitas Naturales",
                        description: "Alitas de pollo naturales con el sazón de pollo coloso acompañado de papas fritas.",
                        type: "Naturales",
                        price: "$85",
                        benefit: ""
                    },
                    {
                        name: "Alitas Buffalo",
                        description: "Alitas de pollo al estilo Buffalo con el sazón de pollo coloso acompañado de papas fritas.",
                        type: "Buffalo",
                        price: "$85",
                        benefit: ""
                    },
                    {
                        name: "Alitas Mango Habanero",
                        description: "Alitas de pollo al estilo Mango Habanero con el sazón de pollo coloso acompañado de papas fritas.",
                        type: "Mango Habanero",
                        price: "$85",
                        benefit: ""
                    },
                ],
            },
            {
                type: "category",
                name: "Flautas",
                image: "/images/menu/flautas.jpg",
                products: [
                    {
                        name: "Orden de Flautas",
                        description: "Orden de flautas acompañado con ensalada.",
                        type: "Flautas",
                        price: "$45",
                        benefit: ""
                    },
                ],
            },
            {
                type: "category",
                name: "Dedos de Queso",
                image: "/images/menu/dedos.jpg",
                products: [
                    {
                        name: "Dedos de Queso",
                        description: "Dedos de queso acompañados con papas fritas.",
                        type: "Dedos de Queso",
                        price: "$65",
                        benefit: ""
                    },
                ],
            },
            {
                type: "category",
                name: "Quesadillas",
                image: "/images/menu/quesadillas.jpg",
                products: [
                    {
                        name: "Quesadilla Sencilla",
                        description: "Quesadilla grande acompañado de ensalada y todo el sabor de pollo coloso.",
                        type: "Sencilla",
                        price: "$50",
                        benefit: ""
                    },
                    {
                        name: "Quesadilla con Pollo",
                        description: "Quesadilla grande con pollo, acompañado de ensalada y todo el sabor de pollo coloso.",
                        type: "Con Pollo",
                        price: "$70",
                        benefit: ""
                    },
                ],
            },
            {
                type: "category",
                name: "Nuggets y Papas a la Francesa",
                image: "/images/menu/nuggets.jpg",
                products: [
                    {
                        name: "Papas a la Francesa",
                        description: "Papas a la francesa elaboradas en el momento con el sazón de Pollo Coloso.",
                        type: "Papas",
                        price: "$45",
                        benefit: ""
                    },
                    {
                        name: "Nuggets de Pollo",
                        description: "Nuggets de pollo con el sazón del Pollo Coloso acompañados de papas a la francesa.",
                        type: "Nuggets",
                        price: "$55",
                        benefit: ""
                    },
                ],
            },
            {
                type: "category",
                name: "Ensaladas",
                image: "/images/menu/ensaladas.jpg",
                products: [
                    {
                        name: "Ensalada Grande",
                        description: "Ensalada grande con el sazón de Pollo Coloso.",
                        type: "Grande",
                        price: "$40",
                        benefit: ""
                    },
                    {
                        name: "Ensalada Chica",
                        description: "Ensalada chica con el sazón de Pollo Coloso.",
                        type: "Chica",
                        price: "$25",
                        benefit: ""
                    },

                ],
            },
            {
                type: "category",
                name: "Complementos",
                image: "/images/menu/complementos.jpg",
                products: [
                    {
                        name: "Codito de Jamón",
                        description: "Codito de Jamón hecho con todo el sazón de Pollo Coloso.",
                        type: "Complemento",
                        price: "$25",
                        benefit: ""
                    },
                    {
                        name: "Codito de Pepino",
                        description: "Codito de Pepino hecho con todo el sazón de Pollo Coloso.",
                        type: "Complemento",
                        price: "$25",
                        benefit: ""
                    },
                    {
                        name: "Arroz Blanco",
                        description: "Arroz Blanco hecho con todo el sazón de Pollo Coloso.",
                        type: "Complemento",
                        price: "$25",
                        benefit: ""
                    },
                    {
                        name: "Arroz Rojo",
                        description: "Arroz Rojo hecho con todo el sazón de Pollo Coloso.",
                        type: "Complemento",
                        price: "$25",
                        benefit: ""
                    },
                    {
                        name: "Guacamole",
                        description: "Guacamole hecho con todo el sazón de Pollo Coloso.",
                        type: "Complemento",
                        price: "$35",
                        benefit: ""
                    },
                    {
                        name: "Papas en Gajo",
                        description: "Papas en Gajo hecho con todo el sazón de Pollo Coloso.",
                        type: "Complemento",
                        price: "$45",
                        benefit: ""
                    },
                    {
                        name: "Papas Adobadas",
                        description: "Papas Adobadas hecho con todo el sazón de Pollo Coloso.",
                        type: "Complemento",
                        price: "$30",
                        benefit: ""
                    },
                ],
            },
        ] as MenuItem[],
    },

    // 5. SUCURSALES - Para que sepan a dónde ir
    branches: {
        badge: "Ubicaciones",
        title: "Pasa por tu pollo",
        subtitle: "Estamos en puntos estratégicos de Ciudad Guzmán",
        items: [
            {
                name: "Sucursal Ramón Corona",
                address: "Calle Gral. Ramón Corona Madrigal 550, centro, 49000 Cdad. Guzmán, Jal.",
                googleMapsLink: "https://maps.app.goo.gl/cJZ5wWN8z2Ggi9S57",
            },
            {
                name: "Sucursal Carlos Páez Stille",
                address: "Av Carlos Páez Stille 429, 20 de Noviembre, 49087 Cdad. Guzmán, Jal.",
                googleMapsLink: "https://goo.gl/maps/sucursal2",
            },
        ] as BranchLocation[],
    },

    // 6. FAQ - Solo dudas de logística
    faqs: {
        badge: "Info",
        title: "Horarios y Entregas",
        subtitle: "Lo que necesitas saber antes de pedir",
        items: [
            {
                question: "¿Tienen servicio a domicilio?",
                answer: "Sí, en toda el área urbana de Ciudad Guzmán con un pequeño costo extra según la zona."
            },
            {
                question: "¿A qué hora cierran?",
                answer: "Abrimos diario de 11:00 AM a 6:00 PM. ¡Los domingos volamos, pide temprano!"
            },
            {
                question: "¿Aceptan tarjetas?",
                answer: "Sí, aceptamos todas las tarjetas de débito y crédito en nuestras sucursales."
            },
        ],
    },

    // Secciones deshabilitadas por no ser relevantes para este giro
    painPoints: {
        badge: "¿Te suena familiar?",
        title: "¿Por qué tu negocio no crece como debería?",
        subtitle: "Identificamos los problemas más comunes que detienen tus ventas digitales.",
        closingText: "Tenemos la solución perfecta para ti",
        points: [] as PainPointItem[]
    },
    services: {
        badge: "Nuestras Soluciones",
        title: "Todo lo que tu negocio necesita para despegar",
        subtitle: "Servicios diseñados específicamente para hacer crecer tu presencia digital y atraer más clientes.",
        items: [] as ServiceItem[]
    },
    features: {
        badge: "¿Por qué elegirnos?",
        title: "No somos como los demás",
        subtitle: "Mientras otras agencias tardan semanas y cobran fortunas, nosotros ofrecemos rapidez, calidad y precios inigualables.",
        items: [] as FeatureItem[],
        socialProof: {
            show: false,
            stat: "",
            label: "",
            icon: "",
            text: "",
            avatarCount: 0
        } as SocialProof
    },
    gallery: {
        badge: "Nuestro Trabajo",
        title: "Proyectos que hablan por sí mismos",
        subtitle: "Cada diseño cuenta una historia de éxito",
        showImageNames: true, // false para ocultar los nombres de las imágenes
        items: [] as GalleryItem[],
    },
    testimonials: {
        badge: "Testimonios",
        title: "Lo que dicen nuestros clientes",
        subtitle: "Historias reales de negocios que transformamos",
        items: [] as TestimonialItem[],
    },
    socials: {facebook: "https://facebook.com/PolloColosoJal", instagram: "", tiktok: ""}
};