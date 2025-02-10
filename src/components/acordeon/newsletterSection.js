
export default function NewsletterSection() {
  return (
    <div className="flex flex-col h-full mt-10 items-center">
      <div className="text-newsletter text-justify">
        Suscríbete para recibir actualizaciones sobre <span className="text-newsletter-green">nuestos proyectos, herramientas de automatización</span> y <span className="text-newsletter-green">más</span>.
      </div>
      <div className="border-[3px] border-white rounded-full p-2 mt-6 w-[100%] md:w-[60%]">
        <input className="bg-transparent w-full focus:outline-none placeholder:text-white placeholder:text-[20px] placeholder:font-[700]" placeholder="dirección de correo electrónico"></input>
      </div>
      <div className="rounded-full bg-[#FF2A00] p-2 font-[700] mt-4">
        Suscribirme
      </div>
    </div>
  );
}
