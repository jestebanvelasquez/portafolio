import React from 'react';
import { Link } from 'react-scroll';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8 h-fit  '>
        <a href={item.url} target={'_blank'} >
        {/* <a href={'http://localhost:3000'} target={'_blank'} > */}

          <img className='rounded-2xl h-80 cursor-pointer ' src={item.image} alt='' />
        </a>
      </div>
      <p className='capitalize text-amber-500 text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='text-base max-w-md'>
        {item.description}
      </p>
    </div>
  );
};

export default Project;
