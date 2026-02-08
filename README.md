# 🚀 Landing Template - Plantilla Web Profesional

Una plantilla de landing page completamente personalizable construida con **Next.js 14**, **TypeScript**, **Tailwind CSS** y **Framer Motion**. Perfecta para cualquier tipo de negocio.

## ✨ Características Principales

- 🎨 **Sistema de colores completamente personalizable**
- 🔤 **+100 fuentes de Google Fonts disponibles + fuentes personalizadas**
- 📱 **Diseño responsive perfecto en todos los dispositivos**
- ⚡ **Animaciones suaves con Framer Motion**
- 🎯 **SEO optimizado**
- 🔧 **Configuración super simple desde un solo archivo**
- 🌗 **Dos temas: Moderno y Profesional**
- 📞 **Integración directa con WhatsApp**
- 🖼️ **Galería de imágenes con modal**
- ❓ **Sección FAQ con acordeones animados**
- ⭐ **Sistema de testimonios**

## 📦 Instalación

```bash
# Clonar el repositorio
git clone [url-del-repositorio]
cd landing-template

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

Visita `http://localhost:3000` para ver tu landing page.

## 🎨 Configuración Rápida

Todo se configura desde el archivo `src/config/clientConfig.tsx`. No necesitas tocar ningún otro archivo para personalizar tu web.

### 🖋️ Sistema de Fuentes

#### Fuentes Predefinidas (Carga Rápida)
```typescript
// Fuentes ya incluidas y optimizadas:
"Inter" | "Poppins" | "Montserrat" | "Roboto" | "Open Sans" | "Raleway" | 
"Lato" | "Nunito" | "Source Sans 3" | "Playfair Display" | "Merriweather" | 
"Oswald" | "Ubuntu" | "Lora" | "Crimson Text" | "Work Sans" | "Fira Sans" | 
"PT Sans" | "Libre Franklin" | "IBM Plex Sans" | "Dancing Script" | 
"Pacifico" | "Lobster" | "Righteous"
```

#### Cualquier Fuente de Google Fonts
```typescript
typography: {
    headers: {
        fontFamily: "Bebas Neue", // Cualquier fuente de Google Fonts
        fontWeight: 700,
        color: "", // Opcional: color personalizado
    },
    body: {
        fontFamily: "Roboto Slab", // Otra fuente diferente
        fontWeight: 400,
        color: "",
    },
}
```

### 🎨 Recomendaciones de Fuentes por Tipo de Negocio

| Tipo de Negocio | Headers Recomendados | Body Recomendado | Estilo |
|-----------------|----------------------|------------------|--------|
| **Tecnología** | Montserrat, Roboto | Inter, Source Sans 3 | Moderno, limpio |
| **Diseño/Creatividad** | Playfair Display, Oswald | Nunito, Work Sans | Creativo, elegante |
| **Corporativo** | Open Sans, Lato | PT Sans, Merriweather | Profesional, confiable |
| **Restaurante/Café** | Playfair Display, Dancing Script | Lora, Open Sans | Cálido, acogedor |
| **Moda/Belleza** | Montserrat, Raleway | Crimson Text, Lato | Elegante, sofisticado |
| **Medicina/Salud** | Open Sans, Source Sans 3 | Lato, Merriweather | Confiable, serio |
| **Legal/Consultoría** | Merriweather, Lora | PT Sans, Open Sans | Formal, profesional |
| **Fitness/Deportes** | Oswald, Righteous | Ubuntu, Work Sans | Dinámico, energético |
| **Educación** | Open Sans, Ubuntu | Lato, Source Sans 3 | Claro, legible |
| **Arte/Cultura** | Playfair Display, Dancing Script | Crimson Text, Lora | Artístico, expresivo |

### 🔍 Cómo Encontrar Fuentes en Google Fonts

