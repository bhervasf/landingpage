"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const cookies = () => {
  const [showNavFooter, setShowNavFooter] = useState(true);

  // Al cargar esta página, ocultamos el nav y footer

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-900 text-white">
      {/* Botón de Volver al inicio */}
      <Link href="/" passHref>
        <button className="absolute top-5 left-5 text-white bg-transparent border border-white px-4 py-2 rounded">
          ← Volver al Inicio
        </button>
      </Link>

      {/* Contenido de la página */}
      <div className="max-w-2xl text-left mt-20 px-6">
        <h1 className="text-3xl font-semibold">Política de Cookies</h1>
        <div className="w-[90px] h-[10px] border-b-[4px] border-white  mb-8"></div>

        <div className="text-left">
          <p>Nespra Digital Solutions SL, al igual que la mayoría de portales en Internet, usa cookies para mejorar la experiencia de navegación del usuario. Las cookies personalizan los servicios que ofrece el sitio web, ofreciendo a cada usuario información que puede ser de su interés, en atención al uso que realiza de este portal. A continuación, encontrará información sobre qué son las cookies, qué tipo de cookies utiliza este portal, cómo puede desactivar las cookies en su navegador o cómo desactivar específicamente la instalación de cookies de terceros y qué ocurre en caso de deshabilitarlas.</p>

          <h3 className="font-bold text-lg mt-8">¿Qué son las cookies?</h3>
          <br></br>
          <p>
            Las cookies son pequeños archivos que algunas plataformas, como las páginas web, pueden instalar en su ordenador, smartphone, tableta o televisión conectada, al acceder a las mismas. Sus funciones pueden ser muy variadas: almacenar sus preferencias de navegación, recopilar información estadística, permitir ciertas funcionalidades técnicas, almacenar y recuperar información sobre los hábitos de navegación o preferencias de un usuario o de su equipo hasta el punto, en ocasiones, dependiendo de la información que contengan y de la forma en que utilice su equipo, de poder reconocerlo. Una cookie se almacena en un ordenador para personalizar y facilitar al máximo la navegación del usuario. Las cookies se asocian únicamente a un usuario y su ordenador y no proporcionan referencias que permitan deducir datos personales del usuario. El usuario podrá configurar su navegador para que notifique o rechace la instalación de las cookies enviadas por el sitio web.
          </p>
          <br></br>
          <h3 className="font-bold text-lg mt-8">¿Por qué son importantes?</h3>
          <br></br>
          <p>
            Las cookies son útiles por varios motivos. Desde un punto de vista técnico, permiten que las páginas web funcionen de forma más ágil y adaptada a las preferencias del usuario como ,por ejemplo, almacenar su idioma o la moneda de su país. Además, ayudan a los responsables de los sitios web a mejorar los servicios que ofrecen, gracias a la información estadística que recogen a través de ellas. Finalmente, sirven para hacer más eficiente la publicidad que le mostramos, gracias a la cual le podemos ofrecer servicios de forma gratuita.
          </p>
          <br></br>
          <h3 className="font-bold text-lg mt-8">Cookies de análisis estadístico</h3>
          <br></br>
          <p>
            Son aquellas que, bien tratadas por nosotros o por terceros, permiten cuantificar el número de visitantes y analizar estadísticamente la utilización que hacen los usuarios de nuestros servicios. Gracias a ellas podemos estudiar la navegación por nuestra página web y mejorar así la oferta de productos o servicios que ofrecemos. Estas cookies no irán asociadas a ningún dato de carácter personal que pueda identificar al usuario, dando información sobre el comportamiento de navegación de forma anónima.
          </p>
          <br></br>
          <h3 className="font-bold text-lg mt-8">Cookies de geolocalización</h3>
          <br></br>
          <p>
            Estas cookies son usadas por programas que intentan localizar geográficamente la situación del ordenador, smartphone, tableta o televisión conectada, para de manera totalmente anónima ofrecerle contenidos y servicios más adecuados.
          </p>
          <br></br>
          <h3 className="font-bold text-lg mt-8">Cookies de registro</h3>
          <br></br>
          <p>
            Cuando usted se registra en nuestro portal, se generan cookies que le identifican como usuario registrado e indican cuándo usted se ha identificado en el portal. Estas cookies son utilizadas para identificar su cuenta de usuario y sus servicios asociados, facilitando así su navegación. Estas cookies se mantienen mientras usted no abandone la cuenta, cierre el navegador o apague el dispositivo. Estas cookies pueden ser utilizadas en combinación con datos analíticos para identificar de manera individual sus preferencias en nuestro portal.
          </p>
          <br></br>
          <h3 className="font-bold text-lg mt-8">Cookies publicitarias</h3>
          <br></br>
          <p>
            Son aquéllas que, bien tratadas por nosotros o por terceros, permiten gestionar eficazmente los espacios publicitarios de nuestro sitio web, adecuando el contenido del anuncio al contenido del servicio solicitado o al uso que realice de nuestra página web. Gracias a ella podemos conocer sus hábitos de navegación en internet y mostrarle publicidad relacionada con su perfil de navegación.
          </p>
          <br></br>
          <h3 className="font-bold text-lg mt-8">¿Cómo puedo configurar mis preferencias?</h3>
          <br></br>
          <p>
            Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones de su navegador de internet.
          </p>
          <br></br>
          <p>
            A continuación, le ofrecemos enlaces en los que encontrará información sobre cómo puede activar sus preferencias en los principales navegadores:
          </p>
          <br></br>
          <ul>
            <li type="disc">Firefox: http://support.mozilla.org/es/products/firefox/cookies</li>
            <li type="disc">Chrome: http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647</li>
            <li type="disc">Explorer: http://windows.microsoft.com/es-es/windows7/how-to-manage-cookies-in-internet-explorer-9</li>
            <li type="disc">Safari: http://support.apple.com/kb/ph5042</li>
            <li type="disc"> Opera: http://help.opera.com/Windows/11.50/es-ES/cookies.html</li>
          </ul>
          <h3 className="font-bold text-lg mt-8">¿Qué ocurre si se deshabilitan las cookies?</h3>
          <br></br>
          <p>
            En el caso de bloquear o no aceptar la instalación de cookies es posible que ciertos servicios ofrecidos por nuestro sitio web que necesitan su uso queden deshabilitados y, por lo tanto, no estén disponibles para usted por lo que no podrá aprovechar por completo todo lo que nuestras webs y aplicaciones le ofrecen. Es posible también que la calidad de funcionamiento de la página web pueda disminuir.
          </p>
          <br></br>
          <h3 className="font-bold text-lg mt-8">Aceptación de cookies</h3>
          <br></br>
          <p>
            Si usted sigue navegando después de haberle informado sobre nuestra Política de cookies entendemos que acepta la utilización de las cookies.
          </p>
          <br></br>
          <p>
            Al acceder a este sitio web o aplicación por primera vez, verá una ventana donde se le informa de la utilización de las cookies y donde puede consultar esta política de cookies. Si usted consiente la utilización de cookies, continúa navegando o hace clic en algún link se entenderá que usted ha consentido nuestra política de cookies y, por tanto, la instalación de las mismas en su equipo o dispositivo.
          </p>
          <br></br>
          <p>
            Además del uso de nuestras cookies propias, permitimos a terceros establecer cookies y acceder a ellas en su ordenador. El consentimiento del uso de las cookies de estas empresas está ligado a la navegación por este sitio web.
          </p>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default cookies;
