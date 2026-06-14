"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';

function CategoryListing({ data, title, description, icon: Icon, slug, searchPlaceholder, searchNotFound, emptyButtonText = "Ver todos", sectionTitle }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const results = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  }, [data, searchTerm]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
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
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100">
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-azul"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
              {title}
              <span className="block text-amarillo mt-2">Premium</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-2xl bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-amarillo text-azul placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-12"
          >
            <h2 className="text-4xl font-bold text-azul">
              <span className="border-b-4 border-amarillo pb-2">{sectionTitle}</span>
            </h2>
          </motion.div>

          {filteredData.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">{searchNotFound}</p>
              <button
                className="mt-4 bg-amarillo text-azul px-6 py-2 rounded-lg font-medium"
                onClick={() => setSearchTerm('')}
              >
                {emptyButtonText}
              </button>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredData.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8 relative">
                    <div className="absolute -top-8 right-8 bg-amarillo rounded-full p-3 shadow-lg transform -translate-y-1/2 group-hover:rotate-12 transition-transform duration-300">
                      <Icon className="text-azul" size={24} />
                    </div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-azul mb-2">{item.name}</h3>
                      <div className="h-1 w-20 bg-amarillo rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-300"></div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 mb-8">
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <p className="text-sm text-gray-500 mb-1">Pedido mínimo</p>
                        <p className="text-lg font-bold text-azul">{item.minOrder}</p>
                      </div>
                    </div>
                    <Link href={`/coleccion/${slug}/${item['name-title']}`} className="block">
                      <button className="w-full bg-azul hover:bg-amarillo text-white hover:text-azul py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 group-hover:shadow-lg">
                        Ver detalles <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
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

export default CategoryListing;
