import React from "react";
import haircutWoman from "../../assets/haircut.png";

const serviceList = [
  {
    name: "Corte de cabello para mujer",
    image: haircutWoman,
    aosDelay: "0",
  },
  {
    name: "Corte de cabello para hombre",
    image: haircutWoman,
    aosDelay: "500",
  },
  {
    name: "Limpieza facial",
    image: haircutWoman,
    aosDelay: "1000",
  },
  {
    name: "Pedicura",
    image: haircutWoman,
    aosDelay: "1500",
  },
];

const Reservations = () => {
  return (
    <div className="pb-24 dark:bg-dark dark:text-white">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Reserva tu Servicio
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          Selecciona uno de nuestros servicios y elige una fecha para tu cita.
        </p>
        
        {/* Service listing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
          {serviceList.map((service) => (
            <div
              key={service.name}
              data-aos="fade-up"
              data-aos-delay={service.aosDelay}
              className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
            >
              <div className="w-full h-[120px]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                />
              </div>
              <div className="space-y-2 text-center">
                <h1 className="text-primary font-semibold">{service.name}</h1>
                <a href="/calendar" className="text-blue-500 hover:underline">
                  Reservar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reservations;
