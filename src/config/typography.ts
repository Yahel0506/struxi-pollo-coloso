import { clientConfig } from "./clientConfig";

/**
 * Obtiene el estilo de tipografía para headers
 * Úsalo en títulos, encabezados (H1, H2, H3, etc)
 */
export const getHeaderStyle = () => {
    return {
        fontFamily: `var(--font-header)`,
        fontWeight: clientConfig.brand.typography.headers.fontWeight,
        color: clientConfig.brand.typography.headers.color || clientConfig.brand.colors.textPrimary,
    };
};

/**
 * Obtiene el estilo de tipografía para texto regular
 * Úsalo en párrafos, descripciones, contenido general
 */
export const getBodyStyle = () => {
    return {
        fontFamily: `var(--font-body)`,
        fontWeight: clientConfig.brand.typography.body.fontWeight,
        color: clientConfig.brand.typography.body.color || clientConfig.brand.colors.textSecondary,
    };
};

/**
 * Obtiene solo el color del header
 */
export const getHeaderColor = () => {
    return clientConfig.brand.typography.headers.color || clientConfig.brand.colors.textPrimary;
};

/**
 * Obtiene solo el color del body
 */
export const getBodyColor = () => {
    return clientConfig.brand.typography.body.color || clientConfig.brand.colors.textSecondary;
};
