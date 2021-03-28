import React from 'react';
import Benefit from './Benefit';

const benefits = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
  dolor sit amet, consectetur adipiscing elit.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
  dolor sit amet, consectetur adipiscing elit.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
  dolor sit amet, consectetur adipiscing elit.`,
];

const Benefits = () => {
  const benefitsList = benefits.map((benefit, index) => (
    <Benefit key={index} benefit={benefit} />
  ));
  return (
    <section className='text-center md:text-left'>
      <h2 className='text-2xl sm:text-3xl font-bold mb-10 md:mb-16 md:text-center'>
        Why would you care?
      </h2>
      {benefitsList}
    </section>
  );
};

export default Benefits;
