import React, { useState } from 'react';

// import contact data
import { contact } from '../data';


const Contact = () => {

    const [email, setEmail] = useState({
      name:'',
      email:'',
      subject:'',
      message:''
    })

    const handleChange = (e) =>{
          setEmail({
            ...email,
            [e.target.name]: e.target.value
          })
    }

    console.log(email);

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(email);
    }



  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
            Contactame
          </h2>
          <p className='subtitle'>
            Enviame un mensaje de correo electronico si tienes alguna pregunta, sugerencia o oferta laboral.
          </p>
        </div>
        <div
          className='flex flex-col lg:gap-x-8 lg:flex-row'
        >
          <div
            className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
          >
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='text-accent font-normal '>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            className='space-y-8 w-full max-w-[780px]'
          >
            <div className='flex gap-8'>
              <input onChange={(e)=> handleChange(e)} className='input' type='text' name='name' placeholder='Tú nombre' />
              <input onChange={(e)=> handleChange(e)} className='input' type='email' name='email' placeholder='Tú email' />
            </div>
            <input  onChange={(e)=> handleChange(e)} className='input' type='text' name='subject' placeholder='Subject' />
            <textarea 
              name='message'
              onChange={(e)=> handleChange(e)}
              className='textarea'
              placeholder='Tú mensaje'
            ></textarea>
            <button onChange={(e)=> handleSubmit(e)} className='btn btn-lg bg-accent hover:bg-secondary-hover'>
              enviar  mensage
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
