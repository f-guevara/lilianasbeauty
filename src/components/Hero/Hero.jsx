import React from 'react';
import haircutPic from '../../assets/haircut.png';
const Hero = () => {
  return (
    <div className='dark:bg-black dark:text-white
    duration-300'>
        <div className='container 
        min-h-[620px]'>
            <div className='grid place-items-center
            grid-cols-1 sm:grid-cols-2'>
                <div>
                    <img src={haircutPic} alt='
                    haircut picture' />
                </div>
                <div>
                    <div>
                        <p>Dejanos</p>
                        <h1>Consentirte</h1>
                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Hero;