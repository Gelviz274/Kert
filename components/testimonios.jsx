import React from 'react'
import { Star } from 'lucide-react'
export default function Testimonios() {
    return (
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#0C0844' }}>Lo Que Dicen Nuestros Clientes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
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
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                <div className="flex items-center mb-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h3 className="font-bold" style={{ color: '#0C0844' }}>{testimonial.name}</h3>
                                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600">{testimonial.text}</p>
                                <div className="flex mt-4" style={{ color: '#FFCF00' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-current" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
    )
}

