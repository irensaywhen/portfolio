import React from 'react';
import Benefit from './Benefit';

const benefits = [
  `Покажи, чем ты хорош.`,
  `Сделай то, что давно хотелось`,
  `Будь узнаваемым.`,
];

const Benefits = () => {
  const benefitsList = benefits.map((benefit, index) => (
    <Benefit key={index} benefit={benefit} />
  ));
  return (
    <section className='text-center md:text-left py-10'>
      <h2 className='mb-10 md:mb-16'>Зачем мне все это?</h2>
      {benefitsList}
    </section>
  );
};

export default Benefits;
