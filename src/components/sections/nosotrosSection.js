"use client";
import { useState, useEffect, useRef } from "react";

export default function NosotrosSection() {
  const personas = [
    {
      nombre: "BORJA HERVÁS",
      rol: "FRONTEND DEVELOPER",
      ubicacion: "VALENCIA",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      nombre: "ANTONIO VILA",
      rol: "SDR",
      ubicacion: "VALENCIA",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      nombre: "JESÚS CANO",
      rol: "MARKETING",
      ubicacion: "CÁDIZ",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      nombre: "JUAN GUERRERO",
      rol: "PMO",
      ubicacion: "CÁDIZ",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      nombre: "JUAN JOSÉ PIÑERO",
      rol: "PROGRAMADOR",
      ubicacion: "CÁDIZ",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const [indiceActual, setIndiceActual] = useState(0);
  const [hasAppeared, setHasAppeared] = useState(false); // Controla si la animación ya ocurrió
  const sectionRef = useRef(null);

  // Intersection Observer para detectar visibilidad
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAppeared(true); // Marca como "visible una vez"
        }
      },
      { threshold: 0.5 } // Activa cuando el 50% de la sección es visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const siguiente = () => {
    setIndiceActual((prev) => (prev + 1) % personas.length);
  };

  const anterior = () => {
    setIndiceActual((prev) => (prev - 1 + personas.length) % personas.length);
  };

  const persona = personas[indiceActual];

  return (
    <div
      ref={sectionRef}
      className="h-screen flex flex-col items-center justify-center nosotros text-white relative"
      id="nosotros"
    >
      {/* Sección del título */}
      <div className="md:h-[60vh] flex w-full justify-center items-center text-white text-center pt-20">
        <div className="w-full px-4">
          <h3 className="text-lg font-semibold tracking-widest mb-4">NDS SOMOS</h3>
          <h1
            className="uppercase font-bold leading-tight"
            style={{
              fontSize: "clamp(5rem, 10vw, 12rem)",
              lineHeight: "1",
            }}
          >
            Nosotros
          </h1>
        </div>
      </div>

      {/* Flecha izquierda */}
      <div
        onClick={anterior}
        className="absolute left-5 top-[80%] -translate-y-1/2 text-black text-3xl font-bold cursor-pointer w-7 h-7 flex items-center justify-center md:right-10"
      >
        <img src="../img/icons/simple_arrow_left.svg" />
      </div>

      {/* Contenido del carrusel */}
      <div className="w-full max-w-7xl h-full grid grid-cols-1 md:grid-cols-1 items-center justify-center text-center gap-8 px-6 md:px-10 md:pl-[100px] md:pr-[100px]">
        {/* Columna con nombre */}
        <div
          className="flex flex-col justify-center items-center md:text-left pt-20"
          style={{
            transition: "all 0.5s ease-in-out",
            opacity: hasAppeared ? 1 : 0,
            transform: hasAppeared ? "translateY(0)" : "translateY(-50px)",
          }}
        >
          {/* Nombre */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-center">
            {persona.nombre}
          </h1>
        </div>

        {/* Texto adicional (rol, ubicación, descripción) */}
        <div
          className="mt-4 transition-all duration-700"
          style={{
            opacity: hasAppeared ? 1 : 0,
            transform: hasAppeared ? "translateY(0)" : "translateY(50px)",
          }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mt-2 text-center">{persona.rol}</h2>
          <h3 className="text-xl md:text-2xl font-bold mt-2 text-center">{persona.ubicacion}</h3>
          <div className="mt-6 text-base md:text-lg flex justify-center mb-[50px]">
            <div className="w-[60%] text-center">{persona.descripcion}</div>
          </div>
        </div>
      </div>

      {/* Flecha derecha */}
      <div
        onClick={siguiente}
        className="absolute right-5 top-[80%] -translate-y-1/2 text-black text-3xl font-bold cursor-pointer w-7 h-7 flex items-center justify-center rounded-full shadow-lg md:right-10"
      >
        <img src="../img/icons/simple_arrow_right.svg" />
      </div>
    </div>
  );
}
