import React from "react";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const FooterLinks = [
  {
    title: "Inicio",
    link: "/#",
  },
  {
    title: "Reservaciones",
    link: "/#reservations",
  },
  {
    title: "Contacto",
    link: "/#contact",
  },
  {
    title: "Nuestra Historia",
    link: "/#about",
  },
  {
    title: " ¿Por qué elegirnos?",
    link: "/#services",
  },
  {
    title: "Ubicación",
    link: "/#ourlocation",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark dark:text-white">
      <section className="container">
        <div className="grid md:grid-cols-3 py-5 gap-6">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold mb-3 font-serif">Liliana Arriola Beauty Salon</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Haz tu cita con nosotros y disfruta de un servicio de belleza excepcional. Nuestra misión es cuidar de ti con los mejores productos y un ambiente relajante.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt />
              <p>edf. RH, calle los abetos local 3, San Salvador, El Salvador</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaPhone />
              <p>+503 2273-3177</p>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.instagram.com/liliana_arriola_" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="https://maps.app.goo.gl/ZmsxaKmfr5tHmXPy8" target="_blank" rel="noopener noreferrer">
                <FaMapMarkerAlt className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="https://wa.me/50376562398" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-2 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold mb-3">Enlaces Rápidos</h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li key={link.title} className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary text-gray-500 dark:text-gray-200">
                    <a href={link.link} className="flex items-center space-x-1">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
