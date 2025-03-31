"use client";

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Testimonios() {
    const testimonials = [
        {
            name: 'Sara Jiménez',
            role: 'Gerente de Cadena Minorista',
            text: 'Calidad excepcional y servicio confiable. Nuestros clientes adoran los productos.',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
        },
        {
            name: 'Miguel Chen',
            role: 'Socio Distribuidor',
            text: 'Soporte sobresaliente y calidad consistente del producto. Un proveedor de confianza.',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
        },
        {
            name: 'Emma Rodríguez',
            role: 'Directora de E-commerce',
            text: 'Sus productos nos han ayudado a hacer crecer significativamente nuestro negocio en línea.',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
        },
    ];

    return (
        <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0C0844] to-[#1A1A60]">
                        Lo Que Dicen Nuestros Clientes
                    </h2>
                    <div className="h-1 w-2/6 bg-[#FFCF00] mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <div className="relative h-full bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8 flex flex-col">
                                <Quote className="absolute top-4 right-4 text-[#FFCF00] opacity-20 w-8 h-8" />
                                <div className="flex items-center mb-6">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-[#FFCF00] mr-4 flex-shrink-0">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            layout="fill"
                                            objectFit="cover"
                                            className="transform hover:scale-110 transition duration-300"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-[#0C0844]">{testimonial.name}</h3>
                                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-6 flex-grow italic">"{testimonial.text}"</p>
                                <div className="flex space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 text-[#FFCF00] fill-current"
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