1. Ve a [Google Fonts](https://fonts.google.com/)
2. Busca la fuente que te guste
3. Copia el nombre exacto (ej: "Bebas Neue", "Russo One", "Anton")
4. Úsalo en tu `clientConfig.tsx`

**Ejemplos de fuentes populares:**
- **Para títulos impactantes**: "Bebas Neue", "Anton", "Russo One", "Fjalla One"
- **Para elegancia**: "Crimson Text", "Libre Baskerville", "Cormorant Garamond"
- **Para modernidad**: "Barlow", "DM Sans", "Space Grotesk", "Manrope"
- **Para diversión**: "Fredoka One", "Comfortaa", "Quicksand", "Nunito Sans"

## 🎨 Configuración de Colores

```typescript
colors: {
    primary: "#da007d",      // Color principal (botones, CTAs)
    secondary: "#ffd65c",    // Color secundario (badges, iconos)
    accent: "#0891b2",       // Color de acento (highlights)
    
    background: "#ffffff",   // Fondo principal
    backgroundAlt: "#f9fafb", // Fondo alternativo
    
    textPrimary: "#111827",  // Texto principal (títulos)
    textSecondary: "#6b7280", // Texto secundario (descripciones)
    textMuted: "#9ca3af",    // Texto atenuado
    
    danger: "#dc2626",       // Para problemas/pain points
    success: "#16a34a",      // Para features positivos
    warning: "#ea580c",      // Para llamadas de atención
    info: "#0284c7",         // Para información neutral
}
```

## 🎭 Temas Disponibles

### Tema "Modern"
- Degradados sutiles
- Elementos decorativos discretos
- Ideal para: startups, agencias creativas, negocios tech

### Tema "Professional" 
- Colores planos únicamente
- Sin decoraciones
- Ideal para: corporativos, abogados, consultorías

```typescript
theme: "modern" // o "professional"
```

## 🎬 Control de Animaciones

```typescript
enableAnimations: true // false para desactivar todas las animaciones
```

## 📱 Integración con WhatsApp

```typescript
contact: {
    whatsappNumber: "521234567890", // Formato internacional sin +
    whatsappMessage: "Hola! Me interesa pedir informes.",
    email: "contacto@negocio.com",
    phoneDisplay: "33 1234 5678",
    address: "Tu dirección completa",
}
```

## 🏗️ Estructura del Proyecto

```
landing-template/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Configuración de metadatos (título, favicon, SEO)
│   │   └── page.tsx                # Página principal
│   ├── components/
│   │   ├── layout/                 # Header y Footer
│   │   └── ui/                     # Componentes de animación y reutilizables
│   ├── config/
│   │   ├── clientConfig.tsx        # 🎯 ARCHIVO PRINCIPAL DE CONFIG
│   │   ├── fonts.ts               # Sistema de fuentes
│   │   └── typography.ts          # Helpers de tipografía
│   ├── sections/                  # Secciones de la landing page
│   │   ├── Hero.tsx
│   │   ├── PainPoints.tsx
│   │   ├── Services.tsx
│   │   ├── Features.tsx
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   └── FAQ.tsx
│   └── styles/
│       └── globals.css
└── public/
    └── images/               # Coloca aquí tus imágenes
```

## 🖼️ Gestión de Imágenes y Favicon

### Favicon (Icono de la pestaña)
1. Coloca tu favicon en `public/favicon.ico`
2. O usa cualquier ruta que prefieras: `public/images/mi-favicon.png`
3. Actualiza la configuración:

```typescript
brand: {
    name: "Mi Negocio",                    // 👈 Nombre en la pestaña del navegador
    faviconPath: "/favicon.ico",           // 👈 Icono de la pestaña del navegador
    seoDescription: "Descripción para Google",
}
```

### Imágenes del contenido
1. Coloca tus imágenes en `public/images/`
2. Actualiza las rutas en `clientConfig.tsx`:

```typescript
hero: {
    backgroundImage: "/images/mi-fondo.jpg",
}

gallery: {
    items: [
        {
            image: "/images/proyecto1.jpg",
            name: "Mi Proyecto 1",
        }
    ]
}
```

## 📝 Personalización de Contenido

### 🔄 Secciones Opcionales (Auto-ocultación)

La plantilla incluye un sistema inteligente de secciones opcionales. **Las secciones se ocultan automáticamente** cuando no tienen contenido, sin mostrar errores.

#### Secciones que se auto-ocultan:
- **Gallery**: Se oculta si `gallery.items` está vacío
- **Testimonials**: Se oculta si `testimonials.items` está vacío
- **Features**: Se oculta si `features.items` está vacío
- **Services**: Se oculta si `services.items` está vacío
- **PainPoints**: Se oculta si `painPoints.points` está vacío
- **FAQ**: Se oculta si `faqs.items` está vacío

#### Cómo agregar contenido:

**Para activar la Galería:**
```typescript
gallery: {
    items: [
        { image: "/images/gallery/project1.jpg", name: "Proyecto 1" },
        { image: "/images/gallery/project2.jpg", name: "Proyecto 2" },
    ],
}
```

**Para activar Testimonios:**
```typescript
testimonials: {
    items: [
        {
            name: "Juan Pérez",
            role: "CEO de TechStart", 
            review: "Excelente servicio, muy recomendado.",
            stars: 5,
            avatar: "/images/avatars/juan.jpg", // Opcional
        },
    ],
}
```

### Hero Section
```typescript
hero: {
    title: "Tu título principal aquí",
    subtitle: "Tu subtítulo explicativo",
    buttonText: "Tu CTA",
    backgroundImage: "/images/tu-fondo.jpg",
}
```

### Pain Points (Problemas del Cliente)
```typescript
painPoints: {
    badge: "El Problema",
    title: "¿Por qué no tienes clientes?",
    subtitle: "Identifica los problemas principales",
    points: [
        {
            question: "¿No apareces en Google?",
            description: "Descripción del problema",
            icon: "Search", // Íconos de Lucide React
        }
    ]
}
```

### Servicios
```typescript
services: {
    badge: "Nuestros Servicios",
    title: "Lo que ofrecemos",
    subtitle: "Descripción de servicios",
    items: [
        {
            id: 1,
            title: "Servicio 1",
            description: "Descripción del servicio",
            icon: "Globe", // Íconos de Lucide React
        }
    ]
}
```

## 🎨 Personalización Avanzada

### Fuentes Personalizadas Paso a Paso

1. **Encuentra tu fuente en Google Fonts**
   ```
   https://fonts.google.com/specimen/Bebas+Neue
   ```

2. **Copia el nombre exacto**
   ```
   "Bebas Neue"
   ```

3. **Úsala en clientConfig.tsx**
   ```typescript
   typography: {
       headers: {
           fontFamily: "Bebas Neue",
           fontWeight: 400, // Ajusta según pesos disponibles
       }
   }
   ```

4. **La fuente se carga automáticamente** ✨

### Íconos Disponibles (Lucide React)

Puedes usar cualquier ícono de [Lucide React](https://lucide.dev/):
- `Search`, `Globe`, `Mail`, `Phone`, `MapPin`
- `TrendingUp`, `TrendingDown`, `Star`, `Heart`
- `Zap`, `Award`, `Users`, `Shield`, `Clock`
- Y muchos más...

## 🚀 Deployment

### Vercel (Recomendado)

**1. Preparar para deploy:**
```bash
npm run build  # Verificar que el build funciona localmente
```

**2. Deploy en Vercel:**
```bash
# Instalar Vercel CLI si no lo tienes
npm i -g vercel

# Deploy
vercel

# O conectar tu repositorio de GitHub directamente en vercel.com
```

**3. Variables de entorno (si las necesitas):**
- Ve a tu proyecto en vercel.com
- Settings → Environment Variables
- Agrega las variables necesarias

### Otros servicios de hosting

**Netlify:**
```bash
npm run build
# Sube la carpeta .next/out o conecta tu repo GitHub
```

**VPS/Servidor propio:**
```bash
npm run build
npm start
```

### 🔧 Solución a errores comunes de deploy

**Error: "File is not a module"**
- ✅ **Solucionado**: Los metadatos ahora son estáticos en `layout.tsx`
- ✅ **Build exitoso**: El proyecto compila correctamente en producción

**Error: Fuentes no cargan**
- ✅ **Verificado**: Las fuentes de Google se cargan correctamente
- ✅ **Optimizado**: Sistema de fallback para fuentes personalizadas

### 📋 Comandos Disponibles

```bash
npm run dev          # Desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Verificar código
```

## 📞 Soporte

Si tienes dudas sobre la configuración:

1. Revisa este README
2. Verifica que las rutas de imágenes estén correctas
3. Asegúrate de que los nombres de fuentes sean exactos
4. Comprueba que los colores estén en formato hexadecimal

## 🎯 Tips y Buenas Prácticas

### ✅ Hacer
- Usar nombres exactos de Google Fonts
- Mantener consistencia en los colores
- Optimizar imágenes antes de subirlas
- Probar en diferentes dispositivos
- Usar fuentes legibles para el texto del body

### ❌ Evitar
- Usar más de 3 fuentes diferentes
- Colores con poco contraste
- Imágenes muy pesadas (>1MB)
- Textos demasiado largos
- Más de 8 secciones en una página

## 📈 Optimización SEO

```typescript
brand: {
    name: "Tu Negocio",
    seoDescription: "Descripción optimizada para Google con keywords importantes",
}
```

## 🎨 Ejemplos de Combinaciones Exitosas

### Tecnología Moderna
```typescript
colors: {
    primary: "#3b82f6",
    secondary: "#8b5cf6", 
    accent: "#06b6d4"
}
typography: {
    headers: { fontFamily: "Inter", fontWeight: 700 },
    body: { fontFamily: "Source Sans 3", fontWeight: 400 }
}
theme: "modern"
```

### Elegancia Profesional
```typescript
colors: {
    primary: "#1f2937",
    secondary: "#6366f1",
    accent: "#059669"
}
typography: {
    headers: { fontFamily: "Playfair Display", fontWeight: 600 },
    body: { fontFamily: "Crimson Text", fontWeight: 400 }
}
theme: "professional"
```

### Energía y Dinamismo
```typescript
colors: {
    primary: "#ef4444",
    secondary: "#f59e0b",
    accent: "#10b981"
}
typography: {
    headers: { fontFamily: "Oswald", fontWeight: 600 },
    body: { fontFamily: "Work Sans", fontWeight: 400 }
}
theme: "modern"
```

---

## 🏆 ¡Listo para Lanzar!

Con esta plantilla tienes todo lo necesario para crear una landing page profesional en minutos. Solo personaliza el `clientConfig.tsx` y ¡ya tienes tu web lista!

**¿Necesitas más fuentes?** Visita [Google Fonts](https://fonts.google.com/) y usa cualquiera que te guste.

**¿Más íconos?** Revisa [Lucide React](https://lucide.dev/) para explorar todos los íconos disponibles.

---
*Creado con ❤️ para hacer que cualquier negocio tenga una presencia web profesional.*
