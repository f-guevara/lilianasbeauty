import React from "react";
import { FaStar } from "react-icons/fa";
import { GiHairStrands } from "react-icons/gi";
import { FaMoneyBillWave } from "react-icons/fa";

const skillsData = [
  {
    name: "Experiencia",
    icon: (
      <FaStar className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    description:
      "Liliana cuenta con más de 10 años de experiencia en el sector, brindando servicios personalizados y de alta calidad a cada cliente.",
    aosDelay: "0",
  },
  {
    name: "Calidad",
    icon: (
      <GiHairStrands className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    description:
      "Utilizamos solo los mejores productos para garantizar resultados impecables, cuidando la salud y belleza de tu piel y cabello.",
    aosDelay: "500",
  },
  {
    name: "Precios Competitivos",
    icon: (
      <FaMoneyBillWave className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    description:
      "Ofrecemos precios accesibles sin comprometer la calidad de nuestros servicios, asegurando que cada cliente reciba la mejor relación calidad-precio.",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              ¿Por qué elegirnos?
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
