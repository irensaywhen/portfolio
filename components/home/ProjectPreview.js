const ProjectPreview = ({ projectData }) => {
  const { title, description, thumbnailUrl, projectUrl } = projectData;
  return (
    <div className='project-preview py-4 relative sm:flex lg:w-1/2 lg:px-3'>
      <div
        className='thumbnail w-full sm:w-3/4'
        style={{
          backgroundImage: `radial-gradient(98.52% 298.94% at 1.48% 52.26%, rgba(247, 247, 247, 0) 0%, rgba(247, 247, 247, 0.5) 47.75%, rgba(247, 247, 247, 0.7) 100%), url(${thumbnailUrl})`,
        }}
      ></div>
      <div className='description p-3 sm:p-0 lg:p-3'>
        <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-2xl font-extrabold mb-4 sm:mb-6 lg:mb-8'>
          <a href={projectUrl}>{title}</a>
        </h3>
        <p className='font-serif text-lg sm:text-xl lg:text-lg font-light mb-4 sm:mb-5'>
          {description}
        </p>
        <div className='flex justify-start'>
          <a href={projectUrl} className='btn btn-sm btn-secondary mr-2'>
            хочу посмотреть
          </a>
          <button className='btn btn-sm btn-primary'>хочу такой же</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
