"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Whatsapp, Instagram, Facebook } from "@/components/icons";
import { Phone, Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';

function ContactPage() {
    // Números de WhatsApp
    const whatsappNumbers = [
        {
            number: '573213062852',
            label: 'Ventas al por mayor'
        },
        {
            number: '573223006013',
            label: 'Atención al cliente'
        }
    ];

    // Variantes para animaciones
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section con gradiente y patrón */}
            <div className="relative bg-gradient-to-r from-azul to-[#1a237e] text-white py-24 overflow-hidden">
                {/* Patrón de fondo */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ 
                        backgroundImage: 'url("/Fabrica/pattern.png")', 
                        backgroundSize: '400px',
                        transform: 'rotate(10deg)'
                    }}></div>
                </div>
                
                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left md:w-2/3"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                            Hagamos realidad tu <span className="text-amarillo">proyecto</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-8">
                            Estamos listos para atender tus necesidades de productos al por mayor con la calidad que tu negocio merece.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={`https://wa.me/${whatsappNumbers[0].number}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center gap-2 shadow-lg transition-all duration-300"
                            >
                                <Whatsapp className="w-5 h-5" />
                                Contáctanos por WhatsApp
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contacto-directo"
                                className="bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300"
                            >
                                <ArrowRight className="w-5 h-5" />
                                Ver opciones de contacto
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
                
                {/* Elemento decorativo */}
                <div className="hidden md:block absolute right-0 bottom-0 w-1/3 h-full">
                    <div className="absolute bottom-0 right-0 w-full h-full bg-amarillo/10 rounded-tl-[100px] transform translate-x-1/4"></div>
                </div>
            </div>

            {/* Sección principal de contacto */}
            <main className="max-w-6xl mx-auto px-4 py-16">
                {/* Tarjetas de contacto */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                >
                    <motion.div 
                        variants={itemVariants}
                        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="bg-azul/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                            <Whatsapp className="w-8 h-8 text-azul" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                        <p className="text-gray-600 mb-4">Respuesta inmediata a tus consultas</p>
                        <ul className="space-y-2">
                            {whatsappNumbers.map((item, index) => (
                                <li key={index}>
                                    <a 
                                        href={`https://wa.me/${item.number}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-azul hover:text-amarillo flex items-center gap-2 transition-colors duration-300"
                                    >
                                        <span className="font-medium">+{item.number.slice(0,2)} {item.number.slice(2,5)} {item.number.slice(5,8)} {item.number.slice(8)}</span>
                                        <span className="text-sm text-gray-500">({item.label})</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div 
                        variants={itemVariants}
                        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="bg-azul/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                            <Phone className="w-8 h-8 text-azul" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Teléfono</h3>
                        <p className="text-gray-600 mb-4">Llámanos directamente</p>
                        <ul className="space-y-2">
                            <li>
                                <a 
                                    href="tel:+573213062852"
                                    className="text-azul hover:text-amarillo transition-colors duration-300"
                                >
                                    +57 321 306 2852
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="tel:+573223006013"
                                    className="text-azul hover:text-amarillo transition-colors duration-300"
                                >
                                    +57 322 300 6013
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div 
                        variants={itemVariants}
                        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="bg-azul/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                            <Mail className="w-8 h-8 text-azul" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Correo Electrónico</h3>
                        <p className="text-gray-600 mb-4">Escríbenos para cotizaciones</p>
                        <a 
                            href="mailto:contacto@creacionkert.com"
                            className="text-azul hover:text-amarillo transition-colors duration-300"
                        >
                            contacto@creacionkert.com
                        </a>
                    </motion.div>
                </motion.div>

                {/* Sección de contacto directo */}
                <div id="contacto-directo" className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Destacado de WhatsApp */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amarillo/10 rounded-bl-full"></div>
                        
                        <h2 className="text-2xl font-bold mb-6 text-azul">Contáctanos por WhatsApp</h2>
                        
                        <div className="space-y-6 relative z-10">
                            <p className="text-gray-700">
                                Nuestro equipo está listo para atenderte y responder todas tus preguntas sobre nuestros productos al por mayor.
                            </p>
                            
                            <div className="bg-[#25D366]/10 p-4 rounded-lg border border-[#25D366]/30">
                                <h3 className="font-semibold text-[#075E54] mb-2">¿Por qué contactarnos por WhatsApp?</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#25D366] font-bold">•</span>
                                        <span>Respuesta inmediata en horario laboral</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#25D366] font-bold">•</span>
                                        <span>Envío de catálogos y fotos de productos</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#25D366] font-bold">•</span>
                                        <span>Cotizaciones personalizadas</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#25D366] font-bold">•</span>
                                        <span>Seguimiento de pedidos</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="flex flex-col space-y-3">
                                {whatsappNumbers.map((item, index) => (
                                    <a 
                                        key={index}
                                        href={`https://wa.me/${item.number}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-lg font-semibold inline-flex items-center justify-center gap-3 shadow-md transition-all duration-300"
                                    >
                                        <Whatsapp className="w-6 h-6" />
                                        <div className="text-left">
                                            <span className="block">{item.label}</span>
                                            <span className="text-sm text-white/80">+{item.number.slice(0,2)} {item.number.slice(2,5)} {item.number.slice(5,8)} {item.number.slice(8)}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                            
                            <p className="text-sm text-gray-500">
                                Horario de atención: Lunes a Viernes de 8:00 a.m. a 6:00 p.m.
                            </p>
                        </div>
                    </motion.div>

                    {/* Imagen de la fábrica */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/Fabrica/maquinas.jpg"
                                alt="Fábrica de Kert"
                                width={800}
                                height={600}
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-azul/80 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8 text-white">
                                <h3 className="text-2xl font-bold mb-2">Nuestra Fábrica</h3>
                                <p className="text-white/90">
                                    Contamos con la tecnología y experiencia para crear productos de alta calidad para tu negocio.
                                </p>
                            </div>
                        </div>
                        
                        {/* Elemento decorativo */}
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-amarillo rounded-full opacity-20"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-azul rounded-full opacity-10"></div>
                    </motion.div>
                </div>

                {/* Sección de redes sociales */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 text-center"
                >
                    <h2 className="text-2xl font-bold mb-8">Síguenos en redes sociales</h2>
                    <div className="flex justify-center gap-6">
                        <motion.a
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-br from-purple-600 to-pink-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <Instagram className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#1877F2] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <Facebook className="w-6 h-6" />
                        </motion.a>
                    </div>
                </motion.div>
            </main>

            {/* CTA Final */}
            <div className="bg-azul text-white py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-6"
                    >
                        ¿Listo para impulsar tu negocio?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl mb-8 max-w-2xl mx-auto"
                    >
                        Contáctanos hoy mismo y descubre cómo nuestros productos pueden ayudarte a crecer.
                    </motion.p>
                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={`https://wa.me/${whatsappNumbers[0].number}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-amarillo hover:bg-white text-azul px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center gap-2 shadow-lg transition-all duration-300"
                    >
                        <Whatsapp className="w-5 h-5" />
                        Hablar con un asesor
                    </motion.a>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;