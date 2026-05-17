"use client";

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonios() {
    const testimonials = [
        {
            name: 'Sara Jiménez',
            role: 'Gerente de Cadena Minorista',
            text: 'Calidad excepcional y servicio confiable. Nuestros clientes adoran los productos.',
            rating: 5
        },
        {
            name: 'Miguel Chen',
            role: 'Socio Distribuidor',
            text: 'Soporte sobresaliente y calidad consistente del producto. Un proveedor de confianza.',
            rating: 5
        },
        {
            name: 'Emma Rodríguez',
            role: 'Directora de E-commerce',
            text: 'Sus productos nos han ayudado a hacer crecer significativamente nuestro negocio en línea.',
            rating: 5
        },
    ];

    return (
        <section className="py-24 px-4 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Patrón de fondo mejorado */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] [background-size:16px_16px] opacity-5"></div>
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/50 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-azul to-[#1A1A60]">
                        Lo Que Dicen Nuestros Clientes
                    </h2>
                    <div className="h-1 w-2/6 bg-amarillo mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="h-full group"
                        >
                            <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8 flex flex-col">
                                {/* Elemento decorativo */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amarillo/5 rounded-bl-full transform group-hover:scale-110 transition-transform duration-500"></div>
                                
                                {/* Icono de cita */}
                                <Quote className="absolute top-4 right-4 text-amarillo opacity-20 w-8 h-8 transform group-hover:rotate-12 transition-transform duration-300" />
                                
                                {/* Contenido principal */}
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-azul mb-2">{testimonial.name}</h3>
                                        <p className="text-gray-600 text-sm font-medium">{testimonial.role}</p>
                                    </div>
                                    
                                    <p className="text-gray-700 leading-relaxed mb-6 italic text-lg flex-grow">
                                        "{testimonial.text}"
                                    </p>
                                    
                                    <div className="flex space-x-1 mt-auto">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-5 h-5 text-amarillo fill-current transform group-hover:scale-110 transition-transform duration-300"
                                                style={{ transitionDelay: `${i * 50}ms` }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA adicional */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-600 mb-6">
                        ¿Quieres ser parte de nuestra historia de éxito?
                    </p>
                    <button 
                    onClick={() => window.open('https://wa.me/+573116095224', '_blank')}
                    className="bg-azul hover:bg-azul/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-azul/20">
                        Contáctanos hoy
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

