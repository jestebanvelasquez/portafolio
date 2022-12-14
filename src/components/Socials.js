import React from 'react';

// import icons
import { social } from '../data';

const Socials = () => {
  return (
    <ul className='flex space-x-6  '>
      {social.map((item, index) => {
        return (
          <li
            className='flex justify-center bg-zinc-800 rounded-full h-10 w-10 items-center text-amber-400'
            key={index}
          >
            <a className='text-base' href={item.href}>
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
