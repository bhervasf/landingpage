"use client";

import { useState, useEffect } from "react";

export default function GoLinkedin() {


  return (

        <div className="relative p-8 rounded-lg text-white max-w-4xl mx-auto mt-16 h-full mb-[100px] md:mb-[320px]">
          <div className="text-center">
            <div className="text-3xl mb-4">
              Conecta con nosotros <span className="font-[900]">a través de LinkedIn</span>
              </div>
            <p className="text-lg mb-6">
              Infórmate sobre las últimas novedades del sector, así como de los
              proyectos en los que hemos trabajado.
            </p>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#62D9B7] text-lg text-white py-2 px-6 rounded-full hover:bg-green-500 transition"
            >
              Acceder
            </a>
          </div>
        </div>
      );
    }
  
