import React, { useEffect } from 'react';
import haircutPic from '../../assets/haircut.png';
import haircutPic2 from '../../assets/haircut-2.png';
import AOS from 'aos';

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });

  return (
    <>
      <span id='home'></span>
      <div className='dark:bg-black dark:text-white duration-300 relative -z-20'>
        <div className='container min-h-[620px] flex'>
          {/* Hero Image */}
          <div className='grid place-items-center grid-cols-1 sm:grid-cols-2'>
            <div
              data-aos="zoom-in"
              data-aos-duration='1500'
              data-aos-once="false"
              className='order-1 sm:order-2'>
              <img
                src={theme === 'dark' ? haircutPic : haircutPic2}
                alt='haircut picture'
                className='relative -z-10 max-h-[600px] sm:scale-125'
              />
            </div>

            {/* Hero message */}
            <div className='order-2 sm:order-1 space-y-5 sm:pr-32'>
              <p
                data-aos='fade-up'
                className='text-primary text-4xl font-serif font-bold'>
                Dejanos
              </p>
              <h1
                data-aos='fade-up'
                data-aos-delay='600'
                className='text-5xl lg:text-7xl font-semibold font-serif'>
                Consentirte
              </h1>
              <p data-aos='fade-up' data-aos-delay='1000' className='mb-4'>
                Descubre un mundo de atención personalizada y rejuvenecimiento. En nuestro salón creemos que cada cliente merece sentirse mimada, ya sea un peinado fresco, una limpieza facial, o una manicura perfecta. Reserva tu cita hoy y traigamos a flote la mejor versión de ti.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
