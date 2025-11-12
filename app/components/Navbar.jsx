"use client";
import { useTheme } from "../components/ThemeProvider";
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'

const Navbar = () => {

    const [isScroll, setisScroll] = useState(false);
    const sideMenuRef = useRef();
    const [menuOpen, setMenuOpen] = useState(false);
    // taking out is darkmode
    const { isDarkMode, setIsDarkMode } = useTheme();

    const openMenu = () => {
        setMenuOpen(true);
        // Prevent body scroll when menu is open
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        setMenuOpen(false);
        // Restore body scroll when menu is closed
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setisScroll(true);
            } else {
                setisScroll(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt='' className={`w-full ${isDarkMode ? "hidden" : ""}`} />
            </div>
            
            <nav className={`w-full fixed px-5 sm:px-6 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
                ${isScroll ? `${isDarkMode ? "bg-[#11001F] shadow-white/20 text-white" : "bg-white/50 backdrop-blur-lg shadow-sm text-black"}` : ""}
                `}>

                <a href="#top">
                    <Image src={isDarkMode?assets.logo_dark:assets.logo} className='w-28 cursor-pointer mr-14 invisible ' alt=''></Image>
                </a>
                
                {/* Desktop menu */}
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
                ${isScroll ? "" : " bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent "}`}>
                    <li><a href="#top" className='font-Ovo hover:font-bold'>Home</a></li>
                    <li><a href="#about" className='font-Ovo hover:font-bold'>About</a></li>
                    <li><a href="#projects" className='font-Ovo hover:font-bold'>Tech-Stack</a></li>
                    <li><a href="#exp" className='font-Ovo hover:font-bold'>Work</a></li>
                    <li><a href="#contact" className='font-Ovo hover:font-bold'>Contact Me</a></li>
                </ul>
                
                <div className='flex items-center gap-3 md:gap-4 mr-2 sm:mr-0'>
                    <button onClick={() => setIsDarkMode(!isDarkMode)} className='p-2 flex items-center justify-center'>
                        <Image 
                            src={!isDarkMode ? assets.moon_icon : assets.sun_icon} 
                            alt='Theme toggle' 
                            className='w-6 h-6' 
                        />
                    </button>

                    <a href="#contact" className='font-Ovo hidden lg:flex items-center gap-3
                    px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50'>
                        Contact <Image src={isDarkMode?assets.arrow_icon_dark:assets.arrow_icon} alt='' className='w-3' />
                    </a>

                    <button 
                        className='block md:hidden p-2 flex items-center justify-center' 
                        onClick={openMenu}
                        aria-label="Open menu"
                    >
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='Menu' className='w-8 h-8' />
                    </button>
                </div>

                {/* Mobile menu overlay */}
                {menuOpen && (
                    <div 
                        className="fixed inset-0 bg-black/50 md:hidden z-40 transition-opacity duration-300"
                        onClick={closeMenu}
                    />
                )}

                {/* Mobile menu */}
                <ul 
                    ref={sideMenuRef} 
                    className={`fixed md:hidden flex flex-col gap-4 py-20 px-10 
                    right-0 top-0 bottom-0 w-64 h-screen transition-transform 
                    duration-500 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} z-50 
                    ${isDarkMode ? "bg-[#2a004a] text-white" : "bg-rose-50"} shadow-2xl`}
                >
                    <div className='absolute right-4 top-4 sm:right-6 sm:top-6' onClick={closeMenu}>
                        <button 
                            className='p-2 flex items-center justify-center' 
                            aria-label="Close menu"
                        >
                            <Image 
                                src={isDarkMode ? assets.close_white : assets.close_black} 
                                alt='Close' 
                                className='w-6 h-6 cursor-pointer' 
                            />
                        </button>
                    </div>
                    
                    <li><a href="#top" onClick={closeMenu} className='font-Ovo text-lg hover:font-bold py-2 block'>Home</a></li>
                    <li><a href="#about" onClick={closeMenu} className='font-Ovo text-lg hover:font-bold py-2 block'>About</a></li>
                    <li><a href="#projects" onClick={closeMenu} className='font-Ovo text-lg hover:font-bold py-2 block'>Tech-Stack</a></li>
                    <li><a href="#exp" onClick={closeMenu} className='font-Ovo text-lg hover:font-bold py-2 block'>Work</a></li>
                    <li><a href="#contact" onClick={closeMenu} className='font-Ovo text-lg hover:font-bold py-2 block'>Contact Me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;