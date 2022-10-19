import React, { useEffect, useState } from 'react';

// import components
import Logo from '../assets/img/logo.svg';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Socials from './Socials';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${bg ? 'bg-tertiary h-20' : 'h-24 bg-tertiary'
        } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className='container mx-auto h-full flex  items-center justify-between'>
        {/* logo */}
        <div className='flex flex-col items-center' >
          <a href='#'>
            {/* <img src={Logo} alt='' /> */}
            <h2>Esteban Velasquez</h2>
          </a>
          <p className='text-zinc-500 flex flex-col justify-center'>jestebanvelasquez22@gmail.com</p>
        </div>
        {/* nav */}
        <div className='hidden lg:block '>
          <Nav />
        </div>
        {/* Socials */}
        <div className='hidden lg:block'>
          <Socials />
        </div>
        {/* nav mobile*/}
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
