import classes from '../../styles/modules/about.module.scss';

const About = () => {
  return (
    <section className={[classes.about, 'py-10 lg:px-3'].join(' ')}>
      <h2 className='mb-4 sm:mb-6 md:mb-8 '>About me</h2>
      <p className='sm:w-3/4 md:w-1/2 font-serif'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </section>
  );
};

export default About;
