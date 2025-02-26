"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const AvisoLegal = () => {
  const [showNavFooter, setShowNavFooter] = useState(true);

  // Al cargar esta página, ocultamos el nav y footer
  useEffect(() => {
    setShowNavFooter(false);

    // Restaurar el nav y footer cuando salimos de esta página
    return () => {
      setShowNavFooter(true);
    };
  }, []);

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
        <h1 className="text-3xl font-semibold">Aviso Legal</h1>
        <div className="w-[90px] h-[10px] border-b-[4px] border-white  mb-8"></div>

        <div className="text-left">
          <h2 className="font-bold text-lg">Nespra Digital Solutions SL</h2>
          <p>Denominación:</p>
          <p>Nombre comercial:</p>
          <p>Domicilio:</p>
          <p>CIF:</p>
          <p>Teléfono:</p>
          <p>Correo electrónico:</p>
          <p>Nombre de dominio:</p>

          <h3 className="font-bold text-lg mt-8">Objeto</h3>
          <br></br>
          <p>
            El prestador, responsable del sitio web, pone a disposición de los usuarios el presente documento con el que pretende dar cumplimiento a las
            obligaciones dispuestas en la Ley 34/2002, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), así como informar
            a todos los usuarios del sitio web respecto a cuáles son las condiciones de uso del sitio web.
          </p>
          <br></br>
          <p>
            Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la observancia y cumplimiento riguroso de las disposiciones
            aquí dispuestas, así como a cualquiera otra disposición legal que fuera de aplicación.
          </p>
          <br></br>
          <p>
            El prestador se reserva el derecho a modificar cualquier tipo de información que pudiera aparecer en el sitio web, sin que exista obligación de preavisar o poner en conocimiento de los usuarios dichas obligaciones, entendiéndose como suficiente con la publicación en el sitio web del prestador.
          </p>
          <br></br>
          <h3 className="font-bold text-lg mt-8">Responsabilidad</h3>
          <br></br>
          <p>
            El prestador se exime de cualquier tipo de responsabilidad derivada de la información publicada en su sitio web, siempre que esta información haya sido manipulada o introducida por un tercero ajeno al mismo.
          </p>
          <br></br>
          <p>
            El sitio web del prestador puede utilizar cookies (pequeños archivos de información que el servidor envía al ordenador de quien accede a la página) para llevar a cabo determinadas funciones que son consideradas imprescindibles para el correcto funcionamiento y visualización del sitio. Las cookies utilizadas en el sitio web tienen, en todo caso, carácter temporal con la única finalidad de hacer más eficaz su transmisión ulterior y desaparecen al terminar la sesión del usuario. En ningún caso se utilizarán las cookies para recoger información de carácter personal.
          </p>
          <br></br>
          <p>
            Desde el sitio web del cliente es posible que se redirija a contenidos de terceros sitios web. Dado que el prestador no puede controlar siempre los contenidos introducidos por los terceros en sus sitios web, éste no asume ningún tipo de responsabilidad respecto a dichos contenidos. En todo caso, el prestador manifiesta que procederá a la retirada inmediata de cualquier contenido que pudiera contravenir la legislación nacional o internacional, la moral o el orden público, procediendo a la retirada inmediata de la redirección a dicho sitio web, poniendo en conocimiento de las autoridades competentes el contenido en cuestión.
          </p>
          <br></br>
          <p>
            El prestador no se hace responsable de la información y contenidos almacenados, a título enunciativo, pero no limitativo, en foros, chat´s, generadores de blogs, comentarios, redes sociales o cualquier otro medio que permita a terceros publicar contenidos de forma independiente en la página web del prestador. No obstante, y en cumplimiento de lo dispuesto en el art. 11 y 16 de la LSSI-CE, el prestador se pone a disposición de todos los usuarios, autoridades y fuerzas de seguridad, y colaborando de forma activa en la retirada o en su caso bloqueo de todos aquellos contenidos que pudieran afectar o contravenir la legislación nacional, o internacional, derechos de terceros o la moral y el orden público. En caso de que el usuario considere que existe en el sitio web algún contenido que pudiera ser susceptible de esta clasificación, se ruega lo notifique de forma inmediata al administrador del sitio web.
          </p>
          <br></br>
          <p>
            Este sitio web ha sido revisado y probado para que funcione correctamente. En principio, puede garantizarse el correcto funcionamiento los 365 días del año, 24 horas al día. No obstante, el prestador no descarta la posibilidad de que existan ciertos errores de programación, o que acontezcan causas de fuerza mayor, catástrofes naturales, huelgas, o circunstancias semejantes que hagan imposible el acceso a la página web.
          </p>
          <br></br>
          <h3 className="font-bold text-lg mt-8">Protección de datos personales</h3>
          <br></br>
          <p>
            El prestador se encuentra profundamente comprometido con el cumplimiento de la normativa española de protección de datos de carácter personal, y garantiza el cumplimiento íntegro de las obligaciones dispuestas, así como la implementación de las medidas de seguridad dispuestas en el art. 9 de la Ley 15/1999, de Protección de Datos de Carácter Personal (LOPD) y en el Reglamento de Desarrollo de la LOPD.
          </p>
          <br></br>
          <p>
            El prestador pone a disposición de los usuarios la Política de Privacidad de la entidad informando a los usuarios respecto a los siguientes aspectos:
          </p>
          <br></br>

          <ul className="ml-10">
              <li type="disc">Datos del Responsable del tratamiento,</li>
              <li type="disc">Datos tratados,</li>
              <li type="disc">Fichero en el que se almacenan,</li>
              <li type="disc">Finalidad del tratamiento,</li>
              <li type="disc">Obligatoriedad o no de facilitarlos, así como las consecuencias en caso de no facilitarlos,</li>
              <li type="disc">Sobre los derechos que asisten a todo usuario y el procedimiento para ejercitarlos.</li>
            </ul>
          <br></br>
          <h3 className="font-bold text-lg mt-8">Propiedad intelectual e industrial</h3>
          <br></br>
          <p>
          El sitio web, incluyendo a título enunciativo, pero no limitativo su programación, edición, compilación y demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto y/o gráficos son propiedad del prestador o en su caso dispone de licencia o autorización expresa por parte de los autores. Todos los contenidos del sitio web se encuentran debidamente protegidos por la normativa de propiedad intelectual e industrial, así como inscritos en los registros públicos correspondientes.
          </p>
          <br></br>
          <p>
          Independientemente de la finalidad para la que fueran destinados, la reproducción total o parcial, uso, explotación, distribución y comercialización, requiere en todo caso de la autorización escrita previa por parte del prestador. Cualquier uso no autorizado previamente por parte del prestador será considerado un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor.
          </p>
          <br></br>
          <p>
          Los diseños, logotipos, texto y/o gráficos ajenos al prestador y que pudieran aparecer en el sitio web, pertenecen a sus respectivos propietarios, siendo ellos mismos responsables de cualquier posible controversia que pudiera suscitarse respecto a los mismos. En todo caso, el prestador cuenta con la autorización expresa y previa por parte de los mismos.
          </p>
          <br></br>
          <p>
          El prestador reconoce a favor de sus titulares los correspondientes derechos de propiedad industrial e intelectual, no implicando su sola mención o aparición en el sitio web la existencia de derechos o responsabilidad alguna del prestador sobre los mismos, como tampoco respaldo, patrocinio o recomendación por parte del mismo.El prestador reconoce a favor de sus titulares los correspondientes derechos de propiedad industrial e intelectual, no implicando su sola mención o aparición en el sitio web la existencia de derechos o responsabilidad alguna del prestador sobre los mismos, como tampoco respaldo, patrocinio o recomendación por parte del mismo.
          </p>
          <br></br>
          <p>
          Para realizar cualquier tipo de observación respecto a posibles incumplimientos de los derechos de propiedad intelectual o industrial, así como sobre cualquiera de los contenidos del sitio web, puede hacerlo a través del siguiente correo electrónico info [@] ndigitalsolutions.com
          </p>
          <br></br>
          <h3 className="font-bold text-lg mt-8">Ley aplicable y jurisdicción</h3>
          <br></br>
          <p>
          Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales de Valencia.
          </p>
                    <br></br>
        </div>
      </div>
    </div>
  );
};

export default AvisoLegal;
