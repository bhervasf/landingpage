"use client";
import CarruselProyectos from "@/components/carruselProyectos";
import { useState } from "react";

export default function ProyectosSection() {
  const [clientes, setClientes] = useState([
    {
      name: "ai",
      logo: "logo_ai.svg",
      imgs: [
        "img1.png",
        "img2.png",
        "img3.png",
        "img4.png",
        "img5.png",
      ],
      title_description: "SOLUCIÓN LMS AVANZADA",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    },
    {
      name: "wpark",
      logo: "logo_wpark.svg",
      imgs: [
        "img1.png",
        "img2.png",
        "img3.png",
        "img4.png",
        "img5.png",
      ],
      title_description: "SISTEMAS DE GESTIÓN DE CAMPAS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      name: "ford",
      logo: "logo_ford.svg",
      imgs: [
        "img1.png",
        "img2.png",
        "img3.png",
        "img4.png",
        "img5.png",
      ],
      title_description: "VEHICLE LAUNCH KEY PERFORMANCE METRICS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      name: "Loomis",
      logo: "logo_loomis.svg",
      imgs: [
        "img1.png",
        "img2.png",
        "img3.png",
        "img4.png",
        "img5.png",
      ],
      title_description: "SISTEMA OPTIMIZADO DE RUTAS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center proyectos text-white" id="proyectos">
      {/* Título */}
      <div className="text-center mt-16">
        <h1 className="text-4xl font-bold">NUESTROS</h1>
        <h2 className="text-6xl font-extrabold">PROYECTOS</h2>
      </div>

      {clientes.map((cliente, index) => (
        <div key={index} className="relative w-full flex flex-col items-center mt-10 gap-8">
          {/* Texto de fondo */}
          <div className="absolute inset-0 flex justify-center items-top -z-2 blur-[7px] top-[-180px]">
            <h1 className="text-[30rem] font-extrabold text-white/10 uppercase tracking-wider">
              {cliente.name}
            </h1>
          </div>

          {/* Logo central */}
          <div className="my-8">
            <div
              className={`rounded-full w-[170px] flex items-center justify-center h-[170px] ${
                cliente.name !== "ai" ? "bg-[#F5F5F5]" : ""
              }`}
            >
              <img src={`../img/proyectos/${cliente.name}/${cliente.logo}`} alt={cliente.name} />
            </div>
          </div>

          {/* Carrusel */}
          <CarruselProyectos clientes={cliente} />

          {/* Texto inferior */}
          <div className="mt-2 mb-10 text-center">
            <h3 className="text-3xl font-bold">{cliente.title_description}</h3>
            <p className="mt-4 text-lg max-w-2xl mx-auto">{cliente.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
