import React, { useState } from 'react';

export const CopyEmailContext = React.createContext({
  emailCopied: false,
  resetTooltipHandler: () => {},
  copyEmailHandler: () => {},
});

const CopyEmailContextProvider = ({ children }) => {
  const [emailCopied, setIsEmailCopied] = useState(false);

  const resetTooltipHandler = () => setIsEmailCopied(false);

  const copyEmailHandler = () => {
    console.log('Sopying email');
    setIsEmailCopied(true);
    // As long as Clipborad API is not widely supported
    // I decided to use old approach which includes
    // creating an input element and calling document.execCommand function

    var dummy = document.createElement('input');

    document.body.appendChild(dummy);

    dummy.setAttribute('value', 'irensaywhen@gmail.com');
    dummy.select();

    document.execCommand('copy');

    document.body.removeChild(dummy);
  };

  return (
    <CopyEmailContext.Provider
      value={{
        emailCopied,
        resetTooltipHandler,
        copyEmailHandler,
      }}
    >
      {children}
    </CopyEmailContext.Provider>
  );
};

export default CopyEmailContextProvider;
