import { useState } from "react";

export default function ValoresSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Datos de las tarjetas
  const cards = [
    { id: 1, icon: "../img/icons/flag.svg", title: "Misión", description: "Brindar soluciones tecnológicas innovadoras y personalizadas que ayuden a las empresas a superar desafíos, optimizar procesos y alcanzar sus objetivos estratégicos. Nos comprometemos a ofrecer un servicio excepcional, combinando experiencia, tecnología de vanguardia y un enfoque centrado en las necesidades de nuestros clientes para impulsar su crecimiento y éxito sostenible." },
    { id: 2, icon: "../img/icons/eye.svg", title: "Visión", description: "Ser el aliado tecnológico líder que transforma la manera en que las empresas aprovechan la tecnología, impulsando la innovación, la eficiencia y el crecimiento sostenible. Aspiramos a convertirnos en referencia en soluciones avanzadas de IT, Business Intelligence, Big Data, Inteligencia Artificial y servicios en la nube, entregando un impacto tangible que inspire confianza y marque la diferencia en el éxito de nuestros clientes." },
    { id: 3, icon: "../img/icons/file.svg", title: "Valores", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  ];

  // Funciones para cambiar de tarjeta
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between h-full mt-10">
      {/* Texto descriptivo */}
      <div className="w-full lg:w-[50%] text-justify flex flex-col items-center lg:items-start mt-4 lg:mt-0 px-4">
        {/* Flechas */}
        <div className="w-[80%] text-justify flex flex-col">
        <span className="title-valores">{cards[currentIndex].title}</span>
        {cards[currentIndex].description}
      </div>

        <button
          className="absolute left-[16%] top-[55%] lg:left-[45%] transform -translate-y-1/2  p-2 rounded-full shadow-md"
          onClick={handlePrev}
        >
          <img src="../img/icons/arrow_left.svg"></img>
        </button>
        <button
          className="absolute right-[16%] top-[55%] z-[50] md:right-[17%] transform -translate-y-1/2 p-2 rounded-full shadow-md"
          onClick={handleNext}
        >
          <img src="../img/icons/arrow_right.svg"></img>
        </button>
      </div>

      {/* Contenedor de las tarjetas */}
      <div className="relative w-full lg:w-[50%] h-full flex items-center justify-center px-4 ">


        {/* Tarjetas */}
        <div className="relative w-full max-w-[400px] h-[250px] flex items-center">
          {cards.map((card, index) => {
            // Cálculo para rotar las cartas correctamente
            const relativeIndex = (index - currentIndex + cards.length) % cards.length;
            const zIndex = cards.length - relativeIndex; // Controlar apilamiento
            const translateX = `${relativeIndex * 30}px`;

            return (
              <div
                key={card.id}
                className="absolute bg-[#D9D9D9] shadow-card rounded-[46px] h-full w-[70%] flex items-center justify-center transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(${translateX})`,
                  zIndex: zIndex,
                }}
              >
                <img src={card.icon} alt={card.title} className="h-[40%]" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Layout responsivo: en pantallas pequeñas, las cartas arriba y texto abajo */}
      <style jsx>{`
        @media (max-width: 768px) {
          .lg\\:flex-row {
            flex-direction: column-reverse;
          }
          .lg\\:w-\\[50%\\] {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
