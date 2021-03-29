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
    <section className='text-center md:text-left py-10'>
      <h2 className='mb-10 md:mb-16'>Why would you care?</h2>
      {benefitsList}
    </section>
  );
};

export default Benefits;
