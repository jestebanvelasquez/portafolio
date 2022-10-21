import React from 'react';
import { Link } from 'react-scroll';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col bg-slate-400 bg-opacity-10 rounded-2xl p-5 hover:scale-110 duration-300 items-center text-center'>
      <div className=' h-fit  '>
        <a href={item.url} target={'_blank'} >

          <img className='rounded-2xl h-80 cursor-pointer object-contain ' src={item.image} alt='' />
        </a>
      </div>
      <p className='capitalize text-amber-500 text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='text-base text-justify max-w-md'>
        {item.description}
      </p>
    </div>
  );
};

export default Project;
