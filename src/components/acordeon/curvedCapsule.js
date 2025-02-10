"use client";

export default function CurvedCapsule() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#2A1A64] to-[#5ED3B8] p-4 relative overflow-hidden">
      {/* Línea blanca izquierda */}
      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-white"></div>

      {/* Cápsula principal */}
      <div className="relative w-[90%] md:w-[70%] h-[300px] flex items-center justify-center overflow-hidden">
        <div className="w-full h-full relative flex items-center justify-center">
          {/* Forma orgánica */}
          <div className="absolute w-full h-[100%] bg-gradient-to-r from-[#FF4D4D] via-[#FF7676] to-[#E54B4B] rounded-[50%] flex items-center justify-center overflow-hidden shadow-lg">
            {/* Efecto Blur */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D4D] via-[#FF7676] to-[#E54B4B] blur-lg"></div>

            {/* Icono circular */}
            <div className="absolute left-[-5%] w-[120px] h-[120px] bg-white rounded-full flex items-center justify-center shadow-md z-10">
              <span className="text-5xl text-black">👤</span>
            </div>

            {/* Texto */}
            <div className="w-[50%] text-center z-20 px-4">
              <p className="text-sm md:text-base text-black leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Línea blanca inferior */}
      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-white"></div>
    </div>
  );
}
