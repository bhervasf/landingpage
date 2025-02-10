"use client";

import { useState } from "react";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { title: "Artificial Intelligence", sub_name: "AI", description: "Acercamos el Business Intelligence a tu negocio, transformando datos en información valiosa para decisiones estratégicas. Diseñamos soluciones personalizadas con análisis avanzados, dashboards interactivos y automatización de procesos. Nuestro equipo experto garantiza que cada dato se convierta en una ventaja competitiva que impulse el crecimiento de tu empresa.", img_selected: "ai_selected", img_default: "ai_default" },
    { title: "Machine Learning", sub_name: "ML", description: "Ponemos la potencia del Machine Learning al servicio de tu negocio, desarrollando soluciones inteligentes que revolucionan la forma en que trabajas. Automatizamos procesos, anticipamos tendencias y transformamos datos en decisiones estratégicas que impulsan tu crecimiento. Con modelos personalizados y un enfoque en resultados, te ayudamos a alcanzar nuevos niveles de eficiencia, innovación y competitividad. ¡Haz que tus datos trabajen para ti!", img_selected: "machine_learning_selected", img_default: "machine_learning_default" },
    { title: "Big Data", sub_name: "BD", description: "Ayudamos a las empresas a gestionar y analizar grandes volúmenes de información para obtener conocimientos estratégicos. Diseñamos soluciones personalizadas que optimizan el procesamiento, almacenamiento y análisis de datos, transformándolos en oportunidades de negocio. Nuestro enfoque garantiza que tus datos se conviertan en un motor de innovación y crecimiento sostenible.", img_selected: "big_data_selected", img_default: "big_data_default" },
    { title: "Cloud Services", sub_name: "CS", description: "Ofrecemos soluciones escalables y seguras que optimizan la operación de tu negocio. Desde migraciones y almacenamiento hasta gestión de aplicaciones. Trabajamos con plataformas líderes como AWS, Azure y Google Cloud. Nuestro enfoque personalizado garantiza alta disponibilidad, eficiencia y ahorro de costos, adaptándonos a las necesidades específicas de tu empresa. Lleva tu infraestructura al siguiente nivel con nuestras soluciones cloud.", img_selected: "cloud_services_selected", img_default: "cloud_services_default" },
  ];

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden h-full">

      {/* 📦 Contenedor del Carrusel */}
      <div className="relative flex items-center justify-center w-full max-w-[80vw] h-[50vw] overflow-hidden responsive-carrusel z-10 mb-[7%] mt-[70%] sm:mt-[5%] md:mt-[3%] lg:mt-[2%]">
        {items.map((item, index) => {
          const position = (index - activeIndex + items.length) % items.length;

          let translateX = 0;
          let opacity = 1;

          if (position === 0) translateX = 0; // Centro
          else if (position === 1) translateX = 34; // Derecha
          else if (position === items.length - 1) translateX = -34; // Izquierda
          else {
            opacity = 0; // Ocultar los demás elementos
          }

          return (
            <div
              key={index}
              className={`absolute text-center p-4 rounded-[260.81px] transition-all duration-500 ${position === 0
                  ? "w-[30vw] h-[30vw] md:h-[14vw] md:w-[14vw] scale-110 z-10"
                  : "w-[20vw] h-[26vw] md:h-[13vw] md:w-[10vw] rounded-[388.81px] technology-ball flex flex-col justify-center cursor-pointer"
                }`}
              style={{
                transform: `translateX(${translateX}vw) scale(${position === 0 ? 1.1 : 0.9})`,
                opacity: opacity,
                zIndex: position === 0 ? 2 : 1,
              }}
              onClick={() => handleItemClick(index)}
            >
              <img
                src={`../img/icons/${position === 0 ? item.img_selected : item.img_default}.svg`}
                className={position !== 0 ? "w-[20vw] h-[20vw]  md:h-[10vw] md:w-[10vw]" : "w-[20vw] h-[23vw] md:w-[14vw]  md:h-[10vw]"}
              />
              {position !== 0 && (
                <span className="name-technology text-white font-bold">{item.sub_name}</span>
              )}
            </div>
          );
        })}
      </div>

      {/* 📝 Contenedor de Texto con Ajuste Preciso */}
      <div className="absolute top-[110%]  bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[110%] rounded-full ball-text-carrusel flex items-center justify-center overflow-hidden z-20 pointer-events-auto shadow-lg">
        {/* 📝 Contenedor de Texto */}
        <div className="text-center w-[80%] mb-[220%] sm:mb-[200%]  lg:mb-[50%]">
          <h3 className="text-2xl font-bold text-white">{items[activeIndex].title}</h3>
          <p className="text-white mt-4 px-6 text-[12px] md:text-base leading-relaxed">
            {items[activeIndex].description}
          </p>
        </div>
      </div>

    </div>
  );
}
