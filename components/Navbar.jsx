"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Briefcase, Backpack, BriefcaseMedical, BriefcaseBusiness, Menu, X } from 'lucide-react'

const components = [
    {
        icon: BriefcaseBusiness,
        title: "Maletas",
        href: "/coleccion/maletas",
        description: "Diseñadas para ofrecer durabilidad y estilo, ideales para viajes largos o cortos."
    },
    {
        icon: Briefcase,
        title: "Riñoneras",
        href: "/coleccion/rinoneras",
        description: "Variedad de niñoneras y funcionales para el día a día o para viajes."
    },
    {
        icon: Backpack,
        title: "Mochilas",
        href: "/coleccion/mochilas",
        description: "Mochilas ergonómicas y resistentes, perfectas para estudiantes y viajeros."
    },
    {
        icon: BriefcaseMedical,
        title: "Neceser",
        href: "/coleccion/neceser",
        description: "Accesorios ideales para organizar artículos de higiene y cuidado personal."
    }
];


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detectar si el dispositivo es móvil
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Verificar al cargar y cuando cambie el tamaño de la ventana
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    // Cerrar el menú cuando se hace clic en un enlace
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className="m-0 bg-azul text-white p-4 flex justify-around items-center fixed z-50 w-full top-0 left-0">
            <Link href="/" passHref>
                <Image
                    src={"/logo.png"}
                    width={80}
                    height={80}
                    alt='Logo de kert' />
            </Link>
            
            {/* Menú para Desktop - oculto en móvil */}
            <div className="hidden md:block">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Inicio
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/coleccion" legacyBehavior passHref>
                                <NavigationMenuTrigger>Coleccion</NavigationMenuTrigger>
                            </Link>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-azul border-0">
                                    {components.map((component) => (
                                        <ListItem
                                            icon={component.icon}
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/sobre-nosotros" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Sobre Nosotros
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem> 
                        <NavigationMenuItem>
                            <Link href="/contacto" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Contacto
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            
            {/* Botón de menú móvil - visible solo en móvil */}
            <div className="block md:hidden">
                <button 
                    className="text-white focus:outline-none hover:text-amarillo transition-colors duration-300"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {isOpen ? 
                        <X className="w-8 h-8" /> : 
                        <Menu className="w-8 h-8" />
                    }
                </button>
            </div>
            
            {/* Menú móvil con animación */}
            <AnimatePresence>
                {isOpen && isMobile && (
                    <motion.div 
                        className="fixed inset-0 bg-gradient-to-b from-azul to-[#05004c] z-40 overflow-y-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Header del menú móvil */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                            <Link href="/" onClick={handleLinkClick}>
                                <Image
                                    src={"/logo.png"}
                                    width={60}
                                    height={60}
                                    alt='Logo de kert'
                                    className="transition-transform hover:scale-105" 
                                />
                            </Link>
                            <motion.button 
                                onClick={() => setIsOpen(false)}
                                className="w-10 h-10 flex items-center justify-center rounded-md bg-white/10 hover:bg-amarillo/20 text-white transition-colors"
                                whileTap={{ scale: 0.95 }}
                                aria-label="Cerrar menú"
                            >
                                <X className="w-5 h-5" />
                            </motion.button>
                        </div>

                        {/* Contenido del menú */}
                        <motion.div 
                            className="px-6 py-6"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.07
                                    }
                                }
                            }}
                        >
                            {/* Navegación principal */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                            >
                                <Link 
                                    href="/" 
                                    className="block py-3 text-xl font-medium text-white hover:text-amarillo border-b border-white/10 transition-colors"
                                    onClick={handleLinkClick}
                                >
                                    Inicio
                                </Link>
                            </motion.div>
                            
                            {/* Sección Colección */}
                            <div className="mt-6">
                                <motion.h3 
                                    className="text-amarillo text-lg font-semibold mb-3"
                                    variants={{
                                        hidden: { opacity: 0, y: 10 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                >
                                    Colección
                                </motion.h3>
                                
                                <div className="space-y-2">
                                    {components.map((item, index) => (
                                        <CollectionItem 
                                            key={item.title} 
                                            href={item.href} 
                                            onClick={handleLinkClick}
                                            icon={item.icon}
                                            title={item.title}
                                            description={item.description}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </div>
                            
                            {/* Sección de enlaces secundarios */}
                            <motion.div 
                                className="mt-6 pt-4 border-t border-white/10"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1 }
                                }}
                            >
                                <div className="grid grid-cols-2 gap-3">
                                    <SecondaryLink 
                                        href="/sobre-nosotros" 
                                        onClick={handleLinkClick}
                                    >
                                        Sobre Nosotros
                                    </SecondaryLink>
                                    
                                    <SecondaryLink 
                                        href="/contacto" 
                                        onClick={handleLinkClick}
                                    >
                                        Contacto
                                    </SecondaryLink>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

// Componente para elementos de la colección en el menú móvil
const CollectionItem = ({ href, onClick, icon: Icon, title, description, index }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, x: -15 },
                visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                        delay: index * 0.05 
                    }
                }
            }}
            className="group"
        >
            <Link 
                href={href} 
                className="block"
                onClick={onClick}
            >
                <div className="flex items-start p-3 rounded-md bg-white/5 hover:bg-white/10 transition-colors">
                    {Icon && (
                        <div className="flex-shrink-0 mt-1">
                            <div className="bg-amarillo/10 p-2 rounded-md">
                                <Icon className="w-5 h-5 text-amarillo" />
                            </div>
                        </div>
                    )}
                    <div className="ml-3">
                        <h4 className="text-white font-medium group-hover:text-amarillo transition-colors">
                            {title}
                        </h4>
                        {description && (
                            <p className="text-xs text-white/60 mt-1 line-clamp-2">
                                {description}
                            </p>
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

// Componente para enlaces secundarios
const SecondaryLink = ({ href, children, onClick }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
            }}
        >
            <Link 
                href={href} 
                className="flex items-center justify-center h-12 px-4 rounded-md bg-white/5 hover:bg-white/10 text-white hover:text-amarillo transition-colors"
                onClick={onClick}
            >
                <span className="text-sm font-medium">{children}</span>
            </Link>
        </motion.div>
    );
};

const ListItem = React.forwardRef(({ className, title, icon: Icon, children, ...props }, ref) => {
    return (
        <li className='hover:bg-[#05004c] p-2 rounded-md'>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={(
                        "flex  gap-5",
                        className
                    )}
                    {...props}
                >

                    <div className='flex gap-5'>
                        <div className="flex justify-start items-center w-12 h-12">
                            {Icon && <Icon className="w-6 h-6 text-amarillo" />} {/* Icono a la izquierda */}
                        </div>
                        <div className="flex flex-col">

                            <div className="text-sm  leading-none text-white font-bold">{title}</div>
                            <p className="text-sm text-white/70">
                                {children}
                            </p>
                        </div>
                    </div>
                </a>
            </NavigationMenuLink>
        </li>
    );
});

ListItem.displayName = "ListItem";
