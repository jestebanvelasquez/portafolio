import React from 'react';

// import brands data
import { brands, skills } from '../data';

const Brands = () => {
  return (
    <section className='min-h-[146px] bg-zinc-800 flex items-center'>
      <div
        className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'
      >
         {skills.map((skill, index) => {
            return (
              <div
                className='flex items-center  justify-between'
                key={index}
              >
                <img className='lg:h-20 bg-inherit' src={skill.image} alt='' />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Brands;
