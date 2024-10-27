import React, { useState } from 'react';
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi';
import { FiMenu, FiX } from 'react-icons/fi';

const NavLinks = [
    {
        id: 1,
        name: "Inicio",
        link: "/#inicio",
    },
    {
        id: 2,
        name: "Reservaciones",
        link: "/#reservations",
    },
    {
        id: 3,
        name: "Contacto",
        link: "/#contact",
    }
];

const Navbar = ({ theme, setTheme }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="shadow-sm bg-primary dark:bg-dark dark:text-white duration-300">
            <div className="container md:py-0 px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <h1 className="text-3xl font-bold font-serif">
                        Liliana's Salon
                    </h1>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {NavLinks.map((data) => (
                            <a
                                key={data.id}
                                href={data.link}
                                className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium"
                            >
                                {data.name}
                            </a>
                        ))}
                    </div>

                    {/* Day/Night Toggle */}
                    <div className="hidden md:block">
                        {theme === "dark" ? (
                            <BiSolidSun
                                onClick={() => setTheme("light")}
                                className="text-2xl cursor-pointer"
                            />
                        ) : (
                            <BiSolidMoon
                                onClick={() => setTheme("dark")}
                                className="text-2xl cursor-pointer"
                            />
                        )}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMobileMenu} className="text-2xl">
                            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden px-4 py-4 bg-white dark:bg-dark rounded-lg shadow-lg">
                        <ul className="flex flex-col items-center gap-4">
                            {NavLinks.map((data) => (
                                <li key={data.id} className="w-full text-center">
                                    <a
                                        href={data.link}
                                        onClick={toggleMobileMenu}
                                        className="text-lg font-medium hover:text-primary transition-colors duration-300 py-2"
                                    >
                                        {data.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                {theme === "dark" ? (
                                    <BiSolidSun
                                        onClick={() => {
                                            setTheme("light");
                                            toggleMobileMenu();
                                        }}
                                        className="text-2xl cursor-pointer"
                                    />
                                ) : (
                                    <BiSolidMoon
                                        onClick={() => {
                                            setTheme("dark");
                                            toggleMobileMenu();
                                        }}
                                        className="text-2xl cursor-pointer"
                                    />
                                )}
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
