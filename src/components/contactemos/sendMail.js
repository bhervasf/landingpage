"use client";

import { useState, useEffect, useRef } from "react";

export default function SendMail() {
  const [texto, setTexto] = useState("");
  const mensaje = "Escribe un correo.";
  const velocidad = 100;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); // Referencia a la sección

  useEffect(() => {
    // Observer para detectar si la sección es visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let index = 0;
      let currentText = ""; // Variable local para construir el texto

      const typeLetter = () => {
        if (index < mensaje.length) {
          currentText += mensaje[index]; // Añadimos la letra actual a la variable local
          setTexto(currentText); // Actualizamos el estado con el texto completo
          index++;
          setTimeout(typeLetter, velocidad);
        }
      };

      typeLetter(); // Inicia la animación
    }
  }, [isVisible]);

  return (
    <div
      ref={sectionRef} // Referencia para el observer
      className="w-full px-8 md:mb-[220px] z-[80]"
    >
      <div className="flex w-full flex-col md:flex-row mt-[80px]">
        <h1 className="text-5xl font-bold leading-tight w-full flex justify-start md:justify-end mr-10">
          {texto}
        </h1>
        <form className="mt-8 space-y-6 w-full">
          <div>
            <input
              type="email"
              placeholder="Escribe aquí tu dirección de correo"
              className="w-full px-4 py-3 bg-transparent border-t-[3px] border-white placeholder-white focus:outline-none"
            />
          </div>
          <div>
            <textarea
              placeholder="Escribe aquí tu mensaje"
              className="w-full px-4 py-3 bg-transparent border-t-[3px] border-white placeholder-white focus:outline-none resize-none h-28"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-[#62D9B7] rounded-full text-lg hover:bg-green-500 transition"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
