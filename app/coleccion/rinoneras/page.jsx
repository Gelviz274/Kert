"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, ArrowRight, Search, Filter } from 'lucide-react';

// Datos de las riñoneras disponibles
const rinoneras = [
  {
    id: 1,
    name: "Riñonera Anebre",
    slug: "anebre",
    description: "Diseño elegante y funcional con múltiples compartimientos",
    minOrder: 100,
    maxOrder: 500,
    image: "/Productos/rinonera-anebre.jpg",
    featured: true
  },
  {
    id: 2,
    name: "Riñonera Auricular",
    slug: "auricular",
    description: "Espacio especial para auriculares y dos compartimientos",
    minOrder: 200,
    maxOrder: 600,
    image: "/Productos/rinonera-negra.jpg"
  },
  {
    id: 3,
    name: "Riñonera Etib",
    slug: "etib",
    description: "Cuatro servicios con bolsillos laterales y frontal",
    minOrder: 100,
    maxOrder: 500,
    image: "/Productos/rinonera-etib.webp",
    featured: true
  },
  {
    id: 4,
    name: "Riñonera Olímpica",
    slug: "olimpica",
    description: "Seis compartimientos incluyendo bolsillo para portátil",
    minOrder: 150,
    maxOrder: 500,
    image: "/Productos/rinonera-olimpica.jpg"
  }
];

function RinonerasPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRinoneras, setFilteredRinoneras] = useState(rinoneras);
  const [isLoading, setIsLoading] = useState(true);

  // Simular carga de datos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Filtrar riñoneras basado en la búsqueda
  useEffect(() => {
    const results = rinoneras.filter(rinonera =>
      rinonera.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rinonera.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRinoneras(results);
  }, [searchTerm]);

  // Animaciones para los elementos
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
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#FFCF00] border-t-[#0C0844] rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-[#0C0844]">Cargando colección...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-[#0C0844] to-[#1A1A60] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/Productos/rinonera-pattern.jpg" 
            alt="Riñoneras Pattern"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Colección de <span className="text-[#FFCF00]">Riñoneras</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Descubre nuestra exclusiva línea de riñoneras diseñadas para combinar estilo, 
              funcionalidad y durabilidad para tus necesidades promocionales.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0C0844] mb-2">Riñoneras Destacadas</h2>
          <p className="text-gray-600 mb-8">Nuestros productos más populares para tus campañas promocionales</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rinoneras.filter(r => r.featured).map((rinonera) => (
              <motion.div
                key={rinonera.id}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src={rinonera.image}
                    alt={rinonera.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute top-4 left-4 bg-[#FFCF00] text-[#0C0844] text-sm font-semibold px-3 py-1 rounded-full">
                    Destacado
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#0C0844]">{rinonera.name}</h3>
                      <p className="text-gray-600">{rinonera.description}</p>
                    </div>
                    <BriefcaseBusiness className="text-[#0C0844]" size={24} />
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Pedido mínimo</p>
                        <p className="font-semibold">{rinonera.minOrder} unidades</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Pedido máximo</p>
                        <p className="font-semibold">{rinonera.maxOrder} unidades</p>
                      </div>
                    </div>
                  </div>
                  <Link href={`/coleccion/rinoneras/${rinonera.slug}`}>
                    <button className="w-full bg-[#0C0844] hover:bg-[#0C0844]/90 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                      Ver detalles <ArrowRight size={18} />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0C0844] mb-8">Todas las Riñoneras</h2>
          
          {filteredRinoneras.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No se encontraron riñoneras que coincidan con tu búsqueda.</p>
              <button 
                className="mt-4 bg-[#FFCF00] text-[#0C0844] px-6 py-2 rounded-lg font-medium"
                onClick={() => setSearchTerm('')}
              >
                Ver todas
              </button>
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredRinoneras.map((rinonera) => (
                <motion.div
                  key={rinonera.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-56 bg-gray-100">
                    <Image
                      src={rinonera.image}
                      alt={rinonera.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#0C0844] mb-2">{rinonera.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{rinonera.description}</p>
                    <div className="flex justify-between text-sm mb-4">
                      <div>
                        <span className="text-gray-500">Mín:</span> {rinonera.minOrder}
                      </div>
                      <div>
                        <span className="text-gray-500">Máx:</span> {rinonera.maxOrder}
                      </div>
                    </div>
                    <Link href={`/coleccion/rinoneras/${rinonera.slug}`}>
                      <button className="w-full bg-gray-100 hover:bg-gray-200 text-[#0C0844] py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
                        Ver detalles <ArrowRight size={16} />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#0C0844] to-[#1A1A60]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Necesitas un diseño personalizado?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Podemos crear riñoneras personalizadas según tus especificaciones exactas para tu próxima campaña promocional.
          </p>
          <button className="bg-[#FFCF00] hover:bg-[#FFCF00]/90 text-[#0C0844] px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
            Solicitar cotización
          </button>
        </div>
      </section>
    </div>
  );
}

export default RinonerasPage;