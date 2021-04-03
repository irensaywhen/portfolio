import Image from 'next/image';

const Logo = () => {
  return (
    <>
      <div className='hidden sm:block'>
        <Image src='/images/logo.svg' alt='logo' width={300} height={60} />
      </div>
      <div className='sm:hidden w-19 flex items-center justify-start'>
        <Image src='/images/logo_mark.svg' alt='logo' width={80} height={40} />
      </div>
    </>
  );
};

export default Logo;
