"use client";

import Image from "next/image";
import Link from "next/link";
import { 
    Mail, 
    Phone, 
    MapPin, 
    ArrowRight, 
    ChevronUp,
    MessageCircle
} from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-linear-to-b from-azul to-[#050422] text-white">
            {/* Botón de scroll to top */}
            <button 
                onClick={scrollToTop}
                className="bg-amarillo hover:bg-white text-azul w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300 mx-auto -translate-y-6"
                aria-label="Volver arriba"
            >
                <ChevronUp className="w-6 h-6" />
            </button>

            <div className="container mx-auto px-4 pt-12 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Columna 1: Logo y descripción */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-2">
                            <Image 
                                src="/logo.png" 
                                alt="Kert" 
                                width={150} 
                                height={40} 
                                className="object-contain" 
                                style={{ width: 'auto', height: 'auto' }}
                            />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Ofrecemos productos de alta calidad para tu negocio, con diseños personalizados y materiales duraderos que garantizan la 
                            <span className="text-amarillo font-semibold"> satisfacción de tus clientes</span>.
                        </p>
                        

                    </div>

                    {/* Columna 2: Enlaces rápidos */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-lg font-bold border-b border-amarillo pb-2 mb-6 inline-block">Enlaces Rápidos</h3>
                        <nav className="grid grid-cols-1 gap-2">
                            {[
                                { href: "/", label: "Inicio" },
                                { href: "/coleccion", label: "Colección" },
                                { href: "/sobre-nosotros", label: "Sobre Nosotros" },
                                { href: "/contacto", label: "Contacto" },
                            ].map((link, index) => (
                                <Link 
                                    key={index} 
                                    href={link.href} 
                                    className="text-gray-300 hover:text-amarillo transition-colors duration-300 flex items-center group"
                                >
                                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Columna 3: Contacto */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-lg font-bold border-b border-amarillo pb-2 mb-6 inline-block">Contacto</h3>
                        
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="bg-white/10 p-2 rounded-full mt-1">
                                    <Mail size={16} className="text-amarillo" />
                                </div>
                                <div>
                                    <p className="font-medium text-sm">Correo Electrónico</p>
                                    <a href="mailto:contacto@creacionkert.com" className="text-gray-300 hover:text-amarillo transition-colors duration-300 text-sm">
                                        contacto@creacionkert.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-3">
                                <div className="bg-white/10 p-2 rounded-full mt-1">
                                    <Phone size={16} className="text-amarillo" />
                                </div>
                                <div>
                                    <p className="font-medium text-sm">Teléfonos</p>
                                    <a href="tel:+573213062852" className="text-gray-300 hover:text-amarillo transition-colors duration-300 block text-sm">
                                        +57 321 306 2852
                                    </a>
                                    <a href="tel:+573223006013" className="text-gray-300 hover:text-amarillo transition-colors duration-300 block text-sm">
                                        +57 322 300 6013
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-3">
                                <div className="bg-white/10 p-2 rounded-full mt-1">
                                    <MessageCircle size={16} className="text-amarillo" />
                                </div>
                                <div>
                                    <p className="font-medium text-sm">WhatsApp</p>
                                    <a 
                                        href="https://wa.me/573116095224" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-gray-300 hover:text-amarillo transition-colors duration-300 block text-sm"
                                    >
                                        Contáctanos por WhatsApp
                                    </a>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                
                {/* Separador */}
                <div className="border-t border-white/10 my-6"></div>
                
                {/* Copyright y políticas */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <div className="mb-4 md:mb-0">
                        &copy; {currentYear} Kert S.A.S. Todos los derechos reservados.
                    </div>
                    <div className="flex space-x-6">
                        <Link href="/politica-de-privacidad" className="hover:text-amarillo transition-colors duration-300">
                            Política de Privacidad
                        </Link>
                        <Link href="/terminos-y-condiciones" className="hover:text-amarillo transition-colors duration-300">
                            Términos y Condiciones
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
