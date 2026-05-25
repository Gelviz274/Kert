import React from "react";

const products = [
  {
    id: 1,
    name: "ALL-IN",
    description:
      "Múltiples compartimientos de gran volumen con cremalleras bidireccionales y detalles en rojo. La solución definitiva para quienes necesitan llevar todo con ellos.",
    price: "Consultar",
    image: "/productos/maletas/ref-5-all-in/01.webp",
    href: "/coleccion/maletas/ref-5-all-in",
  },
  {
    id: 2,
    name: "COMPLEX",
    description:
      "Estructura semirrígida con acabado premium, múltiples compartimientos y correas acolchadas. Diseñada para el uso diario más exigente.",
    price: "Consultar",
    image: "/productos/maletas/ref-3-complex/01.webp",
    href: "/coleccion/maletas/ref-3-complex",
  },
  {
    id: 3,
    name: "URBAN",
    description:
      "Tres compartimientos de gran apertura, bolsillo frontal de silueta redondeada y laterales en malla elástica. Estilo y funcionalidad urbana.",
    price: "Consultar",
    image: "/productos/maletas/ref-11-urban/01.webp",
    href: "/coleccion/maletas/ref-11-urban",
  },
  {
    id: 4,
    name: "EXPLORER",
    description:
      "Cinco compartimientos, bolsillo para portátil y tela resistente al agua. La compañera ideal para viajes y aventuras.",
    price: "Consultar",
    image: "/productos/maletas/ref-9-explorer/01.webp",
    href: "/coleccion/maletas/ref-9-explorer",
  },
];

function Galery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-azul text-center mb-16">
          Nuestra Colección de Maletas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg 
              transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-300 
                group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-azul/60 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-azul mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-azul font-bold">
                    {product.price}
                  </span>
                  <button
                    onClick={() => (window.location.href = product.href)}
                    className="bg-amarillo text-azul px-4 py-2 rounded-full text-sm font-semibold 
                  hover:bg-azul hover:text-amarillo transition-colors duration-300"
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Galery;
