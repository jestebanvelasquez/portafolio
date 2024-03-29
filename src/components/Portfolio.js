import React from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-secondary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            Mis Proyectos
          </h2>
          <p className='subtitle'>
            Proyectos realizados de manera autonoma
          </p>
        </div>
        <div className='m-5'>

          <Projects />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
