
export default function ProgressiveSection() {
  return (
    <>
      <div className=" w-full mt-[60px]  justify-between sm:flex">
        <div className="seccion-creacion">
          <div className="grupo-lineas">
            <span className="linea"></span>
            <span className="linea"></span>
            <div className="linea-con-bolita">
              <span className="linea"></span>
              <span className="bolita"></span>
            </div>
          </div>
          <div className="grupo-lineas ml-[105px]">
            <span className="linea"></span>
            <span className="linea"></span>
            <span className="linea"></span>
            <span className="bolita"></span>
          </div>
          <div className="grupo-lineas ml-[209px]">
            <span className="linea"></span>
            <span className="linea"></span>
            <span className="linea"></span>
            <span className="bolita"></span>
          </div>
        </div>
        <div className="bloque text-white text-[30px] w-[40%] mr-16 mt-12 sm:mt-0">
          <p>Combina tu <span className="verde">conocimiento interno</span> con nuestra <span className="verde">experiencia</span></p>
        </div>
      </div>

      <div className=" w-full mt-[60px] sm:flex scale-x-[-1] justify-between mt-12 sm:mt-0">

        <div className="seccion-creacion ">
          <div className="grupo-lineas ">
            <span className="linea"></span>
            <span className="linea"></span>
            <span className="linea"></span>
          </div>
          <div className="grupo-lineas ml-[105px]">
            <span className="linea"></span>
            <span className="linea"></span>
            <span className="linea"></span>
            <span className="bolita"></span>
          </div>
          <div className="grupo-lineas ml-[209px]">
            <span className="linea"></span>
            <span className="linea"></span>
            <span className="linea"></span>
            <span className="bolita"></span>
          </div>
        </div>
        <div className="bloque scale-x-[-1]  text-white text-[30px] w-[40%] mr-16">
          <p>Descubre el poder de la <span className="verde">cocreación experta</span></p>
        </div>
      </div>

      <div className="flex flex-col mt-10">
        <div className="icono-bandera">
          <img src="../img/icons/final_flag.svg" width={120}></img>
        </div>
        <div className=" flex justify-center w-full"><span className="text-flag">¡Hagamos realidad tu proyecto!</span></div>
      </div>
      <div className="mt-1 relative w-full flex justify-center mb-10">
        <img src="../img/balls.svg" alt="Bolas" />
        <div className="absolute w-[80%] md:w-[40%] h-[80%] md:h-[40%]  bg-white/10 rounded-[20px] border-[1px] top-[20%] border-white backdrop-blur-xl flex flex-col items-center justify-center p-8 z-10">
          {/* Botón "Empezar" */}
          <div className="mb-6">
            <button className="px-8 py-2 bg-[#FFFFFF]/20 text-white text-lg font-bold rounded-[22px] shadow-2xl box-shadow-custom backdrop-blur-md hover:bg-white/30 transition-all">
              Empezar
            </button>
          </div>
          {/* Texto principal */}
          <div className="text-center">
            <p className="text-white text-[35px] mt-2 font-semibold">¿Listo para crear juntos?</p>
          </div>
        </div>
      </div>


    </>
  );
}
