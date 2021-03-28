import React from 'react';
import Image from 'next/image';

const Benefit = ({ benefit }) => {
  return (
    <article className='benefit mb-12 md:mb-16 lg:mb-24'>
      <p className='w-full md:w-6/12 text-xl font-light font-serif p-4 md:pr-10 lg:pr-16'>
        {benefit}
      </p>
      <div className='w-full md:w-6/12'>
        <Image
          src='/images/benefit.jpg'
          alt='Benefit image'
          width={800}
          height={600}
        />
      </div>
    </article>
  );
};

export default Benefit;
