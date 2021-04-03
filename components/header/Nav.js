import ActiveLink from '../ActiveLink';
import ReactTooltip from 'react-tooltip';

const Nav = ({ handleOpenMenu }) => {
  return (
    <div className='menu w-12 lg:w-auto'>
      <ReactTooltip />
      <ul className='menu-items hidden lg:flex justify-start items-center'>
        <li className='pl-2'>
          <ActiveLink activeClassName='active' href='/'>
            <a className='btn btn-sm btn-light'>what I do?</a>
          </ActiveLink>
        </li>
        <li>
          <button
            className='btn btn-sm btn-light-social'
            data-tip='hello world'
          >
            <i className='fas fa-envelope'></i>
          </button>
        </li>
        <li>
          <a
            href='https://github.com/irensaywhen'
            className='btn btn-sm btn-light-social'
          >
            <i className='fab fa-github'></i>
          </a>
        </li>
        <li>
          <a
            href='https://twitter.com/IrenSayWhen'
            className='btn btn-sm btn-light-social'
          >
            <i className='fab fa-twitter'></i>
          </a>
        </li>
      </ul>
      <div className='menu-btn' onClick={handleOpenMenu}>
        <div className='btn-line'></div>
        <div className='btn-line'></div>
        <div className='btn-line'></div>
      </div>
    </div>
  );
};

export default Nav;
