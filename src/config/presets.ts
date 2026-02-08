// UIConfig interface and presets for Struxi Labs

export interface UIConfig {
    buttons: {
        borderRadius: string;
        padding: {
            small: string;
            medium: string;
            large: string;
        };
        fontSize: {
            small: string;
            medium: string;
            large: string;
        };
        fontWeight: number;
        shadow: string;
        hoverScale: number;
    };
    cards: {
        borderRadius: string;
        padding: string;
        shadow: string;
        borderWidth: string;
        hoverScale: number;
        spacing: string;
        sizes: {
            services: {
                width: string | null;
                minHeight: string;
                maxHeight: string | null;
            };
            features: {
                width: string | null;
                minHeight: string;
                maxHeight: string | null;
            };
            painPoints: {
                width: string | null;
                minHeight: string;
                maxHeight: string | null;
            };
            testimonials: {
                width: string | null;
                minHeight: string;
                maxHeight: string | null;
            };
            menuProducts: {
                width: string | null;
                minHeight: string | null;
                maxHeight: string | null;
            };
            menuCategories: {
                width: string | null;
                minHeight: string;
                maxHeight: string;
            };
        };
    };
    badges: {
        borderRadius: string;
        padding: string;
        fontSize: string;
        fontWeight: number;
        borderWidth: string;
    };
    sections: {
        borderRadius: string;
        padding: {
            mobile: string;
            desktop: string;
        };
        maxWidth: string;
    };
    accordions: {
        borderRadius: string;
        borderWidth: string;
        padding: string;
        spacing: string;
    };
}

export const modernPreset: UIConfig = {
    buttons: {
        borderRadius: "12px",
        padding: {
            small: "8px 16px",
            medium: "12px 24px",
            large: "16px 32px",
        },
        fontSize: {
            small: "14px",
            medium: "16px",
            large: "18px",
        },
        fontWeight: 600,
        shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        hoverScale: 1.05,
    },
    cards: {
        borderRadius: "16px",
        padding: "24px",
        shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        borderWidth: "2px",
        hoverScale: 1.02,
        spacing: "24px",
        sizes: {
            services: {
                width: null,
                minHeight: "240px",
                maxHeight: null,
            },
            features: {
                width: null,
                minHeight: "220px",
                maxHeight: null,
            },
            painPoints: {
                width: null,
                minHeight: "320px",
                maxHeight: null,
            },
            testimonials: {
                width: null,
                minHeight: "350px",
                maxHeight: null,
            },
            menuProducts: {
                width: null,
                minHeight: null,
                maxHeight: null,
            },
            menuCategories: {
                width: null,
                minHeight: "200px",
                maxHeight: "250px",
            },
        },
    },
    badges: {
        borderRadius: "9999px",
        padding: "8px 16px",
        fontSize: "14px",
        fontWeight: 600,
        borderWidth: "2px",
    },
    sections: {
        borderRadius: "20px",
        padding: {
            mobile: "16px",
            desktop: "32px",
        },
        maxWidth: "1280px",
    },
    accordions: {
        borderRadius: "12px",
        borderWidth: "2px",
        padding: "24px",
        spacing: "16px",
    },
};

export const professionalPreset: UIConfig = {
    buttons: {
        borderRadius: "4px",
        padding: {
            small: "10px 20px",
            medium: "14px 28px",
            large: "18px 36px",
        },
        fontSize: {
            small: "14px",
            medium: "16px",
            large: "18px",
        },
        fontWeight: 500,
        shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        hoverScale: 1.0,
    },
    cards: {
        borderRadius: "8px",
        padding: "32px",
        shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        borderWidth: "1px",
        hoverScale: 1.0,
        spacing: "32px",
        sizes: {
            services: {
                width: null,
                minHeight: "280px",
                maxHeight: null,
            },
            features: {
                width: null,
                minHeight: "240px",
                maxHeight: null,
            },
            painPoints: {
                width: null,
                minHeight: "360px",
                maxHeight: null,
            },
            testimonials: {
                width: null,
                minHeight: "380px",
                maxHeight: null,
            },
            menuProducts: {
                width: null,
                minHeight: null,
                maxHeight: null,
            },
            menuCategories: {
                width: null,
                minHeight: "220px",
                maxHeight: "280px",
            },
        },
    },
    badges: {
        borderRadius: "4px",
        padding: "6px 12px",
        fontSize: "13px",
        fontWeight: 500,
        borderWidth: "1px",
    },
    sections: {
        borderRadius: "8px",
        padding: {
            mobile: "20px",
            desktop: "40px",
        },
        maxWidth: "1200px",
    },
    accordions: {
        borderRadius: "8px",
        borderWidth: "1px",
        padding: "28px",
        spacing: "20px",
    },
};

export const minimalPreset: UIConfig = {
    buttons: {
        borderRadius: "0px",
        padding: {
            small: "12px 24px",
            medium: "16px 32px",
            large: "20px 40px",
        },
        fontSize: {
            small: "14px",
            medium: "16px",
            large: "18px",
        },
        fontWeight: 400,
        shadow: "none",
        hoverScale: 1.0,
    },
    cards: {
        borderRadius: "0px",
        padding: "40px",
        shadow: "none",
        borderWidth: "1px",
        hoverScale: 1.0,
        spacing: "40px",
        sizes: {
            services: {
                width: null,
                minHeight: "300px",
                maxHeight: null,
            },
            features: {
                width: null,
                minHeight: "260px",
                maxHeight: null,
            },
            painPoints: {
                width: null,
                minHeight: "400px",
                maxHeight: null,
            },
            testimonials: {
                width: null,
                minHeight: "400px",
                maxHeight: null,
            },
            menuProducts: {
                width: null,
                minHeight: null,
                maxHeight: null,
            },
            menuCategories: {
                width: null,
                minHeight: "240px",
                maxHeight: "300px",
            },
        },
    },
    badges: {
        borderRadius: "0px",
        padding: "8px 16px",
        fontSize: "12px",
        fontWeight: 400,
        borderWidth: "1px",
    },
    sections: {
        borderRadius: "0px",
        padding: {
            mobile: "24px",
            desktop: "48px",
        },
        maxWidth: "1400px",
    },
    accordions: {
        borderRadius: "0px",
        borderWidth: "1px",
        padding: "32px",
        spacing: "24px",
    },
};

export function getUIConfig(presetName: "modern" | "professional" | "minimal"): UIConfig {
    const presets = {
        modern: modernPreset,
        professional: professionalPreset,
        minimal: minimalPreset,
    };

    return presets[presetName];
}
