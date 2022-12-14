import React from 'react';

// import navigation data
import { navigation } from '../data';

// import Link
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className=''>
      <ul className='flex space-x-8  capitalize text-[15px]'>
        {navigation.map((item, idx) => {
          return (
            <li
              className='text-white hover:text-amber-400 cursor-pointer'
              key={idx}
            >
              <Link
                to={item.href}
                target="_blank"
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all text-amber-400 duration-300'
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
