"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Backpack, ArrowRight } from 'lucide-react';
import maletasData from './data/maletas.json';

function MaletasPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMaletas, setFilteredMaletas] = useState(maletasData.maletas);
  const [isLoading, setIsLoading] = useState(true);

  // Simular carga de datos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Filtrar maletas basado en la búsqueda
  useEffect(() => {
    const results = maletasData.maletas.filter(maleta =>
      maleta.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMaletas(results);
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
          <div className="w-16 h-16 border-4 border-amarillo border-t-azul rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-azul">Cargando colección...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-azul/5">
        <div className="absolute inset-0 bg-gradient-to-b from-azul/10 to-transparent"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-azul mb-4">
              Nuestra Colección de Maletas
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra selección de maletas de alta calidad, perfectas para viajes y uso diario.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar maletas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amarillo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-azul mb-8">Maletas Destacadas</h2>
          
          {filteredMaletas.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No se encontraron maletas que coincidan con tu búsqueda.</p>
              <button 
                className="mt-4 bg-amarillo text-azul px-6 py-2 rounded-lg font-medium"
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
              {filteredMaletas.map((maleta) => (
                <motion.div
                  key={maleta.id}
                  variants={itemVariants}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={maleta.images[0]}
                      alt={maleta.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-azul">{maleta.name}</h3>
                      </div>
                      <Backpack className="text-azul" size={24} />
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Pedido mínimo</p>
                          <p className="font-semibold">{maleta.minOrder} unidades</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Pedido máximo</p>
                          <p className="font-semibold">{maleta.maxOrder} unidades</p>
                        </div>
                      </div>
                    </div>
                    <Link href={`/coleccion/maletas/${maleta.id}`}>
                      <button className="w-full bg-azul hover:bg-azul/90 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                        Ver detalles <ArrowRight size={18} />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

export default MaletasPage;
