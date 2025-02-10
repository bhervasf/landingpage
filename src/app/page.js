"use client";

import LayersCircle from "@/components/layersCircle";
import ConectemosSection from "@/components/sections/conectemos";
import ProyectosSection from "@/components/sections/proyecyosSection";
import TecnologiasSection from "@/components/sections/tecnologias";
import NosotrosSection from "@/components/sections/nosotrosSection";
import { useEffect, useRef } from "react";

export default function Home() {



  return (
    <div>
      <div className="mb-[300px] inicio mt-[300px] relative overflow-hidden">
        <img src="../img/icons/Logo_NDS.svg" className="absolute ml-auto top-[50px] w-[250px]"></img>
        <LayersCircle></LayersCircle>
        <div className="glow-text text-white w-[300px] absolute left-[17%] top-[30%] sm:top-[35%]">
          Haciendo los datos hermosos, útiles y comprensibles
        </div>
        <div className="glow-text text-white w-[300px] absolute right-[17%] top-[60%] sm:top-[40%]">
          Tan simple como puede ser
        </div>


        {/* Botones de navegación */}
        <div className="nav-button technologies text-white left-[-6%] md:left-[20%]">
          <div className="button-group relative">
            <div className="button w-[180px] mb-5"></div>
            <a className="absolute top-[30%] ml-10" href="#tecnologias">Tecnologías</a>
          </div>
          <div className="relative">
            <div className="border-b-[1px] w-[180px]"></div>
            <div className="border-b-[1px] w-[100px] mt-[34.5px] ml-[165px] rotate-45"></div>
            <div className="border-t-[1px] w-[50px] absolute right-[85px] top-[5.5px] rotate-0"></div>
            <div className="border-b-[1px] w-[100px] absolute top-[41px] left-[165px] rotate-45"></div>
          </div>
        </div>

        <div className="nav-button about right-[-6%] md:right-[20%]">
          <div className="button-group relative ml-20">
            <div className="button-secondary w-[180px] mb-5 scale-x-[-1]"></div>
            <a className="text-[#6F6BF2] absolute top-[30%] ml-[50px]" href="#nosotros">Nosotros</a>
          </div>
          <div className="relative transform scale-x-[-1]">
            <div className="border-b-[1px] w-[180px]"></div>
            <div className="border-b-[1px] w-[100px] mt-[34.5px] ml-[165px] rotate-45"></div>
            <div className="border-t-[1px] w-[50px] absolute right-[85px] top-[5.5px] rotate-0"></div>
            <div className="border-b-[1px] w-[100px] absolute top-[41px] left-[165px] rotate-45"></div>
          </div>
        </div>

        <div className="nav-button projects  left-[-6%] md:left-[20%]">
          <div className="relative transform scale-y-[-1]">
            <div className="border-b-[1px] w-[180px]"></div>
            <div className="border-b-[1px] w-[100px] mt-[34.5px] ml-[165px] rotate-45"></div>
            <div className="border-t-[1px] w-[50px] absolute right-[85px] top-[5.5px] rotate-0"></div>
            <div className="border-b-[1px] w-[100px] absolute top-[41px] left-[165px] rotate-45"></div>
          </div>
          <div className="button-group relative ml-0 mt-5">
            <div className="button-secondary w-[180px] mb-2 scale-y-[-1]"></div>
            <a className="text-[#6F6BF2] absolute top-[30%] ml-[50px]" href="#proyectos">Proyectos</a>
          </div>
        </div>

        <div className="nav-button contact  right-[-6%] md:right-[20%]">
          <div className="relative transform scale-y-[-1] scale-x-[-1]">
            <div className="border-b-[1px] w-[180px]"></div>
            <div className="border-b-[1px] w-[100px] mt-[34.5px] ml-[165px] rotate-45"></div>
            <div className="border-t-[1px] w-[50px] absolute right-[96px] top-[5.5px] rotate-0"></div>
            <div className="border-b-[1px] w-[100px] absolute top-[41px] left-[165px] rotate-45"></div>
          </div>
          <div className="button-group relative ml-24 mt-5">
            <div className="button-secondary w-[180px] mb-2 scale-y-[-1] scale-x-[-1]"></div>
            <a className="text-[#6F6BF2] absolute top-[30%] ml-[50px]" href="#contactemos">Contacto</a>
          </div>
        </div>
      </div>
      <TecnologiasSection></TecnologiasSection>
      <ProyectosSection></ProyectosSection>
      <NosotrosSection></NosotrosSection>
      <ConectemosSection></ConectemosSection>
    </div>
  );
}
