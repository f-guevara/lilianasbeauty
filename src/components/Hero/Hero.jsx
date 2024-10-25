import React from 'react';
import haircutPic from '../../assets/haircut.png';
import haircutPic2 from '../../assets/haircut-2.png'
const Hero = ({theme}) => {
  return (
    <div className='dark:bg-black dark:text-white
    duration-300 relative -z-20'>
        <div className='container 
        min-h-[620px] flex'>
            <div className='grid place-items-center
            grid-cols-1 sm:grid-cols-2'>
                <div className='order-1 sm:order-2'>
                    <img src={theme ==='dark' ?
                    haircutPic2 : haircutPic} alt='
                    haircut picture' 
                    className='relative -z-10 
                    max-h-[600px] sm:scale-125
                    '/>
                </div>
                <div className='order-2 sm:order-1
                space-y-5 sm:pr-32'>
                        <p className='text-primary text-4xl font-serif'>Dejanos</p>
                        <h1 className='text-5xl lg:text-7xl font-semibold font-serif'>Consentirte</h1>
                        <p>Descubre un mundo de atención personalizada 
                            y rejuvenecimiento. En nuestro salón creemos 
                            que cada cliente merece sentirse mimada, 
                            ya sea un peinado fresco, una limpieza 
                            facial, o una manicura perfecta. Reserva tu 
                            cita hoy y traigamos a flote 
                            la mejor versión de ti.</p>
                            <button className='btn bg-primary text-black
                            px-6 py-2 rounded-md hover:bg-primary/80 
                            duration-300'>Reservaciones</button>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Hero;