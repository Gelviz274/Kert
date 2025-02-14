"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Whatsapp, Instagram, Facebook } from "@/components/icons";
import { Phone, Mail } from 'lucide-react';
import Image from 'next/image';

function App() {
    const whatsappNumber = '+1234567890'; // Replace with actual WhatsApp number
    const whatsappMessage = encodeURIComponent('Hola, me gustaría obtener información sobre sus productos al por mayor.');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="bg-azul text-white py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold mb-6"
                    >
                        ¡Conversemos sobre tu negocio!
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl max-w-3xl mx-auto"
                    >
                        Te ofrecemos productos de calidad al por mayor. Escríbenos por WhatsApp y te atenderemos de inmediato.
                    </motion.p>
                </div>
            </div>

            {/* Main Contact Section */}
            <main className="max-w-6xl mx-auto px-4 py-16">
                {/* WhatsApp Button */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <Link
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-green-600 transition-colors duration-300"
                    >
                        <Whatsapp className="w-6 h-6" />
                        Escríbenos por WhatsApp
                    </Link>
                    <p className="text-gray-600 mt-4">
                        Atendemos consultas de lunes a viernes de 9:00 a.m. a 6:00 p.m.
                    </p>
                </motion.div>

                {/* Contact Information Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl font-bold text-kert-blue mb-8">Información de Contacto</h2>

                        <div className="flex items-center gap-4">
                            <div className="bg-kert-yellow p-3 rounded-full">
                                <Phone className="w-6 h-6 text-kert-blue" />
                            </div>
                            <div>
                                <p className="font-semibold">Teléfono</p>
                                <p className="text-gray-600">+57 321 3062 852</p>
                                <p className="text-gray-600">
                                +57 322 3006 013</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-kert-yellow p-3 rounded-full">
                                <Mail className="w-6 h-6 text-kert-blue" />
                            </div>
                            <div>
                                <p className="font-semibold">Correo Electrónico</p>
                                <Link
                                href="mailto:contacto@creacionkert.com">
                                    <p className="text-gray-600">contacto@creacionkert.com</p>
                                </Link>
                            </div>
                        </div>


                        {/* Social Media */}
                        <div className="pt-8">
                            <h3 className="text-xl font-semibold mb-4">Síguenos en redes sociales</h3>
                            <div className="flex gap-4">
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    href="#"
                                    className="bg-azul text-white p-3 rounded-full hover:bg-kert-yellow hover:text-azul transition-colors duration-300"
                                >
                                    <Instagram className="w-6 h-6 text-white" />
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    href="#"
                                    className="bg-azul text-white p-3 rounded-full hover:bg-kert-yellow hover:text-azul transition-colors duration-300"
                                >
                                    <Facebook className="w-6 h-6 text-white" />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-gray-100 rounded-lg overflow-hidden h-[400px]"
                    >
                        <Image
                            width={800}
                            height={600}
                            src="/Fabrica/maquinas.jpg"
                            alt="Ubicación de Kert"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </main>
        </div>
    );
}

export default App;