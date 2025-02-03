import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0C0844] flex flex-col items-center justify-center text-white h-auto py-8 px-4">
            <div className="container flex flex-col md:flex-row justify-evenly items-center md:items-start text-center md:text-left">

                {/* Logo y Eslogan */}
                <div className="flex flex-col items-center md:items-start">
                    <Image src="/logo.png" alt="Kert" width={200} height={50} />
                    <p className="text-sm mt-2">
                        La calidad que tu negocio <strong className="text-[#FFCF00] font-semibold">necesita</strong>
                    </p>
                </div>

                {/* Menú */}
                <nav className="space-y-1">
                    <h3 className="text-white font-bold text-xl">Menú</h3>
                    <ul className="text-sm space-y-1">
                        {[
                            { href: "/", label: "Inicio" },
                            { href: "/coleccion", label: "Colección" },
                            { href: "/nuestra-historia", label: "Nuestra Historia" },
                            { href: "/contacto", label: "Contacto" },
                        ].map((link, index) => (
                            <li key={index}>
                                <Link href={link.href} className="hover:underline">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Contactos */}
                <div className="space-y-2 flex flex-col items-start justify-center gap-2">
                    <h3 className="text-white font-bold text-xl">Contactos</h3>
                    <div className="text-sm flex items-center justify-center gap-4">
                        <Mail size={30} color="#FFCF00" />
                        <div className="flex flex-col items-start justify-start md:justify-start gap-2">
                            <p className="font-semibold">Correo Electrónico</p>
                            <a href="mailto:contacto@creacionkert.com" className="hover:underline">
                                contacto@creacionkert.com
                            </a>
                        </div>
                    </div>
                    <div className="text-sm flex items-center justify-center gap-4">
                        <Phone size={30} color="#FFCF00" />
                        <div className="flex flex-col  items-start justify-start md:justify-start gap-2">
                            <p className="font-semibold">Teléfonos</p>
                            <a href="tel:+573213062852" className="hover:underline">
                                <span>+57 321 3062 852</span>
                            </a>
                            <a href="tel:+573223006013" className="hover:underline">
                                <span>+57 322 3006 013</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Línea inferior */}
            <div className="mt-6 text-center text-xs opacity-80">
                Todos los derechos reservados Kert S.A.S © 2024
            </div>
        </footer>
    );
}

