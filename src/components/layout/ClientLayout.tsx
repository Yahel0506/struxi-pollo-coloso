"use client";

import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {/* Espaciador para el header fijo */}
            <div className="h-16 md:h-20" />
            {children}
            <Footer />
        </>
    );
}
