import React from 'react';

const Hero = () => {
  return (
    <section className='hero min-h-screen flex flex-col justify-center'>
      <div className='h-100 lg:w-2/3 xl:w-1/2'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>
          I’m a web developer.<br></br> I help businesses get clients through
          evaluating their online presence.
        </h1>
        <div className='pt-8'>
          <p className='font-serif pb-2'>You don't have a website?</p>
          <button className='btn btn-default btn-primary'>
            Let's get you online
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
