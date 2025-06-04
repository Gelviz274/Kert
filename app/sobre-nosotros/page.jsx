"use client"

import { Building2, Award, Truck, Users, Eye, Shield, Package, Rocket, Handshake } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const fundadores = [    
    {
        name: "Sandra",
        role: "Madre emprendedora y el pilar detrás de KERT.",
        description: "Sandra ha sido la fuerza motriz detrás de la visión empresarial de KERT. Su liderazgo empático y su profundo conocimiento en gestión de calidad han sido fundamentales para establecer los altos estándares que caracterizan a nuestra marca. Como madre emprendedora, ha sabido equilibrar perfectamente la dirección empresarial con los valores familiares que son el corazón de KERT."
    },
    {
        name: "Steben",
        role: "Diseñador apasionado, soñador y la fuerza creativa de la marca.",
        description: "Steben, con su formación en diseño industrial y su pasión por la innovación, ha revolucionado el concepto de maletería moderna. Su enfoque creativo y su atención al detalle han permitido desarrollar productos que no solo son funcionales, sino verdaderas obras de arte. Su visión futurista y su compromiso con la sostenibilidad han sido clave en el desarrollo de nuestras colecciones más exitosas."
    },
];

function NosotrosPage() {
    return (
        <>
            <div className="relative h-[800px] bg-azul flex items-center justify-center" style={{
                backgroundImage: "url('/Productos/olimpica-frente.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlend: 'overlay'
            }}>
                <div className="absolute inset-0 bg-azul/70"></div>
                <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center gap-5">
                    <h1 className="text-5xl font-bold text-white">Nuestra historia comienza con un sueño</h1>
                    <p className="text-xl text-white font-medium">
                        Fusionamos creatividad y calidad para diseñar soluciones prácticas que acompañan a nuestros clientes en cada aventura.
                    </p>
                    <Link href="/coleccion">
                        <motion.button className='bg-amarillo text-azul px-4 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 hover:bg-amarillo/90 transition-colors duration-300'>
                            Nuestra colección
                        </motion.button>
                    </Link>
                </div>
            </div>

            <section className="max-w-7xl mx-auto py-32 px-8">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-amarillo/50 to-azul/50"></div>
                        <h2 className="text-6xl font-light text-azul mb-12 tracking-tight">
                            Nuestra <span className="font-bold">Historia</span>
                        </h2>
                        <div className="space-y-8">
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Durante el confinamiento de 2020, Sandra, una madre emprendedora, y su hijo Steben, un apasionado por el diseño, vieron en las maletas una oportunidad para reinventarse. Así nació KERT, una marca que combina calidad, estilo y funcionalidad, construida sobre valores familiares y un sueño compartido.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Cada pieza que sale de nuestras instalaciones es el resultado de años de experiencia, innovación continua y un compromiso inquebrantable con la calidad. Nuestro equipo de expertos artesanos combina técnicas tradicionales con tecnología de última generación para crear productos que superan las expectativas.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="relative"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="aspect-[4/3] relative overflow-hidden">
                            <Image
                                src="/Productos/MALETAS/Bolsoazul/IMG_1860.jpg"
                                fill
                                alt="Proceso de fabricación"
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amarillo/10 -z-10"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-azul/10 -z-10"></div>
                    </motion.div>
                </div>
            </section>

            <section className="bg-azul py-32 px-6 md:px-20 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-bold text-white mb-8 tracking-tight">Nuestros Fundadores</h2>
                        <div className="h-1 w-64 bg-amarillo mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-5">
                        {fundadores.map((founder, index) => (
                            <motion.div
                                key={index}
                                className="group relative"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-amarillo to-azul rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-10 border border-white/10 transform transition-all duration-500 hover:scale-[1.02] hover:bg-white/10">
                                    <div className="flex flex-col items-center">
                                        <div className="relative mb-8">
                                            <div className="absolute inset-0 bg-gradient-to-br from-amarillo/30 to-azul/30 rounded-full blur-xl"></div>
                                            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-amarillo/20 to-azul/20 flex items-center justify-center border-2 border-white/20">
                                                <span className="text-5xl font-bold bg-gradient-to-r from-amarillo to-white bg-clip-text text-transparent">
                                                    {founder.name[0]}
                                                </span>
                                            </div>
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-2 tracking-wide">{founder.name}</h3>
                                        <p className="text-amarillo text-lg mb-6 text-center">{founder.role}</p>
                                        <div className="h-0.5 w-32 bg-amarillo/50 mb-6"></div>
                                        <p className="text-gray-200 text-base leading-relaxed max-w-md text-center">
                                            {founder.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="bg-azul py-32 px-6 md:px-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-bold text-white mb-8 tracking-tight">Nuestro Propósito</h2>
                        <div className="h-1 w-64 bg-amarillo mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-16">
                        <motion.div 
                            className="group relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-amarillo to-azul rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-10 border border-white/10 transform transition-all duration-500 hover:scale-[1.02] hover:bg-white/10">
                                <div className="flex flex-col items-center">
                                    <div className="text-amarillo mb-8">
                                        <Rocket size={48} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-6 text-center">Misión</h3>
                                    <p className="text-gray-200 text-base leading-relaxed text-center">
                                        En KERT SAS, nos dedicamos a crear productos excepcionales que combinan calidad, innovación y estilo, satisfaciendo las necesidades de nuestros clientes con soluciones prácticas y elegantes en maletería.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div 
                            className="group relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-amarillo to-azul rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-10 border border-white/10 transform transition-all duration-500 hover:scale-[1.02] hover:bg-white/10">
                                <div className="flex flex-col items-center">
                                    <div className="text-amarillo mb-8">
                                        <Eye size={48} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-6 text-center">Visión</h3>
                                    <p className="text-gray-200 text-base leading-relaxed text-center">
                                        Ser una de las fábricas más grandes en Colombia, líderes y referentes en el diseño y fabricación de maletas, distinguiéndonos por la excelencia en diseño, durabilidad y compromiso con la satisfacción del cliente.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Valores */}
            <div className="bg-azul py-24 px-8">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-6">Nuestros Valores</h2>
                        <div className="h-1 w-52 bg-amarillo mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white/5 backdrop-blur-lg p-8 rounded-lg border border-white/10 transform hover:scale-105 transition-transform duration-300">
                            <div className="text-amarillo mb-6 flex justify-center">
                                <Shield size={48} />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4 text-center">Calidad Superior</h3>
                            <p className="text-gray-300 text-center leading-relaxed">
                                Cada maleta refleja nuestro compromiso con la excelencia y durabilidad.
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-lg p-8 rounded-lg border border-white/10 transform hover:scale-105 transition-transform duration-300">
                            <div className="text-amarillo mb-6 flex justify-center">
                                <Package size={48} />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4 text-center">Innovación Constante</h3>
                            <p className="text-gray-300 text-center leading-relaxed">
                                Abrazamos la creatividad en cada etapa para sorprender y superar expectativas.
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-lg p-8 rounded-lg border border-white/10 transform hover:scale-105 transition-transform duration-300">
                            <div className="text-amarillo mb-6 flex justify-center">
                                <Users size={48} />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4 text-center">Servicio Excepcional</h3>
                            <p className="text-gray-300 text-center leading-relaxed">
                                Brindamos atención personalizada y soporte continuo a nuestros distribuidores.
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-lg p-8 rounded-lg border border-white/10 transform hover:scale-105 transition-transform duration-300">
                            <div className="text-amarillo mb-6 flex justify-center">
                                <Handshake size={48} />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4 text-center">Compromiso</h3>
                            <p className="text-gray-300 text-center leading-relaxed">
                                Colocamos a nuestros clientes en el centro de todo lo que hacemos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Por Qué Elegirnos */}
            <div className="py-24 bg-gradient-to-b from-gray-50 to-white px-8">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-azul mb-6">¿Por Qué Elegirnos?</h2>
                        <div className="h-1 w-52 bg-amarillo mx-auto mb-8"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-start space-x-6">
                                <div className="text-amarillo bg-azul p-4 rounded-xl transform group-hover:scale-110 transition-transform duration-300">
                                    <Building2 size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-azul mb-3">Fabricación Propia</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Controlamos cada aspecto del proceso de producción para garantizar la más alta calidad en cada producto, desde la selección de materiales hasta el producto final.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-start space-x-6">
                                <div className="text-amarillo bg-azul p-4 rounded-xl transform group-hover:scale-110 transition-transform duration-300">
                                    <Award size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-azul mb-3">Garantía de Calidad</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Cada producto pasa por exhaustivos controles de calidad antes de llegar a nuestros distribuidores, asegurando la excelencia en cada detalle.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-start space-x-6">
                                <div className="text-amarillo bg-azul p-4 rounded-xl transform group-hover:scale-110 transition-transform duration-300">
                                    <Truck size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-azul mb-3">Logística Eficiente</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Sistema de distribución optimizado para garantizar entregas puntuales y seguimiento en tiempo real, brindando tranquilidad a nuestros distribuidores.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-start space-x-6">
                                <div className="text-amarillo bg-azul p-4 rounded-xl transform group-hover:scale-110 transition-transform duration-300">
                                    <Users size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-azul mb-3">Soporte Personalizado</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Equipo dedicado para atender las necesidades específicas de cada distribuidor mayorista, asegurando una relación comercial exitosa y duradera.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NosotrosPage;