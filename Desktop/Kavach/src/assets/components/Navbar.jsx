import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../../styles';
import { navLinks } from '../../constants'
import { menu } from '..';
import { close } from '..';


const Navbar = () => {
    const [active, setAtive] = useState('');
    const [toggle, setToggle] = useState(false);
    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 bg-[#9a9a9a]`}>
            <div
                className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    to='/'
                    className='flex item-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}>
                    <p className='text-black text-[18px] font-bold cursor-pointer flex'>
                        ANRP &nbsp;
                        <span className='sm:block hidden'> | Baweja

                        </span>
                    </p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-12'>
                    {navLinks.map((Link) => (
                        <li
                            key={Link.id}
                            className={
                                `${active === Link.title ? "text-[#ffff00]" : 'text-black'}
                                font-poppins font-medium
                                hover:text-[#ffff00] text-[18px] cursor-pointer`
                            }
                            onClick={() => {
                                setToggle(!toggle);
                                setAtive(Link.title)
                            }}
                        >
                            <a href={
                                `#${Link.id}`}>{Link.title}</a>

                        </li>

                    ))}
                </ul>

            </div>

        </nav>
    )
}

export default Navbar