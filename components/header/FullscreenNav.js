import React, { useContext } from 'react';
import ActiveLink from '../ActiveLink';
import ReactTooltip from 'react-tooltip';
import { CopyEmailContext } from '../../context/copy-email';

const FullscreenNav = ({ isMenuOpen, handleCloseMenu }) => {
  const menuClasses = [
    'fullscreen-menu flex justify-center items-center z-40',
    isMenuOpen ? 'is-active' : null,
  ];

  const overlayClasses = [
    'fullscreen-menu-overlay cursor-pointer',
    isMenuOpen ? 'is-menu-open' : null,
  ];

  const copyEmailContext = useContext(CopyEmailContext);

  const reactTooltip = copyEmailContext.emailCopied ? (
    <ReactTooltip
      id='copyEmail'
      className='react-tooltip'
      place='bottom'
      afterHide={copyEmailContext.resetTooltipHandler}
      backgroundColor='#C1272D'
      textColor='#F7F7F7'
      effect='solid'
    >
      Email copied!
    </ReactTooltip>
  ) : (
    <ReactTooltip
      id='copyEmail'
      className='react-tooltip'
      place='bottom'
      backgroundColor='#2B2B2B'
      textColor='#F7F7F7'
      effect='solid'
    >
      Copy email
    </ReactTooltip>
  );
  return (
    <>
      {reactTooltip}
      <div className={overlayClasses.join(' ')} onClick={handleCloseMenu}></div>
      <div className={menuClasses.join(' ')}>
        <div
          className='fullscreen-menu__menu-btn text-2xl transition-all text-secondary-80 fixed top-4 right-4 hover:opacity-50 cursor-pointer'
          onClick={handleCloseMenu}
        >
          <div className='btn-line'></div>
          <div className='btn-line'></div>
        </div>
        <ul className='flex flex-col items-center justify-center'>
          <li className='pb-2'>
            <ActiveLink activeClassName='active' href='/'>
              <a className='btn btn-light text-2xl px-3'>what I do?</a>
            </ActiveLink>
          </li>
          <li className='pb-2'>
            <a
              href='https://irensays.blog/'
              className='btn btn-light px-3 text-2xl'
            >
              my blog
            </a>
          </li>
          <li>
            <button
              className='btn btn-default btn-light-social'
              data-tip
              data-for='copyEmail'
              onClick={() => copyEmailContext.copyEmailHandler()}
            >
              <i className='fas fa-envelope'></i>
            </button>
            <a
              href='https://github.com/irensaywhen'
              className='btn btn-default btn-light-social'
            >
              <i className='fab fa-github'></i>
            </a>
            <a
              href='https://twitter.com/IrenSayWhen'
              className='btn btn-sm btn-light-social'
            >
              <i className='fab fa-twitter'></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FullscreenNav;
