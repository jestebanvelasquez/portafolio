import React from 'react';
import { Link } from 'react-scroll';

const Project = ({ item }) => {
    return (

        <div key={item.id} className='  flex flex-col bg-zinc-100   rounded-xl  hover:scale-105 duration-300 items-center text-center mt-5'>

            <div className='p-2'>

                <a href={item.url} target={'_blank'} rel="noreferrer" className='p-4  ' >
                    <img className=' rounded-sm object-fill cursor-pointer  h-80   ' src={item.image} alt='logo' />
                </a>
            </div>
                <p className='capitalize text-amber-500 text-sm mt-10 mb-3'>{item.category}</p>
                <h3 className='text-2xl font-semibold text-zinc-800 capitalize mb-3'>{item.name}</h3>
                <p className='text-base text-justify max-w-md mb-5 p-5 text-zinc-700'>
                    {item.description}
                </p>
                <div className='flex-1'/>
                <div className=' bg-zinc-900 rounded-md w-72'>
                    <h3 className='mt-10 text-amber-500 font-medium text-xl  '>Tecnologias:</h3>

                    <div className='    flex  flex-wrap justify-center p-10 items-center gap-2'>
                        {
                            item.tecnology.map(el => (
                                <span className='text-justify p-2   text-zinc-100 rounded-sm'>{el}</span>
                            ))
                        }
                    </div>
                </div>
            <a
                href={item.url} target={'_blank'} rel="noreferrer"
                className='  text-lg font-medium mt-5  p-5 w-full rounded-md bg-slate-50 hover:bg-amber-500 text-zinc-800 hover:text-zinc-50 duration-300 ease-in-out '
            >
                Deploy
            </a>
        </div>
    );
};

export default Project;
