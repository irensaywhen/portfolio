import React, { useContext } from 'react';
import ActiveLink from '../ActiveLink';
import ReactTooltip from 'react-tooltip';
import { CopyEmailContext } from '../../context/copy-email';

const Nav = ({ handleOpenMenu }) => {
  const copyEmailContext = useContext(CopyEmailContext);
  //  console.log(copyEmailContext);
  // const [emailCopied, setIsEmailCopied] = useState(false);

  // const resetTooltipHandler = () => setIsEmailCopied(false);

  // const copyEmailHandler = () => {
  //   setIsEmailCopied(true);
  //   // As long as Clipborad API is not widely supported
  //   // I decided to use old approach which includes
  //   // creating an input element and calling document.execCommand function
  //
  //   var dummy = document.createElement('input');
  //
  //   document.body.appendChild(dummy);
  //
  //   dummy.setAttribute('value', 'irensaywhen@gmail.com');
  //   dummy.select();
  //
  //   document.execCommand('copy');
  //
  //   document.body.removeChild(dummy);
  // };

  console.log(copyEmailContext);

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
    <div className='menu w-12 lg:w-auto'>
      {reactTooltip}
      <ul className='menu-items hidden lg:flex justify-start items-center'>
        <li className='pl-2'>
          <ActiveLink activeClassName='active' href='/'>
            <a className='btn btn-sm btn-light'>what I do?</a>
          </ActiveLink>
        </li>
        <li>
          <button
            className='btn btn-sm btn-light-social'
            data-tip
            data-for='copyEmailTip'
            onClick={() => {
              console.log('Copying email ');
              console.log(copyEmailContext);
              copyEmailContext.copyEmailHandler();
            }}
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
