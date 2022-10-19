import React from 'react';
import { Link } from 'react-scroll';

// import woman image
import me from '../assets/img/me.png';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-slate-50 lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-amber-500 text-md mb-[22px]'>
              Hola soy Esteban! 👋
            </p>
            <h1 className='text-4xl text-primary leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              Desarrollador <br /> Full Stack.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
            Con experiencia en creación y diseño de aplicaciones y paginas web. 

            </p>
            <a href='https://www.linkedin.com/in/esteban-velasquez-martinez/' target={'_blank'} className='btn btn-md bg-amber-400 hover:bg-amber-500 md:btn-lg transition-all'>
              Trabajar Conmigo
            </a>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img className='' src={me} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
