import { useEffect, useState } from "react";

export default function Carousel3D(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + props.clientes.imgs.length) % props.clientes.imgs.length
    );
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % props.clientes.imgs.length);
  };

  useEffect(() => {
    console.log(props.clientes);
  }, []);

  return (
    <div className="relative w-full h-[400px] flex justify-center items-center">
      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-10 z-10 p-4 bg-white/20 text-white rounded-full hidden md:block" // Visible solo en pantallas md o mayores
      >
        <img src="../img/icons/arrow_left.svg" alt="Flecha izquierda" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-10 z-10 p-4 bg-white/20 text-white rounded-full hidden md:block" // Visible solo en pantallas md o mayores
      >
        <img src="../img/icons/arrow_right.svg" alt="Flecha derecha" />
      </button>

      {/* Contenedor de los props.clientes */}
      <div
        className="relative flex justify-center items-center w-full h-full perspective overflow-hidden"
        onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
        onTouchMove={(e) => setTouchEndX(e.touches[0].clientX)}
        onTouchEnd={() => {
          if (touchStartX - touchEndX > 50) {
            nextSlide();
          } else if (touchStartX - touchEndX < -50) {
            prevSlide();
          }
        }}
      >
        {props.clientes.imgs?.map((img, index) => {
          const position =
            (index - activeIndex + props.clientes.imgs.length) %
            props.clientes.imgs.length;

          let slideClass = "";
          if (position === 0) {
            slideClass = "transform scale-100 translate-x-0 z-20 opacity-100";
          } else if (
            position === 1 ||
            position === props.clientes.imgs.length - 1
          ) {
            slideClass = "transform scale-90 translate-x-[150px] z-10 opacity-90";
          } else if (
            position === 2 ||
            position === props.clientes.imgs.length - 2
          ) {
            slideClass = "transform scale-75 translate-x-[300px] z-0 opacity-75";
          } else {
            slideClass = "transform scale-50 opacity-0 z-0";
          }

          if (
            position === props.clientes.imgs.length - 1 ||
            position === props.clientes.imgs.length - 2
          ) {
            slideClass = slideClass
              .replace("translate-x-[150px]", "-translate-x-[150px]")
              .replace("translate-x-[300px]", "-translate-x-[300px]");
          }

          return (
            <img
              key={index}
              src={`../img/proyectos/${props.clientes.name}/${img}`}
              alt={`Slide ${index + 1}`}
              className={`absolute w-[40%] h-[300px] object-cover rounded-lg transition-all duration-500 ease-in-out ${slideClass}`}
            />
          );
        })}
      </div>
    </div>
  );
}
