import React, { useContext } from 'react';
import ReactTooltip from 'react-tooltip';
import { CopyEmailContext } from '../../context/copy-email';

const Nav = ({ handleOpenMenu }) => {
  const copyEmailContext = useContext(CopyEmailContext);

  const reactTooltip = copyEmailContext.emailCopied ? (
    <ReactTooltip
      id='copyEmailTip'
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
      id='copyEmailTip'
      place='bottom'
      className='copy-email-tooltip'
      backgroundColor='#2B2B2B'
      textColor='#F7F7F7'
      effect='solid'
    >
      Copy email
    </ReactTooltip>
  );

  return (
    <div className='menu w-12 sm:w-auto'>
      {reactTooltip}
      <ul className='menu-items hidden sm:flex justify-start items-center'>
        <li>
          <button
            className='btn btn-sm btn-light-social'
            data-tip
            data-for='copyEmailTip'
            onClick={() => copyEmailContext.copyEmailHandler()}
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
        <li className='pr-2'>
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
