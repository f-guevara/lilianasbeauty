import React from "react";
import { FaUserCircle } from "react-icons/fa";

const testimonialData = [
  {
    name: "Dilshad",
    description: "Un excelente servicio, muy profesional y amable.",
    aosDelay: "0",
  },
  {
    name: "Satya",
    description: "Increíble atención al cliente y resultados excepcionales.",
    aosDelay: "300",
  },
  {
    name: "Sabir",
    description: "Un ambiente relajante y un servicio de alta calidad.",
    aosDelay: "1000",
  },
];

const Testimonial = () => {
  return (
    <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
      <div className="container">
        {/* Header */}
        <div className="space-y-4 pb-12">
          <p
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl font-serif"
          >
            Lo Que Dicen Nuestros Clientes
          </p>
          <p data-aos="fade-up" className="text-center sm:px-44">
            Nuestra misión es brindar un servicio excepcional, y aquí tienes las experiencias de algunos de nuestros clientes satisfechos.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
          {testimonialData.map((testimonial) => (
            <div
              key={testimonial.name}
              data-aos="fade-up"
              data-aos-delay={testimonial.aosDelay}
              className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300 rounded-lg"
            >
              <div className="grid place-items-center">
                <FaUserCircle className="text-5xl text-primary dark:text-white" />
              </div>
              <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              <p>{testimonial.description}</p>
              <p className="text-center font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
