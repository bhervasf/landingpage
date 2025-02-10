import React, { useState } from "react";

export default function ResenasSection() {
  const [carouselIndex, setCarouselIndex] = useState(0); // Controla el índice del carrusel
  const [touchStartX, setTouchStartX] = useState(null); // Para controlar el inicio del toque

  const reseñas = [
    "¡Me encantó este producto! Altamente recomendado.",
    "Buen servicio, aunque hay margen de mejora.",
    "La experiencia fue increíble, volvería a usarlo.",
    "Excelente atención al cliente, resolvieron mis dudas.",
    "Calidad superior a lo esperado, gracias.",
  ]; // Ejemplo de reseñas para el carrusel

  const nextSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % reseñas.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prevIndex) =>
      (prevIndex - 1 + reseñas.length) % reseñas.length
    );
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) {
      // Desplazamiento hacia la derecha
      prevSlide();
    } else if (deltaX < -50) {
      // Desplazamiento hacia la izquierda
      nextSlide();
    }

    setTouchStartX(null); // Reiniciar
  };

  return (
    <div
      className="relative w-full flex flex-col items-center overflow-hidden py-10"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-4/5 max-w-3xl bg-white rounded-lg shadow-lg p-6">
        {/* Botones solo visibles en pantallas grandes */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-500 text-white p-3 rounded-full shadow-md"
        >
          ◀
        </button>

        {/* Reseña activa */}
        <p className="text-center text-purple-700 text-lg font-medium">
          {reseñas[carouselIndex]}
        </p>

        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-500 text-white p-3 rounded-full shadow-md"
        >
          ▶
        </button>
      </div>

      {/* Indicadores del carrusel */}
      <div className="flex mt-6 space-x-2">
        {reseñas.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              carouselIndex === index ? "bg-purple-500" : "bg-purple-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
