"use client";

import React from 'react';
import { PackageSearch, ArrowLeft, ShoppingBag, Search } from 'lucide-react';
import Link from 'next/link';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0C0844] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-amarillo/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amarillo/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center justify-center p-6">
        <div className="max-w-3xl w-full">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl animate-fadeIn">
            {/* Icon Container */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-amarillo/30 rounded-full blur-2xl transform -translate-y-1/2"></div>
              <div className="relative flex justify-center">
                <Search className="w-40 h-40 text-amarillo animate-float" strokeWidth={1.5} />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <h1 className="text-7xl font-bold text-white tracking-tight">
                  4<span className="text-amarillo">0</span>4
                </h1>
                <p className="text-3xl font-light text-white/90">¡Oops! Página no encontrada</p>
              </div>

              <p className="text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
                Parece que te has perdido en el espacio digital... pero no te preocupes,
                siempre hay un camino de vuelta.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 pt-4">
                <Link
                  href="/">

                  <button
                    className="group inline-flex items-center px-8 py-4 bg-amarillo text-[#0C0844] rounded-xl font-semibold transition-all duration-300 hover:bg-[#FFD633] hover:shadow-[0_0_30px_rgba(255,207,0,0.3)] transform hover:-translate-y-1"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                    Volver al inicio
                  </button>
                </Link>
                <Link
                  href="/coleccion">

                  <button
                    className="group inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-xl font-semibold transition-all duration-300 hover:bg-white/20 hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <ShoppingBag className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
                    Ver catálogo
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-white/60 text-sm">
              ¿Necesitas ayuda? <Link href="#" className="text-amarillo hover:underline">Contacta con nosotros</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

