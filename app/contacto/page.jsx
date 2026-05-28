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
            number: '573116095224',
            label: 'Ventas al por mayor'
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
            <div className="relative bg-linear-to-br from-azul via-[#1a237e] to-azul text-white py-32 overflow-hidden">
                {/* Patrón de fondo mejorado */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{ 
                        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                        transform: 'rotate(10deg)'
                    }}></div>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left md:w-2/3"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6"
                        >
                            Estamos aquí para ayudarte
                        </motion.span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Hagamos realidad tu <span className="text-amarillo relative">
                                proyecto
                                <span className="absolute -bottom-2 left-0 w-full h-1 bg-amarillo/30"></span>
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-12 leading-relaxed">
                            Estamos listos para atender tus necesidades de productos al por mayor con la calidad que tu negocio merece.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <motion.a
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href={`https://wa.me/${whatsappNumbers[0].number}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <Whatsapp className="w-5 h-5" />
                                Contáctanos por WhatsApp
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contacto-directo"
                                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-3 transition-all duration-300"
                            >
                                <ArrowRight className="w-5 h-5" />
                                Ver opciones de contacto
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Sección principal de contacto */}
            <main className="max-w-7xl mx-auto px-4 py-24">
                {/* Tarjetas de contacto */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
                >
                    <motion.div 
                        variants={itemVariants}
                        className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-azul/5 rounded-bl-full transform group-hover:scale-110 transition-transform duration-300"></div>
                        <div className="relative z-10">
                            <div className="bg-azul/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                                <Whatsapp className="w-8 h-8 text-azul" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">WhatsApp</h3>
                            <p className="text-gray-600 mb-6">Respuesta inmediata a tus consultas</p>
                            <ul className="space-y-3">
                                {whatsappNumbers.map((item, index) => (
                                    <li key={index}>
                                        <a 
                                            href={`https://wa.me/${item.number}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-azul hover:text-amarillo flex items-center gap-3 transition-colors duration-300 group/link"
                                        >
                                            <span className="font-medium">+{item.number.slice(0,2)} {item.number.slice(2,5)} {item.number.slice(5,8)} {item.number.slice(8)}</span>
                                            <span className="text-sm text-gray-500 group-hover/link:translate-x-1 transition-transform duration-300">({item.label})</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={itemVariants}
                        className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-azul/5 rounded-bl-full transform group-hover:scale-110 transition-transform duration-300"></div>
                        <div className="relative z-10">
                            <div className="bg-azul/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                                <Phone className="w-8 h-8 text-azul" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Teléfono</h3>
                            <p className="text-gray-600 mb-6">Llámanos directamente</p>
                            <ul className="space-y-3">
                                <li>
                                    <a 
                                        href="tel:+573213062852"
                                        className="text-azul hover:text-amarillo transition-colors duration-300 group/link flex items-center gap-3"
                                    >
                                        <span>+57 321 306 2852</span>
                                        <span className="text-sm text-gray-500 group-hover/link:translate-x-1 transition-transform duration-300">(Ventas)</span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={itemVariants}
                        className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-azul/5 rounded-bl-full transform group-hover:scale-110 transition-transform duration-300"></div>
                        <div className="relative z-10">
                            <div className="bg-azul/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                                <Mail className="w-8 h-8 text-azul" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Correo Electrónico</h3>
                            <p className="text-gray-600 mb-6">Escríbenos para cotizaciones</p>
                            <a 
                                href="mailto:contacto@creacionkert.com"
                                className="text-azul hover:text-amarillo transition-colors duration-300 group/link flex items-center gap-3"
                            >
                                <span>contacto@creacionkert.com</span>
                                <span className="text-sm text-gray-500 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Sección de contacto directo */}
                <div id="contacto-directo" className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Destacado de WhatsApp */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl shadow-2xl p-10 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-amarillo/10 rounded-bl-full transform group-hover:scale-110 transition-transform duration-500"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-azul/5 rounded-tr-full"></div>
                        
                        <h2 className="text-3xl font-bold mb-8 text-azul relative">Contáctanos por WhatsApp</h2>
                        
                        <div className="space-y-8 relative z-10">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Nuestro equipo está listo para atenderte y responder todas tus preguntas sobre nuestros productos al por mayor.
                            </p>
                            
                            <div className="bg-[#25D366]/5 p-6 rounded-2xl border border-[#25D366]/20 backdrop-blur-sm">
                                <h3 className="font-semibold text-[#075E54] mb-4 text-lg">¿Por qué contactarnos por WhatsApp?</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#25D366] font-bold text-xl">•</span>
                                        <span>Respuesta inmediata en horario laboral</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#25D366] font-bold text-xl">•</span>
                                        <span>Envío de catálogos y fotos de productos</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#25D366] font-bold text-xl">•</span>
                                        <span>Cotizaciones personalizadas</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#25D366] font-bold text-xl">•</span>
                                        <span>Seguimiento de pedidos</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="flex flex-col space-y-4">
                                {whatsappNumbers.map((item, index) => (
                                    <a 
                                        key={index}
                                        href={`https://wa.me/${item.number}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-5 rounded-xl font-semibold inline-flex items-center justify-center gap-4 shadow-lg hover:shadow-xl transition-all duration-300 group/button"
                                    >
                                        <Whatsapp className="w-6 h-6 transform group-hover/button:rotate-12 transition-transform duration-300" />
                                        <div className="text-left">
                                            <span className="block text-lg">{item.label}</span>
                                            <span className="text-sm text-white/80">+{item.number.slice(0,2)} {item.number.slice(2,5)} {item.number.slice(5,8)} {item.number.slice(8)}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                            
                            <p className="text-sm text-gray-500 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
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
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                            <div className="absolute inset-0 bg-linear-to-t from-azul/90 via-azul/50 to-transparent z-10"></div>
                            <Image
                                src="/fabrica/maquinas.jpg"
                                alt="Fábrica de Kert"
                                width={800}
                                height={600}
                                className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 p-10 text-white z-20">
                                <h3 className="text-3xl font-bold mb-4">Nuestra Fábrica</h3>
                                <p className="text-white/90 text-lg max-w-md">
                                    Contamos con la tecnología y experiencia para crear productos de alta calidad para tu negocio.
                                </p>
                            </div>
                        </div>
                        
                        {/* Elementos decorativos mejorados */}
                        <div className="absolute -top-8 -left-8 w-32 h-32 bg-amarillo rounded-full opacity-20 blur-2xl"></div>
                        <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-azul rounded-full opacity-10 blur-2xl"></div>
                    </motion.div>
                </div>

                {/* Sección de redes sociales */}
                
            </main>

            {/* CTA Final mejorado */}
            <div className="bg-azul  text-white py-24">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-8"
                    >
                        ¿Listo para impulsar tu negocio?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl mb-12 max-w-2xl mx-auto text-white/90"
                    >
                        Contáctanos hoy mismo y descubre cómo nuestros productos pueden ayudarte a crecer.
                    </motion.p>
                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href={`https://wa.me/${whatsappNumbers[0].number}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-amarillo hover:bg-white text-azul px-10 py-5 rounded-full font-semibold inline-flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    >
                        <Whatsapp className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" />
                        Hablar con un asesor
                    </motion.a>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;