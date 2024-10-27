import React from "react";
import HistoryPng from "../assets/history.jpeg";

const About = () => {
  return (
    <>
    <span id="about"></span>
    <div className="p-4 md:p-0 dark:bg-dark dark:text-white bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={HistoryPng}
              alt="History of the salon"
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                Nuestra Historia
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Liliana Arriola, la fundadora, comenzó en 2017 ofreciendo
                servicios de manicura y pedicura clínica. Gracias a la creciente
                demanda, decidió alquilar un espacio más amplio y modernizar el
                salón por completo.
              </p>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Con una visión de ofrecer lo mejor a sus clientes, equipó su
                negocio con las últimas tecnologías y tendencias en el mercado
                de la belleza, brindando un ambiente cómodo y sofisticado para
                cada visitante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
