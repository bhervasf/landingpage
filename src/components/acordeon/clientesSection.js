"use client";

import { useState } from "react";

export default function ClientesSection() {
  const [currentClient, setCurrentClient] = useState(0);

  const clients = [
    {
      logo: "../img/icons/user.svg",
      description:
        "Cliente 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.",
    },
    {
      logo: "../img/icons/user.svg",
      description:
        "Cliente 2: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    },
    {
      logo: "../img/icons/user.svg",
      description:
        "Cliente 3: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    },
  ];

  const handleNext = () => {
    setCurrentClient((prev) => (prev + 1) % clients.length);
  };

  const handlePrev = () => {
    setCurrentClient((prev) =>
      prev - 1 < 0 ? clients.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative mt-6 flex items-center justify-center">
      {/* Flechas para navegar */}
      <button
        className="absolute left-4 text-2xl z-10 text-gray-600 hover:text-gray-800"
        onClick={handlePrev}
      >
        <img src="../img/icons/arrow_left.svg"></img>
      </button>
      <button
        className="absolute right-4 text-2xl z-10 text-gray-600 hover:text-gray-800"
        onClick={handleNext}
      >
        <img src="../img/icons/arrow_right.svg"></img>
      </button>

      {/* Vista para pantallas grandes */}
      <div className="hidden lg:flex items-center justify-center w-full">
        <img
          src={clients[currentClient].logo}
          className="absolute left-[8.5vw] w-[20%]"
          alt="Client Logo"
        />
        <img
          src="../img/icons/clients_layer.svg"
          className="w-full"
          alt="Clients Layer"
        />
        <div className="absolute w-[200px] text-client-description right-[17vw] text-[60%] xl:text-[80%] 2xl:text-[100%] 2xl:w-[250px] 2xl:right-[19vw]">
          {clients[currentClient].description}
        </div>
      </div>

      {/* Vista para pantallas pequeñas */}
      <div className="lg:hidden flex flex-col items-center">
        <img
          src={clients[currentClient].logo}
          className="w-24 mb-4"
          alt="Client Logo"
        />
        <div className="text-center px-4 text-sm mt-10">
          {clients[currentClient].description}
        </div>
      </div>
    </div>
  );
}
