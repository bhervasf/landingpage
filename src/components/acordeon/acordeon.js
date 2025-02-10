"use client";

import { useState } from "react";
import ValoresSection from "./valoresSection"; // Importa el componente de valores
import ClientesSection from "./clientesSection"; // Importa el componente de clientes
import NewsletterSection from "./newsletterSection";
import ResenasSection from "./resenasSection";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(1);

  const sections = [
    { id: 1, title: "clientes", content: "clientes" },
    { id: 2, title: "valores", content: "valores" },
    { id: 3, title: "reseñas", content: "" },
    { id: 4, title: "newsletter", content: "" },
  ];

  return (
    <div className="border-2 border-b-0 border-white flex mt-16 rounded-tl-[37px] rounded-tr-[37px] w-[70%] mx-auto">
      <div className="p-8 rounded-xl text-white mx-auto w-full">
        {sections.map((section) => (
          <div key={section.id} className="mb-6">
            {/* Encabezado */}
            <div
              className="flex items-center cursor-pointer relative"
              onClick={() => setActiveIndex(section.id)}
            >
              <span className="text-3xl font-bold mr-2">
                {activeIndex === section.id ? "∨" : ">"}
              </span>
              <h2 className={`text-2xl font-bold ${activeIndex === section.id ? "text-[#5ED3B8]" : "text-white"}`}>
                {section.id} {"{"}{section.title}{"}"}
              </h2>
              <div className="absolute bottom-[-4px] left-0 w-full border-t border-white"></div>
            </div>

            {/* Contenido Expandido */}
            {activeIndex === section.id && section.id === 1 && <ClientesSection />}
            {activeIndex === section.id && section.id === 2 && <ValoresSection />}
            {activeIndex === section.id && section.id === 3 && <ResenasSection />}
            {activeIndex === section.id && section.id === 4 && <NewsletterSection />}
          </div>
        ))}
      </div>
    </div>
  );
}
