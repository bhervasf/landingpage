"use client";

import { useEffect, useRef } from "react";

export default function LayersCircle() {
  const layersRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      layersRef.current.forEach((layer, index) => {
        if (!layer) return;

        const speed = (index + 1) * 0.02; // Cada capa tiene un movimiento más lento
        const x = (clientX - window.innerWidth / 2) * speed;
        const y = (clientY - window.innerHeight / 2) * speed;

        layer.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <img ref={(el) => (layersRef.current[4] = el)} src="../img/layer1.svg" className="layer1"></img>
      <img ref={(el) => (layersRef.current[3] = el)} src="../img/layer2.svg" className="layer2"></img>
      <img ref={(el) => (layersRef.current[2] = el)} src="../img/layer3.svg" className="layer3"></img>
      <img ref={(el) => (layersRef.current[1] = el)} src="../img/layer4.svg" className="layer4"></img>
      <img ref={(el) => (layersRef.current[0] = el)} src="../img/layer5.svg" className="layer5"></img>
    </>
  );
}
