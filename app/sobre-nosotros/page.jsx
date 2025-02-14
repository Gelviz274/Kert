"use client"

import { Building2, Award, Truck, Users, Compass, Target, Eye, Shield, Package, Rocket, Handshake } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'


const fundadores = [
    {
        name: "Sandra",
        role: "Madre emprendedora y el pilar detrás de KERT.",
        image: "/Sandra.jpg",
    },
    {
        name: "Steben",
        role: "Diseñador apasionado, soñador y la fuerza creativa de la marca.",
        image: "/Steben.jpg",
    },
];

function NosotrosPage() {
    return (
        <>
            <div
                className="relative h-[800px] bg-azul flex items-center justify-center"
                style={{
                    backgroundImage: "url('/Productos/olimpica-frente.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlend: 'overlay'
                }}
            >
                <div className="absolute inset-0 bg-azul/70"></div>
                <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center gap-5">
                    <h1 className="text-5xl font-bold text-white">Nuestra historia comienza con un sueño</h1>
                    <p className="text-xl text-white font-medium">
                        Fusionamos creatividad y calidad para diseñar soluciones prácticas que acompañan a nuestros clientes en cada aventura.
                    </p>
                    <Link
                        href="/coleccion">
                        <motion.button
                            className='bg-amarillo text-azul px-4 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 hover:bg-amarillo/90 transition-colors duration-300'>
                            Nuestra coleccion
                        </motion.button>
                    </Link>

                </div>

            </div>

            <section className="max-w-7xl mx-auto py-24 px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-azul mb-6">Nuestra Historia</h2>
                        <div className="h-1 w-52 bg-amarillo mb-8"></div>
                        <div className="space-y-6">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Durante el confinamiento de 2020, Sandra, una madre emprendedora, y su hijo Steben, un apasionado por el diseño, vieron en las maletas una oportunidad para reinventarse. Así nació KERT, una marca que combina calidad, estilo y funcionalidad, construida sobre valores familiares y un sueño compartido.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Cada pieza que sale de nuestras instalaciones es el resultado de años de experiencia, innovación continua y un compromiso inquebrantable con la calidad. Nuestro equipo de expertos artesanos combina técnicas tradicionales con tecnología de última generación para crear productos que superan las expectativas.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-azul rounded-lg transform rotate-2"></div>
                        <Image
                            src="/Fabrica/nuestra-historia.jpg"
                            width={800}
                            height={500}
                            alt="Proceso de fabricación"
                            className="relative w-full h-[500px] object-cover rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-azul py-20 px-6 md:px-20 text-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto text-center">
                <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-6">Nuestros Fundadores</h2>
                        <div className="h-1 w-52 bg-amarillo mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-5">
                        {fundadores.map((founder, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center relative overflow-hidden transform hover:scale-105 transition-transform duration-300"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="w-44 h-44 relative rounded-full overflow-hidden mb-6 border-4 border-amarillo shadow-lg">
                                    <Image src={founder.image} alt={founder.name} layout="fill" objectFit="cover" />
                                </div>
                                <h3 className="text-3xl font-bold text-azul">{founder.name}</h3>
                                <p className="text-gray-700 text-xl mt-2">{founder.role}</p>
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-azul opacity-30 pointer-events-none"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="bg-gradient-to-b from-azul to-azul/90 py-24 px-8 ">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-6">Nuestro Propósito</h2>
                        <div className="h-1 w-52 bg-amarillo mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">

                        <div className="bg-white/5 backdrop-blur-lg p-8 rounded-lg border border-white/10 transform hover:scale-105 transition-transform duration-300">
                            <div className="text-amarillo mb-6 flex justify-center">
                                <Rocket size={48} />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4 text-center">Misión</h3>
                            <p className="text-gray-300 text-center leading-relaxed">
                                En KERT SAS, nos dedicamos a crear productos excepcionales que combinan calidad, innovación y estilo, satisfaciendo las necesidades de nuestros clientes con soluciones prácticas y elegantes en maletería.
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-lg p-8 rounded-lg border border-white/10 transform hover:scale-105 transition-transform duration-300">
                            <div className="text-amarillo mb-6 flex justify-center">
                                <Eye size={48} />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4 text-center">Visión</h3>
                            <p className="text-gray-300 text-center leading-relaxed">
                                Ser una de las fábricas más grandes en Colombia, líderes y referentes en el diseño y fabricación de maletas, distinguiéndonos por la excelencia en diseño, durabilidad y compromiso con la satisfacción del cliente.
                            </p>
                        </div>
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
    )
}

export default NosotrosPage