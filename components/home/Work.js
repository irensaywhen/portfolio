import ProjectPreview from './ProjectPreview';

const projects = [
  {
    title: 'Клуб айкидо "Сэйбукан"',
    description: `Редизайн сайта Питерского клуба айкидо, владельцем которого является
    единственный обладатель 8 дана айкидо в России.`,
    thumbnailUrl: '/images/seibukan-preview.png',
    projectUrl: 'https://www.seibukan-dojo.ru/',
  },
  {
    title: 'Delektorsky - neat logos, working brands',
    description: `Создание портфолио сайта графического дизайнера, занимающегося 
    лого дизайном и созданием фирменных стилей.`,
    thumbnailUrl: '/images/delestorsky-preview.png',
    projectUrl: 'http://delektorsky.tilda.ws/',
  },
  {
    title: 'Tarota.pl',
    description: `Лэндинг для нового польского сервиса гадания на Таро.`,
    thumbnailUrl: '/images/tarota-pl.png',
    projectUrl: 'tarota-pl-full.png',
  },
];

const Work = () => {
  const projectsList = projects.map((project, index) => (
    <ProjectPreview key={index} projectData={project} />
  ));
  return (
    <section className='home-projects py-10'>
      <h2 className='mb-4 sm:mb-6 md:mb-8 lg:px-3'>Мои проекты</h2>
      <div className='lg:flex flex-wrap'>{projectsList}</div>
    </section>
  );
};

export default Work;
