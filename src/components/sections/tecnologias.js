"use client";

import Accordion from "@/components/acordeon/acordeon";
import CarruselTecnologias from "@/components/carruselTecnologias";
import ProgressiveSection from "@/components/progressiveSection";
import { useEffect, useRef } from "react";

export default function TecnologiasSection() {



  return (
    <div id="tecnologias">
    <div className="relative tecnologias flex flex-col">
      <div className=" absolute z-10 pt-[20px] top-0 ">
        {/* Sección Superior */}
        <div className="text-center py-10 flex justify-center">
          <h2 className="text-4xl font-bold text-white text-title-technology w-[54%] text-[40px] 2xl:text-[60px]">
            <span className="text-[#62D9B7]">Tecnologías</span> con las que trabajamos
          </h2>
        </div>
      </div>

      <div className="absolute  h-screen w-full">
        <div className="relative overflow-hidden  h-screen w-full">
          <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 w-[240vw] h-[240vw] circle-info  rounded-full"></div>
        </div>
      </div>

      {/* 🚀 Órbita Blanca */}
      <div className="absolute  h-screen w-full  z-4">
        <div className="relative overflow-hidden  h-screen w-full z-4">
          <div className="absolute  top-0  h-screen w-full  overflow">
            <img src="../img/orbita.svg" className="h-[85vh] w-full"></img>
          </div>
        </div>
      </div>
      <CarruselTecnologias></CarruselTecnologias>
    </div>

    <div className="relative acordeon flex flex-col items-center overflow-hidden">
      <Accordion></Accordion>
    </div>
    
    <div className="relative progressiveSection flex flex-col items-center overflow-hidden">
      <ProgressiveSection></ProgressiveSection>
    </div>
    </div> 
  );
}
