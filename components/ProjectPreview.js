const ProjectPreview = ({ projectData }) => {
  const { title, description, thumbnailUrl, projectUrl } = projectData;
  return (
    <div className='project-preview'>
      <div
        className='thumbnail'
        style={{
          backgroundImage: `linear-gradient(
          108.13deg,
          rgba(247, 247, 247, 0.1) 0%,
          rgba(247, 247, 247, 0.6) 49.92%
        ), url(${thumbnailUrl})`,
        }}
      ></div>
      <div className='description'>
        <h3 className='text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 lg:mb-8'>
          <a href={projectUrl}>{title}</a>
        </h3>
        <p className='font-serif text-lg sm:text-xl lg:text-2xl font-light mb-4 sm:mb-5'>
          {description}
        </p>
        <a href={projectUrl} className='btn btn-sm btn-secondary'>
          хочу посмотреть
        </a>
      </div>
    </div>
  );
};

export default ProjectPreview;
