"use client";

import GoLinkedin from "@/components/contactemos/goLinkedin";
import SendMail from "@/components/contactemos/sendMail";
import { useState, useEffect } from "react";

export default function ConectemosSection() {
  const [texto, setTexto] = useState("");
  const mensaje = "Escribe un correo.";
  const velocidad = 100;
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(1) /* 1 -> email | 2 -> linkedin */

  useEffect(() => {
    let index = 0;
    const intervalo = setInterval(() => {
      if (index < mensaje.length - 1) {
        setTexto((prev) => prev + mensaje[index]);
        index++;
      } else {
        clearInterval(intervalo);
      }
    }, velocidad);

    return () => clearInterval(intervalo);
  }, [mensaje]);

  return (
    <div className="relative proyectos flex flex-col justify-between text-white font-sans" id="contactemos">
      {opcionSeleccionada == 1 ?
        <SendMail></SendMail>
        : <GoLinkedin></GoLinkedin>
      }

      {/* Anillos posicionados en la parte inferior */}
      <div className="relative flex justify-center items-end w-full h-[30vh]">
        {/* Anillo grande */}
        <div className="absolute w-[70%]">
          <div className="absolute left-[-10%] bottom-[40%] w-[15%] md:w-[15%] z-[80]" onClick={() => { setOpcionSeleccionada(1) }}>
            <img src={opcionSeleccionada == 1 ? "../img/icons/mail_selected.svg" : "../img/icons/mail.svg"} alt="Mail Icon" className={"h-auto w-full"} />
          </div>
          <img src="../img/icons/halfball_big.svg" alt="Anillo grande" className={opcionSeleccionada == 2 ? "scale-x-[-1]" : ""} />
          <div className="absolute  right-[-12%] bottom-[50%] w-[15%] md:w-[15%] z-[80]" onClick={() => { setOpcionSeleccionada(2) }}>
            <img src={opcionSeleccionada == 1 ? "../img/icons/logo_linkedin.svg" : "../img/icons/logo_linkedin_selected.svg"} alt="Mail Icon" className="w-[60%] md:w-[50%] h-auto" />
          </div>
        </div>
        <div className=" relative w-full">
        <div className={"absolute bottom-0 w-full z-[70] left-[45%] md:left-[43%] " + (opcionSeleccionada == 1 ? "left-[43%] md:left-[40%]" : "left-[44%] md:left-[44%]")}>
        <img src={`../img/icons/${opcionSeleccionada == 1 ? "mail_selected.svg" : "logo_linkedin_selected.svg"}`} alt="Mail Icon" className={" h-auto " + (opcionSeleccionada == 1 ? "w-[15%] md:w-[20%]" : "w-[12%] md:w-[14%] mb-5 md:mb-10")} />
        </div>

       <div className="absolute bottom-0"><img src="../img/light_ball.svg"></img></div></div> 
        {/* Anillo intermedio */}
        <div className="absolute w-[50%] bottom-0">
          <img src="../img/icons/halfball_medium.svg" alt="Anillo mediano" />
        </div>
      </div>
    </div>
  );
}
