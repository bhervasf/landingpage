"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState("Inicio");
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      // Mostrar el navbar después de 80vh
      setIsVisible(offset > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] backdrop-blur-sm px-8 py-4 flex items-center justify-between transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* 🖥️ Logo */}
      <div className="flex items-center">
        <img src="../img/icons/Logo_NDS.svg" alt="Logo" className="h-10 mr-2" />
      </div>

      {/* 📚 Menú */}
      <ul className="hidden md:flex space-x-6 items-center">
        {[{ name: "Inicio", href: "#tecnologias" }, { name: "Proyectos", href: "#proyectos" }, { name: "Nosotros", href: "#nosotros" }].map((item) => (
          <li key={item.name}>
            <Link href={item.href}>
              <button
                onClick={() => setActive(item.name)}
                className={`px-4 py-1 rounded-full text-sm font-medium transition-all text-[#62D9B7] ${
                  active === item.name
                    ? "bg-[#5ED3B8] text-white"
                    : "hover:bg-white/20 border border-[#5ED3B8]"
                }`}
              >
                {item.name}
              </button>
            </Link>
          </li>
        ))}
        <li>
          <Link href="#contactemos">
            <button className="bg-[#5ED3B8] text-[#2A1A64] px-4 py-1 rounded-full text-sm font-medium">
              Conectémos
            </button>
          </Link>
        </li>
      </ul>

      {/* 📱 Menú Móvil */}
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
        {isMenuOpen && (
          <div className="fixed top-0 right-0 w-full h-full bg-[#2A1A64] z-[101]">
            <div className="flex justify-end p-4">
              <button
                className="text-white"
                onClick={toggleMenu}
              >
                ✖
              </button>
            </div>
            <ul className="space-y-4 p-8 text-white bg-[#2A1A64]">
              {[{ name: "Inicio", href: "#" }, { name: "Proyectos", href: "#proyectos" }, { name: "Nosotros", href: "#nosotros" }].map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <button
                      onClick={() => {
                        setActive(item.name);
                        setIsMenuOpen(false); // Cierra el menú al hacer clic en un enlace
                      }}
                      className={`block w-full px-4 py-2 text-sm text-left ${
                        active === item.name
                          ? "bg-[#5ED3B8] text-[#F5F5F5]"
                          : "hover:bg-white/20"
                      }`}
                    >
                      {item.name}
                    </button>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#contactemos">
                  <button className="block w-full px-4 py-2 bg-[#5ED3B8] text-[#2A1A64] text-sm font-medium">
                    Conectémos
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
