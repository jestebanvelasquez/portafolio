import React from 'react';
import { Link } from 'react-scroll';

// import img
const Image = 'https://res.cloudinary.com/esteban3232/image/upload/v1666146667/eventApp/76CF1C2F-54F9-424B-8FA6-28DC572CAB8F_abvgf6.jpg';

const About = () => {
  return (
    <section className='section bg-secondary ' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
        <div  className=' shadow-lg shadow-zinc-800 w-full h-full rounded-3xl hover:scale-110 duration-300'>

          <img
            className='object-cover h-5/6 w-[500px]  md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
        </div>
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Esteban Velasquez
              </h2>
              <p className='mb-4 text-amber-400'>
                Desarrollador Full stack 
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              Full Stack Developer con formación como Diseñador Web. Experiencia trabajando en NodeJS, React, Redux, SQL, Prisma, entre otras tecnologías del sector. Con capacidad de trabajo en equipo, pensamiento creativo, comunicación e innovador. <br />
                <br />
                
              </p>
            </div>
            <div className=' items-center justify-center'>
              <h2 className='text-'>Contactame:</h2>
              <p className=''>Correo: jestebanvelasquez22@gmail.com</p> 
                
            </div>
            {/* <Link to='contact' className='btn btn-md bg-amber-400 hover:bg-amber-500 transition-all'>
              Contact me
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
