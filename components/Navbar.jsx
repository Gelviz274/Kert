"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Briefcase, Backpack, BriefcaseMedical, BriefcaseBusiness } from 'lucide-react'

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
    return (
        <header className="m-0 bg-azul text-white p-4 flex justify-around items-center fixed z-50 w-full top-0 left-0">
            <Link href="/" passHref>
                <Image
                    src={"/logo.png"}
                    width={80}
                    height={80}
                    alt='Logo de kert' />
            </Link>
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
                    </NavigationMenuItem> <NavigationMenuItem>
                        <Link href="/contacto" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Contacto
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}

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
