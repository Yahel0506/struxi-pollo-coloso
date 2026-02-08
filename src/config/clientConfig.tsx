import type {FontFamily} from "./fonts";
import { getUIConfig } from "./presets";

// Interfaces para tipado de elementos
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
    // 1. INFORMACIÓN DE MARCA Y SEO
    brand: {
        name: "Struxi Labs",
        tagline: "Brindándole a tu negocio la presencia que merece.",
        logoPath: "/images/logo.svg",
        faviconPath: "/images/logo.svg",
        seoDescription: "desarrollo web profesional, páginas web para pymes México, landing pages de alta conversión, diseño web rápido, Struxi Labs, creación de sitios web con Next.js, digitalización de negocios locales.",

        // Sistema de colores
        colors: {
            primary: "#da007d",
            secondary: "#ffd65c",
            accent: "#0891b2",
            background: "#ffffff",
            backgroundAlt: "#f9fafb",
            textPrimary: "#111827",
            textSecondary: "#6b7280",
            textMuted: "#9ca3af",
            danger: "#dc2626",
            success: "#16a34a",
            warning: "#ea580c",
            info: "#0284c7",
        },

        showNameInHeader: true,

        // Sistema de tipografía
        typography: {
            headers: {
                fontFamily: "Montserrat" as FontFamily,
                fontWeight: 700,
                color: "",
            },
            body: {
                fontFamily: "Inter" as FontFamily,
                fontWeight: 400,
                color: "",
            },
        },

        // Tema visual y animaciones
        theme: "modern" as "modern" | "professional",
        enableAnimations: true,

        // 🎨 PRESET DE DISEÑO UI
        // Selecciona uno de los presets predefinidos que controla toda la apariencia visual
        // "modern" = Bordes redondeados, sombras suaves, diseño contemporáneo
        // "professional" = Líneas limpias, minimalista, corporativo
        // "minimal" = Ultra-minimalista, sin bordes redondeados, espacios amplios
        uiPreset: "modern" as "modern" | "professional" | "minimal",

        // Acceso a la configuración UI (se obtiene automáticamente del preset)
        get components() {
            return getUIConfig(this.uiPreset);
        },
    },

    // ...existing code...
    contact: {
        whatsappNumber: "523411768237", // Formato internacional sin el +
        whatsappMessage: "Hola! Me interesa pedir informes sobre sus servicios.",
        email: "yahelloppez@gmail.com", // Dejar "" para ocultar
        phoneDisplay: "341 176 8237", // Cómo se ve escrito en la web - Dejar "" para ocultar
        address: "", // Dejar "" para ocultar
        googleMapsLink: "", // Link para el botón de "Cómo llegar"
    },

    // 3. SECCIÓN HERO
    hero: {
        title: "Recibe más clientes con un sitio web profesional",
        subtitle: "Creamos tu presencia online para que tu negocio destaque y crezca.",
        buttonText: "Comenzar",
        backgroundImage: "/images/hero-bg.jpg",
        // Imagen destacada en el espacio central
        featuredImage: {
            show: false,              // true para mostrar la imagen, false para ocultarla
            path: "/images/logo.png",                 // Ruta de la imagen ej. "/images/hero-featured.png"
            alt: "Imagen destacada",  // Texto alternativo para accesibilidad
            maxWidth: "200px",        // Ancho máximo de la imagen ej. "400px", "600px", "800px"
        },
    },

    // 3.5. SECCIÓN DE ANUNCIOS (Banner publicitario)
    announcement: {
        // Ruta de la imagen del anuncio. Dejar vacío ("") para ocultar la sección.
        // La imagen se mostrará al ancho de la pantalla manteniendo su relación de aspecto.
        imagePath: "", // Ejemplo: "/images/announcement-banner.jpg"
        // Alt text para accesibilidad
        altText: "Anuncio especial",
        // Ancho máximo del banner (opcional)
        maxWidth: "1920px", // Ejemplo: "1200px", "1600px", "100%" para ancho completo
    },

    // 3.6. SECCIÓN DE MENÚ (Productos/Servicios)
    menu: {
        visible: true, // true para mostrar la sección, false para ocultarla
        badge: "Lo que ofrecemos",
        title: "Descubre nuestros servicios",
        subtitle: "Todo lo que necesitas para llevar tu negocio al siguiente nivel",

        // Mensaje predeterminado para WhatsApp cuando se selecciona un producto
        // Variables disponibles: {product} - se reemplazará con el nombre del producto
        whatsappMessageTemplate: "Hola! Me interesaría adquirir el {product}",

        // Items del menú - pueden ser categorías (con modal) o productos directos
        items: [
            {
                type: "product", // "product" muestra directamente como card
                name: "Plan Crecimiento",
                description: "Ideal para empezar sin gastos de mantenimiento anual de dominio.",
                productType: "Web Profesional Sin Dominio",
                price: "$999",
                image: "/images/growing-plan.webp", // Opcional para fondo de la card
                backgroundColor: "#001c60", // Opcional: color de fondo personalizado ej. "#1a1a1a"
                textColor: "#ffffff",       // Opcional: color de texto personalizado ej. "#ffffff"
                // Badge opcional con texto tachado o normal
                badge: {
                    show: true,
                    text: "$2199",
                    strikethrough: true,  // true para tachar el texto
                    backgroundColor: "rgba(255,0,0,0.34)", // Rojo
                    textColor: "rgba(255,255,255,0.66)",
                },
                // Lista de beneficios/características
                benefits: [
                    "Diseño responsive y moderno",
                    "Optimización SEO básica",
                    "Hasta 5 secciones (Encabezado, Gancho, Anuncio, Menú de productos limitado, Footer con contacto)",
                    "30 días de soporte gratis",
                ],
            },
            {
                type: "product", // "product" muestra directamente como card
                name: "Plan Profesional",
                description: "Para negocios que quieren su marca propia y total independencia.",
                productType: "Web Profesional con Dominio Personalizado",
                price: "$1799 + $599 anuales",
                image: "/images/professional-plan.jpg", // Opcional para fondo de la card
                backgroundColor: "#1c1c1c", // Opcional: color de fondo personalizado ej. "#1a1a1a"
                textColor: "#cdb149",       // Opcional: color de texto personalizado ej. "#ffffff"
                // Badge opcional con texto tachado o normal
                badge: {
                    show: true,
                    text: "$3599",
                    strikethrough: true,  // true para tachar el texto
                    backgroundColor: "rgba(255,0,0,0.34)", // Rojo
                    textColor: "rgba(255,255,255,0.66)",
                },
                // Lista de beneficios/características
                benefits: [
                    "Todo lo del Plan Crecimiento",
                    "Dominio personalizado GRATIS el primer año (.com, .mx, etc)",
                    "Certificado SSL (sitio seguro)",
                    "Correos corporativos profesionales",
                    "Hosting premium por 1 año",
                    "Acceso a 7 nuevas secciones (Menú de productos completo, Puntos de dolor, Servicios, Diferenciadores, Galería, Testimonios, Preguntas frecuentes)",
                ],
            },
        ] as MenuItem[],
        // EJEMPLO DE CATEGORÍA CON MODAL:
        // {
        //     type: "category", // "category" abre un modal con productos
        //     name: "Cafés",
        //     image: "/images/menu/cafe.jpg", // Opcional - se oculta si está vacío
        //     products: [
        //         {
        //             name: "Café Americano",
        //             description: "Café espresso con agua caliente",
        //             type: "Bebida Caliente",
        //             price: "$45",
        //             benefit: "Rico en antioxidantes",
        //         },
        //         {
        //             name: "Cappuccino",
        //             description: "Espresso con leche espumada",
        //             type: "Bebida Caliente",
        //             price: "$55",
        //             benefit: "Cremoso y delicioso",
        //         },
        //     ],
        // },

        // EJEMPLO DE PRODUCTO DIRECTO (card 9:16):
        // {
        //     type: "product", // "product" muestra directamente como card
        //     name: "Promoción del Día",
        //     description: "2 cafés americanos + 2 donas glaseadas",
        //     productType: "Combo Especial",
        //     price: "$120",
        //     image: "/images/menu/promo.jpg", // Opcional para fondo de la card
        //     backgroundColor: "#1a1a1a", // Opcional: color de fondo personalizado
        //     textColor: "#ffffff",       // Opcional: color de texto personalizado
        //     badge: {                    // Badge opcional superior
        //         show: true,
        //         text: "Precio normal: $150",
        //         strikethrough: true,    // true = texto tachado, false = texto normal
        //         backgroundColor: "#dc2626", // Color de fondo del badge
        //         textColor: "#ffffff",   // Color del texto del badge
        //     },
        //     benefits: [                 // Lista de beneficios con viñetas
        //         "Incluye 2 donas gratis",
        //         "Válido de lunes a viernes",
        //         "Ahorra $30 MXN",
        //     ],
        // },
    },

    // 4. SECCIÓN "EL PROBLEMA" (Puntos de dolor)
    painPoints: {
        badge: "¿Te suena familiar?",
        title: "¿Por qué tu negocio no crece como debería?",
        subtitle: "Identificamos los problemas más comunes que detienen tus ventas digitales.",
        closingText: "Tenemos la solución perfecta para ti",
        points: [
            {
                question: "No apareces en Google",
                description: "Tus clientes buscan tus servicios activamente pero solo encuentran a tu competencia directa.",
                icon: "Search", // Icono de Lucide React
            },
            {
                question: "Redes sociales sin ventas",
                description: "Tienes likes y seguidores, pero nadie compra, nadie pregunta precios y el retorno es nulo.",
                icon: "TrendingDown",
            },
            {
                question: "Falta de imagen profesional",
                description: "Tu negocio se ve pequeño o amateur frente a competidores establecidos con webs modernas.",
                icon: "Store",
            },
        ],
    },

    // 5. SERVICIOS (Lo que ofreces)
    services: {
        badge: "Nuestras Soluciones",
        title: "Todo lo que tu negocio necesita para despegar",
        subtitle: "Servicios diseñados específicamente para hacer crecer tu presencia digital y atraer más clientes.",
        items: [
            {
                id: 1,
                title: "Sitio Web Profesional",
                description: "Diseño moderno y responsive que funciona perfecto en cualquier dispositivo y te hace destacar.",
                icon: "Globe", // Icono de Lucide React
            },
            {
                id: 2,
                title: "Posicionamiento en Google",
                description: "Optimización SEO para que tus clientes te encuentren fácilmente cuando busquen tus servicios.",
                icon: "TrendingUp",
            },
            {
                id: 3,
                title: "Entrega en tiempo récord",
                description: "Tu sitio web listo en máximo 72 horas, para que no pierdas ni un solo día sin presencia online.",
                icon: "Clock",
            },
        ],
    },

    // 6. DIFERENCIADORES (Por qué nosotros)
    features: {
        badge: "¿Por qué elegirnos?",
        title: "No somos como los demás",
        subtitle: "Mientras otras agencias tardan semanas y cobran fortunas, nosotros ofrecemos rapidez, calidad y precios inigualables.",
        items: [
            {
                title: "Entrega Rápida",
                description: "Tu proyecto listo en un lapso de 48-72 horas sin comprometer la calidad.",
                icon: "Zap"
            },
            {
                title: "Soporte 24/7",
                description: "Estamos disponibles cuando nos necesites, sin horarios limitados.",
                icon: "Headphones"
            },
            {
                title: "Diseño Premium",
                description: "Estética moderna que impresiona y convierte visitantes en clientes.",
                icon: "Award"
            },
            {
                title: "Precios Justos",
                description: "Calidad profesional con los mejores precios del mercado, transparencia total.",
                icon: "DollarSign"
            },
            {
                title: "Optimización SEO",
                description: "Tu negocio visible en Google desde el día uno.",
                icon: "TrendingUp"
            },
            {
                title: "Dominio Propio Incluido",
                description: "Tu sitio web con tu marca, sin subdominios ni publicidad.",
                icon: "Server"
            },
        ],
        // Elemento de confianza social (opcional)
        socialProof: {
            show: false, // Cambiar a false para ocultar completamente
            text: "+100 negocios confían en nosotros",
            icon: "Users", // Icono de Lucide React
            avatarCount: 4, // Cantidad de avatares decorativos (0-6)
        },
    },

    // 7. GALERÍA
    gallery: {
        badge: "Nuestro Trabajo",
        title: "Proyectos que hablan por sí mismos",
        subtitle: "Cada diseño cuenta una historia de éxito",
        showImageNames: true, // false para ocultar los nombres de las imágenes
        items: [] as GalleryItem[],
        // Ejemplo de estructura cuando tengas contenido:
        // items: [
        //     { image: "/images/gallery/project1.jpg", name: "Cafetería Aroma" },
        //     { image: "/images/gallery/project2.jpg", name: "Restaurante El Buen Sabor" },
        // ],
    },

    // 8. TESTIMONIOS (Reseñas de clientes)
    testimonials: {
        badge: "Testimonios",
        title: "Lo que dicen nuestros clientes",
        subtitle: "Historias reales de negocios que transformamos",
        items: [] as TestimonialItem[],
        // Ejemplo de estructura cuando tengas testimonios:
        // items: [
        //     {
        //         name: "Juan Pérez",
        //         role: "CEO de TechStart",
        //         review: "Excelente servicio, mi negocio cambió por completo. Las ventas aumentaron un 300% en solo 3 meses. Totalmente recomendado.",
        //         stars: 5,
        //         avatar: "", // Opcional: ruta a imagen de avatar
        //     },
        // ],
    },

    // 8.5. SUCURSALES (Ubicaciones del negocio)
    branches: {
        badge: "Nuestras Ubicaciones",
        title: "Visítanos en cualquiera de nuestras sucursales",
        subtitle: "Estamos cerca de ti para brindarte el mejor servicio",
        items: [] as BranchLocation[],
        // Ejemplo de estructura cuando tengas sucursales:
        // items: [
        //     {
        //         name: "Sucursal Centro",
        //         address: "Av. Juárez #123, Centro Histórico, CDMX",
        //         image: "/images/branches/centro.jpg", // Opcional
        //         googleMapsLink: "https://maps.google.com/?q=19.4326,-99.1332",
        //     },
        //     {
        //         name: "Sucursal Sur",
        //         address: "Calzada de Tlalpan #456, Col. Del Valle, CDMX",
        //         image: "/images/branches/sur.jpg",
        //         googleMapsLink: "https://maps.google.com/?q=19.3910,-99.1710",
        //     },
        // ],
    },

    // 9. PREGUNTAS FRECUENTES (FAQ)
    faqs: {
        badge: "FAQ",
        title: "Preguntas Frecuentes",
        subtitle: "Resolvemos tus dudas más comunes",
        items: [
            {
                question: "¿Cuánto tiempo toma desarrollar un sitio web?",
                answer: "El tiempo de desarrollo varía según la complejidad del proyecto. Manejamos plazos ultrarrápidos, entregando sitios en tan solo lapsos de 48 a 72 horas para proyectos estándar. Para sitios más complejos, el tiempo puede extenderse a 1-2 semanas. Siempre te proporcionamos un cronograma claro desde el inicio.",
            },
            {
                question: "¿Qué incluye el servicio?",
                answer: "Nuestro servicio incluye diseño personalizado, desarrollo responsive, optimización SEO básica, integración con redes sociales, formularios de contacto, y, si adquieres nuestro Plan Profesional, un dominio personalizado incluido. También incluimos 30 días de soporte post-lanzamiento sin costo adicional.",
            },
            {
                question: "¿Necesito conocimientos técnicos para administrar mi sitio?",
                answer: "No necesitas conocimientos técnicos. Desarrollamos sitios con interfaces intuitivas para que no tengas que preocuparte por las cosas técnicas. Además, nuestro equipo está siempre disponible para ayudarte con cualquier actualización o cambio que necesites.",
            },
            {
                question: "¿Qué formas de pago aceptan?",
                answer: "Por el momento, solamente aceptamos depósitos por medio de Oxxo. Sin embargo, estamos trabajando para ofrecer más opciones de pago en el futuro cercano, incluyendo tarjetas de crédito y PayPal. Nuestro objetivo es facilitar el proceso de contratación para todos nuestros clientes.",
            },
        ],
    },

    // 10. REDES SOCIALES
    socials: {
        facebook: "https://facebook.com/...",
        instagram: "https://instagram.com/...",
        tiktok: "", // Si se deja vacío, que el componente no lo renderice
    }
};