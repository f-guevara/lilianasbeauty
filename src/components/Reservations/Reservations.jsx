import React from "react";
import { Link } from 'react-router-dom';
import haircutWoman from "../../assets/haircut.png";

const serviceList = [
  {
    name: "Corte de cabello para mujer",
    image: haircutWoman,
    aosDelay: "0",
    code: 1, // Service code for referencing in the database
  },
  {
    name: "Corte de cabello para hombre",
    image: haircutWoman,
    aosDelay: "500",
    code: 2, // Service code
  },
  {
    name: "Limpieza facial",
    image: haircutWoman,
    aosDelay: "1000",
    code: 4, // Service code
  },
  {
    name: "Pedicura",
    image: haircutWoman,
    aosDelay: "1500",
    code: 3, // Service code
  },
];

const Reservations = () => {
  return (
    <>
      <span id="reservations"></span>
      <div className="pb-24 dark:bg-dark dark:text-white">
        <div className="container p-4 md:p-0">
          {/* Heading */}
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
          >
            Reserva tu Servicio
          </h1>
          <p data-aos="fade-up" data-aos-delay="400" className="text-sm pb-10">
            Selecciona uno de nuestros servicios y elige una fecha para tu cita.
          </p>

          {/* Service Listing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
            {serviceList.map((service) => (
              <div
                key={service.name}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[150px]">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h1 className="text-primary font-semibold">{service.name}</h1>
                  <Link to={`/reserve/${service.code}`} className="text-blue-500 hover:underline">
  Reservar
</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservations;

