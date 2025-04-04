"use client";
import React from 'react';
import Link from 'next/link';

/**
 * Componente Link mejorado para SEO que incluye atributos como rel y aria-label
 * @param {Object} props - Propiedades del componente
 * @param {string} props.href - URL de destino
 * @param {React.ReactNode} props.children - Contenido del enlace
 * @param {string} [props.ariaLabel] - Texto descriptivo para accesibilidad
 * @param {boolean} [props.isExternal=false] - Si es un enlace externo
 * @param {string} [props.className] - Clases CSS
 * @param {Object} [props.rest] - Propiedades adicionales
 */
const SEOLink = ({ 
  href, 
  children, 
  ariaLabel,
  isExternal = false,
  className = '',
  ...rest 
}) => {
  // Determina si es un enlace externo (comienza con http o https)
  const isExternalLink = isExternal || href.startsWith('http');
  
  // Atributos para enlaces externos
  const externalProps = isExternalLink ? {
    target: "_blank",
    rel: "noopener noreferrer",
  } : {};
  
  // Atributo aria-label para accesibilidad y SEO
  const ariaProps = ariaLabel ? {
    'aria-label': ariaLabel
  } : {};

  return (
    <Link 
      href={href} 
      className={className}
      {...externalProps}
      {...ariaProps}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default SEOLink; 