import React from 'react';

// import brands data
import { brands, skills } from '../data';

const Brands = () => {
  return (
    <section className='min-h-[146px] bg-zinc-800 flex items-center'>
      <div
        className='container mx-auto  flex justify-evenly items-center flex-wrap '
      >
         {skills.map((skill, index) => {
            return (
              <div
                className='m w-f   '
                key={index}
              >
                <img className='h-20 w-30 lg:h-20 bg-inherit' src={skill.image} alt='' />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Brands;
