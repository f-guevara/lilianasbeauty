import React, {useState} from 'react';
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi';

const NavLinks = [
    {
        id: 1,
        name: "Inicio",
        link: "/#",
    },
    {
        id: 2,
        name: "Reservaciones",
        link: "/#reservaciones",
    },
    {
        id: 3,
        name: "Contacto",
        link: "/#contacto",
    }
]

const Navbar = ({theme, setTheme}) => {
    return (
        <nav className='shadow-sm bg-white dark:bg-dark
         dark:text-white duration-300'>
            <div className='container md:py-0'>
                <div className='flex justify-between items-center'>
                    <div className='py-4'>
                        <h1 className='text-3xl font-bold
                        font-serif'>Liliana's Salon</h1>
                    </div>
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-8'>
                            {NavLinks.map((data) => (
                             <li key={data.id}
                             className='py-4'>
                                <a className='py-2 hover:border-b-2
                                hover:text-primary hover:border-primary
                                transition-colors duration-500
                                text-lg font-medium'
                                href={data.link}>
                                    {data.name}
                                </a>
                             </li>   
                            ))
                            }
                        </ul>
                    </div>
                    <div className='py-4'>
                        {
                            theme == "dark"? (
                                <BiSolidSun
                                onClick={() => setTheme("light")} 
                                className='text-2xl'/>
                            ) : (
                                <BiSolidMoon
                                onClick={() => setTheme("dark")} 
                                className='text-2xl' />
                            )
                        }
                        
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar