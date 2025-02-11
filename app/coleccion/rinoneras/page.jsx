"use client";

import React, { useState } from 'react';
import { BriefcaseBusiness, Ruler, Info, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const bags = [
  {
    id: 1,
    name: "Anebre",
    category: "Riñoneras",
    icon: <BriefcaseBusiness className="w-6 h-6" />,
    dimensions: {
      height: 16,
      width: 36,
      depth: 10
    },
    material: "Lona Colmena",
    specifications: [
      "Tres compartimientos",
      "Bolsillo trasero",
      "Bolsillo frontal",
      "Bolsillo principal",
      "Espalda con malla sándwich y Yumbolon",
      "Reata de 1 1/4 pulgada",
      "Chapa de 1 1/4 pulgada",
      "Cremallera #6",
      "Cierre #6",
      "Forrado totalmente con tafeta",
    ],
    price: 25000,
    minOrder: 150,
    maxOrder: 500,
    images: [
      "/Productos/rinonera-anebre.jpg",
      "/Productos/anebre-atras.webp",
      "/Productos/anebre-arriba.webp",
      "/Productos/anebre-a-izq.webp",
    ]
  },
  {
    id: 2,
    name: "Etib",
    category: "Riñoneras",
    icon: <BriefcaseBusiness className="w-6 h-6" />,
    dimensions: {
      height: 16,
      width: 33,
      depth: 18
    },
    material: "Lona Morral Nacional",
    specifications: [
      "Cuatro servicios",
      "Dos bolsillos laterales",
      "Bolsillo frontal",
      "Bolsillo principal",
      "Reata de 1 ¼",
      "Cremallera #6",
      "Cierre #6",
      "Chapa y Tensor #6",
      "Malla con apresto",
    ],

    price: 20000,
    minOrder: 100,
    maxOrder: 500,
    images: [
      "/Productos/rinonera-etib.webp",
      "/Productos/rinonera-etib-c.webp",
    ]
  },
  {
    id: 3,
    name: "Auricular",
    category: "Riñoneras",
    icon: <BriefcaseBusiness className="w-6 h-6" />,
    dimensions: {
      height: 14,
      width: 34,
      depth: 10
    },
    material: "Lona Guavera",
    specifications: [
      "Canguro sencillo",
      "Dos compartimientos",
      "Cremallera #6",
      "Cierre #6",
      "Vivo forrado en lona guayera",
      "Espacio para auricular",
      "Reata de pulgada",
      "Chapa y tensor de pulgada",
    ],
    price: 50000,
    minOrder: 200,
    maxOrder: 600,
    images: [
      "/Productos/rinonera-negra.jpg",
    ]
  },
  {
    id: 4,
    name: "Olimpica",
    category: "Riñoneras",
    icon: <BriefcaseBusiness className="w-6 h-6" />,
    dimensions: {
      height: 31,
      width: 16,
      depth: 10
    },
    material: "Lona morral nacional ",
    specifications: [
      "Seis compartimientos",
      "Bolsillo para portátil",
      "Dos bolsillos laterales en malla sándwich y elástico",
      "Bolsillo principal",
      "Bolsillo frontal",
      "Bolsillo interno",
      "Cargadera y espalda con malla sándwich y Yumbolon #5",
      "Reata de pulgada",
      "Cremallera #10",
      "Cierre #10",
      "Bolso forrado totalmente con tafeta",
    ],

    price: 60000,
    minOrder: 150,
    maxOrder: 500,
    images: [
      "/Productos/rinonera-olimpica.jpg",
      "/Productos/olimpica-izq.webp",
    ]
  }
];

function RinonerasPage() {
  const [selectedBag, setSelectedBag] = useState(bags[0]);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Product Navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">

          <motion.h2
            animate={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
            className="text-blue text-4xl font-bold text-center py-8">
            Colección de Riñoneras
          </motion.h2>

          <div className="flex overflow-x-auto py-4 gap-4">
            {bags.map((bag) => (
              <button
                key={bag.id}
                onClick={() => {
                  setSelectedBag(bag);
                  setSelectedImage(0);
                }}
                className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${selectedBag.id === bag.id
                  ? 'bg-[#0C0844] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {bag.icon}
                <span className="ml-2">{bag.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-white shadow-lg">
              <Image
                src={selectedBag.images[selectedImage]}
                alt={selectedBag.name}
                width={1800}
                height={1800}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {selectedBag.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden ${selectedImage === index ? 'ring-2 ring-[#FFCF00]' : ''
                    }`}
                >
                  <img
                    src={image}
                    alt={`${selectedBag.name} vista ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-[#0C0844]">{selectedBag.name}</h2>
              <p className="text-gray-600 flex items-center gap-2">
                {selectedBag.icon}
                {selectedBag.category}
              </p>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <Ruler className="text-[#0C0844]" />
                Dimensiones
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Alto</p>
                  <p className="font-semibold">{selectedBag.dimensions.height} cm</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Ancho</p>
                  <p className="font-semibold">{selectedBag.dimensions.width} cm</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Profundidad</p>
                  <p className="font-semibold">{selectedBag.dimensions.depth} cm</p>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <Info className="text-[#0C0844]" />
                Especificaciones
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {selectedBag.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <DollarSign className="text-[#0C0844]" />
                Precio Unitario
              </h3>
              <p className="text-xl font-bold text-gray-800">${selectedBag.price.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Para pedidos entre {(selectedBag.minOrder).toLocaleString()} a {(selectedBag.maxOrder).toLocaleString()}</p>
            </div>

            {/* CTA */}
            <div className="bg-[#FFCF00] p-4 rounded-lg shadow-md text-center">
              <p className="text-lg font-semibold text-[#0C0844] mb-3">¿Quieres hacer un pedido?</p>
              <button className="bg-[#0C0844] text-white px-6 py-2 rounded-full">
                Solicitar Cotización
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RinonerasPage;
