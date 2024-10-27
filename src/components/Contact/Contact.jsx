import React from "react";

const Contact = () => {
  return (
    <>
      <span id="contact"></span>
      <div data-aos="zoom-in" className="dark:bg-black dark:text-white py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6 rounded-lg">
            <div className="col-span-2 space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Haz tu cita ya
              </h1>
              <p className="text-gray-400">
                Al hacer tu cita con Liliana Arriola, garantizas una atención
                puntual y ahorras tiempo. Contamos con dos medios para contactarnos:
                llamada directa y WhatsApp. ¡Tú eliges!
              </p>
              <p className="text-gray-400">
                Llámanos al <strong>2273-3177</strong> <br />
                o <br />
                Escríbenos por WhatsApp al <strong>+503 7656-2398</strong>
              </p>
            </div>
            <div className="sm:grid sm:place-items-center">
              
              <a
                href="https://wa.me/50376562398"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold py-2 px-6 bg-green-500 text-white hover:bg-green-400 duration-200 tracking-widest uppercase rounded-lg"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
