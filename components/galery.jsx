import React from "react";

const products = [
  {
    id: 1,
    name: "Maleta DHL",
    description:
      "La maleta DHL es la combinación perfecta entre diseño práctico y materiales de alta calidad. Confeccionado en H600, un material resistente y duradero, este bolso tipo maleta es ideal para quienes buscan comodidad y organización en su día a día.",
    price: "$299.99",
    image: "/Productos/bolso-dhl.jpg",
    href: "/coleccion/maletas/bolso-dhl",
  },
  {
    id: 2,
    name: "Maleta Cemex",
    description:
      "La Maleta CEMEX está diseñada para quienes buscan funcionalidad, comodidad y resistencia en su día a día. Fabricada con lona morral, un material altamente duradero, esta maleta ofrece una estructura ligera pero robusta, ideal para el uso diario o profesional.",
    price: "$249.99",
    image: "/Productos/maleta-cemex.jpg",
    href: "/coleccion/maletas/maleta-cemex",
  },
  {
    id: 3,
    name: "Maleta Isabel",
    description:
      "La Maleta ISABEL es la opción ideal para quienes necesitan amplitud, resistencia y organización en un solo producto. Fabricada con lona morral importada, ofrece una combinación perfecta de estilo y funcionalidad, asegurando un transporte cómodo y seguro para tus pertenencias.",
    price: "$399.99",
    image: "/Productos/bolso-azul-rojo.jpg",
    href: "/coleccion/maletas/bolso-isabel",
  },
  {
    id: 4,
    name: "Maleta Save the Children",
    description:
      "La Maleta SAVE CHILDREN está diseñada para quienes buscan organización, resistencia y comodidad en su día a día. Confeccionada en lona morral nacional, esta maleta ofrece un diseño práctico y duradero, ideal para estudiantes, trabajadores y viajeros.",
    price: "$279.99",
    image: "/Productos/Bolso-save.jpg",
    href: "/coleccion/maletas/maleta-save",
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
