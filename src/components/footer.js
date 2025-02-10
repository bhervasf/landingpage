"use client";

import { useEffect, useState } from "react";


export default function Footer() {
  const [showFooter, setShowFooter] = useState(true)
  const [pathname, setPathName] = useState(window.location.pathname)

  return (
    pathname != "/cookies" &&
    <>
      <div className="w-full h-full items-center md:h-[280px] bg-[#62D9B7] p-16 flex flex-col md:flex-row z-[10]">
        <div className="flex flex-col text-[#F5F5F5]">
          <img src="../img/icons/logo_nds_white.svg" width={200}></img>
          <span className="mt-10">
            comercial@ndigitalsolutions.com
          </span>
          <span>
            Valencia, Comunidad Valenciana
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 text-[#F5F5F5] w-full h-full">

          <div className="flex flex-col  items-center gap-y-1">
          <span className="font-[700] text-[20px] mb-3 ">Empresa</span>
            <a className="cursor-pointer" href="#Inicio">Inicio</a>
            <a className="cursor-pointer" href="#tecnologias">Tecnologías</a>
            <a className="cursor-pointer" href="#proyectos">Proyectos</a>
            <a className="cursor-pointer" href="#nosotros">Nosotros</a>
            <a className="cursor-pointer" href="#contactemos">Conectemos</a>
          </div>
          <div className="flex flex-col items-center">
          <span className="font-[700] text-[20px] mb-4">Legal</span>
            <span className="cursor-pointer text-center">Política de Privacidad</span>
            <span className="cursor-pointer text-center">Aviso Legal</span>
            <span className="cursor-pointer text-center">Política de Cookies</span>
          </div>
          <div className="flex flex-col items-center">
          <span className="font-[700] text-[20px] mb-4">Síguenos</span>
          <span className="cursor-pointer">
            <img src="../img/icons/logo_linkedin.svg"></img>
          </span>
          </div>
        </div>
      </div>
    </>
    
  );
}
